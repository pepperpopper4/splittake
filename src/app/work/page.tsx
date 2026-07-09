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
    <>
      <section className="mx-auto max-w-7xl px-5 pt-14 pb-10 md:px-8 md:pt-20 md:pb-14">
        <SectionHeading eyebrow="Portfolio" title="The work" accent="sun" blot />
        <p className="max-w-xl -mt-6 text-paper/70">
          Commercial films, social packs, and post jobs — filter by type or dive
          straight in.
        </p>
      </section>

      <section className="band-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </>
  );
}
