# Completion report — Salerno Shore Excursion

**Date:** 2026-07-17  
**Status:** Build complete for local audit. **Not deployed. Domain not attached.**

---

## Project

| Item | Value |
|------|--------|
| Local folder | `/Users/graham.chuter/Desktop/salerno-shore-excursion` |
| Repository | `salerno-shore-excursion` (GitHub not created yet) |
| Branch | `main` |
| Commit status | No commits yet — working tree ready for first commit when requested |
| Architecture | Next.js 16 static export → Cloudflare Workers Static Assets |
| Worker name | `salerno-shore-excursion` |
| Canonical | `https://salernoshoreexcursion.com` |

---

## Signature Tours

| Item | Detail |
|------|--------|
| Listing | `/signature-tours/` |
| Tour 1 | `/signature-tours/pompeii-vesuvius-winery/` |
| Tour 2 | `/signature-tours/pompeii-amalfi-coast/` |
| Data | `src/data/signature-tours.ts` |
| Capacity model | 8 / vehicle, up to 3 vehicles / sailing (24) — **not activated** |
| Optional extras | Pompeii entry, Pompeii guide, Vesuvius entry, winery (price pending) |
| Supplier disclosure | Distinct Signature vs SEG wording |
| Booking workflow | Enquiry architecture present; `ENQUIRY_FORM_ENABLED = false` |
| CTAs | View Signature Tour / Request Availability (disabled) — no “Book Now” |

### Unresolved commercial questions

1. Customer selling prices (per person)  
2. Deposit or full-payment model  
3. Minimum passengers for shared departures  
4. Confirmed vehicle allocation  
5. Cancellation terms  
6. Exact Papillon operator wording  
7. Use of Papillon images  
8. Optional guide pricing presentation  
9. Optional winery pricing (not on public supplier page)  
10. Shared vs private vs both  
11. When to activate enquiry / booking flow  
12. Payment recipient / legal seller identity  

---

## SEG products

| Item | Value |
|------|--------|
| Live product count | **21** (verified 2026-07-17) |
| Categories | Amalfi Coast; Pompeii & Vesuvius; Paestum & food; Salerno city; Private touring |
| Links verified | Yes — product path IDs captured from live SEG port page |
| Editor's Choices (6) | Amalfi Coast Small Group; Pompeii skip-the-line; Paestum & mozzarella; See and Sail Amalfi; Pompeii half day; Street food walk |
| Deferred | None — full live set included |
| Affiliate | `rel="sponsored"` on partner CTAs; distinct disclosures |

---

## Content

| Type | Count |
|------|--------|
| HTML pages in `out/` | 59 |
| Sitemap indexable URLs | 54 |
| Signature routes | 3 (hub + 2 products) |
| SEG product pages | 21 |
| Planning guides | 6 |
| Destination guides | 9 |
| Comparison pages | 8 |
| Supporting (about, contact, methodology, affiliate, planner, …) | included |

---

## SEO

| Check | Status |
|------|--------|
| Unique titles / descriptions | Implemented per page via data + `buildMetadata` |
| Canonicals | Apex HTTPS |
| Sitemap | Present |
| robots.txt | Allow all + sitemap |
| Schema | WebSite, Organization/TravelAgency, BreadcrumbList, FAQPage, Article/TravelGuide, ItemList where used |
| Signature Product schema | No fake ratings / prices / availability |
| Internal links | Signature ↔ guides ↔ comparisons |
| SEO QA script | **Passed** |
| Link check | **Passed** |
| Foreign-port scrub | **Passed** (0 Messina/Etna/etc. hits in HTML) |

---

## Performance (local build)

| Metric | Value |
|--------|--------|
| `out/` size | ~34 MB |
| Asset files (Wrangler dry-run) | 835 |
| Image files in `out/images` | 245 |
| Source JPGs | ~35 MB → live JPGs ~4.3 MB + responsive opt variants |
| Largest themes | Paestum, Amalfi, harbour/hero variants |
| Lighthouse | Not run in this session — recommend workers.dev smoke + Lighthouse after approved preview deploy |
| CLS / LCP targets | Architecture supports (static, pre-optimised images, limited JS) — measure on preview |

---

## Workers readiness

| Item | Status |
|------|--------|
| Worker name | `salerno-shore-excursion` |
| Wrangler validation | `--dry-run` passed |
| Output directory | `./out` |
| workers.dev readiness | Ready after first approved `wrangler deploy` |
| Domain plan | Apex Custom Domain + www→apex Redirect Rule **after approval only** |
| Blockers | Explicit approval; zone Active; commercial questions for Signature launch copy |

---

## Approval questions

Please confirm before any production deploy or enquiry activation:

1. **Customer selling prices** for both Signature Tours?  
2. **Deposit or full-payment** model?  
3. **Minimum passengers** per departure?  
4. **Vehicle allocation** (1–3 vans) confirmed with Papillon?  
5. **Cancellation terms** to publish?  
6. Approved **Papillon operator wording**?  
7. Permission to use **Papillon photography**?  
8. **Optional guide** and **winery** pricing to display?  
9. Product format: **private, shared, or both**?  
10. When should the **enquiry form** go live?  
11. Approve **workers.dev** preview deploy (still no custom domain)?  
12. Approve **apex domain attach** only after preview sign-off?

---

## Explicit non-actions (per brief)

- Not deployed to Cloudflare Pages  
- Production domain not attached  
- Payment not activated  
- No invented availability or seat counters  
- No false exclusivity claims  
- Papillon party rates not shown as per-person customer prices  
