# Gunjan Sharma — AI/ML Portfolio

A modern, responsive personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize your content

Almost everything is data-driven, so you can update the site without touching component code:

| What | File |
|---|---|
| Name, bio, socials, resume link | `lib/site.ts` |
| Projects | `data/projects.ts` |
| Skills | `data/skills.ts` |
| Experience | `data/experience.ts` |
| Education | `data/education.ts` |
| Certifications | `data/certifications.ts` |

Search each file for bracketed placeholders like `[Your Email]`, `[College Name]`, `[GitHub URL]` and replace them with your real information.

## Add real assets

- **Resume**: replace `public/resume.pdf` with your actual resume (same filename).
- **Profile photo**: add an image and swap it in `components/About.tsx`.
- **Project screenshots**: add images to `public/images/projects/` and swap the placeholder visual in `components/ui/ProjectCard.tsx` for a Next.js `<Image />` using each project's `image` path.
- **Open Graph image**: add `public/images/og-cover.png` (1200×630) for link previews.
- **Favicon**: replace `public/favicon.ico`.

## Contact form

The contact form validates input and, since no email backend is configured yet, opens the visitor's email client with the message pre-filled (see `CONTACT_ENDPOINT` in `components/Contact.tsx`). To actually receive messages in an inbox or database, wire that constant to a real endpoint — a Next.js API route, Formspree, EmailJS, or similar — and add PostgreSQL only if you need to persist submissions yourself.

## Theme

Dark mode is the default; visitors can switch to light or match their system preference from the navbar. The choice persists in `localStorage`.

## Tech stack

Next.js · React · TypeScript · Tailwind CSS · Framer Motion · lucide-react
