/**
 * World 2.0 destination identity — Salerno.
 * Logo concept: Mediterranean harbour line meeting limestone cliff geometry.
 */
export type LogoConcept = "harbour-cliff" | "lemon-coast" | "harbour-m";
export type LogoVariant = "full" | "compact" | "mark";
export type LogoTone = "default" | "on-dark";

export const destinationIdentity = {
  destination: "Salerno",
  descriptor: "Shore Excursion",
  strapline: "Find the best version of your day from Salerno",
  accessibleName: "Salerno Shore Excursion",
  accent: "mediterranean-blue" as const,
  logoConcept: "harbour-cliff" as LogoConcept,
  iconStyle: "harbour-cliff" as const,
} as const;

export interface ExperiencePillar {
  id: string;
  title: string;
  summary: string;
  topics: string[];
  guideHref: string;
}

/** Five editorial pillars that structure Salerno planning content. */
export const experiencePillars: ExperiencePillar[] = [
  {
    id: "pompeii-roman",
    title: "Pompeii and Roman history",
    summary:
      "Archaeology, Vesuvius and the buried cities of Campania — with honest walking, entrance and combined-itinerary guidance.",
    topics: [
      "Pompeii",
      "Herculaneum",
      "Mount Vesuvius",
      "Guided visits and entrance arrangements",
      "Activity levels and combined days",
    ],
    guideHref: "/pompeii-from-salerno-cruise-port/",
  },
  {
    id: "amalfi-coast",
    title: "Amalfi Coast",
    summary:
      "Cliffside towns, sea views and coastal driving — planned with summer traffic, steps and realistic stop choices in mind.",
    topics: [
      "Amalfi, Ravello and Positano",
      "Coastal roads and boat alternatives",
      "Traffic and itinerary design",
      "Viewpoints and village walking",
    ],
    guideHref: "/amalfi-coast-from-salerno-cruise-port/",
  },
  {
    id: "paestum-food",
    title: "Paestum and local flavours",
    summary:
      "Greek temples, buffalo mozzarella and Cilento countryside — a calmer alternative to the busiest coastal routes.",
    topics: [
      "Paestum archaeology",
      "Buffalo farms and mozzarella tastings",
      "Food-led countryside days",
      "Fewer-crowd touring",
    ],
    guideHref: "/paestum-from-salerno-cruise-port/",
  },
  {
    id: "salerno-city",
    title: "Salerno itself",
    summary:
      "Historic streets, the cathedral, waterfront and gardens — the lowest-risk option when time ashore is limited.",
    topics: [
      "Historic centre and Cathedral of St Matthew",
      "Waterfront and gardens",
      "Food walks",
      "Independent exploration",
    ],
    guideHref: "/salerno-cruise-port/",
  },
  {
    id: "small-group",
    title: "Private and small-group touring",
    summary:
      "Eight-seat vehicles, flexible pacing and cruise-aware timing — alternatives to large-coach days.",
    topics: [
      "Signature Tours and private formats",
      "Family and friendship groups",
      "Return-to-ship planning",
      "Premium but honest itineraries",
    ],
    guideHref: "/small-group-salerno-shore-excursions/",
  },
];

export const spiritOfSalerno = {
  eyebrow: "The spirit of Salerno",
  title: "Sunlit, historic and quietly confident",
  imageKey: "harbour",
  paragraphs: [
    "Salerno is a working Campanian city with its own rhythm — not a theme-park version of the Amalfi Coast. Passengers who stay discover a dignified historic centre, a long waterfront and a food culture that feels genuinely local rather than purely tourist-facing.",
    "As a cruise port, Salerno's strength is reach. Within one call you can stand inside Pompeii, look across the Bay of Naples from Vesuvius, wander lemon-scented coastal towns or explore the Greek temples at Paestum — but only if you choose the right version of the day rather than chasing every headline on a map.",
    "The best Salerno itineraries feel warm, unhurried and honest about trade-offs: fewer stops with more meaning, small groups where they add value, and return planning that respects the ship above any brochure checklist.",
  ],
  highlights: [
    "Mediterranean light on limestone and sea",
    "Gateway to Pompeii, Vesuvius and the Amalfi Coast",
    "Calmer city alternative to Naples",
    "Campanian food — mozzarella, seafood and lemon",
    "Premium small-group touring without overselling",
  ],
  personality: [
    "Sunlit",
    "Elegant",
    "Authentic",
    "Coastal",
    "Historic",
    "Flavourful",
    "Dramatic",
    "Warm Italian",
    "Premium but relaxed",
  ],
} as const;
