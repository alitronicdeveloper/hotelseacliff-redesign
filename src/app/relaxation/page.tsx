import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

const amenities = [
  {
    name: "Ocean-View Pool",
    description:
      "A cliff-top pool overlooking the Indian Ocean — the perfect place to unwind.",
    image: "https://www.hotelseacliff.com/seacliff/20260722214750.jpg",
  },
  {
    name: "Spa & Wellness",
    description:
      "Signature treatments, massages, and therapies inspired by African and Asian traditions.",
    image: "https://www.hotelseacliff.com/seacliff/20260722214502.jpg",
  },
  {
    name: "Fitness Centre",
    description:
      "A fully-equipped gym with modern cardio and strength equipment — open 24/7.",
    image: "https://www.hotelseacliff.com/seacliff/20260722214635.jpg",
  },
  {
    name: "Salon & Beauty",
    description:
      "Professional hair, nail, and beauty services for men and women.",
    image: "https://www.hotelseacliff.com/seacliff/20260722214821.jpg",
  },
];

export default function RelaxationPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.hotelseacliff.com/seacliff/20260722214750.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <Typography
            variant="overline"
            className="text-white/80 mb-6 tracking-[0.35em]"
          >
            RELAXATION
          </Typography>
          <Typography
            variant="h1"
            className="text-white mb-6 max-w-4xl drop-shadow-2xl"
            as="h1"
          >
            Rest. Restore. Renew.
          </Typography>
          <Typography variant="body-lg" className="text-white/90 max-w-2xl">
            Spa, pool, and wellness — designed for deep restoration.
          </Typography>
        </div>
      </section>

      <section className="py-32 bg-seacliff-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Typography
            variant="overline"
            className="text-seacliff-gold mb-6 block tracking-[0.3em]"
          >
            WELLNESS
          </Typography>
          <Typography variant="h2" className="text-seacliff-navy mb-8">
            A Sanctuary Above the Ocean
          </Typography>
          <Typography
            variant="body-lg"
            className="text-seacliff-muted leading-relaxed"
          >
            At Sea Cliff, relaxation isn't an afterthought — it's the whole
            point. Our cliff-top pool, award-winning spa, and wellness
            facilities are designed to help you disconnect and restore.
          </Typography>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {amenities.map((a) => (
              <article key={a.name} className="group relative overflow-hidden">
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1500"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <Typography variant="h3" className="text-white mb-3">
                    {a.name}
                  </Typography>
                  <Typography variant="body-md" className="text-white/80">
                    {a.description}
                  </Typography>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-seacliff-navy">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Typography
            variant="overline"
            className="text-seacliff-gold mb-6 block tracking-[0.3em]"
          >
            BOOK A TREATMENT
          </Typography>
          <Typography variant="h2" className="text-white mb-6">
            Reserve Your Spa Experience
          </Typography>
          <Typography
            variant="body-lg"
            className="text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Our spa team will tailor a treatment to your needs.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="mailto:spa@hotelseacliff.com" variant="primary" size="lg">
              Book Spa
            </Button>
            <Button href="/rooms-suites" variant="secondary" size="lg">
              View Rooms
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}