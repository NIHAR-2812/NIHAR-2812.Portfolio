"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle"; // Adjust path as needed

export default function Header() {
  const [showName, setShowName] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Automatically toggle the logo text every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowName((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" }, // Routes to your new separate page
    { name: "Projects", href: "/projects" },
    { name: "Involvement", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-6 flex justify-between items-center transition-colors duration-500 ${
          isOpen ? "bg-transparent" : "bg-white/70 dark:bg-[#050505]/70 backdrop-blur-md border-b border-slate-200 dark:border-white/10"
        }`}
      >
        
        {/* Animated Top-Left Text */}
        <Link href="/" className="h-6 flex items-center overflow-hidden w-[200px] md:w-[250px] relative z-[110]">
          <AnimatePresence mode="wait">
            <motion.div
              key={showName ? "name" : "role"}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
              className="text-sm md:text-base font-bold tracking-[0.2em] text-[#f97316] uppercase"
            >
              {showName ? "Nihar Padave" : "Developer"}
            </motion.div>
          </AnimatePresence>
        </Link>
        
        <div className="flex items-center gap-8 relative z-[110]">
          <ThemeToggle />
          
          {/* Brutalist Text Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white hover:text-[#f97316] dark:hover:text-[#f97316] transition-colors w-12 text-right"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </motion.header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%", transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-slate-50 dark:bg-[#050505] flex flex-col justify-center px-6 md:px-12"
          >
            <nav className="flex flex-col gap-6 md:gap-8 max-w-7xl mx-auto w-full">
              {navLinks.map((link, index) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: isOpen ? 0.2 + (index * 0.1) : 0, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter hover:text-[#f97316] dark:hover:text-[#f97316] transition-colors block w-max"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            {/* Menu Footer elements */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 flex justify-between items-end border-t border-slate-200 dark:border-white/10 pt-6 max-w-7xl mx-auto w-full"
            >
              <div className="flex gap-6">
                <a href="https://github.com/NIHAR-2812" target="_blank" rel="noreferrer" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-[#f97316] transition-colors">Github</a>
                <a href="https://www.linkedin.com/in/niharpadave281206/" target="_blank" rel="noreferrer" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-[#f97316] transition-colors">LinkedIn</a>
              </div>
              <a href="mailto:your.email@example.com" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-[#f97316] transition-colors">
                Let's Talk
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}