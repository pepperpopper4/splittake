# Split Take Media

Portfolio site for Split Take Media — commercial films, social content, and post-production.

**Visual direction:** Nike Grind–inspired speckled rubber texture with blotchy multicolor display lettering (warm orange, cool blue-grey, lime, pink, violet on near-black).

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- CSS motion (no Framer Motion — keeps the install light)
- Content in typed `/src/data` files
- Vimeo embeds for video
- Formspree for contact (optional env var)

## Local development

```bash
# Node 18+ required
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

All editable copy lives in `src/data/`:

| File | What to edit |
|------|----------------|
| `site.ts` | Company name, tagline, email, social URLs, showreel Vimeo ID |
| `projects.ts` | Portfolio pieces (title, slug, category, Vimeo ID, thumbnail, credits) |
| `team.ts` | Founder names, roles, bios, photos + company story |
| `services.ts` | Service blocks and deliverables |
| `testimonials.ts` | Client quotes |

Look for `// TODO:` comments — those mark placeholder values.

### Adding a project

1. Upload the film to Vimeo and copy the numeric ID from the URL.
2. Add a thumbnail under `public/placeholders/` (or `public/work/`).
3. Append an object to `projects` in `src/data/projects.ts`.
4. Set `featured: true` if it should appear on the home page.

### Contact form

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy `.env.example` → `.env.local`.
3. Set `NEXT_PUBLIC_FORMSPREE_ID=your_form_id`.
4. Restart `npm run dev`.

Without the env var, the form still validates and logs submissions in the browser console (demo mode).

## Deploy to Vercel (free)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Add env var `NEXT_PUBLIC_FORMSPREE_ID` in Project Settings → Environment Variables.
4. Deploy. Later: attach a custom domain in Vercel → Domains.

No Railway or paid server needed.

## Scripts

```bash
npm run dev      # local server
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```
