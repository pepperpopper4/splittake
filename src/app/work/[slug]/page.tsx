import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ColorWords } from "@/components/ColorWords";
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
  const isPhoto = project.mediaType === "photo";

  return (
    <article>
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-10 md:px-8 md:pt-20 md:pb-14">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-warm">
          {categoryLabels[project.category]} · {project.year}
        </p>
        <ColorWords
          as="h1"
          text={project.title}
          className="display blot-text mb-8 text-5xl md:text-7xl"
        />

        <div className="panel overflow-hidden p-2 md:p-3">
          {isPhoto ? (
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <VideoEmbed vimeoId={project.vimeoId!} title={project.title} />
          )}
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr]">
            <div>
              <h2 className="display mb-3 text-xl text-warm">
                About the piece
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-ink/75">
                {project.description}
              </p>
            </div>
            <aside className="panel p-6">
              <div className="space-y-4 text-sm">
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
            className="display text-ink/70 transition-colors hover:text-warm"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        <Link
          href={`/#${project.category}`}
          className="text-sm uppercase tracking-[0.14em] text-cool"
        >
          All work
        </Link>
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="display text-ink/70 transition-colors hover:text-warm"
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
