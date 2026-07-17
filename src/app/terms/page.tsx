import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/terms";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: `Terms of use for ${SITE.name} — the basis on which we provide our Salerno and Campania cruise planning guides and information.`,
  path,
  noindex: true,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Terms of Use", path },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Terms of Use", description: `Terms of use for ${SITE.name}.`, path })]} />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="section-title mt-8">Terms of Use</h1>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>{SITE.name} provides planning information and guidance for cruise passengers calling at Salerno. It is offered in good faith for general guidance and does not constitute professional travel advice.</p>
            <p>Excursion operators, transfer times, Amalfi Coast traffic and ship schedules change. Always confirm all-aboard times and bookings with your cruise line and excursion provider before sailing.</p>
            <p>We are not affiliated with any cruise line, the Port of Salerno or excursion operators listed on this site unless explicitly stated.</p>
          </div>
        </div>
      </section>
    </>
  );
}
