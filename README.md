# H.O.S — Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, Tailwind CSS and React. It showcases projects, skills (Tech Stack), and includes a contact form.

## Features

- About section with Tech Stack, Education and Languages
- Project gallery with responsive thumbnails and hover effects
- Contact form (template) with brand and email links
- Social links in the footer and in the About card
- Responsive layout and smooth scrolling

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- react-icons for icons

## Quick Start

1. Clone the repo

```bash
git clone <your-repo-url> my-app
cd my-app
```

2. Install dependencies

```bash
npm install
```

3. Run development server

```bash
npm run dev
```

Open http://localhost:3000 to view the site.

## Scripts

- `npm run dev` — Start Next.js in development mode
- `npm run build` — Build the app for production
- `npm start` — Start the production server (after build)

> Note: These assume the standard `package.json` scripts created by `create-next-app`. Adjust as needed.

## Adding / Updating Content

- About section: `components/about.tsx` — edit the intro, Tech Stack card, Education and Languages.
- Projects: `components/projects.tsx` — update the `projects` array or convert to dynamic pages in `app/projects/[slug]`.
- Contact form: `components/contact.tsx` — update action or connect to an API (Netlify Functions, Vercel Serverless, or custom endpoint).
- Social links: update the placeholder URLs in `components/footer.tsx` and `components/about.tsx`.
- Global styles: `app/globals.css` — update theme variables, fonts, and `scroll-behavior`.
- Site metadata: `app/layout.tsx` — update `metadata` for title/description and add Open Graph tags if desired.

## Customize Brand Color

Color variables are defined in `app/globals.css` under the `@theme inline` block (e.g. `--color-champagne-mist-600`). Edit those to change the brand palette.

## Images

Place project thumbnails and other static images under `public/projects/` and reference them via `/projects/<image>`.

## Accessibility & Performance Tips

- Use `alt` attributes on images (already used with `next/image`).
- Use semantic HTML and ARIA attributes for interactive controls.
- Optimize images with `next/image` props `priority`, `placeholder` and `sizes`.
- Run Lighthouse and address accessibility/performance issues.

## Deployment

This site is ready to deploy to Vercel (recommended) or any platform that supports Next.js. Example for Vercel:

1. Push your repository to GitHub
2. Import the repo in Vercel and select the project
3. Vercel will detect Next.js and deploy automatically

## Where to change common items

- Logo / site title: `components/navbar/page.tsx`
- Footer text and socials: `components/footer.tsx`
- Resume download: add `public/resume.pdf` and link from the hero or header

## Troubleshooting

- If you see errors about client handlers in server components (e.g., "Event handlers cannot be passed to Client Component props"), move interactive code into a Client Component (add `"use client"`) or use anchor links and CSS for navigation.
- Tailwind warnings: the project may suggest shorthand for arbitrary classes; these are suggestions and can be updated for consistency.

## Contributing

Small PRs are welcome — typical contributions:

- Fix layout/spacing regressions
- Improve responsiveness and accessibility
- Add more projects or case studies

