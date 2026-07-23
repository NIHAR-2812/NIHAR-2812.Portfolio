"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CERTIFICATIONS = [
  {
    title: "QueryCraft: The Art of Database Engineering",
    issuer: "SAKEC",
    date: "Dec 2025",
    credentialId: "",
    tags: ["SQL", "SAKEC", "Dec 2025"],
    link: "https://drive.google.com/file/d/1GAI-CaXsY0XZ3X5sVsCgL8OLSIBkxFx4/view?usp=sharing",
    image: "/querycraft.png" 
  },
  {
    title: "Data Science with Power BI",
    issuer: "ECS Department SAKEC",
    date: "Jun 2025",
    credentialId: "",
    tags: ["Python", "Jupyter", "Power BI", "Collab"],
    link: "https://drive.google.com/file/d/1J3Ajmpkf2b1ISzCHlG_kaR-xSSoebdgf/view?usp=sharing",
    image: "/powerbi.png"
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Metworking Academy",
    date: "May 2026",
    credentialId: "027bea51-038b-4f0a-a723-9999705fd510",
    tags: ["Python", "Analytics"],
    link: "https://drive.google.com/file/d/1ka0TLNdbZO_2YMmygupP9euYJu6XM4Oc/view?usp=sharing",
    image: "/data-analytics.png"
  },
  {
    title: "Python Skill-Based Lab Micro Project Exhibition",
    issuer: "ECS Department, SAKEC",
    date: "Jan 2026",
    credentialId: "",
    tags: ["Django", "Python", "Collab"],
    link: "https://drive.google.com/file/d/1gbH3pIV7h9pobi2OHdkbSwc6sv09kLz1/view?usp=sharing",
    image: "/runnerup.png"
  }
];

export default function Certifications() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-24 border-t border-gray-200 dark:border-gray-800">
      
      <div className="mb-16 flex justify-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight text-center">
          CERTIFICATIONS
        </h2>
      </div>

      {/* 
        Added onMouseLeave to the parent container. 
        This ensures all accordions close when the mouse leaves the certifications area.
      */}
      <div 
        className="flex flex-col w-full"
        onMouseLeave={() => setExpandedIndex(null)}
      >
        {CERTIFICATIONS.map((cert, index) => {
          const isExpanded = expandedIndex === index;
          const number = String(index + 1).padStart(2, '0');

          return (
            <div 
              key={index}
              // Added onMouseEnter for desktop hover functionality
              onMouseEnter={() => setExpandedIndex(index)}
              // Kept onClick for mobile/touchscreen support
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="group border-b border-gray-200 dark:border-gray-800 py-6 md:py-8 cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/50"
            >
              <div className="flex items-start">
                
                <div 
                  className={`w-16 md:w-24 text-xl md:text-2xl font-bold transition-colors duration-300 ${
                    isExpanded ? "text-[#f97316]" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {number}
                  <span className={isExpanded ? "text-[#f97316]" : "text-[#f97316]"}>.</span>
                </div>

                <div className="flex-1">
                  
                  <AnimatePresence initial={false}>
                    {!isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-lg md:text-2xl font-semibold text-slate-800 dark:text-slate-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                          {cert.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-2 pb-4">
                          
                          <div className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 shadow-sm">
                            <img 
                              src={cert.image} 
                              alt={`${cert.title} Certificate`}
                              className="w-full h-auto object-cover rounded border border-gray-100 dark:border-gray-600"
                            />
                          </div>

                          <div className="flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                              {cert.title}
                            </h3>
                            
                            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mb-6">
                              {cert.issuer} - Issued {cert.date} (Credential ID: {cert.credentialId})
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                              {cert.tags.map((tag, i) => (
                                <span 
                                  key={i} 
                                  className="px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-medium text-slate-600 dark:text-slate-300"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <a 
                              href={cert.link}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-[#f97316] dark:hover:text-[#f97316] transition-colors"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                              View Credential
                            </a>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}