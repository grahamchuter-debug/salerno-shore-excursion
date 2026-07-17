/**
 * Privacy-compliant demand-tracking event names.
 * Prepared for later activation — do NOT fire until analytics setup is approved.
 * No third-party scripts are loaded by this module.
 */

export const TRACKING_ENABLED = false;

export type DemandEventName =
  | "signature_tour_card_view"
  | "signature_tour_page_view"
  | "signature_tour_cta_click"
  | "pompeii_vesuvius_interest"
  | "pompeii_amalfi_interest"
  | "shared_tour_interest"
  | "private_tour_interest";

export const DEMAND_EVENTS: readonly DemandEventName[] = [
  "signature_tour_card_view",
  "signature_tour_page_view",
  "signature_tour_cta_click",
  "pompeii_vesuvius_interest",
  "pompeii_amalfi_interest",
  "shared_tour_interest",
  "private_tour_interest",
] as const;

export type DemandEventPayload = {
  event: DemandEventName;
  tourSlug?: string;
  ctaLabel?: string;
  path?: string;
};

/**
 * No-op until TRACKING_ENABLED is true and an approved analytics sink is wired.
 */
export function trackDemandEvent(payload: DemandEventPayload): void {
  if (!TRACKING_ENABLED) return;
  void payload;
  // Future: send to approved analytics endpoint only.
}
