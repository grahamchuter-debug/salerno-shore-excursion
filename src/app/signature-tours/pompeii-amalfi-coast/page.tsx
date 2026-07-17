import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { SignatureTourProduct } from "@/components/SignatureTourProduct";
import { getSignatureTour } from "@/data/signature-tours";

const slug = "pompeii-amalfi-coast";

export function generateStaticParams() {
  return [{ slug }];
}

export const metadata = buildMetadata({
  title: "Salerno Signature: Pompeii and the Amalfi Coast",
  description:
    "Selected eight-seat Signature Tour combining Pompeii with a balanced Amalfi Coast finish — honest itinerary options, traffic notes and cruise timing from Salerno.",
  path: `/signature-tours/${slug}`,
});

export default function PompeiiAmalfiCoastPage() {
  const tour = getSignatureTour(slug);
  if (!tour) notFound();
  return <SignatureTourProduct tour={tour} />;
}
