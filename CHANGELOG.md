# Changelog

All notable changes to SollinFT are documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/);
versioning follows [SemVer](https://semver.org/).

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
