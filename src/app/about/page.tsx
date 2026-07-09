import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { companyStory, processSteps, team } from "@/data/team";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the two filmmakers behind Split Take Media.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <SectionHeading eyebrow="About" title={companyStory.headline} blot />
        <div className="mt-2 grid max-w-3xl gap-5 text-lg leading-relaxed text-paper/75">
          {companyStory.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-cool">
          The crew
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((member, i) => (
            <article key={member.name} className="grind-panel overflow-hidden">
              <div className="relative z-10">
                <div className="aspect-[4/3] overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.photo}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <p
                    className={`mb-2 text-xs font-semibold uppercase tracking-[0.16em] ${
                      i === 0 ? "text-warm" : "text-lime"
                    }`}
                  >
                    {member.role}
                  </p>
                  <h3 className="display text-3xl text-paper md:text-4xl">
                    {member.name}
                  </h3>
                  <p className="mt-4 text-paper/75 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-cool">
          How we work
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map((step, i) => (
            <div key={step.title} className="grind-panel p-6 md:p-8">
              <div className="relative z-10">
                <p className="blot-text-static display mb-3 text-5xl">
                  0{i + 1}
                </p>
                <h3 className="display text-2xl text-paper">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/contact" className="btn-primary">
            Work with us
          </Link>
        </div>
      </section>
    </>
  );
}
