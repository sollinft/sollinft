import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { heroStats } from "../data/stats";
import { MINT_CONFIG, SITE } from "../lib/constants";

const floatingCards = [
  { src: "./nft/sollinft-1.svg", className: "right-[6%] top-[24%] rotate-6", delay: "0s" },
  { src: "./nft/sollinft-5.svg", className: "right-[20%] top-[46%] -rotate-3", delay: "1.4s" },
  { src: "./nft/sollinft-11.svg", className: "right-[8%] top-[66%] rotate-3", delay: "2.6s" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Ambient gradient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-sol-purple/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-sol-green/15 blur-[140px]"
      />
      <ParticleBackground />

      {/* Floating NFT previews (desktop only) */}
      {floatingCards.map((card) => (
        <motion.img
          key={card.src}
          src={card.src}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className={`absolute hidden h-48 w-48 rounded-2xl border border-white/15 shadow-2xl shadow-sol-purple/20 animate-float xl:block ${card.className}`}
          style={{ animationDelay: card.delay }}
        />
      ))}

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <Badge tone="green">
            <Sparkles className="h-3.5 w-3.5" />
            Minting {MINT_CONFIG.dateLabel}
          </Badge>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
            3,333 souls
            <br />
            <span className="gradient-text">forged on Solana</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            {SITE.name} is a generative collection where every trait — faction, aura, background —
            tells a piece of the Wraith arc. No roadmap promises. Just art, lore, and a community
            that ships.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#mint">
              Mint yours <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#gallery" variant="ghost">
              View gallery
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-xl font-bold text-white md:text-2xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
