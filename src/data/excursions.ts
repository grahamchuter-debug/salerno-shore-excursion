import type { EditorialBadge } from "./badges";
import type { ExcursionPage } from "./types";

export const PORT_LOGISTICS =
  "Confirm your meeting point at the Salerno cruise port (Molo Manfredi area) with the supplier before sailing day, and plan backwards from your ship's all-aboard time — not only the published excursion departure. Amalfi Coast and Paestum days involve substantial driving on winding coastal roads; Pompeii-only calls are more forgiving on a shorter port window.";

export const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
};

const amalfiPortLogistics =
  "Salerno is a practical gateway to the Amalfi Coast, but coastal driving and village stops eat time quickly. Confirm pickup at the Salerno cruise terminal, leave a generous buffer before all-aboard, and treat traffic on the corniche as part of the day rather than a surprise.";

const pompeiiPortLogistics =
  "Pompeii sits inland from Salerno with a manageable transfer compared with longer Amalfi days. Still confirm the exact meeting point at Molo Manfredi and work backwards from all-aboard — even a half-day ruin visit needs sensible return timing.";

const paestumPortLogistics =
  "Paestum lies south of Salerno across open countryside, so this is a full-port commitment. Confirm terminal pickup details and plan a conservative return before your ship's all-aboard call.";

const salernoCityLogistics =
  "This is one of the more forgiving Salerno port days because you stay local. Meet at the agreed point near Molo Manfredi and keep an eye on all-aboard even for a short walking tour.";

const privatePortLogistics =
  "Private touring from Salerno offers flexibility, but your driver still needs clear terminal instructions and a realistic finish time before all-aboard. Coastal and multi-stop days should not be padded with extra detours on sailing day.";

export const excursions: ExcursionPage[] = [
  {
    slug: "amalfi-coast-small-group",
    title: "Amalfi Coast Small Group",
    seoTitle: "Amalfi Coast Small Group Shore Excursion from Salerno",
    metaDescription:
      "A small-group Amalfi Coast day from Salerno with easier pacing and village time — our Editor's Choice for a first coastal call.",
    category: "Amalfi Coast",
    badge: "editors-choice",
    tagline: "Coastal villages and sea views without the largest coach format.",
    duration: "Approximately 7 hours",
    pace: "Relaxed",
    groupType: "Small",
    activityLevel: "Easy",
    foodBeverage: "Not included",
    locations: ["Amalfi Coast", "Positano", "Amalfi"],
    experienceStyle: "Small-group scenic coastal day",
    bestFor: "First-time Amalfi visitors who prefer a smaller group and easier walking grade",
    cruiseSuitability: "Strong full-port choice when the coast is your priority from Salerno",
    suitabilityLabel: "Full-port coastal day",
    whyRecommend:
      "Salerno positions you well for the coast, and the small-group format usually feels more manageable than larger coach days when lanes and viewpoints get busy.",
    planningCaveat:
      "Coastal traffic and parking constraints can shorten free time in villages — decide whether Positano, Amalfi or photo stops matter most before you sail.",
    overview:
      "Travel from Salerno into the Amalfi Coast heartland on a small-group itinerary with scenic stops and village time, paced for easier walking rather than a rushed grand tour.",
    body: [
      "This is our preferred shared-group introduction to the coast from Salerno when you want the classic cliff-side drama without committing to a private vehicle.",
      "Expect winding corniche driving, photo stops and time on foot in coastal settlements where cobbles and steps are normal rather than exceptional.",
      "Food is not built into the day — use free moments for gelato, coffee or a simple lunch rather than assuming a set meal stop.",
    ],
    highlights: [
      "Small-group coastal touring from Salerno",
      "Amalfi Coast scenery and village time",
      "Easier walking grade than moderate coastal combos",
      "Editor's Choice for a first coastal day",
    ],
    included: [
      "Small-group touring as described by the supplier",
      "Round-trip transport from the Salerno cruise area",
    ],
    tips: [
      "Wear shoes with grip for village lanes and steps",
      "Bring sun protection — shade is limited at viewpoints",
      "Check live availability and meeting details on the supplier page before booking",
    ],
    faqs: [
      {
        question: "Is this better than the standard Discover the Amalfi Coast tour?",
        answer:
          "Choose this if group size and an easier walking grade matter. Choose the standard tour if you prefer a classic larger-group format with a similar coastal scope.",
      },
      {
        question: "Will we have free time in the villages?",
        answer: "Yes, within the constraints of coastal driving and your ship's schedule. Free time can compress when traffic is heavy.",
      },
    ],
    relatedExcursionSlugs: [
      "discover-the-amalfi-coast",
      "see-and-sail-amalfi-coast",
      "ravello-amalfi-small-group",
    ],
    featured: true,
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/amalfi-coast-small-group/eusoamalsmll",
      productId: "eusoamalsmll",
    },
    ctaLabel: "Check Partner Availability",
    portLogistics: amalfiPortLogistics,
  },
  {
    slug: "discover-the-amalfi-coast",
    title: "Discover the Amalfi Coast",
    seoTitle: "Discover the Amalfi Coast from Salerno Shore Excursion",
    metaDescription:
      "A classic Amalfi Coast coach day from Salerno with moderate walking and headline villages — a straightforward shared-group coastal itinerary.",
    category: "Amalfi Coast",
    tagline: "The coast's headline villages on a standard shared-group day.",
    duration: "Approximately 8 hours",
    pace: "Moderate",
    groupType: "Standard",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Amalfi Coast", "Positano", "Amalfi", "Ravello"],
    experienceStyle: "Guided coach coastal day",
    bestFor: "Travellers who want a broad Amalfi introduction on a standard group tour",
    cruiseSuitability: "Uses most of a full port day from Salerno",
    suitabilityLabel: "Classic full-port day",
    whyRecommend:
      "A visible benchmark for coastal touring from Salerno — useful when you want the familiar coach-day structure and are comfortable with moderate walking.",
    planningCaveat:
      "Moderate walking and longer coach time mean this is not the lightest coastal option; compare with the small-group Amalfi tour if pace and group size matter.",
    overview:
      "Cover the Amalfi Coast's best-known stretches on a standard-group day from Salerno, combining corniche scenery with village stops and moderate time on foot.",
    body: [
      "Salerno's position south-east of the Sorrentine peninsula makes a coast day feasible, but it is still a driving-heavy itinerary once you reach the corniche.",
      "This product suits passengers who want the familiar rhythm of a shared coach tour rather than a private vehicle or a boat-led alternative.",
      "Meals are not included — plan a light lunch in a village if timing allows, or snack through the day.",
    ],
    highlights: [
      "Amalfi Coast corniche scenery",
      "Village stops along the coast",
      "Standard shared-group format",
      "Moderate walking through historic lanes",
    ],
    included: [
      "Guided touring as described by the supplier",
      "Transport from the Salerno cruise port area",
    ],
    tips: [
      "Compare with the small-group coastal tour if you want easier grading",
      "Consider the sailing option if you prefer sea-level perspectives",
      "Confirm live departure and return times against your all-aboard",
    ],
    faqs: [
      {
        question: "How does this differ from the small-group Amalfi Coast tour?",
        answer:
          "This is a standard larger-group day with a moderate activity grade. The small-group tour is shorter, easier and our Editor's Choice for many first-time visitors.",
      },
      {
        question: "Is lunch included?",
        answer: "No. Supplier category information lists food and beverage as not included.",
      },
    ],
    relatedExcursionSlugs: [
      "amalfi-coast-small-group",
      "see-and-sail-amalfi-coast",
      "private-positano-amalfi-ravello",
    ],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/discover-the-amalfi-coast/eusoamalfi",
      productId: "eusoamalfi",
    },
    ctaLabel: "Check Partner Availability",
    portLogistics: amalfiPortLogistics,
  },
  {
    slug: "walking-tour-historic-salerno",
    title: "Walking Tour of Historic Salerno",
    seoTitle: "Historic Salerno Walking Tour from the Cruise Port",
    metaDescription:
      "A compact walking introduction to Salerno's historic centre from the cruise port — ideal when you want a local city day without long transfers.",
    category: "Salerno city",
    badge: "best-short-call",
    tagline: "Cathedral lanes, medieval corners and a manageable port-side city walk.",
    duration: "Approximately 2 hours 30 minutes",
    pace: "Relaxed",
    groupType: "Small",
    activityLevel: "Easy",
    foodBeverage: "Not included",
    locations: ["Salerno", "Historic centre", "Salerno Cathedral area"],
    experienceStyle: "Guided city walking tour",
    bestFor: "Short port calls and passengers who prefer to stay in Salerno itself",
    cruiseSuitability: "One of the strongest options when you want high return confidence",
    suitabilityLabel: "Short-call friendly",
    whyRecommend:
      "Salerno rewards on-foot exploration, and this keeps transfer risk low while still offering structure beyond wandering alone from the terminal.",
    planningCaveat:
      "Cobbles and occasional steps appear even on an easy graded walk — confirm mobility needs with the supplier if step-free routing is essential.",
    overview:
      "Explore Salerno's historic core on a guided walking tour designed for cruise passengers, focusing on the city's layered streetscape close to the port.",
    body: [
      "When the Amalfi Coast or Pompeii feel too ambitious for your call length, Salerno's centro storico is a legitimate destination in its own right.",
      "Expect a guided pace through lanes, squares and landmark churches rather than a region-spanning coach day.",
      "Food is not included, but the short format leaves room for coffee or a casual bite afterward if your schedule allows.",
    ],
    highlights: [
      "Guided walk through historic Salerno",
      "Minimal transfer time from the cruise port",
      "Easy activity grading",
      "Strong fit for shorter port windows",
    ],
    included: [
      "Guided walking tour as described by the supplier",
      "Local guiding in Salerno",
    ],
    tips: [
      "Pair with independent time at the waterfront if your call is longer",
      "Wear comfortable walking shoes for cobbles",
      "Keep all-aboard in mind even for a short tour",
    ],
    faqs: [
      {
        question: "Is this suitable for a short port call?",
        answer:
          "Yes. At roughly two and a half hours it is one of the most conservative Salerno options for timing, provided your ship's window aligns with the departure.",
      },
      {
        question: "Does the tour include the Amalfi Coast or Pompeii?",
        answer: "No. This is a Salerno city walk only. Choose a regional day if you want those destinations.",
      },
    ],
    relatedExcursionSlugs: ["street-food-salerno", "private-salerno-paestum", "pompeii-half-day"],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/walking-tour-of-historic-salerno/eusowalk",
      productId: "eusowalk",
    },
    ctaLabel: "View Tour Details",
    portLogistics: salernoCityLogistics,
  },
  {
    slug: "taste-of-sorrento-from-salerno",
    title: "A Taste of Sorrento from Salerno",
    seoTitle: "Taste of Sorrento Shore Excursion from Salerno",
    metaDescription:
      "A small-group Sorrento day from Salerno with easier pacing and a meal component — useful when you want peninsula flavour without a full Amalfi commitment.",
    category: "Amalfi Coast",
    badge: "best-food",
    tagline: "Sorrento's lanes, views and a included meal stop on an easy-paced day.",
    duration: "Approximately 7 hours",
    pace: "Relaxed",
    groupType: "Small",
    activityLevel: "Easy",
    foodBeverage: "Lunch included",
    locations: ["Sorrento", "Sorrentine Peninsula"],
    experienceStyle: "Small-group food and culture day",
    bestFor: "Food-focused travellers who want Sorrento rather than a ruin-heavy itinerary",
    cruiseSuitability: "Works on a full port day when Sorrento is the headline",
    suitabilityLabel: "Food-led peninsula day",
    whyRecommend:
      "Sorrento offers a different rhythm from cliff-side Amalfi villages — citrus, cafés and a meal built into the day can feel more relaxed than ruin touring.",
    planningCaveat:
      "Driving time from Salerno still applies; this is not a substitute for a very short call even though the walking grade is easy.",
    overview:
      "Travel from Salerno to Sorrento on a small-group itinerary that combines town time with a meal component and an easy activity grading.",
    body: [
      "If your ideal Salerno day involves sitting down to eat well rather than climbing Vesuvius, this Sorrento-focused option deserves consideration.",
      "The small-group format and easy grading make it accessible, while the peninsula setting still delivers Gulf of Naples atmosphere.",
      "Confirm what the meal component includes on the live supplier page — menus and venues can change seasonally.",
    ],
    highlights: [
      "Sorrento town visit from Salerno",
      "Meal included per supplier listing",
      "Small-group easy-paced format",
      "Peninsula scenery and café culture",
    ],
    included: [
      "Small-group touring as described by the supplier",
      "Meal component as listed by the supplier",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Compare with the street-food Salerno walk if you prefer staying in port",
      "Notify the supplier of dietary needs when booking if possible",
      "Allow margin before all-aboard on the return drive",
    ],
    faqs: [
      {
        question: "Is the Amalfi Coast included?",
        answer:
          "No. This itinerary centres on Sorrento. Choose an Amalfi Coast day if Positano, Amalfi or Ravello are your priorities.",
      },
      {
        question: "Is lunch included?",
        answer: "Supplier category information lists a meal component. Confirm current menu details on the live product page.",
      },
    ],
    relatedExcursionSlugs: [
      "discover-the-amalfi-coast",
      "pompeii-sorrento-coast",
      "street-food-salerno",
    ],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/a-taste-of-sorrento/eusotastesor",
      productId: "eusotastesor",
    },
    ctaLabel: "Check Partner Availability",
    portLogistics: amalfiPortLogistics,
  },
  {
    slug: "pompeii-skip-the-line-from-salerno",
    title: "Discover Pompeii from Salerno with Skip-the-Line Ticket",
    seoTitle: "Pompeii Skip-the-Line Shore Excursion from Salerno",
    metaDescription:
      "A compact Pompeii visit from Salerno with skip-the-line entry — our Editor's Choice when you want the ruins without a long regional day.",
    category: "Pompeii & Vesuvius",
    badge: "editors-choice",
    tagline: "Focused ruin time with pre-arranged entry from Salerno.",
    duration: "Approximately 3 hours 30 minutes",
    pace: "Moderate",
    groupType: "Standard",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Pompeii Archaeological Park"],
    experienceStyle: "Compact guided ruin visit",
    bestFor: "Passengers who want Pompeii on a tighter port schedule",
    cruiseSuitability: "Strong when you need ruins without an all-day commitment",
    suitabilityLabel: "Compact ruin visit",
    whyRecommend:
      "Skip-the-line entry removes one variable on a short Salerno call, and the shorter duration leaves more buffer before all-aboard than nine-hour combos.",
    planningCaveat:
      "Pompeii's uneven stones and limited shade make this moderate despite the shorter clock — not ideal if you need step-free access throughout the site.",
    overview:
      "Reach Pompeii from Salerno for a guided visit with skip-the-line entry, designed for passengers who want the archaeological highlight without a full regional itinerary.",
    body: [
      "Salerno is a practical Pompeii gateway compared with some Italian ports, and this product keeps the day tightly focused on the ruins themselves.",
      "Expect guided interpretation of key streets, houses and public spaces rather than a combined Amalfi or Vesuvius extension.",
      "The shorter format suits mixed-interest groups where only one person strongly wants ancient history.",
    ],
    highlights: [
      "Skip-the-line Pompeii entry",
      "Guided ruin visit from Salerno",
      "Shorter duration than full-day combos",
      "Editor's Choice for focused ruin touring",
    ],
    included: [
      "Skip-the-line entry as described by the supplier",
      "Guided touring at Pompeii",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Wear a hat and carry water — shade inside the site is limited",
      "Compare with the half-day small-group tour if group size matters",
      "Confirm live meeting time at Molo Manfredi before you sail",
    ],
    faqs: [
      {
        question: "Is Mount Vesuvius included?",
        answer: "No. This is a Pompeii-only itinerary. Choose the Pompeii and Vesuvius small-group tour if the crater is essential.",
      },
      {
        question: "Is this long enough to see Pompeii properly?",
        answer:
          "It covers the headline experience on a compact schedule. For deeper exploration plus a second site, consider the half-day or full-day small-group ruin tours.",
      },
    ],
    relatedExcursionSlugs: ["pompeii-half-day", "pompeii-vesuvius-small-group", "pompeii-herculaneum-small-group"],
    featured: true,
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/discover-pompeii-from-salerno-with-skip-ticket/eusopmpeiiwskipline",
      productId: "eusopmpeiiwskipline",
    },
    ctaLabel: "Check Partner Availability",
    portLogistics: pompeiiPortLogistics,
  },
  {
    slug: "paestum-mozzarella-from-salerno",
    title: "Paestum Archaeological and Mozzarella Tasting",
    seoTitle: "Paestum and Mozzarella Tasting from Salerno",
    metaDescription:
      "Greek temples at Paestum plus a mozzarella tasting south of Salerno — an Editor's Choice food-and-history day away from the coast crowds.",
    category: "Paestum & food",
    badge: "editors-choice",
    tagline: "Ancient temples and buffalo-country tasting in one southern Campania day.",
    duration: "Approximately 7 hours",
    pace: "Moderate",
    groupType: "Standard",
    activityLevel: "Moderate",
    foodBeverage: "Tastings included",
    locations: ["Paestum", "Cilento countryside"],
    experienceStyle: "Culture and food day south of Salerno",
    bestFor: "Travellers who want history and authentic food away from the Amalfi corniche",
    cruiseSuitability: "Best on a full port day with conservative return timing",
    suitabilityLabel: "Full-port southbound day",
    whyRecommend:
      "Paestum delivers a different Campania story from coastal postcard views, and the tasting element gives the day a clear sensory anchor.",
    planningCaveat:
      "This is a long southbound drive from Salerno — traffic and farm-stop duration can compress temple time if the day runs late.",
    overview:
      "Head south from Salerno to Paestum's Greek temples and combine archaeological visiting with a mozzarella tasting experience in the buffalo-mozzarella countryside.",
    body: [
      "When you have already seen the Amalfi Coast or simply want fewer corniche queues, Paestum offers some of Italy's most striking ancient architecture in open countryside.",
      "The tasting component turns what could feel like a pure history day into something more memorable for mixed-interest groups.",
      "Confirm tasting formats and dietary options on the supplier page — farm visits can vary by season.",
    ],
    highlights: [
      "Paestum temple complex visit",
      "Mozzarella tasting experience",
      "Distinctive southbound itinerary from Salerno",
      "Editor's Choice for food-and-history balance",
    ],
    included: [
      "Guided or hosted elements as described by the supplier",
      "Tasting component per supplier listing",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Bring sun protection — temple areas are exposed",
      "Compare with the private Salerno and Paestum tour for a tailored pace",
      "Treat this as a full-day commitment from the port",
    ],
    faqs: [
      {
        question: "Is Paestum far from Salerno cruise port?",
        answer:
          "It is a substantial drive south. The day works best when your ship allows a full port call and you accept return-time conservatism.",
      },
      {
        question: "Is this similar to the street-food Salerno walk?",
        answer:
          "No. The street-food tour stays in Salerno city. This is a regional day combining temples and countryside tasting.",
      },
    ],
    relatedExcursionSlugs: ["private-salerno-paestum", "street-food-salerno", "amalfi-coast-small-group"],
    featured: true,
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/paestum-archaeological-mozzarella-from-salerno/eusopaestummozzerell",
      productId: "eusopaestummozzerell",
    },
    ctaLabel: "Check Partner Availability",
    portLogistics: paestumPortLogistics,
  },
  {
    slug: "see-and-sail-amalfi-coast",
    title: "See and Sail the Amalfi Coast from Salerno",
    seoTitle: "See and Sail the Amalfi Coast from Salerno",
    metaDescription:
      "Combine coastal viewpoints with time on the water — our Editor's Choice when you want Amalfi scenery from both land and sea.",
    category: "Amalfi Coast",
    badge: "editors-choice",
    tagline: "Corniche views plus a boat perspective on the same Salerno port day.",
    duration: "Approximately 7 hours",
    pace: "Relaxed",
    groupType: "Standard",
    activityLevel: "Easy",
    foodBeverage: "Not included",
    locations: ["Amalfi Coast", "Amalfi", "Coastal waters"],
    experienceStyle: "Land-and-sea coastal day",
    bestFor: "Passengers who want the coast without spending every hour on a coach",
    cruiseSuitability: "Strong full-port choice when sea conditions cooperate",
    suitabilityLabel: "Land-and-sea coastal day",
    whyRecommend:
      "The boat element changes the rhythm of a coast day and can feel less congested than back-to-back coach stops in peak season.",
    planningCaveat:
      "Boat operations depend on weather and sea state — suppliers may adjust or substitute land-based elements when sailing is not safe.",
    overview:
      "Experience the Amalfi Coast from Salerno through a combination of scenic land transfers and time on the water, offering a dual perspective on the shoreline.",
    body: [
      "Coastal roads show the cliffs; the water shows why they matter. This itinerary tries to deliver both within a single port day.",
      "It suits travellers who find long coach loops repetitive and want a clearer change of pace mid-itinerary.",
      "Food is not included — plan accordingly around boat and land stop timings.",
    ],
    highlights: [
      "Amalfi Coast land and sea combination",
      "Boat segment along the shoreline",
      "Easier activity grading",
      "Editor's Choice for varied coastal pacing",
    ],
    included: [
      "Land and boat elements as described by the supplier",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Bring a light layer for the boat segment",
      "Ask the supplier about weather substitution policies before booking",
      "Compare with the small-group coastal tour if you prefer all-land routing",
    ],
    faqs: [
      {
        question: "Does the boat always operate?",
        answer:
          "No. Coastal sailing depends on conditions. Suppliers may modify the itinerary when the sea is unsuitable.",
      },
      {
        question: "Is this easier than the standard Discover the Amalfi Coast tour?",
        answer:
          "The activity grade is easier, but it still uses most of a port day. Choose the walking tour or Pompeii skip-the-line option for shorter formats.",
      },
    ],
    relatedExcursionSlugs: ["amalfi-coast-small-group", "discover-the-amalfi-coast", "ravello-amalfi-small-group"],
    featured: true,
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/see-and-sail-the-amalfi-coast-from-salerno/eusosamalficbtseafsa",
      productId: "eusosamalficbtseafsa",
    },
    ctaLabel: "Check Partner Availability",
    portLogistics: amalfiPortLogistics,
  },
  {
    slug: "ravello-amalfi-small-group",
    title: "Small Group Exploration of Ravello and Amalfi",
    seoTitle: "Ravello and Amalfi Small Group Tour from Salerno",
    metaDescription:
      "Ravello's gardens and terraces with Amalfi town time on a nine-hour small-group day from Salerno — a slower coastal culture itinerary.",
    category: "Amalfi Coast",
    tagline: "Elevated Ravello views and Amalfi lanes on a small-group coastal day.",
    duration: "Approximately 9 hours",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Ravello", "Amalfi", "Amalfi Coast"],
    experienceStyle: "Small-group hilltown and coastal day",
    bestFor: "Travellers who prioritise Ravello's atmosphere over a Positano-heavy route",
    cruiseSuitability: "Requires a full port day with limited slack before all-aboard",
    suitabilityLabel: "Long full-port day",
    whyRecommend:
      "Ravello rewards unhurried visitors, and pairing it with Amalfi gives both altitude and harbour-level coastal character.",
    planningCaveat:
      "At nine hours this is one of the longer Amalfi itineraries from Salerno — traffic on the corniche can erode garden and free time.",
    overview:
      "Visit Ravello and Amalfi on a small-group coastal day from Salerno, emphasising terraces, gardens and historic lanes rather than a whistle-stop photo circuit.",
    body: [
      "Ravello sits above the coast with a calmer, more contemplative feel than busier villages — a good fit when you want culture and views over shopping time.",
      "Amalfi anchors the day at sea level with cathedral squares and waterfront energy.",
      "Neither meal stops nor admissions are guaranteed here — verify villa gardens and church entry on the live page.",
    ],
    highlights: [
      "Ravello hilltown and terrace views",
      "Amalfi historic centre time",
      "Small-group coastal format",
      "Nine-hour regional itinerary",
    ],
    included: [
      "Small-group touring as described by the supplier",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Wear comfortable shoes for sloping lanes in both towns",
      "Compare with the private Positano, Amalfi and Ravello tour for party-only pacing",
      "Build a conservative all-aboard buffer on the return",
    ],
    faqs: [
      {
        question: "Is Positano included?",
        answer:
          "This itinerary centres on Ravello and Amalfi. Choose a Positano-focused private tour or the standard Discover the Amalfi Coast day if Positano is essential.",
      },
      {
        question: "Why is the day nine hours?",
        answer:
          "Coastal driving and two substantial stops require time. Confirm live timings against your ship's port window before booking.",
      },
    ],
    relatedExcursionSlugs: [
      "private-positano-amalfi-ravello",
      "amalfi-coast-small-group",
      "discover-the-amalfi-coast",
    ],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/small-grp-exploration-ravello-amalfi-from-salerno/eusoravellonamalfi",
      productId: "eusoravellonamalfi",
    },
    ctaLabel: "Check Partner Availability",
    portLogistics: amalfiPortLogistics,
  },
  {
    slug: "pompeii-herculaneum-small-group",
    title: "Small Group Pompeii and Herculaneum",
    seoTitle: "Pompeii and Herculaneum Small Group Tour from Salerno",
    metaDescription:
      "Two Roman cities in one small-group day from Salerno — deep ancient history for passengers with a full port call and moderate walking comfort.",
    category: "Pompeii & Vesuvius",
    tagline: "Pompeii's scale plus Herculaneum's intimate preservation on one ruin day.",
    duration: "Approximately 9 hours",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Pompeii", "Herculaneum (Ercolano)"],
    experienceStyle: "Small-group dual-site archaeology day",
    bestFor: "History-focused travellers with stamina for two ancient cities",
    cruiseSuitability: "Only on a generous full port day",
    suitabilityLabel: "Dual-site archaeology day",
    whyRecommend:
      "Herculaneum adds intimacy and preservation detail that Pompeii alone cannot supply — worthwhile if ancient history is the reason for your Salerno call.",
    planningCaveat:
      "Two large sites on foot is demanding even at moderate grading — heat and uneven paving will shape the day as much as the itinerary.",
    overview:
      "Explore both Pompeii and Herculaneum on a small-group archaeological day from Salerno, comparing the larger city's breadth with the smaller site's remarkable detail.",
    body: [
      "Pompeii shows urban scale frozen in time; Herculaneum reveals wooden elements, mosaics and a more compact streetscape.",
      "Together they answer different questions about Roman life and Vesuvius's eruption — but they also require honest pacing expectations.",
      "Food is not included. Carry water and plan a quick lunch between sites if the schedule allows.",
    ],
    highlights: [
      "Pompeii Archaeological Park visit",
      "Herculaneum archaeological site visit",
      "Small-group guided format",
      "Full-day ancient history focus",
    ],
    included: [
      "Small-group touring as described by the supplier",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Start early mentally even if pickup is fixed — site heat builds quickly",
      "Compare with the private Pompeii and Herculaneum tour for party-only pacing",
      "Not ideal if you struggle with uneven surfaces or long standing periods",
    ],
    faqs: [
      {
        question: "Is this too much for one day?",
        answer:
          "For many passengers, yes — it is intentionally comprehensive. Choose a single-site half-day if you prefer depth over breadth.",
      },
      {
        question: "Is Vesuvius included?",
        answer: "No. This is a two-ruin itinerary. Add Vesuvius only via the dedicated Pompeii and Vesuvius small-group tour.",
      },
    ],
    relatedExcursionSlugs: [
      "private-pompeii-herculaneum",
      "pompeii-half-day",
      "pompeii-vesuvius-small-group",
    ],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/small-pompeii-herculaneum-ancient-cities-salerno/eusosalernpomphercul",
      productId: "eusosalernpomphercul",
    },
    ctaLabel: "Check Partner Availability",
    portLogistics: pompeiiPortLogistics,
  },
  {
    slug: "pompeii-amalfi-coast-highlights",
    title: "Small Group Pompeii Ruins and Amalfi Coast Highlights",
    seoTitle: "Pompeii and Amalfi Coast Small Group Tour from Salerno",
    metaDescription:
      "Combine Pompeii with Amalfi Coast highlights on an eight-and-a-half-hour small-group day — ambitious pairing for a full Salerno port call.",
    category: "Pompeii & Vesuvius",
    tagline: "Morning ruins, afternoon corniche — the classic Campania double hit.",
    duration: "Approximately 8 hours 30 minutes",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Pompeii", "Amalfi Coast"],
    experienceStyle: "Small-group ruin and coastal combo",
    bestFor: "First-time Campania visitors who refuse to choose between history and scenery",
    cruiseSuitability: "Ambitious — needs a full port day and tolerance for tight timing",
    suitabilityLabel: "Ruins plus coast combo",
    whyRecommend:
      "When your Salerno call may be your only Campania day, this pairing delivers the two experiences many passengers cite first.",
    planningCaveat:
      "Combo days trade depth for breadth — neither Pompeii nor the coast receives as much time as a dedicated single-focus tour.",
    overview:
      "Join a small group for Pompeii ruins followed by Amalfi Coast highlights on one regional day from Salerno, balancing archaeology with corniche scenery.",
    body: [
      "This is the itinerary for passengers who ask for 'a bit of everything' and accept that everything means less time in each place.",
      "Small-group format helps, but it cannot remove coastal traffic or ruin-site walking demands.",
      "Meals are not included — snack strategically or accept a late lunch depending on the running order.",
    ],
    highlights: [
      "Pompeii guided visit",
      "Amalfi Coast highlight stops",
      "Small-group shared format",
      "Single-day ruins-and-coast pairing",
    ],
    included: [
      "Small-group touring as described by the supplier",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Compare with the private Pompeii and Amalfi tour if party-only pacing matters",
      "Wear shoes suitable for both ruins and village lanes",
      "Treat all-aboard timing conservatively on combo days",
    ],
    faqs: [
      {
        question: "Which gets more time — Pompeii or the coast?",
        answer:
          "Both appear on the itinerary, but exact balance varies with traffic and group pace. Do not expect full-depth touring at both.",
      },
      {
        question: "Is this better than doing separate days?",
        answer:
          "Only if you have one port call. If you strongly prefer either ruins or coast, dedicated single-focus tours will feel less rushed.",
      },
    ],
    relatedExcursionSlugs: [
      "private-pompeii-amalfi",
      "pompeii-half-day",
      "amalfi-coast-small-group",
    ],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/small-pompeii-ruins-amalfi-coast-highlight-salerno/eusosalernpompamalf",
      productId: "eusosalernpompamalf",
    },
    ctaLabel: "Check Partner Availability",
    portLogistics: pompeiiPortLogistics,
  },
  {
    slug: "pompeii-vesuvius-small-group",
    title: "Small Group Pompeii Ruins and Mount Vesuvius",
    seoTitle: "Pompeii and Mount Vesuvius Small Group Tour from Salerno",
    metaDescription:
      "Pompeii plus Vesuvius crater access on a small-group Salerno day — include weather and walking caveats before you commit.",
    category: "Pompeii & Vesuvius",
    badge: "best-active",
    tagline: "Walk the ruins, then climb toward the volcano that created them.",
    duration: "Approximately 9 hours",
    pace: "Active",
    groupType: "Small",
    activityLevel: "Active",
    foodBeverage: "Not included",
    locations: ["Pompeii", "Mount Vesuvius"],
    experienceStyle: "Small-group archaeology and volcano day",
    bestFor: "Fit travellers who want the eruption story from city to crater",
    cruiseSuitability: "Full port day only, with weather-dependent summit access",
    suitabilityLabel: "Active volcano combo",
    whyRecommend:
      "Linking Pompeii with Vesuvius gives narrative coherence few other Salerno days match — when conditions allow crater access.",
    planningCaveat:
      "Vesuvius paths involve uphill walking on volcanic scree; crater access can close for weather, wind or park restrictions without warning.",
    overview:
      "Visit Pompeii and Mount Vesuvius on a small-group day from Salerno, combining guided ruin exploration with an ascent toward the crater rim when conditions permit.",
    body: [
      "This is the most physically demanding standard shared-group ruin day from Salerno — the volcano segment is not a casual add-on.",
      "Park authorities and weather can limit or alter summit access even when the tour operates; treat crater views as conditional, not guaranteed.",
      "Carry layers: Pompeii can be blazing while higher elevation feels noticeably cooler and windier.",
    ],
    highlights: [
      "Pompeii Archaeological Park visit",
      "Mount Vesuvius ascent when access allows",
      "Small-group active day from Salerno",
      "Clear volcano-and-ruins narrative arc",
    ],
    included: [
      "Small-group touring as described by the supplier",
      "Transport from the Salerno cruise area",
      "Vesuvius park access elements as listed by the supplier",
    ],
    tips: [
      "Wear sturdy shoes with ankle support for Vesuvius paths",
      "Check mobility honestly — this is not suitable for passengers who need step-free touring",
      "Have a backup mindset if crater access is restricted on the day",
    ],
    faqs: [
      {
        question: "How strenuous is the Vesuvius walk?",
        answer:
          "Expect uphill walking on uneven volcanic terrain. If steep paths or altitude affect you, choose a Pompeii-only tour instead.",
      },
      {
        question: "Can Vesuvius be closed?",
        answer:
          "Yes. Weather, wind and park management can restrict access. Suppliers may substitute viewpoints or adjust the volcano segment.",
      },
    ],
    relatedExcursionSlugs: [
      "pompeii-half-day",
      "pompeii-skip-the-line-from-salerno",
      "pompeii-herculaneum-small-group",
    ],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/small-pompeii-ruins-and-mount-vesuvius-salerno/eusosalrnpompvesuvi",
      productId: "eusosalrnpompvesuvi",
    },
    ctaLabel: "Check Partner Availability",
    portLogistics: pompeiiPortLogistics,
  },
  {
    slug: "pompeii-sorrento-coast",
    title: "Small Group Pompeii Ruins and Sorrento Coast",
    seoTitle: "Pompeii and Sorrento Coast Small Group Tour from Salerno",
    metaDescription:
      "Pompeii ruins paired with Sorrento and peninsula scenery on a small-group day from Salerno — ruins plus Gulf of Naples atmosphere.",
    category: "Pompeii & Vesuvius",
    tagline: "Ancient streets in the morning, Sorrentine charm in the afternoon.",
    duration: "Approximately 8 hours 30 minutes",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Pompeii", "Sorrento", "Sorrentine Peninsula"],
    experienceStyle: "Small-group ruins and peninsula combo",
    bestFor: "Travellers who want Pompeii without sacrificing a Sorrento introduction",
    cruiseSuitability: "Full port day with combo-day timing constraints",
    suitabilityLabel: "Ruins plus Sorrento combo",
    whyRecommend:
      "Sorrento softens the day after ruin walking — cafés, clifftop views and a different coastal personality from Amalfi's cliff villages.",
    planningCaveat:
      "As with any combo itinerary, time at Pompeii may feel brisk if the afternoon peninsula segment runs long.",
    overview:
      "Combine a small-group Pompeii visit with Sorrento and Sorrentine Coast highlights on one day from Salerno, mixing archaeology with peninsula scenery.",
    body: [
      "This suits passengers who like the idea of Pompeii but still want a 'holiday town' finish rather than another archaeological add-on.",
      "Sorrento's pacing is gentler than a corniche sprint through multiple Amalfi villages.",
      "Food is not included — Sorrento is a good place to grab gelato or a late lunch if timing allows.",
    ],
    highlights: [
      "Pompeii guided visit",
      "Sorrento and peninsula highlights",
      "Small-group shared format",
      "Balanced ruins-and-town pairing",
    ],
    included: [
      "Small-group touring as described by the supplier",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Compare with A Taste of Sorrento if you prefer food-led peninsula touring without ruins",
      "Wear sun protection for both open ruin sites and exposed Sorrento viewpoints",
      "Confirm live itinerary order on the supplier page",
    ],
    faqs: [
      {
        question: "Is the Amalfi Coast included?",
        answer: "No. This pairs Pompeii with Sorrento. Choose an Amalfi combo if Positano or Amalfi are priorities.",
      },
      {
        question: "Is this easier than Pompeii and Vesuvius?",
        answer:
          "Generally yes on walking grade, though Pompeii itself remains moderate. Vesuvius adds significant uphill effort not present here.",
      },
    ],
    relatedExcursionSlugs: [
      "taste-of-sorrento-from-salerno",
      "private-pompeii-sorrento-positano",
      "pompeii-half-day",
    ],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/small-pompeii-ruins-and-sorrento-coast-salerno/eusosalernsorrepomp",
      productId: "eusosalernsorrepomp",
    },
    ctaLabel: "Check Partner Availability",
    portLogistics: pompeiiPortLogistics,
  },
  {
    slug: "pompeii-half-day",
    title: "Small Group Pompeii Ruins Half Day",
    seoTitle: "Pompeii Half Day Small Group Tour from Salerno",
    metaDescription:
      "A four-and-a-half-hour small-group Pompeii half day from Salerno — our Editor's Choice when you want guided ruins with room left in port.",
    category: "Pompeii & Vesuvius",
    badge: "editors-choice",
    tagline: "Guided Pompeii in a half-day small-group format with sensible return timing.",
    duration: "Approximately 4 hours 30 minutes",
    pace: "Moderate",
    groupType: "Small",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Pompeii Archaeological Park"],
    experienceStyle: "Small-group half-day ruin visit",
    bestFor: "Passengers who want Pompeii with time left for Salerno or a relaxed return",
    cruiseSuitability: "Strong when you want ruins without consuming the entire port day",
    suitabilityLabel: "Half-day ruin focus",
    whyRecommend:
      "Small-group guiding at Pompeii plus a half-day clock is a balanced formula — enough site time without the fatigue of nine-hour archaeology marathons.",
    planningCaveat:
      "Half-day does not mean easy: Pompeii's paving and exposure to sun still require moderate mobility and hydration.",
    overview:
      "Visit Pompeii on a small-group half-day excursion from Salerno, focusing on guided interpretation of the archaeological park within a tighter time frame.",
    body: [
      "This is often the best compromise when everyone in your group wants Pompeii but not an all-day ancient history immersion.",
      "The small-group format typically feels more coherent on the ground than very large coach parties inside the ruins.",
      "You may still have port time afterward for Salerno itself or simply a calmer return buffer before all-aboard.",
    ],
    highlights: [
      "Small-group Pompeii guiding",
      "Half-day duration from Salerno",
      "More return buffer than full-day ruin combos",
      "Editor's Choice for balanced ruin touring",
    ],
    included: [
      "Small-group touring as described by the supplier",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Compare with the skip-the-line compact tour if ticket logistics are your main concern",
      "Bring water and a hat — the site offers limited shade",
      "Check whether admissions are bundled on the live supplier page",
    ],
    faqs: [
      {
        question: "Is this better than the skip-the-line Pompeii tour?",
        answer:
          "Choose this for small-group guiding across a slightly longer half-day. Choose skip-the-line if pre-arranged entry on the shortest clock is the priority.",
      },
      {
        question: "Can I combine this with an independent Salerno afternoon?",
        answer:
          "Often yes, depending on your ship's port window and the excursion's live return time — always confirm against all-aboard.",
      },
    ],
    relatedExcursionSlugs: [
      "pompeii-skip-the-line-from-salerno",
      "pompeii-herculaneum-small-group",
      "walking-tour-historic-salerno",
    ],
    featured: true,
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/small-pompeii-ruins-half-day-salerno/eusopompeihalfsalern",
      productId: "eusopompeihalfsalern",
    },
    ctaLabel: "Check Partner Availability",
    portLogistics: pompeiiPortLogistics,
  },
  {
    slug: "street-food-salerno",
    title: "Street Food of Salerno Foodie Walk",
    seoTitle: "Salerno Street Food Walking Tour from the Cruise Port",
    metaDescription:
      "A three-hour street-food walk through Salerno — our Editor's Choice for a local, food-led port day without leaving the city.",
    category: "Salerno city",
    badge: "editors-choice",
    tagline: "Salerno's edible backstreets on a guided foodie walking tour.",
    duration: "Approximately 3 hours",
    pace: "Relaxed",
    groupType: "Standard",
    activityLevel: "Easy",
    foodBeverage: "Tastings included",
    locations: ["Salerno", "Historic centre", "Local food markets and lanes"],
    experienceStyle: "Guided street-food walking tour",
    bestFor: "Food lovers who want to stay local and eat like residents do",
    cruiseSuitability: "Excellent when you want flavour without regional transfers",
    suitabilityLabel: "Local food-led walk",
    whyRecommend:
      "Salerno's food scene is underrated next to the Amalfi headline acts — this tour makes the city itself the destination.",
    planningCaveat:
      "Tasting formats and stops can change seasonally; notify dietary restrictions early and confirm inclusions on the live page.",
    overview:
      "Discover Salerno through its street-food culture on a guided walking tour that keeps you in the city while sampling local specialities along the way.",
    body: [
      "Not every memorable Salerno day requires a coach. This itinerary treats the port city as a culinary destination rather than a transfer hub.",
      "Expect multiple small tastes rather than a sit-down restaurant meal — arrive hungry but not expecting a formal lunch service.",
      "The easy grading and three-hour frame leave sensible margin on many port calls compared with coast or Paestum days.",
    ],
    highlights: [
      "Guided Salerno street-food walk",
      "Local tastings included per supplier listing",
      "City-centre focus without long transfers",
      "Editor's Choice for food-led port days",
    ],
    included: [
      "Guided foodie walk as described by the supplier",
      "Tasting components per supplier listing",
    ],
    tips: [
      "Mention allergies or dietary needs when booking if possible",
      "Pair with free time on the waterfront if your call is longer",
      "Compare with the Paestum mozzarella day if you want food plus regional travel",
    ],
    faqs: [
      {
        question: "Is this a full lunch?",
        answer:
          "It is structured as street-food tastings rather than a multi-course restaurant meal. Many passengers still find it filling across several stops.",
      },
      {
        question: "Do we leave Salerno city?",
        answer: "No. This is a local walking tour. Regional food days like Paestum and mozzarella require a separate booking.",
      },
    ],
    relatedExcursionSlugs: [
      "walking-tour-historic-salerno",
      "paestum-mozzarella-from-salerno",
      "taste-of-sorrento-from-salerno",
    ],
    featured: true,
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/street-food-of-salerno-foodie-walk/eusostreetfood",
      productId: "eusostreetfood",
    },
    ctaLabel: "Check Partner Availability",
    portLogistics: salernoCityLogistics,
  },
  {
    slug: "private-naples-caserta",
    title: "Private Naples and Caserta",
    seoTitle: "Private Naples and Caserta Tour from Salerno",
    metaDescription:
      "A private eight-hour day combining Naples highlights with the Royal Palace of Caserta — ambitious inland touring from Salerno cruise port.",
    category: "Private touring",
    badge: "best-private",
    tagline: "Your vehicle, your pace — Naples energy and Caserta's royal scale.",
    duration: "Approximately 8 hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Naples", "Caserta", "Royal Palace of Caserta"],
    experienceStyle: "Private coach day inland",
    bestFor: "Families and groups who want Naples plus Caserta without shared-group constraints",
    cruiseSuitability: "Full port day with significant driving from Salerno",
    suitabilityLabel: "Private inland day",
    whyRecommend:
      "Private format helps when you want to adjust time between chaotic Naples and the vast Caserta palace gardens.",
    planningCaveat:
      "Naples traffic and palace grounds are both time-hungry — two major stops in eight hours still requires prioritisation.",
    overview:
      "Explore Naples and the Royal Palace of Caserta on a private day from Salerno, with transport and pacing limited to your party.",
    body: [
      "This is inland Campania on a grand scale — urban Naples and baroque royal ambition at Caserta, linked by private vehicle from the port.",
      "Private touring lets you lean toward city street life or palace gardens depending on group interest, within the day's limits.",
      "Meals are not included — your driver-guide can suggest stops, but confirm what is feasible within your schedule.",
    ],
    highlights: [
      "Private vehicle and party-only pacing",
      "Naples highlights visit",
      "Royal Palace of Caserta visit",
      "Eight-hour inland itinerary",
    ],
    included: [
      "Private touring as described by the supplier",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Decide in advance whether Naples or Caserta is the priority if time tightens",
      "Confirm palace closure days on the live supplier page",
      "Share terminal pickup instructions clearly with the operator",
    ],
    faqs: [
      {
        question: "Is Pompeii included?",
        answer: "No. Choose a private Pompeii and Naples tour if ruins are essential alongside the city.",
      },
      {
        question: "How many passengers can share the private vehicle?",
        answer: "Confirm party size limits and vehicle type on the live supplier page before booking.",
      },
    ],
    relatedExcursionSlugs: ["private-pompeii-naples", "private-pompeii-herculaneum", "pompeii-half-day"],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/private-naples-and-caserta/eusonapcaspvt",
      productId: "eusonapcaspvt",
    },
    ctaLabel: "View Tour Details",
    portLogistics: privatePortLogistics,
  },
  {
    slug: "private-pompeii-amalfi",
    title: "Private Pompeii & Amalfi Coast",
    seoTitle: "Private Pompeii and Amalfi Coast Tour from Salerno",
    metaDescription:
      "Private eight-hour pairing of Pompeii ruins with Amalfi Coast highlights from Salerno — tailored pacing for your party.",
    category: "Private touring",
    badge: "best-private",
    tagline: "Ruins in the morning, corniche scenery on your own schedule.",
    duration: "Approximately 8 hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Pompeii", "Amalfi Coast"],
    experienceStyle: "Private ruins and coastal combo",
    bestFor: "Groups who want the classic combo without sharing a small-group coach",
    cruiseSuitability: "Ambitious full port day with flexible but finite timing",
    suitabilityLabel: "Private combo day",
    whyRecommend:
      "Private vehicles reduce friction at Pompeii parking and coastal stops — useful when your party includes mixed mobility or photo priorities.",
    planningCaveat:
      "Even private touring cannot eliminate corniche traffic — combo depth still has limits in eight hours.",
    overview:
      "Combine Pompeii with Amalfi Coast highlights on a private eight-hour day from Salerno, with itinerary flexibility limited to your party.",
    body: [
      "This mirrors the popular small-group combo but trades shared pacing for private decision-making on stops and photo time.",
      "Ideal when your group includes passengers who want more rest time at Pompeii or an extra coastal viewpoint without negotiating group consensus.",
      "Food is not included — your guide can advise on lunch stops depending on the running order.",
    ],
    highlights: [
      "Private party-only vehicle",
      "Pompeii guided visit",
      "Amalfi Coast highlight routing",
      "Flexible stop pacing within the day",
    ],
    included: [
      "Private touring as described by the supplier",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Tell the operator your coastal priority villages before sailing day",
      "Compare with the small-group combo if cost matters more than privacy",
      "Keep all-aboard conservative despite private flexibility",
    ],
    faqs: [
      {
        question: "Can we choose Positano over Amalfi?",
        answer:
          "Private tours allow more tailoring within time limits. Confirm desired villages with the supplier when booking.",
      },
      {
        question: "Is this better than separate Pompeii and coast days?",
        answer: "Only if you have a single port call. Dedicated single-focus days always allow more depth.",
      },
    ],
    relatedExcursionSlugs: [
      "pompeii-amalfi-coast-highlights",
      "private-positano-amalfi-ravello",
      "pompeii-half-day",
    ],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/private-pompeii-amalfi-coast/eusopomamapvt",
      productId: "eusopomamapvt",
    },
    ctaLabel: "View Tour Details",
    portLogistics: privatePortLogistics,
  },
  {
    slug: "private-pompeii-herculaneum",
    title: "Private Pompeii & Herculaneum",
    seoTitle: "Private Pompeii and Herculaneum Tour from Salerno",
    metaDescription:
      "Private dual-site archaeology from Salerno — Pompeii and Herculaneum at your party's pace on an eight-hour ruin day.",
    category: "Private touring",
    badge: "best-private",
    tagline: "Two Roman cities with private pacing and no shared-group compromises.",
    duration: "Approximately 8 hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Pompeii", "Herculaneum (Ercolano)"],
    experienceStyle: "Private dual-site archaeology day",
    bestFor: "History-focused families who want both sites with adjustable pacing",
    cruiseSuitability: "Full port day — still demanding despite private format",
    suitabilityLabel: "Private archaeology day",
    whyRecommend:
      "Private guiding helps when one passenger needs slower ruin pacing or more rest between sites without holding a shared group.",
    planningCaveat:
      "Two major archaeological parks remain physically demanding — private transport does not reduce on-foot requirements inside the sites.",
    overview:
      "Visit Pompeii and Herculaneum on a private day from Salerno, with transport and guiding limited to your party across both ancient cities.",
    body: [
      "Archaeology enthusiasts often want both cities; private format makes it easier to allocate time based on interest rather than a fixed coach schedule.",
      "Herculaneum's compact scale can feel less overwhelming after Pompeii's sprawl — your guide can sequence the day accordingly.",
      "Carry water and plan a simple lunch between sites — meals are not included.",
    ],
    highlights: [
      "Private party-only touring",
      "Pompeii and Herculaneum visits",
      "Adjustable pacing between two sites",
      "Eight-hour dedicated ruin focus",
    ],
    included: [
      "Private touring as described by the supplier",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Be honest about walking stamina before booking two sites",
      "Compare with the small-group dual-site tour if budget is a factor",
      "Confirm admission arrangements on the live page",
    ],
    faqs: [
      {
        question: "Is eight hours enough for both sites?",
        answer:
          "It is workable with focus but not leisurely. Private pacing helps, yet both sites still require substantial walking.",
      },
      {
        question: "Can we add Vesuvius?",
        answer:
          "Not on this product. Vesuvius requires a dedicated volcano combo day — weather and walking demands make triple stacking unrealistic.",
      },
    ],
    relatedExcursionSlugs: [
      "pompeii-herculaneum-small-group",
      "pompeii-half-day",
      "private-pompeii-naples",
    ],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/private-pompei-herculaneum/eusopomherpvt",
      productId: "eusopomherpvt",
    },
    ctaLabel: "View Tour Details",
    portLogistics: privatePortLogistics,
  },
  {
    slug: "private-pompeii-naples",
    title: "Private Pompeii & Naples",
    seoTitle: "Private Pompeii and Naples Tour from Salerno",
    metaDescription:
      "Private ruins and city touring — Pompeii plus Naples highlights on an eight-hour day from Salerno cruise port.",
    category: "Private touring",
    badge: "best-private",
    tagline: "Ancient catastrophe and living city culture in one private day.",
    duration: "Approximately 8 hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Pompeii", "Naples"],
    experienceStyle: "Private ruins and city combo",
    bestFor: "Travellers who want archaeology plus urban Naples without a shared group",
    cruiseSuitability: "Full port day with city traffic variables",
    suitabilityLabel: "Private ruins and city",
    whyRecommend:
      "Pairing Pompeii with Naples gives context — the modern city sits in the shadow of the same volcanic story you explore at the ruins.",
    planningCaveat:
      "Naples traffic and parking can compress city time after Pompeii — prioritise neighbourhoods or sights in advance.",
    overview:
      "Combine Pompeii with Naples highlights on a private eight-hour excursion from Salerno, balancing archaeological visiting with city exploration.",
    body: [
      "This suits curious travellers who want both frozen Roman streets and the energy of contemporary Naples.",
      "Private format helps when your group wants a specific city focus — waterfront, historic centre or a single museum — within realistic limits.",
      "Food is not included, though Naples is one of Italy's great eating cities if timing allows a quick pizza or espresso stop.",
    ],
    highlights: [
      "Private party-only vehicle",
      "Pompeii Archaeological Park visit",
      "Naples city highlights",
      "Flexible city focus within the day",
    ],
    included: [
      "Private touring as described by the supplier",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Tell the supplier your Naples priorities when booking",
      "Compare with private Naples and Caserta if palace architecture matters more than city streets",
      "Guard valuables in busy urban areas as you would in any major city",
    ],
    faqs: [
      {
        question: "Which Naples sights are included?",
        answer:
          "Specific stops vary by operator and traffic. Confirm expected highlights on the live supplier page before booking.",
      },
      {
        question: "Is Herculaneum included?",
        answer: "No. Choose the private Pompeii and Herculaneum tour for a second ruin site.",
      },
    ],
    relatedExcursionSlugs: [
      "private-naples-caserta",
      "pompeii-half-day",
      "private-pompeii-herculaneum",
    ],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/private-pompeii-and-naples/eusopomnapvt",
      productId: "eusopomnapvt",
    },
    ctaLabel: "View Tour Details",
    portLogistics: privatePortLogistics,
  },
  {
    slug: "private-pompeii-sorrento-positano",
    title: "Private Pompeii & Sorrento with Positano Photo Stop",
    seoTitle: "Private Pompeii, Sorrento and Positano from Salerno",
    metaDescription:
      "Private eight-hour day with Pompeii, Sorrento and a Positano photo stop from Salerno — tailored combo touring for your party.",
    category: "Private touring",
    badge: "best-private",
    tagline: "Ruins, peninsula charm and Positano's cliff-side glamour on private time.",
    duration: "Approximately 8 hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Pompeii", "Sorrento", "Positano"],
    experienceStyle: "Private triple-stop combo day",
    bestFor: "Groups wanting Pompeii plus two peninsula highlights in one private itinerary",
    cruiseSuitability: "Ambitious — three distinct stops in eight hours",
    suitabilityLabel: "Private triple combo",
    whyRecommend:
      "Positano photo stops deliver the postcard without committing to a full Amalfi corniche loop — private pacing makes the triple feasible for some parties.",
    planningCaveat:
      "Three stops plus Salerno transfers is tight; Positano may be a photo stop rather than extended free time.",
    overview:
      "Combine Pompeii with Sorrento and a Positano photo stop on a private day from Salerno, balancing ruins with peninsula scenery.",
    body: [
      "This itinerary tries to satisfy passengers who ask for ruins, Sorrento cafés and at least one Amalfi-coast hero shot.",
      "Private format helps sequence the day, but coastal traffic still governs what is realistic.",
      "Treat Positano as a highlighted pause unless the supplier confirms longer free time on your sailing date.",
    ],
    highlights: [
      "Private party-only touring",
      "Pompeii visit",
      "Sorrento town time",
      "Positano photo stop",
    ],
    included: [
      "Private touring as described by the supplier",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Confirm how long Positano stops typically last",
      "Compare with the small-group Pompeii and Sorrento tour if Positano is optional",
      "Wear layers — coastal viewpoints can be breezy",
    ],
    faqs: [
      {
        question: "Is Positano a full visit?",
        answer:
          "Usually it is positioned as a photo and viewpoint stop rather than extended shopping time. Confirm on the live page.",
      },
      {
        question: "Can we skip Sorrento for more Positano time?",
        answer:
          "Private tours allow some tailoring — discuss preferences with the supplier when booking, within time limits.",
      },
    ],
    relatedExcursionSlugs: [
      "pompeii-sorrento-coast",
      "taste-of-sorrento-from-salerno",
      "private-pompeii-amalfi",
    ],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/pompeii-sorrento-with-positano-photo-stop/eusoposopopvt2",
      productId: "eusoposopopvt2",
    },
    ctaLabel: "View Tour Details",
    portLogistics: privatePortLogistics,
  },
  {
    slug: "private-positano-amalfi-ravello",
    title: "Private Positano, Amalfi and Ravello",
    seoTitle: "Private Positano, Amalfi and Ravello from Salerno",
    metaDescription:
      "Private Amalfi Coast touring with Positano, Amalfi and Ravello from Salerno — eight hours tailored to your party without shared-group stops.",
    category: "Private touring",
    badge: "best-private",
    tagline: "The coast's headline trio by private vehicle from Salerno.",
    duration: "Approximately 8 hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Positano", "Amalfi", "Ravello", "Amalfi Coast"],
    experienceStyle: "Private coastal village day",
    bestFor: "Coast-first travellers who want three villages with party-only pacing",
    cruiseSuitability: "Full port day — coastal traffic still applies",
    suitabilityLabel: "Private coastal trio",
    whyRecommend:
      "When the coast is non-negotiable and shared groups feel too rigid, this private routing covers the three names most passengers mention first.",
    planningCaveat:
      "Three villages plus Salerno transfers is demanding in eight hours — expect photo and walk time rather than leisurely meals at each stop.",
    overview:
      "Tour Positano, Amalfi and Ravello on a private eight-hour Amalfi Coast day from Salerno, with pacing limited to your party.",
    body: [
      "This is pure coastal immersion without ruin detours — ideal when your group has already seen Pompeii elsewhere or simply prefers scenery today.",
      "Private vehicles help with drop-off points and photo stops, though summer corniche congestion affects everyone.",
      "Food is not included — choose one village for lunch rather than expecting sit-down time everywhere.",
    ],
    highlights: [
      "Private party-only coastal touring",
      "Positano visit or stop",
      "Amalfi historic centre time",
      "Ravello terraces and views",
    ],
    included: [
      "Private touring as described by the supplier",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Rank your three villages before booking so the driver knows where to protect time",
      "Compare with the small-group Ravello and Amalfi tour if budget matters",
      "Bring sun protection and comfortable walking shoes",
    ],
    faqs: [
      {
        question: "Is Pompeii included?",
        answer: "No. This is a coast-only private day. Pair with a separate Pompeii tour if you need ruins.",
      },
      {
        question: "Can we adjust the village order?",
        answer:
          "Private touring allows more flexibility. Confirm preferences with the supplier, knowing traffic may override ideal sequencing.",
      },
    ],
    relatedExcursionSlugs: [
      "ravello-amalfi-small-group",
      "amalfi-coast-small-group",
      "private-pompeii-amalfi",
    ],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/private-positano-amalfi-and-ravello-from-salerno/eusopvtpositano",
      productId: "eusopvtpositano",
    },
    ctaLabel: "View Tour Details",
    portLogistics: privatePortLogistics,
  },
  {
    slug: "private-salerno-paestum",
    title: "Private Salerno & Paestum",
    seoTitle: "Private Salerno and Paestum Tour from the Cruise Port",
    metaDescription:
      "Private eight-hour day combining Salerno city time with Paestum's Greek temples — tailored southbound touring from the cruise port.",
    category: "Private touring",
    badge: "best-private",
    tagline: "Your port city and ancient temples south of Salerno on private time.",
    duration: "Approximately 8 hours",
    pace: "Moderate",
    groupType: "Private",
    activityLevel: "Moderate",
    foodBeverage: "Not included",
    locations: ["Salerno", "Paestum"],
    experienceStyle: "Private city and archaeology day",
    bestFor: "Groups wanting both Salerno context and Paestum without a shared coach",
    cruiseSuitability: "Full port day with southbound driving",
    suitabilityLabel: "Private city and temples",
    whyRecommend:
      "Starting with Salerno makes the port feel like part of the story rather than a parking lot, then Paestum delivers a clear change of scene.",
    planningCaveat:
      "Paestum's distance from the port means city time can shrink if traffic runs long — tell the supplier your priority split in advance.",
    overview:
      "Combine Salerno city visiting with Paestum's Greek temples on a private eight-hour day, with pacing and stops limited to your party.",
    body: [
      "This is a thoughtful alternative to racing straight past Salerno for regional highlights — the city deserves more than a drive-by.",
      "Paestum's open landscape and temple silhouettes contrast sharply with Salerno's urban lanes, giving the day two distinct chapters.",
      "Food is not included — consider a countryside lunch stop near Paestum if timing allows.",
    ],
    highlights: [
      "Private party-only touring",
      "Salerno city visiting",
      "Paestum temple complex",
      "Flexible pacing between city and site",
    ],
    included: [
      "Private touring as described by the supplier",
      "Transport from the Salerno cruise area",
    ],
    tips: [
      "Compare with the Paestum and mozzarella shared tour if food tasting is important",
      "Confirm temple admission details on the live page",
      "Build return buffer before all-aboard on southbound days",
    ],
    faqs: [
      {
        question: "Does this include a mozzarella tasting?",
        answer:
          "No. Choose the Paestum archaeological and mozzarella tour for a shared-group day with tasting, or discuss add-ons with the private operator.",
      },
      {
        question: "How much time is spent in Salerno versus Paestum?",
        answer:
          "Private tours allow adjustment, but Paestum's distance usually means a balanced rather than equal split. State your preference when booking.",
      },
    ],
    relatedExcursionSlugs: [
      "paestum-mozzarella-from-salerno",
      "walking-tour-historic-salerno",
      "street-food-salerno",
    ],
    supplier: {
      kind: "shore-excursions-group",
      name: "Shore Excursions Group",
      url: "https://www.shoreexcursionsgroup.com/tour/private-salerno-paestum/eusosalpaepvt",
      productId: "eusosalpaepvt",
    },
    ctaLabel: "View Tour Details",
    portLogistics: privatePortLogistics,
  },
];

export function getExcursionBySlug(slug: string) {
  return excursions.find((e) => e.slug === slug);
}

export function getAllExcursionSlugs() {
  return excursions.map((e) => e.slug);
}

export function getFeaturedExcursions() {
  return excursions.filter((e) => e.featured);
}

export function getExcursionsByBadge(badge: EditorialBadge) {
  return excursions.filter((e) => e.badge === badge);
}

export function getExcursionsByCategory(category: string) {
  return excursions.filter((e) => e.category === category);
}

export function getPartnerExcursions() {
  return excursions.filter((e) => e.supplier?.kind === "shore-excursions-group");
}
