"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import IDCard from "../ui/IDCard";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-10 w-full overflow-hidden bg-transparent">
      
      {/* Gridlines - Only visible in dark mode */}
      <div 
        className="absolute inset-0 z-0 hidden dark:block opacity-[0.04] pointer-events-none"
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `, 
          backgroundSize: '50px 50px' 
        }} 
      />

      <div className="relative w-full flex flex-col items-center justify-center z-10 mt-12 md:mt-0">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute left-[5%] top-[-40px] md:top-[-60px]"
        >
          <p className="text-[#f97316] font-bold tracking-[0.3em] text-xs md:text-sm">
            HELLO! I'M
          </p>
        </motion.div>

        {/* GUARANTEED WHITE TEXT IN DARK MODE */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-[11.5vw] md:text-[12vw] font-black text-slate-900 dark:text-white whitespace-nowrap tracking-[-0.02em] leading-none select-none text-center w-full transition-colors duration-500"
        >
          NIHAR PADAVE
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute right-[5%] bottom-[-60px] md:bottom-[-80px] text-right"
        >
          <p className="text-[#f97316] font-bold tracking-[0.2em] text-xs md:text-sm max-w-[200px] md:max-w-[300px]">
            I BUILD SCALABLE WEB APPS & UI/UX ARCHITECTURE!
          </p>
        </motion.div>
      </div>
      
      {/* Centering Wrapper for the ID Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        {/* The Swinging Pendulum Animation */}
        <motion.div
          initial={{ y: -200, rotateZ: 35, opacity: 0 }}
          animate={{ y: 0, rotateZ: 0, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 150, 
            damping: 8,   // Creates the swing back and forth
            mass: 1.5,
            delay: 2    // Drops in just as the name finishes scaling
          }}
          style={{ transformOrigin: "top center" }}
          className="will-change-transform"
        >
          <IDCard />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-10 z-30"
      >
        <Link 
          href="#about"
          className="w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-lg hover:-translate-y-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
        </Link>
      </motion.div>

    </section>
  );
}