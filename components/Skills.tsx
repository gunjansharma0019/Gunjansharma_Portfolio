import {
  Code2,
  Braces,
  FileType2,
  Database,
  BrainCog,
  Layers,
  MessagesSquare,
  Sparkles,
  SearchCode,
  Wand2,
  Globe,
  Palette,
  Component,
  Triangle,
  Wind,
  Server,
  GitBranch,
  Github,
  SquareTerminal,
  BookOpen,
  Box,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Python: Code2,
  JavaScript: Braces,
  TypeScript: FileType2,
  SQL: Database,
  "Machine Learning": BrainCog,
  "Deep Learning": Layers,
  NLP: MessagesSquare,
  "Generative AI": Sparkles,
  RAG: SearchCode,
  "Prompt Engineering": Wand2,
  HTML: Globe,
  CSS: Palette,
  React: Component,
  "Next.js": Triangle,
  "Tailwind CSS": Wind,
  "Node.js": Server,
  PostgreSQL: Database,
  Prisma: Database,
  "REST APIs": Server,
  Git: GitBranch,
  GitHub: Github,
  "VS Code": SquareTerminal,
  Jupyter: BookOpen,
  Docker: Box,
};

export function Skills() {
  return (
    <section id="skills" className="section-shell py-24 sm:py-28">
      <SectionHeading
        title="Skills & Technologies"
        description="Tools and technologies I use to design, train, and ship AI-driven applications."
      />

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map(({ category, skills }) => (
          <div key={category} className="surface-card p-6">
            <h3 className="text-sm font-medium text-muted-light dark:text-muted">
              {category}
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2">
              {skills.map((skill) => {
                const Icon = iconMap[skill] ?? Code2;
                return (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm text-ink-light dark:text-ink transition-colors hover:bg-card-light dark:hover:bg-card"
                  >
                    <Icon size={16} className="shrink-0 text-signal-cyan" />
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
