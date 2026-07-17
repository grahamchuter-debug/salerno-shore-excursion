/**
 * Runtime / site mode flags for production vs workers.dev preview builds.
 * Preview builds must remain noindex and must not use workers.dev as canonical.
 */

export type SiteMode = "production" | "preview";

/** Set NEXT_PUBLIC_SITE_MODE=preview for workers.dev preview builds. */
export const SITE_MODE: SiteMode =
  process.env.NEXT_PUBLIC_SITE_MODE === "preview" ? "preview" : "production";

export const IS_PREVIEW = SITE_MODE === "preview";

/**
 * Enquiry submissions:
 * - production public: always disabled until ops readiness
 * - preview: optional test mode (interactive UI, non-production, no live delivery)
 */
export const ENQUIRY_PUBLIC_ENABLED = false;

export const ENQUIRY_TEST_MODE =
  IS_PREVIEW && process.env.NEXT_PUBLIC_ENQUIRY_TEST_MODE === "true";

/** Canonical host is always the production apex — never workers.dev. */
export const USE_PRODUCTION_CANONICAL = true;
