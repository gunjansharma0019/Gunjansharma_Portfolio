"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { useActiveSection } from "@/lib/useActiveSection";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { activeId, scrolled } = useActiveSection(
    navLinks.map((l) => l.href.replace("#", ""))
  );

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false);
    document
      .getElementById(href.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border-light dark:border-border bg-base-light/75 dark:bg-base/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-display text-lg font-semibold tracking-tight text-ink-light dark:text-ink"
          aria-label={`${site.name} — home`}
        >
          {site.name}
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-3 py-2 text-sm text-muted-light dark:text-muted transition-colors hover:text-ink-light dark:hover:text-ink"
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute inset-x-3 -bottom-px h-px bg-signal-gradient"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden rounded-full bg-signal-gradient px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Let&apos;s Connect
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-light dark:text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border-light dark:border-border bg-base-light/95 dark:bg-base/95 backdrop-blur-md lg:hidden"
          >
            <div className="section-shell flex flex-col gap-1 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-lg px-3 py-3 text-base text-ink-light dark:text-ink hover:bg-card-light dark:hover:bg-card"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-2 rounded-full bg-signal-gradient px-4 py-3 text-center text-sm font-medium text-white"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
