import { useState } from "react";
import { Menu, X, Twitter, Send } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";
import { cn } from "../lib/utils";
import { SITE } from "../lib/constants";

const links = [
  { label: "About", href: "#about" },
  { label: "Mint", href: "#mint" },
  { label: "Gallery", href: "#gallery" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <img src="./logo.svg" alt={`${SITE.name} logo`} className="h-9 w-9" />
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Sollin<span className="gradient-text">FT</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://twitter.com/sollinft"
            target="_blank"
            rel="noreferrer"
            aria-label="SollinFT on X / Twitter"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition hover:text-white"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href="https://t.me/sollinft"
            target="_blank"
            rel="noreferrer"
            aria-label="SollinFT on Telegram"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition hover:text-white"
          >
            <Send className="h-4 w-4" />
          </a>
          <a
            href="#mint"
            className="rounded-full bg-gradient-to-r from-sol-purple to-sol-green px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:opacity-90"
          >
            Mint Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-200 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink-950/95 px-6 pb-6 pt-2 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#mint"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-gradient-to-r from-sol-purple to-sol-green px-5 py-3 text-center text-sm font-semibold text-ink-950"
            >
              Mint Now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
