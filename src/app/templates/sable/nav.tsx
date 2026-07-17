"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { BRAND, nav } from "./data";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-2 text-[13.5px] font-medium text-primary-foreground no-underline shadow-[0_14px_40px_-14px_#7c6cff] transition-all hover:-translate-y-0.5 hover:brightness-[1.08] hover:shadow-[0_18px_52px_-14px_#7c6cff] active:translate-y-0";

/**
 * Sticky nav for the Sable template. It stays transparent so it blends into
 * the hero at the top of the page, then fades in a translucent, blurred
 * background + hairline border once the page is scrolled.
 */
export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    // Sync once on mount (async, to avoid a synchronous effect state update).
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-divider bg-[color-mix(in_srgb,var(--background)_72%,transparent)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center gap-6 px-[clamp(20px,5vw,64px)] py-3.5">
        <a href="#top" className="flex items-center gap-2.5 text-ink no-underline">
          <span className="grid size-7 place-items-center rounded-lg bg-brand text-[14px] font-bold text-primary-foreground shadow-[0_8px_24px_-8px_#7c6cff]">
            S
          </span>
          <span className="text-[17px] font-semibold tracking-[-0.01em]">{BRAND}</span>
        </a>
        <span className="ml-4 hidden gap-7 min-[820px]:flex">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[14px] font-medium text-ink/62 no-underline transition-colors hover:text-ink"
            >
              {label}
            </a>
          ))}
        </span>
        <span className="ml-auto flex items-center gap-2.5">
          <a
            href="#pricing"
            className="hidden text-[14px] font-medium text-ink/62 no-underline transition-colors hover:text-ink min-[560px]:inline"
          >
            Sign in
          </a>
          <a href="#pricing" className={btnPrimary}>
            Start free
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </span>
      </div>
    </nav>
  );
}
