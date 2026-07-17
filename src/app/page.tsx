import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import {
  destinationLine,
  experiencePaths,
  experiencePathsHeading,
  getHomepageFaqs,
  homepageIntro,
  homepageTagline,
  homepageTrustLine,
  passengerSnapshot,
} from "@/data/homepage";
import { getExcursionsByBadge } from "@/data/excursions";
import { siteImages, getExcursionImage, getGuideImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { PreloadImage } from "@/components/PreloadImage";
import { CruiseHeroTrust } from "@/components/CruiseHeroTrust";
import { SignatureTourFeature } from "@/components/SignatureTourFeature";
import { ExperiencePaths } from "@/components/ExperiencePaths";
import { HonestAdvice } from "@/components/HonestAdvice";
import { EditorialBadge } from "@/components/EditorialBadge";
import { SignatureTourBadge } from "@/components/SignatureTourBadge";
import { travellerRecommendations } from "@/data/recommendations";
import { spiritOfSalerno } from "@/data/destination-identity";
import { signatureTourEditorial, signatureTours } from "@/data/signature-tours";
import { cruisePositioning } from "@/data/cruise-positioning";

export const metadata = buildMetadata({
  title: "Salerno Shore Excursion | Pompeii & Amalfi Coast Tours",
  description:
    "Compare Salerno shore excursions for your day ashore — selected Signature Tours to Pompeii and the Amalfi Coast, partner alternatives and cruise-port guides.",
  path: "/",
  keywords: [
    "Salerno shore excursions",
    "Pompeii from Salerno",
    "Amalfi Coast from Salerno",
    "Salerno cruise port",
    "Mount Vesuvius from Salerno",
  ],
});

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const editorsChoice = getExcursionsByBadge("editors-choice").slice(0, 6);

  const pathCards = experiencePaths.map((p) => ({
    slug: p.id,
    title: p.title,
    tagline: p.description,
    highlights: [p.who, p.time, p.pace, p.caveat],
    cta: p.cta,
    href: p.guideHref,
    imageKey: p.imageKey,
  }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Salerno Shore Excursion — Pompeii, Vesuvius and the Amalfi Coast",
            description: homepageIntro,
            path: "/",
          }),
        ]}
      />

      <PreloadImage base={siteImages.hero.base} role="hero" />

      {/* 1. Hero */}
      <section className="home-hero">
        <ResponsiveImage
          image={siteImages.hero}
          role="hero"
          priority
          className="absolute inset-0 block h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-citrus-300 animate-fade-up">
            {cruisePositioning.eyebrow}
          </p>
          <h1 className="home-hero-heading animate-fade-up-delay">{homepageTagline}</h1>
          <CruiseHeroTrust />
          <p className="mt-3 max-w-2xl text-lg font-medium text-white/95 animate-fade-up-delay">
            {destinationLine}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg animate-fade-up-delay">
            {homepageIntro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
            <Link href="/shore-excursions" className="btn-accent">
              Explore Salerno Excursions
            </Link>
            <Link
              href="/signature-tours"
              className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              View Our Signature Tours
            </Link>
            <Link
              href="/cruise-planner"
              className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              Find Your Ship
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-white/75 animate-fade-up-delay-2">
            {homepageTrustLine}
          </p>
        </div>
      </section>

      {/* 2. Signature Tour feature */}
      <SignatureTourFeature />

      {/* 3. Experience paths */}
      <ExperiencePaths
        paths={pathCards}
        eyebrow="Choose your day"
        heading={experiencePathsHeading}
        subtitle="From Pompeii and Vesuvius to the Amalfi Coast, Paestum and Salerno itself — match the shape of your day to your hours ashore."
      />

      {/* 4. Featured excursions */}
      <section className="section-padding bg-ionian-900 text-white">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="section-eyebrow text-citrus-300">Editor&apos;s Choices</p>
            <h2 className="section-title mt-2 text-white">Featured Salerno excursions</h2>
            <p className="mt-4 text-white/75">
              Our Signature Tours lead the editorial hierarchy. These partner alternatives remain
              genuinely useful depending on your time ashore, interests and preferred format.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {signatureTours.map((tour) => (
              <Link
                key={tour.id}
                href={tour.path}
                className="card-editorial group flex gap-4 bg-white/95 p-4 text-volcanic-900 sm:p-5"
              >
                <div className="min-w-0 flex-1">
                  <SignatureTourBadge />
                  <h3 className="mt-2 font-display text-lg font-semibold">{tour.title}</h3>
                  <p className="mt-1 text-sm text-volcanic-600">{tour.subtitle}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-ionian-700">
                    View Signature Tour →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {editorsChoice.map((ex) => {
              const image = getExcursionImage(ex.slug);
              return (
                <Link
                  key={ex.slug}
                  href={`/shore-excursions/${ex.slug}`}
                  className="card-editorial group bg-white text-volcanic-900"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ResponsiveImage
                      image={image}
                      role="card"
                      className="absolute inset-0 block h-full w-full"
                      imgClassName="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    {ex.badge ? (
                      <div className="mb-2">
                        <EditorialBadge badge={ex.badge} />
                      </div>
                    ) : null}
                    <h3 className="font-display text-xl font-semibold">{ex.title}</h3>
                    <p className="mt-2 text-sm text-volcanic-600">{ex.tagline}</p>
                    <p className="mt-3 text-xs text-volcanic-500">
                      {ex.duration}
                      {ex.groupType ? ` · ${ex.groupType}` : ""}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-ionian-700">
                      View Excursion Details →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8">
            <Link
              href="/shore-excursions"
              className="btn-secondary bg-white/10 text-white border-white/25 hover:bg-white/20"
            >
              View all Salerno excursions
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Recommendations */}
      <section className="section-padding">
        <div className="container-wide">
          <p className="section-eyebrow">Match your day</p>
          <h2 className="section-title mt-2">Which Salerno experience is right for you?</h2>
          <p className="section-subtitle">
            Editorial recommendations by traveller type — always matched to port hours, mobility and
            honest driving time.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {travellerRecommendations.map((rec) => (
              <Link key={rec.id} href={rec.href} className="nav-card h-full">
                <p className="text-xs font-semibold uppercase tracking-wide text-ionian-700">
                  {rec.travellerType}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold">{rec.recommendation}</h3>
                <p className="mt-2 text-sm text-volcanic-600">{rec.reason}</p>
                {rec.mobilityNote ? (
                  <p className="mt-3 text-xs leading-relaxed text-maple-800">{rec.mobilityNote}</p>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Cruise passenger snapshot */}
      <section className="section-padding bg-coastal-50/80 border-y border-coastal-100">
        <div className="container-wide">
          <p className="section-eyebrow">{passengerSnapshot.eyebrow}</p>
          <h2 className="section-title mt-2">{passengerSnapshot.title}</h2>
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {passengerSnapshot.items.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-coastal-100 bg-white p-5 shadow-sm"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-ionian-700">
                  {item.label}
                </dt>
                <dd className="mt-1 font-display text-lg font-semibold text-volcanic-900">
                  {item.value}
                </dd>
                <p className="mt-1 text-sm text-volcanic-600">{item.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 7. Why small-group */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <p className="section-eyebrow">Selected small-group touring</p>
          <h2 className="section-title mt-2">Why choose a selected small-group tour?</h2>
          <p className="mt-4 text-lg leading-relaxed text-volcanic-700">
            {signatureTourEditorial.whySmallGroup}
          </p>
          <p className="mt-4 text-base leading-relaxed text-volcanic-600">
            {signatureTourEditorial.honestyPrinciple}
          </p>
          <Link href="/signature-tours" className="btn-accent mt-8">
            View Signature Tours
          </Link>
        </div>
      </section>

      {/* 8. Spirit of Salerno */}
      <section className="section-padding bg-ionian-900 text-white">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-eyebrow text-citrus-300">{spiritOfSalerno.eyebrow}</p>
            <h2 className="section-title mt-2 text-white">{spiritOfSalerno.title}</h2>
            {spiritOfSalerno.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-white/80 leading-relaxed">
                {p}
              </p>
            ))}
            <ul className="mt-6 flex flex-wrap gap-2">
              {spiritOfSalerno.personality.map((word) => (
                <li key={word} className="pill bg-white/10 text-white border-white/20">
                  {word}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <ResponsiveImage
              image={getGuideImage(spiritOfSalerno.imageKey)}
              role="guide"
              className="absolute inset-0 block h-full w-full"
              imgClassName="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 9–13. Planning teasers */}
      <section className="section-padding">
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              href: "/salerno-cruise-port-guide",
              title: "Salerno port overview",
              img: "cruise-port",
              body: "Berths, walking into the city and regional transfer planning.",
            },
            {
              href: "/pompeii-from-salerno-cruise-port",
              title: "Pompeii planning",
              img: "greek-theatre",
              body: "Half days, guides, entrances and combined itineraries from Salerno.",
            },
            {
              href: "/salerno-cruise-schedule",
              title: "Cruise schedule preview",
              img: "harbour",
              body: "Match your ship's hours to realistic regional days.",
            },
            {
              href: "/can-you-walk-from-salerno-cruise-port",
              title: "Independent Salerno guidance",
              img: "walking",
              body: "When a walkable city day beats a long coach circuit.",
            },
          ].map((card) => (
            <Link key={card.href} href={card.href} className="nav-card">
              <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl">
                <ResponsiveImage
                  image={getGuideImage(card.img)}
                  role="thumbnail"
                  className="absolute inset-0 block h-full w-full"
                  imgClassName="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-volcanic-600">{card.body}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 10. Honest Amalfi planning */}
      <HonestAdvice />

      {/* 14. FAQs */}
      <FAQSection faqs={faqs} heading="Salerno shore excursion FAQs" />

      {/* 15. Final CTA */}
      <section className="section-padding bg-limestone-100">
        <div className="container-wide max-w-3xl text-center">
          <h2 className="section-title">Ready to plan your Salerno day?</h2>
          <p className="section-subtitle mx-auto">
            Compare Signature Tours and partner excursions, or use the cruise planner to match your
            port hours to the right experience.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/shore-excursions" className="btn-accent">
              Explore Salerno Excursions
            </Link>
            <Link href="/signature-tours" className="btn-secondary">
              View Signature Tours
            </Link>
            <Link href="/cruise-planner" className="btn-secondary">
              Cruise planner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
