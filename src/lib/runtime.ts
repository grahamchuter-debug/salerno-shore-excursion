import { SITE } from "@/lib/site";

/**
 * Runtime flags.
 * Site stage: SEO and demand validation — not an active booking launch.
 */

export type SiteMode = "production" | "preview";

export const SITE_MODE: SiteMode =
  process.env.NEXT_PUBLIC_SITE_MODE === "preview" ? "preview" : "production";

export const IS_PREVIEW = SITE_MODE === "preview";

/** Public enquiry collection stays off until traffic and Papillon terms justify ops. */
export const ENQUIRY_PUBLIC_ENABLED = false;

/** Never enable enquiry test collection on preview for demand validation. */
export const ENQUIRY_TEST_MODE = false;

export const USE_PRODUCTION_CANONICAL = true;

export const SITE_STAGE = {
  id: "seo-demand-validation",
  label: "SEO and demand-validation site",
  philosophy: SITE.philosophy,
} as const;
