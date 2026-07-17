import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Salerno?",
    answer:
      "Ships may berth at city-side Molo Manfredi close to the historic centre or at commercial berths farther from the core depending on size and port capacity. Exact position varies by sailing — check your daily programme on arrival.",
  },
  {
    question: "How far is Salerno cruise port from the city centre?",
    answer:
      "For city-side berths, the cathedral area and central streets are often within a reasonable walk. From commercial berths, walking may be impractical. Allow more time than a map app suggests and confirm locally.",
  },
  {
    question: "Can I visit Pompeii and the Amalfi Coast in one day from Salerno?",
    answer:
      "Yes, on a suitably long call with realistic stop choices and conservative return timing. Our Signature Pompeii and Amalfi Coast tour is designed for that combination — but summer traffic may limit how many coastal towns receive extensive free time.",
  },
  {
    question: "Is Mount Vesuvius suitable for passengers with limited mobility?",
    answer:
      "Generally no. The summit approach involves a steep uphill walk on uneven ground. Passengers with mobility concerns should choose Salerno city, Paestum, a boat day or a Pompeii-only itinerary without the Vesuvius walk.",
  },
  {
    question: "Will a Vesuvius excursion reach the crater rim?",
    answer:
      "Standard cruise-day itineraries focus on the accessible crater area with the uphill walk described by operators. Higher-level access and conditions can change with park regulations and weather — nothing should be assumed unless a product confirms it.",
  },
  {
    question: "What should I do in Salerno on a short port call?",
    answer:
      "Stay close to the ship with a historic-centre walk, food experience or independent visit to the cathedral and waterfront. Leave Pompeii and the Amalfi Coast for longer calls.",
  },
  {
    question: "Pompeii or Paestum from Salerno?",
    answer:
      "Pompeii is the headline Roman city and pairs with Vesuvius or the coast. Paestum offers Greek temples and mozzarella tastings with a calmer, more countryside feel. See our comparison guide for trade-offs.",
  },
  {
    question: "Positano, Amalfi or Ravello — which should I choose?",
    answer:
      "Amalfi and Ravello often produce a better-balanced day than forcing Positano when traffic is heavy. Positano is photogenic but adds meaningful driving. Your operator may adjust stops for operational reasons.",
  },
  {
    question: "What is a Signature Tour?",
    answer:
      "A Signature Tour is a selected small-group experience arranged with our trusted local touring partner — currently our eight-seat Pompeii and Vesuvius and Pompeii and Amalfi Coast days. Your confirmation identifies the responsible operator and booking terms.",
  },
  {
    question: "How much return-to-ship buffer should I allow?",
    answer:
      "For a Salerno city day, aim to be back near the terminal 60–90 minutes before all-aboard. For Pompeii, Vesuvius, Amalfi Coast or Paestum days, build in additional road and traffic contingency.",
  },
  {
    question: "What currency and language are used in Salerno?",
    answer:
      "Campania uses the euro and the local language is Italian, with English widely understood in visitor areas. Cards are common, but carrying a little cash helps for cafés, small vendors and some ticket situations.",
  },
  {
    question: "Are Shore Excursions Group tours operated by this site?",
    answer:
      "No. Partner excursions booked through Shore Excursions Group are operated through SEG or its local supplier network. They are editorially reviewed alternatives, distinct from our Signature Tours.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
