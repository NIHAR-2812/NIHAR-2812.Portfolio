"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const NAMES = [
  "Nihar Padave",    // English
  "निहार पाडावे",    // Hindi
  "નીહાર પાડાવે",    // Gujarati
  "నిహార్ పడావే",    // Telugu
  "নিহার পাডাভে",    // Bengali
  "NIHAR PADAVE"     // Final Stylized
];

export default function SplashScreen({ onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < NAMES.length - 1) {
      const timeout = setTimeout(() => setIndex(index + 1), 800);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(onComplete, 1200);
      return () => clearTimeout(timeout);
    }
  }, [index, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Slide-through animation */}
      <div className="relative h-24 overflow-hidden flex items-center justify-center w-full">
        <AnimatePresence mode="popLayout">
          <motion.h1
            key={NAMES[index]}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute text-3xl md:text-5xl font-black text-white tracking-widest uppercase"
          >
            {NAMES[index]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Modern thin loading bar */}
      <div className="w-64 h-[2px] bg-gray-800 mt-12 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#f97316]"
          initial={{ width: "0%" }}
          animate={{ width: `${((index + 1) / NAMES.length) * 100}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}