import { EditorialBadge } from "@/components/EditorialBadge";

type SignatureTourBadgeProps = {
  className?: string;
  label?: string;
};

/**
 * Thin wrapper around EditorialBadge for Salerno Signature Tours.
 *
 * The Signature Tour is the highest editorial tier — it must NEVER be shown
 * alongside an Editor's Choice badge. This component intentionally renders the
 * signature badge only, so there is no way to stack the two.
 */
export function SignatureTourBadge({ className = "", label }: SignatureTourBadgeProps) {
  return (
    <EditorialBadge
      badge="signature-tour"
      label={label ?? "Salerno Signature Tour"}
      className={className}
    />
  );
}
