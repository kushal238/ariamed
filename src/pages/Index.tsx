import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
