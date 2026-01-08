import { Navbar } from "@/components/Navbar-nextjs";
import { Hero } from "@/components/Hero-nextjs";
import { Solution } from "@/components/Solution";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { CTA } from "@/components/CTA-nextjs";
import { Footer } from "@/components/Footer-nextjs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureShowcase />
      <Solution />
      <CTA />
      <Footer />
    </div>
  );
}

