/**
 * Signature Tour capacity, departure status and vehicle allocation.
 * Customer-facing UI must not expose minimum-six messaging or fake seat counts
 * until terms and fallback arrangements are approved.
 */

export type DepartureStatus =
  | "interest-registered"
  | "awaiting-minimum-numbers"
  | "departure-likely"
  | "departure-confirmed"
  | "limited-availability"
  | "sold-out"
  | "private-vehicle-available";

export const DEPARTURE_STATUS_LABELS: Record<DepartureStatus, string> = {
  "interest-registered": "Interest registered",
  "awaiting-minimum-numbers": "Awaiting minimum numbers",
  "departure-likely": "Departure likely",
  "departure-confirmed": "Departure confirmed",
  "limited-availability": "Limited availability",
  "sold-out": "Sold out",
  "private-vehicle-available": "Private vehicle available",
};

export interface VehicleSlot {
  index: 1 | 2 | 3;
  enabled: boolean;
  maxGuests: 8;
  /** Only activate after Papillon confirms for the specific sailing */
  activationNote: string;
}

export interface CapacityConfig {
  /** Initial commercial configuration — not a public promise until approved */
  minimumConfirmedDeparture: 6;
  maxGuestsPerVehicle: 8;
  maxVehiclesPerSailing: 3;
  maxGuestsTotal: 24;
  /** Public launch: advertise at most one vehicle / eight guests */
  publicMaxGuestsAdvertised: 8;
  publicMinGuestsAdvertised: null;
  vehicles: VehicleSlot[];
  /** Never invent remaining seats */
  remainingSeatsPublic: null;
  showMinimumSixPublicly: false;
}

export const capacityConfig: CapacityConfig = {
  minimumConfirmedDeparture: 6,
  maxGuestsPerVehicle: 8,
  maxVehiclesPerSailing: 3,
  maxGuestsTotal: 24,
  publicMaxGuestsAdvertised: 8,
  publicMinGuestsAdvertised: null,
  vehicles: [
    {
      index: 1,
      enabled: true,
      maxGuests: 8,
      activationNote: "Initial operational setting — one vehicle, maximum eight guests.",
    },
    {
      index: 2,
      enabled: false,
      maxGuests: 8,
      activationNote: "Disabled until Papillon confirms availability for the sailing.",
    },
    {
      index: 3,
      enabled: false,
      maxGuests: 8,
      activationNote: "Disabled until Papillon confirms availability for the sailing.",
    },
  ],
  remainingSeatsPublic: null,
  showMinimumSixPublicly: false,
};

export type TourFormat = "shared-small-group" | "private-vehicle";

export const tourFormatCopy = {
  shared: {
    id: "shared-small-group" as TourFormat,
    label: "Shared small-group Signature Tour",
    badge: "Maximum 8 guests",
    positioning: "Primary website recommendation",
    summary:
      "Join a carefully selected small-group day in an eight-seat vehicle. Shared departures are arranged when operationally confirmed for your sailing — we do not claim fixed daily schedules until supply is live.",
  },
  private: {
    id: "private-vehicle" as TourFormat,
    label: "Private vehicle for your party",
    badge: "Price on request",
    positioning: "Secondary option",
    summary:
      "Travel only with your own party in a dedicated vehicle. Private enquiries are welcome; private pricing is confirmed case by case and is not published as a fixed rate.",
  },
} as const;
