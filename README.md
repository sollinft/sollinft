<div align="center">

<img src="public/logo.svg" width="72" alt="SollinFT logo" />

# SollinFT

**3,333 souls forged on Solana**

[![CI](https://github.com/sollinft/sollinft/actions/workflows/ci.yml/badge.svg)](https://github.com/sollinft/sollinft/actions/workflows/ci.yml)
[![Deploy](https://github.com/sollinft/sollinft/actions/workflows/deploy.yml/badge.svg)](https://github.com/sollinft/sollinft/actions/workflows/deploy.yml)
![License](https://img.shields.io/badge/license-MIT-9945FF)
![Chain](https://img.shields.io/badge/chain-Solana-14F195)
![Mint](https://img.shields.io/badge/mint-0.001%20SOL-FF5CA8)
![Status](https://img.shields.io/badge/status-MINT%20LIVE-14F195)

**[sollinft.xyz](https://sollinft.xyz)** · [X / Twitter](https://twitter.com/sollinft) · [LaunchMyNFT campaign](https://launchmynft.io)

Generative collection landing page with a **live LaunchMyNFT mint widget**,
countdown, gallery with lightbox, roadmap timeline, FAQ, and team sections.

</div>

---

## Features

- **Real minting** — the mint button is the official LaunchMyNFT embed. Wallet
  connect, quantity selection, and signing all run through their audited
  infrastructure. No custodial middleman.
- **Live countdown** — ticks to the public mint timestamp.
- **Gallery + lightbox** — keyboard-navigable (Esc, ←/→), trait chips, rarity
  badges.
- **Animated roadmap** — scroll-reveal timeline with shipped/active/upcoming
  states.
- **Ambient canvas** — particle network background, respects
  `prefers-reduced-motion`.
- **Design system** — tokens, primitives, and docs in
  [`docs/design-system.md`](docs/design-system.md).
- **CI + Pages deploy** — typecheck and build on every push, automatic deploy
  to GitHub Pages.

## Quickstart

```bash
git clone https://github.com/sollinft/sollinft.git
cd sollinft
npm install
npm run dev
```

Open http://localhost:5173. The mint widget needs network access to
`storage.googleapis.com` — disable ad-blockers when testing.

| Script             | What it does                     |
| ------------------ | -------------------------------- |
| `npm run dev`      | Vite dev server + HMR            |
| `npm run build`    | Typecheck + production build     |
| `npm run preview`  | Serve the production build       |
| `npm run typecheck`| TypeScript only                  |

## Configure the mint

Everything lives in **`src/lib/constants.ts`**:

```ts
export const LAUNCHMYNFT = {
  scriptUrl: "https://storage.googleapis.com/scriptslmt/0.1.3/solana.js",
  cssUrl:    "https://storage.googleapis.com/scriptslmt/0.1.3/solana.css",
  ownerId:     "…",  // LaunchMyNFT dashboard
  collectionId: "…", // LaunchMyNFT dashboard
};

export const MINT_CONFIG = { priceSol: 0.001, supply: 3333, /* … */ };
export const LAUNCH_DATE_ISO = "2026-10-04T18:00:34Z";
```

Full integration notes and a troubleshooting matrix:
[`docs/mint-integration.md`](docs/mint-integration.md).

## Project structure

```
├── public/
│   ├── nft/                 # 12 placeholder art SVGs
│   ├── favicon.svg          # brand marks + PWA manifest
│   └── og.svg               # social share card
├── src/
│   ├── components/          # sections + ui/ primitives
│   ├── data/                # typed content (gallery, roadmap, faqs…)
│   ├── hooks/               # useLaunchMyNFT, useCountdown, …
│   ├── lib/                 # constants (mint config), utils, seo
│   └── types/
├── docs/                    # architecture, mint, deployment, design
└── .github/                 # CI, Pages deploy, templates
```

See [`docs/architecture.md`](docs/architecture.md) for the data-flow rules —
short version: **all copy in `src/data/`, all config in `src/lib/constants.ts`,
widget container ids are a contract.**

## Placeholder register

Ships with clearly-marked stand-ins (search the codebase for `PLACEHOLDER`):

- `MINT_CONFIG.minted` — progress bar figure (live count comes from the widget)
- `public/nft/*.svg` — generated gradient art placeholders
- Team handles/bios — pending final copy

## Deploy

GitHub Pages workflow is included; custom domain (`CNAME`) is preconfigured
for `sollinft.xyz`. DNS records and the full runbook:
[`docs/deployment.md`](docs/deployment.md).

## License

[MIT](LICENSE) — © 2026 SollinFT. Not affiliated with Solana Labs.
