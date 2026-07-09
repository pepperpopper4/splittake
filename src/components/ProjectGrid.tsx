"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";
import { categoryLabels } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

const filters: Array<"all" | ProjectCategory> = [
  "all",
  "commercial",
  "social",
  "post",
];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const visible = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((key) => {
          const label = key === "all" ? "All" : categoryLabels[key];
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                active
                  ? "bg-warm text-ink"
                  : "border border-paper/20 text-paper/70 hover:border-warm hover:text-warm"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <div
            key={project.slug}
            className={
              i % 5 === 0
                ? "md:col-span-2"
                : i % 3 === 0
                  ? "lg:row-span-1"
                  : ""
            }
          >
            <ProjectCard project={project} large={i % 5 === 0} />
          </div>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-cool">No projects in this category yet.</p>
      ) : null}
    </div>
  );
}
