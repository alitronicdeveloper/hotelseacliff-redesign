import Link from "next/link";
import { Typography } from "@/components/ui/Typography";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms & Suites", href: "/rooms-suites" },
  { label: "Business & Events", href: "/business" },
  { label: "Dining", href: "/dining" },
  { label: "Relaxation", href: "/relaxation" },
  { label: "Nightlife", href: "/nightlife" },
  { label: "Village by SeaCliff", href: "/village" },
];

export function Footer() {
  return (
    <footer className="bg-seacliff-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Typography variant="h4" className="text-white mb-4">
            SEA CLIFF
          </Typography>
          <Typography variant="body-sm" className="text-white/70">
            10 Toure Drive, Msasani Peninsula
            <br />
            P.O Box 3030, Dar es Salaam, Tanzania
          </Typography>
        </div>

        <div>
          <Typography variant="overline" className="text-seacliff-gold mb-4">
            Explore
          </Typography>
          <ul className="space-y-2">
            {navLinks.slice(1, 5).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/70 hover:text-seacliff-gold text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Typography variant="overline" className="text-seacliff-gold mb-4">
            Contact
          </Typography>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>+255 764 700 600</li>
            <li>reservations@hotelseacliff.com</li>
          </ul>
        </div>

        <div>
          <Typography variant="overline" className="text-seacliff-gold mb-4">
            Book Direct
          </Typography>
          <Typography variant="body-sm" className="text-white/70 mb-4">
            Get the best rates and I Prefer rewards by booking directly.
          </Typography>
          <a
            href="https://be.synxis.com/?Hotel=75015"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-seacliff-gold text-sm uppercase tracking-widest border-b border-seacliff-gold pb-1 hover:text-white hover:border-white transition-colors"
          >
            Book Now →
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
        <Typography variant="body-sm" className="text-white/50">
          © 2026 Sea Cliff Hotel. All Rights Reserved.
        </Typography>
        <Typography variant="body-sm" className="text-white/50">
          Dar es Salaam · Tanzania
        </Typography>
      </div>
    </footer>
  );
}