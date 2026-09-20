import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://www.hotelseacliff.com/img/homeimgs/rooms.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/70" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <Typography
          variant="overline"
          className="text-white/80 mb-6 tracking-[0.35em]"
        >
          SEA CLIFF HOTEL · DAR ES SALAAM
        </Typography>
        <Typography
          variant="h1"
          className="text-white mb-6 max-w-5xl drop-shadow-2xl"
          as="h1"
        >
          A Cliff Above the Ocean
        </Typography>
        <Typography variant="body-lg" className="text-white/90 max-w-2xl mb-10">
          5-star luxury on the Msasani Peninsula. Panoramic Indian Ocean views,
          world-class dining, and timeless Tanzanian hospitality.
        </Typography>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            href="https://be.synxis.com/?Hotel=75015"
            variant="primary"
            size="lg"
            external
          >
            Book Now
          </Button>
          <Button href="/rooms-suites" variant="secondary" size="lg">
            Explore Rooms
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
