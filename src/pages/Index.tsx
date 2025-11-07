import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { PrescriptionTransition } from "@/components/PrescriptionTransition";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { CheckCircle, Users, Shield, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problems />
      <PrescriptionTransition />
      <Solution />
      
      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 animate-fade-in">
            Why Choose Aria?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-soft border border-border hover-scale">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">For Patients</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Access your complete medical history anytime, anywhere</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Never lose a prescription or medical record again</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Share records easily with any healthcare provider</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Track medications and treatment progress digitally</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft border border-border hover-scale">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">For Doctors</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Reduce paperwork and administrative burden</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Access patient history instantly for better diagnosis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Secure and compliant digital prescription system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Streamline patient communication and follow-ups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 animate-fade-in">
            How It Works
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Doctor Creates Digital Prescription</h3>
                <p className="text-muted-foreground">
                  Your doctor uses Aria's platform to create and send your prescription digitally 
                  with complete medical notes and treatment plans.
                </p>
              </div>
            </div>

            <div className="flex gap-6 animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Instant Access on Your Device</h3>
                <p className="text-muted-foreground">
                  Receive your prescription instantly on your phone or computer. 
                  All records are securely stored and easily searchable.
                </p>
              </div>
            </div>

            <div className="flex gap-6 animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Share & Track Your Health Journey</h3>
                <p className="text-muted-foreground">
                  Share records with pharmacies, specialists, or family members. 
                  Track your complete medical history in one secure place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
