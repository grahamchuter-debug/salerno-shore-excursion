import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { experiencePathsHeading } from "@/data/homepage";

export interface ExperiencePath {
  slug: string;
  title: string;
  tagline: string;
  highlights: string[];
  cta: string;
  href: string;
  imageKey: string;
  wide?: boolean;
}

const DEFAULT_PATHS: ExperiencePath[] = [
  {
    slug: "pompeii-vesuvius",
    title: "Pompeii and Vesuvius",
    tagline:
      "Walk Roman streets preserved by Vesuvius, then continue towards crater views and volcanic landscape.",
    highlights: [
      "Pompeii Archaeological Park",
      "Mount Vesuvius summit approach when access allows",
      "Best on a full port call with suitable mobility",
      "Steep Vesuvius walking — not for all passengers",
      "Featured in our Signature Tours",
    ],
    cta: "Discover Pompeii and Vesuvius",
    href: "/signature-tours/pompeii-vesuvius-winery/",
    imageKey: "vesuvius",
    wide: true,
  },
  {
    slug: "pompeii-amalfi",
    title: "Pompeii and the Amalfi Coast",
    tagline:
      "Combine ancient Pompeii with a carefully chosen coastal town — Amalfi, Ravello or Positano when traffic allows.",
    highlights: [
      "Archaeology plus cliffside scenery",
      "Balanced itineraries beat overloaded checklists",
      "Summer traffic shapes free time",
      "Signature Tour editorial lead",
      "Long port call recommended",
    ],
    cta: "See Signature Tours",
    href: "/signature-tours/pompeii-amalfi-coast/",
    imageKey: "coast",
    wide: true,
  },
  {
    slug: "amalfi-coast",
    title: "Amalfi Coast",
    tagline:
      "Cliffside towns, sea views and lemon-scented lanes — by road or from the water when schedules align.",
    highlights: [
      "Positano, Amalfi and Ravello options",
      "Boat days may reduce road exposure",
      "Steps and slopes in coastal villages",
      "Scenery-first days without Pompeii",
      "Traffic contingency matters",
    ],
    cta: "Explore the Amalfi Coast",
    href: "/amalfi-coast-from-salerno-cruise-port/",
    imageKey: "amalfi",
    wide: false,
  },
  {
    slug: "paestum-food",
    title: "Paestum and local flavours",
    tagline:
      "Greek temples, buffalo mozzarella and Cilento countryside — a calmer alternative to the busiest coast.",
    highlights: [
      "Doric temple archaeology",
      "Mozzarella farm tastings",
      "Generally lighter crowds",
      "Southbound regional day from Salerno",
      "Full port call recommended",
    ],
    cta: "Discover Paestum",
    href: "/paestum-from-salerno-cruise-port/",
    imageKey: "paestum",
    wide: false,
  },
  {
    slug: "salerno-city",
    title: "Salerno itself",
    tagline:
      "Historic streets, the cathedral, waterfront and gardens — the lowest-risk option when time ashore is limited.",
    highlights: [
      "Walkable from many city berths",
      "Cathedral and historic lanes",
      "Street-food and café culture",
      "Ideal for shorter port calls",
      "No long regional transfer required",
    ],
    cta: "Explore Salerno",
    href: "/salerno-cruise-port/",
    imageKey: "harbour",
    wide: false,
  },
  {
    slug: "private",
    title: "Private and small-group touring",
    tagline:
      "Eight-seat vehicles, flexible pacing and cruise-aware timing — alternatives to large-coach days.",
    highlights: [
      "Signature Tours and private formats",
      "Family and friendship groups",
      "Return-to-ship planning built in",
      "Partner private options available",
      "Quality over stop count",
    ],
    cta: "Compare small-group touring",
    href: "/small-group-salerno-shore-excursions/",
    imageKey: "private",
    wide: false,
  },
];

type ExperiencePathsProps = {
  paths?: ExperiencePath[];
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
};

export function ExperiencePaths({
  paths = DEFAULT_PATHS,
  eyebrow = "Choose your Campania day",
  heading = experiencePathsHeading,
  subtitle = "From Pompeii and Vesuvius to the Amalfi Coast, Paestum and Salerno itself — choose the experience that fits your hours ashore, walking tolerance and interests.",
}: ExperiencePathsProps) {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title mt-2 max-w-3xl">{heading}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {paths.map((path) => {
            const image = subjectImages[path.imageKey] ?? subjectImages.pompeii;
            return (
              <Link
                key={path.slug}
                href={path.href}
                className={`card-editorial group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  path.wide ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${path.wide ? "aspect-[21/9]" : "aspect-[16/10]"}`}
                >
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-coastal-900/85 via-coastal-900/25 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {path.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-base italic leading-relaxed text-gray-600">
                    &ldquo;{path.tagline}&rdquo;
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
                    {path.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span
                          className="h-1 w-1 shrink-0 rounded-full bg-maple-500"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 text-sm font-semibold tracking-wide text-maple-600 group-hover:text-maple-500">
                    {path.cta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
