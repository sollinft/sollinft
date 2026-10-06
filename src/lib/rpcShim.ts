/**
 * LaunchMyNFT embed — RPC endpoint shim.
 *
 * LaunchMyNFT's embed script (scriptslmt/0.1.3/solana.js) hardcodes its
 * mainnet RPC host `rahel-v0lqwp-fast-mainnet.helius-rpc.com`, which is
 * NXDOMAIN in public DNS (verified via DoH 2026-10-06; control host
 * mainnet.helius-rpc.com resolves fine). Every chain read fails —
 * "failed to get info about account <campaign>: Failed to fetch" — and the
 * mint button never activates.
 *
 * This shim rewrites that single dead host to a working RPC at the
 * fetch/WebSocket layer, before the embed module executes. No other
 * request is touched.
 *
 * RPC choice: publicnode is keyless and allows browser-origin JSON-RPC +
 * WebSocket (api.mainnet-beta.solana.com and ankr 403 browser traffic —
 * independently verified by mintasol's shim, same finding). Swap
 * LIVE_RPC_HOST for a dedicated RPC if the mint volume ever justifies it.
 *
 * Pattern credit: mintasol/mintasol assets/js/rpc-shim.js.
 */

const DEAD_RPC_HOST = "rahel-v0lqwp-fast-mainnet.helius-rpc.com";
export const LIVE_RPC_HOST = "solana-rpc.publicnode.com";

/** Rewrites any URL string pointing at the dead LMN RPC host. */
export function rewriteRpcUrl(url: string): string {
  return url.includes(DEAD_RPC_HOST) ? url.split(DEAD_RPC_HOST).join(LIVE_RPC_HOST) : url;
}

let installed = false;

/**
 * Patches window.fetch and window.WebSocket so every request the widget
 * makes to the dead host transparently lands on the live one.
 * Idempotent — safe under StrictMode double-invoke.
 */
export function installRpcShim(): void {
  if (installed) return;
  installed = true;

  const nativeFetch = window.fetch.bind(window);
  const patchedFetch = (async (
    input: RequestInfo | URL,
    init?: RequestInit,
  ): Promise<Response> => {
    try {
      if (typeof input === "string") {
        const rewritten = rewriteRpcUrl(input);
        if (rewritten !== input) input = rewritten;
      } else if (input instanceof Request) {
        const rewritten = rewriteRpcUrl(input.url);
        if (rewritten !== input.url) input = new Request(rewritten, input);
      }
    } catch {
      /* never break the caller */
    }
    return nativeFetch(input, init);
  }) as typeof window.fetch;
  window.fetch = patchedFetch;

  const NativeWebSocket = window.WebSocket;
  class PatchedWebSocket extends NativeWebSocket {
    constructor(url: string | URL, protocols?: string | string[]) {
      super(rewriteRpcUrl(String(url)), protocols);
    }
  }
  // Static constants (CONNECTING / OPEN / CLOSING / CLOSED) are inherited
  // from NativeWebSocket via the class hierarchy — do NOT copy them onto the
  // subclass: they are read-only own properties and assignment throws.
  window.WebSocket = PatchedWebSocket as typeof WebSocket;
}
