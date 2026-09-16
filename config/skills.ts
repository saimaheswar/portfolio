import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "My primary language for backend services, data pipelines, and machine learning workflows.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "FastAPI",
    description:
      "Build fast, typed, async REST APIs and microservices for production backend systems.",
    rating: 5,
    icon: Icons.fastapi,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Docker",
    description:
      "Containerize applications for consistent builds and deployments across environments.",
    rating: 5,
    icon: Icons.docker,
  },
  {
    name: "PostgreSQL",
    description:
      "Design schemas, tune indexes, and optimize queries for relational data at scale.",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "AWS",
    description:
      "Deploy and scale containerized, cloud-native applications using core AWS services.",
    rating: 5,
    icon: Icons.amazonwebservices,
  },
  {
    name: "Kubernetes",
    description:
      "Orchestrate containerized workloads for consistent, resilient production deployments.",
    rating: 4,
    icon: Icons.kubernetes,
  },
  {
    name: "Flask",
    description:
      "Build lightweight REST APIs and services for smaller, focused backend applications.",
    rating: 4,
    icon: Icons.flask,
  },
  {
    name: "TypeScript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "Redis",
    description:
      "Cache frequently accessed data and back real-time features with an in-memory store.",
    rating: 4,
    icon: Icons.redis,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve document-oriented data seamlessly with a flexible NoSQL database.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "Kafka",
    description:
      "Stream and process real-time event data across distributed systems.",
    rating: 4,
    icon: Icons.kafka,
  },
  {
    name: "Spark",
    description:
      "Process large-scale batch and streaming data with Apache Spark and Structured Streaming.",
    rating: 4,
    icon: Icons.spark,
  },
  {
    name: "Airflow",
    description:
      "Orchestrate and schedule multi-step data pipelines with Apache Airflow.",
    rating: 4,
    icon: Icons.airflow,
  },
  {
    name: "GitHub Actions",
    description:
      "Automate builds, tests, and deployments with CI/CD pipelines on GitHub Actions.",
    rating: 4,
    icon: Icons.githubactions,
  },
  {
    name: "Scikit-learn",
    description:
      "Train and evaluate machine learning models for classification and prediction tasks.",
    rating: 4,
    icon: Icons.scikitlearn,
  },
  {
    name: "Pandas",
    description:
      "Clean, transform, and analyze tabular data for reporting and ML feature engineering.",
    rating: 4,
    icon: Icons.pandas,
  },
  {
    name: "NumPy",
    description:
      "Perform fast numerical computation and array operations for data-heavy workloads.",
    rating: 4,
    icon: Icons.numpy,
  },
  {
    name: "LangChain",
    description:
      "Build LLM-powered agents and pipelines that chain prompts, tools, and memory.",
    rating: 4,
    icon: Icons.langchain,
  },
  {
    name: "Angular",
    description:
      "Build dynamic, component-driven web apps with a TypeScript-based framework.",
    rating: 3,
    icon: Icons.angular,
  },
  {
    name: "Go",
    description:
      "Write fast, concurrent backend services and REST APIs in Go.",
    rating: 3,
    icon: Icons.go,
  },
  {
    name: "Java",
    description:
      "Build backend services and data-processing tools on the JVM.",
    rating: 3,
    icon: Icons.java,
  },
  {
    name: "Elasticsearch",
    description:
      "Index and query large datasets for fast full-text search and analytics.",
    rating: 3,
    icon: Icons.elasticsearch,
  },
  {
    name: "Terraform",
    description:
      "Define and provision cloud infrastructure declaratively as code.",
    rating: 3,
    icon: Icons.terraform,
  },
  {
    name: "PyTorch",
    description:
      "Build and train deep learning models for applied machine learning projects.",
    rating: 3,
    icon: Icons.pytorch,
  },
  {
    name: "TensorFlow",
    description:
      "Design and deploy machine learning models with an end-to-end ML platform.",
    rating: 3,
    icon: Icons.tensorflow,
  },
  {
    name: "dbt",
    description:
      "Model and transform warehouse data with version-controlled, testable SQL.",
    rating: 3,
    icon: Icons.dbt,
  },
  {
    name: "GitLab CI/CD",
    description:
      "Automate testing and deployment pipelines with GitLab's built-in CI/CD.",
    rating: 3,
    icon: Icons.gitlab,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
