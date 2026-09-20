import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

const heroImage =
  "https://images.pexels.com/photos/6664242/pexels-photo-6664242.jpeg?auto=compress&cs=tinysrgb&w=1920";

const venues = [
  {
    name: "Karambezi Bar",
    description:
      "Craft cocktails, fine wines, and premium spirits — served against the backdrop of the Indian Ocean at sunset. The best seat in Dar es Salaam to watch the sun dip below the horizon.",
    image:
      "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1200",
    detailUrl: "https://www.hotelseacliff.com/view/1/dining/karambezi-cafe",
  },
  {
    name: "The Alcove Bar",
    description:
      "An intimate bar attached to the renowned Alcove Restaurant. Classic cocktails, premium spirits, and a relaxed atmosphere — perfect for an after-dinner drink.",
    image:
      "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=1200",
    detailUrl: "https://www.hotelseacliff.com/view/2/dining/alcove-restaurant",
  },
  {
    name: "Casino & Gaming",
    description:
      "A vibrant casino floor with slot machines, gaming tables, and a neon-lit atmosphere. Open late into the night — for those who want to try their luck.",
    image:
      "https://images.pexels.com/photos/7594159/pexels-photo-7594159.jpeg?auto=compress&cs=tinysrgb&w=1200",
    detailUrl: "https://www.hotelseacliff.com/nightlife",
  },
];

export default function NightlifePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Nightlife at Sea Cliff"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <Typography
            variant="overline"
            className="text-white/80 mb-6 tracking-[0.35em]"
          >
            NIGHTLIFE
          </Typography>
          <Typography
            variant="h1"
            className="text-white mb-6 max-w-4xl drop-shadow-2xl"
            as="h1"
          >
            Evenings on the Edge
          </Typography>
          <Typography variant="body-lg" className="text-white/90 max-w-2xl">
            Cocktails, ocean sunsets, and the best bars in Dar es Salaam.
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
            AFTER DARK
          </Typography>
          <Typography variant="h2" className="text-seacliff-navy mb-8">
            Where the Night Begins
          </Typography>
          <Typography
            variant="body-lg"
            className="text-seacliff-muted leading-relaxed"
          >
            As the sun sets, Sea Cliff transforms. Our bars come alive with
            curated cocktails, and the relaxed luxury that defines the best
            nights in Dar es Salaam. For those who want to try their luck, our
            casino is open late into the night.
          </Typography>
        </div>
      </section>

      {/* VENUES */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {venues.map((v, i) => (
              <article
                key={v.name}
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
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1500"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <Typography
                    variant="overline"
                    className="text-seacliff-gold mb-6 block tracking-[0.3em]"
                  >
                    NIGHTLIFE
                  </Typography>
                  <Typography variant="h2" className="text-seacliff-navy mb-8">
                    {v.name}
                  </Typography>
                  <div className="w-16 h-px bg-seacliff-gold mb-8" />
                  <Typography
                    variant="body-lg"
                    className="text-seacliff-muted leading-relaxed mb-10"
                  >
                    {v.description}
                  </Typography>
                  <a
                    href={v.detailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="tertiary" size="md">
                      Details
                    </Button>
                  </a>
                </div>
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
            RESERVATIONS
          </Typography>
          <Typography variant="h2" className="text-white mb-6">
            Reserve Your Evening
          </Typography>
          <Typography
            variant="body-lg"
            className="text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Book a table for sunset cocktails or a night out with friends.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="tel:+255764700600" variant="primary" size="lg">
              Call to Reserve
            </Button>
            <Button href="/dining" variant="secondary" size="lg">
              View Restaurants
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}