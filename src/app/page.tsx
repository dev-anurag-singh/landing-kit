import Link from "next/link";

type Template = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  accent: string;
  available: boolean;
};

const templates: Template[] = [
  {
    slug: "meridian-salon",
    name: "Meridian",
    tagline: "A men's grooming lounge — services, booking flow, calendar and reviews.",
    category: "Barber / Salon",
    accent: "#ec3013",
    available: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-ink">
      <div className="mx-auto max-w-[1100px] px-[clamp(20px,5vw,72px)] py-[clamp(56px,8vw,120px)]">
        <span className="inline-flex items-center gap-[9px] text-[13px] font-bold uppercase tracking-[0.09em] text-brand-700">
          <span className="block h-0.5 w-[26px] bg-brand" />
          Template Studio
        </span>
        <h1 className="mt-6 max-w-[16ch] font-heading text-[clamp(40px,6vw,76px)] font-extrabold leading-[1.02] tracking-[-0.028em]">
          Production-ready site templates.
        </h1>
        <p className="mt-6 max-w-[54ch] text-[clamp(16px,1.6vw,19px)] leading-[1.6] text-ink/72">
          A growing collection of polished, fully-built marketing sites. Each template lives on its
          own route — pick one to preview it live.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => {
            const card = (
              <div className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-ink/12 bg-surface transition-all hover:-translate-y-1 hover:border-ink/28 hover:shadow-soft-lg">
                <div
                  className="relative flex aspect-[16/10] items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${t.accent}, #201e1d)` }}
                >
                  <span className="font-heading text-[34px] font-extrabold tracking-[0.16em] text-white">
                    {t.name.toUpperCase()}
                  </span>
                  {!t.available && (
                    <span className="absolute right-3 top-3 rounded-[8px] bg-white/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-ink">
                      Soon
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-brand-700">
                    {t.category}
                  </div>
                  <div className="mt-1.5 font-heading text-[22px] font-extrabold">{t.name}</div>
                  <p className="mt-2 flex-1 text-[14px] leading-[1.55] text-ink/64">{t.tagline}</p>
                  {t.available && (
                    <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-[14px] font-extrabold text-brand">
                      Preview template <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </span>
                  )}
                </div>
              </div>
            );

            return t.available ? (
              <Link key={t.slug} href={`/templates/${t.slug}`} className="no-underline">
                {card}
              </Link>
            ) : (
              <div key={t.slug} className="cursor-default opacity-70">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
