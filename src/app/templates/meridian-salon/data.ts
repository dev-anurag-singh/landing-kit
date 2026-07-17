// Content + imagery for the Meridian grooming-lounge template.

export const BRAND = "MERIDIAN";
export const PHONE_DISPLAY = "(312) 555-7890";
export const PHONE_HREF = "tel:+13125557890";

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

type Photo = { src: string; credit: string; creditHref: string };

const PH: Record<string, Photo> = {
  canik: {
    src: img("1675599193990-33d71150902b", 1200),
    credit: "František Čaník",
    creditHref: "https://unsplash.com/@snipi",
  },
  lance: {
    src: img("1656338997878-279d71d48f6e"),
    credit: "Lance Reis",
    creditHref: "https://unsplash.com/@lancereis",
  },
  mehdiP: {
    src: img("1754473397061-e18dc1091855"),
    credit: "mehdi pezhvak",
    creditHref: "https://unsplash.com/@mehdipezhvak",
  },
  siednji: {
    src: img("1770253980732-dfed1cfdfa43"),
    credit: "Siednji Leon",
    creditHref: "https://unsplash.com/@siednji",
  },
  mehdiW: {
    src: img("1747832910187-f27508ac4c60"),
    credit: "mehdi pezhvak",
    creditHref: "https://unsplash.com/@mehdipezhvak",
  },
};

export const HERO_IMAGE: Photo & { alt: string } = {
  ...PH.canik,
  alt: "Interior of the shop floor",
};

export const stats = [
  { num: "4.9", label: "Average rating, 1,200+ cuts" },
  { num: "12", label: "Years on the block" },
  { num: "6", label: "Career barbers on the bench" },
  { num: "35min", label: "Average time in the chair" },
];

export type Service = { name: string; desc: string; price: string };
export type ServiceGroup = { label: string; items: Service[] };

export const serviceGroups: ServiceGroup[] = [
  {
    label: "Cuts",
    items: [
      { name: "Signature Cut", desc: "Consultation, clipper-and-scissor cut, wash and style.", price: "$55" },
      { name: "Skin Fade", desc: "Bald or taper fade blended to the skin, sharp finish.", price: "$60" },
      { name: "Executive Trim", desc: "A tidy-up between visits to keep the shape holding.", price: "$40" },
      { name: "Buzz & Line-up", desc: "One-length clipper cut with a crisp razor edge-up.", price: "$35" },
    ],
  },
  {
    label: "Shaves & beard",
    items: [
      { name: "Hot Towel Shave", desc: "Steam towels, hot lather and a straight-razor shave.", price: "$50" },
      { name: "Beard Sculpt", desc: "Trimmed, shaped and lined with oil and a hot towel.", price: "$35" },
      { name: "Cut & Beard", desc: "Signature cut paired with a full beard sculpt.", price: "$80" },
    ],
  },
  {
    label: "The full works",
    items: [
      { name: "The Full Service", desc: "Cut, hot-towel shave and an express facial. The reset.", price: "$140" },
      { name: "Grey Blending", desc: "Subtle colour to soften the grey, natural finish.", price: "$65" },
      { name: "Scalp & Facial", desc: "Deep-clean facial and invigorating scalp treatment.", price: "$70" },
    ],
  },
];

export const serviceNames = serviceGroups.flatMap((g) => g.items.map((s) => s.name));

export type Barber = {
  name: string;
  role: string;
  src: string;
  credit: string;
  creditHref: string;
  alt: string;
};

export const barbers: Barber[] = [
  { name: "Marcus Vale", role: "Master barber · 12 yrs", ...PH.lance, alt: "Portrait of Marcus Vale" },
  { name: "Theo Ellison", role: "Senior · fades & tapers", ...PH.mehdiP, alt: "Portrait of Theo Ellison" },
  { name: "Dorian Reid", role: "Barber · classic cuts", ...PH.siednji, alt: "Portrait of Dorian Reid" },
  { name: "Silas Ward", role: "Beard & straight-razor", ...PH.mehdiW, alt: "Portrait of Silas Ward" },
];

export const barberNames = barbers.map((b) => b.name);

export const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM", "6:00 PM"];

export const craft = [
  { cap: "In the chair", ...PH.siednji },
  { cap: "The finish", ...PH.mehdiP },
  { cap: "Line work", ...PH.mehdiW },
];

export const reviews = [
  { quote: "Sharpest fade in the city. I book Marcus a month out and it's worth every minute.", name: "James O.", meta: "Skin Fade" },
  { quote: "Walked out looking like the best version of myself. The hot-towel shave is unreal.", name: "Daniel R.", meta: "Full Service" },
  { quote: "Clean, precise, no small talk unless you want it. Exactly what I want from a barber.", name: "Anthony P.", meta: "Cut & Beard" },
];

export const hoursRows = [
  { day: "Tuesday – Friday", time: "9:00 – 19:00", closed: false },
  { day: "Saturday", time: "8:00 – 17:00", closed: false },
  { day: "Sunday – Monday", time: "Closed", closed: true },
];

export const ADDRESS = { line1: "412 Wells Street", line2: "Chicago, IL 60654" };
export const MAPS_HREF = "https://maps.google.com/?q=412+Wells+Street+Chicago";
