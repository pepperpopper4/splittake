import Link from "next/link";
import type { Project } from "@/data/projects";
import { categoryLabels } from "@/data/projects";

const aspectClass: Record<Project["aspect"], string> = {
  wide: "aspect-[16/10]",
  tall: "aspect-[3/4]",
  square: "aspect-square",
};

export function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm"
    >
      <article
        className={`grind-panel relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 ${
          large ? "min-h-[280px]" : ""
        }`}
      >
        <div
          className={`relative z-10 ${aspectClass[project.aspect]} w-full overflow-hidden`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.thumbnail}
            alt=""
            className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-lime">
              {categoryLabels[project.category]} · {project.year}
            </p>
            <h3 className="display text-2xl text-paper md:text-3xl">{project.title}</h3>
          </div>
        </div>
      </article>
    </Link>
  );
}
