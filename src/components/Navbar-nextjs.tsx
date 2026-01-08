"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowButton(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border/40 transition-all duration-300" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            router.push('/');
            window.scrollTo(0, 0);
          }}
        >
          <span className="text-2xl font-bold text-primary">
            Aria
          </span>
        </div>

        <Button
          variant="default"
          className={`transition-all duration-300 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 ${showButton ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
            }`}
          onClick={() => router.push('/waitlist')}
        >
          Join the Waitlist
        </Button>
      </div>
    </nav>
  );
};

