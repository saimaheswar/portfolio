export interface FocusAreaInterface {
  title: string;
  description: string;
}

export interface StatInterface {
  value: string;
  label: string;
}

export const aboutConfig = {
  heading: "About Me",
  paragraphs: [
    "I'm Sai. I build backend systems and AI products that actually survive contact with real users, which, if you've shipped software before, you know is a surprisingly high bar. Plenty of things work in a demo. Fewer things work at 2am when someone's hammering your API.",
    "For the past 5+ years I've architected FastAPI and Flask microservices that handle 50K+ requests a day, wrestled PostgreSQL and Redis into behaving under load, and shipped CI/CD pipelines that cut release windows from 2 hours down to under 20 minutes. These days I spend most of my time wiring LLMs and agentic workflows into systems that used to just be plain old CRUD, and it's more fun than it has any right to be.",
    "Right now I'm a Python Full Stack Engineer at Truist Bank, building backend services and AI-assisted workflows for enterprise banking. Before that I was at NVIDIA, building backend platforms and GPU-accelerated AI tooling for 50+ internal developers and watching compute-heavy workloads get about 20% faster because of it. Banks and GPUs is a strange career arc, but I'm not complaining.",
    "Outside of work I build side projects, mostly because I'd rather break things on my own time than production's. That's given me a real-time fraud detection pipeline, a lakehouse analytics platform, and a small but growing pile of AI agents that occasionally do what I intended. If a system shouldn't work but somehow does anyway, I probably want to open it up and find out why.",
  ],
  stats: [
    { value: "5+", label: "Years building production software" },
    { value: "50K+", label: "API requests served daily at Truist" },
    { value: "50+", label: "Engineers supported by platforms I built at NVIDIA" },
    { value: "10+ hrs", label: "Saved weekly by workflows I've automated" },
  ] as StatInterface[],
  focusAreas: [
    {
      title: "Backend & APIs",
      description:
        "Designing and shipping REST APIs and microservices with Python, FastAPI, Flask, and Go. Built to handle real traffic, not just survive a demo.",
    },
    {
      title: "Data & Cloud Infrastructure",
      description:
        "Building data pipelines and cloud-native systems with PostgreSQL, Kafka, Airflow, Docker, and Kubernetes. The kind that's supposed to stay up at 2am, and mostly does.",
    },
    {
      title: "AI & Agentic Engineering",
      description:
        "Wiring LLMs and machine learning models into production workflows, from prompt design to model serving to the unglamorous validation logic that keeps an AI feature from embarrassing everyone.",
    },
  ] as FocusAreaInterface[],
};
