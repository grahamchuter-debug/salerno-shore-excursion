import Link from "next/link";
import { notFound } from "next/navigation";
import { excursions, getAllExcursionSlugs, getExcursionBySlug } from "@/data/excursions";
import { excursionPageMetadata } from "@/lib/seo";
import { getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { EditorialBadge } from "@/components/EditorialBadge";
import { FAQSection } from "@/components/FAQSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { signatureTourDisclosures } from "@/data/signature-tours";

export function generateStaticParams() {
  return getAllExcursionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ex = getExcursionBySlug(slug);
  if (!ex) return {};
  return excursionPageMetadata(slug, ex.seoTitle, ex.metaDescription);
}

export default async function ExcursionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ex = getExcursionBySlug(slug);
  if (!ex) notFound();

  const image = getExcursionImage(slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Shore excursions", path: "/shore-excursions" },
    { name: ex.title, path: `/shore-excursions/${slug}` },
  ];
  const related = ex.relatedExcursionSlugs
    .map((s) => getExcursionBySlug(s))
    .filter(Boolean);
  const ctaLabel = ex.ctaLabel ?? "Check Partner Availability";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(ex.faqs),
          articleSchema({
            title: ex.title,
            description: ex.metaDescription,
            path: `/shore-excursions/${slug}`,
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
          {ex.badge ? (
            <div className="mt-4">
              <EditorialBadge badge={ex.badge} />
            </div>
          ) : null}
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {ex.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/90">{ex.tagline}</p>
        </div>
      </section>

      <article className="section-padding">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.4fr_0.75fr]">
          <div className="prose-body max-w-3xl">
            <p className="text-lg text-volcanic-800">{ex.overview}</p>
            {ex.body.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}

            <h2>Why we recommend it</h2>
            <p>{ex.whyRecommend}</p>

            <h2>Highlights</h2>
            <ul>
              {ex.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <h2>Planning notes</h2>
            <p>{ex.planningCaveat}</p>
            <p>{ex.portLogistics}</p>
            <p>
              <strong>Cruise suitability:</strong> {ex.cruiseSuitability}
            </p>

            <h2>Tips</h2>
            <ul>
              {ex.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            {related.length > 0 ? (
              <>
                <h2>Related excursions</h2>
                <ul>
                  {related.map((r) =>
                    r ? (
                      <li key={r.slug}>
                        <Link href={`/shore-excursions/${r.slug}`}>{r.title}</Link>
                      </li>
                    ) : null,
                  )}
                </ul>
              </>
            ) : null}

            <p className="mt-8">
              <Link href="/signature-tours">Compare with our Signature Tours</Link>
              {" · "}
              <Link href="/shore-excursions">All Salerno excursions</Link>
            </p>
          </div>

          <aside className="space-y-6">
            <div className="card-feature">
              <h2 className="font-display text-xl font-semibold">At a glance</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold">Duration</dt>
                  <dd>{ex.duration}</dd>
                </div>
                {ex.groupType ? (
                  <div>
                    <dt className="font-semibold">Group format</dt>
                    <dd>{ex.groupType}</dd>
                  </div>
                ) : null}
                {ex.activityLevel ? (
                  <div>
                    <dt className="font-semibold">Activity</dt>
                    <dd>{ex.activityLevel}</dd>
                  </div>
                ) : null}
                {ex.foodBeverage ? (
                  <div>
                    <dt className="font-semibold">Food & beverage</dt>
                    <dd>{ex.foodBeverage}</dd>
                  </div>
                ) : null}
                {ex.locations?.length ? (
                  <div>
                    <dt className="font-semibold">Locations</dt>
                    <dd>{ex.locations.join(", ")}</dd>
                  </div>
                ) : null}
                {ex.supplier ? (
                  <div>
                    <dt className="font-semibold">Supplier</dt>
                    <dd>{ex.supplier.name}</dd>
                  </div>
                ) : null}
                {ex.suitabilityLabel ? (
                  <div>
                    <dt className="font-semibold">Editorial suitability</dt>
                    <dd>{ex.suitabilityLabel}</dd>
                  </div>
                ) : null}
              </dl>
              {ex.supplier?.url ? (
                <>
                  <a
                    href={ex.supplier.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="btn-accent mt-6 w-full"
                  >
                    {ctaLabel}
                  </a>
                  <a
                    href={ex.supplier.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="btn-secondary mt-3 w-full text-center"
                  >
                    See Dates and Prices
                  </a>
                </>
              ) : (
                <Link href="/contact" className="btn-accent mt-6 w-full">
                  Enquire
                </Link>
              )}
              <p className="mt-3 text-xs text-volcanic-500">
                {signatureTourDisclosures.segContrast} Prices and live availability are confirmed on
                the partner page. We may earn a commission from qualifying bookings.
              </p>
            </div>
          </aside>
        </div>
      </article>

      <FAQSection faqs={ex.faqs} heading={`${ex.title} FAQs`} />

      <section className="section-padding pt-0">
        <div className="container-wide">
          <h2 className="section-title">More Salerno options</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {excursions
              .filter((e) => e.slug !== slug)
              .slice(0, 6)
              .map((e) => (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="pill">
                  {e.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
