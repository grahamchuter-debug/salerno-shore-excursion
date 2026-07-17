import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SignatureTourBadge } from "@/components/SignatureTourBadge";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { getGuideImage } from "@/lib/images";
import {
  SIGNATURE_TOURS_PATH,
  signatureTourEditorial,
  signatureTours,
  getSignatureTourCta,
} from "@/data/signature-tours";

export const metadata = buildMetadata({
  title: "Salerno Signature Tours — Pompeii, Vesuvius & Amalfi Coast",
  description:
    "Two selected eight-seat Signature Tours from Salerno cruise port — Pompeii with Vesuvius or the Amalfi Coast, paced honestly for your port day.",
  path: "/signature-tours",
  keywords: [
    "Salerno Signature Tours",
    "Pompeii from Salerno",
    "Vesuvius from Salerno",
    "Amalfi Coast from Salerno",
  ],
});

export default function SignatureToursPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Signature Tours", path: SIGNATURE_TOURS_PATH },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          itemListSchema({
            name: "Salerno Signature Tours",
            description: signatureTourEditorial.introduction,
            path: SIGNATURE_TOURS_PATH,
            items: signatureTours.map((t) => ({ name: t.title, path: t.path })),
          }),
        ]}
      />

      <section className="section-padding pb-8">
        <div className="container-wide">
          <Breadcrumbs items={crumbs} />
          <p className="section-eyebrow">{signatureTourEditorial.eyebrow}</p>
          <h1 className="section-title mt-2">Salerno Signature Tours</h1>
          <p className="section-subtitle">{signatureTourEditorial.introduction}</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-volcanic-600">
            {signatureTourEditorial.honestyPrinciple}
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide grid gap-8">
          {signatureTours.map((tour) => {
            const imageKey = tour.slug.includes("vesuvius") ? "greek-theatre" : "coast";
            const cta = getSignatureTourCta(tour);
            return (
              <Link
                key={tour.id}
                href={tour.path}
                className="card-signature block overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className="grid gap-0 md:grid-cols-2">
                  <div className="relative min-h-[220px]">
                    <ResponsiveImage
                      image={getGuideImage(imageKey)}
                      role="card"
                      className="absolute inset-0 block h-full w-full"
                      imgClassName="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <SignatureTourBadge />
                    <h2 className="mt-3 font-display text-2xl font-semibold text-volcanic-900">
                      {tour.title}
                    </h2>
                    <p className="mt-2 text-volcanic-700">{tour.subtitle}</p>
                    <p className="mt-3 text-sm text-volcanic-600">{tour.recommendation}</p>
                    <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                      {tour.duration ? (
                        <div>
                          <dt className="font-semibold text-volcanic-900">Duration</dt>
                          <dd className="text-volcanic-700">{tour.duration}</dd>
                        </div>
                      ) : null}
                      <div>
                        <dt className="font-semibold text-volcanic-900">Capacity</dt>
                        <dd className="text-volcanic-700">Maximum {tour.maxGuests} guests</dd>
                      </div>
                    </dl>
                    <p className="mt-4 text-sm font-semibold text-ionian-700">{cta.label} →</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
