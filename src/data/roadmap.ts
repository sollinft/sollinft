import type { RoadmapPhase } from "../types";

export const roadmap: RoadmapPhase[] = [
  {
    quarter: "Q4 2026",
    title: "Genesis Mint",
    description: "The souls come online.",
    items: [
      "Public mint via LaunchMyNFT — Oct 31, 17:00 UTC",
      "Instant reveal + rarity explorer",
      "Holder-verified Discord with faction roles",
    ],
    state: "active",
  },
  {
    quarter: "Q1 2027",
    title: "The Vault",
    description: "Staking goes live.",
    items: [
      "Stake Sollins, earn $SOUL points",
      "Vault leaderboards with epoch rewards",
      "Snapshot taken for founder allowlist",
    ],
    state: "next",
  },
  {
    quarter: "Q2 2027",
    title: "SollinDAO",
    description: "The collection votes.",
    items: [
      "$SOUL-weighted governance goes live",
      "Community treasury with quarterly grants",
      "Vote on Genesis II traits and themes",
    ],
    state: "next",
  },
  {
    quarter: "Q3 2027",
    title: "Signal broadcast",
    description: "Art leaves the chain.",
    items: [
      "Physical prints for top 333 holders",
      "Merch drop designed with the community",
      "IRL meetup — city voted by DAO",
    ],
    state: "next",
  },
  {
    quarter: "Q4 2027",
    title: "Genesis II",
    description: "A new generation awakens.",
    items: [
      "Second collection, holder-only mint window",
      "Breeding: two Sollins forge one Genesis",
      "Lore expansion — the Wraith arc",
    ],
    state: "next",
  },
];
