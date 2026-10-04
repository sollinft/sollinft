/**
 * Single source of truth for site copy and the mint configuration.
 * Everything the landing page renders is derived from this file —
 * edit here, not inside components.
 */

export const SITE = {
  name: "SollinFT",
  url: "https://sollinft.xyz",
  tagline: "3,333 souls forged on Solana",
  description:
    "SollinFT is a generative collection of 3,333 souls living on Solana. Mint yours on October 31 — powered by LaunchMyNFT.",
  twitter: "@sollinft",
  email: "support@sollinft.xyz",
} as const;

export const MINT_CONFIG = {
  /** Public mint price in SOL. */
  priceSol: 0.33,
  /** Total collection supply. */
  supply: 3333,
  /**
   * PLACEHOLDER: display-only progress figure until the widget counter is
   * wired into the progress bar. The authoritative live counter is rendered
   * by the LaunchMyNFT widget itself (#mint-counter).
   */
  minted: 2147,
  /** Per-wallet mint cap enforced by the LaunchMyNFT campaign. */
  maxPerWallet: 3,
  /** "soon" hides the widget CTA urgency state, "live" enables it. */
  status: "soon" as "soon" | "live",
  /** Human-readable mint date shown in cards and hero. */
  dateLabel: "Oct 31, 2026 · 17:00 UTC",
} as const;

/** ISO countdown target — keep in sync with the LaunchMyNFT campaign start. */
export const LAUNCH_DATE_ISO = "2026-10-31T17:00:00Z";

/**
 * LaunchMyNFT embed configuration.
 * These are the exact values from the LaunchMyNFT dashboard snippet —
 * they are injected at runtime by `useLaunchMyNFT` (see hooks/useLaunchMyNFT.ts).
 */
export const LAUNCHMYNFT = {
  scriptUrl: "https://storage.googleapis.com/scriptslmt/0.1.3/solana.js",
  cssUrl: "https://storage.googleapis.com/scriptslmt/0.1.3/solana.css",
  ownerId: "8k6ZfLbKNKPW8MZyYddtpaySxhf29jV4HAjk9gpu1Mt4",
  collectionId: "84jFl47WfjEObzvx4Tzv",
} as const;
