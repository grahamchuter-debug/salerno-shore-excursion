import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Signature Tour Terms — Not Published Yet",
  description:
    "Cancellation, deposit and payment terms for Salerno Signature Tours will be published only when direct booking is activated.",
  path: "/signature-tour-terms",
  noindex: true,
});

export default function SignatureTourTermsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Signature Tours", path: "/signature-tours" },
    { name: "Terms", path: "/signature-tour-terms" },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <p className="section-eyebrow mt-6">Not published yet</p>
          <h1 className="section-title mt-2">Cancellation and payment terms</h1>
          <p className="mt-6 text-base leading-relaxed text-volcanic-700">
            Cancellation, deposit and payment terms are not published on this site yet. They will be
            added only when discounted supplier rates are agreed, direct booking is activated,
            operator responsibility is confirmed, missed-port arrangements are documented, refund
            responsibility is clear, and optional extras have confirmed terms.
          </p>
          <p className="mt-4 text-base leading-relaxed text-volcanic-700">
            Until then, no checkout, deposit, payment or booking-policy components are active. This
            website is an SEO and planning resource for Salerno cruise passengers.
          </p>
          <p className="mt-10 text-sm text-volcanic-600">
            Return to{" "}
            <Link href="/signature-tours" className="font-semibold text-ionian-700 underline">
              Signature Tours
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
