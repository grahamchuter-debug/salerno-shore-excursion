"use client";

import { useState } from "react";
import Link from "next/link";
import type { ShipSchedulePort } from "@/data/types";
import {
  getScheduleEntries,
  searchSchedulesByShip,
  getTodayTomorrowEntries,
  getLiveScheduleYears,
} from "@/data/schedules";
import { ScheduleTable } from "@/components/ScheduleTable";
import { FAQSection } from "@/components/FAQSection";
import {
  formatMonthLabel,
  getMonthsWithEntries,
  portYearPath,
  portMonthPath,
  filterEntriesByMonth,
} from "@/lib/schedule-utils";
import { hasVerifiedScheduleData } from "@/lib/routes";

export function ShipScheduleHubView({ port }: { port: ShipSchedulePort }) {
  const entries = getScheduleEntries(port.slug);
  const hasData = hasVerifiedScheduleData(port.slug);
  const monthKeys = getMonthsWithEntries(entries);
  const liveYears = getLiveScheduleYears(port.slug);
  const { today, tomorrow } = getTodayTomorrowEntries(port.slug);
  const [shipQuery, setShipQuery] = useState("");
  const [lineQuery, setLineQuery] = useState("");
  const searchResults = shipQuery
    ? (searchSchedulesByShip(shipQuery).find((r) => r.portSlug === port.slug)?.entries ?? [])
    : [];
  const lineResults = lineQuery
    ? entries.filter((e) => e.cruiseLine.toLowerCase().includes(lineQuery.toLowerCase()))
    : [];

  return (
    <>
      <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-700">{port.intro}</p>

      {!hasData && (
        <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <p className="font-medium text-amber-950">No ships are listed for this schedule period yet</p>
          <p className="mt-2 text-sm text-amber-900">
            Verified ship calls for {port.name} are being imported. Confirm times with your cruise
            line, and explore our{" "}
            <Link href="/salerno-cruise-port-guide" className="font-medium underline">
              port guide
            </Link>{" "}
            for planning.
          </p>
        </div>
      )}

      <div className="mb-8 rounded-xl border border-coastal-100 bg-coastal-50/60 p-5 text-sm text-gray-700">
        Times, terminals and dates are indicative and compiled from published timetables. Always
        confirm with your cruise line before booking excursions or transfers. Salerno is a separate
        port of call from Naples and from Sorrento.
      </div>

      {(today.length > 0 || tomorrow.length > 0) && (
        <section className="mb-12">
          <h2 className="section-title mb-4 text-2xl">Today &amp; Tomorrow</h2>
          {today.length > 0 && (
            <div className="mb-4">
              <h3 className="mb-2 font-semibold text-gray-900">Today&apos;s Ships</h3>
              <ScheduleTable entries={today} portName={port.name} />
            </div>
          )}
          {tomorrow.length > 0 && (
            <div>
              <h3 className="mb-2 font-semibold text-gray-900">Tomorrow&apos;s Ships</h3>
              <ScheduleTable entries={tomorrow} portName={port.name} />
            </div>
          )}
        </section>
      )}

      <section className="mb-12 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Search by ship name</label>
          <input
            type="search"
            value={shipQuery}
            onChange={(e) => setShipQuery(e.target.value)}
            placeholder="e.g. Marella Discovery 2"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm"
          />
          {searchResults.length > 0 && (
            <div className="mt-4">
              <ScheduleTable entries={searchResults} portName={port.name} />
            </div>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Search by cruise line</label>
          <input
            type="search"
            value={lineQuery}
            onChange={(e) => setLineQuery(e.target.value)}
            placeholder="e.g. Marella Cruises"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm"
          />
          {lineResults.length > 0 && (
            <div className="mt-4">
              <ScheduleTable entries={lineResults} portName={port.name} />
            </div>
          )}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title mb-4 text-2xl">Schedule by Year</h2>
        <div className="mb-8 flex flex-wrap gap-3">
          {liveYears.map((year) => (
            <Link key={year} href={portYearPath(port.slug, year)} className="btn-primary text-sm">
              {year} Schedule
            </Link>
          ))}
        </div>
      </section>

      {monthKeys.length > 0 && (
        <section className="mb-12">
          <h2 className="section-title mb-4 text-2xl">Port Calendar — Month View</h2>
          <div className="mb-8 flex flex-wrap gap-3">
            {monthKeys.map((monthKey) => (
              <Link
                key={monthKey}
                href={portMonthPath(port.slug, monthKey)}
                className="btn-secondary text-sm"
              >
                {formatMonthLabel(monthKey)}
              </Link>
            ))}
          </div>
          <div className="grid gap-6">
            {monthKeys.map((monthKey) => {
              const monthEntries = filterEntriesByMonth(entries, monthKey);
              return (
                <div key={monthKey}>
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-gray-900">
                      {formatMonthLabel(monthKey)} ({monthEntries.length} calls)
                    </h3>
                    <Link
                      href={portMonthPath(port.slug, monthKey)}
                      className="text-sm font-medium text-coastal-700 hover:underline"
                    >
                      Full month view
                    </Link>
                  </div>
                  <ScheduleTable entries={monthEntries.slice(0, 5)} portName={port.name} />
                  {monthEntries.length > 5 && (
                    <p className="mt-2 text-xs text-gray-500">
                      Showing 5 of {monthEntries.length} —{" "}
                      <Link
                        href={portMonthPath(port.slug, monthKey)}
                        className="text-coastal-700 hover:underline"
                      >
                        view all
                      </Link>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {entries.length > 0 && (
        <section className="mb-12">
          <h2 className="section-title mb-4 text-2xl">Full Schedule ({entries.length} entries)</h2>
          <ScheduleTable entries={entries} portName={port.name} />
        </section>
      )}

      {port.faqs && port.faqs.length > 0 && (
        <FAQSection faqs={port.faqs} title={`${port.name} Schedule FAQs`} />
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/salerno-cruise-port-guide" className="btn-secondary text-sm">
          Port Guide
        </Link>
        <Link href="/shore-excursions" className="btn-secondary text-sm">
          Shore Excursions
        </Link>
        <Link href="/cruise-planner" className="btn-secondary text-sm">
          Cruise Planner
        </Link>
      </div>
    </>
  );
}
