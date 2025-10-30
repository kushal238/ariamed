import { AlertCircle, FileX, ShieldAlert, History } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: FileX,
    title: "Lost Prescriptions",
    description: "Physical prescriptions disappear. The entire diagnosis becomes inaccessible when paper gets lost or damaged.",
  },
  {
    icon: ShieldAlert,
    title: "Doctor Liability",
    description: "Without digital records, doctors bear unnecessary legal risk in cases of mishaps or disputes.",
  },
  {
    icon: History,
    title: "No Medical History",
    description: "Doctors lack access to patient history, making informed decisions difficult and time-consuming.",
  },
  {
    icon: AlertCircle,
    title: "Drug Interaction Risks",
    description: "No tracking of current medications increases the chance of dangerous drug interactions.",
  },
];

export const Problems = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            The Problem with <span className="text-destructive">Physical Prescriptions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            In India, most prescriptions are still physical with no digital footprint, creating critical healthcare challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
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
