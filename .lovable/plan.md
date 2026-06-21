## Heads up on "remix"

Remixing is a user action (sidebar/project menu → **Remix**) — I can't trigger it from chat. Once you've remixed, I'll apply the plan below to the new copy. If you'd rather I apply it to this current project instead, just say so.

## Brand direction

**Colors (from logo):**
- Primary Navy: `#16335B` (deep navy from logo outline + wordmark)
- Accent Yellow: `#F2B500` (excavator yellow)
- Secondary Blue: `#3DA9E0` (water ripple highlight)
- Neutrals: white background, slate text

These replace the current navy/orange tokens in `src/index.css` and `tailwind.config.ts`. The header logo invert trick will be removed since the new logo is multi-color.

**Logo:** Use the uploaded `Designer (25).png` as `src/assets/twin-brothers-logo.png` and as favicon/OG image.

**Typography:** Keep Montserrat (heading) / Open Sans (body) — fits the bold industrial wordmark.

## Content population (from business profile)

**Company identity**
- Name: Twin Brothers Construction 69 (Pty) Ltd
- Tagline: "Excellence Through Safety and Commitment"
- Founded: December 2003 (registered Pty 2012)
- 100% HDI-owned, 100% HDI management, 80% HDI employed
- Reg No: 2012/104738/07

**Contact**
- Address: 17 Cnr Water & Orange Str, Parys, 9585
- Mobile: 071 627 2716
- Office: 056 817 1075
- Fax: 086 232 7394
- Email: zan.mqhaisa@gmail.com

**About / Vision / Mission** — pulled verbatim from profile (steel fabrication, manufacturing, construction & development; national reach across South Africa; hands-on management).

**Services page** (replaces current 5 services):
1. Building Construction
2. Steel Fabrication & Installations
3. Project Management
4. Onsite Maintenance
5. Major Rebuilds on Frames
6. Structural Work & Erection
7. Cattle Handling Facilities
8. Fire Prevention Facilities

**Leadership** (About page team section):
- Petrus Zanepe Moqhaisa — General Manager & Co-founder
- Amoni Frank Khoza — Operational Manager & Co-founder

**Projects page** — replace with the 11-row track record table (grower unit & effluent dam, loading ramp, cattle handling, Cosira steelworks, Afrox stainless pipeline, Cornelia classrooms, Dept of Education admin blocks, CMS Water Engineering, Tokoloho 315mm PVC pipeline, Leeudoringstad pump station, Tambo pumpstation refurbishment) with duration + value.

**Credentials strip** (footer / about):
NHBRC 7872-151113 · CIDB GB/CE/PE CRS 10004167 · B-BBEE EME L3 · Tax Cleared

**Stats** (replace current 50+ fleet / 100+ projects):
- 20+ Years Experience
- 11+ Major Projects
- 100% HDI-Owned
- R15M+ Project Value Delivered

**Fleet page** — Twin Brothers' profile doesn't describe a vehicle fleet (Silabele-specific). I'll either (a) repurpose this page into an **Equipment & Capabilities** page (welding rigs, fabrication, excavator/plant per logo imagery), or (b) remove it from nav. Default: option (a).

## Technical changes

- `src/index.css` — swap `--primary`, `--accent`, `--secondary`, gradients, shadows to new palette (HSL)
- `tailwind.config.ts` — rename `navy`/`orange` tokens to new values (keep token names to minimize churn, or alias)
- `src/assets/twin-brothers-logo.png` — new logo; remove `brightness-0 invert` on transparent header in `Header.tsx`
- `index.html` — title, meta description, keywords, JSON-LD (LocalBusiness → Twin Brothers, Parys, Free State, services list, phone, email), OG/Twitter tags, favicon
- `src/components/SEOHead.tsx` baseUrl — leave generic; per-page SEO updated to Twin Brothers
- `src/components/Header.tsx` — top bar phone/email, logo
- `src/components/Footer.tsx` — address, contacts, credentials
- `src/components/Hero.tsx` — new headline/sub copy
- `src/components/Services.tsx` + `src/pages/ServicesPage.tsx` — 8 services
- `src/components/About.tsx` + `src/pages/AboutPage.tsx` — vision/mission/leadership/composition
- `src/pages/ProjectsPage.tsx` — track record table
- `src/pages/ContactPage.tsx` — new contact details + map for Parys
- `src/pages/FleetPage.tsx` → Equipment & Capabilities (or removed from nav)
- `src/components/Stats.tsx` — new numbers
- `src/components/Clients.tsx` / `Testimonials.tsx` — replace with anonymized references from track record contacts (e.g., "Department of Education", "Afrox", "CMS Water Engineering", "Cosira Group") — no fake testimonials
- `public/sitemap.xml`, `robots.txt` — domain placeholder

## Out of scope (confirm if you want included)
- New photography (no real project photos provided — will use neutral construction stock or keep current placeholders)
- Actual deployment domain / new email infra
- Removing the Fleet page entirely vs repurposing
