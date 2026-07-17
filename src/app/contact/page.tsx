import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contact Salerno Shore Excursion",
  description:
    "Contact Salerno Shore Excursion for planning questions about Salerno shore excursions, Pompeii, Vesuvius and the Amalfi Coast.",
  path: "/contact",
});

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <p className="section-eyebrow">Planning help</p>
          <h1 className="section-title mt-2">Contact us</h1>
          <p className="section-subtitle">
            Questions about planning a Salerno port day are welcome. Signature Tour reservations are
            not open on this site yet — this is an editorial planning resource while we validate
            demand.
          </p>

          <div className="mt-10 card-feature">
            <h2 className="font-display text-xl font-semibold">Email</h2>
            <p className="mt-3 text-volcanic-700">
              <a
                className="font-semibold text-ionian-700 underline-offset-2 hover:underline"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>
            </p>
            <p className="mt-4 text-sm text-volcanic-600">
              Please include your cruise line, ship name, Salerno call date, party size and whether
              you are enquiring about a Signature Tour or a partner excursion.
            </p>
          </div>

          <div className="prose-body mt-10">
            <h2>What this site is for now</h2>
            <p>
              Salerno Shore Excursion is currently an editorial planning and demand-validation
              resource. We are not collecting Signature Tour reservations or deposits on this site.
              Use the Signature and partner pages to compare realistic port-day options.
            </p>
            <p>
              For partner excursions listed through Shore Excursions Group, complete any booking on
              the supplier page where live prices and availability are shown.
            </p>
            <p>
              When Signature Tour reservations are later activated, commercial terms — including
              format, inclusions and pricing — will be confirmed in writing before you commit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
