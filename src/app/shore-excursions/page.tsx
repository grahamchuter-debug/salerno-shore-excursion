import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { excursions } from "@/data/excursions";
import { excursionsHubImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { ExcursionCard } from "@/components/ExcursionCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SIGNATURE_TOURS_PATH, signatureTours } from "@/data/signature-tours";
import { SignatureTourBadge } from "@/components/SignatureTourBadge";

export const metadata = buildMetadata({
  title: "Salerno Shore Excursions — Compare Pompeii, Amalfi Coast & Paestum Tours",
  description:
    "Compare Salerno shore excursions for your day ashore: Signature Tours, Pompeii and Vesuvius days, Amalfi Coast touring, Paestum, food walks, private tours and short-call city experiences.",
  path: "/shore-excursions",
});

export default function ShoreExcursionsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Shore excursions", path: "/shore-excursions" },
  ];
  const featuredSignature = signatureTours.find((tour) => tour.enabled);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          itemListSchema({
            name: "Salerno shore excursions",
            description: "Editorial selection of Salerno cruise excursions",
            path: "/shore-excursions",
            items: [
              ...signatureTours
                .filter((tour) => tour.enabled)
                .map((tour) => ({ name: tour.title, path: tour.path })),
              ...excursions.map((e) => ({
                name: e.title,
                path: `/shore-excursions/${e.slug}`,
              })),
            ],
          }),
        ]}
      />

      <section className="section-padding pb-8">
        <div className="container-wide">
          <Breadcrumbs items={crumbs} />
          <p className="section-eyebrow">Salerno cruise excursions</p>
          <h1 className="section-title mt-2">Shore excursions from Salerno</h1>
          <p className="section-subtitle">
            Start with our Signature Tours, then compare partner alternatives for Pompeii, Vesuvius,
            the Amalfi Coast, Paestum, food, private touring and shorter city days.
          </p>
        </div>
      </section>

      {featuredSignature ? (
        <section className="px-4 pb-10 sm:px-6 lg:px-8">
          <div className="container-wide">
            <Link href={SIGNATURE_TOURS_PATH} className="card-signature block overflow-hidden">
              <div className="grid gap-0 md:grid-cols-2">
                <div className="relative min-h-[220px]">
                  <ResponsiveImage
                    image={excursionsHubImage}
                    role="card"
                    className="absolute inset-0 block h-full w-full"
                    imgClassName="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <SignatureTourBadge />
                  <h2 className="mt-3 font-display text-2xl font-semibold text-volcanic-900">
                    Salerno Signature Tours
                  </h2>
                  <p className="mt-2 text-volcanic-700">
                    Two selected eight-seat days — Pompeii with Vesuvius or the Amalfi Coast — paced
                    for real port hours.
                  </p>
                  <p className="mt-4 text-sm font-semibold text-ionian-700">
                    View Signature Tours →
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      <section className="section-padding pt-0">
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {excursions.map((ex) => (
            <ExcursionCard key={ex.slug} excursion={ex} />
          ))}
        </div>
      </section>
    </>
  );
}
