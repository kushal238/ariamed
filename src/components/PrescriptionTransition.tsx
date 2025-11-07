import { useEffect, useRef, useState } from "react";
import prescriptionImage from "@/assets/prescription-paper.jpg";
import iphoneImage from "@/assets/iphone-mockup.png";

export const PrescriptionTransition = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the section we've scrolled
      const sectionTop = rect.top;
      const scrollStart = windowHeight;
      const scrollEnd = -sectionHeight;
      
      // Progress from 0 to 1 as section moves from bottom to top of viewport
      const progress = Math.max(0, Math.min(1, (scrollStart - sectionTop) / (scrollStart - scrollEnd)));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transformations based on scroll progress
  const prescriptionTransform = {
    opacity: 1 - scrollProgress * 1.2,
    scale: 1 - scrollProgress * 0.3,
    translateY: scrollProgress * -100,
    rotate: scrollProgress * -15,
  };

  const phoneTransform = {
    opacity: Math.max(0, (scrollProgress - 0.3) * 1.5),
    scale: 0.8 + scrollProgress * 0.2,
    translateY: (1 - scrollProgress) * 100,
  };

  const prescriptionInPhoneOpacity = Math.max(0, (scrollProgress - 0.5) * 2);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="relative h-[600px] md:h-[800px] flex items-center justify-center">
          
          {/* Physical Prescription */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-100"
            style={{
              opacity: prescriptionTransform.opacity,
              transform: `
                translateY(${prescriptionTransform.translateY}px) 
                scale(${prescriptionTransform.scale})
                rotate(${prescriptionTransform.rotate}deg)
              `,
            }}
          >
            <div className="relative max-w-md w-full px-4">
              <img 
                src={prescriptionImage} 
                alt="Physical prescription document"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur px-6 py-3 rounded-full border border-border shadow-lg whitespace-nowrap">
                <p className="text-sm font-medium">Traditional Paper Prescription</p>
              </div>
            </div>
          </div>

          {/* iPhone with Prescription */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-100"
            style={{
              opacity: phoneTransform.opacity,
              transform: `
                translateY(${phoneTransform.translateY}px) 
                scale(${phoneTransform.scale})
              `,
            }}
          >
            <div className="relative max-w-sm w-full px-4">
              <div className="relative">
                <img 
                  src={iphoneImage} 
                  alt="iPhone mockup"
                  className="w-full h-auto"
                />
                {/* Prescription inside phone screen */}
                <div 
                  className="absolute top-[12%] left-[10%] right-[10%] bottom-[12%] overflow-hidden rounded-[2rem]"
                  style={{ opacity: prescriptionInPhoneOpacity }}
                >
                  <img 
                    src={prescriptionImage} 
                    alt="Digital prescription"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary/95 backdrop-blur px-6 py-3 rounded-full shadow-lg whitespace-nowrap">
                <p className="text-sm font-medium text-primary-foreground">Digital in Your Pocket</p>
              </div>
            </div>
          </div>

          {/* Center Text that fades in/out */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              opacity: scrollProgress > 0.4 && scrollProgress < 0.6 ? (scrollProgress - 0.4) * 5 : 0,
            }}
          >
            <div className="text-center space-y-2 px-4">
              <h3 className="text-3xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                The Future is Digital
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground">
                Secure • Accessible • Always Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
