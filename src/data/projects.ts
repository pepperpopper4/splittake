export type ProjectCategory = "commercial" | "social" | "photography";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: number;
  mediaType: "video" | "photo";
  /** Vimeo ID — video projects only */
  vimeoId?: string;
  thumbnail: string;
  description: string;
  credits: string;
};

export const categoryLabels: Record<ProjectCategory, string> = {
  commercial: "Commercial video",
  social: "Social media campaign",
  photography: "Product photography",
};

export const sectionMeta: Record<
  ProjectCategory,
  { id: string; title: string; eyebrow: string }
> = {
  commercial: {
    id: "commercial",
    eyebrow: "Work",
    title: "Commercial video",
  },
  social: {
    id: "social",
    eyebrow: "Work",
    title: "Social media campaign",
  },
  photography: {
    id: "photography",
    eyebrow: "Work",
    title: "Product photography",
  },
};

export const projects: Project[] = [
  {
    slug: "northline-brand-film",
    title: "Northline Brand Film",
    category: "commercial",
    year: 2025,
    mediaType: "video",
    vimeoId: "76979871",
    thumbnail: "/placeholders/project-1.svg",
    description:
      "A kinetic brand film for an outdoor apparel startup — half documentary grit, half product poetry.",
    credits: "Direction, cinematography, edit",
  },
  {
    slug: "atelier-spot",
    title: "Atelier Spot",
    category: "commercial",
    year: 2024,
    mediaType: "video",
    vimeoId: "76979871",
    thumbnail: "/placeholders/project-4.svg",
    description:
      "Thirty-second spot for a local design studio. Clean frames, tactile sound, one unforgettable product moment.",
    credits: "Direction, DP, grade",
  },
  {
    slug: "summit-launch-film",
    title: "Summit Launch Film",
    category: "commercial",
    year: 2025,
    mediaType: "video",
    vimeoId: "76979871",
    thumbnail: "/placeholders/project-3.svg",
    description:
      "Launch film for a new product line — macro detail, human hands, one hero shot that sells the craft.",
    credits: "Direct, shoot, edit",
  },
  {
    slug: "pulse-social-pack",
    title: "Pulse Social Pack",
    category: "social",
    year: 2025,
    mediaType: "video",
    vimeoId: "76979871",
    thumbnail: "/placeholders/project-2.svg",
    description:
      "Short-form cuts for a fitness app launch — hooks in the first second, brand in the last.",
    credits: "Concept, shoot, cutdowns",
  },
  {
    slug: "daily-drop-series",
    title: "Daily Drop Series",
    category: "social",
    year: 2024,
    mediaType: "video",
    vimeoId: "76979871",
    thumbnail: "/placeholders/project-5.svg",
    description:
      "A month of vertical content for a streetwear label — same energy, new angle every drop.",
    credits: "Direct, edit, deliverables",
  },
  {
    slug: "cafe-reel-pack",
    title: "Café Reel Pack",
    category: "social",
    year: 2025,
    mediaType: "video",
    vimeoId: "76979871",
    thumbnail: "/placeholders/project-6.svg",
    description:
      "Instagram reel set for a local café — steam, pour, smile, repeat. Built for saves and shares.",
    credits: "Shoot, edit, platform specs",
  },
  {
    slug: "atelier-product-still",
    title: "Atelier Product Still",
    category: "photography",
    year: 2025,
    mediaType: "photo",
    thumbnail: "/placeholders/project-4.svg",
    description:
      "Hero product stills for a design studio launch — controlled light, honest texture, zero clutter.",
    credits: "Photography, retouch",
  },
  {
    slug: "northline-catalog",
    title: "Northline Catalog",
    category: "photography",
    year: 2024,
    mediaType: "photo",
    thumbnail: "/placeholders/project-1.svg",
    description:
      "On-location product photography for an outdoor brand — gear in use, color that pops off the page.",
    credits: "Photography, art direction",
  },
  {
    slug: "pulse-lifestyle-set",
    title: "Pulse Lifestyle Set",
    category: "photography",
    year: 2025,
    mediaType: "photo",
    thumbnail: "/placeholders/project-2.svg",
    description:
      "Lifestyle product shots for a fitness app — movement frozen mid-rep, brand colors baked into every frame.",
    credits: "Photography, styling",
  },
];

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((p) => p.category === category);
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
