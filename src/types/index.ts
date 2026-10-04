export interface NftItem {
  id: number;
  name: string;
  image: string;
  rarity: string;
  traits: Array<{ name: string; value: string }>;
}

export type RoadmapState = "done" | "active" | "next";

export interface RoadmapPhase {
  quarter: string;
  title: string;
  description: string;
  items: string[];
  state: RoadmapState;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface TeamMember {
  handle: string;
  role: string;
  bio: string;
  gradient: string;
  initials: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface BuiltWithEntry {
  name: string;
  role: string;
}
