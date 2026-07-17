#!/usr/bin/env node
/**
 * Generate thin flat-route wrappers for every guide and comparison slug.
 *
 * Reads the top-level `slug` fields from src/data/guides.ts and
 * src/data/comparisons.ts and writes src/app/<slug>/page.tsx wrappers that
 * render GuideContentPage / ComparisonContentPage. Existing core routes are
 * never overwritten.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const APP = join(ROOT, "src/app");

/** Reserved top-level routes that must never be clobbered by generation. */
const RESERVED = new Set([
  "shore-excursions",
  "signature-tour",
  "cruise-planner",
  "port-guide",
  "about",
  "contact",
  "methodology",
  "affiliate-disclosure",
  "privacy",
  "terms",
]);

/** Extract only top-level array-item slugs (4-space indented). */
function topLevelSlugs(relPath) {
  const text = readFileSync(join(ROOT, relPath), "utf8");
  return [...text.matchAll(/^ {4}slug: "([^"]+)"/gm)].map((m) => m[1]);
}

function guideWrapper(slug) {
  return `import { notFound } from "next/navigation";
import { getGuideBySlug } from "@/data/guides";
import { GuideContentPage } from "@/components/ContentPage";
import { guidePageMetadata } from "@/lib/seo";

const slug = ${JSON.stringify(slug)};
const guide = getGuideBySlug(slug);

export const metadata = guide
  ? guidePageMetadata(slug, guide.seoTitle, guide.metaDescription, guide.imageKey)
  : {};

export default function Page() {
  if (!guide) notFound();
  return <GuideContentPage guide={guide} />;
}
`;
}

function comparisonWrapper(slug) {
  return `import { notFound } from "next/navigation";
import { getComparisonBySlug } from "@/data/comparisons";
import { ComparisonContentPage } from "@/components/ContentPage";
import { comparisonPageMetadata } from "@/lib/seo";

const slug = ${JSON.stringify(slug)};
const comparison = getComparisonBySlug(slug);

export const metadata = comparison
  ? comparisonPageMetadata(slug, comparison.seoTitle, comparison.metaDescription)
  : {};

export default function Page() {
  if (!comparison) notFound();
  return <ComparisonContentPage comparison={comparison} />;
}
`;
}

const guideSlugs = topLevelSlugs("src/data/guides.ts");
const comparisonSlugs = topLevelSlugs("src/data/comparisons.ts");

let created = 0;
let skipped = 0;

function emit(slug, contents) {
  if (RESERVED.has(slug)) {
    skipped++;
    console.warn(`  skip reserved: /${slug}`);
    return;
  }
  const dir = join(APP, slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "page.tsx"), contents);
  created++;
}

for (const slug of guideSlugs) emit(slug, guideWrapper(slug));
for (const slug of comparisonSlugs) emit(slug, comparisonWrapper(slug));

console.log(
  `Generated ${created} content page(s) (${guideSlugs.length} guides, ${comparisonSlugs.length} comparisons)${
    skipped ? `, skipped ${skipped} reserved` : ""
  }.`,
);

if (!existsSync(APP)) {
  console.error("app directory missing");
  process.exit(1);
}
