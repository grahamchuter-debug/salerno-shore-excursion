import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Port Guide Redirect",
  robots: { index: false, follow: true },
};

/** Canonical port guide lives at /salerno-cruise-port-guide (also in public/_redirects). */
export default function PortGuideRedirect() {
  redirect("/salerno-cruise-port-guide/");
}
