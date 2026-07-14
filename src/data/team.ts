export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin?: string;
};

export const team: TeamMember[] = [
  {
    name: "Jacques Ciambra",
    role: "Director / Editor",
    bio: "Emerson College film school graduate focused in screenwriting and directing. Over the past few years I've worked on various narrative short films, and directed short films as well as ads for peers in my graduating class. Combining my directing projects with my love of editing, I've edited everything from Bachelor of Fine Arts thirty-minute films to short social media spots during an internship with the non-profit WORDTheatre. Currently I'm expanding my creative work to commercial directing — whether that be a short-form ad or a more traditional video advertisement.",
    photo: "/team/jacques-ciambra.jpg",
    linkedin: "https://www.linkedin.com/in/jacques-ciambra-22850a276/",
  },
  {
    name: "Thomas McVay",
    role: "Cinematographer / Lighting",
    bio: "Emerson College film school graduate focused in cinematography and lighting. Over the course of my college career I worked my way up from assisting the camera team to directing my own camera and lighting team. Most of my cinematography work consists of narrative short films and short SPEC video ads. College allowed me to hone in on my technical ability, as well as build up my own personal equipment stash. Moving into commercial work I want to create unique looks and aesthetics for each brand we work with, allowing their personal strengths to shine so their audience won't be able to look away.",
    photo: "/team/thomas-mcvay.jpg",
  },
];

export const companyStory = {
  headline: "Two filmmakers. One split take.",
  body: [
    "Split Take Media is Jacques Ciambra and Thomas McVay — Emerson College film grads who kept ending up on the same sets, finishing each other's shots, and arguing about cuts until they were better.",
    "We make commercial video, social media campaigns, and product photography for brands that want work with actual texture. Not stock-smooth. Not over-styled. Just sharp storytelling that moves.",
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
