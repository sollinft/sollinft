# Deployment

Two supported targets. GitHub Pages is the default (workflow included).

## GitHub Pages (default)

1. Repo → **Settings → Pages → Source: GitHub Actions**.
2. Push to `main`. `.github/workflows/deploy.yml` builds and deploys `dist/`.
3. Custom domain: the repo already contains a `CNAME` file with
   `sollinft.xyz`. In **Settings → Pages → Custom domain**, enter
   `sollinft.xyz` and wait for the DNS check.
4. Enable **Enforce HTTPS** once the certificate is issued.

### DNS records at the registrar for sollinft.xyz

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   sollinft.github.io
```

### Why `base: "./"` in vite.config.ts

The Pages project URL is `sollinft.github.io/sollinft/`. Relative asset paths
make the same build work at both the subpath and the apex domain.

## Vercel (alternative)

1. Import the repo, framework preset **Vite**.
2. Add the `sollinft.xyz` domain in project settings, apex + `www`.
3. Remove/ignore the Pages workflow to avoid double deploys.

## Post-deploy smoke test

- [ ] `https://sollinft.xyz` loads, title correct.
- [ ] Countdown ticks (checks `LAUNCH_DATE_ISO` is in the future).
- [ ] Mint widget renders and the counter matches the dashboard.
- [ ] `og:image` resolves (share the link in a DM to check the preview card).
