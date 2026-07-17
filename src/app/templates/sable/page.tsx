import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import {
  AgentWidget,
  Bars,
  ChatWidget,
  HeroStage,
  IntegrationGlyph,
  Ring,
  SearchWidget,
  ShowcaseDashboard,
  VoiceWidget,
} from "./mockups";
import { SiteNav } from "./nav";
import {
  ANNOUNCE,
  BRAND,
  HERO,
  TAGLINE,
  bento,
  customers,
  faqs,
  footerCols,
  integrations,
  plans,
  problems,
  stats,
  steps,
  testimonials,
} from "./data";

const PATH = "/templates/sable";
const pageTitle = "Sable — Autonomous AI agents for teams";
const pageDescription =
  "Sable is an AI agent platform that plans, acts, and ships across the tools your team already uses — with approvals, audit trails, and 100+ integrations.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI agent platform",
    "AI automation",
    "AI workspace",
    "autonomous agents",
    "AI copilot",
    "workflow automation",
    "AI for teams",
    "enterprise AI",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: BRAND,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: pageDescription,
  url: `${siteConfig.url}${PATH}`,
  image: `${siteConfig.url}${PATH}/opengraph-image`,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free forever plan",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1840",
    bestRating: "5",
  },
};

/* ── Shared primitives ────────────────────────────────────────────── */
function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-[clamp(20px,5vw,64px)]", className)}>
      {children}
    </div>
  );
}

function Kicker({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.18em] text-brand-700",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

function SectionHeading({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <h2
      className={cn(
        "text-[clamp(28px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.03em]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[14px] font-medium text-primary-foreground no-underline shadow-[0_14px_40px_-14px_#7c6cff] transition-all hover:-translate-y-0.5 hover:brightness-[1.08] hover:shadow-[0_18px_52px_-14px_#7c6cff] active:translate-y-0";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-full border border-divider bg-white/4 px-5 py-2.5 text-[14px] font-medium text-ink no-underline transition-all hover:-translate-y-0.5 hover:border-ink/25 hover:bg-white/8 active:translate-y-0";

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SablePage() {
  return (
    <div id="top" data-theme="sable" className="min-h-screen bg-background font-sans text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Nav ─────────────────────────────────────────────── */}
      <SiteNav />

      {/* ── Hero ────────────────────────────────────────────────
          Pulled up under the (transparent) sticky nav with -mt so the
          aurora + grid sit behind it and the nav blends seamlessly; the
          extra top padding keeps the content clear of the nav. */}
      <section className="relative -mt-16 overflow-hidden pb-[clamp(60px,10vw,160px)] pt-[calc(64px+clamp(48px,7vw,96px))]">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[684px] sbl-aurora" />
        <div aria-hidden className="pointer-events-none absolute inset-0 sbl-grid" />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.035] sbl-noise" />

        <Container className="relative">
          <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
            <Reveal>
              <a
                href="#bento"
                className="group inline-flex items-center gap-2.5 rounded-full border border-divider bg-white/5 py-1.5 pl-1.5 pr-3.5 text-[13px] no-underline backdrop-blur-sm transition-colors hover:border-ink/25"
              >
                <span className="rounded-full bg-brand px-2.5 py-0.5 font-mono text-[10.5px] font-medium text-primary-foreground">
                  New
                </span>
                <span className="text-ink/80">{ANNOUNCE}</span>
                <span className="text-ink/40 transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-7 text-[clamp(40px,7vw,80px)] font-semibold leading-[1.02] tracking-[-0.04em]">
                {HERO.headline[0]}
                <br />
                <span className="bg-linear-to-r from-brand-2 to-brand bg-clip-text text-transparent">
                  {HERO.headline[1]}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-6 max-w-[58ch] text-[clamp(15px,1.6vw,18px)] leading-[1.6] text-ink/64">
                {HERO.sub}
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href="#pricing" className={btnPrimary}>
                  Start free <Arrow />
                </a>
                <a href="#product" className={btnGhost}>
                  Book a demo
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-5 flex items-center gap-2 font-mono text-[12px] text-ink/45">
                <span className="inline-block size-1.5 rounded-full bg-emerald-400 sbl-pulse" />
                No credit card · SOC 2 Type II · Deploy in minutes
              </div>
            </Reveal>
          </div>

          {/* centerpiece dashboard + orbiting windows */}
          <Reveal delay={220} className="mt-[clamp(48px,7vw,96px)]">
            <HeroStage />
          </Reveal>
        </Container>
      </section>

      {/* ── Trusted by ──────────────────────────────────────── */}
      <section className="border-y border-divider bg-secondary/25 py-[clamp(36px,5vw,64px)]">
        <Container>
          <p className="text-center font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink/45">
            Trusted by fast-moving teams at
          </p>
          <div className="relative mt-7 overflow-hidden mask-[linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
            <div className="flex w-max items-center gap-14 sbl-marquee">
              {[...customers, ...customers].map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="whitespace-nowrap text-[22px] font-semibold tracking-[-0.02em] text-ink/38 transition-colors hover:text-ink/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-divider pt-10 min-[720px]:grid-cols-4">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <div className="text-center min-[720px]:text-left">
                  <div className="font-mono text-[clamp(26px,3.4vw,40px)] font-medium leading-none tracking-[-0.02em]">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[13px] text-ink/50">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Problem ─────────────────────────────────────────── */}
      <section className="py-[clamp(64px,9vw,140px)]">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <Reveal>
              <Kicker className="justify-center">The old way</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <SectionHeading className="mt-5">
                Your team&apos;s time is buried in busywork.
              </SectionHeading>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-[1.65] text-ink/60">
                The tools are all there — they just don&apos;t talk to each other. So people
                become the glue, stitching context together by hand, all day long.
              </p>
            </Reveal>
          </div>

          <div className="mx-auto mt-14 max-w-[920px] overflow-hidden rounded-[22px] border border-divider">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr]">
              <div className="hidden flex-col justify-center gap-1 border-b border-divider bg-secondary/30 px-6 py-4 sm:col-start-1 sm:flex sm:border-b-0">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink/45">Without Sable</span>
              </div>
              <div aria-hidden className="hidden sm:block sm:border-b sm:border-divider" />
              <div className="hidden flex-col justify-center gap-1 border-b border-divider bg-brand/6 px-6 py-4 sm:col-start-3 sm:flex sm:border-b-0">
                <span className="font-mono text-[11px] uppercase tracking-wider text-brand-700">With Sable</span>
              </div>

              {problems.map((p, i) => (
                <Reveal key={p.before} delay={(i % 4) * 70} className="contents">
                  <div className="flex items-center gap-3 border-t border-divider px-6 py-4 sm:col-start-1">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-ink/10 text-ink/40">
                      <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-[14.5px] text-ink/55">{p.before}</span>
                  </div>
                  <div aria-hidden className="hidden place-items-center border-t border-divider text-ink/25 sm:grid">
                    <span className="px-3">→</span>
                  </div>
                  <div className="flex items-center gap-3 border-t border-divider bg-brand/4 px-6 py-4 sm:col-start-3">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand/18 text-brand">
                      <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3.2">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[14.5px] text-ink/90">{p.after}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Bento feature grid ──────────────────────────────── */}
      <section id="bento" className="scroll-mt-[72px] py-[clamp(48px,7vw,110px)]">
        <Container>
          <div className="max-w-[640px]">
            <Reveal>
              <Kicker>Platform</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <SectionHeading className="mt-5">One platform, every agent</SectionHeading>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-[16px] leading-[1.65] text-ink/60">
                Chat, search, automations and multi-step agents — all grounded in your company&apos;s
                knowledge and wired into your tools.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 min-[900px]:auto-rows-[236px] min-[900px]:grid-cols-6">
            {bento.map((b, i) => (
              <Reveal key={b.key} delay={(i % 3) * 80} className={cn("min-h-[280px]", b.span)}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-divider bg-card p-5 transition-colors hover:border-ink/20">
                  <div>
                    <div className="font-mono text-[10.5px] uppercase tracking-wider text-brand-700">
                      {b.eyebrow}
                    </div>
                    <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.01em]">{b.title}</h3>
                    <p className="mt-2 max-w-[42ch] text-[13.5px] leading-[1.55] text-ink/58">{b.body}</p>
                  </div>
                  <div className="mt-4 min-h-0 flex-1">
                    <BentoPreview kind={b.key} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Product walkthrough ─────────────────────────────── */}
      <section id="product" className="scroll-mt-[72px] py-[clamp(64px,9vw,140px)]">
        <Container>
          <div className="mx-auto max-w-[680px] text-center">
            <Reveal>
              <Kicker className="justify-center">How it works</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <SectionHeading className="mt-5">Live in three steps</SectionHeading>
            </Reveal>
          </div>

          <div className="mt-16 flex flex-col gap-[clamp(48px,7vw,104px)]">
            {steps.map((step, i) => {
              const flip = i % 2 === 1;
              return (
                <div
                  key={step.no}
                  className="grid grid-cols-1 items-center gap-[clamp(28px,4vw,64px)] min-[880px]:grid-cols-2"
                >
                  <Reveal className={cn(flip && "min-[880px]:order-2")}>
                    <div className="max-w-[440px]">
                      <div className="flex items-center gap-3">
                        <span className="grid size-9 place-items-center rounded-full border border-divider bg-secondary font-mono text-[13px] text-brand-700">
                          {step.no}
                        </span>
                        <span className="h-px flex-1 bg-divider" />
                      </div>
                      <h3 className="mt-5 text-[clamp(22px,2.6vw,30px)] font-semibold tracking-[-0.02em]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[15.5px] leading-[1.65] text-ink/62">{step.body}</p>
                    </div>
                  </Reveal>

                  <Reveal delay={120} className={cn("relative", flip && "min-[880px]:order-1")}>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-6 -z-10 opacity-60 sbl-aurora"
                    />
                    <WalkthroughVisual step={i} />
                  </Reveal>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Interactive dashboard showcase ──────────────────── */}
      <section className="relative overflow-hidden border-y border-divider py-[clamp(64px,9vw,140px)]">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-70 sbl-aurora" />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.03] sbl-noise" />
        <Container className="relative">
          <div className="mx-auto max-w-[720px] text-center">
            <Reveal>
              <Kicker className="justify-center">The workspace</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <SectionHeading className="mt-5">Everything in one pane of glass</SectionHeading>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-[1.65] text-ink/60">
                Metrics, agent runs, conversations and files — the whole operation, live, in a
                workspace your team will actually open every day.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="mt-14">
            <div className="group transition-transform duration-500 hover:-translate-y-1">
              <ShowcaseDashboard />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Integrations ────────────────────────────────────── */}
      <section className="py-[clamp(64px,9vw,140px)]">
        <Container>
          <div className="grid grid-cols-1 gap-[clamp(32px,5vw,72px)] min-[900px]:grid-cols-[.8fr_1.2fr]">
            <div>
              <Reveal>
                <Kicker>Integrations</Kicker>
              </Reveal>
              <Reveal delay={80}>
                <SectionHeading className="mt-5">
                  Works where
                  <br className="hidden sm:block" /> your team works
                </SectionHeading>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-[42ch] text-[16px] leading-[1.65] text-ink/60">
                  Connect your stack in two clicks. Two-way sync keeps everything in step — no
                  brittle scripts, no stale data.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <a href="#pricing" className={cn(btnGhost, "mt-8")}>
                  Browse 100+ integrations <Arrow />
                </a>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-3.5 min-[560px]:grid-cols-4">
              {integrations.map((it, i) => (
                <Reveal key={it.key} delay={(i % 4) * 60}>
                  <div className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-divider bg-card p-4 transition-all hover:-translate-y-1 hover:border-ink/20">
                    <span
                      className="grid size-11 place-items-center rounded-xl border border-divider bg-secondary transition-colors"
                      style={{ boxShadow: `0 0 0 0 ${it.tint}` }}
                    >
                      <IntegrationGlyph id={it.key} />
                    </span>
                    <div>
                      <div className="text-[14px] font-medium">{it.name}</div>
                      <div className="mt-0.5 flex items-center gap-1.5 font-mono text-[10px] text-ink/40">
                        <span className="size-1.5 rounded-full bg-emerald-400" /> connected
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Testimonials ────────────────────────────────────── */}
      <section className="border-t border-divider py-[clamp(64px,9vw,140px)]">
        <Container>
          <div className="max-w-[640px]">
            <Reveal>
              <Kicker>Loved by teams</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <SectionHeading className="mt-5">The work speaks for itself</SectionHeading>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 min-[720px]:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 90}>
                <figure className="flex h-full flex-col rounded-[22px] border border-divider bg-card p-7 transition-colors hover:border-ink/20">
                  <blockquote className="flex-1 text-[17px] leading-[1.6] tracking-[-0.01em] text-ink/88">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-divider pt-5">
                    <span className="grid size-10 place-items-center rounded-full bg-brand/18 font-mono text-[13px] font-medium text-brand-700">
                      {t.initials}
                    </span>
                    <span>
                      <span className="block text-[14.5px] font-semibold">{t.name}</span>
                      <span className="block text-[13px] text-ink/50">
                        {t.role} · {t.company}
                      </span>
                    </span>
                    <span className="ml-auto text-[15px] font-semibold tracking-[-0.02em] text-ink/35">
                      {t.company}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Pricing ─────────────────────────────────────────── */}
      <section id="pricing" className="scroll-mt-[72px] border-t border-divider py-[clamp(64px,9vw,140px)]">
        <Container>
          <div className="mx-auto max-w-[680px] text-center">
            <Reveal>
              <Kicker className="justify-center">Pricing</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <SectionHeading className="mt-5">Simple, usage-based pricing</SectionHeading>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-5 max-w-[46ch] text-[16px] leading-[1.65] text-ink/60">
                Start free. Upgrade when your agents start pulling their weight.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 items-start gap-5 min-[900px]:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 90}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-[22px] border p-7",
                    plan.featured
                      ? "border-brand/50 bg-card sbl-glow min-[900px]:-mt-4 min-[900px]:pb-11"
                      : "border-divider bg-card",
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-wider text-primary-foreground">
                      Most popular
                    </span>
                  )}
                  <div className="text-[15px] font-semibold">{plan.name}</div>
                  <p className="mt-1.5 min-h-[40px] text-[13.5px] leading-normal text-ink/55">{plan.blurb}</p>
                  <div className="mt-5 flex items-end gap-1.5">
                    <span className="font-mono text-[40px] font-medium leading-none tracking-[-0.03em]">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-[13px] text-ink/45">{plan.cadence}</span>
                  </div>
                  <a
                    href="#top"
                    className={cn(plan.featured ? btnPrimary : btnGhost, "mt-6 w-full")}
                  >
                    {plan.cta}
                  </a>
                  <ul className="mt-7 space-y-3 border-t border-divider pt-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-[14px] text-ink/75">
                        <span className="grid size-4 shrink-0 place-items-center rounded-full bg-brand/18 text-brand">
                          <svg viewBox="0 0 24 24" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="3.4">
                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section id="faq" className="scroll-mt-[72px] py-[clamp(64px,9vw,140px)]">
        <Container className="max-w-[820px]">
          <div className="text-center">
            <Reveal>
              <Kicker className="justify-center">FAQ</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <SectionHeading className="mt-5">Questions, answered</SectionHeading>
            </Reveal>
          </div>

          <div className="mt-12">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={(i % 3) * 60}>
                <details className="group border-b border-divider py-5 [&_summary]:list-none">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 text-[16.5px] font-medium transition-colors hover:text-brand-700">
                    {faq.q}
                    <span
                      aria-hidden
                      className="grid size-7 shrink-0 place-items-center rounded-full border border-divider text-[18px] leading-none text-ink/55 transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[68ch] text-[15px] leading-[1.7] text-ink/60">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="px-[clamp(20px,5vw,64px)] pb-[clamp(56px,7vw,120px)]">
        <Container className="relative overflow-hidden rounded-[clamp(24px,3vw,40px)] border border-divider bg-secondary/30 px-[clamp(28px,5vw,80px)] py-[clamp(56px,7vw,104px)]">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-full sbl-aurora opacity-80" />
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04] sbl-noise" />
          <div className="relative mx-auto max-w-[680px] text-center">
            <h2 className="text-[clamp(30px,4.6vw,58px)] font-semibold leading-[1.04] tracking-[-0.035em]">
              Put the busywork on autopilot.
            </h2>
            <p className="mx-auto mt-5 max-w-[46ch] text-[16px] leading-[1.6] text-ink/64">
              Join 40,000+ teams shipping outcomes with Sable agents. Free to start — no credit
              card required.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#top" className={btnPrimary}>
                Start free <Arrow />
              </a>
              <a href="#product" className={btnGhost}>
                Talk to sales
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-divider py-[clamp(48px,6vw,80px)]">
        <Container>
          <div className="grid grid-cols-2 gap-10 min-[720px]:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
            <div className="col-span-2 min-[720px]:col-span-1">
              <div className="flex items-center gap-2.5">
                <span className="grid size-7 place-items-center rounded-lg bg-brand text-[14px] font-bold text-primary-foreground">
                  S
                </span>
                <span className="text-[17px] font-semibold">{BRAND}</span>
              </div>
              <p className="mt-4 max-w-[32ch] text-[13.5px] leading-[1.6] text-ink/50">{TAGLINE}</p>
              <div className="mt-5 flex gap-2.5">
                {["github", "discord", "linear"].map((k) => (
                  <span
                    key={k}
                    className="grid size-9 place-items-center rounded-lg border border-divider bg-card text-ink/60 transition-colors hover:text-ink"
                  >
                    <IntegrationGlyph id={k} className="size-4" />
                  </span>
                ))}
              </div>
            </div>

            {footerCols.map((col) => (
              <div key={col.title}>
                <div className="font-mono text-[11px] uppercase tracking-wider text-ink/40">{col.title}</div>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[13.5px] text-ink/60 no-underline transition-colors hover:text-ink"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-divider pt-6 font-mono text-[12px] text-ink/40">
            <span>© 2026 {BRAND} Labs, Inc.</span>
            <span className="flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-emerald-400 sbl-pulse" />
              All systems operational
            </span>
          </div>
        </Container>
      </footer>
    </div>
  );
}

/* ── Section-local composition helpers ────────────────────────────── */

function BentoPreview({ kind }: { kind: string }) {
  switch (kind) {
    case "chat":
      return <ChatWidget className="h-full border-divider" />;
    case "automation":
      return (
        <div className="flex items-center gap-1.5">
          {[
            { t: "PR merged", tag: "trigger" },
            { t: "Run tests", tag: "action" },
            { t: "Ship to Slack", tag: "action" },
          ].map((n, i, arr) => (
            <div key={n.t} className="flex flex-1 items-center gap-1.5">
              <div className="flex-1 rounded-lg border border-divider bg-secondary px-2.5 py-2">
                <div className="font-mono text-[9px] uppercase tracking-wide text-brand-700">{n.tag}</div>
                <div className="mt-0.5 truncate text-[11px] text-ink/85">{n.t}</div>
              </div>
              {i < arr.length - 1 && <span className="shrink-0 text-ink/30">→</span>}
            </div>
          ))}
        </div>
      );
    case "agents":
      return <AgentWidget className="border-divider" />;
    case "search":
      return <SearchWidget className="border-divider" />;
    case "analytics":
      return (
        <div className="flex h-full items-end gap-4 rounded-[14px] border border-divider bg-secondary/40 p-3.5">
          <div className="flex flex-col justify-end">
            <Ring pct={82} label="82%" />
          </div>
          <div className="flex h-full flex-1 flex-col justify-end">
            <div className="h-[64px]">
              <Bars values={[40, 58, 46, 72, 60, 88]} />
            </div>
          </div>
        </div>
      );
    case "integrations":
      return (
        <div className="grid grid-cols-4 gap-2">
          {["github", "slack", "notion", "drive", "discord", "figma", "linear", "jira"].map((k) => (
            <span
              key={k}
              className="grid aspect-square place-items-center rounded-xl border border-divider bg-secondary"
            >
              <IntegrationGlyph id={k} className="size-5" />
            </span>
          ))}
        </div>
      );
    default:
      return null;
  }
}

function WalkthroughVisual({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div className="sbl-glass rounded-[18px] p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[13px] font-medium">Connect your tools</span>
          <span className="font-mono text-[10px] text-ink/40">8 / 100+</span>
        </div>
        <div className="grid grid-cols-4 gap-2.5">
          {integrations.map((it) => (
            <span
              key={it.key}
              className="grid aspect-square place-items-center rounded-xl border border-divider bg-secondary/70"
            >
              <IntegrationGlyph id={it.key} className="size-6" />
            </span>
          ))}
        </div>
        <div className="mt-3.5 flex items-center gap-2 rounded-xl border border-divider bg-secondary/50 px-3 py-2.5">
          <span className="size-1.5 rounded-full bg-emerald-400 sbl-pulse" />
          <span className="font-mono text-[11px] text-ink/60">Mapping permissions…</span>
        </div>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="sbl-glass rounded-[18px] p-2.5">
        <ChatWidget className="border-0 bg-transparent" />
      </div>
    );
  }
  return (
    <div className="sbl-glass rounded-[18px] p-2.5">
      <AgentWidget className="border-0 bg-transparent" />
      <div className="m-2.5 mt-1 flex items-center justify-between rounded-xl border border-divider bg-secondary/50 px-3.5 py-3">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-ink/45">Report</div>
          <div className="mt-0.5 text-[12.5px]">4 tasks shipped · 0 errors</div>
        </div>
        <VoiceWidget className="hidden w-[150px] border-0 bg-transparent p-0 min-[560px]:flex" />
      </div>
    </div>
  );
}
