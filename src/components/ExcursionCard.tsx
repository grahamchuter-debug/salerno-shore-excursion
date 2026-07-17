import Link from "next/link";
import { EditorialBadge } from "@/components/EditorialBadge";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { getExcursionImage } from "@/lib/images";
import { PRODUCT_TIERS } from "@/lib/site";
import type { ExcursionPage } from "@/data/types";

type ExcursionCardProps = {
  excursion: ExcursionPage;
  className?: string;
};

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-gray-400">
        {label}
      </dt>
      <dd className="mt-0.5 text-sm font-medium text-gray-800">{value}</dd>
    </div>
  );
}

function tierLabel(excursion: ExcursionPage): string | null {
  if (excursion.badge === "signature-tour") {
    return PRODUCT_TIERS.signature;
  }
  if (excursion.supplier?.kind === "shore-excursions-group") {
    return "Partner excursion";
  }
  return null;
}

function ctaLabel(excursion: ExcursionPage): string {
  if (excursion.ctaLabel) {
    return excursion.ctaLabel;
  }
  if (excursion.supplier?.kind === "shore-excursions-group") {
    return "Check Partner Availability";
  }
  return "View Excursion Details";
}

/**
 * Editorial excursion card. Renders a single at-most badge, key logistics
 * (duration, group, activity, food), the locations visited, an honest summary
 * and a plain supplier label so passengers know who runs the day.
 */
export function ExcursionCard({ excursion, className = "" }: ExcursionCardProps) {
  const image = getExcursionImage(excursion.slug);
  const href = `/shore-excursions/${excursion.slug}`;
  const summary = excursion.cruiseSuitability
    ? excursion.tagline
    : excursion.overview || excursion.tagline;
  const label = tierLabel(excursion);
  const actionLabel = ctaLabel(excursion);

  return (
    <Link
      href={href}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <ResponsiveImage
          image={image}
          role="card"
          imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-volcanic-900/45 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {excursion.badge ? <EditorialBadge badge={excursion.badge} /> : null}
          {label && excursion.badge !== "signature-tour" ? (
            <span className="badge-secondary">{label}</span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-ionian-800">
          {excursion.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{summary}</p>

        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-gray-100 pt-4">
          <MetaItem label="Duration" value={excursion.duration} />
          {excursion.groupType ? <MetaItem label="Group" value={excursion.groupType} /> : null}
          {excursion.activityLevel ? (
            <MetaItem label="Activity" value={excursion.activityLevel} />
          ) : null}
          {excursion.foodBeverage ? <MetaItem label="Food" value={excursion.foodBeverage} /> : null}
        </dl>

        {excursion.locations && excursion.locations.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {excursion.locations.slice(0, 4).map((loc) => (
              <span key={loc} className="pill">
                {loc}
              </span>
            ))}
          </div>
        ) : null}

        {excursion.cruiseSuitability ? (
          <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-gray-500">
            <svg
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-citrus-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <span>{excursion.cruiseSuitability}</span>
          </p>
        ) : null}

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          {excursion.supplier ? (
            <span className="text-[0.7rem] text-gray-400">
              Operated by {excursion.supplier.name}
            </span>
          ) : (
            <span />
          )}
          <span className="text-sm font-semibold text-ionian-700 group-hover:text-ionian-600">
            {actionLabel} →
          </span>
        </div>
      </div>
    </Link>
  );
}
