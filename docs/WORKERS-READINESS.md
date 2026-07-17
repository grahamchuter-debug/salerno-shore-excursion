# Salerno Shore Excursion — Workers readiness

**Status:** Built and locally audited. **Not deployed. Custom domain not attached.**

| Item | Value |
|------|--------|
| Worker name | `salerno-shore-excursion` |
| Cloudflare account conflict check | Confirm unused before first deploy |
| Platform | Cloudflare Workers Static Assets V1.0 |
| Config | `wrangler.jsonc` |
| Assets directory | `./out` |
| `html_handling` | `force-trailing-slash` |
| `not_found_handling` | `404-page` |
| `workers_dev` | `true` (smoke tests after first deploy) |
| Canonical | `https://salernoshoreexcursion.com` |
| Custom domains | **Do not attach until explicit approval** |
| www behaviour | Cloudflare Redirect Rule www → apex (after approval) |
| Pages | Do **not** create a Pages project |
| Wrangler dry-run | Passed (835 asset files read) |

## Build snapshot (2026-07-17)

| Metric | Value |
|--------|--------|
| `out/` size | ~34 MB |
| HTML pages | 59 |
| Sitemap URLs | 54 (privacy/terms excluded) |
| Image files in `out/images` | 245 |
| SEO QA | Passed |
| Link check | Passed |
| Foreign-port scrub | Passed (0 hits) |

## Pre-approval blockers

1. User audit and explicit deployment approval
2. Confirm Cloudflare zone for `salernoshoreexcursion.com` is Active
3. Confirm Worker name is unused in the account
4. workers.dev smoke test after first `wrangler deploy`
5. Only then attach apex Custom Domain + www redirect rule
6. Signature Tour commercial questions (pricing, operator wording, enquiry activation) remain open — see `PHASE1-COMMERCIAL-ARCHITECTURE.md`

## Deploy command (after approval only)

```bash
npm run deploy
```

Do **not** run `pages:deploy`. Do **not** attach DNS until approved.
