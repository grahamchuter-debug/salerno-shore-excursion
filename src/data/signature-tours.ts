/**
 * SIGNATURE TOURS — Salerno Shore Excursion
 *
 * Public sources checked 2026-07-17.
 * Commercial activation blocked until items in LAUNCH-BLOCKERS.md are cleared.
 *
 * Pricing: use src/data/pricing.ts for internal model only — never render prices.
 * Capacity: use src/data/capacity.ts — do not advertise minimum six or >8 guests.
 */

import type { FAQ } from "./types";
import type { EditorialBadge } from "./badges";
import { capacityConfig, tourFormatCopy } from "./capacity";
import { ENQUIRY_PUBLIC_ENABLED } from "@/lib/runtime";

export const SIGNATURE_TOURS_PATH = "/signature-tours";

/** @deprecated Use ENQUIRY_PUBLIC_ENABLED / ENQUIRY_TEST_MODE from runtime */
export const ENQUIRY_FORM_ENABLED = ENQUIRY_PUBLIC_ENABLED;

export type BookingMode = "enquiry" | "external" | "direct" | "coming-soon";

export type SignatureTourId =
  | "salerno-pompeii-vesuvius-winery"
  | "salerno-pompeii-amalfi-coast";

export interface OptionalExtra {
  id: string;
  label: string;
  description: string;
  /** Public display status — never show numeric amounts until approved */
  priceDisplay: "not-shown" | "confirmed-with-availability";
  required: boolean;
  includedByDefault: boolean;
}

export interface ItineraryOption {
  id: string;
  title: string;
  positioning: string;
  stops: string[];
  notes: string[];
  recommended?: boolean;
}

export interface SignatureTourConfig {
  id: SignatureTourId;
  slug: string;
  path: string;
  enabled: boolean;
  badge: "Signature Tour";
  editorialBadge: EditorialBadge;
  title: string;
  editorialTitle: string;
  subtitle: string;
  supplier: string;
  localOperator: string;
  directProduct: boolean;
  bookingMode: BookingMode;
  sourceUrl: string;
  duration: string | null;
  /** Public advertised max — never above 8 at launch */
  maxGuests: 8;
  /** Internal min — not published until approved */
  minGuestsInternal: 6;
  /** Always null in public data until pricing approved */
  priceFrom: null;
  childPrice: null;
  currency: "EUR";
  bookingUrl: string | null;
  enquiryUrl: string;
  whatsapp: string | null;
  pickupPoint: string | null;
  departureTime: string | null;
  returnTime: string | null;
  vehicle: string | null;
  groupFormat: string;
  operatingDates: string | null;
  availability: string | null;
  badges: string[];
  recommendation: string;
  inclusions: string[];
  exclusions: string[];
  optionalExtras: OptionalExtra[];
  accessibilityWarnings: string[];
  operationalNotes: string[];
  itineraryOptions?: ItineraryOption[];
  pendingConfirmation: string[];
  imageKey: string;
  /** Slot for authorised Papillon / vehicle photography later */
  authorisedImageSlot: string;
}

export const optionalEnhancementsShared: OptionalExtra[] = [
  {
    id: "pompeii-entry",
    label: "Pompeii and Vesuvius admission",
    description:
      "Pompeii and Vesuvius admission arranged separately unless stated on your written confirmation. Pompeii uses nominative tickets and timed capacity controls — passenger names and timed-entry details are collected after initial availability is established.",
    priceDisplay: "not-shown",
    required: true,
    includedByDefault: false,
  },
  {
    id: "pompeii-guide",
    label: "Optional private Pompeii guide",
    description:
      "A licensed guide for the excavations can enrich the visit. This is a genuine optional enhancement — not included in the base touring day unless confirmed.",
    priceDisplay: "confirmed-with-availability",
    required: false,
    includedByDefault: false,
  },
];

export const optionalWineryEnhancement: OptionalExtra = {
  id: "winery-lunch",
  label: "Optional winery visit, tasting and lunch",
  description:
    "Available on the Pompeii and Vesuvius Signature Tour only when your confirmed booking version includes it. Not part of the headline touring day by default.",
  priceDisplay: "confirmed-with-availability",
  required: false,
  includedByDefault: false,
};

export const signatureTours: SignatureTourConfig[] = [
  {
    id: "salerno-pompeii-vesuvius-winery",
    slug: "pompeii-vesuvius-winery",
    path: "/signature-tours/pompeii-vesuvius-winery/",
    enabled: true,
    badge: "Signature Tour",
    editorialBadge: "signature-tour",
    title: "Pompeii, Mount Vesuvius and Optional Winery",
    editorialTitle: "Salerno Signature: Pompeii, Vesuvius and Volcanic Wines",
    subtitle:
      "Archaeology, crater views and an optional volcanic winery day — paced for a Salerno cruise call.",
    supplier: "Papillon Service",
    localOperator: "Papillon Service",
    directProduct: true,
    bookingMode: "enquiry",
    sourceUrl:
      "https://www.papillonservice.com/excursion/pompei-mt-vesuvius-optional-winery-salerno/",
    duration: "Approximately 8 hours",
    maxGuests: 8,
    minGuestsInternal: 6,
    priceFrom: null,
    childPrice: null,
    currency: "EUR",
    bookingUrl: null,
    enquiryUrl: "/signature-tours/pompeii-vesuvius-winery/#request-availability",
    whatsapp: null,
    pickupPoint: "Ship-side or Salerno cruise port collection where confirmed for your sailing",
    departureTime: "Typically morning ship collection (confirm for your call)",
    returnTime: "Late afternoon, planned around all-aboard (confirm for your call)",
    vehicle: "Eight-seat touring vehicle",
    groupFormat: tourFormatCopy.shared.label,
    operatingDates: null,
    availability: null,
    badges: [
      "Salerno Signature Tour",
      "Maximum 8 Guests",
      "History, Volcano and Wine",
      "Active Experience",
    ],
    recommendation:
      "Best for passengers who want the strongest combination of archaeology, landscape and local wine culture.",
    inclusions: [
      "Cruise-aware collection and return planning arranged with Papillon Service",
      "Touring in an eight-seat vehicle (shared small-group or private, as confirmed)",
      "Time at Pompeii and Mount Vesuvius as operationally confirmed for your sailing",
    ],
    exclusions: [
      "Pompeii and Vesuvius admission unless stated on your confirmation",
      "Optional private Pompeii guide",
      "Optional winery visit, tasting and lunch",
      "Meals and drinks outside a confirmed winery option",
      "Any costs not listed on your written confirmation",
    ],
    optionalExtras: [...optionalEnhancementsShared, optionalWineryEnhancement],
    accessibilityWarnings: [
      "The Mount Vesuvius summit section involves a steep uphill walk (supplier notes roughly 20 minutes at about a 14% grade) and is not suitable for all mobility levels.",
      "Uneven archaeological surfaces at Pompeii require steady footing and suitable footwear.",
      "If mobility is limited, choose a different Salerno day — do not book this itinerary hoping the Vesuvius walk can be skipped without changing the product.",
    ],
    operationalNotes: [
      "Precise timings depend on your ship’s arrival, traffic and Vesuvius park procedures.",
      "Vesuvius access is subject to park regulations and may need discussion before booking.",
      "The winery is optional — never presented as a standard inclusion unless your booking version confirms it.",
      "Ship all-aboard time always overrides the planned itinerary.",
    ],
    pendingConfirmation: [
      "Final customer adult and child prices",
      "Shared-departure confirmation process",
      "Winery adult and child pricing",
      "Guide pricing",
      "Cancellation and missed-port terms",
      "Image permission for authorised vehicle photography",
    ],
    imageKey: "vesuvius",
    authorisedImageSlot: "awaiting-papillon-permission-vehicle-and-experience",
  },
  {
    id: "salerno-pompeii-amalfi-coast",
    slug: "pompeii-amalfi-coast",
    path: "/signature-tours/pompeii-amalfi-coast/",
    enabled: true,
    badge: "Signature Tour",
    editorialBadge: "signature-tour",
    title: "Pompeii, Positano and Amalfi or Ravello",
    editorialTitle: "Salerno Signature: Pompeii and the Amalfi Coast",
    subtitle:
      "Ancient Pompeii with a carefully chosen Amalfi Coast finish — balanced for a real port day, not a fantasy checklist.",
    supplier: "Papillon Service",
    localOperator: "Papillon Service",
    directProduct: true,
    bookingMode: "enquiry",
    sourceUrl:
      "https://www.papillonservice.com/excursion/pompei-positano-amalfi-ravello/",
    duration: "Approximately 9 hours",
    maxGuests: 8,
    minGuestsInternal: 6,
    priceFrom: null,
    childPrice: null,
    currency: "EUR",
    bookingUrl: null,
    enquiryUrl: "/signature-tours/pompeii-amalfi-coast/#request-availability",
    whatsapp: null,
    pickupPoint: "Ship-side or Salerno cruise port collection where confirmed for your sailing",
    departureTime: "Typically morning ship collection (confirm for your call)",
    returnTime: "Late afternoon, planned around all-aboard (confirm for your call)",
    vehicle: "Eight-seat touring vehicle",
    groupFormat: tourFormatCopy.shared.label,
    operatingDates: null,
    availability: null,
    badges: [
      "Salerno Signature Tour",
      "Maximum 8 Guests",
      "Ancient History and Coast",
      "Most Iconic Combination",
    ],
    recommendation:
      "Best for first-time visitors who cannot choose between Pompeii and the Amalfi Coast.",
    inclusions: [
      "Cruise-aware collection and return planning arranged with Papillon Service",
      "Touring in an eight-seat vehicle (shared small-group or private, as confirmed)",
      "Pompeii visit plus a selected Amalfi Coast town combination confirmed for your sailing",
    ],
    exclusions: [
      "Pompeii admission unless stated on your confirmation",
      "Optional private Pompeii guide",
      "Town attraction admissions unless confirmed in writing",
      "Meals and drinks",
      "Guaranteed free time in every named coastal town on every departure",
    ],
    optionalExtras: [...optionalEnhancementsShared],
    accessibilityWarnings: [
      "Pompeii involves uneven paving and standing time.",
      "Amalfi Coast towns often include slopes, steps and limited vehicle access — expect walking once you leave the van.",
    ],
    operationalNotes: [
      "Supplier guidance notes roughly 3.5 hours of travel time for fuller coastal combinations.",
      "Adding Positano can add about an hour of driving — more in summer traffic.",
      "The most balanced days often choose Pompeii plus Amalfi or Ravello rather than forcing every highlight.",
      "Stops may be adjusted for traffic, parking and ship schedule — Positano is not guaranteed on every departure.",
      "The best day is not always the day with the most stops.",
    ],
    itineraryOptions: [
      {
        id: "balanced-amalfi",
        title: "Recommended balanced itinerary — Pompeii plus Amalfi",
        positioning:
          "Less rushing, reduced driving, more meaningful time at each stop, and better resilience against summer traffic.",
        stops: ["Pompeii", "Amalfi"],
        notes: [
          "Strong default when you want quality over quantity.",
          "Still a full day — confirm your port-call length.",
        ],
        recommended: true,
      },
      {
        id: "balanced-ravello",
        title: "Recommended balanced itinerary — Pompeii plus Ravello",
        positioning:
          "Hilltop gardens and views with a calmer pacing profile than a multi-town coastal dash.",
        stops: ["Pompeii", "Ravello"],
        notes: [
          "Excellent when panoramic quiet matters more than beach-town energy.",
          "Uphill approach roads can still be slow in peak season.",
        ],
        recommended: true,
      },
      {
        id: "full-highlights",
        title: "Full highlights itinerary — Pompeii, Positano and Amalfi or Ravello",
        positioning:
          "Best suited to long port calls. More driving. Timing depends on traffic and ship schedule. Stops may need adjustment.",
        stops: ["Pompeii", "Positano", "Amalfi or Ravello"],
        notes: [
          "Not every destination can always receive extensive free time.",
          "Expect operational honesty: the driver may change order or drop a stop to protect return-to-ship timing.",
        ],
      },
    ],
    pendingConfirmation: [
      "Final customer adult and child prices",
      "Default coastal combination at enquiry",
      "Private vehicle pricing process",
      "Cancellation and missed-port terms",
      "Image permission for authorised vehicle photography",
    ],
    imageKey: "positano",
    authorisedImageSlot: "awaiting-papillon-permission-vehicle-and-experience",
  },
];

export const signatureTourDisclosures = {
  operator:
    "Selected by Salerno Shore Excursion and operated locally by Papillon Service, an independent Italian touring provider.",
  supporting:
    "We select and arrange this small-group experience with Papillon Service. Your booking confirmation will identify the responsible service provider and the terms applying to your reservation.",
  selectedExperience:
    "Selected by Salerno Shore Excursion and operated locally by Papillon Service, an independent Italian touring provider.",
  partnership:
    "We select and arrange this small-group experience with Papillon Service. Your booking confirmation will identify the responsible service provider and the terms applying to your reservation.",
  commercial:
    "Signature Tours are our primary commercial recommendations. We may earn more from these selected experiences than from some partner alternatives. Recommendations still follow suitability for your port day.",
  notExclusive:
    "“Salerno Signature Tour” refers to our editorial and commercial selection, not ownership of the vehicle operator.",
  segContrast:
    "Partner excursions booked through Shore Excursions Group are operated through SEG or its local supplier network — not as Salerno Shore Excursion Signature Tours.",
  forbiddenClaims:
    "Do not claim: operated by Salerno Shore Excursion; our drivers; our vehicles; exclusive Papillon tour — unless a later contract supports those words.",
} as const;

export const signatureTourEditorial = {
  eyebrow: "Salerno Signature Tours",
  introduction:
    "Two carefully selected eight-seat experiences for cruise passengers who want a stronger day than a large coach circuit — without pretending Salerno can deliver every Amalfi postcard in one call.",
  whySmallGroup:
    "An eight-seat vehicle keeps the day flexible, conversation possible, and cruise timing easier to protect than on a packed coach.",
  honestyPrinciple:
    "The best day is not always the day with the most stops. Summer traffic, Vesuvius walking demands and ship schedules matter more than brochure highlight counts.",
  sharedVsPrivate: {
    heading: "Shared small-group or private vehicle?",
    shared: tourFormatCopy.shared,
    private: tourFormatCopy.private,
    note: "We promote the shared Signature Tour concept editorially and welcome private-vehicle enquiries. We do not claim scheduled shared departures are confirmed for every sailing date, and we do not publish private pricing.",
  },
  capacityNote: `Signature Tours use vehicles for a maximum of ${capacityConfig.publicMaxGuestsAdvertised} guests. We do not display remaining-seat counters or invent scarcity.`,
};

export function getSignatureTour(slug: string): SignatureTourConfig | undefined {
  return signatureTours.find((tour) => tour.slug === slug);
}

export function getSignatureTourById(id: SignatureTourId): SignatureTourConfig | undefined {
  return signatureTours.find((tour) => tour.id === id);
}

export function getSignatureTourCta(tour: SignatureTourConfig) {
  if (tour.bookingMode === "enquiry") {
    return { href: tour.enquiryUrl || tour.path, label: "Request Availability" };
  }
  if (tour.bookingMode === "external" && tour.bookingUrl) {
    return { href: tour.bookingUrl, label: "Check Partner Availability" };
  }
  if (tour.bookingMode === "direct" && tour.bookingUrl) {
    return { href: tour.bookingUrl, label: "Choose Your Date" };
  }
  return { href: tour.path, label: "Check Your Sailing" };
}

export const signatureTourFaqs: FAQ[] = [
  {
    question: "Are Signature Tours the same as Shore Excursions Group products?",
    answer:
      "No. Signature Tours are selected by Salerno Shore Excursion and operated locally by Papillon Service. SEG products are booked and operated through Shore Excursions Group or its local supplier network.",
  },
  {
    question: "Is this a shared small-group tour or a private vehicle?",
    answer:
      "Our primary recommendation is a shared small-group Signature Tour with a maximum of eight guests. A private vehicle for your party is available on request. Shared departures are confirmed operationally for your sailing — we do not claim fixed daily schedules until supply is live.",
  },
  {
    question: "Is the winery included on the Pompeii and Vesuvius day?",
    answer:
      "Only if your confirmed booking version includes it. Treat the winery visit, tasting and lunch as an optional enhancement unless your written confirmation says otherwise.",
  },
  {
    question: "Can everyone manage Mount Vesuvius?",
    answer:
      "No. Reaching the summit area involves a steep uphill walk and is not suitable for all mobility levels. Choose another Salerno itinerary if that walk is a concern.",
  },
  {
    question: "Will every Pompeii and Amalfi Coast departure include Positano?",
    answer:
      "Not necessarily. Traffic, parking and ship timing can require a more balanced combination such as Pompeii plus Amalfi or Ravello. We prefer an honest day over an overloaded promise.",
  },
  {
    question: "Can I book online and pay now?",
    answer:
      "Secure online payment is not active yet. You can request availability for your sailing; confirmation and payment instructions follow after operational checks. The future default will be full payment at booking once the checkout is approved.",
  },
  {
    question: "What are the cancellation terms?",
    answer:
      "Final cancellation and missed-port wording is awaiting contractual confirmation. We will publish clear terms before accepting paid bookings. See the Signature Tour terms page for the current status.",
  },
];
