export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export const team: TeamMember[] = [
  {
    // TODO: replace with real founder details
    name: "Founder One",
    role: "Director / DP",
    bio: "Film school grad with a soft spot for handheld energy and hard light. Lives in the frame — and the coffee between takes.",
    photo: "/placeholders/founder-1.svg",
  },
  {
    // TODO: replace with real founder details
    name: "Founder Two",
    role: "Editor / Producer",
    bio: "Cuts with intention, produces with calm. Turns messy shoots into stories that feel inevitable once you see them.",
    photo: "/placeholders/founder-2.svg",
  },
];

export const companyStory = {
  headline: "Two filmmakers. One split take.",
  body: [
    "Split Take Media started the way a lot of good crews do — two recent film grads who kept ending up on the same sets, finishing each other's shots, and arguing about cuts until they were better.",
    "We make commercial films, social content, and post-production for brands that want work with actual texture. Not stock-smooth. Not over-styled. Just sharp storytelling that moves.",
  ],
};

export const processSteps = [
  {
    title: "Pre-pro",
    detail: "Brief, treatment, shot list, schedule. We get clear before we roll.",
  },
  {
    title: "Shoot",
    detail: "Lean crew, intentional frames, room for the unexpected good take.",
  },
  {
    title: "Post",
    detail: "Edit, sound, color, delivery. Picture lock that actually locks.",
  },
];
