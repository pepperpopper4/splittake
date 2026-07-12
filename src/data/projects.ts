export type ProjectCategory = "commercial" | "narrative" | "music";

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
};

export const categoryLabels: Record<ProjectCategory, string> = {
  commercial: "Commercial & ads",
  narrative: "Narrative films",
  music: "Music videos",
};

export const sectionMeta: Record<
  ProjectCategory,
  { id: string; title: string; eyebrow: string }
> = {
  commercial: {
    id: "commercial",
    eyebrow: "Work",
    title: "Commercial & ads",
  },
  narrative: {
    id: "narrative",
    eyebrow: "Work",
    title: "Narrative films",
  },
  music: {
    id: "music",
    eyebrow: "Work",
    title: "Music videos",
  },
};

export const projects: Project[] = [
  {
    slug: "northline-brand-film",
    title: "Northline Brand Film",
    category: "commercial",
    year: 2025,
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
    vimeoId: "76979871",
    thumbnail: "/placeholders/project-4.svg",
    description:
      "Thirty-second spot for a local design studio. Clean frames, tactile sound, one unforgettable product moment.",
    credits: "Direction, DP, grade",
  },
  {
    slug: "pulse-social-pack",
    title: "Pulse Social Pack",
    category: "commercial",
    year: 2025,
    vimeoId: "76979871",
    thumbnail: "/placeholders/project-2.svg",
    description:
      "Short-form cuts for a fitness app launch — hooks in the first second, brand in the last.",
    credits: "Concept, shoot, cutdowns",
  },
  {
    slug: "harbor-short",
    title: "Harbor",
    category: "narrative",
    year: 2024,
    vimeoId: "76979871",
    thumbnail: "/placeholders/project-3.svg",
    description:
      "A narrative short about two strangers sharing a bench at the wrong hour — quiet tension, one decisive cut.",
    credits: "Write, direct, edit",
  },
  {
    slug: "last-light",
    title: "Last Light",
    category: "narrative",
    year: 2025,
    vimeoId: "76979871",
    thumbnail: "/placeholders/project-6.svg",
    description:
      "Graduation thesis film. Handheld intimacy, available light, a ending that lands without explaining itself.",
    credits: "Direct, shoot, post",
  },
  {
    slug: "midnight-run",
    title: "Midnight Run",
    category: "narrative",
    year: 2024,
    vimeoId: "76979871",
    thumbnail: "/placeholders/project-5.svg",
    description:
      "No-dialogue chase through empty city blocks — proof that momentum can carry a story.",
    credits: "Direct, DP",
  },
  {
    slug: "neon-echo",
    title: "Neon Echo",
    category: "music",
    year: 2025,
    vimeoId: "76979871",
    thumbnail: "/placeholders/project-2.svg",
    description:
      "Performance-led music video with strobing practicals and a single continuous camera move.",
    credits: "Direct, light, edit",
  },
  {
    slug: "slow-burn",
    title: "Slow Burn",
    category: "music",
    year: 2024,
    vimeoId: "76979871",
    thumbnail: "/placeholders/project-1.svg",
    description:
      "Indie artist visual — golden hour exteriors, slow push-ins, lyrics you feel before you hear.",
    credits: "Direct, DP, color",
  },
  {
    slug: "afterhours",
    title: "After Hours",
    category: "music",
    year: 2025,
    vimeoId: "76979871",
    thumbnail: "/placeholders/project-4.svg",
    description:
      "Late-night club energy cut to the beat — mixed format, bold type, zero filler frames.",
    credits: "Direct, edit",
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
