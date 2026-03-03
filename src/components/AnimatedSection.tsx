"use client";
import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: "fadeInUp" | "fadeIn" | "stagger";
  delay?: number;
}
const variantMap = {
  fadeInUp,
  fadeIn,
  stagger: staggerContainer,
};
export default function AnimatedSection({
  children,
  className = "",
  variant = "fadeInUp",
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variantMap[variant]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export { fadeInUp, fadeIn, staggerContainer };
