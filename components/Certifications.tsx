import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="section-shell py-24 sm:py-28">
      <SectionHeading title="Certifications & Achievements" />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <div key={i} className="surface-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal-cyan/10 text-signal-cyan">
              <Award size={18} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-ink-light dark:text-ink">
              {cert.name}
            </h3>
            <p className="mt-1 text-sm text-muted-light dark:text-muted">
              {cert.issuer}
            </p>
            <p className="mt-1 text-xs text-muted-light dark:text-muted">
              {cert.date}
              {cert.credentialId ? ` · ID: ${cert.credentialId}` : ""}
            </p>

            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-signal-cyan"
              >
                Verify <ExternalLink size={14} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
