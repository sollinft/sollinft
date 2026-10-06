import { useEffect } from "react";
import { LAUNCHMYNFT } from "../lib/constants";
import { track } from "../lib/analytics";
import { installRpcShim } from "../lib/rpcShim";

declare global {
  interface Window {
    ownerId?: string;
    collectionId?: string;
  }
}

/**
 * currencyMint patch — required for "Core"-version LaunchMyNFT campaigns.
 *
 * The vanilla 0.1.3 widget builds the mint instruction without the
 * `currencyMint` argument the Core campaign program expects, so instruction
 * preflight fails and the mint button never enables after wallet connect.
 * This is the same client-side hot-patch used by soltrades.xyz, but hardened:
 *
 *  1. Regex instead of literal minified names (LMN's `fe`/`ye`/`ue` churn
 *     between builds — a literal patch silently misses).
 *  2. If the pattern matches 0 sites, we warn and load the official script
 *     unpatched rather than injecting a no-op blob.
 *  3. If the fetch itself fails, we fall back to the plain official script.
 *
 * What the patch changes — and only this:
 *   buyerPaymentTokenWallet:<var>,referredBy:null
 * → buyerPaymentTokenWallet:<var>,currencyMint:s.currency||null,referredBy:null
 *
 * `s` is the bundle's own campaign-config object in that scope (verified
 * against the shipped 0.1.3 bundle — `s.currency` is read a few lines later
 * for the fundReceivers remainingAccounts). For SOL-only campaigns
 * `s.currency` is null and the program takes its default SOL path. No
 * destination addresses, amounts or authorities are touched.
 */
const CURRENCY_MINT_PATCH =
  /(buyerPaymentTokenWallet:[a-zA-Z_$][\w$]*),referredBy:null/g;

/** Module-level latch: the widget script must load exactly once. */
let loadStarted = false;

async function injectWidget(): Promise<void> {
  const appendScript = (src: string, revoke = false): void => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = src;
    script.dataset.lmn = "true";
    if (revoke) {
      script.onload = () => URL.revokeObjectURL(src);
    }
    document.body.appendChild(script);
  };

  try {
    const response = await fetch(LAUNCHMYNFT.scriptUrl, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    let code: string = await response.text();
    let hits = 0;
    code = code.replace(CURRENCY_MINT_PATCH, (_match, wallet: string) => {
      hits += 1;
      return `${wallet},currencyMint:s.currency||null,referredBy:null`;
    });

    if (hits === 0) {
      // LMN changed their bundle shape — don't ship a dead patch.
      console.warn(
        "[lmn] currencyMint patch matched 0 sites; loading official widget unpatched",
      );
      track("lmn_patch_miss");
      appendScript(LAUNCHMYNFT.scriptUrl);
      return;
    }

    track("lmn_patch_applied", { sites: hits });
    const blobUrl = URL.createObjectURL(
      new Blob([code], { type: "text/javascript" }),
    );
    appendScript(blobUrl, true);
  } catch (error) {
    console.error("[lmn] patched load failed; falling back to official script", error);
    track("lmn_patch_fallback");
    appendScript(LAUNCHMYNFT.scriptUrl);
  }
}

/**
 * Mounts the LaunchMyNFT mint widget (patched — see above).
 *
 * The official integration asks for two <script> tags plus
 * window.ownerId / window.collectionId in the page head. In a React SPA the
 * #mint-button-container / #mint-counter divs only exist after hydration, so
 * we inject at runtime — after render, before the module script executes.
 *
 * Idempotent under React StrictMode's double-invoked effects: the latch is
 * synchronous, and a `data-lmn` DOM check covers hot reloads. The script is
 * intentionally never removed on unmount — the widget lives for the page
 * lifetime.
 */
export function useLaunchMyNFT(): void {
  useEffect(() => {
    // MUST run before the widget script executes: the 0.1.3 bundle hardcodes
    // a dead RPC host (see lib/rpcShim.ts) — every fetch/WebSocket it makes
    // gets transparently rewritten to the live endpoint.
    installRpcShim();
    track("rpc_shim_installed");

    window.ownerId = LAUNCHMYNFT.ownerId;
    window.collectionId = LAUNCHMYNFT.collectionId;

    if (!document.getElementById("lmn-css")) {
      const link = document.createElement("link");
      link.id = "lmn-css";
      link.rel = "stylesheet";
      link.href = LAUNCHMYNFT.cssUrl;
      document.head.appendChild(link);
    }

    const alreadyMounted =
      loadStarted || document.querySelector("script[data-lmn]") !== null;
    if (alreadyMounted) return;
    loadStarted = true;

    void injectWidget();
    track("mint_widget_mounted", { collectionId: LAUNCHMYNFT.collectionId });
  }, []);
}
