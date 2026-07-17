# Workers.dev preview QA report — Salerno Shore Excursion

**Preview URL:** https://salerno-shore-excursion.dark-violet-8d91.workers.dev  
**Worker:** `salerno-shore-excursion`  
**Stage:** SEO and demand validation (not a booking launch)  
**Production domains:** not attached (awaiting preview sign-off)

---

## Preview configuration

| Control | Status |
|---------|--------|
| `NEXT_PUBLIC_SITE_MODE=preview` | Yes |
| Enquiry collection | Disabled (including preview) |
| Sitewide noindex /nofollow | Yes |
| `robots.txt` Disallow: / | Yes |
| Sitemap URLs | Empty (0 locs) |
| Canonical host | Always `https://salernoshoreexcursion.com` (not workers.dev) |
| Preview banner | Visible on all pages |
| Live payment | None |
| Customer prices | None published |
| Availability / seat UI | None |
| Demand tracking | Prepared; `TRACKING_ENABLED = false` |
| Papillon images | Not used |
| Book Now | Not present |
| Commercial CTA placeholder | Disabled “Booking availability coming later” |

---

## Commercial stage (approved for this preview)

Approved: website build, first commit, QA, noindex workers.dev preview.  
Not approved: customer prices, live enquiry, live shared departures, seat availability, payment, production domain, indexing.

---

## Pre-deploy QA

| Check | Result |
|-------|--------|
| ESLint | Pass (warnings only in legacy scripts) |
| TypeScript (`tsc --noEmit`) | Pass |
| `npm run build` / `build:preview` | Pass |
| `npm run check-links` | Pass |
| `npm run seo-qa` | Pass |
| Signature prices scrub | Clean |
| Availability / minimum-passenger UI | Not shown |
| Vesuvius mobility warning | Present |
| Operator wording | Approved Papillon disclosure |
| Enquiry form | Present but disabled / non-interactive |

---

## Reviewer checklist

1. Open preview URL and confirm banner + noindex  
2. Walk Signature Tour pages — editorial CTAs only; shared vs private concepts; optional extras without prices; Vesuvius warning  
3. Confirm “Booking availability coming later” is not clickable  
4. Confirm enquiry form is disabled and does not collect submissions  
5. Confirm no Book Now / euro prices / seat counters / departure statuses  
6. Approve or request changes before any production domain attach  

When ready for production domain steps, request a **separate approval**.
