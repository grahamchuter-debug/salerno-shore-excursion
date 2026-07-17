/**
 * Cancellation and missed-port terms structure.
 * Final customer wording is awaiting Papillon contractual confirmation.
 * Do not invent or publish a live cancellation policy.
 * Do not copy terms from unrelated businesses named Papillon.
 */

export type TermsStatus = "awaiting-confirmation" | "approved";

export interface CancellationTermsDraft {
  status: TermsStatus;
  intendedProposition: string;
  publicWordingLive: false;
  fieldsAwaitingConfirmation: string[];
  missedPortProvision: {
    title: string;
    intendedOutcome: string;
    publicWordingLive: false;
  };
  pagePath: string;
}

export const cancellationTermsDraft: CancellationTermsDraft = {
  status: "awaiting-confirmation",
  intendedProposition:
    "Free cancellation up to 24 hours before the excursion — where commercially supportable.",
  publicWordingLive: false,
  fieldsAwaitingConfirmation: [
    "Our cancellation deadline relative to excursion start",
    "Whether the vehicle is charged after customer cancellation",
    "No-show treatment",
    "Ship-misses-port treatment",
    "Weather or access closures (including Vesuvius park)",
    "Late ship arrival",
    "Itinerary disruption and stop changes",
    "Refund timing and method",
    "Optional guide cancellation rules",
    "Optional winery cancellation rules",
    "Admission-ticket non-refundable components",
  ],
  missedPortProvision: {
    title: "Ship does not call at Salerno",
    intendedOutcome: "Full refund — intended outcome, not yet published.",
    publicWordingLive: false,
  },
  pagePath: "/signature-tour-terms/",
};

export const cancellationPublicPlaceholder = {
  headline: "Cancellation and missed-port terms",
  body: [
    "Final cancellation wording for Salerno Signature Tours is awaiting contractual confirmation with our local touring partner.",
    "Until terms are approved, treat any reservation discussion as subject to written confirmation for your sailing.",
    "We will publish clear deadlines, refund rules and missed-port provisions before accepting paid bookings.",
  ],
  intendedNoteHiddenFromPolicy:
    "Internal intended proposition (not live): free cancellation up to 24 hours before the excursion where commercially supportable; full refund if the ship does not call at Salerno.",
} as const;
