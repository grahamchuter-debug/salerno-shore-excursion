export interface HonestPlanningSection {
  heading: string;
  paragraphs: string[];
}

export interface HonestPlanningLink {
  label: string;
  href: string;
}

/**
 * "How much can you realistically see in one Salerno port day?"
 * Editorial principle: the best day is not always the day with the most stops.
 */
export const honestPlanningContent = {
  eyebrow: "Honest planning",
  title: "How much can you realistically see in one Salerno port day?",
  intro:
    "Salerno opens onto some of Italy's most famous destinations — but a cruise call is finite. Summer traffic, cliff roads, archaeological time and return-to-ship margins mean the smartest itineraries often remove a stop rather than add one.",
  editorialPrinciple:
    "The best day is not always the day with the most stops.",
  sections: [
    {
      heading: "Amalfi Coast traffic is real",
      paragraphs: [
        "The coastal road between Salerno and towns such as Amalfi, Positano and Ravello can be heavily congested in peak season. Journey times that look modest on a map can expand materially when coaches, cars and delivery traffic share narrow cliff sections.",
        "This is why reputable operators sometimes adjust the order of stops, shorten free time or choose Amalfi or Ravello over Positano when driving conditions demand it. That is operational honesty, not a failure of the day.",
        "If the coast is your priority, consider whether a boat-based experience reduces road exposure — but do not assume every ferry timetable will suit your ship's hours without checking locally.",
      ],
    },
    {
      heading: "Positano adds meaningful driving",
      paragraphs: [
        "Positano is photogenic and deservedly popular, but reaching it from Salerno involves more road time than many passengers expect — especially when combined with Pompeii in the same call.",
        "Trying to force Positano, Pompeii and another coastal town into one port day often produces rushed free time and anxiety about the return. A balanced Pompeii plus Amalfi or Ravello day may feel richer than a longer checklist.",
        "Positano should not be treated as guaranteed on every departure when traffic, ship timing or operational decisions require a different coastal focus.",
      ],
    },
    {
      heading: "Pompeii plus several coastal towns feels rushed",
      paragraphs: [
        "Pompeii deserves unhurried time on uneven ancient streets. The Amalfi Coast rewards slow wandering, viewpoints and lunch. Combining both is possible on a long call — our Signature Pompeii and Amalfi Coast tour is built for that — but adding multiple coastal towns on top rarely improves the experience.",
        "A good private or small-group itinerary may intentionally drop a stop so each remaining visit has breathing room. That is preferable to ticking every name on a map while watching the clock.",
        "Ship departure time always overrides the planned itinerary. Drivers and guides may reorder or adjust stops for safety and return timing — plan with that flexibility in mind.",
      ],
    },
    {
      heading: "Choose quality over quantity",
      paragraphs: [
        "First-time visitors often ask whether they can see Pompeii, Vesuvius, Positano, Amalfi and Ravello in one day. The honest answer is that attempting to do so usually sacrifices the very qualities that make each place memorable.",
        "Match your ambition to your all-aboard time, walking tolerance and season. A half-day at Pompeii, a coastal afternoon in one town, or a Paestum and mozzarella day can each be an excellent Salerno call when paced honestly.",
        "Use comparison guides and the cruise planner to test trade-offs before booking — editorial integrity matters more than selling the longest brochure itinerary.",
      ],
    },
  ] as HonestPlanningSection[],
  links: [
    {
      label: "Pompeii and Amalfi Coast in one day?",
      href: "/pompeii-and-amalfi-coast-in-one-day/",
    },
    {
      label: "Positano, Amalfi or Ravello?",
      href: "/positano-or-amalfi-or-ravello/",
    },
    {
      label: "Pompeii or the Amalfi Coast?",
      href: "/pompeii-or-amalfi-coast-from-salerno/",
    },
    {
      label: "Signature Pompeii and Amalfi Coast",
      href: "/signature-tours/pompeii-amalfi-coast/",
    },
  ] as HonestPlanningLink[],
};
