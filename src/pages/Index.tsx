import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Solution } from "@/components/Solution";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
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
};

export default Index;
