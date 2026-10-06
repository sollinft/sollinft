import { useCountdown } from "../hooks/useCountdown";
import { pad2 } from "../lib/utils";
import { LAUNCH_DATE_ISO } from "../lib/constants";

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass flex min-w-[76px] flex-col items-center rounded-xl px-3 py-4">
      <span className="font-mono text-2xl font-semibold tabular-nums text-white md:text-3xl">
        {value}
      </span>
      <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
        {label}
      </span>
    </div>
  );
}

/** Live countdown to the public mint — switches to a LIVE chip once started. */
export function Countdown() {
  const { days, hours, minutes, seconds, live } = useCountdown(LAUNCH_DATE_ISO);

  if (live) {
    return (
      <div className="flex justify-center">
        <span className="animate-pulse-glow inline-flex items-center gap-2 rounded-full border border-sol-green/40 bg-sol-green/10 px-6 py-3 font-mono text-sm uppercase tracking-[0.25em] text-sol-green">
          <span className="h-2 w-2 animate-pulse rounded-full bg-sol-green" />
          Mint is live
        </span>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-3" role="timer" aria-label="Countdown to public mint">
      <Unit value={pad2(days)} label="days" />
      <Unit value={pad2(hours)} label="hrs" />
      <Unit value={pad2(minutes)} label="min" />
      <Unit value={pad2(seconds)} label="sec" />
    </div>
  );
}
