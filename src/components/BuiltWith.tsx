import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { builtWith } from "../data/builtWith";

/** Technology strip — only tools the project actually runs on. */
export function BuiltWith() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Infrastructure"
          title={
            <>
              Built <span className="gradient-text">with</span>
            </>
          }
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {builtWith.map((entry, i) => (
            <Reveal key={entry.name} delay={i * 0.06}>
              <div className="glass flex flex-col items-center rounded-2xl px-6 py-8 transition duration-300 hover:border-sol-green/30">
                <span className="text-xl font-bold tracking-tight text-white">{entry.name}</span>
                <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  {entry.role}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
