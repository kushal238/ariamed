import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  viewport?: UseInViewOptions;
}

export const ScrollAnimation = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  viewport = { once: true, margin: "-100px" },
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);

  const getVariants = () => {
    const distance = 50;
    
    const hidden = {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    };

    const visible = {
      opacity: 1,
      y: 0,
      x: 0,
    };

    return { hidden, visible };
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={getVariants()}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

