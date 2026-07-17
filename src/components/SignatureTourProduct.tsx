import Link from "next/link";
import { FAQSection } from "@/components/FAQSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SignatureTourBadge } from "@/components/SignatureTourBadge";
import { SignatureEnquiryForm } from "@/components/SignatureEnquiryForm";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getSignatureImage } from "@/lib/images";
import { signatureTourEditorial } from "@/data/signature-tours";
import {
  signatureTourDisclosures,
  signatureTourFaqs,
  type SignatureTourConfig,
} from "@/data/signature-tours";

type SignatureTourProductProps = {
  tour: SignatureTourConfig;
  faqs?: typeof signatureTourFaqs;
};

function OptionalEnhancements({ tour }: { tour: SignatureTourConfig }) {
  if (!tour.optionalExtras.length) return null;

  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-semibold text-volcanic-900">
        Optional enhancements
      </h2>
      <p className="mt-2 text-sm text-volcanic-600">
        These items are genuine options — not included in the headline touring day unless your
        written confirmation says otherwise. Prices are confirmed with availability.
      </p>
      <ul className="mt-4 space-y-4">
        {tour.optionalExtras.map((extra) => (
          <li
            key={extra.id}
            className="rounded-xl border border-limestone-200 bg-white p-5 text-sm leading-relaxed"
          >
            <p className="font-semibold text-volcanic-900">
              {extra.label}
              {extra.required ? (
                <span className="ml-2 text-xs font-normal text-volcanic-500">
                  (admission arranged separately unless stated)
                </span>
              ) : null}
            </p>
            <p className="mt-2 text-volcanic-700">{extra.description}</p>
            {extra.priceDisplay === "confirmed-with-availability" ? (
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ionian-700">
                Price confirmed with availability
              </p>
            ) : (
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-volcanic-500">
                Arranged separately unless stated
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function SharedVsPrivate() {
  const { sharedVsPrivate } = signatureTourEditorial;
  return (
    <section className="not-prose my-10">
      <h2 className="font-display text-2xl font-semibold text-volcanic-900">
        {sharedVsPrivate.heading}
      </h2>
      <p className="mt-2 text-sm text-volcanic-600">{sharedVsPrivate.note}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {[sharedVsPrivate.shared, sharedVsPrivate.private].map((fmt) => (
          <div
            key={fmt.id}
            className="rounded-xl border border-limestone-200 bg-limestone-50/80 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-ionian-700">
              {fmt.positioning}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-volcanic-900">
              {fmt.label}
            </h3>
            <p className="mt-1 text-xs font-medium text-maple-700">{fmt.badge}</p>
            <p className="mt-3 text-sm leading-relaxed text-volcanic-700">{fmt.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SignatureTourProduct({ tour, faqs = signatureTourFaqs }: SignatureTourProductProps) {
  const image = getSignatureImage(tour.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Signature Tours", path: "/signature-tours" },
    { name: tour.title, path: tour.path },
  ];
  const pageFaqs = faqs.filter((f) => {
    if (tour.slug.includes("amalfi") && f.question.includes("winery")) return false;
    if (tour.slug.includes("vesuvius") && f.question.includes("Positano")) return false;
    return true;
  });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(pageFaqs),
          articleSchema({
            title: tour.editorialTitle,
            description: tour.subtitle,
            path: tour.path,
            image: image.src,
          }),
        ]}
      />

      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <ResponsiveImage
            image={image}
            role="hero"
            priority
            className="absolute inset-0 block h-full w-full"
            imgClassName="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-overlay" aria-hidden="true" />
        </div>
        <div className="container-wide relative z-10 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Breadcrumbs items={crumbs} light />
          <div className="mt-4 flex flex-wrap gap-2">
            <SignatureTourBadge />
            {tour.badges.slice(0, 3).map((b) => (
              <span key={b} className="pill bg-white/15 text-white border-white/25">
                {b}
              </span>
            ))}
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {tour.editorialTitle}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/90">{tour.subtitle}</p>
        </div>
      </section>

      <article className="section-padding">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.4fr_0.75fr]">
          <div className="prose-body max-w-3xl">
            <p className="text-lg text-volcanic-800">{tour.recommendation}</p>

            {tour.accessibilityWarnings.length ? (
              <div className="not-prose my-8 rounded-xl border-2 border-maple-300 bg-maple-50 p-5">
                <h2 className="font-display text-xl font-semibold text-maple-900">
                  Accessibility and activity warnings
                </h2>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-maple-950">
                  {tour.accessibilityWarnings.map((w) => (
                    <li key={w} className="flex gap-2">
                      <span className="font-bold text-maple-700" aria-hidden="true">
                        !
                      </span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <SharedVsPrivate />

            <h2>Itinerary</h2>
            {tour.itineraryOptions?.length ? (
              <div className="not-prose space-y-4">
                {tour.itineraryOptions.map((opt) => (
                  <div
                    key={opt.id}
                    className={`rounded-xl border p-5 ${
                      opt.recommended
                        ? "border-ionian-300 bg-ionian-50/60"
                        : "border-limestone-200 bg-white"
                    }`}
                  >
                    <h3 className="font-display text-lg font-semibold text-volcanic-900">
                      {opt.title}
                      {opt.recommended ? (
                        <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-ionian-700">
                          Recommended
                        </span>
                      ) : null}
                    </h3>
                    <p className="mt-2 text-sm text-volcanic-700">{opt.positioning}</p>
                    <p className="mt-2 text-sm font-medium text-volcanic-800">
                      Stops: {opt.stops.join(" → ")}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-volcanic-600">
                      {opt.notes.map((n) => (
                        <li key={n}>{n}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul>
                <li>Pompeii archaeological visit</li>
                <li>Mount Vesuvius crater area (subject to park access and mobility suitability)</li>
                <li>Optional winery stop when confirmed for your booking version</li>
              </ul>
            )}

            <h2>What is included</h2>
            <ul>
              {tour.inclusions.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>

            <h2>What is not included</h2>
            <ul>
              {tour.exclusions.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>

            {tour.operationalNotes.length ? (
              <>
                <h2>Operational notes</h2>
                <ul>
                  {tour.operationalNotes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </>
            ) : null}

            <OptionalEnhancements tour={tour} />

            <div className="not-prose mt-10 space-y-3 rounded-xl border border-limestone-200 bg-limestone-50/80 p-5 text-sm leading-relaxed text-volcanic-700">
              <p>{signatureTourDisclosures.operator}</p>
              <p>{signatureTourDisclosures.supporting}</p>
              <p>{signatureTourDisclosures.commercial}</p>
              <p>{signatureTourDisclosures.notExclusive}</p>
              <p>{signatureTourDisclosures.segContrast}</p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="card-feature">
              <h2 className="font-display text-xl font-semibold">At a glance</h2>
              <dl className="mt-4 space-y-3 text-sm">
                {tour.duration ? (
                  <div>
                    <dt className="font-semibold">Duration</dt>
                    <dd>{tour.duration}</dd>
                  </div>
                ) : null}
                <div>
                  <dt className="font-semibold">Group format</dt>
                  <dd>Maximum {tour.maxGuests} guests per vehicle</dd>
                </div>
                <div>
                  <dt className="font-semibold">Local operator</dt>
                  <dd>{tour.localOperator}</dd>
                </div>
                {tour.pickupPoint ? (
                  <div>
                    <dt className="font-semibold">Pickup</dt>
                    <dd>{tour.pickupPoint}</dd>
                  </div>
                ) : null}
              </dl>

              <div className="mt-6 rounded-lg border border-ionian-200 bg-ionian-50/80 p-4 text-sm">
                <p className="font-semibold text-volcanic-900">Capacity</p>
                <p className="mt-1 text-volcanic-700">{signatureTourEditorial.capacityNote}</p>
              </div>

              <p className="mt-4 text-xs text-volcanic-500">
                Pricing is confirmed with availability. No online payment is active on this page.
              </p>

              <Link href="#request-availability" className="btn-accent mt-6 w-full">
                Request Availability
              </Link>
              <Link href="/cruise-planner" className="btn-secondary mt-3 w-full">
                Check Your Sailing
              </Link>
              <Link href="/shore-excursions" className="btn-secondary mt-3 w-full">
                Compare partner excursions
              </Link>
              <Link
                href="/signature-tour-terms"
                className="mt-4 block text-center text-sm font-medium text-ionian-700 underline underline-offset-2"
              >
                Cancellation terms status
              </Link>
            </div>

            <div className="rounded-xl border border-dashed border-limestone-300 bg-white p-4 text-xs text-volcanic-500">
              <p className="font-semibold text-volcanic-700">Image slot reserved</p>
              <p className="mt-1">
                Authorised vehicle and experience photography will replace destination imagery here
                once Papillon permission is confirmed. Slot: {tour.authorisedImageSlot}.
              </p>
            </div>
          </aside>
        </div>

        <div className="container-wide mt-12 max-w-3xl">
          <SignatureEnquiryForm tourId={tour.id} tourTitle={tour.title} />
        </div>
      </article>

      <FAQSection faqs={pageFaqs} heading={`${tour.title} FAQs`} />
    </>
  );
}
