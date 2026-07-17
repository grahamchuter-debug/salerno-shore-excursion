import type { Metadata } from "next";
import { SITE } from "./site";
import { absoluteUrl } from "./paths";
import { IS_PREVIEW } from "./runtime";
import {
  siteImages,
  getExcursionImage,
  getGuideImage,
  getComparisonImage,
} from "./images";

export interface PageSEO {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
}

export function fullTitle(title: string, path: string): string {
  return path === "/" ? title : `${title} | ${SITE.name}`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
  imageAlt,
  noindex = false,
}: PageSEO): Metadata {
  // Always canonicalise to production apex — never workers.dev
  const url = absoluteUrl(SITE.url, path);
  const ogTitle = fullTitle(title, path);
  const ogImage = image ?? siteImages.ogDefault.src;
  const ogImageAlt = imageAlt ?? siteImages.ogDefault.alt;
  const blockIndexing = noindex || IS_PREVIEW;

  return {
    title: path === "/" ? { absolute: ogTitle } : title,
    description,
    keywords: [...SITE.keywords, ...keywords],
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: ogTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImage],
    },
    robots: blockIndexing
      ? { index: false, follow: false, nocache: true }
      : { index: true, follow: true },
  };
}

export function excursionPageMetadata(slug: string, title: string, description: string) {
  const image = getExcursionImage(slug);
  return buildMetadata({
    title,
    description,
    path: `/shore-excursions/${slug}`,
    image: image?.src,
    imageAlt: image?.alt,
  });
}

export function guidePageMetadata(slug: string, title: string, description: string, imageKey?: string) {
  const image = getGuideImage(imageKey ?? slug);
  return buildMetadata({
    title,
    description,
    path: `/${slug}`,
    image: image?.src,
    imageAlt: image?.alt,
  });
}

export function comparisonPageMetadata(slug: string, title: string, description: string) {
  const image = getComparisonImage(slug);
  return buildMetadata({
    title,
    description,
    path: `/${slug}`,
    image: image?.src,
    imageAlt: image?.alt,
  });
}
