import Image from "next/image";
import { companyStory, team } from "@/data/team";
import { site } from "@/data/site";

export function BioSection() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm">
          About
        </p>
        <h2 className="display mt-2 max-w-xl text-3xl text-ink md:text-5xl">
          {companyStory.headline}
        </h2>
        <div className="mt-6 grid max-w-3xl gap-4 text-ink/75 leading-relaxed">
          {companyStory.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {team.map((member, i) => (
            <article key={member.name} className="panel overflow-hidden">
              <div className="relative aspect-[4/3] bg-ink">
                <Image
                  src={member.photo}
                  alt={`Headshot of ${member.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 md:p-8">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                    i === 0 ? "text-warm" : "text-cool"
                  }`}
                >
                  {member.role}
                </p>
                <h3 className="display mt-2 text-2xl text-paper md:text-3xl">
                  {member.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/75">
                  {member.bio}
                </p>
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-cool transition-colors hover:text-warm"
                  >
                    LinkedIn →
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <a href="#contact" className="btn-primary">
            Start a project
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-warm transition-colors hover:text-cool"
          >
            {site.social.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
