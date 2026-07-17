// Content + imagery for the Ember & Oak cozy-vintage coffee-house template.

export const BRAND = "Ember & Oak";
export const TAGLINE = "Slow coffee, warm rooms.";
export const EST = "Est. 2009";
export const PHONE_DISPLAY = "(503) 555-0142";
export const PHONE_HREF = "tel:+15035550142";
export const EMAIL = "hello@emberandoak.coffee";

export const ADDRESS = {
  line1: "214 Alder Street",
  line2: "Portland, OR 97204",
  maps: "https://maps.google.com/?q=214+Alder+Street+Portland+OR",
};

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const IMG = {
  hero: { src: img("1554118811-1e0d58224f24", 1600), alt: "The Ember & Oak coffee room — rattan chairs, plants and warm afternoon light" },
  story: { src: img("1445116572660-236099ec97a0", 1100), alt: "A French press and cup on a worn round table beside a plant-filled window" },
  craft: { src: img("1497935586351-b67a49e012bf", 1100), alt: "Portafilters, freshly ground coffee and whole beans laid out on a wooden board" },
  beans: { src: img("1524350876685-274059332603", 1000), alt: "A burlap sack of freshly roasted coffee beans" },
  visit: { src: img("1453614512568-c4024d13c247", 1100), alt: "The Ember & Oak counter — espresso machine, Edison bulbs and white brick" },
};

export type Drink = { name: string; price: string; note: string; src: string; alt: string };

export const featured: Drink[] = [
  {
    name: "Honey Oat Cortado",
    price: "$4.50",
    note: "A double shot cut with toasted oat milk and a thread of raw wildflower honey.",
    src: img("1509042239860-f550ce710b93", 900),
    alt: "A cortado with delicate latte art beside a sprig of rosemary",
  },
  {
    name: "Barrel-Aged Cold Brew",
    price: "$5.25",
    note: "Steeped eighteen hours, then rested in charred oak. Smooth, low-acid, quietly bright.",
    src: img("1461023058943-07fcbe16d735", 900),
    alt: "A tall glass of cold brew over ice with cream swirling through",
  },
  {
    name: "Hearth Pour-Over",
    price: "$5.00",
    note: "Single-origin beans, poured by hand to order. Floral, tea-like, never the same twice.",
    src: img("1442512595331-e89e73853f31", 900),
    alt: "A barista pouring water over a Chemex filter in morning window light",
  },
];

export type Step = { no: string; title: string; body: string };

export const craftSteps: Step[] = [
  {
    no: "01",
    title: "Sourced with intent",
    body: "We buy small lots direct from growers we've sat down with — paying well above market, and naming every farm on the bag.",
  },
  {
    no: "02",
    title: "Roasted in-house",
    body: "On a restored 1950s cast-iron drum roaster, twelve kilos at a time, by people who can hear when a batch is ready.",
  },
  {
    no: "03",
    title: "Brewed by hand",
    body: "Pulled, poured and pressed to order. No autopilot, no timers barking — just a steady hand and a little patience.",
  },
];

export type MenuGroup = { label: string; note?: string; items: { name: string; price: string; desc?: string }[] };

export const menu: MenuGroup[] = [
  {
    label: "Espresso",
    note: "House blend or single-origin, your call",
    items: [
      { name: "Espresso", price: "$3.00", desc: "Two ounces, thick crema" },
      { name: "Cortado", price: "$4.00", desc: "Equal parts shot and steamed milk" },
      { name: "Flat White", price: "$4.50", desc: "Silky microfoam, no dry top" },
      { name: "Cappuccino", price: "$4.50" },
      { name: "Oak Mocha", price: "$5.25", desc: "Single-origin cocoa, house ganache" },
    ],
  },
  {
    label: "Filter & Brew",
    note: "Rotating single origins on the board",
    items: [
      { name: "Hearth Pour-Over", price: "$5.00", desc: "Hand-poured to order" },
      { name: "French Press", price: "$4.50", desc: "For two, unhurried" },
      { name: "Batch Brew", price: "$3.50", desc: "Bottomless before noon" },
      { name: "Barrel-Aged Cold Brew", price: "$5.25" },
    ],
  },
  {
    label: "The Other Menu",
    items: [
      { name: "Golden Milk", price: "$5.00", desc: "Turmeric, ginger, black pepper" },
      { name: "Hojicha Latte", price: "$5.00", desc: "Roasted green tea, toasty" },
      { name: "Drinking Chocolate", price: "$4.50" },
      { name: "Loose-Leaf Teas", price: "$4.00", desc: "Ask about the tin of the week" },
    ],
  },
  {
    label: "From the Kitchen",
    note: "Baked in the back each morning",
    items: [
      { name: "Sourdough & Cultured Butter", price: "$6.00" },
      { name: "Morning Bun", price: "$4.50", desc: "Orange, cardamom, sugar crust" },
      { name: "Seasonal Galette", price: "$6.50", desc: "Whatever the market gave us" },
      { name: "Granola, Yogurt & Honey", price: "$7.00" },
    ],
  },
];

export const values = [
  { title: "Roasted this week", body: "Every bag leaves the roaster within days — never a warehouse, never a mystery date." },
  { title: "Named at the source", body: "Direct trade with farms we know by name, at prices we're proud to print." },
  { title: "Made by hand", body: "No push-button machines. Every cup is someone's craft, not a setting." },
  { title: "A room to linger", body: "Deep chairs, real books, slow mornings. Stay as long as the day allows." },
];

export const gallery = [
  { src: img("1453614512568-c4024d13c247", 900), alt: "The counter and espresso bar under warm Edison bulbs", tall: true },
  { src: img("1501339847302-ac426a4a7cbb", 800), alt: "A hand-lettered CAFE sign and hanging lamps" },
  { src: img("1498804103079-a6351b050096", 800), alt: "An overhead ring of coffee cups on a dark round table" },
  { src: img("1495474472287-4d71bcdd2085", 800), alt: "Three friends toasting with latte-art coffees", tall: true },
  { src: img("1519082274554-1ca37fb8abb7", 800), alt: "A French press steaming on a rustic wooden bench" },
  { src: img("1509042239860-f550ce710b93", 800), alt: "Latte art cups beside a potted herb" },
];

export type Testimonial = { quote: string; name: string; meta: string };

export const testimonials: Testimonial[] = [
  {
    quote: "The kind of place you mean to leave after one cup and somehow lose a whole morning in. The cold brew is dangerous.",
    name: "Marguerite L.",
    meta: "Regular since 2011",
  },
  {
    quote: "You can taste that someone cared. The pour-over changed how I think about coffee — and the room is just so warm.",
    name: "Daniel O.",
    meta: "Neighbor & fan",
  },
  {
    quote: "My office, my reading room, my Sunday ritual. Ember & Oak feels less like a café and more like a friend's front room.",
    name: "Priya S.",
    meta: "Writer, two flat whites a day",
  },
];

export const hours = [
  { day: "Monday – Friday", time: "7:00a – 6:00p", closed: false },
  { day: "Saturday", time: "8:00a – 6:00p", closed: false },
  { day: "Sunday", time: "8:00a – 3:00p", closed: false },
];

export const faqs = [
  {
    q: "Do you take reservations?",
    a: "The tables are first-come, first-served — that's part of the charm. For larger groups or a private morning, email us and we'll make it work.",
  },
  {
    q: "Is there Wi-Fi?",
    a: "There is, but we keep it quiet. Mornings until 11a are laptop-free by custom, so the room stays a room and not an office.",
  },
  {
    q: "Do you have oat and other non-dairy milks?",
    a: "Always — oat, almond and a house-made hazelnut. Most drinks are built for oat by default; just say the word.",
  },
  {
    q: "Can I buy your beans or subscribe?",
    a: "Yes. Whole bags are on the shelf by the register, and a rolling subscription lands fresh beans on your doorstep every two weeks.",
  },
  {
    q: "Are dogs welcome?",
    a: "Well-behaved dogs are welcome on the patio and just inside the door, where there's a water bowl and, usually, a biscuit.",
  },
];
