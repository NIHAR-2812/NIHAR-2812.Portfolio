"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full min-h-[80vh] flex flex-col items-center justify-center py-24 md:py-32 overflow-hidden border-t border-gray-200 dark:border-gray-800 mt-20">
      
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden w-full">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[18vw] font-black text-slate-100 dark:text-white/5 whitespace-nowrap tracking-tighter leading-none select-none"
        >
          CONTACT
        </motion.h1>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl mx-auto">
        
        {/* Animated Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 dark:text-white leading-[1.1] md:leading-[1.05] tracking-tight"
        >
          <h2>Let's Build</h2>
          <h2 className="text-[#f97316] italic tracking-normal lowercase my-2 md:my-0">
            something
          </h2>
          <h2>Amazing.</h2>
        </motion.div>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 mb-12 text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed"
        >
          Have a project, an idea, or a role that needs a developer who ships? I'd love to hear about it.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a 
            href="https://www.linkedin.com/in/niharpadave281206/" // Replace with your actual email
            className="group relative inline-flex items-center gap-3 bg-[#f97316] text-white font-bold tracking-widest text-xs md:text-sm px-8 py-5 rounded-full hover:bg-[#ea580c] transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1"
          >
            START A CONVERSATION
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </motion.div>

        {/* Social Icons Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-4 mt-20"
        >
          {/* Email */}
          <a href="mailto:niharrr2806@gmail.com" className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#f97316] dark:hover:text-[#f97316] hover:border-[#f97316] dark:hover:border-[#f97316] transition-all duration-300 hover:-translate-y-1 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/niharpadave281206/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#f97316] dark:hover:text-[#f97316] hover:border-[#f97316] dark:hover:border-[#f97316] transition-all duration-300 hover:-translate-y-1 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          
          {/* GitHub */}
          <a href="https://github.com/NIHAR-2812" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#f97316] dark:hover:text-[#f97316] hover:border-[#f97316] dark:hover:border-[#f97316] transition-all duration-300 hover:-translate-y-1 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}