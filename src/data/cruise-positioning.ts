/**
 * Central cruise-positioning copy. Do not scatter strings across components.
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

/** At-a-glance facts for the Cruise Passenger Snapshot module. */
export const cruisePassengerSnapshot = [
  { label: "Cruise destination", value: "Salerno, Campania" },
  {
    label: "Best known for",
    value: "Gateway to the Amalfi Coast, Pompeii and Paestum",
  },
  {
    label: "Best for",
    value: "Small-group touring, archaeology, scenery and food",
  },
  {
    label: "Independent option",
    value: "Salerno historic centre and waterfront",
  },
  {
    label: "Flagship selected tours",
    value: "Pompeii and Vesuvius; Pompeii and the Amalfi Coast",
  },
  {
    label: "Popular wider destinations",
    value: "Amalfi, Ravello, Positano, Pompeii and Paestum",
  },
  {
    label: "Planning priority",
    value: "Allow for Amalfi Coast traffic and realistic touring time",
  },
  { label: "Currency", value: "Euro" },
] as const;

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food";
}

export const dayAshoreIntro =
  "The essentials cruise passengers should know before exploring Campania from Salerno.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "time-in-port",
    title: "Typical time in port",
    body: "Many Salerno calls allow a full sightseeing day, but always confirm your ship's arrival and all-aboard time before choosing Pompeii plus the Amalfi Coast or other long regional loops.",
    icon: "clock",
  },
  {
    id: "excursion-length",
    title: "Ideal excursion length",
    body: "Pompeii alone suits a medium call. Pompeii with Vesuvius or a coastal combination typically needs a long day with disciplined return timing and traffic contingency.",
    icon: "route",
  },
  {
    id: "walking-level",
    title: "Walking level",
    body: "Pompeii involves uneven ancient surfaces. Vesuvius includes a steep uphill section unsuitable for all mobility levels. Amalfi Coast towns add steps and slopes.",
    icon: "walk",
  },
  {
    id: "best-early-stop",
    title: "Best early decision",
    body: "Choose archaeology, coast, Paestum or Salerno city before you leave the terminal — do not add Positano to a Pompeii morning without accepting the driving cost.",
    icon: "sunrise",
  },
  {
    id: "do-not-miss",
    title: "Do not miss",
    body: "One well-paced headline — Pompeii, a coastal town, Paestum or Salerno itself — beats a rushed checklist that fights summer traffic.",
    icon: "viewpoint",
  },
  {
    id: "local-flavour",
    title: "Local flavour",
    body: "Look for buffalo mozzarella near Paestum, seafood on the waterfront, sfogliatella and Campanian wine when free time allows.",
    icon: "food",
  },
];
