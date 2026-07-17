# Workers.dev preview QA report — Salerno Shore Excursion

**Preview URL:** https://salerno-shore-excursion.dark-violet-8d91.workers.dev  
**Worker:** `salerno-shore-excursion`  
**Version ID:** `5f1ddb12-5c6c-4a77-8e4e-3f50cc21a235`  
**Deployed:** 2026-07-17  
**Git:** `1f85a51` foundation + `44b4c5d` seo-qa preview fix  

**Production domains:** not attached (awaiting preview sign-off)

---

## Preview configuration

| Control | Status |
|---------|--------|
| `NEXT_PUBLIC_SITE_MODE=preview` | Yes |
| `NEXT_PUBLIC_ENQUIRY_TEST_MODE=true` | Yes |
| Sitewide noindex /nofollow | Yes (layout + page metadata) |
| `robots.txt` Disallow: / | Yes (verified live) |
| Sitemap URLs | Empty (0 locs) |
| Canonical host | Always `https://salernoshoreexcursion.com` (not workers.dev) |
| Preview banner | Visible on all pages |
| Live payment | None |
| Public enquiry delivery | Disabled; interactive **test mode** only (no production inbox) |
| Placeholder prices | None on Signature pages |
| Papillon images | Not used |
| Book Now | Not present |

---

## Pre-deploy QA (production-mode build)

| Check | Result |
|-------|--------|
| ESLint | Pass (warnings only in legacy scripts) |
| TypeScript (`tsc --noEmit`) | Pass |
| `npm run build` | Pass (63 routes) |
| `npm run check-links` | Pass |
| `npm run seo-qa` | Pass |
| Signature € / Book Now scrub | Clean |
| “minimum six” public | Not shown |
| Vesuvius mobility warning | Present |
| Operator wording | Approved Papillon disclosure present |

---

## Live preview smoke

| Check | Result |
|-------|--------|
| Homepage 200 | Yes |
| Preview banner | Yes |
| robots.txt Disallow all | Yes |
| Signature Tours hierarchy | Signature first on homepage |
| SEG catalogue | Present under partner tiers |

---

## Commercial launch blockers (unchanged)

See `LAUNCH-BLOCKERS.md` — pricing, cancellation, image permission, support/emergency contacts, etc.  
These block **commercial activation**, not this preview.

---

## Explicitly not done

- Apex / www custom domains not attached  
- Production enquiry not activated  
- Sitemap not submitted  
- Search Console not configured  
- Noindex not removed  

---

## Reviewer checklist

1. Open preview URL and confirm banner  
2. Walk Signature Tour pages — shared vs private, optional enhancements (no prices), Vesuvius warning  
3. Confirm enquiry shows **Development / preview test mode** and does not claim live booking  
4. Confirm no Book Now / no euro prices  
5. Approve or request changes before any production domain attach  

When ready for production domain steps, request a **separate approval** per the Salerno approval decisions.
