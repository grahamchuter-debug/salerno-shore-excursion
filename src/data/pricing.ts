/**
 * DEVELOPMENT-ONLY pricing model for Signature Tours.
 *
 * NEVER import this module from customer-facing components, schema builders,
 * metadata, cards or page copy. Temporary values exist for internal planning
 * only and must not appear in the public build.
 *
 * Final selling prices require Papillon confirmation of net rates, VAT,
 * payment terms, overtime, port access, seasonal variance, guide/winery
 * commissions and ticket handling.
 */

export type CurrencyCode = "EUR";

/** Fields the commercial model must support — all nullable until approved. */
export interface SignatureTourPricingFields {
  adultPrice: number | null;
  childPrice: number | null;
  privateVehiclePrice: number | null;
  optionalGuidePrice: number | null;
  optionalWineryAdultPrice: number | null;
  optionalWineryChildPrice: number | null;
  entranceTicketsIncluded: boolean;
  currency: CurrencyCode;
  /** When true, public UI may surface approved prices */
  publicPricingApproved: false;
}

/**
 * Temporary development placeholders — INTERNAL USE ONLY.
 * Values are intentionally not real selling prices.
 */
export const DEV_ONLY_PRICING_PLACEHOLDERS = {
  note: "DEV ONLY — do not render. Replace after Papillon commercial confirmation.",
  pompeiiVesuviusWinery: {
    adultPrice: null,
    childPrice: null,
    privateVehiclePrice: null,
    optionalGuidePrice: null,
    optionalWineryAdultPrice: null,
    optionalWineryChildPrice: null,
    entranceTicketsIncluded: false,
    currency: "EUR" as const,
    publicPricingApproved: false as const,
  } satisfies SignatureTourPricingFields,
  pompeiiAmalfiCoast: {
    adultPrice: null,
    childPrice: null,
    privateVehiclePrice: null,
    optionalGuidePrice: null,
    optionalWineryAdultPrice: null,
    optionalWineryChildPrice: null,
    entranceTicketsIncluded: false,
    currency: "EUR" as const,
    publicPricingApproved: false as const,
  } satisfies SignatureTourPricingFields,
  /**
   * Supplier party rates observed on public Papillon pages (2026-07-17).
   * Net commercial rates for our SKU may differ. Never show as site PP prices.
   */
  observedSupplierPartyRatesEur: {
    "1-2": 600,
    "3-4": 640,
    "5-6": 680,
    "7-8": 720,
    lateBookingSupplement: 50,
  },
} as const;

/** Future payment default: full payment at booking (not activated). */
export const FUTURE_PAYMENT_DEFAULT = {
  mode: "full-payment-at-booking" as const,
  journey: [
    "Select sailing",
    "Select passengers",
    "Pay securely",
    "Provide ship and operational details",
  ],
  activated: false,
} as const;
