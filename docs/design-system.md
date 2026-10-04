# Design System

Dark-first cyber aesthetic built around the Solana gradient.

## Color tokens

| Token          | Value     | Usage                          |
| -------------- | --------- | ------------------------------ |
| `sol.purple`   | `#9945FF` | Primary gradient start, glows  |
| `sol.green`    | `#14F195` | Accents, eyebrows, success     |
| `sol.pink`     | `#FF5CA8` | Secondary highlights (sparing) |
| `ink.950`      | `#05050E` | Page background                |
| `ink.900`      | `#0A0A18` | Raised surfaces, marquee       |
| `ink.800`      | `#121226` | Chips, close buttons           |
| `ink.700`      | `#1C1C36` | Hover borders                  |

Gradient: `from-sol-purple via-fuchsia-400 to-sol-green` (text) or
`from-sol-purple to-sol-green` (fills).

## Typography

- Display/headings: **Space Grotesk** (400–700), tight tracking on h1/h2.
- Labels/counters: **JetBrains Mono**, uppercase, `tracking-[0.2em]+`.
- Body: Space Grotesk 400 at `slate-400`.

Scale: h1 `text-5xl md:text-7xl` · h2 `text-3xl md:text-5xl` ·
h3 `text-lg md:text-xl` · body `text-sm md:text-base` ·
eyebrow `text-xs mono`.

## Surfaces

- `.glass` — `rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl`.
- `.gradient-text` — brand gradient clipped to text.
- `.section-divider` — hairline gradient rule.

## Motion language

- Scroll reveals: `Reveal` primitive — 28px rise + fade, 0.6s, once.
- Ambient: `animate-float` (7s) on hero cards, `animate-marquee` (30s).
- State: `animate-pulse-glow` on the active roadmap node.
- All motion respects `prefers-reduced-motion` (particles gate on it).

## Components

| Component       | Path                              | Notes                          |
| --------------- | --------------------------------- | ------------------------------ |
| `Button`        | `src/components/ui/Button.tsx`    | `primary` / `ghost` variants   |
| `Card`          | `src/components/ui/Card.tsx`      | Glass surface                  |
| `Badge`         | `src/components/ui/Badge.tsx`     | green / purple / slate tones   |
| `Reveal`        | `src/components/ui/Reveal.tsx`    | Scroll-reveal wrapper          |
| `SectionHeading`| `src/components/ui/SectionHeading.tsx` | eyebrow + title + subtitle |

## Spacing rhythm

Sections: `py-24 md:py-32` · container: `max-w-7xl px-6` ·
card gap: `gap-6` · heading→content: `mb-12 md:mb-16`.
