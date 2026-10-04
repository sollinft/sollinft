#!/usr/bin/env bash
# Regenerates the placeholder NFT SVGs in public/nft/.
# Swap these for real art before launch — see docs/architecture.md.
set -euo pipefail

out_dir="$(cd "$(dirname "$0")/.." && pwd)/public/nft"
mkdir -p "$out_dir"

for i in $(seq 1 12); do
  h1=$((i * 28))
  h2=$((h1 + 65))
  n=$(printf "%03d" "$i")
  cat > "$out_dir/sollinft-$i.svg" <<EOF
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600" role="img" aria-label="Sollin #${n} placeholder">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="hsl(${h1},82%,52%)"/>
      <stop offset="1" stop-color="hsl(${h2},85%,58%)"/>
    </linearGradient>
    <radialGradient id="r" cx="0.3" cy="0.22" r="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="600" height="600" fill="url(#g)"/>
  <rect width="600" height="600" fill="url(#r)"/>
  <circle cx="465" cy="135" r="92" fill="#ffffff" opacity="0.12"/>
  <circle cx="115" cy="470" r="145" fill="#05050E" opacity="0.14"/>
  <path d="M0 432 Q 150 328 300 432 T 600 432 V600 H0 Z" fill="#05050E" opacity="0.38"/>
  <text x="40" y="556" font-family="monospace" font-size="28" fill="#ffffff" opacity="0.92">SOLLIN #${n}</text>
</svg>
EOF
done

echo "Generated 12 placeholder SVGs in $out_dir"
