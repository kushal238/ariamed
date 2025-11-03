import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/20 via-background to-background" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-glow/30 backdrop-blur-sm px-4 py-2 rounded-full">
              <Stethoscope className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Transforming Healthcare in India</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Digital <span className="bg-gradient-hero bg-clip-text text-transparent">Prescriptions</span> for Modern India
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Connect doctors and patients through secure digital prescriptions. No more lost records. Complete medical history at your fingertips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://forms.gle/ZHETRTEAm72hZv366', '_blank')}
              >
                Join the Waitlist
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Digital</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Always Accessible</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Lost Records</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="Modern healthcare with digital prescriptions" 
              className="relative rounded-2xl shadow-medium w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
