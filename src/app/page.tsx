import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/widgets/Hero";
import { Experiences } from "@/components/widgets/Experiences";
import { FeaturedRoom } from "@/components/widgets/FeaturedRoom";
import { DiningHighlight } from "@/components/widgets/DiningHighlight";
import { Rewards } from "@/components/widgets/Rewards";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Experiences />
      <FeaturedRoom />
      <DiningHighlight />
      <Rewards />
      <Footer />
    </main>
  );
}
