// Central site metadata. Set NEXT_PUBLIC_SITE_URL in the environment
// (e.g. your production domain) — it drives canonical URLs, OG tags,
// the sitemap and robots.txt.
export const siteConfig = {
  name: "Landing Kit",
  title: "Landing Kit — Production-ready site templates",
  description:
    "A growing collection of polished, fully-built marketing site templates — each on its own route, previewable live. Built with Next.js, Tailwind CSS and shadcn/ui.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://templates.anuragkumar.dev").replace(/\/$/, ""),
  author: {
    name: "Anurag Kumar",
    url: "https://github.com/dev-anurag-singh",
  },
  keywords: [
    "site templates",
    "landing page templates",
    "Next.js templates",
    "Tailwind CSS",
    "shadcn/ui",
    "marketing website",
    "barber website template",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
