import { useCallback, useEffect, useMemo, useState } from "react";

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  /** True once the target timestamp is in the past. */
  live: boolean;
}

/** Ticking countdown towards an ISO timestamp. Re-renders once per second. */
export function useCountdown(isoDate: string): Countdown {
  const target = useMemo(() => new Date(isoDate).getTime(), [isoDate]);

  const calc = useCallback((): Countdown => {
    const diff = Math.max(0, target - Date.now());
    return {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor(diff / 3_600_000) % 24,
      minutes: Math.floor(diff / 60_000) % 60,
      seconds: Math.floor(diff / 1_000) % 60,
      live: diff <= 0,
    };
  }, [target]);

  const [time, setTime] = useState<Countdown>(calc);

  useEffect(() => {
    const id = window.setInterval(() => setTime(calc()), 1000);
    return () => window.clearInterval(id);
  }, [calc]);

  return time;
}
