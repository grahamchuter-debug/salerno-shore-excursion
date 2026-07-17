# Agent rules — Salerno Shore Excursion

- Brand: **Salerno Shore Excursion** (singular). Prose may use “Salerno shore excursions”.
- Canonical: `https://salernoshoreexcursion.com` (www → apex).
- Deploy: Cloudflare **Workers Static Assets** only. Never Pages.
- **Current stage: SEO and demand validation** — not an active direct-booking launch.
- Do not attach the production domain without separate approval after workers.dev review.
- Do not display any Signature prices (PP, private, guide, winery, from, estimated, placeholders).
- Do not include prices in metadata or structured data.
- Do not show availability statuses, remaining seats, vehicle counts, or “minimum passengers”.
- Editorial CTAs only (Explore / Itinerary / Right for you / Cruise-day). Use disabled “Booking availability coming later” for commercial placeholders.
- Do not say currently bookable, guaranteed departure, exclusive, operated by us, our vehicle, or daily departures.
- Enquiry form stays built but disabled; do not collect enquiries to test traffic.
- Demand tracking events are prepared in `src/data/tracking.ts` but `TRACKING_ENABLED = false`.
- Papillon public website rates are not our final costs.
- Scrub foreign ports except where genuinely relevant.
- Images: licensed destination only until Papillon permission — see IMAGE-REPLACEMENT-LIST.md.
