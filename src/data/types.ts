import type { EditorialBadge } from "./badges";

export type { EditorialBadge } from "./badges";

export interface FAQ {
  question: string;
  answer: string;
}

export type Pace = "Relaxed" | "Moderate" | "Active";

/** How the group is formed and run on a given excursion. */
export type GroupType = "Private" | "Small" | "Standard" | "Independent-style";

/** Editorial walking / effort grading, kept deliberately simple. */
export type ActivityLevel = "Easy" | "Moderate" | "Difficult" | "Active";

/** Whether food or drink is part of the excursion, described honestly. */
export type FoodStatus =
  | "Not included"
  | "Tastings included"
  | "Snacks and beverages"
  | "Lunch included"
  | "Wine and snacks";

/** Flexible supplier model — SEG today, affiliates and exclusives later. */
export type SupplierKind =
  | "shore-excursions-group"
  | "affiliate"
  | "exclusive"
  | "future"
  | "editorial";

export interface ExcursionSupplier {
  kind: SupplierKind;
  name: string;
  /** Optional booking or affiliate URL when live */
  url?: string;
  productId?: string;
  notes?: string;
}

export interface ExcursionPage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  tagline: string;
  duration: string;
  pace: Pace;
  bestFor: string;
  overview: string;
  body: string[];
  highlights: string[];
  included: string[];
  portLogistics: string;
  tips: string[];
  faqs: FAQ[];
  relatedExcursionSlugs: string[];
  featured?: boolean;
  /** Optional supplier — keep flexible for SEG, affiliates and future exclusives */
  supplier?: ExcursionSupplier;

  /** World 2.0 editorial fields — at most one badge per product. */
  badge?: EditorialBadge;
  groupType?: GroupType;
  activityLevel?: ActivityLevel;
  foodBeverage?: FoodStatus;
  /** Places genuinely visited, for editorial context and internal linking. */
  locations?: string[];
  /** One-line description of the style of the day (e.g. "Guided coach day"). */
  experienceStyle?: string;
  /** How well the product fits a cruise call, in plain language. */
  cruiseSuitability?: string;
  /** Why our editors would recommend it to the right passenger. */
  whyRecommend?: string;
  /** The single most important honest caveat a passenger should know. */
  planningCaveat?: string;
  /** Short suitability label shown on cards (e.g. "Full port day"). */
  suitabilityLabel?: string;
  /** Optional call-to-action label override. */
  ctaLabel?: string;
}

export interface TransferOption {
  name: string;
  description: string;
  duration: string;
  priceEstimate: string;
  bestFor: string;
}

export interface TransferPage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  tagline: string;
  overview: string;
  body: string[];
  options: TransferOption[];
  timing: string[];
  tips: string[];
  faqs: FAQ[];
  relatedTransferSlugs: string[];
  featured?: boolean;
}

export interface HotelArea {
  name: string;
  description: string;
  bestFor: string;
}

export interface HotelPick {
  name: string;
  description: string;
  distance: string;
}

export interface HotelPage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  tagline: string;
  overview: string;
  body: string[];
  areas: HotelArea[];
  picks: HotelPick[];
  tips: string[];
  faqs: FAQ[];
  relatedHotelSlugs: string[];
  featured?: boolean;
}

export interface GettingThereStep {
  method: string;
  detail: string;
  time: string;
  cost: string;
}

export interface AttractionPage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  attractionName: string;
  tagline: string;
  overview: string;
  body: string[];
  distanceFromPort: string;
  travelTime: string;
  timeNeeded: string;
  gettingThere: GettingThereStep[];
  highlights: string[];
  tips: string[];
  faqs: FAQ[];
  relatedAttractionSlugs: string[];
  relatedExcursionSlug?: string;
}

export interface ScheduleEntry {
  date: string;
  ship: string;
  cruiseLine: string;
  arrival: string;
  departure: string;
  timeInPort?: string;
  terminal?: string;
  callType?: string;
  notes?: string;
}

export interface ShipSchedulePort {
  slug: string;
  name: string;
  country: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  scheduleOverview: string;
  planningTips?: string[];
  faqs?: FAQ[];
}

export interface VisitorType {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  href: string;
  cta: string;
}

export type EditorialCategory =
  | "editors-choice"
  | "best-historic"
  | "best-independent"
  | "best-coastal"
  | "best-view"
  | "best-got"
  | "best-families"
  | "best-photography"
  | "best-food"
  | "best-luxury"
  | "hidden-gem"
  | "best-value"
  | "best-short-port";

export interface EditorialRecommendation {
  category: EditorialCategory;
  title: string;
  description: string;
  href: string;
  /** Signature Experiences — unique curated offerings; use Signature Experience badge */
  signature?: boolean;
}

export type GuideCategory = "planning" | "destination" | "editorial";

export interface GuidePage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  tagline: string;
  overview: string;
  body: string[];
  highlights: string[];
  tips: string[];
  faqs: FAQ[];
  recommendations?: EditorialRecommendation[];
  relatedSlugs: string[];
  imageKey: string;
  hubPath: string;
  /** Editorial grouping for hub navigation and internal linking. */
  category?: GuideCategory;
}

export interface ComparisonTableRow {
  category: string;
  optionA: string;
  optionB: string;
}

export interface ComparisonGuideItem {
  name: string;
  slug: string;
  href: string;
  reason: string;
  topExcursion: string;
  returnConfidence: string;
  walkingDifficulty: string;
}

export interface Comparison {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  kind: "versus" | "guide";
  optionA?: string;
  optionB?: string;
  summary: string;
  verdict: string;
  overview: string[];
  comparisonTable?: ComparisonTableRow[];
  guideItems?: ComparisonGuideItem[];
  faqs: FAQ[];
  relatedSlugs: string[];
  imageKey: string;
}

export interface ExperienceCard {
  slug: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  imageKey: string;
}
