"use client";

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

export default function IDCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  // Soft glare effect for the photo surface
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)`;

  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], ["30px", "-30px"]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], ["30px", "-30px"]);
  const cardShadow = useMotionTemplate`${shadowX} ${shadowY} 50px rgba(0,0,0,0.4)`;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ y: -1200, opacity: 0 }}
      animate={{ y: 0, rotate: [-15, 8, -4, 1, 0], opacity: 1 }}
      transition={{ 
        y: { type: "spring", stiffness: 60, damping: 12, mass: 2, delay: 0.1 },
        rotate: { duration: 2.2, ease: "easeInOut", times: [0.1, 0.4, 0.6, 0.8, 1], delay: 0.15 },
        opacity: { duration: 0.2 }
      }}
      className="relative w-[280px] md:w-[320px] h-[400px] md:h-[460px] mx-auto z-20 origin-top"
      style={{ perspective: 1200 }} 
    >
      {/* Flat Orange Lanyard Strap */}
      <div className="absolute -top-[500px] left-1/2 -translate-x-1/2 w-16 h-[510px] pointer-events-none -z-10 drop-shadow-xl">
        <div className="w-full h-full bg-[#ea580c]" />
      </div>

      <motion.div 
        animate={{ y: [-4, 4, -4] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
        className="w-full h-full"
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ 
            rotateX, 
            rotateY, 
            transformStyle: "preserve-3d",
            boxShadow: cardShadow
          }}
          className="w-full h-full bg-[#0a0a0a] rounded-2xl border border-gray-800 overflow-hidden relative cursor-crosshair"
        >
          {/* Dynamic Glare Overlay */}
          <motion.div 
            className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay"
            style={{ background: glareBackground }}
          />

          {/* Minimalist Metal Clip connecting the strap */}
          <div 
            style={{ transform: "translateZ(10px)" }} 
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm shadow-xl flex items-center justify-center border border-gray-600 z-50"
          >
            <div className="w-12 h-1 bg-gray-700/50 rounded-full shadow-inner" />
          </div>

          {/* Full Bleed Profile Photo */}
          <img 
            src="/pfp.jpg" 
            alt="Nihar Padave" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 filter contrast-110"
          />

          {/* Dark Vignette Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-10" />

          {/* Top Corner Metadata */}
          <div className="absolute top-6 w-full px-5 flex justify-between text-[8px] font-bold tracking-widest text-white/50 z-20">
            <span>NP_</span>
            <span className="text-right">PORTFOLIO<br/>#2026</span>
          </div>

          {/* Bottom Card Content */}
          <div 
            style={{ transform: "translateZ(20px)" }}
            className="absolute bottom-0 w-full p-6 flex flex-col items-center text-center z-20"
          >
            <p className="text-[#f97316] text-[10px] md:text-[11px] font-extrabold tracking-[0.25em] mb-1">
              MERN & UI/UX
            </p>
            
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-wide leading-tight">
              NIHAR PADAVE
            </h2>
            
            <p className="text-gray-400 text-[9px] md:text-[10px] font-bold tracking-[0.2em] mt-1">
              FULL STACK DEVELOPER
            </p>

            <div className="w-full flex justify-between text-[8px] md:text-[9px] font-bold text-gray-500 tracking-widest mt-8">
              <span>SAKEC</span>
              <span>MUMBAI, IN</span>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </motion.div>
  );
}