import { Shield, Users, CheckCircle } from "lucide-react";

export const Solution = () => {
  return (
    <section id="solution" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center text-foreground">
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-hero">Aria</span>?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Doctor Section */}
          <div className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50">
            <div className="flex items-center gap-4 mb-8 border-b border-border/50 pb-4">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">For Doctors</h3>
            </div>

            <ul className="space-y-4">
              {[
                "Reduce paperwork and administrative burden",
                "Enhance diagnosis with instant patient history and AI-powered insights",
                "Streamline patient communication and follow-ups",
                "Seamless ABHA & ABDM Integration",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-3"
                >
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground/80 font-medium text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Section */}
          <div className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50">
            <div className="flex items-center gap-4 mb-8 border-b border-border/50 pb-4">
              <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">For Patients</h3>
            </div>

            <ul className="space-y-4">
              {[
                "Access your complete medical history anytime, anywhere",
                "Never lose a prescription or medical record again",
                "Share records easily with any healthcare provider",
                "Track medications and treatment progress digitally",
                "Upload and digitize old medical records and lab reports"
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-3"
                >
                  <div className="mt-1 h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-foreground/80 font-medium text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
