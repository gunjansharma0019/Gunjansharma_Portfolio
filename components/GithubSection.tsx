import { Github, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function GithubSection() {
  return (
    <section className="bg-surface-light dark:bg-surface py-20">
      <div className="section-shell">
        <div className="surface-card flex flex-col items-center justify-between gap-6 p-8 sm:flex-row sm:p-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-signal-cyan/10 text-signal-cyan">
              <Github size={22} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ink-light dark:text-ink">
                Code & Contributions
              </h2>
              <p className="text-sm text-muted-light dark:text-muted">
                View my projects on GitHub
              </p>
            </div>
          </div>

          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-signal-gradient px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            Visit GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
