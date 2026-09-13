import { Github, ExternalLink, Sparkle } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group surface-card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-signal-cyan/40 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)]">
      {/* Visual placeholder — swap for a real screenshot at project.image via next/image */}
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-signal-cyan/10 via-transparent to-signal-violet/10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] transition-transform duration-500 group-hover:scale-[1.04]" />
        <Sparkle className="relative text-signal-cyan/60" size={32} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink-light dark:text-ink">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-light dark:text-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border-light dark:border-border px-2.5 py-1 text-xs text-muted-light dark:text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-light dark:border-border px-3.5 py-2 text-xs font-medium text-ink-light dark:text-ink transition-colors group-hover:border-signal-cyan/50"
            >
              <Github size={14} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-signal-gradient px-3.5 py-2 text-xs font-medium text-white"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
