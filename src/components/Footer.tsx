import { Twitter, Send, Mail } from "lucide-react";
import { SITE } from "../lib/constants";

const productLinks = [
  { label: "Mint", href: "#mint" },
  { label: "Gallery", href: "#gallery" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

const resourceLinks = [
  { label: "Docs", href: "https://github.com/sollinft/sollinft/tree/main/docs" },
  { label: "GitHub", href: "https://github.com/sollinft/sollinft" },
  { label: "Brand kit", href: "https://github.com/sollinft/sollinft/tree/main/public" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src="./logo.svg" alt="" className="h-9 w-9" />
              <span className="font-display text-lg font-bold text-white">
                Sollin<span className="gradient-text">FT</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {SITE.tagline}. Minting {SITE.url.replace("https://", "")} on{" "}
              {new Date().getFullYear()} — powered by LaunchMyNFT on Solana mainnet.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://twitter.com/sollinft"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://t.me/sollinft"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition hover:text-white"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="max-w-md text-center text-xs leading-relaxed text-slate-600 md:text-right">
            {SITE.name} is an independent project and is not affiliated with Solana Labs or the
            Solana Foundation.
          </p>
        </div>
      </div>
    </footer>
  );
}
