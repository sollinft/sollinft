import { CheckCircle2, Loader, Circle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { roadmap } from "../data/roadmap";
import type { RoadmapState } from "../types";
import { cn } from "../lib/utils";

const stateStyles: Record<
  RoadmapState,
  { icon: LucideIcon; ring: string; badge: string; label: string }
> = {
  done: {
    icon: CheckCircle2,
    ring: "border-sol-green/50",
    badge: "border-sol-green/40 bg-sol-green/10 text-sol-green",
    label: "Shipped",
  },
  active: {
    icon: Loader,
    ring: "border-sol-purple/60 animate-pulse-glow",
    badge: "border-sol-purple/40 bg-sol-purple/15 text-fuchsia-300",
    label: "In progress",
  },
  next: {
    icon: Circle,
    ring: "border-white/10",
    badge: "border-white/15 bg-white/5 text-slate-400",
    label: "Upcoming",
  },
};

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Roadmap"
          title={
            <>
              The <span className="gradient-text">signal path</span>
            </>
          }
          subtitle="Four quarters, one arc. Everything here is funded by the mint — no external promises required."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-sol-green/60 via-sol-purple/40 to-transparent md:left-1/2"
          />

          <div className="space-y-12">
            {roadmap.map((phase, i) => {
              const style = stateStyles[phase.state];
              const Icon = style.icon;
              const leftSide = i % 2 === 0;

              return (
                <Reveal key={phase.quarter} delay={0.05 * i}>
                  <div
                    className={cn(
                      "relative flex flex-col gap-4 pl-14 md:w-1/2 md:pl-0",
                      leftSide ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14",
                    )}
                  >
                    <div
                      aria-hidden="true"
                      className={cn(
                        "absolute top-1 flex h-10 w-10 items-center justify-center rounded-full border bg-ink-900 md:top-0",
                        style.ring,
                        leftSide
                          ? "left-0 md:left-auto md:-right-5"
                          : "left-0 md:-left-5",
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4",
                          phase.state === "done" && "text-sol-green",
                          phase.state === "active" && "text-sol-purple",
                          phase.state === "next" && "text-slate-500",
                        )}
                      />
                    </div>

                    <div
                      className={cn(
                        "glass rounded-2xl p-6 transition duration-300 hover:border-white/20",
                        phase.state === "active" && "border-sol-purple/30",
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center gap-3",
                          leftSide && "md:flex-row-reverse",
                        )}
                      >
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
                          {phase.quarter}
                        </span>
                        <span
                          className={cn(
                            "rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em]",
                            style.badge,
                          )}
                        >
                          {style.label}
                        </span>
                      </div>
                      <h3 className="mt-3 text-xl font-semibold text-white">{phase.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{phase.description}</p>
                      <ul
                        className={cn(
                          "mt-4 space-y-2 text-sm text-slate-400",
                          leftSide && "md:text-right",
                        )}
                      >
                        {phase.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
