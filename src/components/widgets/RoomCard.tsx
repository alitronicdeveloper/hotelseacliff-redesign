"use client";

import { Calendar, ArrowRight } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import type { Room } from "@/lib/rooms";

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group relative bg-white overflow-hidden flex flex-col h-full">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1500 ease-out"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60" />

        <div className="absolute top-4 left-4">
          <span className="text-[10px] uppercase tracking-[0.25em] bg-white/95 text-seacliff-navy px-3 py-1.5 font-medium">
            {room.type === "suite" ? "Suite" : "Room"}
          </span>
        </div>

        <a
          href={room.bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 w-10 h-10 bg-white/95 flex items-center justify-center text-seacliff-navy hover:bg-seacliff-gold hover:text-white transition-colors"
          aria-label={`Book ${room.name}`}
        >
          <Calendar size={16} />
        </a>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <Typography variant="h4" className="text-seacliff-navy mb-3">
          {room.name}
        </Typography>
        <Typography variant="body-sm" className="text-seacliff-muted mb-6 flex-1">
          {room.description}
        </Typography>

        <div className="flex items-center justify-between pt-4 border-t border-seacliff-muted/15">
          <a
            href={room.bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-seacliff-navy hover:text-seacliff-gold transition-colors inline-flex items-center gap-2"
          >
            View Room
            <ArrowRight size={14} />
          </a>
          <a
            href={room.bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-seacliff-gold hover:text-seacliff-navy transition-colors"
          >
            Book →
          </a>
        </div>
      </div>
    </article>
  );
}
