"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

// No email/backend service is wired up yet. To actually deliver messages,
// point this at a real endpoint (a Next.js API route, Formspree, EmailJS, etc.)
// and replace the `mailto:` fallback in handleSubmit below.
const CONTACT_ENDPOINT: string | null = null;

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Please add a short message.";
    else if (form.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    else if (form.message.trim().length > 2000)
      next.message = "Message is too long (max 2000 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      if (CONTACT_ENDPOINT) {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("success");
        setStatusMessage("Your message has been sent. I'll get back to you soon.");
        setForm(initialForm);
      } else {
        // Honest fallback: no backend is configured, so open the user's
        // email client with the message pre-filled instead of pretending
        // it was delivered.
        const mailto = `mailto:${site.links.email}?subject=${encodeURIComponent(
          form.subject || `Portfolio message from ${form.name}`
        )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;
        window.location.href = mailto;
        setStatus("success");
        setStatusMessage(
          "This form isn't connected to an email service yet, so I've opened your email client with your message pre-filled — just hit send there."
        );
        setForm(initialForm);
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try emailing me directly instead.");
    }
  };

  const inputClasses = (hasError: boolean) =>
    `w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-ink-light dark:text-ink placeholder:text-muted-light dark:placeholder:text-muted focus:border-signal-cyan focus:outline-none ${
      hasError
        ? "border-red-400/60"
        : "border-border-light dark:border-border"
    }`;

  return (
    <section id="contact" className="section-shell py-24 sm:py-28">
      <SectionHeading
        title="Let's Build Something Together"
        description="I'm always interested in learning, collaborating, and working on meaningful projects."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        <div className="space-y-4">
          {[
            { icon: Mail, label: site.links.email, href: `mailto:${site.links.email}` },
            { icon: Github, label: "GitHub", href: site.links.github },
            { icon: Linkedin, label: "LinkedIn", href: site.links.linkedin },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="surface-card flex items-center gap-3 p-4 text-sm text-ink-light dark:text-ink transition-colors hover:border-signal-cyan/40"
            >
              <Icon size={18} className="text-signal-cyan" />
              {label}
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs text-muted-light dark:text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={inputClasses(Boolean(errors.name))}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs text-muted-light dark:text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={inputClasses(Boolean(errors.email))}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-1.5 block text-xs text-muted-light dark:text-muted">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className={inputClasses(false)}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs text-muted-light dark:text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={inputClasses(Boolean(errors.message))}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center gap-2 rounded-full bg-signal-gradient px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" && <Loader2 size={16} className="animate-spin" />}
            Send Message
          </button>

          {status === "success" && (
            <p role="status" className="flex items-start gap-2 text-sm text-emerald-400">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" /> {statusMessage}
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="flex items-start gap-2 text-sm text-red-400">
              <AlertCircle size={16} className="mt-0.5 shrink-0" /> {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
