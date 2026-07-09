import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected commercial, social, and post-production work from Split Take Media.",
};

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
      <SectionHeading eyebrow="Portfolio" title="The work" blot />
      <p className="mb-12 max-w-xl -mt-6 text-paper/70">
        Commercial films, social packs, and post jobs — filter by type or dive
        straight in.
      </p>
      <ProjectGrid projects={projects} />
    </section>
  );
}
