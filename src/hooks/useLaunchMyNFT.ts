import { useEffect } from "react";
import { LAUNCHMYNFT } from "../lib/constants";
import { track } from "../lib/analytics";

declare global {
  interface Window {
    ownerId?: string;
    collectionId?: string;
  }
}

/**
 * Mounts the LaunchMyNFT mint widget.
 *
 * The official integration asks you to paste two <script> tags plus
 * window.ownerId / window.collectionId in the page head. In a React SPA the
 * #mint-button-container / #mint-counter divs only exist after hydration, so
 * we inject the same snippet at runtime instead — after render, before the
 * module script executes. Functionally identical to the snippet:
 *
 *   <script>window.ownerId="…"; window.collectionId="…"</script>
 *   <script type="module" src="…/solana.js"></script>
 *   <link rel="stylesheet" href="…/solana.css">
 *
 * Guards make this idempotent (React StrictMode double-invokes effects in
 * dev), and the script is intentionally never removed on unmount so the
 * widget stays mounted for the page lifetime.
 */
export function useLaunchMyNFT(): void {
  useEffect(() => {
    window.ownerId = LAUNCHMYNFT.ownerId;
    window.collectionId = LAUNCHMYNFT.collectionId;

    if (!document.getElementById("lmn-css")) {
      const link = document.createElement("link");
      link.id = "lmn-css";
      link.rel = "stylesheet";
      link.href = LAUNCHMYNFT.cssUrl;
      document.head.appendChild(link);
    }

    if (!document.querySelector(`script[src="${LAUNCHMYNFT.scriptUrl}"]`)) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = LAUNCHMYNFT.scriptUrl;
      document.body.appendChild(script);
    }

    track("mint_widget_mounted", { collectionId: LAUNCHMYNFT.collectionId });
  }, []);
}
