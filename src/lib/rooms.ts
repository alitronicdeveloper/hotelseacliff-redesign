export type RoomType = "suite" | "room";

export type Room = {
  id: number;
  name: string;
  slug: string;
  type: RoomType;
  image: string;
  description: string;
  bookUrl: string;
};

const BASE = "https://www.hotelseacliff.com";
const SYNXIS = "https://be.synxis.com/?&hotel=75015&chain=10237&Room=";

export const rooms: Room[] = [
  {
    id: 4,
    name: "Amani Suite",
    slug: "amani-suite",
    type: "suite",
    image: `${BASE}/seacliff/20260722214502.jpg`,
    description:
      "Discover timeless elegance in our air-conditioned Amani Suite where luxury and style meet in harmony.",
    bookUrl: `${SYNXIS}PRES`,
  },
  {
    id: 3,
    name: "Presidential Suite",
    slug: "presidential-suite",
    type: "suite",
    image: `${BASE}/seacliff/20260722214537.jpg`,
    description:
      "The epitome of five-star living. Pure sophistication with panoramic ocean views and bespoke service.",
    bookUrl: `${SYNXIS}PRES`,
  },
  {
    id: 5,
    name: "Executive Suite",
    slug: "executive-suite",
    type: "suite",
    image: `${BASE}/seacliff/20260722214606.jpg`,
    description:
      "Indulge in extra space and splendor with panoramic Indian Ocean views and premium amenities.",
    bookUrl: `${SYNXIS}PRES`,
  },
  {
    id: 6,
    name: "Junior Suite",
    slug: "junior-suite",
    type: "suite",
    image: `${BASE}/seacliff/20260722214635.jpg`,
    description:
      "Modern living meets urban charm. A separate living room and elegant comfort for the modern traveler.",
    bookUrl: `${SYNXIS}PRES`,
  },
  {
    id: 7,
    name: "Executive Room",
    slug: "executive-room",
    type: "room",
    image: `${BASE}/seacliff/20260722214704.jpg`,
    description:
      "Exclusivity meets elegance on the third floor with panoramic views and refined comfort.",
    bookUrl: `${SYNXIS}EXEC`,
  },
  {
    id: 8,
    name: "Superior Deluxe Room",
    slug: "superior-deluxe-room",
    type: "room",
    image: `${BASE}/seacliff/20260721233045.avif`,
    description:
      "Experience refined luxury in our large Superior Deluxe Sea View Room with a king-size bed.",
    bookUrl: `${SYNXIS}SUPD`,
  },
  {
    id: 9,
    name: "Deluxe Sea View",
    slug: "deluxe-sea-view",
    type: "room",
    image: `${BASE}/seacliff/20260722214750.jpg`,
    description:
      "Wake up to breathtaking Indian Ocean horizons in our air-conditioned Deluxe Sea View Room.",
    bookUrl: `${SYNXIS}DLUXSV`,
  },
  {
    id: 10,
    name: "Deluxe City View",
    slug: "deluxe-city-view",
    type: "room",
    image: `${BASE}/seacliff/20260722214821.jpg`,
    description:
      "Step into sophistication with our air-conditioned Deluxe Room with a king-sized bed and city views.",
    bookUrl: `${SYNXIS}DLUXNSV`,
  },
];
