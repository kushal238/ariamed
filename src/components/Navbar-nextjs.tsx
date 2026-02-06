"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  const [scrollOffset, setScrollOffset] = useState(0);
  const lastYRef = useRef(0);
  const offsetRef = useRef(0);

  useEffect(() => {
    lastYRef.current = Math.max(0, window.scrollY);
    offsetRef.current = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = Math.max(0, window.scrollY);
          const maxOffset = 72;
          if (currentY === 0) {
            offsetRef.current = 0;
            setScrollOffset(0);
            lastYRef.current = 0;
            ticking = false;
            return;
          }
          // Stay hidden inside scroll-pinned sections
          const pinEl = document.querySelector("[data-scroll-pin]") as HTMLElement | null;
          if (pinEl) {
            const pinTop = pinEl.offsetTop;
            const pinBottom = pinTop + pinEl.offsetHeight;
            if (currentY >= pinTop && currentY < pinBottom) {
              offsetRef.current = maxOffset;
              setScrollOffset(maxOffset);
              lastYRef.current = currentY;
              ticking = false;
              return;
            }
          }

          const delta = currentY - lastYRef.current;
          const absDelta = Math.abs(delta);
          if (absDelta < 6) {
            lastYRef.current = currentY;
            ticking = false;
            return;
          }
          const easedDelta = delta * 0.6;
          const nextOffset = Math.min(
            Math.max(offsetRef.current + easedDelta, 0),
            maxOffset
          );
          offsetRef.current = nextOffset;
          setScrollOffset(nextOffset);
          lastYRef.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border/40 transition-transform duration-200"
      style={{
        willChange: "transform",
        transform: `translateY(-${scrollOffset}px) translateZ(0)`,
      }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            router.push('/');
            window.scrollTo(0, 0);
          }}
        >
          <span className="text-3xl font-semibold text-primary tracking-tight">
            Aria
          </span>
        </div>

        <Button
          variant="default"
          className="bg-primary hover:bg-primary/90"
          onClick={() => router.push("/waitlist")}
        >
          Join the Waitlist
        </Button>
      </div>
    </nav>
  );
};

