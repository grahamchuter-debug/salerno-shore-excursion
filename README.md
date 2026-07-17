# Salerno Shore Excursion

**Canonical:** https://salernoshoreexcursion.com  
**Worker:** `salerno-shore-excursion`  
**Architecture:** Next.js static export → Cloudflare Workers Static Assets

Find the best version of your day from Salerno — selected eight-seat Signature Tours, Shore Excursions Group partner inventory, and honest cruise-port planning for Pompeii, Vesuvius, the Amalfi Coast and Paestum.

## Commands

```bash
npm install
npm run dev
npm run build
npm run check-links
npm run seo-qa
npm run download:images
npm run optimize:images
```

## Deploy (approval required)

```bash
npm run deploy          # Workers Static Assets via wrangler
# Do NOT use pages:deploy
# Do NOT attach salernoshoreexcursion.com until approved
```

Preview on `*.workers.dev` first. Apex Custom Domain and www→apex Redirect Rule only after explicit approval.

## Commercial hierarchy

1. **Signature Tours** (Papillon eight-seat) — enquiry mode until activated  
2. **Editor's Choices** (selected SEG)  
3. **Wider SEG catalogue**

See `PHASE1-COMMERCIAL-ARCHITECTURE.md` and `SIGNATURE_TOUR_CONFIRMATION.md`.

## Docs

- `docs/CLOUDFLARE-WORKERS-DEPLOYMENT.md`
- `docs/WORKERS-DEPLOY-CHECKLIST.md`
- `docs/NETWORK-INFRASTRUCTURE.md`
- `docs/architecture/ADR-0001-workers-static-assets-for-new-sites.md`
