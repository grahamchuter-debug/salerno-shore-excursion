import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/paths";
import { IS_PREVIEW } from "@/lib/runtime";
import { getAllExcursionSlugs } from "@/data/excursions";
import { getAllGuideSlugs } from "@/data/guides";
import { getAllComparisonSlugs } from "@/data/comparisons";
import { signatureTours } from "@/data/signature-tours";
import {
  getAllSchedulePortSlugs,
  getVerifiedMonthKeys,
  getLiveScheduleYears,
} from "@/data/schedules";
import { portYearPath, portMonthPath } from "@/lib/schedule-utils";

export const dynamic = "force-static";

const NOINDEX_PATHS = new Set(["/privacy", "/terms", "/signature-tour-terms"]);

const STATIC_PAGES = [
  "/",
  "/shore-excursions",
  "/signature-tours",
  "/signature-tours/pompeii-vesuvius-winery",
  "/signature-tours/pompeii-amalfi-coast",
  "/cruise-planner",
  "/ship-schedules",
  "/about",
  "/contact",
  "/methodology",
  "/affiliate-disclosure",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Preview builds must not publish an indexable sitemap
  if (IS_PREVIEW) return [];

  const now = new Date();
  const guidePages = getAllGuideSlugs().map((s) => `/${s}`);
  const comparisonPages = getAllComparisonSlugs().map((s) => `/${s}`);
  const excursionPages = getAllExcursionSlugs().map((s) => `/shore-excursions/${s}`);
  const schedulePages = [
    ...getAllSchedulePortSlugs().map((s) => `/ship-schedules/${s}`),
    ...getAllSchedulePortSlugs().flatMap((s) =>
      getLiveScheduleYears(s).map((y) => portYearPath(s, y)),
    ),
    ...getAllSchedulePortSlugs().flatMap((s) =>
      getVerifiedMonthKeys(s).map((mk) => portMonthPath(s, mk)),
    ),
  ];
  const all = [
    ...STATIC_PAGES,
    ...guidePages,
    ...comparisonPages,
    ...excursionPages,
    ...schedulePages,
  ].filter((path) => !NOINDEX_PATHS.has(path));

  return all.map((path) => ({
    url: absoluteUrl(SITE.url, path).replace(/\/?$/, "/"),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority:
      path === "/"
        ? 1
        : path === "/signature-tours" ||
            signatureTours.some(
              (t) => t.path.replace(/\/$/, "") === path.replace(/\/$/, ""),
            )
          ? 0.9
          : 0.7,
  }));
}
