// Content for the Sable AI-agent-platform template.

export const BRAND = "Sable";
export const TAGLINE = "Autonomous agents for the whole team.";
export const ANNOUNCE = "Sable 2.0 — agents that learn your stack";

export const HERO = {
  headline: ["Your team's work,", "on autopilot."],
  sub: "Sable deploys AI agents that plan, act, and ship across the tools you already use — so your team delivers outcomes, not tickets.",
};

export const nav = [
  ["Product", "#product"],
  ["Solutions", "#bento"],
  ["Pricing", "#pricing"],
  ["Docs", "#faq"],
] as const;

// Trusted-by wordmarks (fictional, but believable).
export const customers = [
  "Northwind",
  "Lattice",
  "Vantage",
  "Helio",
  "Quanta",
  "Orbital",
  "Fathom",
  "Cobalt",
];

export const stats = [
  { value: "40k+", label: "agents deployed" },
  { value: "12M", label: "tasks automated / mo" },
  { value: "99.98%", label: "uptime" },
  { value: "4.2h", label: "saved per person / wk" },
];

export type Problem = { before: string; after: string };
export const problems: Problem[] = [
  { before: "Context scattered across a dozen tabs", after: "One workspace your agents can actually read" },
  { before: "Copy-pasting between tools all day", after: "Agents move data where it needs to go" },
  { before: "Status updates that go stale by lunch", after: "Live reporting the moment work changes" },
  { before: "Work that waits on a human to route it", after: "Agents triage, assign, and follow up" },
];

export type Bento = {
  key: string;
  eyebrow: string;
  title: string;
  body: string;
  span: string; // tailwind grid span classes
};

export const bento: Bento[] = [
  {
    key: "chat",
    eyebrow: "Ask anything",
    title: "A copilot that knows your company",
    body: "Grounded in your docs, tickets, and code. Ask in plain language and get answers with sources — never a hallucination.",
    span: "min-[900px]:col-span-3 min-[900px]:row-span-2",
  },
  {
    key: "automation",
    eyebrow: "Automations",
    title: "Workflows that run themselves",
    body: "Chain triggers and actions across tools. No brittle scripts.",
    span: "min-[900px]:col-span-3",
  },
  {
    key: "agents",
    eyebrow: "Agents",
    title: "Multi-step agents, supervised",
    body: "Watch each step, approve when it matters, roll back anytime.",
    span: "min-[900px]:col-span-3",
  },
  {
    key: "search",
    eyebrow: "Knowledge",
    title: "Search that reads for you",
    body: "Semantic search across every source you connect.",
    span: "min-[900px]:col-span-2",
  },
  {
    key: "analytics",
    eyebrow: "Analytics",
    title: "See the impact",
    body: "Track hours saved, tasks shipped, and agent accuracy.",
    span: "min-[900px]:col-span-2",
  },
  {
    key: "integrations",
    eyebrow: "Integrations",
    title: "Plugs into your stack",
    body: "Two-way sync with 100+ tools out of the box.",
    span: "min-[900px]:col-span-2",
  },
];

export type Step = { no: string; title: string; body: string };
export const steps: Step[] = [
  {
    no: "01",
    title: "Connect your stack",
    body: "Link GitHub, Slack, Notion, Drive and more in a couple of clicks. Sable maps your tools and permissions automatically.",
  },
  {
    no: "02",
    title: "Describe the outcome",
    body: "Tell Sable what done looks like, in plain language. It drafts a plan, shows the steps, and waits for your go-ahead.",
  },
  {
    no: "03",
    title: "Agents execute & report",
    body: "Agents do the work across your tools, keep a full audit trail, and report back the moment something needs you.",
  },
];

// Integrations — key drives the inline logo glyph in the page.
export const integrations = [
  { key: "github", name: "GitHub", tint: "#ededf2" },
  { key: "slack", name: "Slack", tint: "#e01e5a" },
  { key: "notion", name: "Notion", tint: "#ededf2" },
  { key: "drive", name: "Google Drive", tint: "#ffcf3f" },
  { key: "discord", name: "Discord", tint: "#5865f2" },
  { key: "figma", name: "Figma", tint: "#a259ff" },
  { key: "linear", name: "Linear", tint: "#8b8df7" },
  { key: "jira", name: "Jira", tint: "#4f9cf8" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};
export const testimonials: Testimonial[] = [
  {
    quote:
      "Sable quietly took over the work nobody wanted to do. Our on-call triage went from an hour a day to zero — the agents just handle it.",
    name: "Priya Raman",
    role: "VP Engineering",
    company: "Northwind",
    initials: "PR",
  },
  {
    quote:
      "We shipped an internal copilot in an afternoon that would've been a quarter-long project. The audit trail is what got it past security.",
    name: "Marcus Feld",
    role: "Head of Platform",
    company: "Lattice",
    initials: "MF",
  },
  {
    quote:
      "It's the first AI tool our whole team actually kept using after week two. It lives where the work already happens.",
    name: "Dana Osei",
    role: "Chief of Staff",
    company: "Helio",
    initials: "DO",
  },
  {
    quote:
      "The agents don't just answer — they act, then tell you exactly what they did. That trust is the whole game.",
    name: "Yuki Tanaka",
    role: "Director of Ops",
    company: "Orbital",
    initials: "YT",
  },
];

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  cta: string;
  featured: boolean;
  features: string[];
};
export const plans: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    cadence: "free forever",
    blurb: "For individuals automating their own work.",
    cta: "Start free",
    featured: false,
    features: [
      "1 workspace",
      "3 active agents",
      "500 tasks / month",
      "10 integrations",
      "Community support",
    ],
  },
  {
    name: "Team",
    price: "$24",
    cadence: "per user / month",
    blurb: "For teams that want agents in the loop everywhere.",
    cta: "Start 14-day trial",
    featured: true,
    features: [
      "Unlimited workspaces",
      "Unlimited agents",
      "50k tasks / month",
      "100+ integrations",
      "Approvals & audit log",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "let's talk",
    blurb: "For orgs with security and scale requirements.",
    cta: "Book a demo",
    featured: false,
    features: [
      "SSO & SCIM",
      "Self-hosted option",
      "SOC 2 & HIPAA",
      "Dedicated agents",
      "Custom models",
      "White-glove onboarding",
    ],
  },
];

export const faqs = [
  {
    q: "How is Sable different from a chatbot?",
    a: "A chatbot answers. Sable acts. Its agents plan multi-step work, take actions across your connected tools, and report back with a full audit trail — with human approval wherever you want it.",
  },
  {
    q: "Is my data used to train models?",
    a: "Never. Your data is isolated per workspace and is never used to train foundation models. Enterprise plans can bring their own models or run Sable fully self-hosted.",
  },
  {
    q: "Which tools does Sable connect to?",
    a: "100+ out of the box — including GitHub, Slack, Notion, Google Drive, Linear, Jira, Figma and Discord — plus a REST API and webhooks for anything custom.",
  },
  {
    q: "Can I control what agents are allowed to do?",
    a: "Yes. Every agent runs inside scoped permissions, and you can require approval before any write action. Nothing happens outside the boundaries you set.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams connect their first tools and ship a working agent in under ten minutes. No infrastructure, no scripts, no fine-tuning required.",
  },
];

export const footerCols: { title: string; links: string[] }[] = [
  { title: "Product", links: ["Agents", "Automations", "Integrations", "Changelog", "Pricing"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Customers", "Contact"] },
  { title: "Resources", links: ["Docs", "API reference", "Guides", "Community", "Status"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "SOC 2", "DPA"] },
];
