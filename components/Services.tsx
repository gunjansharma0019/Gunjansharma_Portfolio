import { BrainCog, Sparkles, SearchCode, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: BrainCog,
    title: "Machine Learning",
    description: "Building practical ML solutions for real-world problems.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description:
      "Creating applications powered by modern LLMs and generative AI.",
  },
  {
    icon: SearchCode,
    title: "RAG Applications",
    description:
      "Building knowledge-based applications using retrieval and generation.",
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "Developing responsive applications with modern frontend and backend technologies.",
  },
];

export function Services() {
  return (
    <section className="bg-surface-light dark:bg-surface py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading title="What I Do" />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="surface-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal-cyan/10 text-signal-cyan">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink-light dark:text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-light dark:text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
