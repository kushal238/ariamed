import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Aria
        </div>
        
        <Button variant="hero">
          Join the Waitlist
        </Button>
      </div>
    </nav>
  );
};
