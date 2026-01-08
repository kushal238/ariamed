import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center p-1">
              <Image 
                src="/aria-logo-new.svg"
                alt="Aria Logo" 
                width={32}
                height={32}
                className="h-full w-full object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <span className="text-xl font-bold">Aria</span>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              Transforming healthcare in India, one prescription at a time.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-muted-foreground text-sm">
              © 2025 Aria. All rights reserved.
            </div>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

