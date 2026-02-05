"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/20 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Enhance your clinical
              <br />
              workflows with
              <br />
              <span className="text-primary">EMR-integrated AI</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Streamline your practice with Intelligent ABHA-linked medical record management system. Save time, enhance patient care, and focus on what matters most.
            </p>

            <a
              href="https://abha.abdm.gov.in/abha/v3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group text-sm sm:text-base"
            >
              Learn more about ABHA
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

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

