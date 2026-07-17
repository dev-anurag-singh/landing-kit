import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ════════════════════════════════════════════════════════════════════
   Sable — hand-built product UI mockups.

   Everything here is presentational (no runtime state). These pieces are
   composed into the hero centerpiece, the bento grid, the walkthrough and
   the big showcase dashboard so the whole page reads like screenshots of a
   real application rather than placeholder boxes.
   ════════════════════════════════════════════════════════════════════ */

const PANEL = "rounded-[14px] border border-divider bg-card";

/* ── Tiny building blocks ─────────────────────────────────────────── */

export function Dot({ className, pulse }: { className?: string; pulse?: boolean }) {
  return (
    <span
      className={cn(
        "inline-block size-2 rounded-full",
        pulse && "sbl-pulse",
        className ?? "bg-emerald-400",
      )}
    />
  );
}

export function Avatar({ initials, className }: { initials: string; className?: string }) {
  return (
    <span
      className={cn(
        "grid size-7 shrink-0 place-items-center rounded-full bg-brand/18 font-mono text-[11px] font-medium text-brand-700",
        className,
      )}
    >
      {initials}
    </span>
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-divider bg-secondary px-2.5 py-1 font-mono text-[10.5px] text-ink/70",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* Window chrome — mac-style traffic lights + optional title. */
export function WinBar({ title, right }: { title?: ReactNode; right?: ReactNode }) {
  return (
    <div className="flex items-center gap-2 border-b border-divider px-3.5 py-2.5">
      <span className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="size-2.5 rounded-full bg-[#28c840]/80" />
      </span>
      {title && (
        <span className="ml-2 truncate font-mono text-[11px] text-ink/55">{title}</span>
      )}
      {right && <span className="ml-auto">{right}</span>}
    </div>
  );
}

/* ── Charts (pure SVG) ────────────────────────────────────────────── */

function buildArea(values: number[], w: number, h: number, pad = 4) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const step = w / (values.length - 1);
  const pts = values.map((v, i) => [i * step, pad + (h - pad * 2) * (1 - (v - min) / range)] as const);
  const line = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L${w} ${h} L0 ${h} Z`;
  return { line, area, last: pts[pts.length - 1] };
}

export function AreaChart({
  values = [18, 26, 22, 34, 30, 46, 41, 58, 52, 70, 66, 84],
  className,
  height = 96,
}: {
  values?: number[];
  className?: string;
  height?: number;
}) {
  const w = 320;
  const { line, area, last } = buildArea(values, w, height);
  const id = `g${values.length}-${Math.round(values[0])}`;
  return (
    <svg
      viewBox={`0 0 ${w} ${height}`}
      preserveAspectRatio="none"
      className={cn("w-full", className)}
      style={{ height }}
      aria-hidden
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
      <circle cx={last[0]} cy={last[1]} r="3.5" fill="var(--primary)" />
      <circle cx={last[0]} cy={last[1]} r="7" fill="var(--primary)" opacity="0.25" />
    </svg>
  );
}

export function Bars({
  values = [40, 62, 48, 78, 56, 88, 72],
  className,
}: {
  values?: number[];
  className?: string;
}) {
  const max = Math.max(...values);
  return (
    <div className={cn("flex h-full items-end gap-1.5", className)} aria-hidden>
      {values.map((v, i) => (
        <span
          key={i}
          className="flex-1 rounded-t-[3px] bg-brand/70 transition-colors"
          style={{
            height: `${(v / max) * 100}%`,
            background:
              i === values.length - 1
                ? "var(--primary)"
                : "color-mix(in srgb, var(--primary) 42%, transparent)",
          }}
        />
      ))}
    </div>
  );
}

export function Ring({ pct = 72, label, className }: { pct?: number; label?: string; className?: string }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <div className={cn("relative grid place-items-center", className)} aria-hidden>
      <svg viewBox="0 0 64 64" className="size-16 -rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="var(--border)" strokeWidth="6" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct / 100)}
        />
      </svg>
      <span className="absolute font-mono text-[13px] font-medium">{label ?? `${pct}%`}</span>
    </div>
  );
}

/* ── Widgets ──────────────────────────────────────────────────────── */

export function ChatWidget({ className }: { className?: string }) {
  return (
    <div className={cn(PANEL, "overflow-hidden", className)}>
      <WinBar
        title="Copilot"
        right={
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
            <Dot pulse /> online
          </span>
        }
      />
      <div className="space-y-3 p-3.5">
        <div className="flex justify-end">
          <p className="max-w-[80%] rounded-2xl rounded-br-sm bg-secondary px-3 py-2 text-[12.5px] text-ink/85">
            Summarize this week&apos;s churn risks and open a ticket for each.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand text-[11px] font-bold text-primary-foreground">
            S
          </span>
          <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-divider bg-secondary/60 px-3 py-2.5">
            <p className="text-[12.5px] leading-relaxed text-ink/85">
              Found 3 accounts trending down. I&apos;ve drafted tickets and tagged their owners:
            </p>
            <ul className="mt-2 space-y-1.5">
              {["Northwind — usage -38%", "Helio — 2 SEV-1s open", "Cobalt — renewal in 9d"].map((t) => (
                <li key={t} className="flex items-center gap-2 font-mono text-[11px] text-ink/70">
                  <span className="size-1.5 rounded-full bg-brand" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 border-t border-divider p-2.5">
        <div className="flex-1 rounded-full border border-divider bg-secondary px-3 py-2 text-[12px] text-ink/40">
          Ask Sable to do something…
        </div>
        <span className="grid size-8 place-items-center rounded-full bg-brand text-primary-foreground">
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export function SearchWidget({ className }: { className?: string }) {
  const results = [
    { t: "Q3 board deck — final.pdf", s: "Drive", k: "PDF" },
    { t: "Onboarding runbook", s: "Notion", k: "DOC" },
    { t: "auth-service · rate limits", s: "GitHub", k: "CODE" },
  ];
  return (
    <div className={cn(PANEL, "overflow-hidden", className)}>
      <div className="flex items-center gap-2 border-b border-divider px-3.5 py-3">
        <svg viewBox="0 0 24 24" className="size-4 text-ink/40" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3-3" strokeLinecap="round" />
        </svg>
        <span className="text-[12.5px] text-ink/80">rate limit policy</span>
        <span className="ml-auto font-mono text-[10px] text-ink/35">⌘K</span>
      </div>
      <div className="p-2">
        {results.map((r) => (
          <div
            key={r.t}
            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 hover:bg-secondary"
          >
            <span className="grid size-6 place-items-center rounded-md border border-divider bg-secondary font-mono text-[8.5px] text-ink/55">
              {r.k}
            </span>
            <span className="truncate text-[12px] text-ink/80">{r.t}</span>
            <span className="ml-auto font-mono text-[10px] text-ink/40">{r.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AnalyticsWidget({ className }: { className?: string }) {
  return (
    <div className={cn(PANEL, "p-4", className)}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10.5px] uppercase tracking-wider text-ink/50">Hours saved</span>
        <span className="rounded-full bg-emerald-400/12 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
          +18%
        </span>
      </div>
      <div className="mt-1 flex items-end gap-2">
        <span className="font-mono text-[26px] font-medium leading-none">1,284</span>
        <span className="pb-1 text-[11px] text-ink/45">this month</span>
      </div>
      <AreaChart className="mt-3" height={72} />
    </div>
  );
}

export function AgentWidget({ className }: { className?: string }) {
  const runs = [
    { t: "Triage inbound bugs", s: "done" },
    { t: "Draft release notes", s: "done" },
    { t: "Sync Linear ↔ GitHub", s: "run" },
    { t: "Notify #eng of deploy", s: "wait" },
  ];
  return (
    <div className={cn(PANEL, "overflow-hidden", className)}>
      <WinBar title="agent · release-bot" />
      <ul className="p-2.5">
        {runs.map((r) => (
          <li key={r.t} className="flex items-center gap-2.5 rounded-lg px-2 py-2">
            {r.s === "done" ? (
              <span className="grid size-5 place-items-center rounded-full bg-emerald-400/15 text-emerald-400">
                <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            ) : r.s === "run" ? (
              <span className="grid size-5 place-items-center rounded-full bg-brand/20 text-brand">
                <svg viewBox="0 0 24 24" className="size-3.5 sbl-spin" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 3a9 9 0 1 0 9 9" strokeLinecap="round" />
                </svg>
              </span>
            ) : (
              <span className="size-5 rounded-full border border-divider" />
            )}
            <span className={cn("text-[12px]", r.s === "wait" ? "text-ink/45" : "text-ink/85")}>{r.t}</span>
            {r.s === "run" && (
              <span className="ml-auto font-mono text-[10px] text-brand">running</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TasksWidget({ className }: { className?: string }) {
  const tasks = [
    { t: "Review agent PR #482", who: "PR", done: true },
    { t: "Approve prod automation", who: "MF", done: false },
    { t: "Add Slack workspace", who: "DO", done: false },
  ];
  return (
    <div className={cn(PANEL, "p-3.5", className)}>
      <div className="mb-2.5 flex items-center justify-between">
        <span className="text-[12.5px] font-medium">My tasks</span>
        <span className="font-mono text-[10px] text-ink/40">3 open</span>
      </div>
      <ul className="space-y-1.5">
        {tasks.map((t) => (
          <li key={t.t} className="flex items-center gap-2.5">
            <span
              className={cn(
                "grid size-4 place-items-center rounded-[5px] border",
                t.done ? "border-brand bg-brand text-primary-foreground" : "border-ink/25",
              )}
            >
              {t.done && (
                <svg viewBox="0 0 24 24" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <span className={cn("flex-1 text-[12px]", t.done && "text-ink/40 line-through")}>{t.t}</span>
            <Avatar initials={t.who} className="size-5 text-[9px]" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NotificationsWidget({ className }: { className?: string }) {
  const items = [
    { d: "bg-emerald-400", t: "Agent shipped release v2.4.1", m: "2m" },
    { d: "bg-brand", t: "Approval needed: delete stale branch", m: "8m" },
    { d: "bg-amber-400", t: "Slack rate limit — retrying", m: "14m" },
  ];
  return (
    <div className={cn(PANEL, "p-3", className)}>
      <div className="mb-2 flex items-center gap-2 px-1">
        <svg viewBox="0 0 24 24" className="size-3.5 text-ink/55" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[12px] font-medium">Activity</span>
      </div>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i.t} className="flex items-start gap-2.5 rounded-lg px-1 py-1">
            <span className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", i.d)} />
            <span className="text-[11.5px] leading-snug text-ink/80">{i.t}</span>
            <span className="ml-auto font-mono text-[9.5px] text-ink/35">{i.m}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AutomationWidget({ className }: { className?: string }) {
  const nodes = [
    { t: "PR merged", tag: "trigger" },
    { t: "Run tests", tag: "action" },
    { t: "Post to Slack", tag: "action" },
  ];
  return (
    <div className={cn(PANEL, "p-4", className)}>
      <div className="mb-3 flex items-center gap-2">
        <span className="font-mono text-[10.5px] uppercase tracking-wider text-ink/50">Workflow</span>
        <Chip className="ml-auto">
          <Dot className="bg-emerald-400" /> live
        </Chip>
      </div>
      <div className="flex items-center gap-1.5">
        {nodes.map((n, i) => (
          <div key={n.t} className="flex flex-1 items-center gap-1.5">
            <div className="flex-1 rounded-lg border border-divider bg-secondary px-2.5 py-2">
              <div className="font-mono text-[9px] uppercase tracking-wide text-brand-700">{n.tag}</div>
              <div className="mt-0.5 truncate text-[11px] text-ink/85">{n.t}</div>
            </div>
            {i < nodes.length - 1 && (
              <svg viewBox="0 0 24 24" className="size-3.5 shrink-0 text-ink/30" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function VoiceWidget({ className }: { className?: string }) {
  const bars = [6, 12, 20, 32, 24, 40, 30, 46, 28, 38, 18, 26, 14, 22, 10];
  return (
    <div className={cn(PANEL, "flex items-center gap-3 p-4", className)}>
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="3" width="6" height="12" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3" strokeLinecap="round" />
        </svg>
      </span>
      <div className="flex h-8 flex-1 items-center gap-[3px]">
        {bars.map((b, i) => (
          <span
            key={i}
            className="w-[3px] rounded-full bg-brand/60"
            style={{ height: `${b}px`, opacity: 0.4 + (b / 46) * 0.6 }}
          />
        ))}
      </div>
      <span className="font-mono text-[10px] text-ink/45">0:12</span>
    </div>
  );
}

/* ── Integration logos (inline, recognizable, trademark-safe) ─────── */

export function IntegrationGlyph({ id, className }: { id: string; className?: string }) {
  const c = cn("size-6", className);
  switch (id) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="currentColor" aria-hidden>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case "slack":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden>
          <path fill="#36c5f0" d="M5.4 15a2.1 2.1 0 1 1-2.1-2.1h2.1V15zm1.05 0a2.1 2.1 0 0 1 4.2 0v5.25a2.1 2.1 0 0 1-4.2 0V15z" />
          <path fill="#2eb67d" d="M9 5.4a2.1 2.1 0 1 1 2.1-2.1v2.1H9zm0 1.05a2.1 2.1 0 0 1 0 4.2H3.75a2.1 2.1 0 0 1 0-4.2H9z" />
          <path fill="#ecb22e" d="M18.6 9a2.1 2.1 0 1 1 2.1 2.1h-2.1V9zm-1.05 0a2.1 2.1 0 0 1-4.2 0V3.75a2.1 2.1 0 0 1 4.2 0V9z" />
          <path fill="#e01e5a" d="M15 18.6a2.1 2.1 0 1 1-2.1 2.1v-2.1H15zm0-1.05a2.1 2.1 0 0 1 0-4.2h5.25a2.1 2.1 0 0 1 0 4.2H15z" />
        </svg>
      );
    case "notion":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" aria-hidden>
          <rect x="3" y="2.5" width="18" height="19" rx="3" fill="#ededf2" />
          <path d="M8 8v8M8 8l8 8M16 8v8" stroke="#101015" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "drive":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden>
          <path fill="#0066da" d="M6 3 1 12l3 5 5-9z" />
          <path fill="#00ac47" d="M6 3h12l5 9H11z" transform="translate(-2 0)" />
          <path fill="#00ac47" d="M9 3h6l5.5 9.5L18 17H6.5z" opacity="0" />
          <path fill="#ffba00" d="M9 3h6l5 9-3 5-5-9z" />
          <path fill="#00ac47" d="M4 17h11l-2.5 4H6.5z" />
          <path fill="#0066da" d="M15 17h5l-2.5 4h-5z" transform="translate(0 0)" />
        </svg>
      );
    case "discord":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="#5865f2" aria-hidden>
          <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.24.5a18.3 18.3 0 0 1 4.3 1.4 15.6 15.6 0 0 0-14.9 0A18.3 18.3 0 0 1 8.9 3.5L8.6 3a19.8 19.8 0 0 0-4.9 1.4C.6 9 .1 13.5.3 17.9a19.9 19.9 0 0 0 6 3l.7-1.7c-.9-.3-1.7-.7-2.5-1.2l.6-.4a14.2 14.2 0 0 0 12 0l.6.4c-.8.5-1.6.9-2.5 1.2l.7 1.7a19.9 19.9 0 0 0 6-3c.3-5.1-.5-9.6-3.4-13.5ZM8.5 15.3c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3Zm7 0c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3Z" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden>
          <path fill="#0acf83" d="M8.5 22a3.5 3.5 0 0 0 3.5-3.5V15H8.5a3.5 3.5 0 1 0 0 7Z" />
          <path fill="#a259ff" d="M8.5 2A3.5 3.5 0 0 0 8.5 9H12V2H8.5Z" transform="translate(0 6.5)" />
          <path fill="#f24e1e" d="M8.5 2A3.5 3.5 0 0 0 8.5 9H12V2H8.5Z" />
          <path fill="#ff7262" d="M12 2h3.5a3.5 3.5 0 0 1 0 7H12V2Z" />
          <circle cx="15.5" cy="12" r="3.5" fill="#1abcfe" />
        </svg>
      );
    case "linear":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="#8b8df7" aria-hidden>
          <path d="M2.2 13.6 10.4 21.8a10 10 0 0 1-8.2-8.2ZM2 11.3 12.7 22a10 10 0 0 0 2.5-.5L2.5 8.8a10 10 0 0 0-.5 2.5ZM3.4 6.6 17.4 20.6a10 10 0 0 0 2-1.4L4.8 4.6a10 10 0 0 0-1.4 2ZM6.3 3.3a10 10 0 0 1 14.4 14.4L6.3 3.3Z" />
        </svg>
      );
    case "jira":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden>
          <path fill="#2684ff" d="M12 2 3 11a1 1 0 0 0 0 1.4l4 4 5-5 5 5 .1-.1a6.4 6.4 0 0 0-.1-9.2z" opacity="0" />
          <path fill="#2684ff" d="M11.5 2 3.6 9.9a1 1 0 0 0 0 1.4l4.4 4.4 3.5-3.5V2Z" />
          <path fill="#4f9cf8" d="M12.5 22l7.9-7.9a1 1 0 0 0 0-1.4L16 8.3l-3.5 3.5V22Z" />
          <path fill="#2684ff" d="m8 6.3 4-4 4 4-4 4z" opacity="0" />
        </svg>
      );
    default:
      return <span className={cn("block rounded bg-brand/30", c)} />;
  }
}

/* ── Composed: hero centerpiece with orbiting windows ─────────────── */

function HeroMainWindow() {
  const sidebar = ["Home", "Agents", "Automations", "Knowledge", "Analytics"];
  return (
    <div className="sbl-glass overflow-hidden rounded-[18px] sbl-glow">
      <WinBar
        title="sable.app / workspace"
        right={
          <span className="hidden items-center gap-2 sm:flex">
            <Chip>
              <Dot className="bg-emerald-400" pulse /> all systems go
            </Chip>
          </span>
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-[168px_1fr]">
        {/* sidebar */}
        <div className="hidden flex-col gap-1 border-r border-divider p-3 sm:flex">
          <div className="mb-2 flex items-center gap-2 px-1">
            <span className="grid size-6 place-items-center rounded-md bg-brand text-[12px] font-bold text-primary-foreground">
              S
            </span>
            <span className="text-[13px] font-semibold">Sable</span>
          </div>
          {sidebar.map((s, i) => (
            <span
              key={s}
              className={cn(
                "flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[12.5px]",
                i === 1 ? "bg-secondary text-ink" : "text-ink/55",
              )}
            >
              <span className={cn("size-1.5 rounded-full", i === 1 ? "bg-brand" : "bg-ink/25")} />
              {s}
            </span>
          ))}
        </div>
        {/* main */}
        <div className="p-3.5 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-wider text-ink/45">Agents</div>
              <div className="mt-0.5 text-[16px] font-semibold sm:text-[18px]">Good morning, Priya</div>
            </div>
            <Avatar initials="PR" className="size-8" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {[
              { k: "Active agents", v: "18" },
              { k: "Tasks today", v: "342" },
              { k: "Accuracy", v: "99.2%" },
            ].map((m) => (
              <div key={m.k} className="rounded-xl border border-divider bg-secondary/50 p-2.5 sm:p-3">
                <div className="font-mono text-[9.5px] uppercase tracking-wide text-ink/45 sm:text-[10px]">
                  {m.k}
                </div>
                <div className="mt-1 font-mono text-[17px] font-medium sm:text-[20px]">{m.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 min-[520px]:grid-cols-[1.5fr_1fr]">
            <div className="rounded-xl border border-divider bg-secondary/40 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[12.5px] font-medium">Throughput</span>
                <span className="rounded-full bg-emerald-400/12 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                  +24%
                </span>
              </div>
              <AreaChart className="mt-2" height={84} />
            </div>
            <div className="hidden rounded-xl border border-divider bg-secondary/40 p-3 min-[520px]:block">
              <span className="text-[12.5px] font-medium">SLA met</span>
              <div className="mt-2 grid place-items-center">
                <Ring pct={94} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroStage() {
  return (
    <div className="relative mx-auto w-full max-w-[860px]">
      {/* centerpiece */}
      <div className="relative z-10 mx-auto max-w-[620px]">
        <HeroMainWindow />
      </div>

      {/* orbiting windows — hidden on small screens to keep the view clean */}
      <div className="pointer-events-none absolute left-[-7%] top-[6%] hidden w-[248px] -rotate-6 lg:block xl:left-[-12%]">
        <div className="sbl-float1 sbl-glass rounded-[16px]">
          <ChatWidget className="border-0 bg-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute right-[-6%] top-[2%] hidden w-[236px] rotate-[5deg] lg:block xl:right-[-11%]">
        <div className="sbl-float2 sbl-glass rounded-[16px]">
          <SearchWidget className="border-0 bg-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute left-[-4%] bottom-[4%] hidden w-[224px] rotate-3 blur-[0.4px] lg:block xl:left-[-9%]">
        <div className="sbl-float3 sbl-glass rounded-[16px]">
          <AnalyticsWidget className="border-0 bg-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute right-[-5%] bottom-[8%] hidden w-[232px] rotate-[-4deg] lg:block xl:right-[-10%]">
        <div className="sbl-float1 sbl-glass rounded-[16px]">
          <AgentWidget className="border-0 bg-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute right-[14%] bottom-[-3%] hidden w-[210px] rotate-6 opacity-90 blur-[0.6px] xl:block">
        <div className="sbl-float2 sbl-glass rounded-[16px]">
          <NotificationsWidget className="border-0 bg-transparent" />
        </div>
      </div>
    </div>
  );
}

/* ── Composed: big interactive-looking showcase dashboard ─────────── */

export function ShowcaseDashboard() {
  const nav = ["Home", "Agents", "Automations", "Knowledge", "Analytics", "Settings"];
  const files = [
    { t: "Q3-roadmap.md", s: "Notion", k: "DOC" },
    { t: "billing-service", s: "GitHub", k: "REPO" },
    { t: "customer-calls/", s: "Drive", k: "DIR" },
  ];
  return (
    <div className="sbl-glass overflow-hidden rounded-[20px]">
      <WinBar
        title="sable.app / workspace / overview"
        right={
          <div className="hidden items-center gap-2 md:flex">
            <span className="rounded-md border border-divider bg-secondary px-2 py-1 font-mono text-[10px] text-ink/45">
              ⌘K to search
            </span>
            <Avatar initials="PR" className="size-6" />
          </div>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[190px_1fr_240px]">
        {/* left nav */}
        <aside className="hidden flex-col gap-0.5 border-r border-divider p-3 md:flex">
          <div className="mb-3 flex items-center gap-2 px-1">
            <span className="grid size-7 place-items-center rounded-lg bg-brand text-[13px] font-bold text-primary-foreground">
              S
            </span>
            <span className="text-[14px] font-semibold">Sable</span>
          </div>
          {nav.map((n, i) => (
            <span
              key={n}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px]",
                i === 4 ? "bg-secondary text-ink" : "text-ink/55",
              )}
            >
              <span className={cn("size-1.5 rounded-full", i === 4 ? "bg-brand" : "bg-ink/25")} />
              {n}
            </span>
          ))}
          <div className="mt-auto rounded-xl border border-divider bg-secondary/50 p-3">
            <div className="text-[11.5px] font-medium">Team plan</div>
            <div className="mt-1 font-mono text-[10px] text-ink/45">50k tasks · 62% used</div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/10">
              <span className="block h-full w-[62%] rounded-full bg-brand" />
            </div>
          </div>
        </aside>

        {/* center */}
        <section className="min-w-0 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-wider text-ink/45">Analytics</div>
              <h3 className="mt-0.5 text-[19px] font-semibold sm:text-[22px]">Workspace overview</h3>
            </div>
            <div className="flex gap-1.5">
              {["24h", "7d", "30d"].map((t, i) => (
                <span
                  key={t}
                  className={cn(
                    "rounded-md px-2.5 py-1 font-mono text-[11px]",
                    i === 1 ? "bg-brand text-primary-foreground" : "border border-divider text-ink/55",
                  )}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { k: "Tasks shipped", v: "12,847", d: "+18%" },
              { k: "Hours saved", v: "1,284", d: "+24%" },
              { k: "Active agents", v: "18", d: "+2" },
              { k: "Accuracy", v: "99.2%", d: "+0.4%" },
            ].map((m) => (
              <div key={m.k} className="rounded-xl border border-divider bg-secondary/40 p-3">
                <div className="font-mono text-[10px] uppercase tracking-wide text-ink/45">{m.k}</div>
                <div className="mt-1.5 flex items-end justify-between">
                  <span className="font-mono text-[19px] font-medium leading-none">{m.v}</span>
                  <span className="font-mono text-[10px] text-emerald-400">{m.d}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
            <div className="rounded-xl border border-divider bg-secondary/40 p-4">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[13px] font-medium">Tasks automated</span>
                <span className="font-mono text-[11px] text-ink/45">last 7 days</span>
              </div>
              <AreaChart height={132} values={[30, 42, 38, 55, 48, 66, 60, 78, 72, 90, 84, 104]} />
            </div>
            <div className="rounded-xl border border-divider bg-secondary/40 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[13px] font-medium">By tool</span>
                <span className="font-mono text-[11px] text-ink/45">runs</span>
              </div>
              <div className="h-[92px]">
                <Bars values={[52, 74, 40, 88, 63, 96]} />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[9px] text-ink/35">
                {["GH", "SL", "NT", "DR", "LN", "JR"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 overflow-hidden rounded-xl border border-divider">
            <div className="flex items-center justify-between border-b border-divider bg-secondary/40 px-3.5 py-2.5">
              <span className="text-[12.5px] font-medium">Recent agent runs</span>
              <span className="font-mono text-[10px] text-ink/40">live</span>
            </div>
            <ul>
              {[
                { t: "Triaged 14 inbound issues", tool: "GitHub", s: "done", m: "just now" },
                { t: "Synced sprint to Jira", tool: "Jira", s: "done", m: "3m" },
                { t: "Summarized 6 sales calls", tool: "Drive", s: "run", m: "now" },
                { t: "Posted standup to #eng", tool: "Slack", s: "wait", m: "queued" },
              ].map((r) => (
                <li
                  key={r.t}
                  className="flex items-center gap-3 border-b border-divider px-3.5 py-2.5 last:border-0"
                >
                  {r.s === "done" ? (
                    <span className="grid size-5 place-items-center rounded-full bg-emerald-400/15 text-emerald-400">
                      <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  ) : r.s === "run" ? (
                    <span className="grid size-5 place-items-center rounded-full bg-brand/20 text-brand">
                      <svg viewBox="0 0 24 24" className="size-3.5 sbl-spin" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 3a9 9 0 1 0 9 9" strokeLinecap="round" />
                      </svg>
                    </span>
                  ) : (
                    <span className="size-5 rounded-full border border-divider" />
                  )}
                  <span className="truncate text-[12.5px] text-ink/85">{r.t}</span>
                  <span className="ml-auto hidden font-mono text-[10px] text-ink/40 sm:inline">{r.tool}</span>
                  <span className="w-14 text-right font-mono text-[10px] text-ink/35">{r.m}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* right rail */}
        <aside className="hidden flex-col gap-3 border-l border-divider p-4 lg:flex">
          <div>
            <div className="mb-2 text-[12.5px] font-medium">Ask Sable</div>
            <ChatWidget className="border-divider" />
          </div>
          <div>
            <div className="mb-2 text-[12.5px] font-medium">Recent files</div>
            <div className={cn(PANEL, "p-2")}>
              {files.map((f) => (
                <div key={f.t} className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-secondary">
                  <span className="grid size-6 place-items-center rounded-md border border-divider bg-secondary font-mono text-[8px] text-ink/55">
                    {f.k}
                  </span>
                  <span className="truncate text-[11.5px] text-ink/80">{f.t}</span>
                  <span className="ml-auto font-mono text-[9px] text-ink/35">{f.s}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
