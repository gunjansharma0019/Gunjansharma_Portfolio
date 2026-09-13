import { Download, FileText } from "lucide-react";
import { site } from "@/lib/site";

export function Resume() {
  return (
    <section className="section-shell py-20">
      <div className="surface-card flex flex-col items-center gap-5 px-8 py-14 text-center">
        <h2 className="text-2xl font-semibold text-ink-light dark:text-ink sm:text-3xl">
          Want to know more?
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-light dark:text-muted sm:text-base">
          Download my resume to explore my skills, projects, education, and
          experience.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a
            href={site.links.resume}
            download
            className="inline-flex items-center gap-2 rounded-full bg-signal-gradient px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href={site.links.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-light dark:border-border px-6 py-3 text-sm font-medium text-ink-light dark:text-ink transition-colors hover:bg-base-light dark:hover:bg-base"
          >
            <FileText size={16} /> View Resume
          </a>
        </div>
        <p className="mt-1 text-xs text-muted-light dark:text-muted">
          Add your PDF at <code>/public/resume.pdf</code> — until then this
          links to a placeholder.
        </p>
      </div>
    </section>
  );
}
