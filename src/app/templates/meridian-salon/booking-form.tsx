"use client";

import { useState, type ComponentProps, type ReactNode } from "react";
import Image from "next/image";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, ChevronDown, CalendarDays } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  barbers,
  barberNames,
  serviceNames,
  timeSlots,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "./data";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  contact: z.string().trim().min(1, "Add an email or phone so we can confirm."),
  service: z.string().min(1, "Choose a service."),
  barber: z.string(),
  date: z.string().min(1, "Pick a date."),
  time: z.string().min(1, "Pick a time."),
});

type FormValues = z.infer<typeof schema>;

const pad = (n: number) => String(n).padStart(2, "0");
const toISO = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fromISO = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const fmtDate = (s: string) =>
  fromISO(s).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

/* ── Reusable field primitives ──────────────────────────────────── */

function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.06em] text-ink/60">
      {children}
    </span>
  );
}

function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mt-1.5 text-[12px] font-semibold text-brand-700">{children}</p>;
}

/* A select-style trigger button (used by the custom dropdowns and, via the
   Popover `render` prop, by the date picker). Renders its own trailing chevron. */
function SelectTrigger({
  open,
  className,
  children,
  ref,
  ...props
}: ComponentProps<"button"> & { open?: boolean }) {
  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "flex h-[50px] w-full cursor-pointer items-center justify-between gap-2.5 rounded-lg border bg-transparent px-[15px] text-[15px] outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        open ? "border-ink" : "border-input hover:border-ink/45",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "size-4 shrink-0 text-ink/50 transition-transform duration-200",
          open && "rotate-180",
        )}
      />
    </button>
  );
}

/* ── Custom select dropdown matching the Meridian design ────────── */

function SelectMenu({
  label,
  value,
  placeholder,
  options,
  onChange,
  error,
}: {
  label: string;
  value: string;
  placeholder: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);

  const current = options.find((o) => o.value === value);
  const shown = current ? current.label : placeholder;

  return (
    <div className="relative">
      <FieldLabel>{label}</FieldLabel>
      {/* Portaled popover (not an inline absolute menu) so the dropdown is
          never clipped by the form panel's `overflow-hidden`. */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger render={<SelectTrigger open={open} aria-haspopup="listbox" />}>
          <span className={value ? "text-ink" : "text-ink/45"}>{shown}</span>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sideOffset={6}
          role="listbox"
          className="mrd-scroll max-h-[248px] w-(--anchor-width) gap-0 overflow-auto rounded-[13px] border border-ink/15 bg-background p-1.5 shadow-soft-lg ring-0"
        >
          {options.map((o) => {
            const selected = o.value === value;
            return (
              <button
                key={o.value || "any"}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-2.5 rounded-[9px] px-3 py-[11px] text-left text-[14.5px] transition-colors",
                  selected ? "bg-surface font-semibold text-ink" : "text-ink hover:bg-surface",
                )}
              >
                <span>{o.label}</span>
                {selected && <Check className="size-4 shrink-0 text-brand" strokeWidth={3} />}
              </button>
            );
          })}
        </PopoverContent>
      </Popover>
      <FieldError>{error}</FieldError>
    </div>
  );
}

const today = (() => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
})();

const asidePoints = [
  "Hot towel + straight-razor neck finish",
  "We text a confirmation within the hour",
  "Walk-ins welcome before noon",
  "Closed Sundays & Mondays",
];

function Aside() {
  return (
    <aside className="flex h-full flex-col border-t border-ink/10 bg-surface/80 p-[clamp(22px,3vw,30px)] lg:border-l lg:border-t-0">
      <div>
        <div className="mb-1 text-[12px] font-bold uppercase tracking-[0.09em] text-brand-700">
          Good to know
        </div>
        <h3 className="font-heading text-[22px] font-extrabold leading-[1.15]">
          Booked to the minute
        </h3>
        <ul className="mt-6 flex flex-col gap-4">
          {asidePoints.map((p) => (
            <li key={p} className="flex gap-3 text-[14px] leading-normal text-ink/72">
              <span className="mt-[7px] block size-2 shrink-0 bg-brand" />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 border-t border-divider pt-5 lg:mt-auto">
        <div className="text-[12px] font-bold uppercase tracking-[0.06em] text-ink/56">
          Prefer to call?
        </div>
        <a
          href={PHONE_HREF}
          className="mt-1.5 inline-block font-heading text-[20px] font-extrabold text-ink no-underline transition-colors hover:text-brand"
        >
          {PHONE_DISPLAY}
        </a>
      </div>
    </aside>
  );
}

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", contact: "", service: "", barber: "", date: "", time: "" },
  });

  const [submitted, setSubmitted] = useState(false);
  const [calOpen, setCalOpen] = useState(false);

  // Every field has a string default, so watched values are always defined.
  const values = useWatch({ control }) as FormValues;

  const onSubmit = () => setSubmitted(true);
  const setField = (field: keyof FormValues) => (value: string) =>
    setValue(field, value, { shouldValidate: true });

  const summary = [
    { k: "Service", v: values.service },
    { k: "Barber", v: values.barber || "Any available barber" },
    { k: "Date", v: values.date ? fmtDate(values.date) : "" },
    { k: "Time", v: values.time },
  ];

  return (
    <>
      {/* Barber picker */}
      <div className="mb-4 text-[12px] font-bold uppercase tracking-[0.09em] text-ink/58">
        Choose your barber
      </div>
      <div className="grid grid-cols-2 gap-4 min-[900px]:grid-cols-4">
        {barbers.map((b) => {
          const selected = values.barber === b.name;
          return (
            <button
              type="button"
              key={b.name}
              onClick={() => setValue("barber", b.name, { shouldValidate: true })}
              className="group relative cursor-pointer overflow-hidden rounded-[14px] border border-ink/12 bg-background text-left transition-all duration-200 hover:-translate-y-1 hover:border-ink/34 hover:shadow-soft-md"
            >
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src={b.src}
                  alt={b.alt}
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="px-3.5 pb-3.5 pt-3">
                <div className="font-heading text-[16px] font-extrabold leading-[1.2]">{b.name}</div>
                <div className="mt-[3px] text-[12.5px] text-ink/60">{b.role}</div>
              </div>
              {selected && (
                <>
                  <div className="pointer-events-none absolute inset-0 rounded-[14px] border-[3px] border-brand" />
                  <span className="absolute right-2.5 top-2.5 rounded-[8px] bg-brand px-[9px] py-[5px] font-heading text-[10px] font-extrabold uppercase tracking-[0.08em] text-white">
                    ✓ Picked
                  </span>
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Form + aside — one shared panel so heights stay locked */}
      <div className="mt-9 overflow-hidden rounded-[18px] border border-ink/12 bg-background shadow-soft-md">
        <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr]">
          {submitted ? (
            <div className="p-[clamp(22px,4vw,38px)]">
              <div className="flex size-12 items-center justify-center rounded-[12px] bg-brand text-[26px] font-extrabold text-white">
                ✓
              </div>
              <h3 className="mt-5 mb-1.5 font-heading text-[28px] font-extrabold leading-[1.1]">
                You&rsquo;re booked, {values.name}.
              </h3>
              <p className="mb-[22px] text-[15px] leading-[1.6] text-ink/72">
                We&rsquo;ll text a confirmation to <b>{values.contact}</b> shortly. Here&rsquo;s the
                chair you reserved:
              </p>
              <div className="border-t-2 border-divider">
                {summary.map((row) => (
                  <div
                    key={row.k}
                    className="grid grid-cols-[minmax(0,140px)_1fr] gap-4 border-b border-divider py-[13px] text-[14.5px]"
                  >
                    <span className="text-[12px] font-bold uppercase tracking-[0.06em] text-ink/56">
                      {row.k}
                    </span>
                    <span className="font-semibold">{row.v}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  reset();
                  setSubmitted(false);
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-[11px] border-2 border-ink/25 bg-transparent px-[22px] py-3 font-heading text-[14px] font-extrabold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-background"
              >
                Book another chair
              </button>
            </div>
          ) : (
            <div className="p-[clamp(22px,4vw,38px)]">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid grid-cols-1 gap-x-6 gap-y-[22px] sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <FieldLabel>Name</FieldLabel>
                    <Input
                      {...register("name")}
                      placeholder="First and last"
                      className="h-[50px] px-[15px] text-[15px] md:text-[15px]"
                    />
                    <FieldError>{errors.name?.message}</FieldError>
                  </div>

                  {/* Contact */}
                  <div>
                    <FieldLabel>Email or phone</FieldLabel>
                    <Input
                      {...register("contact")}
                      placeholder="So we can confirm"
                      className="h-[50px] px-[15px] text-[15px] md:text-[15px]"
                    />
                    <FieldError>{errors.contact?.message}</FieldError>
                  </div>

                  {/* Service */}
                  <SelectMenu
                    label="Service"
                    placeholder="Select a service"
                    value={values.service}
                    onChange={setField("service")}
                    options={serviceNames.map((n) => ({ label: n, value: n }))}
                    error={errors.service?.message}
                  />

                  {/* Barber */}
                  <SelectMenu
                    label="Barber"
                    placeholder="Any available barber"
                    value={values.barber}
                    onChange={setField("barber")}
                    options={[
                      { label: "Any available barber", value: "" },
                      ...barberNames.map((n) => ({ label: n, value: n })),
                    ]}
                  />

                  {/* Date */}
                  <div className="relative">
                    <FieldLabel>Date</FieldLabel>
                    <Popover open={calOpen} onOpenChange={setCalOpen}>
                      <PopoverTrigger render={<SelectTrigger open={calOpen} />}>
                        <span className="flex items-center gap-2.5">
                          <CalendarDays className="size-4 text-ink/60" />
                          <span className={values.date ? "text-ink" : "text-ink/45"}>
                            {values.date ? fmtDate(values.date) : "Select a date"}
                          </span>
                        </span>
                      </PopoverTrigger>
                      <PopoverContent align="start" sideOffset={6} className="w-auto p-3.5">
                        <Calendar
                          mode="single"
                          selected={values.date ? fromISO(values.date) : undefined}
                          onSelect={(d) => {
                            if (d) setValue("date", toISO(d), { shouldValidate: true });
                            setCalOpen(false);
                          }}
                          startMonth={today}
                          disabled={[{ before: today }, { dayOfWeek: [0, 1] }]}
                        />
                        <div className="mt-2.5 border-t border-divider pt-2.5 text-[11.5px] text-ink/56">
                          Closed Sundays &amp; Mondays
                        </div>
                      </PopoverContent>
                    </Popover>
                    <FieldError>{errors.date?.message}</FieldError>
                  </div>

                  {/* Time */}
                  <SelectMenu
                    label="Time"
                    placeholder="Select a time"
                    value={values.time}
                    onChange={setField("time")}
                    options={timeSlots.map((t) => ({ label: t, value: t }))}
                    error={errors.time?.message}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex items-center gap-2.5 rounded-[12px] border-2 border-brand bg-brand px-[26px] py-3.5 font-heading text-[15px] font-extrabold text-white shadow-soft-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-700 hover:bg-brand-700 hover:shadow-soft-md active:translate-y-0"
                >
                  Confirm booking <span className="text-[17px]">→</span>
                </button>
              </form>
            </div>
          )}

          <Aside />
        </div>
      </div>
    </>
  );
}
