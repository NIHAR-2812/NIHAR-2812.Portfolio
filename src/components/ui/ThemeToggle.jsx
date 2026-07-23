"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch on first render
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-[120px] h-6" />; 

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-3">
      {/* The Pill Switch */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`w-12 h-6 rounded-full border flex items-center px-1 transition-colors duration-300 relative ${
          isDark ? "bg-[#f97316] border-[#f97316]" : "bg-transparent border-slate-300"
        }`}
        aria-label="Toggle Dark Mode"
      >
        <motion.div 
          className={`w-4 h-4 rounded-full ${isDark ? 'bg-white' : 'bg-slate-800'}`}
          animate={{ x: isDark ? 22 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      
      {/* The Label */}
      <span className="text-[10px] font-bold tracking-widest text-slate-800 dark:text-slate-300 uppercase select-none">
        Dark Mode
      </span>
    </div>
  );
}