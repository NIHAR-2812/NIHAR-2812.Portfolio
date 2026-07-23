"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Sparkles, GraduationCap } from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        
        {/* Main About Panel - Spans 2 columns on desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:col-span-2 flex flex-col justify-between group hover:bg-surface-hover transition-colors"
        >
          <div className="space-y-4">
            <GraduationCap className="w-8 h-8 text-accent" />
            <h3 className="text-2xl font-bold text-primary">The Journey</h3>
            <p className="text-muted leading-relaxed">
              Currently pursuing my B.Tech in Electronics and Computer Science at SAKEC. 
              I blend engineering principles with modern UI/UX design to build scalable applications. 
              My focus is on creating digital experiences that are not just functional, but highly intuitive and socially impactful.
            </p>
          </div>
        </motion.div>

        {/* Location/Vibe Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-panel p-8 flex flex-col justify-between relative overflow-hidden group hover:bg-surface-hover transition-colors"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full blur-2xl" />
          <MapPin className="w-8 h-8 text-accent mb-4" />
          <div>
            <h3 className="text-xl font-bold text-primary mb-1">Based In</h3>
            <p className="text-muted">Mumbai, India</p>
            <p className="text-xs text-muted/60 mt-4">IST (UTC +5:30)</p>
          </div>
        </motion.div>

        {/* Tech Stack Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 flex flex-col justify-between group hover:bg-surface-hover transition-colors"
        >
          <Code2 className="w-8 h-8 text-accent mb-4" />
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">Core Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Tailwind', 'FastAPI', 'Django', 'Flutter', 'Java'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-background/50 border border-border rounded-full text-xs text-primary">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Philosophy Panel - Spans 2 columns */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-panel p-8 md:col-span-2 flex flex-col justify-center group hover:bg-surface-hover transition-colors"
        >
          <Sparkles className="w-8 h-8 text-accent mb-4" />
          <h3 className="text-xl font-bold text-primary mb-2">Design & Engineering Philosophy</h3>
          <p className="text-muted">
            I believe in technology for social good. Whether it's mapping workflows to UN Sustainable Development Goals, 
            exploring green computing, or engineering responsive Bento grids, I build solutions that matter.
          </p>
        </motion.div>

      </div>
    </section>
  );
}