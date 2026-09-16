import { ValidSkills } from "./constants";

export interface SchoolProjectInterface {
  title: string;
  description: string;
  techStack: ValidSkills[];
  githubLink?: string;
}

export interface EducationInterface {
  id: string;
  school: string;
  degree: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description?: string;
  courses?: string[];
  projects?: SchoolProjectInterface[];
  schoolUrl?: string;
}

export const education: EducationInterface[] = [
  {
    id: "southern-arkansas-university",
    school: "Southern Arkansas University",
    degree: "M.S. in Computer Information Science",
    location: "Magnolia, AR",
    startDate: new Date("2023-05-01"),
    endDate: new Date("2024-12-01"),
    description:
      "Graduate coursework in distributed systems, cloud computing, and applied machine learning, with a research-driven capstone on cloud security.",
    courses: [
      "Distributed Systems",
      "Cloud Computing",
      "Machine Learning",
      "Advanced Database Systems",
      "Information Security",
    ],
    projects: [
      {
        title:
          "Risk Management of E-Commerce Security in Cloud Computing Environments",
        description:
          "A capstone research project analyzing security risks in cloud-hosted e-commerce platforms and building a Python-based prototype to model and mitigate common attack vectors in a cloud deployment.",
        techStack: ["Python", "AWS", "System Design"],
        githubLink: "https://github.com/saimaheswar/ecommerce-security-project",
      },
    ],
  },
  {
    id: "gitam",
    school: "GITAM",
    degree: "B.S. in Computer Science",
    location: "Hyderabad, India",
    startDate: new Date("2018-05-01"),
    endDate: new Date("2022-05-01"),
    description:
      "Undergraduate coursework covering programming fundamentals, data structures, databases, and software engineering.",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Software Engineering",
    ],
    projects: [
      {
        title: "Bike Rental System",
        description:
          "A desktop bike rental management application with a Qt Designer GUI, SQLite database, and Python scripts for handling rentals, returns, and inventory tracking.",
        techStack: ["Python", "SQL"],
        githubLink: "https://github.com/saimaheswar/Bike-rental-project",
      },
    ],
  },
];
