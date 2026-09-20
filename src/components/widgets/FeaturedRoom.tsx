import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";

export function FeaturedRoom() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.hotelseacliff.com/seacliff/20260722214635.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <Typography
          variant="overline"
          className="text-white/80 mb-4 tracking-[0.35em]"
        >
          SIGNATURE SUITE
        </Typography>
        <Typography variant="h2" className="text-white mb-6 max-w-3xl">
          The Presidential Suite
        </Typography>
        <Typography variant="body-lg" className="text-white/90 max-w-xl mb-10">
          The epitome of five-star living. Panoramic ocean views, bespoke
          service, and pure sophistication.
        </Typography>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            href="https://be.synxis.com/?&hotel=75015&chain=10237&Room=PRES"
            variant="primary"
            size="lg"
            external
          >
            Book This Suite
          </Button>
          <Button href="/rooms-suites" variant="secondary" size="lg">
            View All Suites
          </Button>
        </div>
      </div>
    </section>
  );
}
