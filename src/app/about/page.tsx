import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About Salerno Shore Excursion",
  description:
    "Salerno Shore Excursion helps cruise passengers plan Campanian days ashore — with selected Signature Tours and carefully compared partner alternatives.",
  path: "/about",
});

export default function AboutPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs)]} />
      <section className="section-padding">
        <div className="container-wide max-w-3xl prose-body">
          <Breadcrumbs items={crumbs} />
          <p className="section-eyebrow !mt-0">About</p>
          <h1 className="section-title mt-2">About {SITE.name}</h1>
          <p className="section-subtitle !mt-4">
            {SITE.philosophy} We publish cruise-specific planning for Salerno as a gateway to
            Pompeii, Vesuvius, the Amalfi Coast and Paestum.
          </p>
          <p>
            Salerno is rarely only about the city beside the ship. For many port calls it is the
            starting point for Pompeii, Mount Vesuvius, Amalfi, Ravello, Positano and Campanian food
            experiences. This site exists to help you choose the best version of that day ashore.
          </p>
          <p>
            Our flagship recommendations are the{" "}
            <Link href="/signature-tours">Salerno Signature Tours</Link>, arranged with Papillon
            Service. We also compare alternative excursions from Shore Excursions Group so you can
            match time, mobility and interests fairly.
          </p>
          <p>
            Read how we decide in our <Link href="/methodology">methodology</Link>, and see our{" "}
            <Link href="/affiliate-disclosure">affiliate disclosure</Link> for commercial
            relationships.
          </p>
        </div>
      </section>
    </>
  );
}
