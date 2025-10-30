import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Aria</span>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              Transforming healthcare in India, one digital prescription at a time.
            </p>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © 2025 Aria. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
