export interface EducationItem {
  degree: string;
  institution: string; // [College Name]
  duration: string; // [Start Year] – [End Year]
  coursework: string[];
}

export const education: EducationItem[] = [
  {
    degree: "B.Tech / B.E. in Artificial Intelligence & Machine Learning",
    institution: "[College Name]",
    duration: "[Start Year] – [End Year]",
    coursework: [
      "Machine Learning",
      "Data Structures",
      "Database Management Systems",
      "Artificial Intelligence",
      "Python",
      "Statistics",
      "Web Development",
    ],
  },
];
