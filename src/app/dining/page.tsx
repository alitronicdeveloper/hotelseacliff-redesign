import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

const restaurants = [
  {
    name: "Karambezi Cafe",
    tagline: "Ocean-Cliff Dining",
    description:
      "Right on the ocean cliff, surrounded by a 180-degree view of the beautiful Indian Ocean, lies the Karambezi Cafe. Fresh seafood, continental favourites, and cocktails at sunset.",
    image: "https://www.hotelseacliff.com/seacliff/20260723203755.jpg",
    detailUrl: "https://www.hotelseacliff.com/view/1/dining/karambezi-cafe",
  },
  {
    name: "Alcove Restaurant",
    tagline: "Indian & Chinese Cuisine",
    description:
      "The Alcove Restaurant warmly welcomes you to the world of Indian and Chinese cuisine. Established since 1998, it remains a beloved Dar es Salaam institution for authentic flavours.",
    image: "https://www.hotelseacliff.com/seacliff/20260723203826.jpg",
    detailUrl: "https://www.hotelseacliff.com/view/2/dining/alcove-restaurant",
  },
];

export default function DiningPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.hotelseacliff.com/img/homeimgs/dining.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <Typography
            variant="overline"
            className="text-white/80 mb-6 tracking-[0.35em]"
          >
            DINING
          </Typography>
          <Typography
            variant="h1"
            className="text-white mb-6 max-w-4xl drop-shadow-2xl"
            as="h1"
          >
            Ocean-Front Dining
          </Typography>
          <Typography variant="body-lg" className="text-white/90 max-w-2xl">
            A wide range of dining options on site — consistently high quality,
            always with a view.
          </Typography>
        </div>
      </section>

      <section className="py-32 bg-seacliff-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Typography
            variant="overline"
            className="text-seacliff-gold mb-6 block tracking-[0.3em]"
          >
            OUR PHILOSOPHY
          </Typography>
          <Typography variant="h2" className="text-seacliff-navy mb-8">
            A Culinary Destination
          </Typography>
          <Typography
            variant="body-lg"
            className="text-seacliff-muted leading-relaxed"
          >
            We offer a wide range of dining options on site and are very proud
            of the consistently high quality food delivered. From fresh seafood
            on the cliff to authentic Indian and Chinese cuisine — every meal
            is crafted with care.
          </Typography>
        </div>
      </section>

      {restaurants.map((r, i) => (
        <section
          key={r.name}
          className={`py-32 ${i % 2 === 0 ? "bg-white" : "bg-seacliff-cream"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <article
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div
                className={`relative aspect-4/3 overflow-hidden group ${
                  i % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1500 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              </div>

              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <Typography
                  variant="overline"
                  className="text-seacliff-gold mb-6 block tracking-[0.3em]"
                >
                  {r.tagline}
                </Typography>
                <Typography variant="h2" className="text-seacliff-navy mb-8">
                  {r.name}
                </Typography>
                <div className="w-16 h-px bg-seacliff-gold mb-8" />
                <Typography
                  variant="body-lg"
                  className="text-seacliff-muted leading-relaxed mb-10"
                >
                  {r.description}
                </Typography>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={r.detailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="tertiary" size="md">
                      View Menu
                    </Button>
                  </a>
                  <Button
                    href="https://be.synxis.com/?Hotel=75015"
                    variant="primary"
                    size="md"
                    external
                  >
                    Reserve Table
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </section>
      ))}

      <section className="py-24 bg-seacliff-navy">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Typography
            variant="overline"
            className="text-seacliff-gold mb-6 block tracking-[0.3em]"
          >
            I PREFER LOYALTY
          </Typography>
          <Typography variant="h3" className="text-white mb-6">
            Dine. Earn. Repeat.
          </Typography>
          <Typography
            variant="body-lg"
            className="text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Members of our I Prefer Loyalty Programme earn points on every meal.
          </Typography>
          <Button
            href="https://preferredhotels.com/iprefer/enroll?enrollcode=DARSC&hotel=DARSC"
            variant="secondary"
            size="lg"
            external
          >
            Join I Prefer
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
