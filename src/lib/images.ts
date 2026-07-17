export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero-home",
    "Sunlit Amalfi Coast cliffs and sea — gateway views from a Salerno cruise day",
  ),
  ogDefault: img(
    "og-default",
    "Pompeii forum with Mount Vesuvius beyond — Salerno shore excursion planning",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Salerno Shore Excursion",
  },
  port: img("cruise-port", "Salerno harbour and cruise waterfront on the Tyrrhenian coast"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  pompeii: img("pompeii", "Ancient streets and ruins at Pompeii"),
  vesuvius: img("vesuvius", "Mount Vesuvius crater landscape above Campania"),
  vineyard: img("vineyard", "Vineyards on the volcanic slopes beneath Vesuvius"),
  amalfi: img("amalfi", "Amalfi harbour and cliffside town"),
  ravello: img("ravello", "Ravello gardens and coastal views"),
  positano: img("positano", "Positano stacked above the Amalfi Coast"),
  paestum: img("paestum", "Greek temples at Paestum in the Campanian countryside"),
  food: img("food", "Buffalo mozzarella and Campanian flavours"),
  boat: img("boat", "Boat-based views along the Amalfi Coast"),
  cathedral: img("cathedral", "Cathedral of St Matthew in Salerno"),
  harbour: img("harbour", "Salerno harbour and marina"),
  "salerno-waterfront": img("salerno-waterfront", "Salerno lungomare and seafront promenade"),
  "salerno-centro": img("salerno-centro", "Salerno historic centre streets"),
  coast: img("coast", "Amalfi Coast cliffs and Tyrrhenian shoreline"),
  private: img("private", "Scenic coastal road touring from Salerno"),
  walking: img("walking", "Walking Salerno historic streets near the cruise port"),
  compare: img("compare", "Comparing Salerno shore excursion options"),
  family: img("family", "Exploring Campania on a Salerno port call"),
  wine: img("wine", "Campanian vineyard landscape"),
  "hero-home": img("hero-home", "Amalfi Coast atmosphere from a Salerno day ashore"),
  "cruise-port": img("cruise-port", "Salerno cruise port and harbour"),
  port: img("cruise-port", "Salerno cruise port and harbour"),
  "og-default": img("og-default", "Pompeii and Vesuvius — Salerno shore excursions"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "amalfi-coast-small-group": "positano",
  "discover-the-amalfi-coast": "ravello",
  "walking-tour-historic-salerno": "salerno-centro",
  "taste-of-sorrento-from-salerno": "coast",
  "pompeii-skip-the-line-from-salerno": "pompeii",
  "paestum-mozzarella-from-salerno": "paestum",
  "see-and-sail-amalfi-coast": "boat",
  "ravello-amalfi-small-group": "ravello",
  "pompeii-herculaneum-small-group": "pompeii",
  "pompeii-amalfi-coast-highlights": "amalfi",
  "pompeii-vesuvius-small-group": "vesuvius",
  "pompeii-sorrento-coast": "coast",
  "pompeii-half-day": "pompeii",
  "street-food-salerno": "food",
  "private-naples-caserta": "private",
  "private-pompeii-amalfi": "amalfi",
  "private-pompeii-herculaneum": "pompeii",
  "private-pompeii-naples": "pompeii",
  "private-pompeii-sorrento-positano": "positano",
  "private-positano-amalfi-ravello": "positano",
  "private-salerno-paestum": "paestum",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "coast");
}

export const excursionsHubImage = pick("coast");

const guideImageKeys: Record<string, string> = {
  "salerno-cruise-port": "cruise-port",
  "salerno-cruise-port-guide": "cruise-port",
  "salerno-cruise-schedule": "harbour",
  "salerno-cruise-terminal": "cruise-port",
  "getting-around-salerno-from-the-cruise-port": "salerno-waterfront",
  "can-you-walk-from-salerno-cruise-port": "walking",
  "pompeii-from-salerno-cruise-port": "pompeii",
  "mount-vesuvius-from-salerno": "vesuvius",
  "amalfi-coast-from-salerno-cruise-port": "coast",
  "positano-from-salerno-cruise-port": "positano",
  "amalfi-from-salerno-cruise-port": "amalfi",
  "ravello-from-salerno-cruise-port": "ravello",
  "paestum-from-salerno-cruise-port": "paestum",
  "herculaneum-from-salerno": "pompeii",
  "salerno-food-guide": "food",
  "port-guide": "cruise-port",
};

const comparisonImageKeys: Record<string, string> = {
  "best-salerno-shore-excursions": "compare",
  "pompeii-or-amalfi-coast-from-salerno": "compare",
  "pompeii-and-amalfi-coast-in-one-day": "coast",
  "positano-or-amalfi-or-ravello": "positano",
  "pompeii-or-paestum": "paestum",
  "salerno-or-amalfi-coast": "salerno-waterfront",
  "small-group-salerno-shore-excursions": "private",
  "private-salerno-shore-excursions": "private",
};

const signatureImageKeys: Record<string, string> = {
  "pompeii-vesuvius-winery": "vesuvius",
  "pompeii-amalfi-coast": "positano",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getGuideImage(key: string): SiteImage {
  return pick(guideImageKeys[key] ?? key);
}

export function getSignatureImage(slug: string): SiteImage {
  return pick(signatureImageKeys[slug] ?? "coast");
}

export function getHighlightImage(slug: string): SiteImage {
  return getGuideImage(slug);
}

export function getHotelImage(): SiteImage {
  return siteImages.ogDefault;
}

export function getTransferImage(): SiteImage {
  return pick("cruise-port");
}
