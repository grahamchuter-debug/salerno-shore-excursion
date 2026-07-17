#!/usr/bin/env node
/**
 * Validate internal href paths against static routes and known dynamic slugs.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next" || name === "out") continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, files);
    else if (/\.(tsx?|jsx?|mjs)$/.test(name)) files.push(p);
  }
  return files;
}

const appDir = join(ROOT, "src/app");
const validPaths = new Set(["/"]);

function collectRoutes(dir, base = "") {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name.startsWith("_") || name === "api") continue;
      const segment = name.startsWith("(") ? "" : `/${name}`;
      collectRoutes(p, `${base}${segment}`);
    } else if (name === "page.tsx" || name === "page.ts") {
      validPaths.add(base || "/");
    }
  }
}

collectRoutes(appDir);

function loadSlugsFromTs(relativePath, exportName) {
  try {
    const text = readFileSync(join(ROOT, relativePath), "utf8");
    const fnMatch = text.match(
      new RegExp(`export function ${exportName}\\(\\)[^{]*\\{[^]*?return ([^;]+);`, "m"),
    );
    if (!fnMatch) return [];
    const arrayMatch = fnMatch[1].match(/\.map\(\([^)]*\) => [^.]+\.(\w+)\)/);
    if (!arrayMatch) return [];
    const field = arrayMatch[1];
    const slugMatches = [...text.matchAll(new RegExp(`${field}:\\s*"([^"]+)"`, "g"))];
    return [...new Set(slugMatches.map((m) => m[1]))];
  } catch {
    return [];
  }
}

// Guide and comparison pages are flat top-level routes and are discovered
// automatically by collectRoutes(). Only shore excursions are dynamic.
const excursionSlugs = loadSlugsFromTs("src/data/excursions.ts", "getAllExcursionSlugs");

const dynamicPatterns = [/^\/shore-excursions\/[\w-]+$/];

for (const slug of excursionSlugs) validPaths.add(`/shore-excursions/${slug}`);

function isValidPath(path) {
  if (validPaths.has(path)) return true;
  return dynamicPatterns.some((re) => re.test(path));
}

const srcFiles = walk(join(ROOT, "src"));
const hrefPattern = /href=["'](\/[^"'#?]*)/g;
const failures = [];

for (const file of srcFiles) {
  const text = readFileSync(file, "utf8");
  const rel = file.replace(ROOT + "/", "");
  let match;
  while ((match = hrefPattern.exec(text)) !== null) {
    const href = match[1].replace(/\/$/, "") || "/";
    if (!isValidPath(href)) {
      failures.push({ file: rel, href });
    }
  }
}

if (failures.length) {
  console.error(`Found ${failures.length} broken internal link(s):`);
  for (const f of failures) {
    console.error(`  ${f.href} in ${f.file}`);
  }
  process.exit(1);
}

console.log(`Link check passed (${validPaths.size} known routes).`);
