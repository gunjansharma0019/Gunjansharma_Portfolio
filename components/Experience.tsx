import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-shell py-24 sm:py-28">
      <SectionHeading title="Experience" />

      <ol className="relative mt-12 space-y-10 border-l border-border-light dark:border-border pl-8">
        {experience.map((item, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-signal-gradient ring-4 ring-base-light dark:ring-base" />

            <p className="text-xs text-muted-light dark:text-muted">
              {item.duration}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-ink-light dark:text-ink">
              {item.role} · {item.organization}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-light dark:text-muted">
              {item.description}
            </p>

            <ul className="mt-3 space-y-1.5">
              {item.achievements.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-sm text-ink-light dark:text-ink"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-cyan" />
                  {point}
                </li>
              ))}
            </ul>

            <ul className="mt-3 flex flex-wrap gap-1.5">
              {item.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border-light dark:border-border px-2.5 py-1 text-xs text-muted-light dark:text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
