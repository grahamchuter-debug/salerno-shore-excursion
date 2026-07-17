/**
 * INTERNAL commercial planning model — Signature Tours.
 *
 * NEVER import display helpers from this file into customer-facing components,
 * metadata or structured data. Do not insert assumed numeric values.
 *
 * Site stage: SEO and demand validation. Direct booking is not active.
 * Papillon public website vehicle rates are NOT the final costs available
 * to this business. Discounted commercial rates will be confirmed later.
 */

export type CurrencyCode = "EUR";

/** Customer-facing price fields — all null until approved for publication. */
export interface SignatureTourPublicPriceFields {
  adultPrice: null;
  childPrice: null;
  privateVehiclePrice: null;
  optionalGuidePrice: null;
  optionalWineryAdultPrice: null;
  optionalWineryChildPrice: null;
  entranceTicketsIncluded: false;
  currency: CurrencyCode;
  publicPricingApproved: false;
}

/**
 * Internal break-even / margin model.
 * Planning intent (NOT for publication):
 * - target break-even ≈ 3 passengers
 * - max capacity 8
 * - typical booking slightly > 2 passengers
 * - profitability often with ≈ 2 average bookings
 * Do not publish these figures. Do not fill assumed costs.
 */
export interface SignatureTourBreakEvenModel {
  supplierVehicleCost: number | null;
  targetBreakEvenPassengers: number | null;
  customerPricePerPerson: number | null;
  averageBookingSize: number | null;
  cardFees: number | null;
  affiliateOrMarketplaceCommission: number | null;
  guideCost: number | null;
  ticketCost: number | null;
  optionalExperienceCost: number | null;
  targetMargin: number | null;
}

export const emptyPublicPrices: SignatureTourPublicPriceFields = {
  adultPrice: null,
  childPrice: null,
  privateVehiclePrice: null,
  optionalGuidePrice: null,
  optionalWineryAdultPrice: null,
  optionalWineryChildPrice: null,
  entranceTicketsIncluded: false,
  currency: "EUR",
  publicPricingApproved: false,
};

export const emptyBreakEvenModel: SignatureTourBreakEvenModel = {
  supplierVehicleCost: null,
  targetBreakEvenPassengers: null,
  customerPricePerPerson: null,
  averageBookingSize: null,
  cardFees: null,
  affiliateOrMarketplaceCommission: null,
  guideCost: null,
  ticketCost: null,
  optionalExperienceCost: null,
  targetMargin: null,
};

export const internalCommercialNotes = {
  stage: "seo-demand-validation",
  sequence: [
    "Build destination authority site",
    "Publish and index",
    "Earn impressions and clicks",
    "Identify which excursion pages attract demand",
    "Confirm Papillon discounted rates and operational terms",
    "Set customer prices",
    "Activate enquiries or direct booking",
  ],
  papillonPublicRatesNote:
    "Papillon’s public website vehicle rates are not the final costs available to this business.",
  breakEvenIntentInternalOnly:
    "Target break-even ~3 passengers; max 8; typical booking slightly over 2; profitability often ~2 average bookings — internal planning only.",
} as const;

/** Future payment default — not activated; do not surface checkout UI. */
export const FUTURE_PAYMENT_DEFAULT = {
  mode: "full-payment-at-booking" as const,
  activated: false,
  publicComponentsAllowed: false,
} as const;
