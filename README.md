# quillhouse.co

The public site for Quillhouse, a B2B content agency in Portland: services, case studies,
pricing, team, the Insights blog and the contact page. Live at https://quillhouse.co.

## Stack

- [React Router v7](https://reactrouter.com) in framework mode (the successor to Remix), React 19, TypeScript, Vite
- Fully static: `ssr: false` with every route prerendered at build time into `build/client/`
- Plain CSS in `app/app.css`
- Insights posts come from **Contentful** and are fetched once, at build time
- Hosted on Vercel; `main` is production

## Requirements

- Node 22 or newer (`.nvmrc` pins 22)
- npm (the lockfile is committed; Vercel installs with `npm ci`)

## Environment

Everything except the Insights posts builds with no configuration. To pull posts from
Contentful, set:

| Variable                    | What it is                                                      |
| --------------------------- | --------------------------------------------------------------- |
| `CONTENTFUL_SPACE_ID`       | The Quillhouse website space (Contentful → Settings → General)  |
| `CONTENTFUL_DELIVERY_TOKEN` | A Content Delivery API token (Contentful → Settings → API keys) |

Locally, copy `.env.example` to `.env` and fill both in, then load them into your shell before
building (for example `set -a; source .env; set +a`). Without them the build logs a warning,
`/insights` shows its "No articles yet" state, and no post pages are generated. Every other page
is unaffected.

Only published entries are used (the Delivery API never returns drafts), so a post goes live on
the next deploy after it's published in Contentful.

## Running locally

```sh
npm install
npm run dev         # http://localhost:5173
```

Other scripts:

```sh
npm run build       # prerender every route into build/client/
npm run preview     # serve build/client/ locally
npm run typecheck   # generate route types and run tsc
```

## Project layout

```
app/
  root.tsx              <html> shell, header, footer, 404 / error page
  routes.ts             the route table
  routes/               one module per page (home, services, work, team, pricing, insights, contact)
  routes/insights.post.tsx   a single Insights post, one page per Contentful entry
  routes/sitemap.ts     /sitemap.xml, prerendered like everything else
  components/           SiteHeader, SiteFooter
  lib/posts.server.ts   Contentful client: fetches blogPost entries, renders the Markdown body
  lib/site.ts           site URL, title and canonical helpers
  app.css               all styles; colour variables at the top
public/
  illustrations/        hand-drawn SVGs
  robots.txt, logo.svg
react-router.config.ts  ssr: false, plus the list of paths to prerender (static routes + one per post)
vercel.json             build settings for Vercel
```

### Page metadata

Each route exports `meta()` returning its title (via `pageTitle()`, which adds ` — Quillhouse`),
a description and a canonical link (via `canonical()`). Post pages take their title and
description from the Contentful entry's `title` and `metaDescription` fields.

### Adding a page

Add a module under `app/routes/`, register it in `app/routes.ts`, and add its path to `PAGES` in
`app/routes/sitemap.ts`. It is prerendered automatically.

### Writing an Insights post

Posts are `Blog post` entries in Contentful: title, slug, excerpt, published date, body
(Markdown) and meta description. Publish the entry, then redeploy (or let the Contentful
webhook trigger a deploy). The URL is `/insights/<slug>`.

## Deploying

Vercel builds every push to `quillhouse/site`. Pull requests get a preview URL; merging to
`main` deploys to production at https://quillhouse.co. Settings live in `vercel.json`:

- install: `npm ci`
- build: `npm run build`
- output directory: `build/client`

`CONTENTFUL_SPACE_ID` and `CONTENTFUL_DELIVERY_TOKEN` are set in the Vercel project for
Production and Preview. A Contentful webhook calls the project's deploy hook when an entry is
published or unpublished, so new posts go out without a code change.

Questions about the site: Desmond. Questions about Contentful access: Hana.
