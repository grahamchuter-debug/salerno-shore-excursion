import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Salerno Cruise Port Guide",
  subtitle:
    "Berths, walking into the city, transfers to Pompeii and the Amalfi Coast, ferries, trains, food, and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Molo Manfredi (city-side berths)",
      quay: "Waterfront berths close to Salerno's historic centre",
      usedBy: "Many cruise ships calling at Salerno",
      cityAccess:
        "The cathedral area and central streets are often reachable on foot for city-side berths — confirm your exact position and any port shuttle on the day",
    },
    {
      name: "Porto Commerciale / industrial berths",
      quay: "Commercial and cruise berths east of the city centre",
      usedBy: "Some larger ships and busy days when city berths are occupied",
      cityAccess:
        "Walking is less practical from here; taxis, organised transfers or port shuttles may be needed — verify locally rather than relying on a fixed distance",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Salerno",
      paragraphs: [
        "Salerno's cruise berths are not identical for every ship. Vessels may tie up along the city waterfront at Molo Manfredi, placing you close to the historic centre, or at commercial berths farther from the core when port capacity demands it.",
        "Exact berth position, shuttle arrangements and security procedures vary by sailing and by how busy the port is. Check your ship's daily programme and terminal signage on arrival, and note your all-aboard time — it is earlier than the published departure.",
        "Salerno works both as a walkable city call and as a gateway for organised regional excursions to Pompeii, Vesuvius, the Amalfi Coast and Paestum. Long full days need disciplined return planning; shorter calls favour the city or a single focused destination.",
      ],
    },
    {
      heading: "Walking into Salerno",
      paragraphs: [
        "When your ship berths on the city side, central Salerno — including the Cathedral of St Matthew, Via dei Mercanti and the long waterfront — can be within a reasonable walk for many passengers.",
        "Walking times depend on your exact berth, weather and any controlled port areas you must pass through. Treat map distances as approximate and allow more time than a navigation app suggests, especially with mobility considerations.",
        "From commercial berths farther east, walking into the heart of the city may not be practical. Taxis are generally available near cruise operations, but confirm arrangements and approximate fares locally rather than relying on unverified figures.",
      ],
    },
    {
      heading: "Taxis, trains and local transport",
      paragraphs: [
        "Taxis can serve independent city days or supplement organised pickups when berths are less central. Agree the destination and approximate fare before departing, and keep the return buffer in mind.",
        "Salerno's train station connects to Naples and regional lines, which some independent travellers use for Pompeii (Pompei Scavi-Villa dei Misteri) or Herculaneum (Ercolano). This places timetable risk and return timing entirely in your hands — only choose it when you understand the schedule and all-aboard margin.",
        "Excursion operators typically collect near the terminal or at a confirmed meeting point. Verify the pickup location the evening before and allow time to reach it from your berth.",
      ],
    },
    {
      heading: "Ferries and Amalfi Coast access",
      paragraphs: [
        "Ferries and hydrofoils operate along the Amalfi Coast from Salerno in season, offering an alternative to cliff-road driving for some passengers. Timetables, weather and seasonal frequency vary, and not every sailing aligns with every cruise schedule.",
        "Do not assume a public ferry will suit your ship's hours without checking locally on the day. Organised boat excursions may offer more predictable cruise-aware timing when available through partner products.",
        "Road access to Amalfi, Positano and Ravello remains the default for most shore excursions. Summer traffic can materially affect journey times — plan backwards from all-aboard rather than from an ideal map estimate.",
      ],
    },
    {
      heading: "Reaching Pompeii, Vesuvius and Paestum",
      paragraphs: [
        "Pompeii and Mount Vesuvius lie north-west of Salerno beyond Naples, involving meaningful driving time on excursion days. Paestum sits south along the Cilento coast. All are beyond a casual walk from the port.",
        "Organised excursions shape the day around collection, site time and return. Independent travellers must manage tickets, guides and transport themselves — entrance arrangements and Vesuvius park procedures are not automatic.",
        "Mount Vesuvius access involves a steep uphill walk unsuitable for all mobility levels. Weather and park regulations can affect what is possible on a given day — treat higher-level access as uncertain unless a specific product confirms it.",
      ],
    },
    {
      heading: "Food and local flavour near port",
      paragraphs: [
        "Salerno rewards a food stop even on a short call. Look for sfogliatella, seafood along the waterfront, local wine and Campanian specialities in the historic lanes near the cathedral.",
        "A guided food walk is an easy way to make the call feel specifically local without leaving the city. Mention dietary needs to the operator in advance.",
        "On regional days, free time in coastal towns or a Paestum mozzarella stop offers the chance to eat locally — confirm what any tour includes rather than assuming meals are provided.",
      ],
    },
    {
      heading: "Return-to-ship planning",
      paragraphs: [
        "Confirm your ship's all-aboard time, which is earlier than departure. For a Salerno city day, aim to be back near the terminal 60–90 minutes before all-aboard.",
        "For Pompeii, Vesuvius, Amalfi Coast or Paestum days, operators should plan the return around all-aboard with traffic contingency. A map-app journey time is not an adequate return plan in summer.",
        "Independent travellers are responsible for reaching the ship. If a long regional trip does not leave a comfortable margin — especially on coastal or train days — choose Salerno city or a shorter excursion instead.",
      ],
    },
    {
      heading: "Common passenger mistakes",
      paragraphs: [
        "Assuming every ship docks within an easy walk of the cathedral — berth position varies, and shuttles may be required.",
        "Booking Pompeii plus multiple Amalfi Coast towns without accepting summer driving limits and return risk.",
        "Choosing Vesuvius without reading the uphill walking requirement or mobility warnings.",
        "Relying on a public ferry timetable that does not align with all-aboard, or treating Naples and Salerno as interchangeable cruise ports.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Salerno from the cruise berth?",
      answer:
        "For many city-side berths, yes — the historic centre is often within a reasonable walk. From commercial berths farther from the core, walking may be impractical and taxis or shuttles may be needed. Confirm on the day.",
    },
    {
      question: "Can I take a ferry to the Amalfi Coast from Salerno?",
      answer:
        "Seasonal ferries operate, but timetables vary and may not suit every cruise schedule. Do not treat a public ferry as guaranteed for your call without checking locally. Organised boat excursions may offer more predictable timing.",
    },
    {
      question: "How do I reach Pompeii from Salerno cruise port?",
      answer:
        "Most passengers use an organised excursion with cruise-aware return planning. Independent travellers may use train via Naples or road transport, but they assume full responsibility for tickets and timing.",
    },
    {
      question: "Do all ships dock in the same place?",
      answer:
        "No. Berths vary between city-side Molo Manfredi and commercial areas depending on ship size and port capacity. Check your ship's programme on arrival.",
    },
    {
      question: "How much return-to-ship buffer should I allow?",
      answer:
        "For a Salerno city day, aim to be back near the terminal 60–90 minutes before all-aboard. For Pompeii, Vesuvius or Amalfi Coast days, build in additional road and traffic contingency.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
