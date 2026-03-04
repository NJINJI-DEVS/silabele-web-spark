

## Plan: Page Preloader, SPA Redirect Fix, and Full SEO Configuration

### 1. Page Preloader

Create a branded loading screen that displays before the React app mounts, using the Silabele navy/orange theme:

- **Add inline CSS + HTML preloader in `index.html`** inside the `#root` div (auto-removed when React mounts). It will show the Silabele logo with a pulsing animation and a simple loading bar in the accent orange color against a navy background.
- No extra JS needed — React's `createRoot` replaces the `#root` innerHTML automatically.

### 2. SPA Refresh Redirect Fix

The 404 on refresh happens because this is a single-page app using client-side routing (React Router), but the hosting server doesn't know to serve `index.html` for all routes.

- **Create `public/_redirects`** file with the rule: `/* /index.html 200` — this is the standard fix for Lovable/Netlify-style hosting and ensures all routes serve the SPA.

### 3. Full SEO Configuration

**Per-page meta tags:**
- Create a reusable `SEOHead` component using `document.title` and meta tag manipulation (via `useEffect`) to set unique title, description, keywords, canonical URL, and Open Graph tags for each page.
- Apply `SEOHead` to all 6 pages (Home, About, Services, Fleet, Projects, Contact) with tailored content.

**Sitemap:**
- Create `public/sitemap.xml` listing all 6 pages with `lastmod`, `changefreq`, and `priority` values.

**Robots.txt update:**
- Add `Sitemap: https://silabele.com/sitemap.xml` directive to `public/robots.txt`.

**Structured data:**
- Add JSON-LD `LocalBusiness` schema markup in `index.html` for rich search results (company name, address, phone, services).

### Technical Details

| Task | Files |
|------|-------|
| Preloader | `index.html` (inline HTML/CSS in `#root`) |
| SPA redirects | `public/_redirects` (new) |
| SEO component | `src/components/SEOHead.tsx` (new) |
| Per-page SEO | All 6 page files (add `<SEOHead>`) |
| Sitemap | `public/sitemap.xml` (new) |
| Robots.txt | `public/robots.txt` (update) |
| Structured data | `index.html` (JSON-LD script) |

