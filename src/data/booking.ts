/**
 * Enquiry form data model — kept for later activation.
 * Do not collect public enquiries during the SEO / demand-validation stage.
 */

export { ENQUIRY_PUBLIC_ENABLED as ENQUIRY_FORM_ENABLED, ENQUIRY_TEST_MODE } from "@/lib/runtime";

export type TourVersion = "pompeii-vesuvius-winery" | "pompeii-amalfi-coast";
export type TourFormatChoice = "shared" | "private";

export type EnquiryFieldType =
  | "text"
  | "email"
  | "tel"
  | "date"
  | "number"
  | "select"
  | "textarea"
  | "checkbox";

export interface EnquiryFormField {
  id: string;
  name: string;
  label: string;
  type: EnquiryFieldType;
  required: boolean;
  placeholder?: string;
  helpText?: string;
  options?: { value: string; label: string }[];
  phase: "initial" | "follow-up";
}

/** Frictionless fields for a future activation — form stays disabled publicly. */
export const enquiryFormFields: EnquiryFormField[] = [
  {
    id: "cruise-date",
    name: "cruiseDate",
    label: "Cruise date",
    type: "date",
    required: true,
    phase: "initial",
  },
  {
    id: "cruise-ship",
    name: "cruiseShip",
    label: "Cruise ship",
    type: "text",
    required: true,
    placeholder: "e.g. MSC Seaside",
    phase: "initial",
  },
  {
    id: "preferred-tour",
    name: "preferredTour",
    label: "Preferred Signature Tour",
    type: "select",
    required: true,
    options: [
      { value: "pompeii-vesuvius-winery", label: "Pompeii, Vesuvius and optional winery" },
      { value: "pompeii-amalfi-coast", label: "Pompeii and the Amalfi Coast" },
    ],
    phase: "initial",
  },
  {
    id: "passengers",
    name: "passengers",
    label: "Number of passengers",
    type: "number",
    required: true,
    helpText: "Maximum eight guests per vehicle for Signature Tours.",
    phase: "initial",
  },
  {
    id: "contact-name",
    name: "contactName",
    label: "Name",
    type: "text",
    required: true,
    phase: "initial",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    phase: "initial",
  },
  {
    id: "phone",
    name: "phone",
    label: "Mobile or WhatsApp",
    type: "tel",
    required: true,
    phase: "initial",
  },
];

export const enquiryActivationGates = [
  "Enough traffic to justify an operational response process",
  "Papillon discounted rates and operational terms confirmed",
  "Destination inbox confirmed",
  "Privacy wording complete",
  "Notification delivery tested",
  "Spam protection working",
] as const;

export const bookingDataModelNotes = [
  "Site stage is SEO and demand validation — not active booking.",
  "Do not publish prices, deposits, cancellation or payment terms yet.",
  "Do not collect public enquiries merely to test traffic.",
  "Validate impressions, organic visits, Signature engagement, then activate.",
] as const;
