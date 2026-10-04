/** Joins class names, skipping falsy values. Tiny clsx. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Formats a SOL amount without trailing zeros: 0.5 -> "0.5 SOL". */
export function formatSol(amount: number): string {
  return `${amount} SOL`;
}

/** Zero-pads a number to two digits (05, 42). */
export function pad2(n: number): string {
  return n.toString().padStart(2, "0");
}
