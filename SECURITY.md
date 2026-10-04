# Security Policy

## Supported versions

| Version | Supported |
| ------- | --------- |
| 1.0.x   | yes       |

## Reporting a vulnerability

Email **support@sollinft.xyz** with:

- Description and impact
- Steps to reproduce (or a PoC)
- Suggested fix, if any

We aim to acknowledge within 48h. Please do not open public issues for
unreleased vulnerabilities.

## Scope

- This repository (the landing site).
- The LaunchMyNFT campaign configuration we control.
- Our RPC endpoints and treasury multisig policies.

Out of scope: the Solana protocol, LaunchMyNFT's own platform code, wallet
providers.

## Rules for contributors

- Never commit secrets: private keys, seed phrases, RPC keys with write
  access, or the LaunchMyNFT dashboard credentials. Use environment variables
  locally and keep them out of git (`*.local` is git-ignored).
