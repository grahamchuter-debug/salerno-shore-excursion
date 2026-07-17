import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getGuideImage } from "@/lib/images";
import type { Comparison, FAQ, GuidePage } from "@/data/types";
import { ComparisonTable } from "@/components/ComparisonTable";

export function GuideContentPage({ guide }: { guide: GuidePage }) {
  const image = getGuideImage(guide.imageKey || guide.slug);
  const path = `/${guide.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: guide.title, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(guide.faqs),
          articleSchema({
            title: guide.title,
            description: guide.metaDescription,
            path,
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
          <p className="mt-4 text-sm uppercase tracking-[0.14em] text-citrus-300">{guide.tagline}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85">{guide.overview}</p>
        </div>
      </section>
      <article className="section-padding">
        <div className="container-wide prose-body max-w-3xl">
          {guide.body.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
          <h2>Highlights</h2>
          <ul>
            {guide.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <h2>Tips</h2>
          <ul>
            {guide.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {guide.relatedSlugs?.length ? (
            <>
              <h2>Related guides</h2>
              <ul>
                {guide.relatedSlugs.map((slug) => (
                  <li key={slug}>
                    <Link href={slug.startsWith("/") ? slug : `/${slug}`}>{slug.replace(/-/g, " ")}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </article>
      <FAQSection faqs={guide.faqs} />
    </>
  );
}

export function ComparisonContentPage({ comparison }: { comparison: Comparison }) {
  const image = getGuideImage(comparison.imageKey || "compare");
  const path = `/${comparison.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: comparison.title, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          faqSchema(comparison.faqs),
          articleSchema({
            title: comparison.title,
            description: comparison.metaDescription,
            path,
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
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {comparison.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85">{comparison.summary}</p>
        </div>
      </section>
      <article className="section-padding">
        <div className="container-wide max-w-4xl">
          <div className="prose-body">
            {comparison.overview.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
            <h2>Editorial verdict</h2>
            <p>{comparison.verdict}</p>
          </div>
          {comparison.comparisonTable?.length ? (
            <div className="mt-10 overflow-x-auto">
              <ComparisonTable
                rows={comparison.comparisonTable}
                optionA={comparison.optionA || "Option A"}
                optionB={comparison.optionB || "Option B"}
              />
            </div>
          ) : null}
          {comparison.guideItems?.length ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {comparison.guideItems.map((item) => (
                <Link key={item.slug} href={item.href} className="nav-card">
                  <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                  <p className="mt-2 text-sm text-volcanic-600">{item.reason}</p>
                  <p className="mt-2 text-xs text-volcanic-500">{item.topExcursion}</p>
                </Link>
              ))}
            </div>
          ) : null}
          {comparison.relatedSlugs?.length ? (
            <div className="prose-body mt-10">
              <h2>Related</h2>
              <ul>
                {comparison.relatedSlugs.map((slug) => (
                  <li key={slug}>
                    <Link href={slug.startsWith("/") ? slug : `/${slug}`}>{slug.replace(/-/g, " ")}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </article>
      <FAQSection faqs={comparison.faqs as FAQ[]} />
    </>
  );
}
