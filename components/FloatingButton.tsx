"use client";

import { motion } from "framer-motion";

type FloatingButtonProps = {
  phone?: string;
  whatsapp?: string;
  className?: string;
};

export default function FloatingButton({
  phone = "+44 (0) 1782 123 456",
  whatsapp = "+44 (0) 1782 123 456",
  className = "",
}: FloatingButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
      className={`fixed bottom-8 right-8 z-30 flex flex-col gap-4 ${className}`}
    >
      {/* Phone */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href={`tel:${phone.replace(/[^+\d]/g, "")}`}
        className="flex items-center gap-3 bg-amber-500 text-black font-bold px-5 py-3 rounded-full shadow-lg hover:bg-amber-400 transition-colors"
      >
        <span className="material-symbols-outlined text-lg">call</span>
        <span>{phone}</span>
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href={`https://wa.me/${whatsapp.replace(/[^+\d]/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-green-500 text-black font-bold px-5 py-3 rounded-full shadow-lg hover:bg-green-400 transition-colors"
      >
        <span className="material-symbols-outlined text-lg">chat</span>
        <span>WhatsApp</span>
      </motion.a>
    </motion.div>
  );
}