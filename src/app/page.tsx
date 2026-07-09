import Link from "next/link";
import { ColorWords } from "@/components/ColorWords";
import { HomeHero } from "@/components/HomeHero";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { SectionHeading, TextLink } from "@/components/SectionHeading";
import { getFeaturedProjects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <HomeHero />

      <section className="band-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Selected work"
              title="Featured cuts"
              accent="pink"
              blot
            />
            <TextLink href="/work">All projects</TextLink>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((project, i) => (
              <div
                key={project.slug}
                className={i === 0 ? "md:col-span-2" : ""}
              >
                <ProjectCard project={project} large={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-16">
        <TestimonialCarousel items={testimonials} />
      </section>

      <section className="band-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grind-panel overflow-hidden p-8 md:p-14">
            <div className="relative z-10 grid gap-8 md:grid-cols-[1.4fr_auto] md:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cool">
                  Next up
                </p>
                <ColorWords
                  as="h2"
                  text={"Got a story\nto shoot?"}
                  className="display blot-text text-5xl md:text-7xl"
                />
                <p className="mt-5 max-w-lg text-paper/70">
                  Commercial, social, or post — tell us what you&apos;re making
                  and we&apos;ll send a custom quote.
                </p>
              </div>
              <Link href="/contact" className="btn-primary self-end">
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
