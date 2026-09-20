import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Corporate Events",
    description:
      "Well-organized corporate events, from product launches to annual galas — executed flawlessly.",
    image: "https://www.hotelseacliff.com/seacliff/20260722214606.jpg",
  },
  {
    title: "Meeting & Conference",
    description:
      "Equipped meeting and conference facilities with modern AV and catering services.",
    image: "https://www.hotelseacliff.com/seacliff/20260722214635.jpg",
  },
  {
    title: "Trade Winds Business Centre",
    description:
      "Top-notch secretarial services, printing, and business support — all on site.",
    image: "https://www.hotelseacliff.com/seacliff/20260722214502.jpg",
  },
  {
    title: "Chauffer Services",
    description:
      "Professional chauffer-driven transportation for executives and VIP guests.",
    image: "https://www.hotelseacliff.com/seacliff/20260722214537.jpg",
  },
];

export default function BusinessPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.hotelseacliff.com/seacliff/20260722214606.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <Typography
            variant="overline"
            className="text-white/80 mb-6 tracking-[0.35em]"
          >
            BUSINESS & EVENTS
          </Typography>
          <Typography
            variant="h1"
            className="text-white mb-6 max-w-4xl drop-shadow-2xl"
            as="h1"
          >
            Meet Above the Ocean
          </Typography>
          <Typography variant="body-lg" className="text-white/90 max-w-2xl">
            Your wisest business hotel choice in Tanzania.
          </Typography>
        </div>
      </section>

      <section className="py-32 bg-seacliff-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Typography
            variant="overline"
            className="text-seacliff-gold mb-6 block tracking-[0.3em]"
          >
            OUR COMMITMENT
          </Typography>
          <Typography variant="h2" className="text-seacliff-navy mb-8">
            Beyond Your Expectations
          </Typography>
          <Typography
            variant="body-lg"
            className="text-seacliff-muted leading-relaxed mb-6"
          >
            As a business hotel, we are committed to making sure we deliver
            beyond your expectations, all your business needs — be it a
            well-organized corporate event, top-notch secretarial services
            provided by Trade Winds Business Centre, equipped meeting and
            conference facilities, chauffer services and many more.
          </Typography>
          <Typography variant="body-lg" className="text-seacliff-muted leading-relaxed">
            You can be rest assured that Sea Cliff Hotel Dar is your wisest
            business hotel choice in Tanzania.
          </Typography>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Typography
              variant="overline"
              className="text-seacliff-gold mb-6 block tracking-[0.3em]"
            >
              OUR SERVICES
            </Typography>
            <Typography variant="h2" className="text-seacliff-navy">
              What We Offer
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <article key={s.title} className="group bg-seacliff-cream">
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1500"
                  />
                </div>
                <div className="p-8">
                  <Typography variant="h4" className="text-seacliff-navy mb-4">
                    {s.title}
                  </Typography>
                  <Typography variant="body-md" className="text-seacliff-muted">
                    {s.description}
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
            PLAN YOUR EVENT
          </Typography>
          <Typography variant="h2" className="text-white mb-6">
            Let's Make It Unforgettable
          </Typography>
          <Typography
            variant="body-lg"
            className="text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Our events team is ready to help you plan every detail.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="mailto:events@hotelseacliff.com" variant="primary" size="lg">
              Contact Events Team
            </Button>
            <Button href="tel:+255764700600" variant="secondary" size="lg">
              Call +255 764 700 600
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}