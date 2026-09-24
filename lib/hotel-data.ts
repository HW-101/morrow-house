export type Room = {
  slug: string;
  name: string;
  price: number;
  sleeps: string;
  bed: string;
  size: string;
  view: string;
  description: string;
  image: string;
  gallery: string[];
  amenities: string[];
};

const coast = "https://images.unsplash.com/";
export const rooms: Room[] = [
  {
    slug: "sea-room",
    name: "The Sea Room",
    price: 195,
    sleeps: "2 guests",
    bed: "King bed",
    size: "26 m²",
    view: "Atlantic horizon",
    description:
      "Salt light, linen sheets and the sea arriving softly at the window.",
    image: "/rooms/sea-room.jpg",
    gallery: [
  "/sea-room-2.jpg",
  "/sea-room-3.jpg",
  "/sea-room-4.jpg",
],
    amenities: [
      "Sea view",
      "King bed",
      "Walk-in shower",
      "Hand-thrown ceramics",
    ],
  },
  {
    slug: "courtyard-room",
    name: "The Courtyard Room",
    price: 225,
    sleeps: "2 guests",
    bed: "King bed",
    size: "24 m²",
    view: "The herb garden",
    description:
      "A sheltered room with a deep window seat and the scent of rosemary outside.",
    image: "/rooms/courtyard-room.jpg",
   gallery: [
  "/courtyard-room-2.jpg",
  "/courtyard-room-3.jpg",
  "/courtyard-room-4.jpg",
],
    amenities: [
      "Quiet courtyard",
      "King bed",
      "Rain shower",
      "Breakfast included",
    ],
  },
  {
    slug: "loft",
    name: "The Loft",
    price: 275,
    sleeps: "2 guests",
    bed: "Super king bed",
    size: "38 m²",
    view: "Rooftops and sea",
    description:
      "A high, quiet room beneath the old roofline with an oversized bath.",
    image: "/rooms/loft.jpg",
    gallery: [
  "/loft-2.jpg",
  "/loft-3.jpg",
  "/loft-4.jpg",
],

    amenities: [
      "Freestanding bath",
      "Super king bed",
      "Roofline view",
      "Record player",
    ],
  },
  {
    slug: "studio",
    name: "The Studio",
    price: 315,
    sleeps: "2 guests",
    bed: "Super king bed",
    size: "42 m²",
    view: "The headland",
    description:
      "Our most generous room, made for long stays and late breakfasts.",
    image: "/rooms/studio.jpg",
    gallery: [
  "/studio-2.jpg",
  "/studio-3.jpg",
  "/studio-4.jpg",
],
    amenities: [
      "Sea glimpse",
      "Sitting area",
      "Freestanding bath",
      "Kitchenette",
    ],
  },
  {
    slug: "morrow-suite",
    name: "The Morrow Suite",
    price: 395,
    sleeps: "2 guests",
    bed: "Super king bed",
    size: "58 m²",
    view: "Private terrace",
    description:
      "A private, light-filled retreat with a terrace facing the changing Atlantic.",
    image: "/rooms/morrow-suite.jpg",
   gallery: [
  "/morrow-suite-2.jpg",
  "/morrow-suite-3.jpg",
  "/morrow-suite-4.jpg",
],
    amenities: [
      "Private terrace",
      "Sea view",
      "Sitting room",
      "Deep soaking bath",
    ],
  },
];
export const navItems = ["Stay", "Eat", "Bathing Club", "Guide", "Journal"];
export function getRoom(slug: string) {
  return rooms.find((room) => room.slug === slug);
}
export function nightsBetween(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0;
  return Math.max(
    0,
    Math.ceil(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000,
    ),
  );
}
export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}
export const guide = [
  [
    "01",
    "Early swim at Porthcurnick",
    "Before breakfast, when the water is glassy and the beach is yours.",
  ],
  [
    "02",
    "Lunch at a harbour pub",
    "Walk the coast path to a pint, a bowl of mussels and a view.",
  ],
  [
    "03",
    "Walk the coast path",
    "Follow the headland west until the land runs out.",
  ],
  [
    "04",
    "Visit a local ceramics studio",
    "Meet the makers turning Cornish clay into everyday objects.",
  ],
  [
    "05",
    "Sunset at the headland",
    "Bring a blanket. Stay until the last colour leaves the sky.",
  ],
];
export const extras = [
  { id: "massage", name: "Coastal massage", price: 95 },
  { id: "sauna", name: "Private sauna hour", price: 45 },
  { id: "picnic", name: "Packed beach picnic", price: 38 },
];
export const moods = ["Rest", "Food", "Coast", "Celebration"];
export const lengths = ["1 night", "Weekend", "3–4 nights", "Longer stay"];
export const preferences = [
  "Sea view",
  "Bath",
  "Quietest room",
  "Largest room",
];
