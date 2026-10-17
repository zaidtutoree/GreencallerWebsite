# Greencaller

Marketing website for **Greencaller**, a business VoIP telephone system with an AI receptionist.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**, and
statically rendered for SEO and speed.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (79 static pages)
npm start        # serve the production build
```

---

## Brand

The palette is derived from the supplied logo. The green was sampled directly from
`greencaller-logo.png` / `greencallericon2.png`:

| Token | Value | Use |
| --- | --- | --- |
| `brand-500` | `#00D16C` | **The logo green.** Primary buttons, accents, active states |
| `brand-600/700/800` | `#00B45C` → `#04723E` | Hover states, icons on light backgrounds, accessible text |
| `brand-50/100/200` | `#E8FDF2` → `#90F2C2` | Tinted panels, badges, washes |
| `ink` | `#08211A` | Body and heading text — a green-cast near-black so the page reads as one family |
| `deep` | `#04241A` | Dark sections, announcement bar, CTA block |
| `cream` | `#FAFCFB` | Alternating section backgrounds |
| `line` | `#DDE7E2` | Borders and dividers |

All tokens are defined once in `app/globals.css` under `@theme`, so changing the brand green
there updates the entire site.

**Type:** Schibsted Grotesk for display headings (tight tracking, weight 600), Inter for body —
both self-hosted via `next/font` with no layout shift.

### Assets

| File | Purpose |
| --- | --- |
| `public/greencaller-logo.png` | Header and footer wordmark (supplied) |
| `app/icon.png` | Favicon, 64×64 — downscaled from `greencallericon2.png` |
| `app/apple-icon.png` | Apple touch icon, 180×180 |
| `public/greencaller-icon-{192,512}.png` | PWA manifest icons |
| `app/opengraph-image.tsx` | Social share card, generated at build time via `next/og` |

The original 2000×2000 source files are kept at the repo root. The favicon is generated from
`greencallericon2.png`, so a 54 KB image is not shipped as a tab icon.

---

## Structure

```
app/
  layout.tsx            Root layout: fonts, metadata, Organization + WebSite JSON-LD
  page.tsx              Home page (FAQPage + SoftwareApplication JSON-LD)
  globals.css           Tailwind v4 theme, design tokens, component classes
  opengraph-image.tsx   Generated OG image
  sitemap.ts robots.ts manifest.ts
  features/[slug]/      15 feature pages   (generateStaticParams)
  solutions/[slug]/     14 solution pages  (by use case and by industry)
  integrations/[slug]/  14 integration pages
  resources/[slug]/     4 long-form guides
  legal/[slug]/         Privacy, terms, cookies, legal notice
  pricing/ compare/ contact/ demo/ signup/ login/ about/ product/
  blog/ customers/ help/ changelog/ careers/ partners/ reviews/ download/
components/             Header (mega menu), Hero, feature sections, FAQ, Footer, …
lib/
  site.ts               Company details and navigation trees
  content.ts            Home page copy
  pages.ts              Feature / solution / integration page content
```

Content lives in `lib/`, not in JSX — editing copy or adding a feature page means editing one
data file, and the route, sitemap entry and nav link follow automatically.

---

## SEO

- **Static rendering.** Every page is prerendered at build time; no client-side data fetching.
- **Metadata** per route via the Next.js Metadata API — unique titles, descriptions, canonicals,
  Open Graph and Twitter cards.
- **Structured data (JSON-LD):** `Organization` and `WebSite` sitewide; `FAQPage` on the home page
  and every detail page; `SoftwareApplication` with `AggregateRating` on the home page;
  `Product` / `AggregateOffer` on pricing; `BreadcrumbList` on all nested pages; `ContactPage`
  and `Article` where relevant.
- **`sitemap.xml`** generated from the same nav data that renders the menus, so it cannot drift.
- **`robots.txt`** with the sitemap reference; `/login` and `/signup` are `noindex`.
- **Semantics:** one `<h1>` per page, ordered headings, real `<nav>`/`<main>`/`<footer>`
  landmarks, breadcrumbs, descriptive link text and `alt` attributes.
- **Internal linking:** every feature, solution and integration page cross-links to its siblings.
- **Core Web Vitals:** ~102 KB shared JS, `font-display: swap`, priority hint on the logo,
  no layout-shifting images, and CSS-only animations.

## Accessibility

Skip-to-content link, visible focus rings, `aria-expanded` on all disclosures, keyboard-operable
menus and accordions, `prefers-reduced-motion` honoured, and text contrast checked against the
brand palette (the green is used as a background behind dark ink, never as light-on-white body
text).

---

## Notes before going live

- `lib/site.ts` holds the phone number, email addresses, registered address and social URLs —
  these are placeholders and need replacing with the real details.
- The contact, demo and signup forms are client-side only. Point `components/LeadForm.tsx` at
  your CRM or form endpoint.
- **The founder's note on the home page is written as a template, not a fact.** "Ade Okonkwo", the
  Walthamstow heating firm, the team of eleven and the four named colleagues are invented to show
  the shape and tone of the section. Replace every word of it with the real founder's story and the
  real team before this goes anywhere near production.
- Customer names, testimonials and the competitor comparison are illustrative placeholder copy.
  Replace them with real, attributable content before publishing — review claims and comparative
  advertising carry legal exposure if unsubstantiated.
- "Four things we are not going to pretend" makes concrete promises (charge on day seven, we will
  test your connection, cancel on day six and pay nothing). Check each one matches how you actually
  intend to operate.
- Set the production domain in `lib/site.ts` (`site.domain`); it drives canonicals, the sitemap
  and Open Graph URLs.
