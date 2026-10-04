/**
 * Minimal analytics stub.
 *
 * Wire this to Plausible / Fathom / GA by forwarding the event inside
 * `track`. Kept as a stub so components don't depend on a vendor yet.
 */
export function track(event: string, payload: Record<string, unknown> = {}): void {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug(`[analytics] ${event}`, payload);
  }
}
