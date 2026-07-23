"use client";

import { motion } from "framer-motion";

const CLIENT_PROJECTS = [
  {
    id: "01",
    client: "TECHNIX ACS PVT LTD",
    title: "TIMESHEET MANAGEMENT SYSTEM",
    description: "Developed a secure, full-stack timesheet management platform to eliminate manual data entry bottlenecks. The system features real-time employee work logging, automated role-based access, and a custom Excel reporting engine.",
    techStack: ["React.js", "Node.js", "Express.js", "ExcelJS", "SQL"],
    impact: "Streamlined operational efficiency by automating 100% of the manual timesheet reporting, significantly reducing human error and administrative overhead.",
    defaultBg: "bg-gradient-to-br from-slate-700 to-slate-900",
    hoverBg: "bg-[#0f172a]",
    links: { github: "#", live: "https://technix-timesheetapp.netlify.app/login" },
    collaborators: ["Devesh Patel (Strategy Lead)"]
  },
  {
    id: "02",
    client: "SEATTLE DESI TV",
    title: "COMMUNITY MEDIA PLATFORM",
    description: "Built a robust media streaming and community engagement platform. The system handles high-concurrency traffic for live and on-demand content, featuring a custom video content management system (CMS) and user interaction analytics.",
    techStack: ["Next.js", "Node.js", "AWS S3", "Tailwind CSS", "WebSockets"],
    impact: "Successfully scaled content delivery for the community, reducing media load times by 40% and providing a seamless viewer experience across desktop and mobile.",
    defaultBg: "bg-gradient-to-br from-red-900 to-rose-950",
    hoverBg: "bg-[#2a0e0e]",
    links: { github: "https://github.com/NIHAR-2812/seattle-desi-tv", live: "https://seattle-desi-tv-psi.vercel.app/" },
    collaborators: ["Internal Team"]
  }
];

export default function ClientProjects() {
  return (
    <section id="client-projects" className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-24 border-t border-gray-200 dark:border-gray-800 mt-20">
      
      {/* Section Header */}
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
          Client Projects
        </h2>
        <div className="h-1 w-20 bg-[#f97316] mt-4" />
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-12">
        {CLIENT_PROJECTS.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative w-full rounded-[2rem] overflow-hidden text-white flex flex-col lg:flex-row shadow-2xl cursor-default border border-white/5"
          >
            
            {/* Smooth Background Cross-fade */}
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100 group-hover:opacity-0 ${project.defaultBg}`} />
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 ${project.hoverBg}`} />

            {/* Left Content Column */}
            <div className="relative z-10 w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-between">
              <div>
                
                {/* Interactive Badge: Muted by default, vibrant orange on hover */}
                <div className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-6 transition-all duration-500 bg-white/10 text-white/70 border border-transparent group-hover:bg-[#f97316]/20 group-hover:text-[#f97316] group-hover:border-[#f97316]/30">
                  CLIENT PROJECT
                </div>
                
                <h3 className="text-sm font-bold text-white/50 tracking-widest uppercase mb-2">
                  {project.client}
                </h3>
                <h4 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                  {project.title}
                </h4>
                
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Hidden Details: Slide open on hover */}
                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8 pt-4">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-md bg-white/5 text-[10px] font-bold text-white/60 uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Collaborators */}
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Key Collaborator</p>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        {project.collaborators.map((name, i) => (
                          <span key={i} className="bg-white/10 px-3 py-1 rounded-full text-xs text-white/80">{name}</span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: Impact Box */}
            <div className="relative z-10 w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              {/* Subtle gradient overlay to separate the right column visually */}
              <div className="absolute inset-0 bg-black/10 lg:bg-gradient-to-r from-transparent to-black/30 pointer-events-none" />
              
              <div className="relative bg-white/5 group-hover:bg-black/30 p-8 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-500">
                
                {/* Title changes to orange on hover */}
                <h4 className="text-white/50 group-hover:text-[#f97316] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 transition-colors duration-500">
                  Professional Impact
                </h4>
                
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed italic">
                  "{project.impact}"
                </p>
                
                {/* Action Buttons: Hidden by default, slide open on hover */}
                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-3 pt-8">
                      
                      {/* Case Study Button */}
                      <a href={project.links.caseStudy} className="group/btn bg-white text-black text-[10px] md:text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors">
                        Case Study
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </a>
                      
                      {/* GitHub Link (if applicable to client project) */}
                      <a href={project.links.github} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      </a>

                      {/* Live Link */}
                      <a href={project.links.live} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      </a>

                    </div>
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