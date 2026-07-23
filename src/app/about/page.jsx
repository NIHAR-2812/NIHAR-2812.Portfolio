"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/sections/Header"; 
import Footer from "@/components/sections/Footer"; 
import GravityGallery from "@/components/ui/GravityGallery"; // Changed Import

// LIVE CLOCK COMPONENT
const LiveClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = { 
        timeZone: "Asia/Kolkata", 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };
    
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-bold text-3xl text-slate-900 dark:text-white transition-colors duration-300">
      {time} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">(IST)</span>
    </span>
  );
};

// Developer Icons for the Gravity Physics Gallery
const SKILL_ICONS = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" }
];

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    color: "text-blue-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    ),
    skills: ["Java (OOPs)", "Python", "JavaScript", "TypeScript", "SQL", "C/C++"]
  },
  {
    title: "Full-Stack & Databases",
    color: "text-red-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    ),
    skills: ["React.js", "Node.js", "Express.js", "Next.js", "FastAPI", "Django", "Flutter", "MongoDB", "PostgreSQL", "Tailwind CSS"]
  },
  {
    title: "Tools & DevOps",
    color: "text-emerald-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
    ),
    skills: ["Git/GitHub", "Figma", "Postman", "Vercel", "Linux"]
  },
  {
    title: "CS Fundamentals",
    color: "text-purple-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
    ),
    skills: ["Operating Systems", "Computer Networks", "DSA", "DBMS"]
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white transition-colors duration-300">
      
      <Header />

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* 1. INTRO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[70vh] items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Tag Pill */}
            <div className="inline-flex w-max items-center px-4 py-2 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316] text-xs font-bold tracking-widest mb-8">
              B.Tech ECS Engineer • SAKEC
            </div>

            {/* Native Name / Hero Title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[1.1] mb-8">
              निहार <br />
              पडवे।
            </h1>

            {/* Subheadline */}
            <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-12 max-w-lg">
              <p className="text-slate-900 dark:text-white font-bold mb-2">Build. Break. Repeat.</p>
              <p>I build systems that solve real problems — and I do it with purpose.</p>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "</>", text: "Full-Stack" },
                { icon: "⚡", text: "UI/UX Architecture" },
                { icon: "💼", text: "Freelancer" }
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-transparent text-sm font-semibold text-slate-700 dark:text-white/80 hover:border-[#f97316]/50 transition-colors">
                  <span className="text-[#f97316]">{pill.icon}</span>
                  {pill.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Big Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full h-[500px] lg:h-[80vh] rounded-[2rem] overflow-hidden order-1 lg:order-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"
          >
            <img 
              src="/pfp.jpg" 
              alt="Nihar Padave Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

        </section>

        {/* 2. BIO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 min-h-[70vh] items-center pt-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[500px] lg:h-[80vh] rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 relative"
          >
            <img 
              src="/pfp.jpg" 
              alt="Nihar Presenting" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-10 text-white drop-shadow-lg z-10">
              <h3 className="text-3xl font-black mb-2">Nihar Padave</h3>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 leading-relaxed">
                Developer<br/>
                Designer<br/>
                Innovator
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center border-l-2 border-[#f97316] pl-6 md:pl-10"
          >
            <div className="space-y-8 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I am an Engineering student at <span className="font-bold text-slate-900 dark:text-white">SAKEC</span> (CGPA: <span className="text-[#f97316] font-bold">8.9/10</span>) passionate about <span className="font-bold border-b border-slate-400 dark:border-white text-slate-900 dark:text-white pb-0.5">Full Stack Development</span>. I specialize in building scalable applications that solve real operational problems.
              </p>
              <p>
                My passion lies in architecting <span className="font-bold text-slate-900 dark:text-white">enterprise-grade MERN stacks</span> and innovating with <span className="font-bold text-slate-900 dark:text-white">AI/ML</span> to solve critical issues — transforming complexity into clarity.
              </p>
            </div>

            <div className="mt-12 mb-8">
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-2">Based and work in Mumbai, India</p>
              <LiveClock />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-4">
              <div className="flex bg-slate-100 dark:bg-white/5 rounded-full p-2 border border-slate-200 dark:border-white/10">
                <a href="https://github.com/NIHAR-2812" target="_blank" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/niharpadave281206/" target="_blank" className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:scale-110 transition-transform -ml-2 border-2 border-white dark:border-[#0a0a0a]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://www.instagram.com/niharrr_.28/" target="_blank" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 transition-transform -ml-2 border-2 border-white dark:border-[#0a0a0a]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>

              <a 
                href="/niharpadave_resume.pdf"
                target="_blank"
                className="bg-[#f97316] text-white font-bold tracking-widest text-xs px-8 py-4 rounded-full flex items-center gap-3 hover:bg-[#ea580c] transition-colors shadow-lg shadow-orange-500/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                RESUMÉ
              </a>
            </div>
          </motion.div>
        </section>

        {/* 3. SKILLS & TECHNOLOGIES */}
        <section className="flex flex-col items-center border-t border-slate-200 dark:border-white/10 pt-24">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12 text-center">Skills & Technologies</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
            {/* Left Column: Gravity Physics Gallery */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-0 md:p-0 flex items-center justify-center min-h-[400px] shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden relative"
            >
              {/* Added the Gravity Gallery with custom props */}
              <GravityGallery 
                images={SKILL_ICONS} 
                count={12} 
                size={70} 
                shape="circle" 
                friction={5}
                gravY={1}
              />
            </motion.div>

            {/* Right Column: Categorized Skill Cards */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {SKILL_CATEGORIES.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg shadow-slate-200/30 dark:shadow-none"
                >
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-white/10 pb-4">
                    <div className={`${category.color}`}>
                      {category.icon}
                    </div>
                    <h4 className={`text-sm font-bold tracking-widest uppercase ${category.color}`}>
                      {category.title}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/30 text-xs md:text-sm font-semibold text-slate-600 dark:text-white/80 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. ACADEMIC FOUNDATION */}
        <section className="flex flex-col items-center border-t border-slate-200 dark:border-white/10 pt-24">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12 text-center">Academic Foundation</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            
            {[
              {
                degree: "Bachelor of Technology",
                stream: "ELECTRONICS & COMPUTER SCIENCE",
                institution: "Shah & Anchor Kutchhi Engineering College (SAKEC)",
                duration: "2024 - PRESENT", 
                logo: "/sakec.png", 
              },
              {
                degree: "Higher Secondary (HSC)",
                stream: "SCIENCE STREAM",
                institution: "Jai Bharat Junior College of Commerce, Science and Arts",
                duration: "2022 - 2024",
                logo: "/jaibharat.png", 
              },
              {
                degree: "Secondary (SSC)",
                stream: "1ST - 10TH",
                institution: "Shardashram Vidyamandir English Medium High School",
                duration: "2012 - 2022",
                logo: "/svm.jpg", 
              }
            ].map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 md:p-10 rounded-3xl overflow-hidden bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-[#f97316]/50 transition-colors duration-500 flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f97316] rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
                
                <div>
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center p-2 mb-6 border border-slate-200 overflow-hidden">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.institution} Logo`}
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  
                  <h4 className="text-2xl font-black tracking-tight mb-2">{edu.degree}</h4>
                  <p className="text-[#f97316] font-bold text-sm tracking-widest uppercase mb-4">
                    {edu.stream}
                  </p>
                  <p className="text-slate-600 dark:text-white/60 font-medium leading-relaxed">
                    {edu.institution}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10">
                  <span className="inline-block px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-white/50">
                    {edu.duration}
                  </span>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* 5. ACADEMIC METRICS (4 Blocks) */}
        <section className="flex flex-col items-center border-t border-slate-200 dark:border-white/10 pt-24">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12 text-center">Academic Metrics</h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            
            {/* CGPA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 md:p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col justify-center items-center text-center shadow-lg shadow-slate-200/50 dark:shadow-none"
            >
              <p className="text-slate-500 dark:text-white/50 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3">CGPA</p>
              <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">8.5<span className="text-xl md:text-2xl text-slate-400 dark:text-white/30">/10</span></p>
            </motion.div>

            {/* MHT-CET */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 md:p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col justify-center items-center text-center shadow-lg shadow-slate-200/50 dark:shadow-none"
            >
              <p className="text-slate-500 dark:text-white/50 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3">MHT-CET</p>
              <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">85.6<span className="text-xl md:text-2xl text-slate-400 dark:text-white/30">%ile</span></p>
            </motion.div>

            {/* 12th Grade */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 md:p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col justify-center items-center text-center shadow-lg shadow-slate-200/50 dark:shadow-none"
            >
              <p className="text-slate-500 dark:text-white/50 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3">12th (HSC)</p>
              <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">67<span className="text-xl md:text-2xl text-slate-400 dark:text-white/30">%</span></p>
            </motion.div>

            {/* 10th Grade */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 md:p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col justify-center items-center text-center shadow-lg shadow-slate-200/50 dark:shadow-none"
            >
              <p className="text-slate-500 dark:text-white/50 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3">10th (SSC)</p>
              <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">90<span className="text-xl md:text-2xl text-slate-400 dark:text-white/30">%</span></p>
            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}