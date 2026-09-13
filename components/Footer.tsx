import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border-light dark:border-border">
      <div className="section-shell flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-ink-light dark:text-ink">
            {site.name}
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted-light dark:text-muted">
            {site.footerNote}
          </p>
          <div className="mt-4 flex items-center gap-3">
            {[
              { icon: Github, href: site.links.github, label: "GitHub" },
              { icon: Linkedin, href: site.links.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${site.links.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light dark:border-border text-muted-light dark:text-muted transition-colors hover:text-signal-cyan"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-light dark:text-muted transition-colors hover:text-ink-light dark:hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-border-light dark:border-border py-6">
        <div className="section-shell flex flex-col items-center justify-between gap-2 text-xs text-muted-light dark:text-muted sm:flex-row">
          <p>&copy; 2026 {site.name}. All rights reserved.</p>
          <p>Built with Next.js &amp; React</p>
        </div>
      </div>
    </footer>
  );
}
