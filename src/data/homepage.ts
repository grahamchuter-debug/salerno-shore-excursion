import type { FAQ, VisitorType } from "./types";

export const homepageTagline = "Find the best version of your day from Salerno";

export const homepageTrustLine =
  "Selected 8-seat experiences • Independent excursion choices • Cruise-aware planning • Secure partner booking";

export const destinationLine =
  "Pompeii, Vesuvius, the Amalfi Coast and Campanian flavours — one port, many possible days.";

export const homepageIntro =
  "Explore Pompeii, Mount Vesuvius and the Amalfi Coast through carefully selected small-group experiences, independent excursions and cruise-port guidance.";

export const inspirationIntro =
  "How would you like to experience Salerno? Choose the shape of your day — ancient ruins, volcanic views, cliffside towns, Greek temples or the city itself — then match it honestly to your hours ashore.";

export const supportingLine =
  "Carefully selected small-group experiences, independent excursion choices and cruise-port guidance for the Amalfi Coast, Pompeii and beyond.";

export const experiencePathsHeading = "How would you like to experience Salerno?";

export interface ExperiencePath {
  id: string;
  title: string;
  description: string;
  who: string;
  time: string;
  pace: string;
  caveat: string;
  cta: string;
  guideHref: string;
  excursionHrefs: { label: string; href: string }[];
  imageKey: string;
}

export const experiencePaths: ExperiencePath[] = [
  {
    id: "pompeii-vesuvius",
    title: "Pompeii and Vesuvius",
    description:
      "Walk through the streets of ancient Pompeii, then continue towards the slopes and views of Mount Vesuvius.",
    who: "Active travellers with a full port day and suitable mobility",
    time: "Typically 7–9 hours",
    pace: "Moderate to active; uneven ruins and steep Vesuvius walking",
    caveat: "Vesuvius summit section is not suitable for all mobility levels",
    cta: "Discover Pompeii and Vesuvius",
    guideHref: "/pompeii-from-salerno-cruise-port/",
    excursionHrefs: [
      {
        label: "Signature Pompeii and Vesuvius",
        href: "/signature-tours/pompeii-vesuvius-winery/",
      },
    ],
    imageKey: "greek-theatre",
  },
  {
    id: "pompeii-amalfi",
    title: "Pompeii and the Amalfi Coast",
    description:
      "Combine one of the ancient world's most remarkable cities with the coastal beauty of Amalfi, Ravello or Positano.",
    who: "First-time visitors on a long call who want both archaeology and coast",
    time: "Typically 8–9 hours",
    pace: "Moderate; road time and summer traffic matter",
    caveat: "Not every coastal town receives extensive free time on every sailing",
    cta: "See the Signature Tour",
    guideHref: "/signature-tours/pompeii-amalfi-coast/",
    excursionHrefs: [
      {
        label: "Signature Pompeii and Amalfi Coast",
        href: "/signature-tours/pompeii-amalfi-coast/",
      },
    ],
    imageKey: "coast",
  },
  {
    id: "amalfi-coast",
    title: "Amalfi Coast",
    description:
      "Explore cliffside towns, sea views and lemon-scented streets by road or from the water.",
    who: "Scenery-led travellers who prefer coast over archaeology",
    time: "Typically 6–8 hours by road; boat days vary",
    pace: "Moderate; steps and slopes in coastal villages",
    caveat: "Summer congestion can shorten free time — boat options may suit some calls",
    cta: "Explore the Amalfi Coast",
    guideHref: "/amalfi-coast-from-salerno-cruise-port/",
    excursionHrefs: [],
    imageKey: "coast",
  },
  {
    id: "paestum-flavours",
    title: "Paestum and local flavours",
    description:
      "Discover Greek temples, Campanian countryside and the traditions behind buffalo mozzarella.",
    who: "History and food lovers seeking a calmer alternative to the busiest coast",
    time: "Typically 6–8 hours",
    pace: "Easy to moderate",
    caveat: "Allow road time south of Salerno — still a regional day, not a city stroll",
    cta: "Discover Paestum",
    guideHref: "/paestum-from-salerno-cruise-port/",
    excursionHrefs: [],
    imageKey: "food",
  },
  {
    id: "salerno-itself",
    title: "Salerno itself",
    description:
      "Stay closer to the ship for historic streets, food, gardens and a relaxed waterfront day.",
    who: "Short calls and passengers who prefer a walkable city focus",
    time: "Typically 3–5 hours for a satisfying city day",
    pace: "Easy to moderate city walking",
    caveat: "You will not reach Pompeii or the Amalfi Coast on this path alone",
    cta: "Explore Salerno",
    guideHref: "/salerno-cruise-port/",
    excursionHrefs: [],
    imageKey: "harbour",
  },
];

export const visitorTypes: VisitorType[] = [
  {
    id: "first-time",
    label: "First-time visitors",
    shortLabel: "First visit",
    description:
      "Start with our Signature Pompeii and Amalfi Coast tour, or Pompeii and Vesuvius if you want the volcano day.",
    href: "/best-salerno-shore-excursions/",
    cta: "First-time guide",
  },
  {
    id: "short-call",
    label: "Short port call",
    shortLabel: "Short call",
    description: "Stay in Salerno or choose a focused Pompeii half day when hours are limited.",
    href: "/salerno-cruise-port/",
    cta: "Short-call ideas",
  },
  {
    id: "families",
    label: "Families and groups",
    shortLabel: "Groups",
    description:
      "Eight-seat Signature Tours and private options suit small parties — confirm walking levels for Vesuvius.",
    href: "/small-group-salerno-shore-excursions/",
    cta: "Small-group planning",
  },
];

export const coreSections = [
  {
    title: "Shore excursions",
    href: "/shore-excursions/",
    description: "Compare Signature Tours and partner Salerno excursions.",
  },
  {
    title: "Signature Tours",
    href: "/signature-tours/",
    description: "Selected eight-seat Pompeii and Amalfi Coast experiences.",
  },
  {
    title: "Port guide",
    href: "/port-guide/",
    description: "Practical Salerno cruise port context.",
  },
  {
    title: "Cruise planner",
    href: "/cruise-planner/",
    description: "Match your time ashore to the right experience.",
  },
];

export const honestAdvice = [
  {
    title: "Amalfi Coast traffic is not optional",
    body: "Summer congestion can materially affect coastal itineraries. A balanced day with fewer stops often beats a rushed checklist.",
  },
  {
    title: "Vesuvius walking is demanding",
    body: "The summit section involves a steep uphill walk and is not suitable for all mobility levels. Choose a different day if that is a concern.",
  },
  {
    title: "Longer days need longer calls",
    body: "Pompeii plus Vesuvius or the Amalfi Coast typically needs a full port day. Confirm all-aboard before booking any regional tour.",
  },
  {
    title: "Commercial relationships are disclosed",
    body: "Our Signature Tours may earn us more than some partner alternatives. Recommendations still follow cruise-day suitability and editorial criteria.",
  },
];

export const passengerSnapshot = {
  eyebrow: "Cruise passenger snapshot",
  title: "Salerno at a glance",
  items: [
    {
      label: "Cruise destination",
      value: "Salerno, Campania",
      detail: "Gateway to the Amalfi Coast and Pompeii",
    },
    {
      label: "Best known for",
      value: "Amalfi Coast, Pompeii and Paestum access",
      detail: "Several very different day shapes",
    },
    {
      label: "Best for",
      value: "Small-group touring, archaeology, scenery and food",
      detail: "Match distance and traffic to port hours",
    },
    {
      label: "Independent option",
      value: "Salerno historic centre and waterfront",
      detail: "Berth position and port arrangements can vary",
    },
    {
      label: "Flagship selected tours",
      value: "Pompeii and Vesuvius; Pompeii and the Amalfi Coast",
      detail: "Eight-seat Signature Tours",
    },
    {
      label: "Planning priority",
      value: "Allow for Amalfi Coast traffic",
      detail: "Ship departure overrides any itinerary",
    },
  ],
};

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "What is the best Salerno shore excursion for a first visit?",
      answer:
        "For a long call, our Signature Pompeii and Amalfi Coast tour is the strongest combined introduction. If the volcano matters more than the coast, choose the Signature Pompeii and Vesuvius day — provided you can manage the uphill Vesuvius walk.",
    },
    {
      question: "Can I visit Pompeii and the Amalfi Coast in one day from Salerno?",
      answer:
        "Yes, on a suitably long call with realistic stop choices and conservative return timing. Summer traffic may limit how many coastal towns receive meaningful free time — quality over quantity matters.",
    },
    {
      question: "Can I walk into Salerno from the cruise port?",
      answer:
        "For many berths, the historic centre is within a reasonable walk, but exact times depend on your ship's position and any port arrangements. Confirm on the day rather than assuming a fixed distance.",
    },
    {
      question: "Is Mount Vesuvius suitable for everyone?",
      answer:
        "No. The summit approach involves a steep uphill walk on uneven ground. Passengers with limited mobility should choose a different itinerary and discuss needs with any operator before enquiring.",
    },
    {
      question: "What is a Signature Tour?",
      answer:
        "A Signature Tour is a selected small-group experience arranged with our trusted local touring partner — currently our eight-seat Pompeii and Vesuvius and Pompeii and Amalfi Coast days.",
    },
  ];
}
