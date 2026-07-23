"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Software Development Intern",
    company: "ZIDIO DEVELOPMENT",
    date: "MAY 2026 - PRESENT",
    summary: "Incoming Software Development Intern focusing on building robust applications. Tasked with developing modern, scalable software solutions and contributing to enterprise-level product development.",
    competencies: ["React", "Node.js", "Full-Stack", "UI/UX"],
    // Replace with an actual logo or project image in your public folder
    hoverImage: "/zidio.jpg" 
  },
  {
    role: "Digital Governance Fellow",
    company: "Daxy Private Limited",
    date: "JUNE 2026 - JULY 2026",
    summary: "Incoming Software Development Intern focusing on building robust applications. Tasked with developing modern, scalable software solutions and contributing to enterprise-level product development.",
    competencies: ["Python", "Google Sheets", "Excel"],
    // Replace with an actual logo or project image in your public folder
    hoverImage: "/daxy.jpg" 
  }
];

// Sub-component to handle independent mouse tracking per row
const ExperienceRow = ({ index, exp, isExpanded, toggleAccordion }) => {
  const [isHovered, setIsHovered] = useState(false);
  const rowRef = useRef(null);
  
  const number = String(index + 1).padStart(2, '0');

  // Mouse tracking values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth out the movement with spring physics
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the row, offset by half the image size to center it
    x.set(e.clientX - rect.left - 100); // 100 is half of the hover image width
    y.set(e.clientY - rect.top - 60);   // 60 is half of the hover image height
  };

  return (
    <div 
      ref={rowRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={() => toggleAccordion(index)}
      className="relative group border-b border-gray-200 dark:border-gray-800 py-10 md:py-14 cursor-pointer"
    >
      {/* Floating Hover Image (Hidden on mobile for better UX) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }} // Slight tilt for realism
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ x: cursorX, y: cursorY }}
            className="hidden md:block absolute top-0 left-0 z-50 pointer-events-none rounded-lg overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 bg-white"
          >
            <img 
              src={exp.hoverImage} 
              alt={`${exp.company} popup`} 
              className="w-[120px] h-[120px] object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Number & Role */}
        <div className="flex items-start md:items-center gap-6 md:gap-12 flex-1">
          <div className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${isExpanded ? "text-[#f97316]" : "text-slate-300 dark:text-slate-700"}`}>
            {number}
          </div>
          
          <div>
            <h3 className={`text-2xl md:text-4xl lg:text-5xl font-bold transition-colors duration-300 ${isExpanded ? "text-[#f97316]" : "text-slate-900 dark:text-white"}`}>
              {exp.role}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium tracking-widest text-xs md:text-sm mt-2 uppercase">
              {exp.company}
            </p>
          </div>
        </div>

        {/* Right Side: Date & Toggle Button */}
        <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-8 pl-12 md:pl-0">
          <span className="text-slate-400 dark:text-slate-500 text-xs md:text-sm font-bold tracking-[0.2em]">
            {exp.date}
          </span>
          
          <button 
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isExpanded 
                ? "bg-[#f97316] text-white" 
                : "bg-transparent text-slate-400 border border-slate-300 dark:border-slate-700 group-hover:border-slate-500"
            }`}
          >
            {isExpanded ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            )}
          </button>
        </div>

      </div>

      {/* Expanded Accordion Content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pl-12 md:pl-[84px] pt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
              
              <div>
                <h4 className="text-[#f97316] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Summary</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                  {exp.summary}
                </p>
              </div>

              <div>
                <h4 className="text-[#f97316] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Core Competencies</h4>
                <div className="flex flex-wrap gap-3">
                  {exp.competencies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-medium text-slate-500 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState(0); // First item expanded by default

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto px-6 py-24 border-t border-gray-200 dark:border-gray-800 mt-20">
      
      <div className="mb-16 flex justify-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tight text-center uppercase">
          Work Experience
        </h2>
      </div>

      <div className="flex flex-col w-full">
        {EXPERIENCES.map((exp, index) => (
          <ExperienceRow 
            key={index} 
            index={index} 
            exp={exp} 
            isExpanded={expandedIndex === index} 
            toggleAccordion={toggleAccordion} 
          />
        ))}
      </div>
    </section>
  );
}