import { Shield, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

export const Solution = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center">
          Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">Aria</span>?
        </h2>

        <div className="grid grid-cols-1 gap-16 lg:gap-24 max-w-4xl mx-auto">
          {/* Doctor Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b border-border/50 pb-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">For Doctors</h3>
            </div>

            <ul className="space-y-6 pl-2">
              {[
                "Reduce paperwork and administrative burden",
                "Enhance diagnosis with instant patient history and AI-powered insights",
                "Streamline patient communication and follow-ups",
                "Seamless ABHA & ABDM Integration",
              ].map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="h-8 w-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                  <span className="text-muted-foreground text-xl leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b border-border/50 pb-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">For Patients</h3>
            </div>
            
            <ul className="space-y-6 pl-2">
              {[
                "Access your complete medical history anytime, anywhere",
                "Never lose a prescription or medical record again",
                "Share records easily with any healthcare provider",
                "Track medications and treatment progress digitally",
                "Upload and digitize old medical records and lab reports"
              ].map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="h-8 w-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                  <span className="text-muted-foreground text-xl leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
