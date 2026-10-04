import { Zap, ShieldCheck, Layers, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Reveal } from "./ui/Reveal";

interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Instant settlement",
    body: "Solana finality means your Sollin is yours in under two seconds. Mint to marketplace in one breath.",
  },
  {
    icon: ShieldCheck,
    title: "Audited mint program",
    body: "The LaunchMyNFT campaign runs on battle-tested infrastructure. Funds go straight to the vault address — no middleman wallet.",
  },
  {
    icon: Layers,
    title: "180+ trait combinations",
    body: "12 factions, 4 aura tiers, backgrounds layered by generation depth. Rarity is earned by the algorithm, not the allocation list.",
  },
  {
    icon: Rocket,
    title: "Instant reveal",
    body: "Metadata is pinned before the first mint. What you buy is what you keep — no reveal-delay theater.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The collection"
          title={
            <>
              Built for the <span className="gradient-text">long chain</span>
            </>
          }
          subtitle="SollinFT isn't a flip. It's a world with a lore arc, a DAO, and art that was finished before the mint was announced."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <Card className="group h-full transition duration-300 hover:border-sol-purple/40 hover:shadow-[0_0_40px_rgba(153,69,255,0.15)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sol-purple/25 to-sol-green/20 text-sol-green">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-400">{feature.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
