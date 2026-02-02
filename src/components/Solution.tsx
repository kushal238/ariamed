import { Shield, Users } from "lucide-react";

export const Solution = () => {
  return (
    <section id="solution" className="py-24 border-y border-border/60 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-semibold mb-12 md:mb-16 text-center text-foreground">
          Why Choose <span className="text-primary">Aria</span>?
        </h2>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Doctor Section */}
          <div className="space-y-10 md:space-y-8 rounded-2xl border border-border/60 bg-background/60 p-6 md:p-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <div className="flex items-center gap-4 pb-6 md:pb-4 border-b border-border/50">
              <div className="h-12 w-12 rounded-full border border-border/60 flex items-center justify-center text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">For Doctors</p>
                <h3 className="text-2xl font-semibold text-foreground">Designed for clinical flow</h3>
              </div>
            </div>

            <ul className="space-y-6">
              {[
                "Reduce paperwork and administrative burden",
                "Enhance diagnosis with instant patient history and AI-powered insights",
                "Streamline patient communication and follow-ups",
                "Seamless ABHA & ABDM Integration",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/70 flex-shrink-0" />
                  <span className="text-foreground/80 text-base md:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Section */}
          <div className="space-y-10 md:space-y-8 rounded-2xl border border-border/60 bg-background/60 p-6 md:p-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:border-l lg:border-border/50 lg:pl-12">
            <div className="flex items-center gap-4 pb-6 md:pb-4 border-b border-border/50">
              <div className="h-12 w-12 rounded-full border border-border/60 flex items-center justify-center text-success/80">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">For Patients</p>
                <h3 className="text-2xl font-semibold text-foreground">Clarity across your care</h3>
              </div>
            </div>

            <ul className="space-y-6">
              {[
                "Access your complete medical history anytime, anywhere",
                "Never lose a prescription or medical record again",
                "Share records easily with any healthcare provider",
                "Track medications and treatment progress digitally",
                "Upload and digitize old medical records and lab reports",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/70 flex-shrink-0" />
                  <span className="text-foreground/80 text-base md:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
