export type Restaurant = {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  detailUrl: string;
};

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Karambezi Cafe",
    slug: "karambezi-cafe",
    tagline: "Ocean-Cliff Dining",
    description:
      "Right on the ocean cliff surrounded by a 180-degree view of the beautiful Indian Ocean lies the Karambezi Cafe. Fresh seafood, continental favourites, and cocktails at sunset.",
    image: "https://www.hotelseacliff.com/seacliff/20260723203755.jpg",
    detailUrl: "https://www.hotelseacliff.com/view/1/dining/karambezi-cafe",
  },
  {
    id: 2,
    name: "Alcove Restaurant",
    slug: "alcove-restaurant",
    tagline: "Indian & Chinese Cuisine",
    description:
      "The Alcove Restaurant warmly welcomes you to the world of Indian and Chinese cuisine. Established since 1998, it remains a beloved Dar es Salaam institution for authentic flavours.",
    image: "https://www.hotelseacliff.com/seacliff/20260723203826.jpg",
    detailUrl: "https://www.hotelseacliff.com/view/2/dining/alcove-restaurant",
  },
];
