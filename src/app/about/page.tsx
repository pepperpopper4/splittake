import type { Metadata } from "next";
import Link from "next/link";
import { ColorWords } from "@/components/ColorWords";
import { SectionHeading } from "@/components/SectionHeading";
import { companyStory, processSteps, team } from "@/data/team";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Jacques Ciambra and Thomas McVay — the filmmakers behind Split Take Media.",
};

const roleColors = ["text-warm", "text-cool"];
const nameColors = ["text-cool", "text-warm"];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="About"
          title={companyStory.headline}
          accent="sun"
          blot
        />
        <div className="mt-2 grid max-w-3xl gap-5 text-lg leading-relaxed text-paper/75">
          {companyStory.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </section>

      <section className="band-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-pink">
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
                      alt={`Headshot placeholder for ${member.name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <p
                      className={`mb-2 text-xs font-semibold uppercase tracking-[0.16em] ${
                        roleColors[i % roleColors.length]
                      }`}
                    >
                      {member.role}
                    </p>
                    <h3
                      className={`display text-3xl md:text-4xl ${
                        nameColors[i % nameColors.length]
                      }`}
                    >
                      {member.name}
                    </h3>
                    <p className="mt-4 text-paper/75 leading-relaxed">
                      {member.bio}
                    </p>
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-block text-sm font-semibold text-cool transition-colors hover:text-warm"
                      >
                        LinkedIn →
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-paper/60">
            Follow the work on Instagram{" "}
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-warm transition-colors hover:text-cool"
            >
              {site.social.instagramHandle}
            </a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-violet">
          How we work
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map((step, i) => (
            <div key={step.title} className="grind-panel p-6 md:p-8">
              <div className="relative z-10">
                <ColorWords
                  as="p"
                  text={`0${i + 1}`}
                  byLetter
                  className="display blot-text mb-3 text-5xl"
                />
                <h3
                  className={`display text-2xl ${
                    ["text-warm", "text-cool", "text-sun"][i % 3]
                  }`}
                >
                  {step.title}
                </h3>
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
