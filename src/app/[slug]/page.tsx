import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { ComparisonContentPage, GuideContentPage } from "@/components/ContentPage";
import { getAllComparisonSlugs, getComparisonBySlug } from "@/data/comparisons";
import { getAllGuideSlugs, getGuideBySlug } from "@/data/guides";

export function generateStaticParams() {
  const guideSlugs = getAllGuideSlugs();
  const comparisonSlugs = getAllComparisonSlugs();
  const slugs = [...new Set([...guideSlugs, ...comparisonSlugs])];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (guide) {
    return buildMetadata({
      title: guide.seoTitle,
      description: guide.metaDescription,
      path: `/${slug}`,
    });
  }
  const comparison = getComparisonBySlug(slug);
  if (comparison) {
    return buildMetadata({
      title: comparison.seoTitle,
      description: comparison.metaDescription,
      path: `/${slug}`,
    });
  }
  return {};
}

export default async function DynamicContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (guide) return <GuideContentPage guide={guide} />;

  const comparison = getComparisonBySlug(slug);
  if (comparison) return <ComparisonContentPage comparison={comparison} />;

  notFound();
}
