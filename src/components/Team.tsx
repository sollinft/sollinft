import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Reveal } from "./ui/Reveal";
import { team } from "../data/team";
import { cn } from "../lib/utils";

export function Team() {
  return (
    <section id="team" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Team"
          title={
            <>
              Four people, <span className="gradient-text">doxxed enough</span>
            </>
          }
          subtitle="Handles public, identities semi-doxed to the DAO. Full KYC happens off-chain for treasury multisig signers."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.handle} delay={i * 0.08}>
              <Card className="group h-full text-center transition duration-300 hover:border-sol-purple/40 hover:shadow-[0_0_32px_rgba(153,69,255,0.15)]">
                <div
                  className={cn(
                    "mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br text-xl font-bold text-white shadow-lg",
                    member.gradient,
                  )}
                >
                  {member.initials}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{member.handle}</h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-sol-green">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{member.bio}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
