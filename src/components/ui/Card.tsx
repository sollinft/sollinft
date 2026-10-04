import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

/** Frosted glass surface used for every card on the page. */
export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("glass p-6 md:p-8", className)}>{children}</div>;
}
