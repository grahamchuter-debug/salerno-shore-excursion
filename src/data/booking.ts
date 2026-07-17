/**
 * Signature Tour enquiry form and future direct-booking data model.
 * Public submissions remain disabled until inbox, privacy, spam and ops are ready.
 * Preview builds may enable ENQUIRY_TEST_MODE (non-production label only).
 */

export {
  ENQUIRY_PUBLIC_ENABLED as ENQUIRY_FORM_ENABLED,
  ENQUIRY_TEST_MODE,
  IS_PREVIEW,
} from "@/lib/runtime";

import { FUTURE_PAYMENT_DEFAULT } from "./pricing";
import type { DepartureStatus } from "./capacity";

export type BookingStatus =
  | "draft"
  | "request-submitted"
  | "availability-check"
  | "awaiting-payment"
  | "confirmed"
  | "completed"
  | "cancelled"
  | "waitlisted";

export type PaymentStatus = "not-due" | "awaiting-full-payment" | "paid" | "refunded";

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

/**
 * Initial launch form — frictionless fields only.
 * Mobility, winery, guide and passenger names collected after availability.
 */
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
    id: "format",
    name: "tourFormat",
    label: "Preferred format",
    type: "select",
    required: false,
    options: [
      { value: "shared", label: "Shared small-group (recommended)" },
      { value: "private", label: "Private vehicle (price on request)" },
    ],
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
  {
    id: "mobility",
    name: "mobilityConsiderations",
    label: "Mobility considerations",
    type: "textarea",
    required: false,
    helpText:
      "Collected after availability where possible. Essential for Vesuvius — the summit walk is not suitable for all passengers.",
    phase: "follow-up",
  },
  {
    id: "winery-interest",
    name: "wineryInterest",
    label: "Optional winery interest",
    type: "checkbox",
    required: false,
    phase: "follow-up",
  },
  {
    id: "pompeii-guide",
    name: "pompeiiGuideInterest",
    label: "Optional private Pompeii guide",
    type: "checkbox",
    required: false,
    phase: "follow-up",
  },
  {
    id: "passenger-names",
    name: "passengerNames",
    label: "Passenger names (for nominative tickets)",
    type: "textarea",
    required: false,
    helpText: "Collected after availability — Pompeii timed entry may require exact names.",
    phase: "follow-up",
  },
];

export const bookingWorkflowStates = {
  launch: {
    id: "request-availability",
    label: "Request availability",
    description:
      "Customer selects sailing and requests seats → operator verifies vehicle and timings → customer receives confirmation or payment instructions.",
    customerCtas: ["Check Your Sailing", "Request Availability"],
    forbiddenCtas: ["Book Now"],
  },
  future: {
    id: "full-payment-at-booking",
    label: "Direct online booking",
    description: FUTURE_PAYMENT_DEFAULT.journey.join(" → "),
    paymentDefault: FUTURE_PAYMENT_DEFAULT.mode,
    activated: false,
    customerSteps: FUTURE_PAYMENT_DEFAULT.journey,
  },
} as const;

export interface SignatureTourBookingRecord {
  id: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  departureStatus?: DepartureStatus;
  tourVersion: TourVersion;
  tourFormat: TourFormatChoice;
  sailingDate: string;
  shipName: string;
  arrivalTime?: string;
  departureTime?: string;
  pickupTime?: string;
  passengers: number;
  adults?: number;
  children?: number;
  vehicleIndex?: 1 | 2 | 3;
  optionalWinery: boolean;
  pompeiiGuideRequested: boolean;
  entranceTicketsArranged: boolean;
  accessibilityAcknowledged: boolean;
  passengerNames?: string[];
  timedEntrySlot?: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  specialRequests?: string;
  supplierConfirmation?: string;
  voucherStatus?: "pending" | "issued";
  cancellationTermsVersion?: string;
  /** Internal — never expose */
  supplierCost?: number;
  grossMargin?: number;
  commission?: number;
}

export const enquiryActivationChecklist = [
  "Destination inbox confirmed",
  "Privacy wording complete",
  "Notification delivery tested",
  "Spam protection working",
  "Operational response process agreed",
] as const;

export const bookingDataModelNotes = [
  "Future default payment: full payment at booking — not activated.",
  "Do not expose supplier costs, margins or internal allocation.",
  "Do not show remaining-seat counters or minimum-six messaging publicly until approved.",
  "Do not use Book Now or imply instant confirmation during the enquiry stage.",
  "Collect mobility, winery, guide and passenger names after initial availability.",
] as const;
