"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { jsPDF } from "jspdf";
import type { ScheduleEntry } from "@/data/types";
import { travellerRecommendations } from "@/data/recommendations";
import { signatureTourDisclosures } from "@/data/signature-tours";
import { getScheduleEntries } from "@/data/schedules";
import { getEntriesForDate } from "@/lib/schedule-utils";

/**
 * Salerno cruise planner with schedule-driven ship selection.
 *
 * Editorial integrity over commercial bias: recommendations are driven by the
 * passenger's hours ashore (from actual arrival/departure only), interests and
 * mobility — NOT by which product earns us more.
 */

interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

interface PlannerResult {
  headline: string;
  summary: string;
  note?: string;
  excursions: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

const INTEREST_OPTIONS = [
  { id: "pompeii", label: "Pompeii & ruins" },
  { id: "vesuvius", label: "Mount Vesuvius" },
  { id: "amalfi", label: "Amalfi Coast" },
  { id: "paestum", label: "Paestum & food" },
  { id: "food", label: "Food & wine" },
  { id: "city", label: "Historic Salerno" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
] as const;

type Mobility = "full" | "some" | "limited";
type Budget = "budget" | "mid" | "premium";
type TravelStyle = "diy" | "guided";

interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: Mobility;
  budget: Budget;
  travelStyle: TravelStyle;
}

type PlanKey =
  | "city"
  | "pompeii-half"
  | "pompeii-vesuvius"
  | "pompeii-amalfi"
  | "amalfi-coast"
  | "paestum"
  | "food";

const DAY_PLANS: Record<
  PlanKey,
  {
    headline: string;
    summary: string;
    minimumHours: number;
    recommendationIds: string[];
    links: PlannerLink[];
    dayPlan: PlannerResult["dayPlan"];
  }
> = {
  city: {
    headline: "Historic Salerno on foot",
    summary:
      "The most flexible, lowest-risk choice: explore the cathedral quarter, waterfront and local food without a long regional transfer.",
    minimumHours: 3,
    recommendationIds: ["short-call", "local-culture"],
    links: [
      {
        label: "Historic Salerno walking tour",
        href: "/shore-excursions/walking-tour-historic-salerno/",
        why: "Guided context without committing to a long road day.",
      },
      {
        label: "Can you walk from Salerno cruise port?",
        href: "/can-you-walk-from-salerno-cruise-port/",
        why: "Berth differences, distances and return timing.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Confirm your berth and walk or shuttle toward the historic centre." },
      { time: "Late morning", text: "Cathedral of St Matthew and Via dei Mercanti lanes." },
      { time: "Midday", text: "Waterfront coffee, sfogliatella or a simple trattoria lunch." },
      { time: "Afternoon", text: "Lungomare stroll before an easy return to Molo Manfredi." },
    ],
  },
  "pompeii-half": {
    headline: "Focused Pompeii half day",
    summary:
      "A tighter archaeological anchor when your port window suits ruins without consuming the entire call.",
    minimumHours: 5,
    recommendationIds: ["history", "short-call"],
    links: [
      {
        label: "Pompeii half day small group",
        href: "/shore-excursions/pompeii-half-day/",
        why: "Balanced ruin time with more return buffer than full-day combos.",
      },
      {
        label: "Pompeii from Salerno guide",
        href: "/pompeii-from-salerno-cruise-port/",
        why: "Tickets, walking and combined-day trade-offs.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet the operator promptly for the transfer toward Pompeii." },
      { time: "Morning", text: "Guided time on uneven Roman streets — hat, water and sturdy shoes." },
      { time: "Early afternoon", text: "Return transfer with margin before all-aboard." },
    ],
  },
  "pompeii-vesuvius": {
    headline: "Pompeii and Mount Vesuvius",
    summary:
      "The active archaeology-and-volcano pairing — only when mobility suits the Vesuvius uphill walk.",
    minimumHours: 8,
    recommendationIds: ["active-traveller", "wine-food"],
    links: [
      {
        label: "Signature Pompeii and Vesuvius",
        href: "/signature-tours/pompeii-vesuvius-winery/",
        why: "Selected eight-seat day with clear mobility disclosures.",
      },
      {
        label: "Mount Vesuvius from Salerno",
        href: "/mount-vesuvius-from-salerno/",
        why: "Crater access, weather and walking cautions.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Early collection to protect cooler morning time at the ruins." },
      { time: "Morning", text: "Pompeii visit on uneven archaeological surfaces." },
      { time: "Midday", text: "Transfer toward Vesuvius when park access allows." },
      { time: "Afternoon", text: "Crater approach walk if suitable, then cruise-aware return." },
    ],
  },
  "pompeii-amalfi": {
    headline: "Pompeii and the Amalfi Coast",
    summary:
      "The balanced first-visit combination when both archaeology and a coastal town matter on a long call.",
    minimumHours: 8,
    recommendationIds: ["ultimate-first-visit"],
    links: [
      {
        label: "Signature Pompeii and Amalfi Coast",
        href: "/signature-tours/pompeii-amalfi-coast/",
        why: "Balanced coastal finish rather than an overloaded checklist.",
      },
      {
        label: "Pompeii and Amalfi in one day?",
        href: "/pompeii-and-amalfi-coast-in-one-day/",
        why: "Honest traffic and stop-count guidance.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet the operator for a structured Pompeii-first itinerary." },
      { time: "Morning", text: "Archaeological time before heat and crowds peak." },
      { time: "Afternoon", text: "One well-chosen coastal town — Amalfi or Ravello often balance best." },
      { time: "Return", text: "Conservative buffer for corniche traffic back to Salerno." },
    ],
  },
  "amalfi-coast": {
    headline: "Amalfi Coast scenery day",
    summary:
      "Cliffside towns and sea views when the coast is the anchor and Pompeii can wait for another call.",
    minimumHours: 6,
    recommendationIds: ["coast-only", "minimal-traffic"],
    links: [
      {
        label: "Amalfi Coast from Salerno guide",
        href: "/amalfi-coast-from-salerno-cruise-port/",
        why: "Road, boat and traffic realities for cruise passengers.",
      },
      {
        label: "Positano, Amalfi or Ravello?",
        href: "/positano-or-amalfi-or-ravello/",
        why: "Choose one meaningful stop over three rushed ones.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Set expectations for coastal driving time before you leave the terminal." },
      { time: "Morning", text: "Scenic transfer toward your chosen coastal town." },
      { time: "Midday", text: "Free time for lanes, viewpoints or a terrace lunch." },
      { time: "Afternoon", text: "Return with traffic contingency — ship time overrides the itinerary." },
    ],
  },
  paestum: {
    headline: "Paestum and mozzarella country",
    summary:
      "Greek temples and Campanian countryside flavour — a calmer southbound day away from corniche queues.",
    minimumHours: 7,
    recommendationIds: ["fewer-crowds", "history"],
    links: [
      {
        label: "Paestum from Salerno guide",
        href: "/paestum-from-salerno-cruise-port/",
        why: "Temple time, tastings and full-port commitment.",
      },
      {
        label: "Paestum and mozzarella excursion",
        href: "/shore-excursions/paestum-mozzarella-from-salerno/",
        why: "Partner food-and-history day south of Salerno.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Confirm pickup at Molo Manfredi for the southbound drive." },
      { time: "Morning", text: "Temple archaeology in open countryside — sun protection essential." },
      { time: "Midday", text: "Mozzarella tasting or farm stop when included on your product." },
      { time: "Afternoon", text: "Conservative return before all-aboard on a long regional day." },
    ],
  },
  food: {
    headline: "Campanian food and flavour",
    summary:
      "A taste-led day — street food in Salerno or a Sorrento peninsula lunch when you prefer eating over ruins.",
    minimumHours: 4,
    recommendationIds: ["local-culture", "wine-food"],
    links: [
      {
        label: "Salerno street-food walk",
        href: "/shore-excursions/street-food-salerno/",
        why: "Local tastings without leaving the city.",
      },
      {
        label: "Salerno food guide",
        href: "/salerno-food-guide/",
        why: "Sfogliatella, seafood and honest port-day dining.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Choose a city food walk or a regional tasting day based on your hours." },
      { time: "Late morning", text: "Market lanes, pasticceria stops or farm tastings." },
      { time: "Midday", text: "Relaxed lunch or progressive tastings rather than a rushed checklist." },
      { time: "Afternoon", text: "Waterfront time if your call allows before returning to the ship." },
    ],
  },
};

/** Real published or manually entered HH:MM — rejects empty / midnight placeholders. */
function realScheduleTime(value: string | undefined): string {
  const v = (value || "").trim();
  if (!v || v === "00:00" || v === "0:00") return "";
  return v;
}

/**
 * Usable hours ashore are derived only from actual arrival and departure times
 * (minus a 1.5h buffer for disembarkation and return). No invented defaults.
 */
function usableHoursFromTimes(arrivalTime?: string, departureTime?: string): number | null {
  const arrival = realScheduleTime(arrivalTime);
  const departure = realScheduleTime(departureTime);
  if (!arrival || !departure) return null;
  const [ah, am] = arrival.split(":").map(Number);
  const [dh, dm] = departure.split(":").map(Number);
  if ([ah, am, dh, dm].some((n) => Number.isNaN(n))) return null;
  const elapsed = dh * 60 + dm - (ah * 60 + am);
  if (elapsed <= 0) return null;
  return Math.max(0, elapsed / 60 - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const i = input.interests;

  if (
    input.travelStyle === "diy" ||
    input.mobility === "limited" ||
    i.includes("city") ||
    i.includes("independent") ||
    hours < 5
  ) {
    if (i.includes("food") && !i.includes("pompeii")) return "food";
    return "city";
  }

  if (i.includes("paestum") && hours >= 7) return "paestum";

  if (i.includes("vesuvius") && input.mobility === "full" && hours >= 8) {
    return "pompeii-vesuvius";
  }

  if (
    (i.includes("pompeii") && i.includes("amalfi")) ||
    (i.includes("photography") && i.includes("pompeii") && hours >= 8)
  ) {
    return "pompeii-amalfi";
  }

  if (i.includes("amalfi") || i.includes("photography")) return "amalfi-coast";
  if (i.includes("food")) return "food";
  if (i.includes("pompeii") && hours >= 5) {
    return hours >= 8 ? "pompeii-amalfi" : "pompeii-half";
  }
  if (i.includes("family") && hours >= 8) return "pompeii-amalfi";

  return hours >= 8 ? "pompeii-amalfi" : "pompeii-half";
}

function recommendationLinks(ids: string[]): PlannerLink[] {
  const links: PlannerLink[] = [];
  for (const id of ids) {
    const rec = travellerRecommendations.find((r) => r.id === id);
    if (rec) {
      links.push({
        label: rec.recommendation,
        href: rec.href,
        why: rec.reason,
      });
    }
  }
  return links;
}

function generateSalernoPlan(input: PlannerInput): PlannerResult {
  const hours = usableHoursFromTimes(input.arrivalTime, input.departureTime);
  if (hours === null) {
    return {
      headline: "Add your Salerno arrival and departure times",
      summary:
        "Usable hours ashore are calculated only from your ship's published or confirmed arrival and departure times. Select a scheduled ship call, or enter times manually, then build your plan again.",
      excursions: [],
      logistics: [
        {
          label: "Salerno Ship Schedules",
          href: "/ship-schedules/salerno",
          why: "Find your call date and pre-fill published Salerno times.",
        },
        {
          label: "Salerno cruise port guide",
          href: "/salerno-cruise-port-guide/",
          why: "Berths, walking routes and regional transfer context.",
        },
      ],
      dayPlan: [],
    };
  }

  const key = selectPlan(input, hours);
  const plan = DAY_PLANS[key];
  const partySize = input.adults + input.children;

  const excursions = [...plan.links];
  for (const recLink of recommendationLinks(plan.recommendationIds)) {
    if (!excursions.some((link) => link.href === recLink.href)) {
      excursions.push(recLink);
    }
  }

  let note: string | undefined;
  if (key === "pompeii-vesuvius" || key === "pompeii-amalfi") {
    note = signatureTourDisclosures.commercial;
  }
  if (input.mobility === "limited" && (key === "pompeii-vesuvius" || key === "amalfi-coast")) {
    note =
      "Mobility concerns flagged: avoid Vesuvius summit itineraries and stepped coastal villages unless a product explicitly suits your needs.";
  }

  const shortfall =
    hours < plan.minimumHours
      ? ` This is shorter than the ${plan.minimumHours}-hour minimum we suggest for this day, so consider Salerno city or a tighter Pompeii scope instead.`
      : "";

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${
      partySize === 1 ? "" : "s"
    }.${shortfall}`.trim(),
    note,
    excursions,
    logistics: [
      {
        label: "Salerno Ship Schedules",
        href: "/ship-schedules/salerno",
        why: "See which ships share your Salerno port day.",
      },
      {
        label: "Salerno cruise port guide",
        href: "/salerno-cruise-port-guide/",
        why: "Berths, walking routes and regional transfer context.",
      },
      {
        label: "Getting around from the port",
        href: "/getting-around-salerno-from-the-cruise-port/",
        why: "Taxis, trains, ferries and return buffers.",
      },
      {
        label: "Compare Salerno excursions",
        href: "/best-salerno-shore-excursions/",
        why: "Review honest trade-offs before booking a regional day.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Salerno terminal 60–90 minutes before all-aboard; Amalfi Coast and Paestum days need extra traffic contingency.",
      },
    ],
  };
}

function Section({ title, links }: { title: string; links: PlannerLink[] }) {
  if (!links.length) return null;
  return (
    <section>
      <h3 className="section-title mb-4 text-xl">{title}</h3>
      <div className="grid gap-3">
        {links.map((l) => (
          <Link key={l.href + l.label} href={l.href} className="card-editorial group block p-5">
            <p className="font-display text-base font-bold text-gray-900 group-hover:text-coastal-800">
              {l.label}
            </p>
            <p className="mt-1 text-sm text-gray-600">{l.why}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SalernoCruisePlanner() {
  const schedule = useMemo(() => getScheduleEntries("salerno"), []);
  const dates = useMemo(() => [...new Set(schedule.map((e) => e.date))].sort(), [schedule]);

  const [callDate, setCallDate] = useState("");
  const [shipName, setShipName] = useState("");
  const [manualTimes, setManualTimes] = useState(false);
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [interests, setInterests] = useState<string[]>(["pompeii", "amalfi"]);
  const [mobility, setMobility] = useState<Mobility>("full");
  const [budget, setBudget] = useState<Budget>("mid");
  const [travelStyle, setTravelStyle] = useState<TravelStyle>("guided");
  const [plan, setPlan] = useState<PlannerResult | null>(null);

  const shipsOnDate: ScheduleEntry[] = useMemo(() => {
    if (!callDate) return [];
    return getEntriesForDate(schedule, callDate);
  }, [schedule, callDate]);

  function applyShipSelection(date: string, ship: string) {
    setCallDate(date);
    setShipName(ship);
    const matches = getEntriesForDate(schedule, date).filter((e) => e.ship === ship);
    if (matches.length === 1) {
      const a = realScheduleTime(matches[0].arrival);
      const d = realScheduleTime(matches[0].departure);
      setArrivalTime(a);
      setDepartureTime(d);
      setManualTimes(!(a && d));
    } else if (matches.length > 1) {
      setArrivalTime("");
      setDepartureTime("");
      setManualTimes(true);
    } else {
      setArrivalTime("");
      setDepartureTime("");
      setManualTimes(true);
    }
  }

  function onDateChange(date: string) {
    setCallDate(date);
    setShipName("");
    setArrivalTime("");
    setDepartureTime("");
    setPlan(null);
    const matches = date ? getEntriesForDate(schedule, date) : [];
    if (matches.length === 1) {
      applyShipSelection(date, matches[0].ship);
    } else if (matches.length === 0) {
      setManualTimes(true);
    } else {
      setManualTimes(false);
    }
  }

  function onShipChange(ship: string) {
    if (!callDate) return;
    if (!ship) {
      setShipName("");
      setArrivalTime("");
      setDepartureTime("");
      setManualTimes(true);
      return;
    }
    applyShipSelection(callDate, ship);
  }

  function toggleInterest(id: string) {
    setInterests((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  }

  function generate() {
    setPlan(
      generateSalernoPlan({
        arrivalTime: realScheduleTime(arrivalTime),
        departureTime: realScheduleTime(departureTime),
        adults: Number(adults) || 1,
        children: Number(children) || 0,
        interests,
        mobility,
        budget,
        travelStyle,
      }),
    );
  }

  function downloadPdf() {
    if (!plan) return;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(plan.headline, 20, 20);
    doc.setFontSize(10);
    let y = 30;
    const write = (text: string, indent = 20) => {
      const lines = doc.splitTextToSize(text, 200 - indent);
      doc.text(lines, indent, y);
      y += lines.length * 5 + 2;
      if (y > 275) {
        doc.addPage();
        y = 20;
      }
    };
    write(plan.summary);
    if (plan.note) {
      y += 1;
      write(plan.note);
    }
    y += 2;
    const block = (title: string, items: PlannerLink[]) => {
      if (!items.length) return;
      doc.setFont("helvetica", "bold");
      write(title);
      doc.setFont("helvetica", "normal");
      items.forEach((i) => write(`- ${i.label}: ${i.why}`, 24));
      y += 2;
    };
    block("Shore excursions", plan.excursions);
    block("Keep planning", plan.logistics);
    doc.setFont("helvetica", "bold");
    write("Your day plan");
    doc.setFont("helvetica", "normal");
    plan.dayPlan.forEach((s) => write(`${s.time}: ${s.text}`, 24));
    doc.save("salerno-cruise-plan.pdf");
  }

  const noMatch = Boolean(callDate) && shipsOnDate.length === 0;
  const hasTimes = Boolean(realScheduleTime(arrivalTime) && realScheduleTime(departureTime));

  return (
    <div className="card-feature">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Port call date</label>
          <input
            type="date"
            value={callDate}
            onChange={(e) => onDateChange(e.target.value)}
            list="salerno-call-dates"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
          <datalist id="salerno-call-dates">
            {dates.map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Ship</label>
          <select
            value={shipName}
            onChange={(e) => onShipChange(e.target.value)}
            disabled={!callDate || shipsOnDate.length === 0}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm disabled:bg-gray-50"
          >
            <option value="">
              {!callDate
                ? "Choose a date first"
                : shipsOnDate.length === 0
                  ? "No published match — enter times manually"
                  : shipsOnDate.length === 1
                    ? shipsOnDate[0].ship
                    : "Choose your ship"}
            </option>
            {shipsOnDate.map((e) => (
              <option key={`${e.date}-${e.ship}-${e.cruiseLine}`} value={e.ship}>
                {e.ship} ({e.cruiseLine})
              </option>
            ))}
          </select>
        </div>

        {(manualTimes || noMatch || !callDate) && (
          <div className="rounded-lg border border-amber-100 bg-amber-50/80 px-3 py-2 text-xs text-amber-950 sm:col-span-2">
            {noMatch
              ? "No published Salerno ship for that date — enter arrival and departure manually."
              : manualTimes && shipName
                ? "Published times are incomplete for this Salerno call — enter times manually or confirm with your cruise line."
                : "Select your Salerno call date and ship to pre-fill published times, or enter times manually. Hours ashore are calculated only from actual arrival and departure."}
          </div>
        )}

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Arrival time (local)</label>
          <input
            type="time"
            value={arrivalTime}
            onChange={(e) => {
              setArrivalTime(e.target.value);
              setManualTimes(true);
            }}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Departure / all-aboard time
          </label>
          <input
            type="time"
            value={departureTime}
            onChange={(e) => {
              setDepartureTime(e.target.value);
              setManualTimes(true);
            }}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Adults</label>
          <input
            type="number"
            min={1}
            max={20}
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Children</label>
          <input
            type="number"
            min={0}
            max={20}
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">Interests</label>
          <div className="flex flex-wrap gap-2">
            {INTEREST_OPTIONS.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => toggleInterest(o.id)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  interests.includes(o.id)
                    ? "bg-coastal-800 text-white"
                    : "border border-coastal-200 bg-white text-coastal-800 hover:bg-coastal-50"
                }`}
                aria-pressed={interests.includes(o.id)}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Mobility</label>
          <select
            value={mobility}
            onChange={(e) => setMobility(e.target.value as Mobility)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="full">Happy to walk a lot</option>
            <option value="some">Some walking is fine</option>
            <option value="limited">Limited mobility</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Budget</label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value as Budget)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="budget">Budget</option>
            <option value="mid">Mid-range</option>
            <option value="premium">Premium</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">DIY or guided?</label>
          <select
            value={travelStyle}
            onChange={(e) => setTravelStyle(e.target.value as TravelStyle)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="guided">Prefer guided</option>
            <option value="diy">Prefer DIY / independent</option>
          </select>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={generate} className="btn-primary" disabled={!hasTimes}>
          Build my Salerno plan
        </button>
        {plan && (
          <button type="button" onClick={downloadPdf} className="btn-secondary">
            Download PDF
          </button>
        )}
      </div>
      {!hasTimes && (
        <p className="mt-3 text-xs text-gray-500">
          Enter arrival and departure times (from the schedule or manually) before building a plan.
          Hours ashore are never estimated from defaults.
        </p>
      )}

      {plan && (
        <div className="mt-8 space-y-8">
          <div className="rounded-xl border border-coastal-200 bg-coastal-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-maple-600">
              Editorial recommendation
            </p>
            <h3 className="mt-1 font-display text-xl font-bold text-gray-900">{plan.headline}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{plan.summary}</p>
            {plan.note && (
              <p className="mt-3 border-t border-coastal-200 pt-3 text-xs leading-relaxed text-gray-500">
                {plan.note}
              </p>
            )}
          </div>
          <Section title="Recommended shore excursions" links={plan.excursions} />
          <Section title="Keep planning" links={plan.logistics} />
          {plan.dayPlan.length > 0 && (
            <section>
              <h3 className="section-title mb-4 text-xl">Your day plan</h3>
              <ol className="relative space-y-4 border-l border-coastal-200 pl-6">
                {plan.dayPlan.map((s, i) => (
                  <li key={i} className="relative">
                    <span
                      className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-coastal-600"
                      aria-hidden="true"
                    />
                    <p className="text-xs font-semibold uppercase tracking-wide text-coastal-700">
                      {s.time}
                    </p>
                    <p className="mt-1 text-sm text-gray-700">{s.text}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}
          <p className="text-xs text-gray-500">
            Guidance is indicative — always confirm your ship&apos;s all-aboard time and build a
            60–90 minute return buffer. Amalfi Coast traffic, Vesuvius walking demands and Paestum
            driving can lengthen journey times materially. This planner is for Salerno port calls
            only — not Naples or Sorrento.
          </p>
        </div>
      )}
    </div>
  );
}
