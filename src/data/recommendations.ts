export interface TravellerRecommendation {
  id: string;
  travellerType: string;
  recommendation: string;
  reason: string;
  href: string;
  /** Plain-language mobility note when relevant */
  mobilityNote?: string;
}

/**
 * "Which Salerno experience is right for you?" — traveller → best-fit table.
 * Keep aligned with `experiencePaths` in `homepage.ts` and live excursion routes.
 */
export const travellerRecommendations: TravellerRecommendation[] = [
  {
    id: "ultimate-first-visit",
    travellerType: "Wants the ultimate first visit",
    recommendation: "Signature Pompeii and Amalfi Coast",
    reason:
      "The strongest single day when you cannot choose between ancient Pompeii and a carefully selected coastal town.",
    href: "/signature-tours/pompeii-amalfi-coast/",
  },
  {
    id: "active-traveller",
    travellerType: "Active traveller",
    recommendation: "Signature Pompeii and Vesuvius",
    reason:
      "Archaeology plus crater views and volcanic landscape — paced for passengers comfortable with uphill walking.",
    href: "/signature-tours/pompeii-vesuvius-winery/",
    mobilityNote:
      "Mount Vesuvius involves a steep uphill walk and is not suitable for all mobility levels. Do not book if you cannot manage the summit section.",
  },
  {
    id: "wine-food",
    travellerType: "Wine and food traveller",
    recommendation: "Pompeii, Vesuvius and optional winery",
    reason:
      "Combine history and landscape with an optional volcanic-soil winery stop when your chosen booking version includes it.",
    href: "/signature-tours/pompeii-vesuvius-winery/",
    mobilityNote:
      "The Vesuvius summit walk still applies. Treat the winery as optional unless your confirmation includes it.",
  },
  {
    id: "coast-only",
    travellerType: "Coast-only priority",
    recommendation: "Amalfi Coast road or boat tour",
    reason:
      "Focus the day on cliffside scenery without committing to Pompeii — boat options reduce road traffic when schedules align.",
    href: "/amalfi-coast-from-salerno-cruise-port/",
  },
  {
    id: "history",
    travellerType: "History priority",
    recommendation: "Pompeii, Herculaneum or Paestum",
    reason:
      "Roman streets at Pompeii, intimate Herculaneum or Greek temples at Paestum depending on how much road time you accept.",
    href: "/pompeii-from-salerno-cruise-port/",
  },
  {
    id: "fewer-crowds",
    travellerType: "Wants fewer crowds",
    recommendation: "Paestum and mozzarella",
    reason:
      "Temple archaeology and countryside tastings away from the busiest Amalfi Coast bottlenecks.",
    href: "/paestum-from-salerno-cruise-port/",
  },
  {
    id: "short-call",
    travellerType: "Shorter port call",
    recommendation: "Pompeii half day or Salerno",
    reason:
      "A focused archaeological visit or a walkable city day stays closer to the ship when hours are limited.",
    href: "/salerno-cruise-port/",
  },
  {
    id: "mobility",
    travellerType: "Mobility concerns",
    recommendation: "Review individual tour activity carefully",
    reason:
      "Avoid Vesuvius summit itineraries if uphill walking is unsuitable. Salerno city, boat days or Paestum may fit better than Positano's steps.",
    href: "/mount-vesuvius-from-salerno/",
    mobilityNote:
      "Do not recommend Vesuvius to guests with unsuitable mobility. Check each product's activity level and discuss needs before enquiring.",
  },
  {
    id: "family-group",
    travellerType: "Family or friendship group",
    recommendation: "Eight-seat Signature or private tour",
    reason:
      "Shared vehicle pacing for small parties without a large-coach format — confirm passenger count and child suitability.",
    href: "/private-salerno-shore-excursions/",
  },
  {
    id: "minimal-traffic",
    travellerType: "Wants minimal road traffic",
    recommendation: "Amalfi Coast boat experience",
    reason:
      "Sea-based coastal access can reduce time on congested cliff roads when ferries suit your ship schedule.",
    href: "/amalfi-coast-from-salerno-cruise-port/",
  },
  {
    id: "local-culture",
    travellerType: "Wants local city culture",
    recommendation: "Salerno walk or food tour",
    reason:
      "Cathedral, historic lanes, waterfront and Campanian flavours without a long regional drive.",
    href: "/salerno-food-guide/",
  },
];

export function getRecommendationById(id: string): TravellerRecommendation | undefined {
  return travellerRecommendations.find((rec) => rec.id === id);
}

export function getAllRecommendationIds(): string[] {
  return travellerRecommendations.map((rec) => rec.id);
}
