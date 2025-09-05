# APA × YouTube Citation Generator & Guide

This repository contains the source code for **APA × YouTube Citation Generator & Guide**, a web application that helps students, researchers and content creators generate APA 7th edition citations for YouTube videos.  In addition to the citation tool, the site provides a series of articles explaining how to cite special cases such as Shorts, livestreams, podcasts and more.

The project is built with **Next.js 14** and the **App Router**, written in **TypeScript**, styled with **Tailwind CSS** and powered by **MDX** via **Contentlayer**.  Structured data (JSON‑LD) is injected to improve SEO, and a placeholder **AdSlot** component is provided for future ad integration.

## Features

* **Citation generator** – users can enter a YouTube URL or video ID, optional author/channel, upload date, access date, custom title and a timestamp.  The generator returns an in‑text citation and a reference list entry following APA 7th guidelines.
* **Pillar–cluster content** – a main guide page (`/apa‑youtube`) links to twelve in‑depth articles covering edge cases such as no author, no date, livestreams, Shorts, podcasts and differences between APA6 and APA7.
* **MDX content** – articles are written in MDX and loaded at build time via Contentlayer.  Each file includes frontmatter (title, description, slug, TL;DR and FAQs) and uses reusable React components (`AnswerCard`, `DataBox`, `RelatedLinks`, `FAQSection`, etc.).
* **Structured data** – the site injects JSON‑LD for the software application, HowTo pages and FAQ pages using the `JsonLd` component and helpers in `lib/jsonld.ts`.  This improves the chances of rich snippets in search results.
* **Accessibility & performance** – the design uses semantic HTML, ARIA labels and colour contrasts that aim for ≥90 scores in Lighthouse for SEO, Accessibility and Best Practices.  Cookie consent is provided via a simple banner.
* **AdSense ready** – a placeholder `AdSlot` component reserves space for ads without causing layout shift.  A `public/ads.txt` file is included with a placeholder publisher ID – replace it with your own before applying to Google AdSense.

## Getting started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

   The site will start on [http://localhost:3000](http://localhost:3000).  Any changes to files under `app/`, `components/`, `content/` or `lib/` will trigger hot reloads.

3. **Environment variables**:

   The sitemap and JSON‑LD use the `NEXT_PUBLIC_SITE_URL` variable to construct absolute URLs.  When running locally this defaults to `http://localhost:3000`.  For production deployments, set it to your domain, e.g. `https://example.com`:

   ```bash
   # .env.local
   NEXT_PUBLIC_SITE_URL=https://your‑domain.com
   ```

   Do **not** include a trailing slash.

## Building for production

To generate a production build, run:

```bash
npm run build
```

The build script performs three steps:

1. `contentlayer build` – compiles the MDX files in `content/apa‑youtube/` into typed JSON used by the application.
2. `next build` – builds the Next.js application for production.
3. `next-sitemap` – generates `sitemap.xml` and `robots.txt` based on `next‑sitemap.config.js` and the `NEXT_PUBLIC_SITE_URL` variable.

After building, you can start the production server with:

```bash
npm start
```

### Deployment

This project can be deployed to any platform that supports Node.js (e.g. Vercel, Netlify, Render).  For best results:

1. Set `NEXT_PUBLIC_SITE_URL` in your environment variables to the public URL of your deployment.
2. Ensure that `npm run build` runs as part of the build step.  Platforms like Vercel automatically detect Next.js and run the correct commands.  On Netlify you can configure the build command as `npm run build` and the publish directory as `.next`.
3. After deployment, verify that `https://your‑domain.com/sitemap.xml` and `https://your‑domain.com/robots.txt` are accessible and contain the correct domain.

### Search engine submission

Once deployed:

1. **Google Search Console (GSC)** – add your site in GSC and verify ownership (you can use DNS verification or upload a verification file).  Submit your sitemap (`/sitemap.xml`) in the *Sitemaps* section.  Google will begin crawling your pages.
2. **Bing Webmaster Tools** – similarly, verify ownership and submit your sitemap to Bing.

### Google AdSense notes

This repository includes a `public/ads.txt` file with a placeholder line:

```
google.com, pub-REPLACE_WITH_YOUR_ID, DIRECT, f08c47fec0942fa0
```

To comply with AdSense policies:

1. Deploy your site and ensure `ads.txt` is accessible at `https://your‑domain.com/ads.txt`.
2. Only after the site is live and passes policy checks should you replace `pub-REPLACE_WITH_YOUR_ID` with your actual publisher ID.  Do not commit your real ID publicly.
3. After updating `ads.txt`, you can add your ad code (for example, by injecting the AdSense script via environment variables or by extending the `AdSlot` component) and then apply for AdSense in your account.

## Repository structure

Key directories and files:

| Path | Responsibility |
| --- | --- |
| `app/` | Next.js App Router pages and layouts.  Includes the root layout, the home page (citation generator), the pillar page (`/apa‑youtube`), dynamic pages for each guide (`/apa‑youtube/[slug]`), the health API route and legal pages (`/about`, `/contact`, `/privacy`, `/terms`). |
| `components/` | Reusable React components such as `AnswerCard`, `FAQSection`, `DataBox`, `RelatedLinks`, `Breadcrumbs`, `AdSlot`, `CookieConsent`, `JsonLd` and `CopyButton`. |
| `content/apa-youtube/` | Source MDX files for the guide content.  Each file includes frontmatter with metadata and uses MDX components to embed examples and FAQs. |
| `lib/` | Utility functions: `apa.ts` for assembling APA citations; `jsonld.ts` for generating JSON‑LD objects; `utils.ts` for helper functions like sentence casing and date formatting. |
| `public/` | Static assets served at the root of the site – includes `ads.txt`, `robots.txt` and `favicon.ico`. |
| `next-sitemap.config.js` | Configuration for generating `sitemap.xml` and `robots.txt`. |
| `contentlayer.config.ts` | Defines the MDX document schema and loads content from the `content/apa‑youtube/` directory. |
| `tailwind.config.ts` & `postcss.config.mjs` | Tailwind CSS configuration. |
| `package.json` | Lists dependencies and defines scripts for development, building and linting. |

## Health check

The application exposes a simple health endpoint at `/api/health`.  It returns `{ "status": "ok" }` with HTTP 200.  You can use this for uptime monitoring or load balancer health checks.

## License

This project is provided for educational purposes.  See the [Terms of Service](/terms) for details.  Feel free to adapt the code to your own needs, but please do not redistribute it without attribution.