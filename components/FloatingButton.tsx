"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type FloatingButtonProps = {
  className?: string;
};

export default function FloatingButton({ className = "" }: FloatingButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
      className={`fixed bottom-8 right-8 z-30 ${className}`}
    >
      <Link href="/contact">
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-amber-500 text-black font-bold px-5 py-3 rounded-full shadow-lg hover:bg-amber-400 transition-colors"
        >
          <span className="material-symbols-outlined text-lg">mail</span>
          <span>Contact Us</span>
        </motion.span>
      </Link>
    </motion.div>
  );
}
