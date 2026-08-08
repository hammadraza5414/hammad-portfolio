# Hammad — Portfolio

Dark / crimson personal portfolio. Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion.

## Run locally

```bash
npm install
cp .env.local.example .env.local   # then paste your Web3Forms key
npm run dev                        # http://localhost:3000
```

## Deploy

Push to GitHub → import at [vercel.com](https://vercel.com) → add `NEXT_PUBLIC_WEB3FORMS_KEY` in Project Settings → deploy.

## Structure

```
src/app/
  layout.tsx        Root layout, Plus Jakarta Sans font
  page.tsx          Home — assembles all sections
  globals.css       Tailwind + custom bg patterns + wave keyframe
  lib/data.ts       Content (nav, process, skills, projects, experience) + icon paths
  components/
    ui.tsx          Icon, Reveal, SectionLabel (shared)
    Nav.tsx         Sticky header with mobile menu
    Hero.tsx        Hero + rotating role subtitle + portrait card
    AudioCard.tsx   Web Audio synth toggle with animated wave bars
    About.tsx       4-step process grid
    Skills.tsx      3 skill category cards + soft-skill pills
    Projects.tsx    Featured project cards with metrics
    Experience.tsx  Vertical alternating timeline
    Contact.tsx     Form wired to Web3Forms
    Footer.tsx      (server component)
```

## Customize

- **Content:** edit `src/app/lib/data.ts` — nav labels, process steps, skills, projects, experience.
- **Copy:** hero headline/pitch in `Hero.tsx`, section headings in each component.
- **Colors:** `tailwind.config.ts` extends `obsidian`, `charcoal`, `crimson`. Change once, applies everywhere.
- **Resume link:** drop `resume.pdf` in `public/` — the download button in the hero already points to `/resume.pdf`.
- **Portrait:** replace the SVG composition in `Hero.tsx` with a real image via `next/image`.

## Contact form

Get a free access key at [web3forms.com](https://web3forms.com), put it in `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
```

Without the key, the form still works locally — it just simulates a submit.
