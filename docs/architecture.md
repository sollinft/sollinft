# SollinFT — Architecture

Landing site for the SollinFT collection (3,333 generative souls on Solana).
Single-page React app built with Vite + TypeScript + Tailwind. The only
on-chain-connected element is the **LaunchMyNFT mint widget**, which handles
wallet connection and minting end-to-end.

## Stack

| Layer     | Choice                        | Why                                    |
| --------- | ----------------------------- | -------------------------------------- |
| Build     | Vite 5 + TypeScript           | Fast builds, zero-config TS            |
| Styling   | Tailwind 3                    | Design tokens in `tailwind.config.ts`  |
| Motion    | framer-motion                 | Scroll reveals, lightbox transitions   |
| Icons     | lucide-react                  | Tree-shakeable, consistent             |
| Minting   | LaunchMyNFT embed             | Audited mint infra, wallet-agnostic    |

## Data flow

```
src/lib/constants.ts      ← single source of truth (mint config, LMN ids)
        │
        ▼
src/data/*                ← pure content (gallery, roadmap, faqs, team)
        │
        ▼
src/components/*          ← presentation only; map over data
        │
        ├── MintSection ── MintWidget ── useLaunchMyNFT (injects LMN snippet)
        └── everything else is static UI
```

Rules of the codebase:

1. **No copy inside components.** Edit `src/data/` and `src/lib/constants.ts`.
2. **The widget containers are a contract.** `#mint-button-container` and
   `#mint-counter` must not be renamed — the LaunchMyNFT script queries them.
3. **Everything mint-related funnels through `useLaunchMyNFT`.** Don't scatter
   script tags; the hook is idempotent and StrictMode-safe.

## Directory map

```
src/
├── components/        # sections + shared UI (ui/ primitives)
├── data/              # typed content consumed by components
├── hooks/             # countdown, LMN injection, scroll, body-lock
├── lib/               # constants, utils, seo, analytics stub
└── types/             # shared interfaces
```

## Placeholder register

Things that render as real UI but hold placeholder data (all marked `PLACEHOLDER`):

- `MINT_CONFIG.minted` — progress bar figure; the widget's `#mint-counter` is
  the authoritative live count.
- `public/nft/*.svg` — generated gradient stand-ins for final art.
- `src/data/team.ts` — handle/bio copy pending final approval.
