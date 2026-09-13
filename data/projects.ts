export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string; // [Project URL]
  demo?: string; // [Project URL]
  image?: string; // path under /public/images
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "smart-resume-screening-system",
    title: "Smart Resume Screening System",
    description:
      "An AI-powered resume screening system that analyzes resumes and helps identify relevant candidates based on job requirements.",
    technologies: ["Python", "Machine Learning", "NLP", "Streamlit"],
    github: "https://github.com/your-username/smart-resume-screening", // [GitHub URL]
    demo: undefined, // [Project URL]
    image: "/images/projects/resume-screening.png",
    featured: true,
  },
  {
    slug: "rag-chatbot",
    title: "RAG Chatbot",
    description:
      "A document-based conversational AI system that retrieves relevant information from uploaded documents and generates grounded answers using an LLM.",
    technologies: ["Python", "RAG", "Embeddings", "Vector Database", "LLM"],
    github: "https://github.com/your-username/rag-chatbot", // [GitHub URL]
    demo: undefined,
    image: "/images/projects/rag-chatbot.png",
    featured: true,
  },
  {
    slug: "college-enquiry-chatbot",
    title: "College Enquiry Chatbot",
    description:
      "An AI-powered chatbot designed to answer common college-related queries such as admissions, courses, fees, hostel information, and policies.",
    technologies: ["Python", "NLP", "RAG", "Database"],
    github: "https://github.com/your-username/college-enquiry-chatbot", // [GitHub URL]
    demo: undefined,
    image: "/images/projects/college-chatbot.png",
    featured: true,
  },
  {
    slug: "smart-document-classifier",
    title: "Smart Document Classifier",
    description:
      "An intelligent document classification system that automatically categorizes documents using machine learning and NLP techniques.",
    technologies: ["Python", "NLP", "Machine Learning"],
    github: "https://github.com/gunjansharma0019/classifier", // [GitHub URL]
    demo: undefined,
    image: "/images/projects/document-classifier.png",
    featured: true,
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "A modern responsive portfolio showcasing projects, skills, experience, and achievements.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/gunjansharma0019/Gunjansharma_Portfolio", // [GitHub URL]
    demo: "https://gunjansharma.dev", // [Project URL]
    image: "/images/projects/portfolio.png",
    featured: true,
  },
];
