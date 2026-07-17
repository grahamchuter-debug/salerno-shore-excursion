/**
 * Signature Tour capacity architecture.
 *
 * Public stage: SEO / demand validation — do not display availability statuses,
 * remaining seats, vehicle counts beyond “maximum eight guests”, or break-even maths.
 *
 * Initial commercial planning: one eight-seat vehicle.
 * Architecturally support up to 3 vehicles later — keep 2 and 3 disabled.
 */

/** Booking-phase statuses — NOT for public UI until live inventory exists. */
export type DepartureStatus =
  | "interest-registered"
  | "awaiting-minimum-numbers"
  | "departure-likely"
  | "departure-confirmed"
  | "limited-availability"
  | "sold-out"
  | "private-vehicle-available";

export interface VehicleSlot {
  index: 1 | 2 | 3;
  enabled: boolean;
  maxGuests: 8;
  activationNote: string;
}

export interface CapacityConfig {
  maxGuestsPerVehicle: 8;
  maxVehiclesSupported: 3;
  maxGuestsTotalIfFullyActivated: 24;
  /** Public copy may mention maximum eight guests only */
  publicMaxGuestsAdvertised: 8;
  vehicles: VehicleSlot[];
  remainingSeatsPublic: null;
  /** Do not show departure / scarcity statuses on public pages */
  publicAvailabilityStatusesEnabled: false;
}

export const capacityConfig: CapacityConfig = {
  maxGuestsPerVehicle: 8,
  maxVehiclesSupported: 3,
  maxGuestsTotalIfFullyActivated: 24,
  publicMaxGuestsAdvertised: 8,
  vehicles: [
    {
      index: 1,
      enabled: true,
      maxGuests: 8,
      activationNote: "Initial planning assumes one eight-seat vehicle.",
    },
    {
      index: 2,
      enabled: false,
      maxGuests: 8,
      activationNote: "Activate only when demand and Papillon availability justify it.",
    },
    {
      index: 3,
      enabled: false,
      maxGuests: 8,
      activationNote: "Activate only when demand and Papillon availability justify it.",
    },
  ],
  remainingSeatsPublic: null,
  publicAvailabilityStatusesEnabled: false,
};

export type TourFormat = "shared-small-group" | "private-vehicle";

/** Editorial descriptions — no operating / bookable claims. */
export const tourFormatCopy = {
  shared: {
    id: "shared-small-group" as TourFormat,
    label: "Shared small-group tour",
    badge: "Maximum 8 guests",
    positioning: "Primary concept",
    summary:
      "Our selected small-group itinerary, designed around a maximum eight-seat touring experience. Individual seat sales and scheduled shared departures are not announced until approved.",
  },
  private: {
    id: "private-vehicle" as TourFormat,
    label: "Private eight-seat vehicle",
    badge: "Concept option",
    positioning: "Secondary concept",
    summary:
      "A private eight-seat vehicle for your own party is part of the content model for later activation. Private pricing and booking are not available on this site yet.",
  },
} as const;
