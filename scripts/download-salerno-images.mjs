#!/usr/bin/env node
/**
 * Download Salerno / Campania images from Wikimedia Commons (CC-licensed).
 * Prefer Salerno, Amalfi Coast, Pompeii, Vesuvius, Paestum — never Naples cruise-port as Salerno.
 */
import { writeFileSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = join(import.meta.dirname, "..", "public/images");
const SOURCE = join(import.meta.dirname, "..", "image-sources");
const UA =
  "SalernoShoreExcursion/1.0 (https://salernoshoreexcursion.com; image setup)";

/** filename → Wikimedia File: titles (fallback order) */
const IMAGE_FILES = {
  "hero-home.jpg": [
    "File:Amalfi Coast - Salerno.jpg",
    "File:Costiera Amalfitana.jpg",
    "File:Amalfi Coast panorama.jpg",
    "File:Veduta di Salerno.jpg",
  ],
  "og-default.jpg": [
    "File:Pompeii - Forum and Vesuvius.jpg",
    "File:Forum of Pompeii with Vesuvius.jpg",
    "File:Pompei Foro.jpg",
  ],
  "cruise-port.jpg": [
    "File:Porto di Salerno.jpg",
    "File:Salerno harbour.jpg",
    "File:Salerno waterfront.jpg",
    "File:Lungomare di Salerno.jpg",
  ],
  "salerno-waterfront.jpg": [
    "File:Lungomare di Salerno.jpg",
    "File:Salerno lungomare.jpg",
    "File:Salerno waterfront.jpg",
  ],
  "salerno-centro.jpg": [
    "File:Salerno centro storico.jpg",
    "File:Via dei Mercanti Salerno.jpg",
    "File:Salerno old town.jpg",
  ],
  "cathedral.jpg": [
    "File:Cattedrale di Salerno.jpg",
    "File:Duomo di Salerno.jpg",
    "File:Salerno Cathedral.jpg",
  ],
  "pompeii.jpg": [
    "File:Pompeii - Forum and Vesuvius.jpg",
    "File:Via dell Abbondanza Pompeii.jpg",
    "File:Pompeii street.jpg",
    "File:Pompei scavi.jpg",
  ],
  "vesuvius.jpg": [
    "File:Mount Vesuvius from Pompeii.jpg",
    "File:Vesuvius crater.jpg",
    "File:Mount Vesuvius.jpg",
    "File:Vesuvio.jpg",
  ],
  "vineyard.jpg": [
    "File:Vineyards on Vesuvius.jpg",
    "File:Cantina del Vesuvio.jpg",
    "File:Vesuvius vineyard.jpg",
    "File:Campania vineyard.jpg",
  ],
  "amalfi.jpg": [
    "File:Amalfi harbour.jpg",
    "File:Amalfi Italy.jpg",
    "File:Amalfi coastline.jpg",
  ],
  "ravello.jpg": [
    "File:Ravello Villa Rufolo.jpg",
    "File:Ravello Italy.jpg",
    "File:Villa Cimbrone Ravello.jpg",
  ],
  "positano.jpg": [
    "File:Positano.jpg",
    "File:Positano Amalfi Coast.jpg",
    "File:Positano from the sea.jpg",
  ],
  "paestum.jpg": [
    "File:Temple of Hera Paestum.jpg",
    "File:Paestum temples.jpg",
    "File:Paestum Italy.jpg",
  ],
  "food.jpg": [
    "File:Mozzarella di bufala.jpg",
    "File:Buffalo mozzarella.jpg",
    "File:Mozzarella Campania.jpg",
  ],
  "boat.jpg": [
    "File:Amalfi Coast boat.jpg",
    "File:Boat Amalfi Coast.jpg",
    "File:Costiera Amalfitana from sea.jpg",
  ],
  "harbour.jpg": [
    "File:Porto di Salerno.jpg",
    "File:Salerno harbour.jpg",
    "File:Salerno marina.jpg",
  ],
  "coast.jpg": [
    "File:Costiera Amalfitana.jpg",
    "File:Amalfi Coast panorama.jpg",
    "File:Amalfi Coast road.jpg",
  ],
  "private.jpg": [
    "File:Amalfi Coast road.jpg",
    "File:Costiera Amalfitana.jpg",
  ],
  "walking.jpg": [
    "File:Salerno centro storico.jpg",
    "File:Via dei Mercanti Salerno.jpg",
    "File:Salerno streets.jpg",
  ],
  "compare.jpg": [
    "File:Pompeii - Forum and Vesuvius.jpg",
    "File:Costiera Amalfitana.jpg",
  ],
  "family.jpg": [
    "File:Pompeii street.jpg",
    "File:Amalfi harbour.jpg",
  ],
  "wine.jpg": [
    "File:Vineyards on Vesuvius.jpg",
    "File:Campania vineyard.jpg",
    "File:Vesuvius vineyard.jpg",
  ],
};

async function commonsThumbUrl(title) {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.searchParams.set("action", "query");
  api.searchParams.set("titles", title);
  api.searchParams.set("prop", "imageinfo");
  api.searchParams.set("iiprop", "url");
  api.searchParams.set("iiurlwidth", "2400");
  api.searchParams.set("format", "json");
  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`API ${res.status} for ${title}`);
  const data = await res.json();
  const page = Object.values(data.query?.pages || {})[0];
  const info = page?.imageinfo?.[0];
  return info?.thumburl || info?.url || null;
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Download ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

async function resolveOne(candidates) {
  for (const title of candidates) {
    try {
      const url = await commonsThumbUrl(title);
      if (url) return { title, url };
    } catch (e) {
      console.warn(`  skip ${title}: ${e.message}`);
    }
  }
  return null;
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  mkdirSync(SOURCE, { recursive: true });

  const sourcesLog = [];
  for (const [file, candidates] of Object.entries(IMAGE_FILES)) {
    process.stdout.write(`→ ${file} ... `);
    const hit = await resolveOne(candidates);
    if (!hit) {
      console.log("FAILED");
      sourcesLog.push({ file, status: "failed", tried: candidates });
      continue;
    }
    const dest = join(OUT, file);
    const srcDest = join(SOURCE, file);
    const bytes = await download(hit.url, dest);
    copyFileSync(dest, srcDest);
    console.log(`OK (${Math.round(bytes / 1024)} KB) ← ${hit.title}`);
    sourcesLog.push({ file, status: "ok", title: hit.title, url: hit.url, bytes });
  }

  writeFileSync(
    join(OUT, "sources.json"),
    JSON.stringify({ downloadedAt: new Date().toISOString(), images: sourcesLog }, null, 2),
  );

  // Remove legacy Messina-only filenames if present and unused
  const legacy = [
    "etna.jpg",
    "taormina.jpg",
    "castelmola.jpg",
    "savoca.jpg",
    "isola-bella.jpg",
    "greek-theatre.jpg",
    "clock.jpg",
    "tindari.jpg",
    "wine-alt.jpg",
  ];
  for (const f of legacy) {
    const p = join(OUT, f);
    if (existsSync(p) && !IMAGE_FILES[f]) {
      // keep if something still references — leave for now; optimize script will ignore unused
    }
  }

  console.log("\nDone. Run: npm run optimize:images");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
