import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

const experiences = [
  {
    subtitle: "STAY",
    title: "Rooms & Suites",
    body: "93 rooms and suites, each with panoramic ocean or city views.",
    href: "/rooms-suites",
    image:
      "https://www.hotelseacliff.com/seacliff/20260722214750.jpg",
  },
  {
    subtitle: "DINING",
    title: "Ocean-Front Restaurants",
    body: "From fine dining to casual bites — a culinary journey.",
    href: "/dining",
    image:
      "https://www.hotelseacliff.com/seacliff/20260722214502.jpg",
  },
  {
    subtitle: "RELAXATION",
    title: "Spa & Pool",
    body: "Unwind at our cliff-top pool and award-winning spa.",
    href: "/relaxation",
    image:
      "https://www.hotelseacliff.com/seacliff/20260722214606.jpg",
  },
  {
    subtitle: "NIGHTLIFE",
    title: "Bars & Lounge",
    body: "Sky-high cocktails and vibrant evening energy.",
    href: "/nightlife",
    image:
      "https://www.hotelseacliff.com/seacliff/20260722214537.jpg",
  },
];

export function Experiences() {
  return (
    <section className="py-32 bg-seacliff-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Typography
            variant="overline"
            className="text-seacliff-gold mb-6 block tracking-[0.3em]"
          >
            EXPERIENCES
          </Typography>
          <Typography variant="h2" className="text-seacliff-navy mb-6">
            Discover Sea Cliff
          </Typography>
          <Typography
            variant="body-md"
            className="text-seacliff-muted max-w-2xl mx-auto"
          >
            From ocean-view rooms to cliff-top dining — every moment is crafted
            for the discerning traveler.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <Link
              key={i}
              href={exp.href}
              className="group relative h-[400px] md:h-[500px] overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                style={{ backgroundImage: `url('${exp.image}')` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-end p-10 text-left">
                <Typography
                  variant="overline"
                  className="text-white/80 mb-3 block tracking-[0.3em]"
                >
                  {exp.subtitle}
                </Typography>
                <Typography variant="h3" className="text-white mb-4">
                  {exp.title}
                </Typography>
                <Typography variant="body-md" className="text-white/80 max-w-md mb-6">
                  {exp.body}
                </Typography>
                <span className="text-seacliff-gold text-xs uppercase tracking-[0.3em] border-b border-seacliff-gold pb-1 self-start">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
