import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

const tones = {
  green: "border-sol-green/30 bg-sol-green/10 text-sol-green",
  purple: "border-sol-purple/40 bg-sol-purple/15 text-fuchsia-300",
  slate: "border-white/15 bg-white/5 text-slate-300",
} as const;

/** Small pill label. */
export function Badge({
  tone = "slate",
  className,
  children,
}: {
  tone?: keyof typeof tones;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
