export const site = {
  name: "Split Take Media",
  tagline: "Commercial films. Social content. Post that hits.",
  description:
    "A two-person film studio making bold commercial work, sharp social content, and post-production that actually lands.",
  email: "hello@splittakemedia.com", // TODO: replace with real email
  social: {
    instagram: "https://www.instagram.com/splittake.media/",
    instagramHandle: "@splittake.media",
    // TODO: replace with real profile URLs when ready
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
