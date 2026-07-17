import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import BookingForm from "./booking-form";
import {
  ADDRESS,
  BRAND,
  HERO_IMAGE,
  MAPS_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  craft,
  hoursRows,
  reviews,
  serviceGroups,
  stats,
} from "./data";

const PATH = "/templates/meridian-salon";
const pageTitle = "Meridian — Men's Grooming Lounge";
const pageDescription =
  "Traditional barbering, done sharp. Skin fades, hot-towel shaves and beard work by a bench of career barbers in downtown Chicago. Book a chair online.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "barber shop",
    "men's haircut",
    "skin fade",
    "hot towel shave",
    "beard trim",
    "straight razor shave",
    "Chicago barber",
    "book a barber online",
    "grooming lounge",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

// Structured data — a local business so the shop is eligible for rich results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${siteConfig.url}${PATH}`,
  name: "Meridian Grooming Lounge",
  description: pageDescription,
  url: `${siteConfig.url}${PATH}`,
  image: `${siteConfig.url}${PATH}/opengraph-image`,
  telephone: "+1-312-555-7890",
  priceRange: "$$",
  currenciesAccepted: "USD",
  address: {
    "@type": "PostalAddress",
    streetAddress: "412 Wells Street",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60654",
    addressCountry: "US",
  },
  areaServed: "Chicago, IL",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200",
    bestRating: "5",
  },
};

/* Shared layout primitives for this template. */
function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("mx-auto max-w-[1180px] px-[clamp(20px,5vw,72px)]", className)}>
      {children}
    </div>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-block text-[13px] font-bold uppercase tracking-[0.09em] text-brand-700">
      {children}
    </span>
  );
}

function SectionHeading({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <h2
      className={cn(
        "font-heading text-[clamp(32px,4.2vw,54px)] font-extrabold leading-[1.04] tracking-[-0.02em]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export default function MeridianSalonPage() {
  return (
    <div id="top" data-theme="meridian" className="min-h-screen bg-background text-ink font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Nav ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 border-b-2 border-divider bg-[color-mix(in_srgb,var(--background)_86%,transparent)] backdrop-blur-md">
        <Container className="flex items-center gap-[22px] py-3.5">
          <a href="#top" className="flex items-center gap-[11px] text-ink no-underline">
            <span className="block size-[15px] bg-brand" />
            <span className="font-heading text-[19px] font-extrabold tracking-[0.16em]">{BRAND}</span>
          </a>
          <span className="ml-3.5 hidden gap-7 min-[760px]:flex">
            {[
              ["Services", "#services"],
              ["Book", "#book"],
              ["The shop", "#craft"],
              ["Reviews", "#reviews"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[14px] font-semibold tracking-[0.02em] text-ink no-underline transition-colors hover:text-brand"
              >
                {label}
              </a>
            ))}
          </span>
          <span className="ml-auto flex items-center gap-5">
            <a
              href={PHONE_HREF}
              className="hidden whitespace-nowrap text-[14px] font-semibold text-ink no-underline min-[480px]:inline"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href="#book"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-[11px] border-2 border-brand bg-brand px-[18px] py-2.5 font-heading text-[14px] font-extrabold text-white no-underline shadow-soft-sm transition-all hover:-translate-y-px hover:border-brand-700 hover:bg-brand-700 hover:shadow-soft-md active:translate-y-0"
            >
              Book a chair
            </a>
          </span>
        </Container>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="scroll-mt-[72px] py-[clamp(44px,6vw,86px)] pb-[clamp(40px,5vw,72px)]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-[clamp(32px,5vw,68px)] min-[900px]:grid-cols-[1.06fr_.94fr]">
            <div>
              <span className="mrd-rise mrd-d1 mb-6 inline-flex items-center gap-[9px] text-[13px] font-bold uppercase tracking-[0.09em] text-brand-700">
                <span className="block h-0.5 w-[26px] bg-brand" />
                Men&rsquo;s grooming lounge · Est. 2014
              </span>
              <h1 className="mrd-rise mrd-d2 m-0 font-heading text-[clamp(42px,6vw,84px)] font-extrabold leading-[1.02] tracking-[-0.028em]">
                <span className="block">A precise cut.</span>
                <span className="block">A proper shave.</span>
                <span className="block text-brand">Zero fuss.</span>
              </h1>
              <p className="mrd-rise mrd-d3 mt-[30px] max-w-[52ch] text-[clamp(16px,1.5vw,18.5px)] leading-[1.62] text-ink/78">
                Traditional barbering, done sharp. Skin fades, hot-towel shaves and beard work by a
                bench of career barbers &mdash; booked to the minute, so you&rsquo;re in the chair,
                not the waiting room.
              </p>
              <div className="mrd-rise mrd-d4 mt-[34px] flex flex-wrap gap-3.5">
                <a
                  href="#book"
                  className="inline-flex items-center gap-2.5 rounded-[12px] border-2 border-brand bg-brand px-6 py-3.5 font-heading text-[15px] font-extrabold text-white no-underline shadow-soft-sm transition-all hover:-translate-y-0.5 hover:border-brand-700 hover:bg-brand-700 hover:shadow-soft-md active:translate-y-0"
                >
                  Book a chair <span className="text-[17px]">→</span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-[12px] border-2 border-ink/20 bg-transparent px-6 py-3.5 font-heading text-[15px] font-extrabold text-ink no-underline transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-background active:translate-y-0"
                >
                  View the menu
                </a>
              </div>
              <div className="mrd-rise mrd-d5 mt-[34px] flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[13.5px] text-ink/60">
                <span className="font-heading text-[15px] font-extrabold text-brand-700">★ 4.9</span>
                <span>1,200+ reviews</span>
                <span aria-hidden className="text-divider">|</span>
                <span>6 chairs</span>
                <span aria-hidden className="text-divider">|</span>
                <span>Walk-ins before noon</span>
              </div>
            </div>

            <div className="mrd-rise mrd-d3 relative">
              <figure className="m-0 aspect-4/5 overflow-hidden rounded-[16px] border border-ink/12">
                <div className="relative size-full">
                  <Image
                    src={HERO_IMAGE.src}
                    alt={HERO_IMAGE.alt}
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <div className="mrd-floatA absolute left-[-18px] top-[22px] flex items-center gap-3 rounded-[14px] border border-divider bg-background px-[18px] py-3.5 shadow-soft-lg">
                <span className="font-heading text-[30px] font-extrabold leading-none text-brand">4.9</span>
                <span className="text-[12px] leading-[1.35] text-ink/70">
                  ★★★★★
                  <br />
                  1,200+ reviews
                </span>
              </div>
              <div className="mrd-floatB absolute -right-4 bottom-[26px] rounded-[14px] bg-brand px-[18px] py-3.5 text-white shadow-soft-lg">
                <div className="text-[11px] font-bold uppercase tracking-[0.08em] opacity-85">
                  Next available
                </div>
                <div className="mt-[3px] font-heading text-[18px] font-extrabold">Today · 3:00 PM</div>
              </div>
              <div className="mrd-floatA absolute -top-4 right-6 rounded-[11px] bg-ink px-3.5 py-2 font-heading text-[12px] font-extrabold tracking-[0.06em] text-background shadow-soft-md">
                EST. 2014
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats ───────────────────────────────────────────── */}
      <section className="border-t-2 border-divider py-[clamp(36px,4vw,56px)]">
        <Container>
          <div className="grid grid-cols-2 gap-x-6 gap-y-[30px] min-[620px]:grid-cols-4">
            {stats.map((st) => (
              <div key={st.label}>
                <p className="m-0 font-heading text-[clamp(32px,3.4vw,48px)] font-extrabold leading-none text-brand">
                  {st.num}
                </p>
                <p className="mt-[13px] max-w-[22ch] text-[12.5px] uppercase tracking-[0.06em] text-ink/64">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Services ────────────────────────────────────────── */}
      <section id="services" className="scroll-mt-[70px] border-t-2 border-divider py-[clamp(60px,7vw,104px)] pb-[clamp(48px,6vw,84px)]">
        <Container>
          <Kicker>The menu</Kicker>
          <SectionHeading className="mb-2.5">Services &amp; pricing</SectionHeading>
          <p className="m-0 max-w-[50ch] text-[16px] leading-[1.6] text-ink/72">
            Every service includes a hot towel and a straight-razor neck finish. No membership
            required.
          </p>

          <div className="mt-11 flex flex-col gap-11">
            {serviceGroups.map((grp) => (
              <div key={grp.label}>
                <div className="mb-[18px] flex items-center gap-[11px] text-[13px] font-bold uppercase tracking-[0.09em] text-brand-700">
                  <span className="block size-2 bg-brand" />
                  {grp.label}
                </div>
                <div className="grid grid-cols-1 gap-3.5 min-[620px]:grid-cols-2">
                  {grp.items.map((s) => (
                    <div
                      key={s.name}
                      className="flex flex-col gap-[11px] rounded-[16px] border border-ink/12 bg-background p-[22px] transition-all hover:translate-y-[-3px] hover:border-ink/30 hover:shadow-soft-md"
                    >
                      <div className="flex items-baseline justify-between gap-3.5">
                        <span className="font-heading text-[19px] font-extrabold leading-[1.2]">
                          {s.name}
                        </span>
                        <span className="whitespace-nowrap font-heading text-[20px] font-extrabold text-brand">
                          {s.price}
                        </span>
                      </div>
                      <p className="m-0 flex-1 text-[14px] leading-[1.55] text-ink/64">{s.desc}</p>
                      <a
                        href="#book"
                        className="inline-flex items-center gap-1.5 self-start rounded-[10px] border-[1.5px] border-ink/28 bg-transparent px-[15px] py-2 font-heading text-[13px] font-extrabold text-ink no-underline transition-colors hover:border-brand hover:bg-brand hover:text-white"
                      >
                        Book <span className="text-[15px]">→</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Book ────────────────────────────────────────────── */}
      <section
        id="book"
        className="scroll-mt-[62px] border-y-2 border-divider bg-surface py-[clamp(60px,7vw,104px)]"
      >
        <Container>
          <Kicker>Reserve</Kicker>
          <SectionHeading className="mb-2.5">Book a chair</SectionHeading>
          <p className="mb-[38px] max-w-[52ch] text-[16px] leading-[1.6] text-ink/72">
            Pick your barber, then tell us when. We&rsquo;ll confirm by text within the hour.
          </p>
          <BookingForm />
        </Container>
      </section>

      {/* ── Craft ───────────────────────────────────────────── */}
      <section id="craft" className="scroll-mt-[70px] py-[clamp(60px,7vw,104px)] pb-[clamp(48px,6vw,80px)]">
        <Container>
          <Kicker>Inside the shop</Kicker>
          <SectionHeading className="mb-2.5">The craft</SectionHeading>
          <p className="mb-[34px] max-w-[52ch] text-[16px] leading-[1.6] text-ink/72">
            A look at the room and the work that happens in the chair &mdash; steady hands, sharp
            lines, no rush.
          </p>
          <div className="grid grid-cols-1 gap-[18px] min-[760px]:grid-cols-3">
            {craft.map((g) => (
              <figure key={g.cap} className="group m-0">
                <div className="aspect-4/5 overflow-hidden rounded-[14px] border border-ink/12">
                  <div className="relative size-full">
                    <Image
                      src={g.src}
                      alt={g.cap}
                      fill
                      sizes="(max-width: 760px) 100vw, 33vw"
                      className="object-cover transition-transform duration-400 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 text-[13px] font-bold uppercase tracking-[0.04em] text-ink/60">
                  {g.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Reviews ─────────────────────────────────────────── */}
      <section
        id="reviews"
        className="scroll-mt-[62px] border-y-2 border-divider bg-surface py-[clamp(60px,7vw,104px)]"
      >
        <Container>
          <Kicker>Word of mouth</Kicker>
          <SectionHeading className="mb-10">What men say</SectionHeading>
          <div className="grid grid-cols-1 gap-x-10 min-[900px]:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="m-0 border-t-2 border-divider py-[34px]">
                <div className="mb-4 text-[15px] tracking-[2px] text-brand">★★★★★</div>
                <blockquote className="m-0 font-heading text-[20px] font-extrabold leading-[1.35] tracking-[-0.01em]">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-[18px] text-[14px] text-ink/64">
                  {r.name} · {r.meta}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="bg-brand text-white">
        <Container className="flex flex-wrap items-center justify-between gap-8 py-[clamp(54px,6vw,90px)]">
          <h2 className="m-0 font-heading text-[clamp(34px,4.6vw,60px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
            <span className="block">Look sharp.</span>
            <span className="block">Book your chair.</span>
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="inline-flex items-center gap-2.5 rounded-[12px] border-2 border-white bg-white px-[26px] py-3.5 font-heading text-[15px] font-extrabold text-brand no-underline transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white active:translate-y-0"
            >
              Book a chair <span className="text-[17px]">→</span>
            </a>
            <a
              href={PHONE_HREF}
              className="border-b-2 border-white/55 pb-0.5 font-heading text-[15px] font-extrabold text-white no-underline"
            >
              or call {PHONE_DISPLAY}
            </a>
          </div>
        </Container>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="bg-ink pb-8 pt-[clamp(48px,5vw,72px)] text-background">
        <Container>
          <div className="grid grid-cols-1 gap-10 min-[620px]:grid-cols-2 min-[900px]:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="mb-3.5 flex items-center gap-[11px]">
                <span className="block size-[15px] bg-brand" />
                <span className="font-heading text-[19px] font-extrabold tracking-[0.16em]">{BRAND}</span>
              </div>
              <p className="m-0 max-w-[34ch] text-[14px] leading-[1.6] text-background/66">
                A men&rsquo;s grooming lounge in downtown Chicago. Barbering the way it should be
                &mdash; precise, unhurried, no fuss.
              </p>
              <a
                href="#book"
                className="mt-5 inline-flex items-center gap-2 rounded-[11px] border-2 border-brand bg-brand px-5 py-2.5 font-heading text-[14px] font-extrabold text-white no-underline transition-all hover:-translate-y-0.5 hover:border-brand-700 hover:bg-brand-700 active:translate-y-0"
              >
                Book a chair <span className="text-[15px]">→</span>
              </a>
            </div>

            <div>
              <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.09em] text-brand-2">
                Opening hours
              </div>
              {hoursRows.map((h) => (
                <div
                  key={h.day}
                  className="flex items-baseline justify-between gap-4 border-b border-background/20 py-[11px]"
                >
                  <span className="text-[14px] font-semibold">{h.day}</span>
                  {h.closed ? (
                    <span className="text-[13px] font-bold uppercase tracking-[0.04em] text-brand-2">
                      {h.time}
                    </span>
                  ) : (
                    <span className="font-heading text-[14.5px] font-extrabold">{h.time}</span>
                  )}
                </div>
              ))}
            </div>

            <div>
              <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.09em] text-brand-2">
                Find us
              </div>
              <p className="m-0 text-[14.5px] leading-[1.7] text-background/82">
                {ADDRESS.line1}
                <br />
                {ADDRESS.line2}
              </p>
              <a
                href={PHONE_HREF}
                className="mt-3 block font-heading text-[16px] font-extrabold text-background no-underline"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener"
                className="mt-3.5 inline-flex items-center gap-1.5 border-b-2 border-background/45 pb-0.5 text-[13.5px] font-semibold text-background no-underline transition-colors hover:border-brand-2"
              >
                Get directions <span>→</span>
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t-2 border-background/24 pt-[22px] text-[12.5px] text-background/56">
            <span>© 2026 {BRAND} Grooming Lounge</span>
            <span className="flex gap-5">
              <a href="#" className="text-background/70 no-underline transition-colors hover:text-background">
                Instagram
              </a>
              <a href="#" className="text-background/70 no-underline transition-colors hover:text-background">
                Google
              </a>
              <a href="#book" className="text-background/70 no-underline transition-colors hover:text-background">
                Book
              </a>
            </span>
          </div>
        </Container>
      </footer>
    </div>
  );
}
