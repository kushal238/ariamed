"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-[#0f172a]">
              Enhance your clinical
              <br />
              workflows with
              <br />
              <span className="text-primary">AI-native EMR system</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Streamline your practice with an intelligent medical record management system. Save time, enhance patient care, and focus on what matters most.
            </p>

<div className="flex items-center justify-center gap-8 pt-8 border-t border-border/50 max-w-2xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

