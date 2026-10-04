# Contributing to SollinFT

Thanks for wanting to help. Read this before opening a PR.

## Ground rules

1. **All copy lives in `src/data/`** — don't hardcode text inside components.
2. **All config lives in `src/lib/constants.ts`** — mint price, supply, dates,
   LaunchMyNFT ids.
3. **Widget container ids are a contract.** `#mint-button-container` and
   `#mint-counter` must never be renamed.
4. Placeholders are marked with `PLACEHOLDER` comments — don't mistake them
   for bugs, and don't delete the markers.

## Workflow

```bash
git checkout -b feat/your-feature
npm install
npm run dev          # build your change
npm run build        # typecheck + production build must pass
```

Commit style: conventional commits (`feat:`, `fix:`, `docs:`, `chore:`).

PR checklist:

- [ ] `npm run build` passes locally
- [ ] No new copy outside `src/data/`
- [ ] Widget still renders (scroll to #mint and check)
- [ ] Screenshots for visual changes

## Reporting issues

Use the issue templates. For mint widget problems, include:

- Browser + wallet + version
- Console output (redact nothing except seed phrases — never share those)
- Whether the counter on the LaunchMyNFT dashboard moves

## Security

See [SECURITY.md](SECURITY.md). Never post private keys or seed phrases
anywhere in this repo, issues, or chat.
