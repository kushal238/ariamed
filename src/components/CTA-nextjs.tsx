"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export const CTA = () => {
  const router = useRouter();

  return (
    <section className="py-24 border-y border-border/60 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Get started
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-tight">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect with us!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button
              size="lg"
              className="h-12 px-7 text-base bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => router.push("/waitlist")}
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 text-base border-border text-foreground hover:bg-muted/40 hover:text-foreground hover:border-border/80"
              onClick={() => (window.location.href = "mailto:kushal@ariamed.ai")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

