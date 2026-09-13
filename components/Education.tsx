import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="bg-surface-light dark:bg-surface py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading title="Education" />

        <div className="mt-12 space-y-6">
          {education.map((item, i) => (
            <div key={i} className="surface-card flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal-cyan/10 text-signal-cyan">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-light dark:text-muted">
                  {item.duration}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-ink-light dark:text-ink">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-muted-light dark:text-muted">
                  {item.institution}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {item.coursework.map((course) => (
                    <li
                      key={course}
                      className="rounded-full border border-border-light dark:border-border px-2.5 py-1 text-xs text-muted-light dark:text-muted"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
