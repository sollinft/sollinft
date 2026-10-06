# Changelog

All notable changes to SollinFT are documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/);
versioning follows [SemVer](https://semver.org/).

## [1.0.1] — 2026-10-06

### Fixed

- Synced all site copy with the live LaunchMyNFT campaign: price 0.33 → **0.001
  SOL**, launch Oct 31 → **live since Oct 4, 2026 · 18:00 UTC** (values read
  from the campaign's own Firestore config).
- Countdown now switches to a pulsing "MINT IS LIVE" chip once the target date
  passes instead of showing zeros.
- FAQ gains a whitelist explainer — the widget keeps the mint button locked for
  wallets not on the active whitelist.

## [1.0.0] — 2026-10-04

### Added

- Landing page: hero with ambient particle canvas, marquee, about, mint,
  gallery (lightbox), roadmap timeline, team, FAQ, infrastructure, footer.
- LaunchMyNFT mint widget integration (`useLaunchMyNFT` hook — idempotent,
  StrictMode-safe, runtime script injection).
- Live countdown to public mint (`LAUNCH_DATE_ISO`).
- Design system tokens + primitives (`Button`, `Card`, `Badge`, `Reveal`,
  `SectionHeading`) documented in `docs/design-system.md`.
- 12 generated placeholder art SVGs (`public/nft/`).
- GitHub Actions: CI (typecheck + build) and GitHub Pages deploy with
  `sollinft.xyz` CNAME.
- Docs set: architecture, mint integration, deployment, design system.

### Notes

- `MINT_CONFIG.minted` is a placeholder progress figure; the widget's
  `#mint-counter` is the authoritative live count.
