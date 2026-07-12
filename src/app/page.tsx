import { BioSection } from "@/components/BioSection";
import { ContactSection } from "@/components/ContactSection";
import { HomeHero } from "@/components/HomeHero";
import { WorkSlideshow } from "@/components/WorkSlideshow";
import {
  getProjectsByCategory,
  sectionMeta,
  type ProjectCategory,
} from "@/data/projects";

const sections: ProjectCategory[] = ["commercial", "narrative", "music"];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      {sections.map((category) => {
        const meta = sectionMeta[category];
        return (
          <WorkSlideshow
            key={category}
            id={meta.id}
            eyebrow={meta.eyebrow}
            title={meta.title}
            projects={getProjectsByCategory(category)}
          />
        );
      })}
      <BioSection />
      <ContactSection />
    </>
  );
}
