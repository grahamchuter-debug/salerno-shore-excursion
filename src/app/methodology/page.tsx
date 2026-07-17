import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "How We Recommend Salerno Shore Excursions",
  description:
    "Our methodology for Salerno recommendations — cruise-day suitability, itinerary balance, group format, and how Signature Tours are classified.",
  path: "/methodology",
});

export default function MethodologyPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Methodology", path: "/methodology" },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <section className="section-padding">
        <div className="container-wide max-w-3xl prose-body">
          <Breadcrumbs items={crumbs} />
          <h1 className="section-title">Methodology</h1>
          <p>
            Recommendations on this site consider cruise-day suitability, duration, itinerary
            balance, group format, vehicle size where known, travel time, activity level, free time,
            supplier information, customer feedback where available, return-to-ship practicality,
            value and distinctiveness.
          </p>
          <h2>Signature Tour classification</h2>
          <p>
            A Signature Tour is an excursion directly arranged, commercially curated or operated
            with a local partner and selected as the destination&apos;s flagship experience. On
            Salerno, that means our eight-seat Pompeii and Vesuvius and Pompeii and Amalfi Coast
            days arranged with Papillon Service.
          </p>
          <p>
            Signature Tours may provide greater commercial benefit to the site than affiliate
            alternatives. That commercial relationship is disclosed near booking and enquiry calls
            to action. Recommendations should still reflect genuine suitability for the
            passenger&apos;s time ashore, mobility and interests.
          </p>
          <h2>What we do not invent</h2>
          <p>
            We do not publish unverified prices, live availability, admissions, guaranteed returns,
            Vesuvius summit access or fake seat counters. Where a fact is unconfirmed it stays off
            the customer-facing page or is clearly framed as typical supplier information.
          </p>
          <p>
            See also our <Link href="/affiliate-disclosure">affiliate disclosure</Link> and{" "}
            <Link href="/signature-tours">Signature Tours</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
