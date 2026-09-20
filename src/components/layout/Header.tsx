"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms & Suites", href: "/rooms-suites" },
  { label: "Business & Events", href: "/business" },
  { label: "Dining", href: "/dining" },
  { label: "Relaxation", href: "/relaxation" },
  { label: "Nightlife", href: "/nightlife" },
  { label: "Village by SeaCliff", href: "/village" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolid = scrolled || pathname !== "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          showSolid
            ? "bg-seacliff-navy/95 backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-white font-serif text-xl tracking-wider hover:text-seacliff-gold transition-colors"
          >
            SEA CLIFF
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs uppercase tracking-widest transition-colors whitespace-nowrap",
                  pathname === link.href
                    ? "text-seacliff-gold"
                    : "text-white/90 hover:text-seacliff-gold"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              href="https://be.synxis.com/?Hotel=75015"
              variant="primary"
              size="sm"
              external
            >
              Book Now
            </Button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 bg-seacliff-navy z-40 transition-transform duration-500 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-serif tracking-wider hover:text-seacliff-gold"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="https://be.synxis.com/?Hotel=75015"
            variant="primary"
            size="lg"
            external
          >
            Book Now
          </Button>
        </div>
      </div>
    </>
  );
}
