import type { BuiltWithEntry } from "../types";

/**
 * Honest "technology" strip — these are tools the project actually uses,
 * not fake partner logos.
 */
export const builtWith: BuiltWithEntry[] = [
  { name: "Solana", role: "Settlement layer" },
  { name: "LaunchMyNFT", role: "Mint infrastructure" },
  { name: "Phantom", role: "Wallet support" },
  { name: "Helius", role: "RPC & webhooks" },
];
