"use client";

import { motion } from "framer-motion";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const EXPERIENCES = [
  {
    role: "Software Engineering Intern",
    company: "Zidio Development",
    date: "May 2026 - Present",
    description: "Contributing to scalable software solutions, participating in agile development sprints, and collaborating with cross-functional teams to deliver enterprise-grade applications.",
    tags: ["React", "Node.js", "Full-Stack"]
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Technix ACS Pvt Ltd",
    date: "Early 2026",
    description: "Architected and developed the Technix Timesheet Management System. Built automated Excel reporting pipelines and secure employee work log dashboards to streamline internal operations.",
    tags: ["Next.js", "Database Design", "Client Project"]
  }
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white transition-colors duration-300">
      <Header />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-24">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-sm md:text-base font-bold tracking-[0.3em] text-[#f97316] uppercase mb-6">Career Trajectory</h1>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]">Professional <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-800 dark:from-white/40 dark:to-white">Experience.</span></h2>
        </motion.div>

        <section className="flex flex-col gap-16 border-t border-slate-200 dark:border-white/10 pt-16">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative"
            >
              {/* Sticky Left Column (Date & Company) */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 h-max">
                <p className="text-[#f97316] font-bold tracking-widest text-sm uppercase mb-2">{exp.date}</p>
                <h3 className="text-2xl font-black">{exp.company}</h3>
              </div>
              
              {/* Scrolling Right Column (Details) */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <h4 className="text-3xl md:text-4xl font-black tracking-tight">{exp.role}</h4>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-bold tracking-widest uppercase text-slate-600 dark:text-white/80">
                      {tag}
                    </span>
                  ))}
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