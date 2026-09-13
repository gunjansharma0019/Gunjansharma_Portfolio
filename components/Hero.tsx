"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { site } from "@/lib/site";
import { TypedRoles } from "@/components/ui/TypedRoles";
import { NeuralSignal } from "@/components/ui/NeuralSignal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div className="section-shell grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border-light dark:border-border px-3 py-1 text-xs text-muted-light dark:text-muted"
          >
            {site.role}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-ink-light dark:text-ink sm:text-5xl"
          >
            {site.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 text-xl text-muted-light dark:text-muted sm:text-2xl"
          >
            {site.subheadline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-5 h-8 font-display text-lg sm:text-xl"
          >
            <TypedRoles roles={site.rotatingRoles} />
            <span className="sr-only">
              {site.rotatingRoles.join(", ")}
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 max-w-lg text-base leading-relaxed text-muted-light dark:text-muted"
          >
            {site.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="rounded-full bg-signal-gradient px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
            >
              View My Work
            </a>
            <a
              href={site.links.resume}
              download
              className="rounded-full border border-border-light dark:border-border px-6 py-3 text-sm font-medium text-ink-light dark:text-ink transition-colors hover:bg-card-light dark:hover:bg-card"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4">
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light dark:border-border text-muted-light dark:text-muted transition-colors hover:text-signal-cyan hover:shadow-[0_0_0_1px_rgba(34,211,238,0.4)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <NeuralSignal />
        </motion.div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-light dark:text-muted sm:block"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
