import { Clock, Gem, Users, Flame } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Countdown } from "./Countdown";
import { MintWidget } from "./MintWidget";
import { HowToMint } from "./HowToMint";
import { MINT_CONFIG } from "../lib/constants";
import { cn, formatSol } from "../lib/utils";

function DetailRow({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 py-3 last:border-0">
      <span className="flex items-center gap-2.5 text-sm text-slate-400">
        <Icon className="h-4 w-4 text-sol-green" />
        {label}
      </span>
      <span className="font-mono text-sm font-semibold text-white">{value}</span>
    </div>
  );
}

export function MintSection() {
  const progress = Math.min(100, (MINT_CONFIG.minted / MINT_CONFIG.supply) * 100);

  return (
    <section id="mint" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-sol-purple/15 blur-[160px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Public mint"
          title={
            <>
              Claim your <span className="gradient-text">soul</span>
            </>
          }
          subtitle="The widget below is live LaunchMyNFT infrastructure — connect, pick a quantity, sign. That's the whole ceremony."
        />

        <Reveal className="mb-12">
          <Countdown />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Sale details */}
          <Reveal delay={0.05}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Sale details</h3>
                <Badge tone={MINT_CONFIG.status === "live" ? "green" : "purple"}>
                  <Flame className="h-3 w-3" />
                  {MINT_CONFIG.status === "live" ? "Live now" : "Opening Oct 31"}
                </Badge>
              </div>

              <div className="mt-4">
                <DetailRow icon={Gem} label="Price" value={formatSol(MINT_CONFIG.priceSol)} />
                <DetailRow icon={Users} label="Per wallet" value={`Max ${MINT_CONFIG.maxPerWallet}`} />
                <DetailRow icon={Clock} label="Date" value={MINT_CONFIG.dateLabel} />
                <DetailRow
                  icon={Gem}
                  label="Supply"
                  value={`${MINT_CONFIG.supply.toLocaleString()} total`}
                />
              </div>

              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between font-mono text-xs text-slate-400">
                  <span className="uppercase tracking-[0.2em]">Minted</span>
                  <span className="tabular-nums text-slate-300">
                    {MINT_CONFIG.minted.toLocaleString()} / {MINT_CONFIG.supply.toLocaleString()}
                  </span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={cn(
                      "h-full rounded-full bg-gradient-to-r from-sol-purple to-sol-green transition-all duration-700",
                      progress > 0 && "animate-shimmer bg-[length:200%_100%]",
                    )}
                    style={{
                      width: `${progress}%`,
                      backgroundImage:
                        "linear-gradient(90deg, #9945FF, #14F195, #9945FF, #14F195)",
                    }}
                  />
                </div>
                {/* PLACEHOLDER progress figure — the widget's #mint-counter is the
                    authoritative live count. See src/lib/constants.ts. */}
              </div>
            </Card>
          </Reveal>

          {/* Live widget */}
          <Reveal delay={0.12}>
            <Card className="flex h-full flex-col justify-center">
              <h3 className="mb-6 text-center text-lg font-semibold text-white">
                Mint your Sollin
              </h3>
              <MintWidget />
              <p className="mt-6 text-center font-mono text-xs leading-relaxed text-slate-500">
                Secured by LaunchMyNFT · Solana mainnet
                <br />
                Phantom · Solflare · Backpack · Glow
              </p>
            </Card>
          </Reveal>
        </div>

        {/* How it works */}
        <Reveal delay={0.1} className="mt-16">
          <div className="glass rounded-2xl p-8 md:p-10">
            <h3 className="mb-8 text-center text-xl font-semibold text-white">
              How minting works
            </h3>
            <div className="mx-auto max-w-3xl">
              <HowToMint />
            </div>
            <div className="mt-8 text-center">
              <Button href="#faq" variant="ghost">
                Read the FAQ
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
