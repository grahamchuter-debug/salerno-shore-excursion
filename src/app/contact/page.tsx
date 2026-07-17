import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contact Salerno Shore Excursion",
  description:
    "Enquire about Salerno Signature Tours or ask for help choosing a Salerno shore excursion for your port call.",
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
          <p className="section-eyebrow">Enquiry</p>
          <h1 className="section-title mt-2">Contact us</h1>
          <p className="section-subtitle">
            Ask about Signature Tour availability for your sailing, or request help comparing Salerno
            excursion options. We reply by email.
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
            <h2>What happens next</h2>
            <p>
              For Signature Tour enquiries we confirm whether the requested date can be operated,
              clarify format and timing, and share price details before you commit. Direct online
              checkout is not live yet — availability requests will open once operational
              confirmation is complete.
            </p>
            <p>
              For partner excursions we can help you compare formats, then you complete booking on
              the relevant supplier page where prices are current.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
