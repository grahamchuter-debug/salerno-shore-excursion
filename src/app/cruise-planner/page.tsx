import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SalernoCruisePlanner } from "@/components/SalernoCruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Salerno cruise plan. Enter your port hours, party size, interests, mobility and travel style for editorial recommendations across Pompeii, Vesuvius, the Amalfi Coast and Salerno city.";

export const metadata = buildMetadata({
  title: "Salerno Cruise Planner — Campania Port Day Itinerary",
  description,
  path,
  keywords: [
    "Salerno cruise planner",
    "Campania cruise day plan",
    "Salerno port day itinerary",
    "Pompeii and Amalfi from Salerno planner",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Salerno Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({ title: "Salerno Cruise Planner", description, path }),
        ]}
      />
      <PageHero
        title="Salerno Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for Pompeii, Vesuvius, the Amalfi Coast, Paestum and historic Salerno."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <SalernoCruisePlanner />
        </div>
      </section>
    </>
  );
}
