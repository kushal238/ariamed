import { Users, Pill, FileText, Brain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Dual App System",
    description: "Dedicated apps for doctors and patients. Secure role-based access with seamless identity management.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description: "Create, view, and manage digital prescriptions. Complete history accessible to both doctor and patient anytime.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Pill,
    title: "Medical Record Uploads",
    description: "Patients can upload lab scans, hospital reports, and documents. Richer medical history for better care.",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    icon: Brain,
    title: "AI & Analytics Ready",
    description: "Built for future AI integrations. Order medicines automatically, find patterns, and get intelligent insights.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Powerful Features for <span className="text-primary">Modern Healthcare</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to digitally transform the doctor-patient relationship in India.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Card 
                  className="bg-gradient-card border-border shadow-soft hover:shadow-medium transition-all duration-300 h-full"
                >
                  <CardHeader>
                    <div className={`h-14 w-14 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`h-7 w-7 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
