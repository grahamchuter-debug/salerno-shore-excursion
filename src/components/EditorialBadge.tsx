import { type EditorialBadge as EditorialBadgeType, editorialBadgeLabels } from "@/data/badges";

type EditorialBadgeProps = {
  badge: EditorialBadgeType;
  /** Override the default label text. */
  label?: string;
  className?: string;
};

/**
 * A small citrus-gold compass/seal mark for the Signature Tour tier.
 * Deliberately restrained — no gradient, no emoji, no oversized gold.
 */
function SignatureSeal({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M8 4.4l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1z" />
    </svg>
  );
}

/**
 * Reusable editorial badge covering the full World 2.0 hierarchy.
 *
 * - `signature-tour`: premium but restrained — soft limestone chip, thin
 *   charcoal border and a small citrus-gold seal. Highest tier.
 * - everything else: a quiet secondary chip so nothing competes visually
 *   with the Signature Tour.
 */
export function EditorialBadge({ badge, label, className = "" }: EditorialBadgeProps) {
  const text = label ?? editorialBadgeLabels[badge];

  if (badge === "signature-tour") {
    return (
      <span className={`badge-signature ${className}`}>
        <SignatureSeal className="h-3.5 w-3.5 text-tile-600" />
        <span>{text}</span>
      </span>
    );
  }

  if (badge === "editors-choice") {
    return (
      <span className={`badge-editors-choice ${className}`}>
        <span>{text}</span>
      </span>
    );
  }

  return (
    <span className={`badge-secondary ${className}`}>
      <span>{text}</span>
    </span>
  );
}
