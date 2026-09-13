import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="bg-surface-light dark:bg-surface py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          title="Featured Projects"
          description="A selection of applications I've built across machine learning, generative AI, and full-stack development."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
