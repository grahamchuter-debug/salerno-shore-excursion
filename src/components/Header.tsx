"use client";

import Link from "next/link";
import { useState } from "react";
import { DestinationLogo } from "@/components/DestinationLogo";
import { destinationIdentity } from "@/data/destination-identity";

const navItems = [
  { href: "/shore-excursions", label: "Excursions" },
  { href: "/signature-tours", label: "Signature Tours" },
  { href: "/best-salerno-shore-excursions", label: "Compare" },
  { href: "/salerno-cruise-port-guide", label: "Port Guide" },
  { href: "/ship-schedules", label: "Schedules" },
  { href: "/cruise-planner", label: "Planner" },
  { href: "/pompeii-from-salerno-cruise-port", label: "Guides" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-limestone-200 bg-limestone-50/95 backdrop-blur-sm">
      <div className="container-wide flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8">
        <Link
          href="/"
          className="group min-w-0 shrink rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ionian-500 focus-visible:ring-offset-2"
          aria-label={`${destinationIdentity.accessibleName} — home`}
        >
          <span className="hidden lg:inline-flex">
            <DestinationLogo variant="full" decorative />
          </span>
          <span className="inline-flex lg:hidden">
            <DestinationLogo variant="compact" decorative />
          </span>
        </Link>
        <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-2 text-sm font-medium text-volcanic-700 hover:bg-ionian-50 hover:text-ionian-800 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden xl:block shrink-0">
          <Link href="/contact" className="btn-accent text-sm py-2.5 px-4">
            Contact
          </Link>
        </div>
        <button
          type="button"
          className="xl:hidden shrink-0 rounded-lg p-2 text-volcanic-700 hover:bg-ionian-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ionian-500"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="xl:hidden border-t border-limestone-200 bg-white px-4 py-4" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-volcanic-700 hover:bg-ionian-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-lg px-4 py-3 text-sm font-semibold text-citrus-700 hover:bg-ionian-50"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
