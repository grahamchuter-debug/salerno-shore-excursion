import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { SignatureTourProduct } from "@/components/SignatureTourProduct";
import { getSignatureTour } from "@/data/signature-tours";

const slug = "pompeii-vesuvius-winery";

export function generateStaticParams() {
  return [{ slug }];
}

export const metadata = buildMetadata({
  title: "Salerno Signature: Pompeii, Vesuvius and Volcanic Wines",
  description:
    "Selected eight-seat Signature Tour from Salerno — Pompeii, Mount Vesuvius and optional winery. Mobility warnings, optional costs and cruise-aware pacing.",
  path: `/signature-tours/${slug}`,
});

export default function PompeiiVesuviusWineryPage() {
  const tour = getSignatureTour(slug);
  if (!tour) notFound();
  return <SignatureTourProduct tour={tour} />;
}
