import Link from "next/link";
import { honestPlanningContent } from "@/data/honest-planning";

export function HonestAdvice() {
  const { eyebrow, title, intro, editorialPrinciple, sections, links } = honestPlanningContent;

  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-4xl">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title mt-2">{title}</h2>
        <p className="section-subtitle">{intro}</p>
        <p className="mt-4 font-display text-lg font-semibold text-ionian-800">{editorialPrinciple}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <div key={section.heading} className="card-feature">
              <h3 className="font-display text-xl font-bold text-gray-900">{section.heading}</h3>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="mt-3 leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="btn-secondary text-sm">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
