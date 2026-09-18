import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { schedulePorts, getScheduleEntryCount, getLiveScheduleYears } from "@/data/schedules";
import { portYearPath, portHubPath } from "@/lib/schedule-utils";

const path = "/ship-schedules";

export const metadata = buildMetadata({
  title: "Salerno Cruise Ship Schedules",
  description:
    "Salerno cruise ship schedules by year and month. See which ships call at the Port of Salerno before booking Pompeii & Amalfi tours, Vesuvius excursions or Salerno city walks.",
  path,
  keywords: [
    "Salerno cruise ship schedule",
    "Salerno cruise calendar",
    "Salerno cruise port schedule",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Ship Schedules", path },
];

export default function ShipSchedulesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "Salerno Cruise Ship Schedules",
            description: "Salerno cruise ship schedules by year and month.",
            path,
          }),
        ]}
      />
      <PageHero
        title="Salerno Cruise Ship Schedules"
        subtitle="See which ships call at Salerno before you book excursions. Year and month views show published call times — always confirm with your cruise line before booking."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          {schedulePorts.map((port) => {
            const count = getScheduleEntryCount(port.slug);
            const liveYears = getLiveScheduleYears(port.slug);
            return (
              <div key={port.slug} className="card-editorial p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-gray-900">{port.name}</h2>
                    <p className="mt-2 text-gray-600">{port.scheduleOverview}</p>
                  </div>
                  {count > 0 ? (
                    <span className="pill">{count} entries</span>
                  ) : (
                    <span className="pill-accent">Ready for CSV import</span>
                  )}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={portHubPath(port.slug)} className="btn-primary text-sm">
                    Full schedule hub
                  </Link>
                  {liveYears.map((y) => (
                    <Link key={y} href={portYearPath(port.slug, y)} className="btn-secondary text-sm">
                      {y}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/salerno-cruise-port-guide" className="btn-secondary text-sm">
              Port Guide
            </Link>
            <Link href="/cruise-planner" className="btn-secondary text-sm">
              Cruise Planner
            </Link>
            <Link href="/shore-excursions" className="btn-secondary text-sm">
              Shore Excursions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
