#!/usr/bin/env node
/**
 * Download Messina / Sicily images from Wikimedia Commons (CC-licensed).
 */
import { writeFileSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = join(import.meta.dirname, "..", "public/images");
const SOURCE = join(import.meta.dirname, "..", "image-sources");
const UA = "MessinaShoreExcursion/1.0 (https://messinashoreexcursion.com; image setup)";

const IMAGE_FILES = {
  "hero-home.jpg": [
    "File:Etna and Taormina from Castelmola.jpg",
    "File:Mount Etna from Taormina.jpg",
    "File:Etna seen from Taormina.jpg",
  ],
  "og-default.jpg": [
    "File:Teatro Antico di Taormina 05.jpg",
    "File:Ancient theatre of Taormina 11.jpg",
  ],
  "cruise-port.jpg": [
    "File:Messina harbour.jpg",
    "File:Port of Messina.jpg",
    "File:Messina Strait.jpg",
  ],
  "etna.jpg": [
    "File:Etna from Piano Provenzana.jpg",
    "File:Mount Etna - Italy.jpg",
    "File:Etna Volcano Sicily.jpg",
  ],
  "taormina.jpg": [
    "File:Taormina - Corso Umberto.jpg",
    "File:Taormina panorama.jpg",
    "File:Taormina Sicily.jpg",
  ],
  "greek-theatre.jpg": [
    "File:Teatro Antico di Taormina 05.jpg",
    "File:Ancient theatre of Taormina with Etna.jpg",
  ],
  "castelmola.jpg": [
    "File:Castelmola Sicily.jpg",
    "File:Castelmola.jpg",
  ],
  "savoca.jpg": [
    "File:Savoca Sicily.jpg",
    "File:Savoca.jpg",
  ],
  "isola-bella.jpg": [
    "File:Isola Bella Taormina.jpg",
    "File:Isola Bella (Sicily).jpg",
  ],
  "cathedral.jpg": [
    "File:Messina Cathedral.jpg",
    "File:Duomo di Messina.jpg",
  ],
  "clock.jpg": [
    "File:Messina astronomical clock.jpg",
    "File:Orologio astronomico Messina.jpg",
  ],
  "food.jpg": [
    "File:Granita with brioche.jpg",
    "File:Sicilian cannoli.jpg",
    "File:Arancini.jpg",
  ],
  "wine.jpg": [
    "File:Etna vineyards.jpg",
    "File:Vineyard on Mount Etna.jpg",
  ],
  "harbour.jpg": [
    "File:Messina harbour.jpg",
    "File:Messina waterfront.jpg",
  ],
  "coast.jpg": [
    "File:Ionian coast Sicily.jpg",
    "File:Coast near Taormina.jpg",
  ],
  "private.jpg": [
    "File:Etna and Taormina from Castelmola.jpg",
    "File:Mount Etna from Taormina.jpg",
  ],
  "walking.jpg": [
    "File:Messina historic centre.jpg",
    "File:Via Garibaldi Messina.jpg",
    "File:Messina Cathedral.jpg",
  ],
  "compare.jpg": [
    "File:Teatro Antico di Taormina 05.jpg",
    "File:Mount Etna - Italy.jpg",
  ],
  "family.jpg": [
    "File:Taormina panorama.jpg",
    "File:Messina harbour.jpg",
  ],
  "tindari.jpg": [
    "File:Tindari sanctuary.jpg",
    "File:Santuario di Tindari.jpg",
    "File:Tindari.jpg",
  ],
};

async function wikiThumb(fileTitle) {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.searchParams.set("action", "query");
  api.searchParams.set("titles", fileTitle);
  api.searchParams.set("prop", "imageinfo");
  api.searchParams.set("iiprop", "url");
  api.searchParams.set("iiurlwidth", "1920");
  api.searchParams.set("format", "json");
  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = await res.json();
  const page = Object.values(data.query?.pages || {})[0];
  const info = page?.imageinfo?.[0];
  return info?.thumburl || info?.url || null;
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`download ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  mkdirSync(SOURCE, { recursive: true });
  const sources = {};

  for (const [filename, candidates] of Object.entries(IMAGE_FILES)) {
    const dest = join(OUT, filename);
    let ok = false;
    for (const fileTitle of candidates) {
      try {
        const url = await wikiThumb(fileTitle);
        if (!url) continue;
        const bytes = await download(url, dest);
        copyFileSync(dest, join(SOURCE, filename));
        sources[filename] = { file: fileTitle, url, bytes };
        console.log(`✓ ${filename} ← ${fileTitle} (${Math.round(bytes / 1024)}KB)`);
        ok = true;
        break;
      } catch (e) {
        console.warn(`  retry ${filename}: ${e.message}`);
      }
    }
    if (!ok) {
      // fallback: copy any existing sibling if present
      if (existsSync(dest)) {
        console.warn(`⚠ keeping existing ${filename}`);
      } else {
        console.error(`✗ FAILED ${filename}`);
      }
    }
  }

  writeFileSync(join(OUT, "sources.json"), JSON.stringify(sources, null, 2));
  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
