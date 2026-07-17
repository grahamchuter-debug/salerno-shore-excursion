# Image replacement list — Salerno Shore Excursion

**Rule:** Papillon photographs and logo are **not approved** for reuse until written permission is obtained. Do not download or reproduce Papillon media.

## Current public imagery

All live images are Wikimedia Commons (or similarly licensed) destination photography — Salerno, Pompeii, Vesuvius, Amalfi Coast, Paestum, Campanian food — not supplier marketing assets.

| Slot / file | Current use | Replacement needed |
|-------------|-------------|-------------------|
| `hero-home` | Coast / Salerno panorama | Keep or upgrade with authorised Salerno waterfront |
| `cruise-port` / `harbour` / `salerno-waterfront` | Port atmosphere | Prefer verified Salerno berth photography when rights cleared |
| `pompeii` | Ruins | Keep licensed archaeology imagery |
| `vesuvius` | Volcano | Keep; add authorised crater-walk photo later if available |
| `vineyard` / `wine` | Vesuvius slopes | **Do not** use Cantina del Vesuvio / Papillon photos without permission |
| `amalfi` / `ravello` / `positano` / `coast` / `boat` | Coast towns | Keep licensed destination imagery |
| `paestum` | Temples | Keep |
| `food` | Mozzarella | Keep |
| `cathedral` / `salerno-centro` / `walking` | City | Keep |
| Signature Tour cards | Destination themes | **Authorised vehicle / eight-seat experience photography** — pending |
| Signature Tour product aside | “Image slot reserved” | Papillon or contracted photographer assets only after written OK |

## Explicitly forbidden until permission

- Any image from papillonservice.com
- Papillon Service logo or branding marks
- Supplier vehicle close-ups scraped from Papillon pages
- Implying Papillon endorsement beyond factual operator disclosure

## Ready slots (code)

Each Signature Tour has `authorisedImageSlot: "awaiting-papillon-permission-vehicle-and-experience"`.  
UI shows a dashed “Image slot reserved” note on product pages.

## Action

1. Request written image licence from Papillon (or commission original photography).  
2. Store approved files under `image-sources/authorised/` with licence note.  
3. Map into `src/lib/images.ts` Signature keys.  
4. Remove placeholder slot copy.
