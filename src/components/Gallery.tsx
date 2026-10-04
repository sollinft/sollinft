import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Badge } from "./ui/Badge";
import { galleryNfts } from "../data/nfts";
import { useLockBody } from "../hooks/useLockBody";
import { cn } from "../lib/utils";

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const locked = selected !== null;
  useLockBody(locked);

  const close = useCallback(() => setSelected(null), []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setSelected((current) => {
        if (current === null) return current;
        const next = (current + dir + galleryNfts.length) % galleryNfts.length;
        return next;
      });
    },
    [],
  );

  useEffect(() => {
    if (!locked) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [locked, close, step]);

  const item = selected !== null ? galleryNfts[selected] : null;

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Preview the <span className="gradient-text">souls</span>
            </>
          }
          subtitle="A taste of the trait system. Click any piece for full lore — final art reveals in wallets at mint."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryNfts.map((nft, i) => (
            <Reveal key={nft.id} delay={(i % 4) * 0.06}>
              <button
                type="button"
                onClick={() => setSelected(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 transition duration-300 hover:border-sol-purple/50 hover:shadow-[0_0_32px_rgba(153,69,255,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-sol-green"
                aria-label={`View ${nft.name}`}
              >
                <img
                  src={nft.image}
                  alt={nft.name}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-950/90 via-transparent to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="text-left text-sm font-semibold text-white">{nft.name}</span>
                  <span className="text-left font-mono text-[11px] uppercase tracking-widest text-sol-green">
                    Rarity {nft.rarity}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {item ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-md"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={item.name}
        >
          <motion.div
            initial={{ scale: 0.92, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass relative w-full max-w-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close preview"
              className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 text-slate-300 shadow-lg transition hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <img
              src={item.image}
              alt={item.name}
              className="w-full rounded-xl border border-white/10"
            />

            <div className="flex items-start justify-between gap-4 p-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.traits.map((trait) => (
                    <span
                      key={trait.name}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-300"
                    >
                      {trait.name}: <span className="text-sol-green">{trait.value}</span>
                    </span>
                  ))}
                </div>
              </div>
              <Badge tone="purple">{item.rarity}</Badge>
            </div>

            <div className="flex justify-between px-4 pb-2">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous piece"
                className={cn(
                  "glass flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition hover:text-white",
                )}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next piece"
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </section>
  );
}
