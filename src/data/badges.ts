/**
 * Editorial badge hierarchy for World 2.0.
 * Signature Tour is the highest tier — do not also apply Editor's Choice.
 */
export type EditorialBadge =
  | "signature-tour"
  | "editors-choice"
  | "best-first-time"
  | "best-private"
  | "best-value"
  | "best-short-call"
  | "best-food"
  | "best-active"
  | "best-amalfi"
  | "best-pompeii"
  | "best-boat"
  | "best-paestum"
  | "best-repeat"
  | "best-independent"
  | "best-food-wine";

export const editorialBadgeLabels: Record<EditorialBadge, string> = {
  "signature-tour": "Signature Tour",
  "editors-choice": "Editor's Choice",
  "best-first-time": "Best for First-Time Visitors",
  "best-private": "Best Private Option",
  "best-value": "Best Value",
  "best-short-call": "Best Short Port Call",
  "best-food": "Best for Food Lovers",
  "best-active": "Best Active Day",
  "best-amalfi": "Best for the Amalfi Coast",
  "best-pompeii": "Best for Pompeii",
  "best-boat": "Best Boat Day",
  "best-paestum": "Best for Paestum",
  "best-repeat": "Best for Repeat Visitors",
  "best-independent": "Best Independent-Style Option",
  "best-food-wine": "Best Food and Wine Day",
};
