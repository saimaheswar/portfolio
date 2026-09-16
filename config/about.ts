export interface FocusAreaInterface {
  title: string;
  description: string;
}

export const aboutConfig = {
  heading: "About Me",
  paragraphs: [
    "I'm Sai — a full-stack and AI engineer with 5+ years of experience building Python web applications, backend systems, and machine learning services.",
    "I've spent my career working across the stack: architecting FastAPI and Flask microservices, tuning PostgreSQL and Redis at scale, shipping CI/CD pipelines with Docker and Kubernetes, and, more recently, wiring AI and agentic workflows into production systems.",
    "I currently work as a Python Full Stack Engineer at Truist Bank, where I build backend services and AI-assisted workflows for enterprise banking applications. Before that, I was at NVIDIA, building backend platforms and GPU-accelerated AI tooling used internally by 50+ developers.",
    "Outside of my day job, I build and ship side projects — a real-time fraud detection pipeline, a lakehouse analytics platform, and a handful of AI-agent experiments — to keep exploring the parts of engineering that don't show up in a job description.",
  ],
  focusAreas: [
    {
      title: "Backend & APIs",
      description:
        "Designing and shipping REST APIs and microservices with Python, FastAPI, Flask, and Go.",
    },
    {
      title: "Data & Cloud Infrastructure",
      description:
        "Building data pipelines and cloud-native systems with PostgreSQL, Kafka, Airflow, Docker, and Kubernetes.",
    },
    {
      title: "AI & Agentic Engineering",
      description:
        "Integrating LLMs and machine learning models into production workflows, from prompt design to model serving.",
    },
  ] as FocusAreaInterface[],
};
