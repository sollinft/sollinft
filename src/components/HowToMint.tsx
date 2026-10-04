import { Wallet, MousePointerClick, CheckCircle2 } from "lucide-react";
import { MINT_CONFIG } from "../lib/constants";
import { formatSol } from "../lib/utils";

const steps = [
  {
    icon: Wallet,
    title: "Connect your wallet",
    body: `Click the mint button and connect Phantom, Solflare, Backpack or Glow. You'll need at least ${formatSol(MINT_CONFIG.priceSol)} plus gas.`,
  },
  {
    icon: MousePointerClick,
    title: "Pick your amount",
    body: `Mint up to ${MINT_CONFIG.maxPerWallet} Sollins per transaction. Quantity and total price update inside the widget.`,
  },
  {
    icon: CheckCircle2,
    title: "Approve & receive",
    body: "Approve the transaction. Your Sollin lands in your wallet instantly — metadata is already pinned.",
  },
];

export function HowToMint() {
  return (
    <ol className="space-y-5">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sol-green/30 bg-sol-green/10 text-sol-green">
              <step.icon className="h-5 w-5" />
            </div>
            {i < steps.length - 1 ? <div className="mt-2 h-full w-px bg-white/10" /> : null}
          </div>
          <div className="pb-2">
            <p className="text-sm font-semibold text-white">
              <span className="mr-2 font-mono text-xs text-slate-500">0{i + 1}</span>
              {step.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
