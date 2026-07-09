export type ProjectCategory = "commercial" | "social" | "post";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: number;
  // TODO: replace with real Vimeo IDs
  vimeoId: string;
  thumbnail: string;
  description: string;
  credits: string;
  featured?: boolean;
  aspect: "wide" | "tall" | "square";
};

export const categoryLabels: Record<ProjectCategory, string> = {
  commercial: "Commercial",
  social: "Social",
  post: "Post-production",
};

export const projects: Project[] = [
  {
    slug: "northline-brand-film",
    title: "Northline Brand Film",
    category: "commercial",
    year: 2025,
    vimeoId: "76979871", // TODO: replace with real Vimeo ID
    thumbnail: "/placeholders/project-1.svg",
    description:
      "A kinetic brand film for an outdoor apparel startup — half documentary grit, half product poetry. Shot over three days in the Cascades.",
    credits: "Direction, cinematography, edit",
    featured: true,
    aspect: "wide",
  },
  {
    slug: "pulse-social-pack",
    title: "Pulse Social Pack",
    category: "social",
    year: 2025,
    vimeoId: "76979871", // TODO: replace with real Vimeo ID
    thumbnail: "/placeholders/project-2.svg",
    description:
      "A rolling set of vertical cuts for a fitness app launch — hooks in the first second, brand in the last.",
    credits: "Concept, shoot, cutdowns",
    featured: true,
    aspect: "tall",
  },
  {
    slug: "harbor-edit",
    title: "Harbor — Picture Lock",
    category: "post",
    year: 2024,
    vimeoId: "76979871", // TODO: replace with real Vimeo ID
    thumbnail: "/placeholders/project-3.svg",
    description:
      "Full post package for a narrative short: assembly through color, sound design pass, and delivery masters.",
    credits: "Edit, color, finishing",
    featured: true,
    aspect: "square",
  },
  {
    slug: "atelier-spot",
    title: "Atelier Spot",
    category: "commercial",
    year: 2024,
    vimeoId: "76979871", // TODO: replace with real Vimeo ID
    thumbnail: "/placeholders/project-4.svg",
    description:
      "Thirty-second spot for a local design studio. Clean frames, tactile sound, one unforgettable product moment.",
    credits: "Direction, DP, grade",
    aspect: "wide",
  },
  {
    slug: "weekend-reels",
    title: "Weekend Reels",
    category: "social",
    year: 2024,
    vimeoId: "76979871", // TODO: replace with real Vimeo ID
    thumbnail: "/placeholders/project-5.svg",
    description:
      "Ongoing short-form for a hospitality brand — events, food, people, atmosphere. Built to feel native, not ads.",
    credits: "Shoot & edit retainer",
    aspect: "tall",
  },
  {
    slug: "signal-cut",
    title: "Signal Cut",
    category: "post",
    year: 2025,
    vimeoId: "76979871", // TODO: replace with real Vimeo ID
    thumbnail: "/placeholders/project-6.svg",
    description:
      "Recut and finish for a tech documentary trailer. Tightened pacing, rebuilt sound bed, new title treatment.",
    credits: "Editorial & finishing",
    aspect: "wide",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
