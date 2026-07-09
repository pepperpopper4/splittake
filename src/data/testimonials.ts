export type Testimonial = {
  quote: string;
  client: string;
  projectType: string;
};

export const testimonials: Testimonial[] = [
  {
    // TODO: replace with real testimonials
    quote:
      "They treated our brand film like a short, not a checkbox. The cut still gets compliments months later.",
    client: "Maya R., Northline",
    projectType: "Commercial",
  },
  {
    quote:
      "Fast, sharp, and weirdly calm on set. Our social pack finally looks like us — not like every other feed.",
    client: "Jordan K., Pulse",
    projectType: "Social",
  },
  {
    quote:
      "Brought them a messy hard drive and got back a trailer that actually made people stay for the Q&A.",
    client: "Sam T., Harbor",
    projectType: "Post-production",
  },
];
