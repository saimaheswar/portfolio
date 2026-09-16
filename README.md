# Sai Maheswar Venkata — Portfolio

Personal portfolio site for Sai Maheswar Babbellapati Venkata — full-stack and AI engineer. Built with Next.js, React, Tailwind CSS, and Framer Motion.

## Sections

- **About** — background and focus areas
- **Projects** — personal GitHub projects
- **Experience** — professional work history
- **Education** — academic background and school projects
- **Skills** — technical skills
- **Contact** — contact form + direct links

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Site content lives in typed config files under [`config/`](config), including [`site.ts`](config/site.ts), [`about.ts`](config/about.ts), [`projects.ts`](config/projects.ts), [`experience.ts`](config/experience.ts), [`education.ts`](config/education.ts), and [`skills.ts`](config/skills.ts).

Copy `.env.copy` to `.env.local` to configure the contact form (Google Form submission) and Google Analytics. Without these set, the contact form falls back to opening a pre-filled email draft, and analytics is simply skipped.

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` redeploys automatically once the project is linked.

## Credits

Built on top of the open-source [minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio) template by [Naman Barkiya](https://github.com/namanbarkiya), used under the MIT license (see [LICENSE](LICENSE)).
