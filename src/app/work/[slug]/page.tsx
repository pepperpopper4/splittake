import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VideoEmbed } from "@/components/VideoEmbed";
import {
  categoryLabels,
  getAdjacentProjects,
  getProject,
  projects,
} from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article>
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-10 md:px-8 md:pt-20 md:pb-14">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-lime">
          {categoryLabels[project.category]} · {project.year}
        </p>
        <h1 className="blot-text display mb-8 text-5xl md:text-7xl">
          {project.title}
        </h1>

        <div className="grind-panel p-2 md:p-3">
          <div className="relative z-10">
            <VideoEmbed vimeoId={project.vimeoId} title={project.title} />
          </div>
        </div>
      </div>

      <div className="band-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr]">
            <div>
              <h2 className="display mb-3 text-xl text-warm">
                About the piece
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-paper/80">
                {project.description}
              </p>
            </div>
            <aside className="grind-panel p-6">
              <div className="relative z-10 space-y-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-cool">
                    Credits
                  </p>
                  <p className="mt-1 text-paper">{project.credits}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-cool">
                    Category
                  </p>
                  <p className="mt-1 text-paper">
                    {categoryLabels[project.category]}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-cool">
                    Year
                  </p>
                  <p className="mt-1 text-paper">{project.year}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-10 md:px-8 md:py-14">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="display text-paper/80 transition-colors hover:text-warm"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        <Link href="/work" className="text-sm uppercase tracking-[0.14em] text-cool">
          All work
        </Link>
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="display text-paper/80 transition-colors hover:text-warm"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
