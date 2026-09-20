import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { restaurants } from "@/lib/dining";

export function DiningHighlight() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Typography
            variant="overline"
            className="text-seacliff-gold mb-6 block tracking-[0.3em]"
          >
            DINING
          </Typography>
          <Typography variant="h2" className="text-seacliff-navy mb-6">
            A Culinary Journey
          </Typography>
          <Typography
            variant="body-md"
            className="text-seacliff-muted max-w-2xl mx-auto"
          >
            Two distinctive restaurants, each with its own character and view.
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {restaurants.map((r) => (
            <article key={r.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>
              <Typography
                variant="overline"
                className="text-seacliff-gold mb-3 block tracking-[0.3em]"
              >
                {r.tagline}
              </Typography>
              <Typography variant="h3" className="text-seacliff-navy mb-4">
                {r.name}
              </Typography>
              <Typography variant="body-md" className="text-seacliff-muted mb-6">
                {r.description}
              </Typography>
              <a
                href={r.detailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-seacliff-navy hover:text-seacliff-gold border-b border-seacliff-navy hover:border-seacliff-gold pb-1 transition-colors"
              >
                Discover →
              </a>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button href="/dining" variant="tertiary" size="lg">
            View All Dining
          </Button>
        </div>
      </div>
    </section>
  );
}
