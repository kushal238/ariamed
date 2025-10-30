import { CheckCircle2, Shield, Clock, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: CheckCircle2,
    title: "One Seamless Platform",
    description: "Doctors prescribe digitally, patients access instantly. Everything in one unified ecosystem.",
  },
  {
    icon: Clock,
    title: "Automatic Health Records",
    description: "Every visit updates the patient's timeline. Complete medical history always available.",
  },
  {
    icon: Share2,
    title: "Instant Sharing",
    description: "Share complete medical history with specialists in one click. No more carrying paper files.",
  },
  {
    icon: Shield,
    title: "Tamper-Proof",
    description: "Doctor's verdict is final and cannot be forged. Complete security and authenticity guaranteed.",
  },
];

export const Solution = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            A <span className="bg-gradient-hero bg-clip-text text-transparent">Unified Prescription</span> Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground">
            One platform that connects doctors and patients, ensuring complete medical record continuity and security.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
