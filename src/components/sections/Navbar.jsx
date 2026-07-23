"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6"
    >
      <nav className="glass-panel px-6 py-3 flex items-center gap-8 rounded-full">
        <Link href="/" className="font-medium text-primary hover:text-accent transition-colors">
          NP.
        </Link>
        <div className="h-4 w-[1px] bg-border" />
        <div className="flex items-center gap-6 text-sm text-muted">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}