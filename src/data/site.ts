export const site = {
  name: "Split Take Media",
  tagline: "Commercial films. Social content. Post that hits.",
  description:
    "A two-person film studio making bold commercial work, sharp social content, and post-production that actually lands.",
  email: "hello@splittakemedia.com", // TODO: replace with real email
  social: {
    // TODO: replace with real profile URLs
    instagram: "https://instagram.com/splittakemedia",
    vimeo: "https://vimeo.com/splittakemedia",
    youtube: "https://youtube.com/@splittakemedia",
  },
  // TODO: replace with real Vimeo showreel ID
  showreelVimeoId: "76979871",
} as const;

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
