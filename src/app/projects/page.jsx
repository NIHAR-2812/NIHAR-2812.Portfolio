"use client";

import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

// Populated with your actual projects and image placeholders
const PROJECTS = [
  {
    title: "Lexify",
    type: "LegalTech AI Platform",
    description: "An intelligent platform utilizing machine learning to parse residential leave and license agreements, instantly identifying and highlighting risky clauses for users.",
    tech: ["FastAPI", "Streamlit", "Python", "Machine Learning"],
    image: "/skyhigh.png" // Replace with a screenshot of Lexify
  },
  {
    title: "Technix Timesheet",
    type: "Enterprise Management System",
    description: "Architected for Technix ACS Pvt Ltd, this system features automated Excel reporting pipelines and secure employee work log dashboards to streamline internal operations.",
    tech: ["Next.js", "Full-Stack", "Client Project"],
    image: "/api/placeholder/1200/800" // Replace with a dashboard screenshot
  },
  {
    title: "AptiForge",
    type: "EdTech Platform",
    description: "A dynamic and adaptive learning application engineered to provide personalized educational pathways and responsive testing environments.",
    tech: ["React", "Node.js", "SQL", "Java"],
    image: "/api/placeholder/1200/800" // Replace with an app mockup
  },
  {
    title: "Agri-Waste to Biofuel",
    type: "Startup Prototype & UI/UX",
    description: "High-fidelity Figma wireframes and MVP logic connecting farmers with biofuel processing units, aimed at creating economic value and reducing stubble burning.",
    tech: ["Figma", "UI/UX Architecture", "Wireframing"],
    image: "/api/placeholder/1200/800" // Replace with your Figma design mockup
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white transition-colors duration-300">
      <Header />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-sm md:text-base font-bold tracking-[0.3em] text-[#f97316] uppercase mb-6">
            Selected Works
          </h1>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
            Engineering <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-800 dark:from-white/40 dark:to-white">
              Solutions.
            </span>
          </h2>
        </motion.div>

        {/* PROJECTS LIST */}
        <section className="grid grid-cols-1 gap-12 border-t border-slate-200 dark:border-white/10 pt-16">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-[2rem] bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden cursor-pointer"
            >
              
              {/* --- THE HOVER IMAGE REVEAL --- */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                {/* The Image (Scales down slightly and fades in on hover) */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-700 ease-out"
                />
                {/* Dark Gradient Overlay (Ensures text stays readable when image fades in) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
              </div>

              {/* Default Orange Glow (Fades out when image reveals) */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f97316] rounded-full blur-[120px] opacity-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

              {/* --- CARD CONTENT --- */}
              <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between p-8 md:p-12 h-full transition-transform duration-500 group-hover:translate-x-2">
                
                <div className="max-w-2xl">
                  {/* Category */}
                  <p className="text-[#f97316] font-bold tracking-widest text-xs uppercase mb-4 drop-shadow-md">
                    {project.type}
                  </p>
                  
                  {/* Title (Turns white on hover to contrast with the dark image overlay) */}
                  <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-6 group-hover:text-white transition-colors duration-500">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-lg text-slate-600 dark:text-slate-400 group-hover:text-white/80 leading-relaxed mb-8 transition-colors duration-500">
                    {project.description}
                  </p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map(tech => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 group-hover:border-white/30 bg-slate-50 dark:bg-black/30 group-hover:bg-white/10 text-xs font-bold tracking-widest uppercase text-slate-600 dark:text-white/80 group-hover:text-white backdrop-blur-sm transition-all duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Call To Action Arrow (Slides in slightly on hover) */}
                <div className="hidden md:flex items-start justify-end">
                  <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 group-hover:border-[#f97316] flex items-center justify-center text-slate-400 group-hover:bg-[#f97316] group-hover:text-white transition-all duration-500 -rotate-45 group-hover:rotate-0 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}