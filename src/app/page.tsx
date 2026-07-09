import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { VideoEmbed } from "@/components/VideoEmbed";
import { SectionHeading, TextLink } from "@/components/SectionHeading";
import { getFeaturedProjects } from "@/data/projects";
import { site } from "@/data/site";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:gap-12 md:px-8 md:pb-24 md:pt-16">
        <div className="fade-up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cool">
            {site.name}
          </p>
          <h1 className="blot-text display text-[clamp(3.2rem,11vw,6.5rem)] leading-[0.88]">
            Split
            <br />
            Take
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/75">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Start a project
            </Link>
            <Link href="/work" className="btn-ghost">
              See the work
            </Link>
          </div>
        </div>

        <div className="fade-up stagger-2 grind-panel p-2 md:p-3">
          <div className="relative z-10 overflow-hidden">
            <VideoEmbed
              vimeoId={site.showreelVimeoId}
              title="Split Take showreel"
              autoplay
              muted
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Selected work" title="Featured cuts" blot />
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
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-16">
        <TestimonialCarousel items={testimonials} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grind-panel overflow-hidden p-8 md:p-14">
          <div className="relative z-10 grid gap-8 md:grid-cols-[1.4fr_auto] md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-lime">
                Next up
              </p>
              <h2 className="blot-text display text-5xl md:text-7xl">
                Got a story
                <br />
                to shoot?
              </h2>
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
      </section>
    </>
  );
}
