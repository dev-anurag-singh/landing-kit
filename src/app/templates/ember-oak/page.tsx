import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import {
  ADDRESS,
  BRAND,
  EMAIL,
  EST,
  IMG,
  PHONE_DISPLAY,
  PHONE_HREF,
  TAGLINE,
  craftSteps,
  faqs,
  featured,
  gallery,
  hours,
  menu,
  testimonials,
  values,
} from "./data";

const PATH = "/templates/ember-oak";
const pageTitle = "Ember & Oak — Cozy Vintage Coffee House";
const pageDescription =
  "A cozy-vintage coffee house in Portland. Small-lot beans roasted in-house on a restored drum roaster, brewed by hand, and served in a room built for slow mornings.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "coffee shop",
    "artisan coffee",
    "specialty coffee",
    "cozy cafe",
    "coffee roaster",
    "pour over coffee",
    "cold brew",
    "Portland coffee",
    "vintage coffee house",
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

// Structured data — a café so the shop is eligible for rich results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "@id": `${siteConfig.url}${PATH}`,
  name: BRAND,
  description: pageDescription,
  url: `${siteConfig.url}${PATH}`,
  image: `${siteConfig.url}${PATH}/opengraph-image`,
  telephone: "+1-503-555-0142",
  email: EMAIL,
  priceRange: "$$",
  servesCuisine: "Coffee & Pastries",
  currenciesAccepted: "USD",
  address: {
    "@type": "PostalAddress",
    streetAddress: "214 Alder Street",
    addressLocality: "Portland",
    addressRegion: "OR",
    postalCode: "97204",
    addressCountry: "US",
  },
  areaServed: "Portland, OR",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "15:00",
    },
  ],
};

/* ── Shared layout primitives for this template ─────────────────────── */
function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("mx-auto max-w-[1200px] px-[clamp(20px,5vw,80px)]", className)}>
      {children}
    </div>
  );
}

function Kicker({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[10px] text-[12.5px] font-bold uppercase tracking-[0.2em] text-brand-700",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-brand/55" />
      {children}
    </span>
  );
}

function SectionHeading({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <h2
      className={cn(
        "font-serif text-[clamp(32px,4.6vw,58px)] font-medium leading-[1.05] tracking-[-0.015em]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

const navLinks = [
  ["Story", "#story"],
  ["Menu", "#menu"],
  ["The craft", "#craft"],
  ["The room", "#room"],
  ["Visit", "#visit"],
] as const;

export default function EmberOakPage() {
  return (
    <div
      id="top"
      data-theme="emberoak"
      className="min-h-screen bg-background font-sans text-ink"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Nav ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 border-b border-divider bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md">
        <Container className="flex items-center gap-6 py-[18px]">
          <a href="#top" className="flex items-center gap-[11px] text-ink no-underline">
            <span
              aria-hidden
              className="grid size-8 place-items-center rounded-full bg-brand font-serif text-[16px] font-semibold italic text-primary-foreground"
            >
              e
            </span>
            <span className="font-serif text-[21px] font-semibold tracking-[0.01em]">{BRAND}</span>
          </a>
          <span className="ml-4 hidden gap-8 min-[820px]:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[14.5px] font-semibold text-ink/72 no-underline transition-colors hover:text-brand"
              >
                {label}
              </a>
            ))}
          </span>
          <span className="ml-auto flex items-center gap-5">
            <a
              href={PHONE_HREF}
              className="hidden whitespace-nowrap text-[14.5px] font-semibold text-ink/72 no-underline transition-colors hover:text-brand min-[560px]:inline"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand px-[20px] py-2.5 font-serif text-[14.5px] font-semibold text-primary-foreground no-underline shadow-soft-sm transition-all hover:-translate-y-px hover:bg-brand-700 hover:shadow-soft-md active:translate-y-0"
            >
              Visit us
            </a>
          </span>
        </Container>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="scroll-mt-[80px] overflow-hidden py-[clamp(40px,6vw,80px)]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-[clamp(36px,5vw,72px)] min-[900px]:grid-cols-[1.02fr_.98fr]">
            <div>
              <Reveal>
                <Kicker>
                  {EST} · Portland
                </Kicker>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="mt-6 font-serif text-[clamp(46px,7vw,88px)] font-medium leading-[1.02] tracking-[-0.02em]">
                  <span className="block">Slow coffee,</span>
                  <span className="block italic text-brand">warm rooms.</span>
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-7 max-w-[46ch] text-[clamp(16px,1.5vw,18.5px)] leading-[1.7] text-ink/72">
                  A neighborhood coffee house where the beans are roasted in the back, the
                  chairs are deep, and no one is ever hurried out the door. Come for the
                  cup&mdash;stay for the morning.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-9 flex flex-wrap gap-3.5">
                  <a
                    href="#menu"
                    className="inline-flex items-center gap-2.5 rounded-full bg-brand px-7 py-3.5 font-serif text-[15.5px] font-semibold text-primary-foreground no-underline shadow-soft-sm transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-soft-md active:translate-y-0"
                  >
                    See the menu <span aria-hidden className="text-[17px]">&rarr;</span>
                  </a>
                  <a
                    href="#visit"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-7 py-3.5 font-serif text-[15.5px] font-semibold text-ink no-underline transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-background active:translate-y-0"
                  >
                    Plan a visit
                  </a>
                </div>
              </Reveal>
              <Reveal delay={340}>
                <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13.5px] text-ink/60">
                  <span>Roasted in-house</span>
                  <span aria-hidden className="text-divider">&bull;</span>
                  <span>Direct trade</span>
                  <span aria-hidden className="text-divider">&bull;</span>
                  <span>Hand-brewed to order</span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="relative">
              <figure className="relative m-0 aspect-4/5 overflow-hidden rounded-[24px] border border-ink/10 shadow-soft-lg">
                <Image
                  src={IMG.hero.src}
                  alt={IMG.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 48vw"
                  className="object-cover"
                />
              </figure>
              <div className="absolute -left-3 bottom-8 flex items-center gap-3 rounded-2xl border border-divider bg-background/95 px-5 py-3.5 shadow-soft-lg backdrop-blur-sm sm:-left-6">
                <span className="grid size-10 place-items-center rounded-full bg-brand/12 font-serif text-[18px] italic text-brand">
                  ✦
                </span>
                <span className="text-[12.5px] leading-[1.35] text-ink/72">
                  <span className="block font-serif text-[15px] font-semibold text-ink">
                    Roasted this week
                  </span>
                  Small-lot, single origin
                </span>
              </div>
              <div className="absolute -right-2 top-7 rounded-2xl bg-ink px-4 py-2.5 font-serif text-[13px] font-semibold tracking-[0.04em] text-background shadow-soft-md sm:-right-4">
                {EST}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Marquee strip ───────────────────────────────────── */}
      <div className="border-y border-divider bg-surface/60">
        <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-center font-serif text-[15px] italic text-ink/60">
          {[
            "Freshly roasted beans",
            "Hand-poured filter",
            "Warm pastries daily",
            "A room to linger",
          ].map((phrase, i) => (
            <span key={phrase} className="flex items-center gap-8">
              {i > 0 && <span aria-hidden className="not-italic text-brand/50">✦</span>}
              {phrase}
            </span>
          ))}
        </Container>
      </div>

      {/* ── Story ───────────────────────────────────────────── */}
      <section id="story" className="scroll-mt-[72px] py-[clamp(64px,8vw,120px)]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-[clamp(36px,5vw,80px)] min-[880px]:grid-cols-[.92fr_1.08fr]">
            <Reveal className="relative order-2 min-[880px]:order-1">
              <figure className="relative m-0 aspect-4/5 overflow-hidden rounded-[24px] border border-ink/10 shadow-soft-md">
                <Image
                  src={IMG.story.src}
                  alt={IMG.story.alt}
                  fill
                  sizes="(max-width: 880px) 100vw, 44vw"
                  className="object-cover"
                />
              </figure>
              <div className="absolute -bottom-6 -right-3 hidden rounded-2xl border border-divider bg-background px-6 py-5 text-center shadow-soft-lg sm:block">
                <div className="font-serif text-[34px] font-semibold leading-none text-brand">15</div>
                <div className="mt-1.5 max-w-[12ch] text-[12px] uppercase tracking-[0.08em] text-ink/60">
                  Years on Alder Street
                </div>
              </div>
            </Reveal>

            <div className="order-1 min-[880px]:order-2">
              <Reveal>
                <Kicker>Our story</Kicker>
              </Reveal>
              <Reveal delay={80}>
                <SectionHeading className="mt-5">
                  A room built for
                  <br className="hidden sm:block" /> slow mornings.
                </SectionHeading>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-7 space-y-5 text-[16.5px] leading-[1.75] text-ink/74">
                  <p>
                    Ember &amp; Oak began in 2009 with a secondhand roaster, a corner shop
                    with good light, and a stubborn idea&mdash;that coffee tastes better when
                    nobody&rsquo;s rushing. We tore out the fluorescents, hauled in reclaimed
                    oak, and filled the shelves with books people actually read.
                  </p>
                  <p>
                    Fifteen years on, we still roast every bean in the back, still know our
                    growers by name, and still pull each shot by hand. The room has aged like
                    a good table&mdash;a little worn, warmer for it, and always open to a
                    quiet hour.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 font-serif text-[22px] italic text-brand">
                  &mdash; Mara &amp; Tomas, founders
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Featured drinks ─────────────────────────────────── */}
      <section className="scroll-mt-[72px] border-t border-divider py-[clamp(64px,8vw,120px)]">
        <Container>
          <div className="flex flex-col gap-5 min-[720px]:flex-row min-[720px]:items-end min-[720px]:justify-between">
            <div>
              <Reveal>
                <Kicker>On the board</Kicker>
              </Reveal>
              <Reveal delay={80}>
                <SectionHeading className="mt-5">Favorites this season</SectionHeading>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <p className="max-w-[38ch] text-[15.5px] leading-[1.65] text-ink/68">
                A short list of the cups our regulars keep coming back for&mdash;made the slow
                way, every time.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-7 min-[640px]:grid-cols-2 min-[980px]:grid-cols-3">
            {featured.map((drink, i) => (
              <Reveal key={drink.name} delay={i * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-ink/10 bg-surface/40 transition-all hover:-translate-y-1.5 hover:border-ink/20 hover:shadow-soft-lg">
                  <div className="relative aspect-4/5 overflow-hidden">
                    <Image
                      src={drink.src}
                      alt={drink.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                      className="object-cover transition-transform duration-900 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-[22px] font-medium leading-[1.15]">
                        {drink.name}
                      </h3>
                      <span className="whitespace-nowrap font-serif text-[19px] font-semibold text-brand">
                        {drink.price}
                      </span>
                    </div>
                    <p className="mt-3 text-[14.5px] leading-[1.6] text-ink/66">{drink.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Craft ───────────────────────────────────────────── */}
      <section
        id="craft"
        className="scroll-mt-[72px] border-y border-divider bg-surface py-[clamp(64px,8vw,120px)]"
      >
        <Container>
          <div className="grid grid-cols-1 items-center gap-[clamp(40px,5vw,80px)] min-[900px]:grid-cols-[1.05fr_.95fr]">
            <Reveal className="relative">
              <figure className="relative m-0 aspect-5/4 overflow-hidden rounded-[24px] border border-ink/10 shadow-soft-md">
                <Image
                  src={IMG.craft.src}
                  alt={IMG.craft.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="object-cover"
                />
              </figure>
              <figure className="absolute -bottom-8 -right-4 m-0 hidden aspect-square w-40 overflow-hidden rounded-[20px] border-4 border-surface shadow-soft-lg sm:block lg:w-48">
                <Image
                  src={IMG.beans.src}
                  alt={IMG.beans.alt}
                  fill
                  sizes="192px"
                  className="object-cover"
                />
              </figure>
            </Reveal>

            <div>
              <Reveal>
                <Kicker>The craft</Kicker>
              </Reveal>
              <Reveal delay={80}>
                <SectionHeading className="mt-5">
                  From green bean
                  <br className="hidden sm:block" /> to your cup.
                </SectionHeading>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-[46ch] text-[16px] leading-[1.7] text-ink/72">
                  Nothing here is automated. Every step is a decision made by a person who
                  cares how the last sip tastes.
                </p>
              </Reveal>

              <div className="mt-9 flex flex-col">
                {craftSteps.map((step, i) => (
                  <Reveal key={step.no} delay={i * 90}>
                    <div className="flex gap-5 border-t border-divider py-6">
                      <span className="font-serif text-[26px] font-semibold leading-none text-brand/70">
                        {step.no}
                      </span>
                      <div>
                        <h3 className="font-serif text-[20px] font-medium">{step.title}</h3>
                        <p className="mt-2 text-[15px] leading-[1.65] text-ink/66">{step.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Menu ────────────────────────────────────────────── */}
      <section id="menu" className="scroll-mt-[72px] py-[clamp(64px,8vw,120px)]">
        <Container>
          <div className="text-center">
            <Reveal>
              <Kicker className="justify-center">The menu</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <SectionHeading className="mx-auto mt-5 max-w-[16ch]">
                A small, honest menu
              </SectionHeading>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-[1.7] text-ink/70">
                Everything is made to order and priced without apology. Single origins rotate
                on the board&mdash;ask what&rsquo;s fresh.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-[clamp(40px,5vw,88px)] gap-y-14 min-[760px]:grid-cols-2">
            {menu.map((group, gi) => (
              <Reveal key={group.label} delay={(gi % 2) * 90}>
                <div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-ink/20 pb-3">
                    <h3 className="font-serif text-[24px] font-medium">{group.label}</h3>
                    {group.note && (
                      <span className="text-right font-serif text-[14px] italic text-ink/55">
                        {group.note}
                      </span>
                    )}
                  </div>
                  <ul className="mt-5 flex flex-col gap-4">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif text-[17px] font-medium">{item.name}</span>
                          <span
                            aria-hidden
                            className="mb-1 flex-1 border-b border-dotted border-ink/25"
                          />
                          <span className="font-serif text-[16px] font-semibold text-brand">
                            {item.price}
                          </span>
                        </div>
                        {item.desc && (
                          <p className="mt-1 max-w-[42ch] text-[14px] leading-normal text-ink/58">
                            {item.desc}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Gallery / The room ──────────────────────────────── */}
      <section
        id="room"
        className="scroll-mt-[72px] border-t border-divider py-[clamp(64px,8vw,120px)]"
      >
        <Container>
          <div className="max-w-[52ch]">
            <Reveal>
              <Kicker>The room</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <SectionHeading className="mt-5">Wood, light &amp; a little time</SectionHeading>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-[16px] leading-[1.7] text-ink/70">
                Deep chairs, worn tables, plants in the windows and the low hum of good
                conversation. This is a room that asks you to stay.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 min-[640px]:auto-rows-[220px] min-[900px]:grid-cols-4 min-[900px]:auto-rows-[240px]">
            {gallery.map((shot, i) => (
              <Reveal
                key={shot.src}
                delay={(i % 4) * 70}
                className={cn(shot.tall && "row-span-2")}
              >
                <figure className="group relative m-0 size-full overflow-hidden rounded-[20px] border border-ink/10">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    className="object-cover transition-transform duration-900 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.07]"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Values / Why us ─────────────────────────────────── */}
      <section className="scroll-mt-[72px] border-t border-divider bg-surface py-[clamp(64px,8vw,120px)]">
        <Container>
          <div className="grid grid-cols-1 gap-[clamp(36px,5vw,72px)] min-[900px]:grid-cols-[.85fr_1.15fr]">
            <div>
              <Reveal>
                <Kicker>Why Ember &amp; Oak</Kicker>
              </Reveal>
              <Reveal delay={80}>
                <SectionHeading className="mt-5">
                  The little things,
                  <br className="hidden sm:block" /> done properly.
                </SectionHeading>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-x-10 gap-y-9 min-[560px]:grid-cols-2">
              {values.map((value, i) => (
                <Reveal key={value.title} delay={(i % 2) * 90}>
                  <div className="border-t-2 border-brand/30 pt-5">
                    <span
                      aria-hidden
                      className="font-serif text-[15px] font-semibold text-brand/70"
                    >
                      0{i + 1}
                    </span>
                    <h3 className="mt-2 font-serif text-[21px] font-medium">{value.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-[1.65] text-ink/68">{value.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Testimonials ────────────────────────────────────── */}
      <section className="scroll-mt-[72px] py-[clamp(64px,8vw,120px)]">
        <Container>
          <div className="text-center">
            <Reveal>
              <Kicker className="justify-center">Kind words</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <SectionHeading className="mx-auto mt-5 max-w-[18ch]">
                Loved by the neighborhood
              </SectionHeading>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 min-[880px]:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure
                  className={cn(
                    "flex h-full flex-col rounded-[22px] border border-ink/10 bg-surface/50 p-7 shadow-soft-sm transition-all hover:-translate-y-1 hover:shadow-soft-md",
                    i === 1 && "min-[880px]:-translate-y-4",
                  )}
                >
                  <div aria-hidden className="font-serif text-[46px] leading-none text-brand/40">
                    &ldquo;
                  </div>
                  <blockquote className="-mt-3 flex-1 font-serif text-[18.5px] leading-[1.55] text-ink/85">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-divider pt-4">
                    <div className="font-serif text-[16px] font-semibold">{t.name}</div>
                    <div className="mt-0.5 text-[13.5px] text-ink/58">{t.meta}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Visit ───────────────────────────────────────────── */}
      <section
        id="visit"
        className="scroll-mt-[72px] border-t border-divider bg-surface py-[clamp(64px,8vw,120px)]"
      >
        <Container>
          <div className="grid grid-cols-1 items-center gap-[clamp(40px,5vw,80px)] min-[900px]:grid-cols-[1fr_1fr]">
            <div>
              <Reveal>
                <Kicker>Visit us</Kicker>
              </Reveal>
              <Reveal delay={80}>
                <SectionHeading className="mt-5">Come in, stay a while</SectionHeading>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-[44ch] text-[16px] leading-[1.7] text-ink/72">
                  You&rsquo;ll find us on the quiet end of Alder Street, green door, warm
                  light in the window. No reservations&mdash;just come as you are.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-9 grid grid-cols-1 gap-8 min-[520px]:grid-cols-2">
                  <div>
                    <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-700">
                      Find us
                    </div>
                    <p className="mt-3 text-[15.5px] leading-[1.7] text-ink/80">
                      {ADDRESS.line1}
                      <br />
                      {ADDRESS.line2}
                    </p>
                    <a
                      href={ADDRESS.maps}
                      target="_blank"
                      rel="noopener"
                      className="mt-3 inline-flex items-center gap-1.5 border-b border-brand/50 pb-0.5 font-serif text-[15px] font-semibold text-brand no-underline transition-colors hover:border-brand"
                    >
                      Get directions <span aria-hidden>&rarr;</span>
                    </a>
                    <a
                      href={PHONE_HREF}
                      className="mt-4 block font-serif text-[17px] font-semibold text-ink no-underline"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>

                  <div>
                    <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-700">
                      Hours
                    </div>
                    <dl className="mt-3">
                      {hours.map((row) => (
                        <div
                          key={row.day}
                          className="flex items-baseline justify-between gap-3 border-b border-divider py-2.5"
                        >
                          <dt className="text-[14.5px] text-ink/75">{row.day}</dt>
                          <dd className="font-serif text-[14.5px] font-semibold text-ink">
                            {row.time}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <figure className="relative m-0 aspect-4/5 overflow-hidden rounded-[24px] border border-ink/10 shadow-soft-md min-[900px]:aspect-5/6">
                <Image
                  src={IMG.visit.src}
                  alt={IMG.visit.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="scroll-mt-[72px] py-[clamp(64px,8vw,120px)]">
        <Container className="max-w-[820px]">
          <div className="text-center">
            <Reveal>
              <Kicker className="justify-center">Good to know</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <SectionHeading className="mt-5">Before you come by</SectionHeading>
            </Reveal>
          </div>

          <div className="mt-12">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={(i % 3) * 70}>
                <details className="group border-b border-divider py-5 [&_summary]:list-none">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 font-serif text-[19px] font-medium text-ink transition-colors hover:text-brand">
                    {faq.q}
                    <span
                      aria-hidden
                      className="grid size-7 shrink-0 place-items-center rounded-full border border-ink/25 text-[18px] leading-none text-ink/60 transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[64ch] text-[15.5px] leading-[1.7] text-ink/68">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="px-[clamp(20px,5vw,80px)] pb-[clamp(48px,6vw,96px)]">
        <Container className="overflow-hidden rounded-[clamp(24px,3vw,36px)] bg-ink px-[clamp(28px,5vw,72px)] py-[clamp(48px,6vw,88px)] text-background">
          <div className="flex flex-col items-start gap-8 min-[760px]:flex-row min-[760px]:items-end min-[760px]:justify-between">
            <div>
              <span className="inline-flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.2em] text-brand-2">
                <span aria-hidden className="h-px w-8 bg-brand-2/60" />
                {TAGLINE}
              </span>
              <h2 className="mt-5 max-w-[16ch] font-serif text-[clamp(32px,4.4vw,56px)] font-medium leading-[1.06] tracking-[-0.015em]">
                The kettle&rsquo;s on. Pull up a chair.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href={ADDRESS.maps}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2.5 rounded-full bg-background px-7 py-3.5 font-serif text-[15.5px] font-semibold text-ink no-underline transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-primary-foreground active:translate-y-0"
              >
                Get directions <span aria-hidden className="text-[17px]">&rarr;</span>
              </a>
              <a
                href={PHONE_HREF}
                className="border-b border-background/45 pb-0.5 font-serif text-[15.5px] font-semibold text-background no-underline transition-colors hover:border-background"
              >
                or call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-divider bg-background pb-9 pt-[clamp(52px,6vw,88px)]">
        <Container>
          <div className="grid grid-cols-1 gap-11 min-[640px]:grid-cols-2 min-[900px]:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-[11px]">
                <span
                  aria-hidden
                  className="grid size-8 place-items-center rounded-full bg-brand font-serif text-[16px] font-semibold italic text-primary-foreground"
                >
                  e
                </span>
                <span className="font-serif text-[21px] font-semibold">{BRAND}</span>
              </div>
              <p className="mt-4 max-w-[34ch] text-[14.5px] leading-[1.7] text-ink/64">
                A cozy-vintage coffee house in Portland&mdash;small-lot beans roasted in-house,
                brewed by hand, and a room built for slow mornings.
              </p>
              <a
                href={PHONE_HREF}
                className="mt-5 inline-block font-serif text-[17px] font-semibold text-ink no-underline"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div>
              <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-700">
                Hours
              </div>
              {hours.map((row) => (
                <div
                  key={row.day}
                  className="flex items-baseline justify-between gap-4 border-b border-divider py-2.5"
                >
                  <span className="text-[14px] text-ink/72">{row.day}</span>
                  <span className="font-serif text-[14px] font-semibold text-ink">{row.time}</span>
                </div>
              ))}
            </div>

            <div>
              <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-700">
                Find us
              </div>
              <p className="mt-3 text-[14.5px] leading-[1.75] text-ink/78">
                {ADDRESS.line1}
                <br />
                {ADDRESS.line2}
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-3 block text-[14.5px] text-ink/72 no-underline transition-colors hover:text-brand"
              >
                {EMAIL}
              </a>
              <a
                href={ADDRESS.maps}
                target="_blank"
                rel="noopener"
                className="mt-3.5 inline-flex items-center gap-1.5 border-b border-ink/30 pb-0.5 text-[13.5px] font-semibold text-ink no-underline transition-colors hover:border-brand hover:text-brand"
              >
                Get directions <span aria-hidden>&rarr;</span>
              </a>
            </div>
          </div>

          <div className="mt-11 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-divider pt-6 text-[13px] text-ink/54">
            <span>© 2026 {BRAND} Coffee House</span>
            <span className="flex gap-6">
              <a href="#" className="no-underline transition-colors hover:text-brand">
                Instagram
              </a>
              <a href="#" className="no-underline transition-colors hover:text-brand">
                Journal
              </a>
              <a href="#visit" className="no-underline transition-colors hover:text-brand">
                Visit
              </a>
            </span>
          </div>
        </Container>
      </footer>
    </div>
  );
}
