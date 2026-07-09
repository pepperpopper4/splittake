export type Service = {
  id: string;
  title: string;
  description: string;
  idealClient: string;
  turnaround: string;
  deliverables: string[];
  accent: "warm" | "cool" | "lime" | "pink";
};

export const services: Service[] = [
  {
    id: "commercial",
    title: "Brand & commercial films",
    description:
      "Narrative-driven spots and brand films that feel like cinema, not a brochure with a soundtrack.",
    idealClient: "Startups, local brands, and teams launching something worth watching.",
    turnaround: "Typically 3–6 weeks from kickoff to final delivery.",
    deliverables: [
      "Creative treatment",
      "Full production day(s)",
      "Picture lock + color",
      "Web & social masters",
    ],
    accent: "warm",
  },
  {
    id: "social",
    title: "Social / short-form content",
    description:
      "Vertical-first content built for the scroll — hooks, pacing, and brand voice that don't feel like ads.",
    idealClient: "Brands that need a steady stream of native-feeling cuts.",
    turnaround: "Batch shoots with weekly or biweekly delivery.",
    deliverables: [
      "Content strategy notes",
      "Shoot day or half-day",
      "Multiple cutdowns",
      "Platform-ready exports",
    ],
    accent: "cool",
  },
  {
    id: "post",
    title: "Editing & post-production",
    description:
      "Bring us the footage. We'll find the cut, build the sound, grade the look, and hand back something finished.",
    idealClient: "Directors, agencies, and teams who need a strong editorial partner.",
    turnaround: "Depends on runtime — we'll scope it on the call.",
    deliverables: [
      "Assembly through final cut",
      "Sound design pass",
      "Color grade",
      "Delivery package",
    ],
    accent: "lime",
  },
];
