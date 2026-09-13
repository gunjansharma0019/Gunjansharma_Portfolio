import { MapPin, Compass, BookOpen, Briefcase } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const infoCards = [
  { icon: MapPin, label: "Location", value: site.location },
  { icon: Compass, label: "Focus", value: site.focus },
  { icon: BookOpen, label: "Currently Learning", value: site.currentlyLearning },
  { icon: Briefcase, label: "Open To", value: site.openTo },
];

export function About() {
  return (
    <section id="about" className="section-shell py-24 sm:py-28">
      <SectionHeading title="About Me" />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="mx-auto w-full max-w-xs lg:mx-0">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border-light dark:border-border bg-card-light dark:bg-card">
            {/* Replace with a real photo at /public/images/profile.jpg */}
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-light dark:text-muted">
              [Profile Photo]
            </div>
          </div>
        </div>

        <div>
          <p className="text-base leading-relaxed text-muted-light dark:text-muted sm:text-lg">
            {site.about}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {site.interests.map((interest) => (
              <li
                key={interest}
                className="rounded-full border border-border-light dark:border-border px-3 py-1.5 text-sm text-ink-light dark:text-ink"
              >
                {interest}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {infoCards.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="surface-card flex items-start gap-3 p-4"
              >
                <Icon size={18} className="mt-0.5 shrink-0 text-signal-cyan" />
                <div>
                  <p className="text-xs text-muted-light dark:text-muted">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-ink-light dark:text-ink">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
