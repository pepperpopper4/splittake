export const site = {
  name: "Split Take Media",
  tagline: "Commercial films. Narrative shorts. Music videos.",
  description:
    "A two-person film studio making bold commercial work, narrative films, and music videos.",
  email: "hello@splittakemedia.com", // TODO: replace with real email
  social: {
    instagram: "https://www.instagram.com/splittake.media/",
    instagramHandle: "@splittake.media",
    vimeo: "https://vimeo.com/splittakemedia",
    youtube: "https://youtube.com/@splittakemedia",
  },
  showreelVimeoId: "76979871", // TODO: replace with real Vimeo showreel ID
} as const;

export const navLinks = [
  { href: "#commercial", label: "Ads" },
  { href: "#narrative", label: "Narrative" },
  { href: "#music", label: "Music" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
