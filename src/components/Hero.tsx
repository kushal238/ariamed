import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope } from "lucide-react";
import ariaLogo from "@/assets/aria-logo-new.svg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
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
              The Future of <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Medical Records</span> <br />
              Starts Here
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
            ABHA-integrated digital prescriptions that empower doctors and patients with complete medical history visibility.
            </p>
            
            <a 
              href="https://abha.abdm.gov.in/abha/v3/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-medium text-primary hover:text-primary/80 transition-colors mb-8 group"
            >
              Learn more about ABHA
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            
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
          
          <div className="relative lg:flex hidden items-center justify-center">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl" />
            <img 
              src={ariaLogo} 
              alt="Aria - Digital Healthcare Platform" 
              className="relative w-[500px] h-auto drop-shadow-2xl opacity-60"
              style={{ transform: 'translateZ(0)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
