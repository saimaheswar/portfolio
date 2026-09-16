import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "truist-bank",
    position: "Python Full Stack Engineer",
    company: "Truist Bank",
    location: "USA",
    startDate: new Date("2024-07-01"),
    endDate: "Present",
    description: [
      "Integrated AI-powered APIs and machine learning services into banking workflows to automate document validation and customer data processing, saving operations teams 10+ hours weekly.",
      "Owned end-to-end delivery of backend services using Python, FastAPI, Flask, Go, and REST APIs, breaking large banking applications into scalable microservices processing 50K+ API requests daily.",
      "Tuned PostgreSQL queries by redesigning indexes, optimizing joins, and caching frequently accessed data in Redis, reducing peak query latency by 12%.",
      "Architected CI/CD pipelines using Docker, Kubernetes, Jenkins, GitHub Actions, and GitLab CI/CD, cutting release windows from 2 hours to under 20 minutes.",
    ],
    achievements: [
      "Integrated AI-powered APIs and machine learning services into banking workflows to automate document validation and customer data processing, saving operations teams 10+ hours weekly.",
      "Owned end-to-end delivery of backend services using Python, FastAPI, Flask, Go, and REST APIs, breaking large banking applications into scalable microservices that processed 50K+ API requests daily for enterprise stakeholders.",
      "Tuned PostgreSQL queries by redesigning indexes, optimizing joins, and caching frequently accessed data in Redis, reducing peak query latency by 12% while supporting 10K+ customer records during month-end processing spikes.",
      "Architected CI/CD pipelines using Docker, Kubernetes, Jenkins, GitHub Actions, and GitLab CI/CD, enabling automated production deployments that cut release windows from 2 hours to under 20 minutes.",
      "Improved production reliability by implementing centralized logging, health checks, retry mechanisms, and exception handling, reducing recurring production incidents by nearly 20%.",
      "Built responsive web applications with Angular, TypeScript, JavaScript, HTML5, and CSS3, creating reusable components and integrating secure REST APIs for desktop and mobile views.",
      "Partnered directly with solution architects, security engineers, QA teams, and business stakeholders to translate requirements into secure applications supporting multi-million-dollar transaction processing.",
    ],
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Go",
      "REST APIs",
      "Microservices",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "GitLab CI/CD",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    companyUrl: "https://www.truist.com",
  },
  {
    id: "nvidia",
    position: "Junior Python Full Stack Engineer",
    company: "NVIDIA",
    location: "India",
    startDate: new Date("2020-06-01"),
    endDate: new Date("2023-04-01"),
    description: [
      "Designed and built backend services using Python, FastAPI, Flask, C++, and Go, developing REST APIs and scalable architectures supporting engineering platforms used by 50+ internal developers.",
      "Used CUDA, TensorRT, and NVIDIA GPU frameworks to integrate GPU-accelerated AI workflows into internal applications, reducing processing time for compute-intensive workloads by ~20%.",
      "Integrated machine learning models with backend inference services and data pipelines, cutting engineering integration effort by nearly 30%.",
      "Deployed containerized, cloud-native applications using Docker, Kubernetes, and Helm across development, QA, and enterprise environments.",
    ],
    achievements: [
      "Designed and built backend services using Python, FastAPI, Flask, C++, and Go, developing REST APIs and scalable architectures supporting engineering platforms used by 50+ internal developers.",
      "Used CUDA, TensorRT, and NVIDIA GPU frameworks to integrate GPU-accelerated AI workflows into internal applications, reducing processing time for compute-intensive workloads by ~20%.",
      "Integrated machine learning models with backend inference services and data pipelines, simplifying production deployment and cutting engineering integration effort by nearly 30%.",
      "Deployed containerized, cloud-native applications using Docker, Kubernetes, and Helm, maintaining consistent production releases across development, QA, and enterprise environments.",
      "Optimized distributed data systems including PostgreSQL, MongoDB, Redis, and Elasticsearch, introducing indexing strategies that reduced search response times while managing millions of records.",
      "Automated build and deployment pipelines with Jenkins, GitLab CI/CD, Git, and Linux scripting, reducing release preparation time by 25%.",
      "Developed modern web interfaces with React.js, TypeScript, JavaScript, HTML5, and CSS3, creating 10+ reusable UI components across engineering dashboards.",
    ],
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "C++",
      "Go",
      "CUDA",
      "TensorRT",
      "Machine Learning",
      "Docker",
      "Kubernetes",
      "Helm",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Jenkins",
      "GitLab CI/CD",
      "Git",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    companyUrl: "https://www.nvidia.com",
  },
];
