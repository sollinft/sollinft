import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}

/** Consistent section header: mono eyebrow, display title, muted subtitle. */
export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={cn("mb-12 md:mb-16", centered ? "text-center" : "text-left")}>
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-sol-green">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">{title}</h2>
      {subtitle ? (
        <p className={cn("mt-4 max-w-2xl text-base text-slate-400 md:text-lg", centered && "mx-auto")}>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
