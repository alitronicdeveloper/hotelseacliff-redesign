import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmokeCursor } from "@/components/ui/SmokeCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sea Cliff Hotel — Luxury Rooms & Suites | Dar es Salaam",
  description:
    "5-star luxury rooms and suites with panoramic Indian Ocean views. Book direct for the best rates at Sea Cliff Hotel, Dar es Salaam.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="relative">
        <SmokeCursor />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
