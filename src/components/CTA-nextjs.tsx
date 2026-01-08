"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export const CTA = () => {
  const router = useRouter();

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero p-12 lg:p-24 shadow-2xl text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Connect with us!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="h-14 px-8 text-lg bg-white text-primary hover:bg-white/90 shadow-lg hover:scale-105 transition-all duration-300"
                onClick={() => router.push('/waitlist')}
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white"
                onClick={() => window.location.href = 'mailto:kushal@ariamed.ai'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

