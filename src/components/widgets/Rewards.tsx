import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";

export function Rewards() {
  return (
    <section className="py-32 bg-seacliff-navy">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Typography
          variant="overline"
          className="text-seacliff-gold mb-6 block tracking-[0.3em]"
        >
          I PREFER LOYALTY
        </Typography>
        <Typography variant="h2" className="text-white mb-6">
          Book Now and Get Rewarded
        </Typography>
        <Typography variant="body-lg" className="text-white/80 mb-12 max-w-2xl mx-auto">
          When you book through our I Prefer Loyalty Programme, you earn points,
          upgrades, and exclusive benefits on every stay.
        </Typography>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="https://preferredhotels.com/iprefer/enroll?enrollcode=DARSC&hotel=DARSC"
            variant="primary"
            size="lg"
            external
          >
            Join I Prefer
          </Button>
          <Button
            href="https://be.synxis.com/?Hotel=75015"
            variant="secondary"
            size="lg"
            external
          >
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
}
