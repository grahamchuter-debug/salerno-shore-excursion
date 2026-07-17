import {
  destinationIdentity,
  type LogoConcept,
  type LogoTone,
  type LogoVariant,
} from "@/data/destination-identity";

type DestinationLogoProps = {
  variant?: LogoVariant;
  /** Override active concept for local review — defaults to config. */
  concept?: LogoConcept;
  tone?: LogoTone;
  className?: string;
  /** When true, omit the outer accessible name (parent Link provides it). */
  decorative?: boolean;
};

function MarkSvg({
  concept,
  tone,
  size,
}: {
  concept: LogoConcept;
  tone: LogoTone;
  size: number;
}) {
  const onDark = tone === "on-dark";
  const ink = onDark ? "#f7f2e8" : "#1a3344";
  const lemon = onDark ? "#e8d06a" : "#c9a832";
  const soft = onDark ? "rgba(247, 242, 232, 0.32)" : "#e8dfd0";

  if (concept === "harbour-m") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="1" y="1" width="38" height="38" rx="10" stroke={soft} strokeWidth="1.25" />
        <path
          d="M10 27V13.2l6.4 9.3h1.2L24 13.2V27"
          stroke={ink}
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 31c3.1-2.1 6.3-3.1 11-3.1s7.9 1 11 3.1"
          stroke={lemon}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="27.4" cy="12.4" r="1.3" fill={lemon} />
      </svg>
    );
  }

  if (concept === "lemon-coast") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="1" y="1" width="38" height="38" rx="10" stroke={soft} strokeWidth="1.25" />
        <path
          d="M12 28c4-3 8-3 12 0"
          stroke={lemon}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10 24l8-10 6 4 8-8"
          stroke={ink}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="28" cy="14" r="2" fill={lemon} opacity="0.85" />
      </svg>
    );
  }

  // harbour-cliff: Mediterranean harbour line meeting limestone cliff geometry.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1" y="1" width="38" height="38" rx="10" stroke={soft} strokeWidth="1.25" />
      <path
        d="M8 26.5l5.5-9.5 3.5 2.5 4-7 8.5 14"
        stroke={ink}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 30.5c2.8-1.6 5.2-1.6 7.8 0 2.6 1.6 5 1.6 7.7 0 2.7-1.6 5.1-1.6 7.9 0"
        stroke={lemon}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="26.5" cy="15.5" r="1.25" fill={lemon} />
    </svg>
  );
}

/**
 * Reusable World 2.0 destination wordmark for Salerno Shore Excursion.
 * HTML text for accessibility + inline SVG mark (no raster assets).
 */
export function DestinationLogo({
  variant = "full",
  concept = destinationIdentity.logoConcept,
  tone = "default",
  className = "",
  decorative = false,
}: DestinationLogoProps) {
  const { destination, descriptor, strapline, accessibleName } = destinationIdentity;
  const onDark = tone === "on-dark";
  const markSize = variant === "mark" ? 32 : variant === "compact" ? 32 : 34;

  if (variant === "mark") {
    return (
      <span
        className={`inline-flex items-center justify-center ${className}`}
        {...(decorative
          ? { "aria-hidden": true }
          : { role: "img", "aria-label": accessibleName })}
      >
        <MarkSvg concept={concept} tone={tone} size={markSize} />
      </span>
    );
  }

  const titleClass = onDark ? "text-white" : "text-coastal-900";
  const descriptorClass = onDark ? "text-white/75" : "text-coastal-700";
  const straplineClass = onDark ? "text-autumn-300" : "text-tile-600";

  return (
    <span
      className={`inline-flex items-center gap-1.5 min-w-0 sm:gap-2 ${className}`}
      {...(decorative ? { "aria-hidden": true } : {})}
    >
      <MarkSvg concept={concept} tone={tone} size={markSize} />
      <span className="min-w-0 leading-none">
        <span
          className={`block font-display text-[1.05rem] font-semibold tracking-[0.04em] uppercase sm:text-[1.125rem] ${titleClass}`}
        >
          {destination}
        </span>
        <span
          className={`mt-0.5 block text-[0.62rem] font-semibold uppercase tracking-[0.14em] sm:text-[0.68rem] ${descriptorClass}`}
        >
          {descriptor}
        </span>
        {variant === "full" && strapline ? (
          <span
            className={`mt-1 block text-[0.625rem] font-medium uppercase tracking-[0.12em] sm:text-[0.65rem] ${straplineClass}`}
            style={{ letterSpacing: "0.12em" }}
          >
            {strapline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
