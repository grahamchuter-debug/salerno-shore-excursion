/**
 * SIGNATURE TOURS — Salerno Shore Excursion
 *
 * Site stage: SEO and demand validation — not an active direct-booking launch.
 * Do not display prices, availability statuses, or bookable claims.
 */

import type { FAQ } from "./types";
import type { EditorialBadge } from "./badges";
import { capacityConfig, tourFormatCopy } from "./capacity";

export const SIGNATURE_TOURS_PATH = "/signature-tours";

/** @deprecated Public enquiry remains disabled */
export const ENQUIRY_FORM_ENABLED = false;

export type BookingMode = "editorial" | "enquiry" | "direct" | "coming-soon";

export type SignatureTourId =
  | "salerno-pompeii-vesuvius-winery"
  | "salerno-pompeii-amalfi-coast";

export interface OptionalExtra {
  id: string;
  label: string;
  description: string;
  /** Never show numeric prices at this stage */
  priceDisplay: "not-shown";
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
  maxGuests: 8;
  /** Always null — never publish prices */
  priceFrom: null;
  childPrice: null;
  currency: "EUR";
  bookingUrl: null;
  enquiryUrl: string;
  whatsapp: null;
  pickupPoint: string | null;
  departureTime: string | null;
  returnTime: string | null;
  vehicle: string | null;
  groupFormat: string;
  operatingDates: null;
  availability: null;
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
  authorisedImageSlot: string;
  editorialCtas: { label: string; href: string }[];
}

export const optionalEnhancementsShared: OptionalExtra[] = [
  {
    id: "pompeii-entry",
    label: "Pompeii and Vesuvius admission",
    description:
      "Pompeii and Vesuvius admission would be arranged separately unless stated when reservations are activated. Pompeii uses nominative tickets and timed capacity controls — passenger names and timed-entry details would be collected after an initial booking stage.",
    priceDisplay: "not-shown",
    required: true,
    includedByDefault: false,
  },
  {
    id: "pompeii-guide",
    label: "Optional private Pompeii guide",
    description:
      "A licensed guide for the excavations can enrich the visit. This is a genuine optional enhancement — not part of the base touring concept unless later confirmed in writing.",
    priceDisplay: "not-shown",
    required: false,
    includedByDefault: false,
  },
];

export const optionalWineryEnhancement: OptionalExtra = {
  id: "winery-lunch",
  label: "Optional winery visit, tasting and lunch",
  description:
    "Shown as a possible enhancement on the Pompeii and Vesuvius Signature concept only. Not included by default. Pricing and availability will be confirmed when reservations are activated.",
  priceDisplay: "not-shown",
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
    bookingMode: "editorial",
    sourceUrl:
      "https://www.papillonservice.com/excursion/pompei-mt-vesuvius-optional-winery-salerno/",
    duration: "Approximately 8 hours",
    maxGuests: 8,
    priceFrom: null,
    childPrice: null,
    currency: "EUR",
    bookingUrl: null,
    enquiryUrl: "/signature-tours/pompeii-vesuvius-winery/#explore",
    whatsapp: null,
    pickupPoint: "Ship-side or Salerno cruise port collection where confirmed for a future sailing",
    departureTime: null,
    returnTime: null,
    vehicle: "Eight-seat touring vehicle (concept)",
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
      "Cruise-aware collection and return planning designed with a trusted local transport partner",
      "Touring concept built around an eight-seat vehicle",
      "Time at Pompeii and Mount Vesuvius as outlined in the suggested itinerary",
    ],
    exclusions: [
      "Pompeii and Vesuvius admission unless later stated on a written confirmation",
      "Optional private Pompeii guide",
      "Optional winery visit, tasting and lunch",
      "Meals and drinks outside a confirmed winery option",
      "Any costs not listed on a future written confirmation",
    ],
    optionalExtras: [...optionalEnhancementsShared, optionalWineryEnhancement],
    accessibilityWarnings: [
      "The Mount Vesuvius summit section involves a steep uphill walk (supplier notes roughly 20 minutes at about a 14% grade) and is not suitable for all mobility levels.",
      "Uneven archaeological surfaces at Pompeii require steady footing and suitable footwear.",
      "If mobility is limited, choose a different Salerno day — do not plan this itinerary hoping the Vesuvius walk can be skipped without changing the experience.",
    ],
    operationalNotes: [
      "Precise timings would depend on ship arrival, traffic and Vesuvius park procedures.",
      "Vesuvius access is subject to park regulations.",
      "The winery is optional — never presented as a standard inclusion unless a booking version confirms it.",
      "Ship all-aboard time always overrides any planned itinerary.",
      "Individual seat sales and scheduled shared departures are not announced on this site yet.",
    ],
    pendingConfirmation: [
      "Discounted Papillon commercial rates",
      "Customer selling prices",
      "Shared vs private activation",
      "Cancellation and missed-port terms",
      "Image permission",
    ],
    imageKey: "vesuvius",
    authorisedImageSlot: "awaiting-papillon-permission-vehicle-and-experience",
    editorialCtas: [
      { label: "Explore This Signature Experience", href: "#explore" },
      { label: "See the Suggested Itinerary", href: "#itinerary" },
      { label: "Is This Tour Right for You?", href: "#right-for-you" },
      { label: "View Cruise-Day Details", href: "#cruise-day" },
    ],
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
    bookingMode: "editorial",
    sourceUrl:
      "https://www.papillonservice.com/excursion/pompei-positano-amalfi-ravello/",
    duration: "Approximately 9 hours",
    maxGuests: 8,
    priceFrom: null,
    childPrice: null,
    currency: "EUR",
    bookingUrl: null,
    enquiryUrl: "/signature-tours/pompeii-amalfi-coast/#explore",
    whatsapp: null,
    pickupPoint: "Ship-side or Salerno cruise port collection where confirmed for a future sailing",
    departureTime: null,
    returnTime: null,
    vehicle: "Eight-seat touring vehicle (concept)",
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
      "Cruise-aware collection and return planning designed with a trusted local transport partner",
      "Touring concept built around an eight-seat vehicle",
      "Pompeii plus a selected Amalfi Coast town combination as outlined in the suggested itinerary options",
    ],
    exclusions: [
      "Pompeii admission unless later stated on a written confirmation",
      "Optional private Pompeii guide",
      "Town attraction admissions unless confirmed in writing",
      "Meals and drinks",
      "Guaranteed free time in every named coastal town",
    ],
    optionalExtras: [...optionalEnhancementsShared],
    accessibilityWarnings: [
      "Pompeii involves uneven paving and standing time.",
      "Amalfi Coast towns often include slopes, steps and limited vehicle access — expect walking once you leave the van.",
    ],
    operationalNotes: [
      "About 3.5 hours of travel time is a realistic planning assumption for fuller coastal combinations.",
      "Adding Positano can add about an hour of driving — more in summer traffic.",
      "Balanced days often choose Pompeii plus Amalfi or Ravello rather than forcing every highlight.",
      "Stops may need adjustment for traffic, parking and ship schedule — Positano is not guaranteed in every version of the day.",
      "The best day is not always the day with the most stops.",
      "Individual seat sales and scheduled shared departures are not announced on this site yet.",
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
          "Expect operational honesty: order or stops may change to protect return-to-ship timing.",
        ],
      },
    ],
    pendingConfirmation: [
      "Discounted Papillon commercial rates",
      "Customer selling prices",
      "Default coastal combination when booking activates",
      "Cancellation and missed-port terms",
      "Image permission",
    ],
    imageKey: "positano",
    authorisedImageSlot: "awaiting-papillon-permission-vehicle-and-experience",
    editorialCtas: [
      { label: "Explore This Signature Experience", href: "#explore" },
      { label: "See the Suggested Itinerary", href: "#itinerary" },
      { label: "Is This Tour Right for You?", href: "#right-for-you" },
      { label: "View Cruise-Day Details", href: "#cruise-day" },
    ],
  },
];

export const signatureTourDisclosures = {
  operator:
    "Selected by Salerno Shore Excursion and designed around touring with Papillon Service, an independent local transport provider.",
  itineraryBased:
    "This experience is based on an itinerary provided locally by Papillon Service. Booking arrangements, final inclusions and operating terms will be confirmed when reservations are activated.",
  supporting:
    "Selected eight-seat tour concepts being developed with our trusted local transport partner.",
  productFraming:
    "Our selected small-group itinerary, designed around a maximum eight-seat touring experience.",
  commercial:
    "Signature Tours are our primary editorial recommendations. When booking is later activated, commercial terms will be confirmed in writing.",
  notExclusive:
    "“Salerno Signature Tour” refers to our editorial and commercial selection, not ownership of the vehicle operator.",
  segContrast:
    "Partner excursions booked through Shore Excursions Group are operated through SEG or its local supplier network — not as Salerno Shore Excursion Signature Tours.",
  forbiddenClaims: [
    "currently bookable",
    "guaranteed departure",
    "exclusive",
    "operated by us",
    "our vehicle",
    "daily departures",
  ],
} as const;

export const signatureTourEditorial = {
  eyebrow: "Salerno Signature Tours",
  introduction:
    "Two carefully selected eight-seat experiences for cruise passengers who want a stronger day than a large coach circuit — without pretending Salerno can deliver every Amalfi postcard in one call.",
  whySmallGroup:
    "An eight-seat vehicle keeps the day flexible, conversation possible, and cruise timing easier to protect than on a packed coach.",
  honestyPrinciple:
    "The best day is not always the day with the most stops. Summer traffic, Vesuvius walking demands and ship schedules matter more than brochure highlight counts.",
  stageNote:
    "These Signature pages help you compare realistic Salerno days. Reservations are not open on this site yet.",
  sharedVsPrivate: {
    heading: "Shared small-group or private eight-seat vehicle?",
    shared: tourFormatCopy.shared,
    private: tourFormatCopy.private,
    note: "Both formats are part of the content model. We do not announce scheduled shared departures or private pricing until booking is approved.",
  },
  capacityNote: `Designed around a maximum of ${capacityConfig.publicMaxGuestsAdvertised} guests. We do not display remaining seats, vehicle counts or departure status on this site.`,
};

export function getSignatureTour(slug: string): SignatureTourConfig | undefined {
  return signatureTours.find((tour) => tour.slug === slug);
}

export function getSignatureTourById(id: SignatureTourId): SignatureTourConfig | undefined {
  return signatureTours.find((tour) => tour.id === id);
}

/** Editorial CTAs only — never Book Now / Request Availability at this stage. */
export function getSignatureTourCta(tour: SignatureTourConfig) {
  return {
    href: tour.path,
    label: "Explore This Signature Experience",
  };
}

export const signatureTourFaqs: FAQ[] = [
  {
    question: "Are Signature Tours the same as Shore Excursions Group products?",
    answer:
      "No. Signature Tours are selected by Salerno Shore Excursion and designed around touring with Papillon Service. SEG products are booked and operated through Shore Excursions Group or its local supplier network.",
  },
  {
    question: "Can I book a Signature Tour on this website today?",
    answer:
      "Not yet. This site is published so you can plan honestly and compare options. Booking arrangements will be confirmed when reservations are activated.",
  },
  {
    question: "Is this a shared small-group tour or a private vehicle?",
    answer:
      "The content model supports both a shared small-group concept (maximum eight guests) and a private eight-seat vehicle. Scheduled shared departures and private pricing are not announced until approved.",
  },
  {
    question: "Is the winery included on the Pompeii and Vesuvius day?",
    answer:
      "It is described as an optional enhancement. Treat it as included only if a future written confirmation says so.",
  },
  {
    question: "Can everyone manage Mount Vesuvius?",
    answer:
      "No. Reaching the summit area involves a steep uphill walk and is not suitable for all mobility levels. Choose another Salerno itinerary if that walk is a concern.",
  },
  {
    question: "Will every Pompeii and Amalfi Coast day include Positano?",
    answer:
      "Not necessarily. Traffic, parking and ship timing can favour a more balanced combination such as Pompeii plus Amalfi or Ravello. We prefer an honest day over an overloaded promise.",
  },
];
