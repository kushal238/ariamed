import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

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
        <div 
          className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent cursor-pointer"
          onClick={() => navigate('/')}
        >
          Aria
        </div>
        
        <Button 
          variant="hero" 
          className={`transition-all duration-300 ${
            showButton ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
          }`}
          onClick={() => navigate('/waitlist')}
        >
          Join the Waitlist
        </Button>
      </div>
    </nav>
  );
};
