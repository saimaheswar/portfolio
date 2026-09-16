import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "streamguard",
    companyName: "StreamGuard",
    type: "Personal",
    category: ["Data Engineering", "Backend"],
    shortDescription:
      "Real-time payment fraud detection pipeline built on Kafka and Spark Structured Streaming, with Redis for low-latency lookups and PostgreSQL for durable storage.",
    githubLink: "https://github.com/saimaheswar/streamguard",
    techStack: ["Kafka", "Spark Structured Streaming", "Redis", "PostgreSQL", "Python"],
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/streamguard/logo.png",
    pagesInfoArr: [
      {
        title: "Streaming Pipeline",
        description:
          "Ingests payment events from Kafka, scores them for fraud risk in Spark Structured Streaming, and caches recent risk signals in Redis for sub-millisecond lookups.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "StreamGuard is a real-time fraud detection pipeline that mirrors the kind of streaming infrastructure banks use to flag suspicious transactions as they happen.",
        "Payment events flow through Kafka into a Spark Structured Streaming job that applies rule-based and statistical scoring, with Redis backing fast feature lookups and PostgreSQL persisting flagged transactions for audit and reconciliation.",
      ],
      bullets: [
        "Built a Kafka-to-Spark Structured Streaming pipeline for near real-time transaction scoring.",
        "Used Redis for low-latency feature and risk-score lookups during stream processing.",
        "Persisted flagged events and audit trails in PostgreSQL for downstream analysis.",
      ],
    },
  },
  {
    id: "lakeforge",
    companyName: "LakeForge",
    type: "Personal",
    category: ["Data Engineering"],
    shortDescription:
      "Medallion-architecture lakehouse and analytics platform combining Airflow orchestration, dbt transformations, DuckDB, and a custom data quality engine.",
    githubLink: "https://github.com/saimaheswar/lakeforge",
    techStack: ["Airflow", "dbt", "DuckDB", "Data Quality", "Python", "SQL"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-06-01"),
    companyLogoImg: "/projects/lakeforge/logo.png",
    pagesInfoArr: [
      {
        title: "Bronze → Silver → Gold",
        description:
          "Orchestrates a medallion-architecture lakehouse: raw data lands in the bronze layer, gets cleaned and modeled with dbt into silver, and rolls up into gold analytics tables in DuckDB.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "LakeForge is a self-contained lakehouse and analytics platform that implements the medallion architecture (bronze, silver, gold) end to end, orchestrated with Airflow.",
        "dbt handles the transformation layer, DuckDB serves as the fast analytical query engine, and a custom data quality engine validates data at each stage of the pipeline before it's promoted downstream.",
      ],
      bullets: [
        "Orchestrated bronze/silver/gold data pipelines with Apache Airflow.",
        "Modeled transformations declaratively with dbt for testability and lineage.",
        "Used DuckDB as a lightweight, fast analytical query engine for the gold layer.",
        "Built a custom data quality engine to validate data at each layer of the pipeline.",
      ],
    },
  },
  {
    id: "migrateledger",
    companyName: "MigrateLedger",
    type: "Personal",
    category: ["Data Engineering", "Backend"],
    shortDescription:
      "Zero-downtime change-data-capture (CDC) migration framework with row-level reconciliation, built to move production data between databases without an outage window.",
    githubLink: "https://github.com/saimaheswar/migrateledger",
    techStack: ["CDC", "PostgreSQL", "Python", "SQL"],
    startDate: new Date("2024-10-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/migrateledger/logo.png",
    pagesInfoArr: [
      {
        title: "CDC & Reconciliation",
        description:
          "Streams change events from a source database and applies them to a target database in near real time, then runs row-level reconciliation to confirm the two stay in sync.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "MigrateLedger tackles a problem every backend engineer eventually runs into: migrating a live database without taking it offline.",
        "It captures change events from the source database, replays them against the target, and continuously reconciles both sides at the row level, so a migration can be verified and safely cut over without the usual leap of faith.",
      ],
      bullets: [
        "Implemented change-data-capture based replication for zero-downtime migrations.",
        "Built row-level reconciliation to catch drift between source and target during migration.",
        "Designed for safe cutover with rollback support if reconciliation flags a mismatch.",
      ],
    },
  },
  {
    id: "resume-agent",
    companyName: "Resume Agent",
    type: "Personal",
    category: ["AI/ML", "Backend"],
    shortDescription:
      "Free, local AI agent that tailors a resume to a specific job description and renders a polished PDF via RenderCV, using Gemini's free tier for the language model.",
    techStack: ["Python", "Gemini", "RenderCV"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-03-01"),
    companyLogoImg: "/projects/resume-agent/logo.png",
    pagesInfoArr: [
      {
        title: "Job-Aware Resume Tailoring",
        description:
          "Takes a base resume and a job description, uses an LLM to rewrite bullet points and emphasis to match the role, then renders the result as a clean PDF with RenderCV.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Resume Agent is a local-first tool that automates the tedious part of job hunting: tailoring a resume for every application.",
        "It reads a job description, uses Gemini's free tier to rewrite and prioritize resume content around what the role actually asks for, and renders the result into a polished PDF with RenderCV. It all runs locally, so no paid API keys required.",
      ],
      bullets: [
        "Built a local agent that rewrites resume content to match a target job description.",
        "Used Gemini's free tier as the language model backend, keeping the tool free to run.",
        "Rendered final output as a polished PDF using RenderCV.",
      ],
    },
  },
  {
    id: "nerv",
    companyName: "NERV",
    type: "Personal",
    category: ["Full Stack"],
    shortDescription:
      "A full-stack web application built with a FastAPI backend and a React frontend, used as a playground for backend architecture and API design patterns.",
    githubLink: "https://github.com/saimaheswar/NERV",
    techStack: ["FastAPI", "React", "Python", "REST APIs"],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/projects/nerv/logo.png",
    pagesInfoArr: [
      {
        title: "FastAPI + React",
        description:
          "A modern full-stack application pairing a FastAPI backend with a React frontend, structured as a clean starting point for backend-driven web apps.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "NERV is a full-stack application built to explore clean separation between a FastAPI backend and a React frontend.",
        "It's structured around REST API design, environment-based configuration, and a straightforward local development workflow for both the backend and frontend.",
      ],
      bullets: [
        "Built a FastAPI backend exposing REST endpoints consumed by a React frontend.",
        "Structured the project for fast local setup with clear backend/frontend separation.",
      ],
    },
  },
  {
    id: "finance-dashboard",
    companyName: "Finance Dashboard",
    type: "Personal",
    category: ["Frontend", "Full Stack"],
    shortDescription:
      "An Angular dashboard for tracking personal finances, built to practice component architecture and state management in a real-world Angular application.",
    githubLink: "https://github.com/saimaheswar/finance-dashboard",
    techStack: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-05-01"),
    companyLogoImg: "/projects/finance-dashboard/logo.png",
    pagesInfoArr: [
      {
        title: "Dashboard UI",
        description:
          "An Angular single-page app for visualizing income, expenses, and balances, generated with the Angular CLI and built around reusable components.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Finance Dashboard is a personal-finance tracking UI built with Angular, focused on clean component structure and reactive state management.",
        "It's a practical exercise in building a data-heavy Angular application with reusable components, routing, and TypeScript throughout.",
      ],
      bullets: [
        "Built with Angular CLI, using component-driven architecture throughout.",
        "Implemented views for tracking income, expenses, and account balances.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
