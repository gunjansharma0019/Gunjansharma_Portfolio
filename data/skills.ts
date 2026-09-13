export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "AI / ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Generative AI",
      "RAG",
      "Prompt Engineering",
    ],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    category: "Database & Backend",
    skills: ["PostgreSQL", "Prisma", "REST APIs"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter", "Docker"],
  },
];
