import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

const heroImage =
  "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=1920";

const items = [
  {
    title: "Supermarket",
    body: "A full-service supermarket for groceries, snacks, and everyday essentials.",
    image:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Retail Stores",
    body: "Browse a curated selection of boutique shops, spas, dental services, and local retailers.",
    image:
      "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Dining & Cafés",
    body: "Casual eateries and coffee spots within the Village — including Al Basha and Coral Ridge.",
    image:
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function VillagePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Village by Sea Cliff"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <Typography
            variant="overline"
            className="text-white/80 mb-6 tracking-[0.35em]"
          >
            VILLAGE BY SEA CLIFF
          </Typography>
          <Typography
            variant="h1"
            className="text-white mb-6 max-w-4xl drop-shadow-2xl"
            as="h1"
          >
            A World Within a World
          </Typography>
          <Typography variant="body-lg" className="text-white/90 max-w-2xl">
            Shopping, dining, and everyday conveniences — all next door.
          </Typography>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 bg-seacliff-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Typography
            variant="overline"
            className="text-seacliff-gold mb-6 block tracking-[0.3em]"
          >
            THE VILLAGE
          </Typography>
          <Typography variant="h2" className="text-seacliff-navy mb-8">
            Right Next Door
          </Typography>
          <Typography
            variant="body-lg"
            className="text-seacliff-muted leading-relaxed mb-6"
          >
            Located right next to the hotel, the Sea Cliff Village hosts a
            supermarket as well as other retail stores for you to browse
            around. From dental services and spas to Vodacom, ATMs, and
            restaurants — everything you need is steps away.
          </Typography>
        </div>
      </section>

      {/* GRID */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Typography
              variant="overline"
              className="text-seacliff-gold mb-6 block tracking-[0.3em]"
            >
              EXPLORE
            </Typography>
            <Typography variant="h2" className="text-seacliff-navy">
              Inside the Village
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => (
              <article key={item.title} className="group">
                <div className="aspect-4/5 overflow-hidden mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1500"
                  />
                </div>
                <Typography variant="h4" className="text-seacliff-navy mb-3">
                  {item.title}
                </Typography>
                <Typography variant="body-md" className="text-seacliff-muted">
                  {item.body}
                </Typography>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-seacliff-navy">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Typography
            variant="overline"
            className="text-seacliff-gold mb-6 block tracking-[0.3em]"
          >
            VISIT US
          </Typography>
          <Typography variant="h2" className="text-white mb-6">
            Explore the Village
          </Typography>
          <Typography
            variant="body-lg"
            className="text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Open daily. Free parking available.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://goo.gl/maps/pJ9qtNDuBM4PvfGAA"
              variant="primary"
              size="lg"
              external
            >
              Get Directions
            </Button>
            <Button href="/dining" variant="secondary" size="lg">
              View Dining
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}