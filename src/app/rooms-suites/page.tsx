"use client";

import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { RoomCard } from "@/components/widgets/RoomCard";
import { rooms } from "@/lib/rooms";
import { cn } from "@/lib/utils";

type Filter = "all" | "suite" | "room";

export default function RoomsSuitesPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const videoRef = useRef<HTMLVideoElement>(null);

  const filtered =
    filter === "all" ? rooms : rooms.filter((r) => r.type === filter);

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "All Accommodations" },
    { id: "suite", label: "Suites" },
    { id: "room", label: "Rooms" },
  ];

  // Video inabadilika baada ya kila video kuisha
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const sources = [
      "https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4",
      "https://videos.pexels.com/video-files/2718166/2718166-hd_1920_1080_24fps.mp4",
    ];
    let index = 0;

    const playNext = () => {
      video.src = sources[index];
      video.load();
      video.play().catch(() => {});
      index = (index + 1) % sources.length;
    };

    video.addEventListener("ended", playNext);
    playNext();

    return () => {
      video.removeEventListener("ended", playNext);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />

      {/* ═══ HERO — Video ya Vyumba ═══ */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="https://www.hotelseacliff.com/seacliff/20260722214750.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/70" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <Typography
            variant="overline"
            className="text-white/80 mb-6 tracking-[0.35em]"
          >
            ACCOMMODATION
          </Typography>
          <Typography
            variant="h1"
            className="text-white mb-6 max-w-4xl drop-shadow-2xl"
            as="h1"
          >
            Rooms & Suites
          </Typography>
          <Typography variant="body-lg" className="text-white/90 max-w-2xl mb-8">
            Spacious, elegant, with panoramic Indian Ocean views.
          </Typography>
          <Button href="#collection" variant="primary" size="lg">
            Explore Collection
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-12 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* ═══ INTRO ═══ */}
      <section className="py-32 bg-seacliff-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Typography
            variant="overline"
            className="text-seacliff-gold mb-6 block tracking-[0.3em]"
          >
            OUR ACCOMMODATION
          </Typography>
          <Typography variant="h2" className="text-seacliff-navy mb-8">
            A Sanctuary Above the Ocean
          </Typography>
          <Typography
            variant="body-lg"
            className="text-seacliff-muted leading-relaxed mb-6"
          >
            Enjoy generously spacious rooms and suites at Sea Cliff Hotel with
            complete outstanding sea views and indoor seating areas in most
            rooms — providing the ultimate relaxation.
          </Typography>
          <Typography variant="body-lg" className="text-seacliff-muted leading-relaxed">
            Wooden tones and African décor elements add an exotic touch,
            offering the perfect getaway after a business event or a day at the
            pool.
          </Typography>
        </div>
      </section>

      {/* ═══ COLLECTION ═══ */}
      <section id="collection" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Typography
              variant="overline"
              className="text-seacliff-gold mb-6 block tracking-[0.3em]"
            >
              THE COLLECTION
            </Typography>
            <Typography variant="h2" className="text-seacliff-navy mb-6">
              {filter === "all"
                ? "All Rooms & Suites"
                : filter === "suite"
                ? "Our Suites"
                : "Our Rooms"}
            </Typography>
            <Typography
              variant="body-md"
              className="text-seacliff-muted max-w-2xl mx-auto"
            >
              {filtered.length} accommodation{filtered.length !== 1 ? "s" : ""}{" "}
              · Each with its own character
            </Typography>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300 border",
                  filter === f.id
                    ? "bg-seacliff-navy text-white border-seacliff-navy"
                    : "bg-transparent text-seacliff-navy border-seacliff-muted/30 hover:border-seacliff-gold hover:text-seacliff-gold"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ I PREFER LOYALTY ═══ */}
      <section className="py-24 bg-seacliff-navy">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Typography
            variant="overline"
            className="text-seacliff-gold mb-6 block tracking-[0.3em]"
          >
            I PREFER LOYALTY
          </Typography>
          <Typography variant="h3" className="text-white mb-6">
            Book Now and Get Rewarded
          </Typography>
          <Typography
            variant="body-lg"
            className="text-white/80 mb-10 max-w-2xl mx-auto"
          >
            When you book through our I Prefer Loyalty Programme, you earn
            points, upgrades, and exclusive benefits on every stay.
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

      {/* ═══ CTA ═══ */}
      <section className="relative py-32 bg-seacliff-cream overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <Typography
            variant="overline"
            className="text-seacliff-gold mb-6 block tracking-[0.3em]"
          >
            RESERVATIONS
          </Typography>
          <Typography variant="h2" className="text-seacliff-navy mb-6">
            Your Ocean Escape Awaits
          </Typography>
          <Typography variant="body-lg" className="text-seacliff-muted mb-12">
            Reserve your room directly with us for the best rates and
            personalised service.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://be.synxis.com/?Hotel=75015"
              variant="primary"
              size="lg"
              external
            >
              Book Now
            </Button>
            <Button href="/contact" variant="tertiary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}