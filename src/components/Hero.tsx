import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope } from "lucide-react";
import ariaLogo from "@/assets/aria-logo-final.svg";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/20 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* <div className="inline-flex items-center gap-2 bg-primary-glow/30 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10">
              <Stethoscope className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Transforming Healthcare in India</span>
            </div> */}

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              The Future of <br />
              <span className="text-primary">Medical Records</span> <br />
              Starts Here
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              ABHA-integrated digital prescriptions that empower doctors and patients with complete medical history visibility.
            </p>

            <a
              href="https://abha.abdm.gov.in/abha/v3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-medium text-primary hover:text-primary/80 transition-colors mb-8 group"
            >
              Learn more about ABHA
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="flex items-center gap-8 pt-8 border-t border-border/50">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:flex hidden items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full" />
            <img
              src={ariaLogo}
              alt="Aria - Digital Healthcare Platform"
              className="relative w-[500px] h-auto drop-shadow-2xl opacity-90 hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
              style={{ transform: 'translateZ(0)', willChange: 'transform' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
