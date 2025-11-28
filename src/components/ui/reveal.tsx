import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export const Reveal = ({ children, width = "fit-content", delay = 0.25 }: RevealProps) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.25, 0.25, 0.75] }} // Custom easing for that "elegant" feel
      >
        {children}
      </motion.div>
    </div>
  );
};

