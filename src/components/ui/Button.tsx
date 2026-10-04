import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sol-green";

const variants = {
  primary:
    "bg-gradient-to-r from-sol-purple to-sol-green text-ink-950 hover:opacity-90 hover:shadow-[0_0_36px_rgba(153,69,255,0.5)]",
  ghost: "glass text-slate-200 hover:bg-white/10 hover:border-white/20",
} as const;

/** Anchor when `href` is given, button otherwise. */
export function Button({ href, variant = "primary", className, children, onClick, ariaLabel }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
