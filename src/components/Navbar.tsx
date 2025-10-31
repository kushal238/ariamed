import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Aria
        </div>
        
        <Button 
          variant="hero" 
          className={`transition-all duration-300 ${
            showButton ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
          }`}
        >
          Join the Waitlist
        </Button>
      </div>
    </nav>
  );
};
