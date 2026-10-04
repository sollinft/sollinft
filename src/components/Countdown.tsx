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

/** Live countdown to the public mint. */
export function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE_ISO);

  return (
    <div className="flex justify-center gap-3" role="timer" aria-label="Countdown to public mint">
      <Unit value={pad2(days)} label="days" />
      <Unit value={pad2(hours)} label="hrs" />
      <Unit value={pad2(minutes)} label="min" />
      <Unit value={pad2(seconds)} label="sec" />
    </div>
  );
}
