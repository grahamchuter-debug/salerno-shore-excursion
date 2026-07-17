import Link from "next/link";
import {
  SIGNATURE_TOURS_PATH,
  signatureTourEditorial,
  signatureTours,
  signatureTourDisclosures,
} from "@/data/signature-tours";
import { SignatureTourBadge } from "@/components/SignatureTourBadge";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { getGuideImage } from "@/lib/images";

export function SignatureTourFeature() {
  const image = getGuideImage("coast");

  return (
    <section className="section-padding" aria-labelledby="signature-tour-heading">
      <div className="container-wide">
        <div className="card-signature overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-full">
              <ResponsiveImage
                image={image}
                role="guide"
                className="absolute inset-0 block h-full w-full"
                imgClassName="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="section-eyebrow text-citrus-700">{signatureTourEditorial.eyebrow}</p>
              <div className="mt-3">
                <SignatureTourBadge />
              </div>
              <h2 id="signature-tour-heading" className="section-title mt-4">
                Selected eight-seat days from Salerno
              </h2>
              <p className="mt-2 text-lg text-volcanic-700/90">{signatureTourEditorial.introduction}</p>

              <ul className="mt-6 space-y-4">
                {signatureTours.map((tour) => (
                  <li key={tour.id} className="rounded-xl border border-limestone-200 bg-white/80 p-4">
                    <Link href={tour.path} className="group block">
                      <h3 className="font-display text-lg font-semibold text-volcanic-900 group-hover:text-ionian-800">
                        {tour.title}
                      </h3>
                      <p className="mt-1 text-sm text-volcanic-600">{tour.subtitle}</p>
                      {tour.duration ? (
                        <p className="mt-2 text-xs text-volcanic-500">{tour.duration} · max {tour.maxGuests} guests</p>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-limestone-200 bg-limestone-50/80 p-4">
                <h3 className="font-display text-lg font-semibold text-volcanic-900">
                  Why small-group Signature Tours
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-volcanic-700">
                  {signatureTourEditorial.whySmallGroup}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-volcanic-700">
                  {signatureTourEditorial.honestyPrinciple}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={SIGNATURE_TOURS_PATH} className="btn-accent">
                  View Our Signature Tours
                </Link>
                <Link href="/shore-excursions" className="btn-secondary">
                  Compare All Salerno Excursions
                </Link>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-volcanic-500">
                {signatureTourDisclosures.operator} {signatureTourDisclosures.notExclusive}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-volcanic-500">
                {signatureTourDisclosures.commercial}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
