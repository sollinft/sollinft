import { Sparkles } from "lucide-react";

const items = [
  "3,333 UNIQUE NFTS",
  "MINTING OCT 31",
  "ON SOLANA",
  "POWERED BY LAUNCHMYNFT",
  "0.33 SOL",
  "INSTANT REVEAL",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-slate-400"
        >
          {item}
          <Sparkles className="h-3.5 w-3.5 text-sol-green" />
        </span>
      ))}
    </div>
  );
}

/** Infinite marquee strip. Two identical rows + translateX(-50%) = seamless loop. */
export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink-900/60 py-5">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row />
      </div>
    </div>
  );
}
