"use client";

import { motion, AnimatePresence } from "framer-motion";

interface MasonryGridProps {
  children: React.ReactNode[];
  className?: string;
}

export default function MasonryGrid({
  children,
  className = "",
}: MasonryGridProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      <AnimatePresence mode="popLayout">
        {children.map((child, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              layout: { duration: 0.3 },
            }}
          >
            {child}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
