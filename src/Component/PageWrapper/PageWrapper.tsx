// components/PageWrapper.tsx
import { motion } from "framer-motion";

const pageVariants = {
  initial: { x: 40, opacity: 0, scale: 0.98 },
  in: { x: 0, opacity: 1, scale: 1 },
  out: { x: -40, opacity: 0, scale: 0.98 },
};

const pageTransition = {
  duration: 0.5,
  ease: [0.25, 0.8, 0.25, 1],
};

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
