import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Sai Maheswar Venkata's portfolio website.",
    },
  },
  about: {
    title: "About Me",
    description: "A bit about who I am and what I care about.",
    metadata: {
      title: "About",
      description: "About Sai Maheswar Venkata, full-stack and AI engineer.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Sai Maheswar Venkata's key skills across backend, cloud, and AI/ML.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description:
        "Sai Maheswar Venkata's projects in backend, data, and AI engineering.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Sai Maheswar Venkata's professional journey and experience timeline.",
    },
  },
  education: {
    title: "Education",
    description: "Academic background and school projects.",
    metadata: {
      title: "Education",
      description:
        "Sai Maheswar Venkata's academic background and school projects.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore opportunities.",
    metadata: {
      title: "Contact",
      description: "Contact Sai Maheswar Venkata.",
    },
  },
  resume: {
    title: "Resume",
    description: "Sai Maheswar Venkata's resume.",
    metadata: {
      title: "Resume",
      description: "Sai Maheswar Venkata's resume.",
    },
  },
};
