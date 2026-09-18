import Link from "next/link";
import { DestinationLogo } from "@/components/DestinationLogo";
import { SITE } from "@/lib/site";
import { SIGNATURE_TOURS_PATH } from "@/data/signature-tours";

const explore = [
  { href: "/shore-excursions", label: "All Salerno excursions" },
  { href: SIGNATURE_TOURS_PATH, label: "Signature Tours" },
  { href: "/best-salerno-shore-excursions", label: "Compare options" },
  { href: "/pompeii-from-salerno-cruise-port", label: "Pompeii guide" },
];

const plan = [
  { href: "/salerno-cruise-port-guide", label: "Port guide" },
  { href: "/ship-schedules", label: "Ship schedules" },
  { href: "/cruise-planner", label: "Cruise planner" },
  { href: "/getting-around-salerno-from-the-cruise-port", label: "Getting around" },
];

const discover = [
  { href: "/amalfi-coast-from-salerno-cruise-port", label: "Amalfi Coast" },
  { href: "/mount-vesuvius-from-salerno", label: "Mount Vesuvius" },
  { href: "/salerno-cruise-port", label: "Salerno city" },
  { href: "/salerno-food-guide", label: "Campanian food" },
];

export function Footer() {
  return (
    <footer className="footer-depth text-white">
      <div className="container-wide section-padding pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <DestinationLogo variant="full" tone="on-dark" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {SITE.philosophy} Pompeii, Vesuvius, the Amalfi Coast and Campanian flavours — one
              port, many possible days.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-citrus-300">Explore</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-citrus-300">Plan</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {plan.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-citrus-300">Discover</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {discover.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}.{" "}
            <a href={SITE.url} className="hover:text-white">
              {SITE.domain}
            </a>
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/methodology" className="hover:text-white">
              Methodology
            </Link>
            <Link href="/affiliate-disclosure" className="hover:text-white">
              Affiliate disclosure
            </Link>
            <Link href="/signature-tour-terms" className="hover:text-white">
              Signature terms
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
