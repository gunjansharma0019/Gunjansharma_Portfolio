export interface ExperienceItem {
  organization: string; // [Organization Name]
  role: string;
  duration: string; // [Start] – [End]
  description: string;
  technologies: string[];
  achievements: string[];
}

export const experience: ExperienceItem[] = [
  {
    organization: "[Organization Name]",
    role: "AI/ML Intern",
    duration: "[Start Month, Year] – [End Month, Year]",
    description:
      "Contributed to machine learning-based applications as part of the team's AI initiatives.",
    technologies: ["Python", "Machine Learning", "NLP"],
    achievements: [
      "Worked on machine learning-based applications",
      "Explored NLP and Generative AI",
      "Built practical AI prototypes",
      "Worked with data preprocessing and model development",
    ],
  },
];
