import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description:
    "How Salerno Shore Excursion earns from Signature Tour enquiries and affiliate excursion links, and how that relates to editorial recommendations.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Affiliate disclosure", path: "/affiliate-disclosure" },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <section className="section-padding">
        <div className="container-wide max-w-3xl prose-body">
          <Breadcrumbs items={crumbs} />
          <h1 className="section-title">Affiliate disclosure</h1>
          <p>
            Some links on this website are affiliate or partner links. If you book through them, we
            may earn a commission at no additional cost to you.
          </p>
          <p>
            Our featured <Link href="/signature-tours">Signature Tours</Link> are a direct
            commercial focus arranged with Papillon Service. We may earn more from bookings of
            these selected experiences than from some alternative excursions. They remain our leading
            recommendations where the itinerary, format and cruise-day suitability align with our
            editorial criteria.
          </p>
          <p>
            Alternative Salerno excursions are typically offered via Shore Excursions Group and
            similar partners. Editorial pages still present shorter calls, city walks, food
            experiences and private options when they are the better fit.
          </p>
          <p>
            Read more in our <Link href="/methodology">methodology</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
