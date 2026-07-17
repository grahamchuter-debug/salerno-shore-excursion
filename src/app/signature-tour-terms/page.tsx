import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import {
  cancellationPublicPlaceholder,
  cancellationTermsDraft,
} from "@/data/cancellation";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Signature Tour Terms — Cancellation Status",
  description:
    "Cancellation and missed-port terms for Salerno Signature Tours are awaiting contractual confirmation before paid bookings open.",
  path: "/signature-tour-terms",
  noindex: true,
});

export default function SignatureTourTermsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Signature Tours", path: "/signature-tours" },
    { name: "Terms status", path: "/signature-tour-terms" },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <p className="section-eyebrow mt-6">Awaiting confirmation</p>
          <h1 className="section-title mt-2">{cancellationPublicPlaceholder.headline}</h1>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-volcanic-700">
            {cancellationPublicPlaceholder.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-citrus-200 bg-citrus-50/80 p-5 text-sm text-volcanic-800">
            <p className="font-semibold">Status: {cancellationTermsDraft.status.replace(/-/g, " ")}</p>
            <p className="mt-2">
              Public cancellation wording is not live. Paid bookings will not open until Papillon
              confirms deadlines, refunds, no-shows, weather/access closures and missed-port
              treatment.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl font-semibold text-volcanic-900">
              {cancellationTermsDraft.missedPortProvision.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-volcanic-700">
              A dedicated provision for ships that do not call at Salerno will be published once
              contractually confirmed. The intended commercial outcome is a full refund — this is
              not yet a customer promise.
            </p>
          </div>

          <p className="mt-10 text-sm text-volcanic-600">
            Return to{" "}
            <Link href="/signature-tours" className="font-semibold text-ionian-700 underline">
              Signature Tours
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-ionian-700 underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
