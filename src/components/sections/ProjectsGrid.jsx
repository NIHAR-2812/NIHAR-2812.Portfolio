"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "01",
    tag: "AI / LEGALTECH",
    title: "LEXIFY",
    description: "An AI-powered LegalTech platform leveraging machine learning to automatically parse residential leave and license agreements, instantly identifying risky clauses and anomalies for users.",
    techStack: ["Python", "FastAPI", "Streamlit", "Machine Learning"],
    outcome: "Successfully integrated a FastAPI & Streamlit machine learning pipeline.",
    defaultBg: "bg-gradient-to-br from-emerald-500 to-emerald-700",
    hoverBg: "bg-[#0a1922]",
    image: "/api/placeholder/800/600",
    links: { caseStudy: "#", github: "https://github.com/devesh1308/jargon-transaltors", live: "#" }
  },
  {
    id: "03",
    tag: "FULL-STACK / BOOKING",
    title: "SKYHIGH AIRWAYS",
    description: "A comprehensive flight booking and airline management platform featuring real-time seat availability, dynamic pricing algorithms, and secure payment gateway integration.",
    techStack: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    outcome: "Delivered a high-conversion booking flow with sub-second search querying.",
    defaultBg: "bg-gradient-to-br from-blue-500 to-cyan-700",
    hoverBg: "bg-[#0b132b]",
    image: "/skyhigh.png",
    links: { caseStudy: "#", github: "https://github.com/NIHAR-2812/skyhigh-airways", live: "#" }
  },
  {
    id: "04",
    tag: "SOCIAL GOOD / WEB APP",
    title: "HOPELINK",
    description: "A community-driven platform designed to connect volunteers and donors with local NGOs. Built with a focus on accessibility and mapped to UN Sustainable Development Goals.",
    techStack: ["Next.js", "Firebase", "Tailwind CSS", "Google Maps API"],
    outcome: "Facilitated community support through a seamless resource-matching algorithm.",
    defaultBg: "bg-gradient-to-br from-teal-500 to-emerald-800",
    hoverBg: "bg-[#071a14]",
    image: "/hopelink.png",
    links: { caseStudy: "#", github: "#", live: "#" }
  },
  {
    id: "05",
    tag: "DATA ANALYTICS / UI",
    title: "ZORLYTICS DASHBOARD",
    description: "A high-performance analytics dashboard providing real-time data visualization, custom reporting, and actionable business insights through interactive charts.",
    techStack: ["React.js", "TypeScript", "Chart.js", "Material UI"],
    outcome: "Architected a responsive Bento Grid layout for complex data visualization.",
    defaultBg: "bg-gradient-to-br from-indigo-500 to-violet-800",
    hoverBg: "bg-[#0f0b1a]",
    image: "/zorlytics.png",
    links: { caseStudy: "#", github: "https://github.com/NIHAR-2812/zorlytics-financial-dashboard", live: "https://zorlytics-financial-dashboard.vercel.app/" }
  }
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32 scroll-mt-20 border-t border-gray-200 dark:border-gray-800 mt-20">
      
      {/* Section Header */}
      <div className="mb-20 flex justify-center">
        <h2 className="text-6xl md:text-8xl lg:text-[140px] font-black text-slate-900 dark:text-white tracking-tighter text-center leading-none transition-colors duration-300">
          PROJECTS
        </h2>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-24 md:gap-32 w-full">
        {PROJECTS.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative w-full rounded-[2rem] overflow-hidden text-white flex flex-col lg:flex-row min-h-[550px] shadow-2xl cursor-default"
          >
            
            {/* Smooth Background Cross-fade */}
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0 ${project.defaultBg}`} />
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 ${project.hoverBg}`} />

            {/* Left Content Column */}
            <div className="relative z-10 w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-between">
              <div>
                {/* Number Badge */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-10 transition-all duration-500 bg-black/20 group-hover:bg-[#f97316] group-hover:shadow-lg group-hover:shadow-orange-500/30">
                  {project.id}
                </div>
                
                {/* Tag */}
                <div className="inline-block px-4 py-1.5 rounded-full bg-black/40 border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                  {project.tag}
                </div>
                
                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-[1.1]">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md">
                  {project.description}
                </p>

                {/* Tech Stack Pills: Hidden default, Slide open on hover */}
                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden flex flex-wrap gap-2 max-w-md pt-6">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 rounded bg-black/30 border border-white/10 text-[10px] md:text-xs font-medium text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Mockup Column */}
            <div className="relative z-10 w-full lg:w-1/2 min-h-[400px] lg:min-h-full flex items-center justify-center p-8 lg:p-12 lg:pl-0">
              
              <div className="relative w-full h-full max-h-[400px] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/50">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Key Outcome Box */}
              <div className="absolute bottom-4 left-4 md:bottom-10 md:-left-16 w-[90%] md:w-[420px] p-6 md:p-7 rounded-2xl shadow-2xl z-20 transition-all duration-500 bg-black/40 backdrop-blur-xl border border-white/10 group-hover:bg-[#111827]/95 group-hover:border-white/20">
                
                <h4 className="text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                  Key Outcome
                </h4>
                
                <p className="text-white text-sm md:text-base font-medium leading-snug">
                  "{project.outcome}"
                </p>
                
                {/* Action Buttons */}
                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden flex items-center gap-3 pt-6">
                    
                    <a 
                      href={project.links.caseStudy}
                      className="group/btn bg-white text-black text-[10px] md:text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors"
                    >
                      Case Study
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    
                    <a 
                      href={project.links.github}
                      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="View Source Code"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>

                    <a 
                      href={project.links.live}
                      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="View Live Project"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                    
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}