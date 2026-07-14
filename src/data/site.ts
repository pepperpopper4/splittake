export const site = {
  name: "Split Take Media",
  tagline: "Commercial Video. Social Media Campaign. Product Photography.",
  description:
    "A two-person studio making commercial video, social media campaigns, and product photography.",
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
  { href: "#commercial", label: "Commercial Video" },
  { href: "#social", label: "Social Media Campaign" },
  { href: "#photography", label: "Product Photography" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
