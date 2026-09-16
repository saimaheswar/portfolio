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
    "I'm Sai — I build backend systems and AI-powered products that hold up under real production load, not just in a demo. Give me a vague problem and a terminal, and I'll come back with something that ships.",
    "Over the past 5+ years I've architected FastAPI and Flask microservices handling 50K+ requests a day, tuned PostgreSQL and Redis until slow dashboards became fast ones, and shipped CI/CD pipelines that cut release windows from 2 hours to under 20 minutes. Lately, most of what excites me is wiring LLMs and agentic workflows into systems that used to be pure CRUD.",
    "I'm currently a Python Full Stack Engineer at Truist Bank, building backend services and AI-assisted workflows for enterprise banking. Before that, I was at NVIDIA, where I built backend platforms and GPU-accelerated AI tooling used by 50+ internal developers — and watched compute-heavy workloads get ~20% faster because of it.",
    "Outside my day job, I ship side projects because that's where I get to break things on purpose — a real-time fraud detection pipeline, a lakehouse analytics platform, and a growing pile of AI-agent experiments. If it involves untangling a system that shouldn't work but somehow does, I'm probably already interested.",
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
        "Designing and shipping REST APIs and microservices with Python, FastAPI, Flask, and Go — built to handle real traffic, not just pass a demo.",
    },
    {
      title: "Data & Cloud Infrastructure",
      description:
        "Building data pipelines and cloud-native systems with PostgreSQL, Kafka, Airflow, Docker, and Kubernetes that stay up at 2am.",
    },
    {
      title: "AI & Agentic Engineering",
      description:
        "Wiring LLMs and machine learning models into production workflows — from prompt design to model serving to the boring validation logic that makes it trustworthy.",
    },
  ] as FocusAreaInterface[],
};
