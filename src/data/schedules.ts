import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  SCHEDULE_YEARS,
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import salernoSchedule from "./imported-schedules/salerno.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are the Salerno cruise ship schedules?",
    answer:
      "Schedules are compiled from published cruise timetables and updated periodically. Times, terminals and dates can change, so always confirm your arrival and departure with your cruise line before booking shore excursions.",
  },
  {
    question: "Where do cruise ships dock in Salerno — is it the same as Naples or Sorrento?",
    answer:
      "Cruise ships berth at the Port of Salerno on the Campanian coast — a distinct port of call from Naples on the Bay of Naples and from Sorrento on the Sorrentine Peninsula. Salerno is the practical gateway for Pompeii, Vesuvius, the Amalfi Coast and Paestum day trips by road. Your cruise documents confirm the exact berth.",
  },
  {
    question: "Why check ship schedules before booking Salerno excursions?",
    answer:
      "Multi-ship days increase coach and taxi demand for Pompeii and Amalfi Coast routes. Knowing how many vessels share your Salerno port day helps you choose between a full Pompeii & Amalfi day, a Pompeii-focused option or a lower-risk Salerno city walk.",
  },
];

const SCHEDULE_TIPS = [
  "Confirm you are calling at Salerno — not Naples or Sorrento",
  "Check how many ships share your Salerno berth day before booking Pompeii & Amalfi combinations",
  "Use published arrival and departure times; incomplete calls need confirmation with your cruise line",
  "Keep a 60–90 minute return buffer for regional road days inland or along the Amalfi Coast from Salerno",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "salerno",
    name: "Salerno",
    country: "Campania, Italy",
    seoTitle: "Salerno Cruise Ship Schedule Overview",
    metaDescription:
      "Salerno cruise ship schedule hub. See which ships call at the Port of Salerno and plan Pompeii, Vesuvius, Amalfi Coast and Paestum days around published arrival and departure times.",
    intro:
      "Salerno is Campania's southern cruise gateway — a different port of call from Naples or Sorrento. Check which ships are scheduled before you book Pompeii tours, Amalfi Coast excursions or a Salerno city day.",
    description:
      "Campania cruise gateway — Pompeii, Vesuvius, the Amalfi Coast and Paestum day trips from the Port of Salerno.",
    scheduleOverview:
      "Salerno sees peak cruise traffic from spring through autumn, with seasonal Mediterranean and repositioning calls across the published calendar.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  salerno: salernoSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((p) => p.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((p) => p.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

/** Years in SCHEDULE_YEARS that have at least one published call for the port. */
export function getLiveScheduleYears(slug: string): ScheduleYear[] {
  return SCHEDULE_YEARS.filter((year) => getScheduleEntriesForYear(slug, year).length > 0);
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const results: { portSlug: string; entries: ScheduleEntry[] }[] = [];
  for (const port of schedulePorts) {
    const matches = getScheduleEntries(port.slug).filter(
      (e) => e.ship.toLowerCase().includes(q) || e.cruiseLine.toLowerCase().includes(q),
    );
    if (matches.length) results.push({ portSlug: port.slug, entries: matches });
  }
  return results;
}

export function getTodayTomorrowEntries(slug: string): { today: ScheduleEntry[]; tomorrow: ScheduleEntry[] } {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return {
    today: entries.filter((e) => e.date === fmt(today)),
    tomorrow: entries.filter((e) => e.date === fmt(tomorrow)),
  };
}
