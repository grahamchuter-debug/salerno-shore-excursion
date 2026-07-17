# Phase 1 — Commercial Architecture Report

**Site:** Salerno Shore Excursion  
**Canonical:** https://salernoshoreexcursion.com  
**Worker:** `salerno-shore-excursion`  
**Research date:** 2026-07-17  
**Status:** Pre-publication. Do not deploy or attach domain until approval.

---

## 1. Naming & conflicts

| Item | Value | Conflict check |
|------|--------|----------------|
| Local folder | `/Users/graham.chuter/Desktop/salerno-shore-excursion` | Empty folder adopted; no prior site |
| GitHub repo | `salerno-shore-excursion` (to create on first push) | No existing local remote |
| Worker name | `salerno-shore-excursion` | Must confirm unused in Cloudflare account before deploy |
| Domain | `salernoshoreexcursion.com` | Registered; **not attached** |
| www behaviour | 301 → apex | Redirect Rule only after approval |

---

## 2. Route architecture (chosen)

**Signature Tours under `/signature-tours/`** (not duplicated under `/shore-excursions/`).

| Path | Purpose |
|------|---------|
| `/` | Homepage |
| `/signature-tours/` | Signature listing |
| `/signature-tours/pompeii-vesuvius-winery/` | Signature Tour 1 |
| `/signature-tours/pompeii-amalfi-coast/` | Signature Tour 2 |
| `/shore-excursions/` | Full catalogue (Signature first, then Editor's Choices, then SEG) |
| `/shore-excursions/[slug]/` | SEG partner product pages only |

No duplicate indexable Signature URLs.

---

## 3. Papillon Signature Tours (verified 2026-07-17)

### Tour A — Pompeii, Mount Vesuvius and Optional Winery

- **Source:** https://www.papillonservice.com/excursion/pompei-mt-vesuvius-optional-winery-salerno/
- **Customer title:** Pompeii, Mount Vesuvius and Optional Winery
- **Editorial title:** Salerno Signature: Pompeii, Vesuvius and Volcanic Wines
- **Duration:** about 8 hours (supplier)
- **Capacity on public page:** party rates for 1–8 persons
- **Supplier vehicle rates (EUR, private party — do not publish as site PP price):**
  - 1–2: €600 · 3–4: €640 · 5–6: €680 · 7–8: €720
  - <72h lead time: €50 supplement
- **Typical supplier schedule (indicative only):**
  - ~08:30 ship pickup
  - ~2 hours Pompeii
  - onward to Vesuvius summit walk (~20 min, ~14% grade)
  - optional Cantina del Vesuvio tour, tasting and lunch
  - late-afternoon return
- **Accessibility:** Vesuvius summit is **not suitable for mobility-impaired guests** (steep uphill walk only). Must remain prominent.
- **Vesuvius note:** Parco Nazionale del Vesuvio procedures (from 2022) mean this element is **subject to discussion before booking**.
- **Optional costs (supplier cash rates; card/PayPal higher):**
  - Pompeii entry: €30 adult (under 18 free); passport required
  - Local Pompeii guide (2 hrs, recommended): €200
  - Vesuvius entry: ~€20 if booked via Papillon; ~€12 if self-booked (availability risk)
  - Winery lunch/tasting: **price not stated on public page** → pending

### Tour B — Pompeii, Positano and Amalfi or Ravello

- **Source:** https://www.papillonservice.com/excursion/pompei-positano-amalfi-ravello/
- **Customer title:** Pompeii, Positano and Amalfi or Ravello
- **Editorial title:** Salerno Signature: Pompeii and the Amalfi Coast
- **Duration:** 9 hours (supplier)
- **Driving:** ~3.5 hours travel; Positano alone can add ~1 hour+, more in summer
- **Supplier honesty:** suggests limiting to Pompeii + Amalfi **or** Ravello for less driving
- **Same party rates** as Tour A (€600–€720 bands)
- **Optional:** Pompeii entry €30; guide €200; winery N/A

### Safe customer-facing language (until contract confirmed)

- “Our selected small-group experience”
- “Salerno Shore Excursion Signature Choice”
- “Arranged with our trusted local touring partner”
- “Operated locally by Papillon Service”
- “Maximum eight guests”

**Do not use** without confirmation: “Our tour”, “Exclusive tour”, “Operated by us”.

### Commercial responsibility map

| Role | Initial assumption | Status |
|------|-------------------|--------|
| Site recommendation | Salerno Shore Excursion | Confirmed |
| Booking seller | Site / manual enquiry (not live payment) | Pending activation |
| Vehicle provider | Papillon Service | Public page |
| Tour operator | Papillon Service (local) | Pending contract wording |
| Local guide (Pompeii) | Optional third-party / Papillon-arranged | Optional cost |
| Payment recipient | TBD | **Unresolved** |

---

## 4. SEG inventory (live 2026-07-17)

**Port collection:** https://www.shoreexcursionsgroup.com/port/salerno-shore-excursions  
**Live product count:** 21

### Small-group / shared (Editor’s Choice candidates marked ★)

| Title | SEG path ID | Duration | Size | Activity | Food |
|-------|-------------|----------|------|----------|------|
| Amalfi Coast Small Group ★ | eusoamalsmll | 7h | Small | Easy | Not included |
| Discover the Amalfi Coast | eusoamalfi | 8h | Standard | Moderate | Not included |
| Walking Tour of Historic Salerno | eusowalk | 2h30 | Small | Easy | Not included |
| A Taste of Sorrento from Salerno | eusotastesor | 7h | Small | Easy | Meal included |
| Discover Pompeii from Salerno with Skip-the-Line Ticket ★ | eusopmpeiiwskipline | 3h30 | Small | Moderate | Not included |
| Paestum Archaeological and Mozzarella Tasting ★ | eusopaestummozzerell | 7h | Small/Private framing | Easy | Tastings |
| See and Sail the Amalfi Coast ★ | eusosamalficbtseafsa | 7h | Small | Easy | Beverage/snacks |
| Small Group Exploration of Ravello and Amalfi | eusoravellonamalfi | 9h | Small | Moderate | Not included |
| Small Group Pompeii and Herculaneum | eusosalernpomphercul | 9h | Small | Moderate | Not included |
| Small Group Pompeii Ruins and Amalfi Coast Highlights | eusosalernpompamalf | 8h30 | Small | Moderate | Not included |
| Small Group Pompeii Ruins and Mount Vesuvius | eusosalrnpompvesuvi | 9h | Small | Moderate | Not included |
| Small Group Pompeii Ruins and Sorrento Coast | eusosalernsorrepomp | 8h30 | Small | Moderate | Not included |
| Small Group Pompeii Ruins Half Day ★ | eusopompeihalfsalern | 4h30 | Small | Moderate | Not included |
| Street Food of Salerno Foodie Walk ★ | eusostreetfood | 3h | Small | Easy | Tastings |

### Private

| Title | SEG path ID | Duration | Activity |
|-------|-------------|----------|----------|
| Private Naples and Caserta | eusonapcaspvt | 8h | Easy |
| Private Pompeii & Amalfi Coast | eusopomamapvt | 8h | Moderate |
| Private Pompeii & Herculaneum | eusopomherpvt | 8h | Moderate |
| Private Pompeii & Naples | eusopomnapvt | 8h | Moderate |
| Private Pompeii & Sorrento with Positano Photo Stop | eusoposopopvt2 | 8h | Moderate |
| Private Positano, Amalfi and Ravello | eusopvtpositano | 8h | Easy |
| Private Salerno & Paestum | eusosalpaepvt | 8h | Easy |

**Note:** SEG listing copy for Private Salerno & Paestum incorrectly referenced “Perth” on the live page — our editorial must not reproduce that error.

### Editor’s Choices (proposed, pending badge approval)

1. Amalfi Coast Small Group  
2. Small Group Pompeii Ruins Half Day  
3. See and Sail the Amalfi Coast  
4. Paestum Archaeological and Mozzarella Tasting  
5. Street Food of Salerno Foodie Walk  

---

## 5. Capacity / booking model (architecture only)

| Field | Design |
|-------|--------|
| Max per vehicle | 8 |
| Vehicles per sailing (future) | up to 3 |
| Total capacity (future) | 24 |
| Customer price | per-person (site sell) — **null until approved** |
| Supplier cost | internal only — never exposed |
| Booking mode | `enquiry` (form disabled until approved) |
| Fake availability counters | **Forbidden** |

---

## 6. Unresolved commercial questions (approval required)

1. Customer selling prices (per person) for both Signature Tours  
2. Deposit vs full-payment model  
3. Minimum passengers for a shared departure  
4. Confirmed vehicle allocation (1 / 2 / 3 vans)  
5. Cancellation terms for Signature Tours  
6. Exact Papillon operator wording for disclosures  
7. Permission to use Papillon photography  
8. Optional Pompeii guide pricing presentation (€200 supplier note)  
9. Optional winery pricing (not on public page)  
10. Shared small-group vs private charter for the Signature SKU we sell  
11. When to activate enquiry / booking flow  
12. Payment recipient and legal seller identity  
13. SEG affiliate tracking parameters to append (network standard)  
14. Whether “Signature Choice” brand is contractually cleared  

---

## 7. Architecture decisions locked for build

- Next.js static export + Workers Static Assets (not Pages)  
- Messina Signature Tour data pattern extended for **two** Signature products  
- SEG products as affiliate Tier 2/3 with `rel="sponsored"`  
- No live prices, ratings schema, or seat counters for Signature Tours  
- Enquiry form present but `ENQUIRY_FORM_ENABLED = false`  
- Honesty-first Amalfi Coast planning content  
- Vesuvius mobility warning non-negotiable  
