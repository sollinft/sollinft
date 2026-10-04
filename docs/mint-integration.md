# Mint Integration (LaunchMyNFT)

The mint button on sollinft.xyz is the official LaunchMyNFT embed. This doc
explains the wiring, what to change for a new campaign, and how to verify.

## The official snippet

LaunchMyNFT's dashboard gives you:

```html
<script>
  window.ownerId = "…";
  window.collectionId = "…";
</script>
<script type="module" src="https://storage.googleapis.com/scriptslmt/0.1.3/solana.js"></script>
<link rel="stylesheet" href="https://storage.googleapis.com/scriptslmt/0.1.3/solana.css" />

<!-- wherever the button should render -->
<div id="mint-button-container"></div>

<!-- wherever the live counter should render -->
<div id="mint-counter"></div>
```

## How this repo does it

Because this is a React SPA, the container divs don't exist at page-parse
time — a head-injected script would run before React renders. So the same
snippet is injected **after first render** by `src/hooks/useLaunchMyNFT.ts`:

1. Sets `window.ownerId` / `window.collectionId` from
   `src/lib/constants.ts` → `LAUNCHMYNFT`.
2. Appends the stylesheet (guarded by `#lmn-css` id).
3. Appends the module script (guarded by `src` match).

Guards make the hook idempotent — React 18 StrictMode double-invokes effects
in dev and the script must only load once. The script is intentionally never
removed on unmount: the widget lives for the page lifetime.

`src/components/MintWidget.tsx` renders the two container divs. **Do not
rename the ids** — they are the widget's mount points.

## Changing campaign

1. LaunchMyNFT dashboard → new campaign → copy the new `ownerId` and
   `collectionId`.
2. Update `LAUNCHMYNFT` in `src/lib/constants.ts`.
3. Update `MINT_CONFIG` (price, supply, cap) and `LAUNCH_DATE_ISO` to match.
4. Ship. No other file references the campaign.

## Verification checklist

- [ ] `npm run dev` → scroll to **#mint** → widget button renders inside ~2s.
- [ ] `#mint-counter` shows the live campaign count (compare with the
      LaunchMyNFT dashboard).
- [ ] Connect Phantom → quantity selector appears → approve a test mint on a
      low-price staging campaign first.
- [ ] Minted NFT appears in the connected wallet.
- [ ] Ad-blocker OFF: some blockers kill the `storage.googleapis.com` script —
      check the console before filing a bug.

## Troubleshooting

| Symptom                        | Cause                                                       |
| ------------------------------ | ----------------------------------------------------------- |
| Containers stay empty          | Script blocked (adblock / region) or ids renamed            |
| Widget renders twice           | Another component also calls `useLaunchMyNFT` (call it once) |
| Counter says 0 at mint time    | Campaign not started in the LaunchMyNFT dashboard           |
| Wrong price shown in widget    | `MINT_CONFIG.priceSol` out of sync with the campaign         |
