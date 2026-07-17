import type { GuideCategory, GuidePage } from "./types";

/**
 * Salerno planning, destination and editorial guides.
 *
 * Flat URLs: every guide uses hubPath "/" so links resolve at /<slug>.
 * Editorial integrity: no invented prices, admissions, availability or
 * guarantees. Vesuvius guides must carry mobility and access cautions.
 */

export const guides: GuidePage[] = [
  {
    slug: "salerno-cruise-port",
    category: "planning",
    title: "Salerno Cruise Port",
    seoTitle: "Salerno Cruise Port Guide for Cruise Passengers",
    metaDescription:
      "How Salerno cruise port works for a Campanian day ashore — where ships berth, walking into the city, and access to Pompeii, Vesuvius and the Amalfi Coast.",
    tagline: "Your first orientation to one of Italy's most versatile cruise gateways.",
    overview:
      "Salerno is a genuine dual-purpose cruise call: a walkable Campanian city in its own right, and a practical starting point for Pompeii, Vesuvius, the Amalfi Coast and Paestum. Understanding how the port works before you sail turns a busy arrival into a well-judged day.",
    body: [
      "Cruise ships berth at more than one location in Salerno. City-side berths at Molo Manfredi place you close to the historic centre, while commercial berths farther from the core may require shuttles or taxis. Unlike a single-terminal port, Salerno demands that you confirm your berth on the day.",
      "The port's advantage is geographic reach. Pompeii and Vesuvius lie to the north-west; the Amalfi Coast unfolds to the west along cliff roads and seasonal ferries; Paestum and mozzarella country sit to the south. That range is why Salerno is marketed as a gateway — but gateway status is also the planning trap.",
      "It is tempting to attempt Pompeii, Positano, Amalfi and Salerno city in one call. The roads, site time and return margin do not support that comfortably. Choose one anchor — ruins, volcano, coast, Paestum or city — and let the rest be a bonus.",
      "Whatever you choose, plan backwards from all-aboard rather than the published departure. Amalfi Coast traffic, Vesuvius walking time and berth variation mean margins matter more here than the map suggests.",
    ],
    highlights: [
      "Multiple berth locations — confirm yours on arrival",
      "City centre often walkable from Molo Manfredi berths",
      "Gateway to Pompeii, Vesuvius, Amalfi Coast and Paestum",
      "Lower-risk city day when hours are limited",
    ],
    tips: [
      "Check your ship's daily programme for berth and shuttle information",
      "Keep the last hour ashore conservative on first visits",
      "Carry water and sun protection — the waterfront offers limited shade in summer",
    ],
    faqs: [
      {
        question: "Do all ships dock in the same place in Salerno?",
        answer:
          "No. Berths vary between city-side Molo Manfredi and commercial areas depending on ship size and port capacity.",
      },
      {
        question: "Can I walk into Salerno from the ship?",
        answer:
          "Often yes from city-side berths. From commercial berths farther east, walking may be impractical — confirm locally.",
      },
      {
        question: "What is the main planning mistake from Salerno?",
        answer:
          "Overloading the day with Pompeii plus multiple Amalfi towns without accepting summer traffic and return risk.",
      },
    ],
    recommendations: [
      {
        category: "editors-choice",
        title: "Signature Pompeii and Amalfi Coast",
        description: "Our featured balanced combination for long calls.",
        href: "/signature-tours/pompeii-amalfi-coast/",
        signature: true,
      },
    ],
    relatedSlugs: [
      "salerno-cruise-port-guide",
      "can-you-walk-from-salerno-cruise-port",
      "getting-around-salerno-from-the-cruise-port",
    ],
    imageKey: "cruise-port",
    hubPath: "/",
  },
  {
    slug: "salerno-cruise-port-guide",
    category: "planning",
    title: "Salerno Cruise Port Guide",
    seoTitle: "Salerno Cruise Port Guide — Berths, Transfers and Timing",
    metaDescription:
      "Detailed Salerno cruise port guide: Molo Manfredi berths, commercial terminals, taxis, trains, ferries, excursion pickups and return-to-ship planning.",
    tagline: "Practical port knowledge beyond the brochure map.",
    overview:
      "This guide expands the essentials: where ships actually tie up, how passengers reach the city and regional sights, and how to build a return plan that respects Salerno's traffic reality.",
    body: [
      "Salerno's cruise infrastructure spans city-side waterfront berths and commercial port areas. Molo Manfredi berths reward passengers with relatively short walks toward the Cathedral of St Matthew and Via dei Mercanti. Commercial berths used by larger vessels or on busy days place more distance between you and the historic core.",
      "Port shuttles, when offered, are ship-specific rather than a universal public service. Taxis generally cluster near cruise operations, but fares should be agreed before departure for independent trips. Train connections from Salerno station can reach Pompeii and Herculaneum for confident independent travellers who accept timetable risk.",
      "Ferries along the Amalfi Coast operate seasonally from Salerno and can reduce road exposure for some passengers. Timetables do not automatically align with every cruise schedule — treat public ferries as conditional, not guaranteed.",
      "Excursion pickups typically occur near the terminal or at a confirmed meeting point. Verify location and time the evening before, especially when berthing away from the city centre.",
    ],
    highlights: [
      "Molo Manfredi vs commercial berth differences",
      "Taxi, train and ferry context for independent travellers",
      "Excursion pickup verification",
      "Return buffers for regional days",
    ],
    tips: [
      "Photograph your berth location and terminal exit route on arrival",
      "For train independent days, identify the return train before you leave the site",
      "Do not rely on map-app driving times for Amalfi Coast returns in July and August",
    ],
    faqs: [
      {
        question: "Is there a single Salerno cruise terminal building?",
        answer:
          "Operations are spread across waterfront and commercial areas. Follow your ship's signage and daily programme rather than assuming one fixed terminal hall.",
      },
      {
        question: "Can I use the train to Pompeii?",
        answer:
          "Some independent travellers do, changing via Naples or using regional services — but missed connections and all-aboard risk are entirely your responsibility.",
      },
      {
        question: "Where do shore excursions pick up?",
        answer:
          "Usually near the cruise berth or a confirmed nearby point. Verify with your operator for your specific sailing.",
      },
    ],
    relatedSlugs: ["salerno-cruise-port", "salerno-cruise-terminal", "port-guide"],
    imageKey: "cruise-port",
    hubPath: "/",
  },
  {
    slug: "salerno-cruise-schedule",
    category: "planning",
    title: "Salerno Cruise Schedule",
    seoTitle: "Salerno Cruise Schedule — Ship Arrivals and Port Days",
    metaDescription:
      "How to use Salerno cruise schedule information when planning shore excursions — port times, multi-ship days and excursion length decisions.",
    tagline: "Your ship's hours ashore shape every excursion decision.",
    overview:
      "Published cruise schedules are the starting point for any Salerno day plan. Arrival time, departure time and all-aboard — not the marketing itinerary — determine whether Pompeii, Vesuvius or the Amalfi Coast is realistic.",
    body: [
      "Salerno receives a mix of mainstream cruise lines across the season. Schedules vary from short daylight calls to long Mediterranean days. Always read your specific sailing's arrival and all-aboard times rather than assuming a generic eight-hour window.",
      "Multi-ship days increase port activity and can affect taxi availability, traffic around the waterfront and congestion on Amalfi Coast roads. They do not change your personal all-aboard deadline.",
      "Long regional excursions — especially Pompeii combined with the coast or Vesuvius — should only be booked when your usable hours comfortably exceed the operator's stated duration plus a return buffer. A schedule that looks generous on paper can shrink once immigration, walking to the pickup point and traffic are accounted for.",
      "Use schedule information to choose between Signature Tours, partner excursions and independent city days before you sail, so you are not making high-stakes decisions at the gangway.",
    ],
    highlights: [
      "Arrival, departure and all-aboard are different times",
      "Multi-ship days increase local congestion",
      "Long excursions need long calls",
      "Plan before embarkation when possible",
    ],
    tips: [
      "Set a phone reminder for all-aboard minus 90 minutes on excursion days",
      "If your arrival is late, confirm whether your booked tour can still run",
      "Short calls should default to Salerno city or a half-day scope",
    ],
    faqs: [
      {
        question: "Where can I find my Salerno port times?",
        answer:
          "Your cruise line's app, daily programme and guest services are authoritative. Third-party schedule pages are indicative only.",
      },
      {
        question: "Does a late arrival rule out Pompeii?",
        answer:
          "It may rule out combined regional days. A focused half-day Pompeii or city visit may still work — confirm with the operator.",
      },
      {
        question: "Do schedules change?",
        answer:
          "Yes. Weather, port authority decisions and operational requirements can adjust times. Check daily while onboard.",
      },
    ],
    relatedSlugs: [
      "salerno-cruise-port",
      "best-salerno-shore-excursions",
      "pompeii-and-amalfi-coast-in-one-day",
    ],
    imageKey: "harbour",
    hubPath: "/",
  },
  {
    slug: "salerno-cruise-terminal",
    category: "planning",
    title: "Salerno Cruise Terminal",
    seoTitle: "Salerno Cruise Terminal — What to Expect on Arrival",
    metaDescription:
      "Salerno cruise terminal and berth overview: security, walking routes, shuttles, taxis and what changes between city-side and commercial berths.",
    tagline: "Terminal reality varies — know what to expect before you disembark.",
    overview:
      "Salerno does not always present as a single familiar terminal hall. Depending on your berth, you may step almost directly into the city or arrive at a commercial area requiring onward transport.",
    body: [
      "Security and passport control follow standard cruise-port procedures. What changes is the walk from the gangway to Salerno's streets — sometimes minutes, sometimes a shuttle ride.",
      "City-side berths at Molo Manfredi typically offer the most straightforward independent access to the historic centre. Signage, taxi ranks and excursion meeting points cluster near cruise operations.",
      "Commercial berths feel more industrial and farther from the cathedral quarter. Ships may provide port shuttles to a drop-off nearer the centre, but this is not universal — read your daily programme.",
      "Facilities at the immediate berth area may be limited compared with the city centre. Toilets, cash, water and sun protection are worth addressing early if you face a long walk or wait for a pickup.",
    ],
    highlights: [
      "Berth type determines your first walking experience",
      "Shuttle availability is ship- and day-specific",
      "Meeting points for tours vary by operator",
      "City services are in the historic centre, not always at berth",
    ],
    tips: [
      "Ask guest services where taxis and tour pickups actually form for your berth",
      "Carry your all-aboard time written down — not only in your phone",
      "If returning independently, confirm the walk or shuttle back to the ship early",
    ],
    faqs: [
      {
        question: "Is Salerno cruise terminal walkable to town?",
        answer:
          "From many Molo Manfredi berths, yes. From commercial berths, often not without a shuttle or taxi.",
      },
      {
        question: "Are luggage facilities available on port days?",
        answer:
          "Same-day port calls rarely involve luggage, but post-cruise transfers differ. Confirm with your line if disembarking.",
      },
      {
        question: "Is Wi‑Fi available at the terminal?",
        answer:
          "Do not rely on terminal Wi‑Fi. Download maps and confirmation details before disembarking.",
      },
    ],
    relatedSlugs: ["salerno-cruise-port-guide", "can-you-walk-from-salerno-cruise-port"],
    imageKey: "cruise-port",
    hubPath: "/",
  },
  {
    slug: "getting-around-salerno-from-the-cruise-port",
    category: "planning",
    title: "Getting Around Salerno from the Cruise Port",
    seoTitle: "Getting Around Salerno from the Cruise Port — Transport Guide",
    metaDescription:
      "How to get around Salerno from the cruise port: walking, taxis, trains, ferries and organised excursions to Pompeii and the Amalfi Coast.",
    tagline: "Match transport to your berth, hours and risk tolerance.",
    overview:
      "Salerno's transport story depends on where you start — city berth or commercial berth — and how far beyond the city you intend to travel.",
    body: [
      "On foot, city-side berths connect efficiently to the historic centre, waterfront promenade and main shopping streets. This is the lowest-risk independent option when your call is short or you prefer urban exploring.",
      "Taxis bridge the gap when berths are less central or when you need a one-way transfer to a meeting point. Agree destinations and approximate fares before departing; keep the return buffer in mind on regional days.",
      "Trains from Salerno station link to the wider Campania network. Independent Pompeii or Herculaneum days are possible for confident travellers who understand Italian rail timing and accept missed-connection risk.",
      "Ferries and organised excursions handle Amalfi Coast access differently — ferries may suit some schedules; road excursions remain the default. Paestum and Vesuvius routes are almost always road-based on cruise days.",
    ],
    highlights: [
      "Walking suits city berths and city-focused days",
      "Taxis for less central berths and one-off transfers",
      "Trains possible for independent archaeology days",
      "Regional sights generally need planned road transport",
    ],
    tips: [
      "Identify Salerno station on a map before choosing a rail day",
      "Save your operator's phone contact for excursion days",
      "Ferry timetables change seasonally — verify on the day",
    ],
    faqs: [
      {
        question: "Do I need a car in Salerno?",
        answer:
          "Not for a city day from a central berth. For Pompeii, Vesuvius, the coast or Paestum, you need organised transport or a very confident independent plan.",
      },
      {
        question: "Are Uber or ride apps available?",
        answer:
          "Availability varies. Taxis at the port are the reliable fallback — confirm locally.",
      },
      {
        question: "Can ferries replace road excursions?",
        answer:
          "Sometimes for coast-focused days, but not for Pompeii or Vesuvius. Schedule alignment with your ship is the limiting factor.",
      },
    ],
    relatedSlugs: [
      "can-you-walk-from-salerno-cruise-port",
      "amalfi-coast-from-salerno-cruise-port",
      "pompeii-from-salerno-cruise-port",
    ],
    imageKey: "walking",
    hubPath: "/",
  },
  {
    slug: "can-you-walk-from-salerno-cruise-port",
    category: "planning",
    title: "Can You Walk from Salerno Cruise Port?",
    seoTitle: "Can You Walk from Salerno Cruise Port into the City?",
    metaDescription:
      "Honest guide to walking from Salerno cruise port into the historic centre — berth differences, distances, mobility and when you need a taxi.",
    tagline: "Sometimes yes — but not from every berth.",
    overview:
      "Walking into Salerno is one of the port's strengths when your ship ties up on the city side. From other berths, the same question has a different answer.",
    body: [
      "From Molo Manfredi and nearby city berths, many passengers reach the Cathedral of St Matthew, Via dei Mercanti and the lungomare on foot within a reasonable time. The walk is mostly urban and largely level, though summer heat and cobbles still matter.",
      "From commercial berths east of the centre, the walk is longer and less appealing — often through port-industrial surroundings before you reach neighbourhood streets. In those cases, a ship shuttle or taxi may be the better start to your day.",
      "Walking to Pompeii, Vesuvius or the Amalfi Coast is not realistic. Independent walkers should scope a city day, not a regional one.",
      "Mobility-limited passengers should confirm berth-to-centre distance with the ship before assuming step-free access. Salerno's historic core includes uneven surfaces even when the berth walk is manageable.",
    ],
    highlights: [
      "City berths: often walkable to the historic core",
      "Commercial berths: frequently need shuttle or taxi",
      "Regional sights require transport",
      "Heat and cobbles still apply in summer",
    ],
    tips: [
      "Confirm your berth on the morning of arrival",
      "Wear comfortable shoes for cobbled historic streets",
      "Plan a café stop mid-walk in hot weather",
    ],
    faqs: [
      {
        question: "How long is the walk to Salerno cathedral?",
        answer:
          "From city-side berths, often around 15–25 minutes depending on exact position and pace. From commercial berths, significantly longer.",
      },
      {
        question: "Is the walk signposted?",
        answer:
          "Port and city signage varies. Use a downloaded map and ask port staff if unsure.",
      },
      {
        question: "Can I walk back to the ship late in the day?",
        answer:
          "Yes from city berths if you know the route — aim to arrive 60–90 minutes before all-aboard.",
      },
    ],
    relatedSlugs: ["salerno-cruise-port", "salerno-food-guide", "getting-around-salerno-from-the-cruise-port"],
    imageKey: "walking",
    hubPath: "/",
  },
  {
    slug: "pompeii-from-salerno-cruise-port",
    category: "destination",
    title: "Pompeii from Salerno Cruise Port",
    seoTitle: "Pompeii from Salerno Cruise Port — Shore Excursion Guide",
    metaDescription:
      "How to visit Pompeii from Salerno cruise port: travel time, guided vs independent visits, walking, tickets, combinations with Vesuvius and the Amalfi Coast.",
    tagline: "The buried Roman city — plan site time, not just transfer time.",
    overview:
      "Pompeii is the headline archaeological day from Salerno: a walk through Roman streets preserved by Vesuvius. It rewards passengers who allow genuine time on uneven ground rather than treating the site as a photo stop.",
    body: [
      "Pompeii lies north-west of Salerno beyond the Bay of Naples, involving meaningful road or rail time. Organised excursions handle collection, site time and cruise-aware returns; independent travellers must manage tickets, guides and timetables themselves.",
      "Inside the site, surfaces are uneven and exposure is real in summer. Comfortable footwear, water and sun protection are essential. A licensed guide adds context that signage alone cannot replace — but guides and entrance fees are not automatic inclusions unless confirmed.",
      "Half-day Pompeii visits suit medium port calls when the day is scoped honestly. Full days can pair Pompeii with Vesuvius or — on long calls — a carefully chosen Amalfi Coast town through our Signature Pompeii and Amalfi Coast tour.",
      "Trying to rush Pompeii before squeezing in Positano, Amalfi and Ravello usually weakens the experience. If Pompeii is your anchor, protect at least two hours on site for a meaningful visit.",
    ],
    highlights: [
      "Regional day — not walkable from port",
      "Uneven archaeological walking throughout",
      "Guide and ticket arrangements vary by product",
      "Pairs with Vesuvius or coast on long calls",
    ],
    tips: [
      "Confirm whether your tour includes Pompeii entrance and a licensed guide",
      "Prioritise morning site time before heat peaks",
      "Do not combine with multiple coast towns on a single call unless the itinerary explicitly allows it",
    ],
    faqs: [
      {
        question: "How long should I spend at Pompeii?",
        answer:
          "Allow at least two hours on site for a meaningful visit; longer with a guide or special interests.",
      },
      {
        question: "Is Pompeii suitable for children?",
        answer:
          "Many families enjoy Pompeii, but uneven ground and heat require realistic pacing and footwear.",
      },
      {
        question: "Which Signature Tour includes Pompeii?",
        answer:
          "Both Signature Tours — Pompeii with Vesuvius and Pompeii with the Amalfi Coast — centre on Pompeii as the archaeological anchor.",
      },
    ],
    recommendations: [
      {
        category: "editors-choice",
        title: "Signature Pompeii and Amalfi Coast",
        description: "Balanced combined day for first-time visitors.",
        href: "/signature-tours/pompeii-amalfi-coast/",
        signature: true,
      },
    ],
    relatedSlugs: [
      "mount-vesuvius-from-salerno",
      "pompeii-or-amalfi-coast-from-salerno",
      "herculaneum-from-salerno",
    ],
    imageKey: "greek-theatre",
    hubPath: "/",
  },
  {
    slug: "mount-vesuvius-from-salerno",
    category: "destination",
    title: "Mount Vesuvius from Salerno",
    seoTitle: "Mount Vesuvius from Salerno — Cruise Day Guide and Cautions",
    metaDescription:
      "Visiting Mount Vesuvius from Salerno: crater access, steep uphill walking, park regulations, weather, optional winery stops and mobility warnings.",
    tagline: "Dramatic views — but not every passenger should book this day.",
    overview:
      "Mount Vesuvius adds volcanic scale to a Pompeii day. It also adds a steep uphill walk, park procedures and weather uncertainty that must be stated clearly — not buried in fine print.",
    body: [
      "Vesuvius access from Salerno is typically paired with Pompeii on the same regional loop. Road time, park entry and the summit approach consume port hours quickly — this is a long-call combination, not a short-call add-on.",
      "The crater approach involves a steep uphill walk on uneven paths. Operators describe roughly twenty minutes of sustained ascent at a meaningful gradient. This is not suitable for passengers with limited mobility, heart conditions or a dislike of steep hiking — choose a different Salerno day instead.",
      "Park regulations, weather and visibility can change what is possible on a given morning. Cooler temperatures and clearer views often favour an earlier start. Layers, closed footwear and flexible expectations help.",
      "Optional winery visits on volcanic slopes may follow Vesuvius on selected tours — including our Signature Pompeii and Vesuvius day — but the winery is not a standard inclusion unless your confirmed booking version includes it.",
    ],
    highlights: [
      "Usually combined with Pompeii",
      "Steep uphill walk to crater area",
      "Weather and park access variable",
      "Optional winery on Signature Tour only when confirmed",
    ],
    tips: [
      "Read mobility warnings before enquiring — do not hope the walk can be skipped informally",
      "Dress in layers; the crater area is cooler and windier than Salerno port",
      "Treat summit or cable-car promises as uncertain unless a product explicitly confirms them",
    ],
    faqs: [
      {
        question: "Can I visit Vesuvius without Pompeii?",
        answer:
          "Most cruise-day products combine both because of road economics. Standalone Vesuvius days are uncommon from Salerno.",
      },
      {
        question: "Is Vesuvius suitable for elderly passengers?",
        answer:
          "It depends on individual mobility. The uphill walk is demanding. Honest operators will advise against booking if the walk is unsuitable.",
      },
      {
        question: "Which Signature Tour includes Vesuvius?",
        answer:
          "Our Signature Pompeii, Vesuvius and optional winery tour — see the product page for inclusions and optional costs.",
      },
    ],
    recommendations: [
      {
        category: "editors-choice",
        title: "Signature Pompeii and Vesuvius",
        description: "Selected eight-seat day with clear mobility disclosures.",
        href: "/signature-tours/pompeii-vesuvius-winery/",
        signature: true,
      },
    ],
    relatedSlugs: ["pompeii-from-salerno-cruise-port", "pompeii-or-paestum", "best-salerno-shore-excursions"],
    imageKey: "coast",
    hubPath: "/",
  },
  {
    slug: "amalfi-coast-from-salerno-cruise-port",
    category: "destination",
    title: "Amalfi Coast from Salerno Cruise Port",
    seoTitle: "Amalfi Coast from Salerno Cruise Port — Honest Shore Guide",
    metaDescription:
      "Visit the Amalfi Coast from Salerno: Positano, Amalfi and Ravello by road or boat, summer traffic, realistic stops and cruise return planning.",
    tagline: "Cliff roads, sea views — and traffic that shapes the day.",
    overview:
      "The Amalfi Coast is why many passengers choose Salerno — but the coast is not a single place. Road time, stop choices and season determine whether the day feels magical or rushed.",
    body: [
      "From Salerno, the Amalfi Coast unfolds west along SS163 and related routes — famous for beauty and, in summer, congestion. Journey times to Amalfi, Positano or Ravello can expand materially when coaches and cars share narrow cliff sections.",
      "Boat excursions and seasonal ferries offer an alternative viewpoint and may reduce time on the road when schedules align with your ship. Do not assume every public ferry suits every cruise call without checking locally.",
      "Most passengers must choose which town receives meaningful free time. Positano is photogenic but driving-intensive. Amalfi offers cathedral and waterfront character. Ravello delivers gardens and panoramas from higher ground — sometimes a better balance when traffic is heavy.",
      "Combining the coast with Pompeii is possible on long calls through structured itineraries — see our Signature Pompeii and Amalfi Coast tour and the honest planning content on one-day combinations.",
    ],
    highlights: [
      "Road and boat access both possible",
      "Summer traffic materially affects timing",
      "Town choice matters more than town count",
      "Steps and slopes in coastal villages",
    ],
    tips: [
      "Prefer one well-paced coastal stop over three rushed ones",
      "Ask operators how much free time you will actually have",
      "Boat days still require return margins — seas and timetables vary",
    ],
    faqs: [
      {
        question: "Positano, Amalfi or Ravello?",
        answer:
          "See our comparison guide. Amalfi and Ravello often balance better with Pompeii than forcing Positano in peak traffic.",
      },
      {
        question: "Is a boat tour better than a road tour?",
        answer:
          "It can reduce road stress when ferries suit your schedule, but it is not universally better — compare products and return planning.",
      },
      {
        question: "Can I do the coast without Pompeii?",
        answer:
          "Yes — coast-only days are a valid choice when archaeology is not your priority.",
      },
    ],
    relatedSlugs: [
      "positano-from-salerno-cruise-port",
      "amalfi-from-salerno-cruise-port",
      "ravello-from-salerno-cruise-port",
      "pompeii-and-amalfi-coast-in-one-day",
    ],
    imageKey: "coast",
    hubPath: "/",
  },
  {
    slug: "positano-from-salerno-cruise-port",
    category: "destination",
    title: "Positano from Salerno Cruise Port",
    seoTitle: "Positano from Salerno Cruise Port — What to Expect",
    metaDescription:
      "Visiting Positano from Salerno: driving time, summer traffic, stepped streets, photography stops and honest expectations for cruise passengers.",
    tagline: "The vertical village — worth it when the day is paced honestly.",
    overview:
      "Positano is among the Amalfi Coast's most photographed towns. From Salerno it is also among the most driving-intensive — especially when paired with Pompeii on the same call.",
    body: [
      "Positano's stacked houses and stepped lanes create immediate atmosphere, but reaching them from Salerno consumes port hours on cliff roads before you step ashore in the village. Summer congestion can shorten the free time that made the journey worthwhile.",
      "Walking in Positano means steps — often many of them. Beach-level strolls still involve inclines elsewhere in the village. Limited-mobility passengers should consider Amalfi, boat-based days or Salerno city instead.",
      "Photography stops on the approach road are popular but traffic-dependent. Drivers may adjust timing for safety and return planning — Positano should not be treated as guaranteed on every combined itinerary.",
      "When Pompeii shares the same day, operators may choose Amalfi or Ravello instead if traffic demands. That is operational honesty, not a disappointment to avoid mentioning upfront.",
    ],
    highlights: [
      "Iconic cliffside scenery",
      "Stepped lanes throughout",
      "Extra driving from Salerno",
      "May be swapped for other towns operationally",
    ],
    tips: [
      "Wear shoes suitable for steps, not just boardwalk slides",
      "Check whether your tour guarantees Positano or lists it as conditional",
      "Allow time for a relaxed drink with a view rather than a hurried circuit",
    ],
    faqs: [
      {
        question: "Is Positano guaranteed on Pompeii combination tours?",
        answer:
          "It should not be. Traffic, ship timing and operational decisions may favour Amalfi or Ravello instead.",
      },
      {
        question: "How long is the drive from Salerno to Positano?",
        answer:
          "Map times underestimate peak-season reality. Treat published durations as minimums and plan backwards from all-aboard.",
      },
      {
        question: "Is Positano good for limited mobility?",
        answer:
          "Generally no, due to steps and inclines. Consider alternatives.",
      },
    ],
    relatedSlugs: ["positano-or-amalfi-or-ravello", "amalfi-coast-from-salerno-cruise-port"],
    imageKey: "coast",
    hubPath: "/",
  },
  {
    slug: "amalfi-from-salerno-cruise-port",
    category: "destination",
    title: "Amalfi from Salerno Cruise Port",
    seoTitle: "Amalfi from Salerno Cruise Port — Shore Day Guide",
    metaDescription:
      "Visit Amalfi from Salerno cruise port: cathedral, waterfront, ferries, driving times and why Amalfi often balances better than multi-town coast loops.",
    tagline: "The historic maritime heart of the coast.",
    overview:
      "Amalfi offers cathedral grandeur, a lively waterfront and practical ferry connections — often a stronger coastal anchor than forcing Positano into an already full day.",
    body: [
      "Amalfi town centres on its duomo, piazzas and harbour front — a compact core that rewards unhurried wandering. From Salerno, road time still applies, but Amalfi is often less driving-intensive than Positano when planning combined itineraries.",
      "Ferry links connect Amalfi to other coastal points in season, which independent travellers sometimes use — always verify return compatibility with all-aboard.",
      "Free time here might include cathedral steps, lemon-gelato stops and harbour photography. Lunch with a sea view is part of the appeal when the itinerary allows breathing room.",
      "On Signature Pompeii and Amalfi Coast days, Amalfi is a recommended balanced finish when the goal is meaningful time rather than maximum town count.",
    ],
    highlights: [
      "Cathedral and compact historic core",
      "Harbour and ferry connections",
      "Often balanced pairing with Pompeii",
      "Still involves coastal road time",
    ],
    tips: [
      "Visit the cathedral early if your free time is short",
      "Carry cash for small vendors alongside cards",
      "Do not assume ferries replace your return transport without checking times",
    ],
    faqs: [
      {
        question: "Is Amalfi less crowded than Positano?",
        answer:
          "Both are busy in peak season, but Amalfi's layout and role as a transport hub can feel slightly more manageable than Positano's stepped lanes at peak hours.",
      },
      {
        question: "Can I reach Ravello from Amalfi?",
        answer:
          "Yes by road or bus uphill — but adding Ravello consumes more time. Combined tours should state how long you have at each stop.",
      },
      {
        question: "Does the Signature Tour include Amalfi?",
        answer:
          "Amalfi is a recommended balanced coastal option on the Signature Pompeii and Amalfi Coast tour — confirm the chosen itinerary for your sailing.",
      },
    ],
    relatedSlugs: ["ravello-from-salerno-cruise-port", "positano-or-amalfi-or-ravello"],
    imageKey: "coast",
    hubPath: "/",
  },
  {
    slug: "ravello-from-salerno-cruise-port",
    category: "destination",
    title: "Ravello from Salerno Cruise Port",
    seoTitle: "Ravello from Salerno Cruise Port — Hilltop Coast Guide",
    metaDescription:
      "Visit Ravello from Salerno: Villa Rufolo gardens, belvederes, hilltop walking and why Ravello suits balanced Amalfi Coast days.",
    tagline: "Gardens and panoramas above the coast.",
    overview:
      "Ravello sits above the Amalfi Coast with wide views and a calmer hilltop character — a strong choice when traffic makes Positano feel too costly in time.",
    body: [
      "Ravello trades beach-level energy for belvederes, villas and music-festival heritage. Villa Rufolo's gardens and terrace views are the headline for many visitors, along with the quieter piazza life away from coastal crowds.",
      "The approach from Salerno or from Amalfi involves hill roads and additional ascent time. Combined itineraries must account for that — Ravello is not a five-minute detour.",
      "Walking includes slopes and steps in the historic centre, though the character differs from Positano's vertical lanes. Allow time to sit with the view rather than rushing two villas and lunch in ninety minutes.",
      "Signature and small-group operators may prefer Ravello over Positano when designing balanced Pompeii and coast days — especially in summer.",
    ],
    highlights: [
      "Panoramic belvederes",
      "Villa Rufolo gardens",
      "Calmer hilltop atmosphere",
      "Additional hill driving from the coast",
    ],
    tips: [
      "Check garden opening times if Villa Rufolo is your priority",
      "Bring a light layer — hilltop breezes cool the terrace",
      "Pair with Amalfi rather than adding Positano on tight days",
    ],
    faqs: [
      {
        question: "Is Ravello better than Positano for cruise days?",
        answer:
          "Often yes when traffic is heavy and you want views without the steepest stepped village lanes — but preferences differ.",
      },
      {
        question: "Can Ravello be visited with Pompeii?",
        answer:
          "Yes on long calls through structured tours such as our Signature Pompeii and Amalfi Coast day with a Ravello-focused option.",
      },
      {
        question: "Is Ravello wheelchair-friendly?",
        answer:
          "Hilltop centres involve slopes. Some viewpoints and venues have uneven access — discuss needs before booking.",
      },
    ],
    relatedSlugs: ["amalfi-from-salerno-cruise-port", "positano-or-amalfi-or-ravello"],
    imageKey: "coast",
    hubPath: "/",
  },
  {
    slug: "paestum-from-salerno-cruise-port",
    category: "destination",
    title: "Paestum from Salerno Cruise Port",
    seoTitle: "Paestum from Salerno Cruise Port — Temples and Mozzarella",
    metaDescription:
      "Visit Paestum from Salerno: Greek temples, archaeological site time, buffalo mozzarella tastings and a calmer alternative to crowded coast days.",
    tagline: "Ancient Greece meets Campanian countryside flavour.",
    overview:
      "Paestum offers some of Italy's best-preserved Greek temples in an open countryside setting — often paired with buffalo-mozzarella farm visits for a food-and-history day away from Amalfi traffic.",
    body: [
      "Paestum lies south of Salerno in the Cilento direction, making it a distinct regional day from coast or Pompeii loops. Road time is real, but crowds are generally lighter than at Pompeii or Positano in peak season.",
      "The archaeological site spans three major Doric temples and museum-worthy context. Open fields and long sightlines suit passengers who prefer spacious archaeology to urban Roman streetscapes.",
      "Mozzarella tastings at local farms add a Campanian food dimension common on partner excursions. Confirm tasting inclusions and dietary handling before booking.",
      "Paestum does not pair comfortably with Pompeii or the Amalfi Coast in one port day — choose it when temples and countryside flavour are the anchor.",
    ],
    highlights: [
      "Greek temple archaeology",
      "Generally calmer than Pompeii or Positano",
      "Mozzarella and farm tastings on many tours",
      "Southbound regional day from Salerno",
    ],
    tips: [
      "Allow at least 90 minutes at the temple site",
      "Mention dietary needs for farm tastings in advance",
      "Sun protection — the site is exposed",
    ],
    faqs: [
      {
        question: "Paestum or Pompeii?",
        answer:
          "Pompeii for Roman street life and Vesuvius pairings; Paestum for Greek temples and calmer countryside — see our comparison guide.",
      },
      {
        question: "Is Paestum suitable for a short call?",
        answer:
          "Only if your usable hours remain long after the southbound drive. Medium-to-long calls are safer.",
      },
      {
        question: "Are tastings included?",
        answer:
          "Depends on the product. Confirm inclusions rather than assuming meals or tastings are covered.",
      },
    ],
    relatedSlugs: ["pompeii-or-paestum", "salerno-food-guide"],
    imageKey: "food",
    hubPath: "/",
  },
  {
    slug: "herculaneum-from-salerno",
    category: "destination",
    title: "Herculaneum from Salerno",
    seoTitle: "Herculaneum from Salerno Cruise Port — Smaller Roman Site Guide",
    metaDescription:
      "Visit Herculaneum (Ercolano) from Salerno: compact Roman archaeology, comparison with Pompeii, travel options and cruise-day suitability.",
    tagline: "Intimate Roman ruins — often overshadowed by Pompeii, worth understanding.",
    overview:
      "Herculaneum preserves a smaller, deeply evocative Roman town buried like Pompeii but with a different character — multi-storey buildings and seaside context in a more compact site.",
    body: [
      "Herculaneum (Ercolano) lies on the Naples bay side, reachable from Salerno by road or rail for independent travellers. Organised excursions more often feature Pompeii, but Herculaneum suits history-focused passengers who prefer smaller sites.",
      "The excavated area is more compact than Pompeii, which can suit shorter site visits or passengers overwhelmed by Pompeii's scale. Surfaces remain uneven and exposure real in summer.",
      "Choosing Herculaneum instead of Pompeii is a genuine preference, not a consolation prize — but product availability from Salerno may be narrower. Compare live partner excursions rather than assuming daily departures.",
      "Combining Herculaneum with Vesuvius or the Amalfi Coast in one call faces the same time and traffic constraints as Pompeii combinations — plan with the same honesty.",
    ],
    highlights: [
      "Compact, multi-storey Roman ruins",
      "Alternative to Pompeii's scale",
      "Similar regional travel from Salerno",
      "Fewer mainstream cruise products than Pompeii",
    ],
    tips: [
      "Read up on the site's seaside context before visiting",
      "If travelling independently by train, target Ercolano Scavi station",
      "Compare ticket and guide arrangements with Pompeii products",
    ],
    faqs: [
      {
        question: "Herculaneum or Pompeii from Salerno?",
        answer:
          "Pompeii for the iconic walk and broader tour choice; Herculaneum for a smaller, intimate alternative when products align.",
      },
      {
        question: "Is Herculaneum less walking than Pompeii?",
        answer:
          "The site is smaller, but uneven surfaces still require sensible footwear and pacing.",
      },
      {
        question: "Can I visit both in one day?",
        answer:
          "Not realistically from a Salerno port call alongside transport and return margins.",
      },
    ],
    relatedSlugs: ["pompeii-from-salerno-cruise-port", "pompeii-or-paestum"],
    imageKey: "greek-theatre",
    hubPath: "/",
  },
  {
    slug: "salerno-food-guide",
    category: "editorial",
    title: "Salerno Food Guide",
    seoTitle: "Salerno Food Guide for Cruise Passengers",
    metaDescription:
      "What to eat in Salerno: sfogliatella, seafood, Campanian wine, street food walks, Paestum mozzarella and honest tips for port-day dining.",
    tagline: "Campanian flavour without leaving your port day behind.",
    overview:
      "Salerno's food story spans city-centre pastries and seafood, volcanic wines near Vesuvius and buffalo mozzarella country near Paestum — match your meal to the shape of your day.",
    body: [
      "In the historic centre, look for sfogliatella pastries, fresh seafood along the waterfront and simple trattoria cooking away from the most obvious tourist menus. A food walk or street-food style tour keeps choices local when your call stays in the city.",
      "On Pompeii and Vesuvius days, lunch timing depends on the itinerary — some tours allow a stop; others keep you moving until afternoon. Optional winery visits on the Signature Pompeii and Vesuvius tour may include tasting and lunch only when your booking version confirms it.",
      "Paestum excursions often highlight mozzarella production — a different food angle from coastal lemon gelato. Confirm tasting portions and dietary accommodations in advance.",
      "Amalfi Coast free time usually means lemon gelato, seafood pasta and terrace drinks with a view. Build lunch into your mental itinerary rather than treating food as an afterthought between rushed stops.",
    ],
    highlights: [
      "Sfogliatella and waterfront seafood in Salerno",
      "Volcanic wines optional on Vesuvius days",
      "Mozzarella tastings near Paestum",
      "Coastal terrace lunches on Amalfi days",
    ],
    tips: [
      "Mention allergies when booking food-inclusive tours",
      "Carry cash for small bakeries and market stalls",
      "Reserve terrace tables only if your free time is genuinely long enough",
    ],
    faqs: [
      {
        question: "Is lunch included on Salerno excursions?",
        answer:
          "Usually not unless a specific product confirms it. Winery lunches on Signature Tours are optional extras.",
      },
      {
        question: "What is sfogliatella?",
        answer:
          "A layered Campanian pastry — try it at a reputable pasticceria near the historic centre.",
      },
      {
        question: "Can I do a food-only day without leaving Salerno?",
        answer:
          "Yes — a city food walk or independent café and market circuit suits shorter calls well.",
      },
    ],
    relatedSlugs: ["can-you-walk-from-salerno-cruise-port", "paestum-from-salerno-cruise-port"],
    imageKey: "food",
    hubPath: "/",
  },
];

const guideBySlug = new Map(guides.map((g) => [g.slug, g]));

export function getGuideBySlug(slug: string): GuidePage | undefined {
  return guideBySlug.get(slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}

export function getGuidesByCategory(category: GuideCategory): GuidePage[] {
  return guides.filter((g) => g.category === category);
}
