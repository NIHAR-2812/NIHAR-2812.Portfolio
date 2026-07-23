"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const INVOLVEMENTS = [
  {
    id: "01",
    role: "Finance Member",
    organization: "TLC-SAKEC",
    duration: "2025 - Present",
    description: "Representing the platform at SAKEC, facilitating professional skill development and internship awareness for peers. Actively driving student engagement and honing leadership and communication strategies.",
    skills: ["Leadership", "Community Building", "Public Speaking"],
    cardData: {
      image: "/tlc.jpg", 
      tag: "FINANCE",
      orgName: "TLC-SAKEC",
      themeColor: "bg-[#f97316]" 
    }
  },
  {
    id: "02",
    role: "Technical Member",
    organization: "Adakaar",
    duration: "2025 - Present",
    description: "Collaborated with peers to organize college-wide technical workshops and coding competitions. Mentored junior students in web development and guided project teams during intense hackathon sprints.",
    skills: ["Event Management", "Technical Mentorship", "Team Collaboration"],
    cardData: {
      image: "/adakaar.jpeg", 
      tag: "TECHNICAL",
      orgName: "DRAMA CLUB",
      themeColor: "bg-[#00A5EC]" 
    }
  }
];

const DynamicIDCard = ({ data }) => {
  return (
    <div className="relative flex flex-col items-center select-none drop-shadow-2xl mt-4">
      <div className="relative w-[240px] h-[380px] rounded-xl overflow-hidden bg-slate-900 border border-white/20 shadow-[-10px_20px_30px_rgba(0,0,0,0.5)] flex flex-col">
        
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10 pointer-events-none" />
        
        <div className="absolute inset-0">
          <img 
            src={data.image} 
            alt={data.orgName} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-20 mt-auto p-5 flex flex-col items-center text-center">
          <span className={`text-[10px] font-bold tracking-[0.3em] ${data.themeColor.replace('bg-', 'text-')} mb-1 uppercase drop-shadow-md`}>
            {data.tag}
          </span>
          <h2 className="text-xl font-black text-white tracking-tight uppercase leading-none mb-1 drop-shadow-md">
            Nihar Padave
          </h2>
          <p className="text-white/80 text-[10px] font-bold tracking-widest uppercase drop-shadow-md">
            {data.orgName}
          </p>
        </div>

        <div className="relative z-20 w-full h-10 border-t border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-between px-4">
          <div className="text-[8px] text-white/60 tracking-widest">ID: NP-{Math.floor(Math.random() * 9000) + 1000}</div>
          <div className="text-[8px] text-white/60 tracking-widest">SAKEC</div>
        </div>

      </div>
    </div>
  );
};

export default function CampusInvolvement() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="involvement" className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-24 border-t border-gray-200 dark:border-gray-800 mt-20">
      
      <div className="mb-16 md:mb-24 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase text-center">
          Leadership &<br/>Campus Involvement
        </h2>
        <div className="h-1 w-20 bg-[#f97316] mt-8" />
      </div>

      <div className="flex flex-col border-t border-slate-200 dark:border-white/10 relative">
        {INVOLVEMENTS.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative border-b border-slate-200 dark:border-white/10 py-8 md:py-16 flex flex-col md:flex-row gap-6 md:gap-12 transition-colors duration-500 hover:bg-slate-50 dark:hover:bg-white/[0.02] overflow-visible"
          >
            
            <div className="relative z-10 w-full md:w-1/3 flex flex-col justify-start md:px-6">
              <span className="text-[#f97316] font-bold text-sm tracking-[0.2em] uppercase mb-2">
                {item.duration}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight mb-2">
                {item.role}
              </h3>
              <p className="text-slate-500 dark:text-white/50 font-bold uppercase tracking-widest text-xs">
                {item.organization}
              </p>
            </div>

            {/* Added lg:pr-40 here to prevent text from expanding under the ID card */}
            <div className="relative z-10 w-full md:w-1/2 lg:w-[45%] flex flex-col justify-center md:px-6 lg:pr-12">
              <p className="text-slate-600 dark:text-white/70 text-base md:text-lg leading-relaxed mb-6">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors duration-500 ${
                      hoveredIndex === index 
                        ? "bg-[#f97316] text-white shadow-lg shadow-orange-500/20" 
                        : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white/60"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Changed right-12 to right-0 and scaled up to 0.85 */}
            <div className="hidden lg:flex absolute right-0 xl:right-4 top-0 h-full pointer-events-none z-20 items-center">
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -50, rotate: -8 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, y: -50, rotate: 8 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20,
                      mass: 1.5
                    }}
                    className="origin-top scale-[0.85]"
                  >
                    <DynamicIDCard data={item.cardData} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 hidden md:block lg:hidden">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}