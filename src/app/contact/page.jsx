"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Header from "@/components/sections/Header"; // Adjust path if needed
import Footer from "@/components/sections/Footer"; // Adjust path if needed

export default function ContactPage() {
  // --- CALENDAR STATE LOGIC ---
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  const CURRENT_DATE = 19; // Current date based on context (July 19, 2026)
  const TIME_SLOTS = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setStep(2);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setIsBooked(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white transition-colors duration-300 font-sans selection:bg-[#f97316] selection:text-white pb-24">
      <Header />
      
      <main className="pt-32 px-6 md:px-12 max-w-6xl mx-auto flex flex-col gap-24">
        
        {/* TOP SECTION: Text/WhatsApp & Interactive Calendar */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Headlines & WhatsApp Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
              Let's <span className="text-[#f97316]">Build</span><br />
              Something.
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-10 max-w-md">
              Open to internships, freelance projects, full-time roles, and meaningful collaborations.
            </p>

            {/* "Not sure where to start?" Card */}
            <div className="bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center shadow-xl">
              <span className="text-2xl mb-4">👋</span>
              <h3 className="text-lg font-bold mb-3">Not sure where to start?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 max-w-xs leading-relaxed">
                Just say hi. I don't bite — and I genuinely enjoy meeting new people in tech.
              </p>
              <a 
                href="https://wa.me/910000000000" // Replace with your actual WhatsApp link
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20b858] text-white dark:text-[#050505] font-black text-[11px] tracking-[0.1em] uppercase px-8 py-4 rounded-full flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                SAY HI ON WHATSAPP
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Calendar Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="w-full bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 rounded-[2rem] p-8 md:p-10 shadow-xl min-h-[450px] relative">
              <p className="text-[#f97316] text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-center md:text-left">
                — BOOK A PROJECT
              </p>
              
              {/* Interactive Tabs Header */}
              {!isBooked && (
                <div className="flex items-center justify-center gap-1 mb-6 bg-slate-50 dark:bg-black/30 p-1.5 rounded-full border border-slate-100 dark:border-white/5">
                  <button onClick={() => setStep(1)} className={`flex-1 py-1.5 rounded-full text-[10px] font-bold flex items-center justify-center gap-1.5 transition-colors ${step === 1 ? 'bg-white dark:bg-[#1a1a1a] text-[#f97316] shadow-sm border border-slate-100 dark:border-white/5' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    DATE
                  </button>
                  <button onClick={() => selectedDate && setStep(2)} disabled={!selectedDate} className={`flex-1 py-1.5 rounded-full text-[10px] font-bold flex items-center justify-center gap-1.5 transition-colors ${step === 2 ? 'bg-white dark:bg-[#1a1a1a] text-[#f97316] shadow-sm border border-slate-100 dark:border-white/5' : 'text-slate-400 dark:text-slate-500 disabled:opacity-50 hover:text-slate-600 dark:hover:text-slate-300'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    TIME
                  </button>
                  <button onClick={() => selectedTime && setStep(3)} disabled={!selectedTime} className={`flex-1 py-1.5 rounded-full text-[10px] font-bold flex items-center justify-center gap-1.5 transition-colors ${step === 3 ? 'bg-white dark:bg-[#1a1a1a] text-[#f97316] shadow-sm border border-slate-100 dark:border-white/5' : 'text-slate-400 dark:text-slate-500 disabled:opacity-50 hover:text-slate-600 dark:hover:text-slate-300'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    DETAILS
                  </button>
                </div>
              )}

              <AnimatePresence mode="wait">
                {/* STEP 1: DATE SELECTION */}
                {step === 1 && !isBooked && (
                  <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                    <div className="flex items-center justify-between mb-6 px-2">
                      <h4 className="font-bold text-slate-900 dark:text-white">July <span className="text-slate-500 font-medium">2026</span></h4>
                      <div className="flex gap-4 text-slate-300 dark:text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-800 dark:text-white"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-y-4 text-center text-xs">
                      {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                        <div key={day} className="text-slate-400 dark:text-slate-500 font-bold text-[8px] tracking-wider">{day}</div>
                      ))}
                      {/* Padding for July 2026 */}
                      <div className="text-slate-100 dark:text-white/5">28</div>
                      <div className="text-slate-100 dark:text-white/5">29</div>
                      <div className="text-slate-100 dark:text-white/5">30</div>
                      
                      {[...Array(31)].map((_, i) => {
                        const date = i + 1;
                        const isPast = date < CURRENT_DATE;
                        const isSelected = selectedDate === date;
                        
                        return (
                          <button 
                            key={date}
                            onClick={() => handleDateSelect(date)}
                            disabled={isPast}
                            className={`font-bold flex flex-col items-center justify-center w-8 h-8 mx-auto rounded-full transition-all relative ${
                              isPast ? "text-slate-300 dark:text-slate-700 cursor-not-allowed line-through decoration-slate-300 dark:decoration-slate-700" : 
                              isSelected ? "bg-[#f97316] text-white shadow-md shadow-orange-500/30" : 
                              "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer"
                            }`}
                          >
                            {date}
                            {/* Dot for today's date */}
                            {date === CURRENT_DATE && !isSelected && <div className="absolute bottom-1 w-1 h-1 bg-[#f97316] rounded-full"></div>}
                          </button>
                        );
                      })}
                      <div className="text-slate-100 dark:text-white/5">1</div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: TIME SELECTION */}
                {step === 2 && !isBooked && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                    <div className="text-center mb-6">
                      <h4 className="font-bold text-slate-900 dark:text-white">July {selectedDate}, 2026</h4>
                      <p className="text-xs text-slate-500 mt-1">Select an available time slot (IST)</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {TIME_SLOTS.map((time) => (
                        <button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className={`py-3 rounded-xl text-sm font-bold border transition-all ${
                            selectedTime === time 
                              ? "bg-[#f97316] text-white border-[#f97316] shadow-md shadow-orange-500/30" 
                              : "border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-[#f97316] hover:text-[#f97316] dark:hover:text-[#f97316]"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: DETAILS FORM */}
                {step === 3 && !isBooked && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <div className="mb-4 text-center">
                      <span className="inline-block px-3 py-1 bg-orange-50 dark:bg-[#f97316]/10 text-[#f97316] rounded-full text-[10px] font-bold mb-2 border border-orange-100 dark:border-[#f97316]/20">
                        July {selectedDate}, 2026 at {selectedTime}
                      </span>
                    </div>
                    <form onSubmit={handleBookingSubmit} className="flex flex-col gap-3">
                      <input 
                        required type="text" placeholder="Your Name" 
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-white/10 bg-transparent text-sm focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      />
                      <input 
                        required type="email" placeholder="Email Address" 
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-white/10 bg-transparent text-sm focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      />
                      <textarea 
                        required placeholder="Purpose of meeting..." rows="2"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-white/10 bg-transparent text-sm focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                      ></textarea>
                      <button type="submit" className="w-full bg-[#f97316] text-white font-bold text-xs tracking-wider py-3 rounded-lg hover:bg-[#ea580c] transition-colors mt-2 shadow-md shadow-orange-500/20">
                        CONFIRM BOOKING
                      </button>
                    </form>
                  </motion.div>
                )}

                {/* STEP 4: SUCCESS STATE */}
                {isBooked && (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center h-full pt-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">Request Sent!</h4>
                    <p className="text-sm text-slate-500 mb-8">
                      Looking forward to chatting on<br/>
                      <span className="font-bold text-slate-800 dark:text-slate-300">July {selectedDate} at {selectedTime}</span>
                    </p>
                    <button onClick={resetBooking} className="text-xs font-bold text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors">
                      Book another time
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        </section>

        {/* MIDDLE SECTION: Map and Location Details */}
        <section className="flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 text-center tracking-tight"
          >
            Where I'm Based
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
            
            {/* Left: Google Maps (Bhandup location) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden h-[250px] border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0c0c0c] shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30155.83984920409!2d72.915239!3d19.140685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b86431945199%3A0xc3b8a329be6089!2sBhandup%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                // Automatically applies the dark styling only when dark mode is active
                className="transition-all duration-300 dark:filter dark:invert-[90%] dark:hue-rotate-[180deg] dark:contrast-[85%] dark:opacity-80 dark:mix-blend-screen"
              />
            </motion.div>

            {/* Right: Info Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {/* Location Card */}
              <div className="bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 rounded-2xl p-6 flex items-start gap-4 shadow-lg">
                <div className="text-[#f97316] mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1 text-slate-900 dark:text-white">Bhandup, Maharashtra</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                    Mumbai Metropolitan Region<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 rounded-2xl p-6 flex items-center justify-between shadow-lg group cursor-pointer hover:bg-slate-50 dark:hover:bg-[#111111] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-[#f97316]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-1">Email</p>
                    <a href="mailto:nihar.padave@example.com" className="font-bold text-sm text-slate-900 dark:text-white">
                      nihar.padave@example.com
                    </a>
                  </div>
                </div>
                <div className="text-slate-400 group-hover:text-[#f97316] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* BOTTOM SECTION: Social Links Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 pt-8"
        >
          {[
            { name: "LinkedIn", href: "https://www.linkedin.com/in/niharpadave281206/", icon: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
            { name: "GitHub", href: "https://github.com/NIHAR-2812", icon: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> },
            { name: "Twitter / X", href: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg> },
            { name: "Instagram", href: "https://www.instagram.com/niharrr_.28/", icon: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
            { name: "Email", href: "mailto:nihar.padave@example.com", icon: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
          ].map((social) => (
            <a 
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 hover:border-[#f97316] dark:hover:border-white/20 text-slate-600 dark:text-slate-400 hover:text-[#f97316] dark:hover:text-white px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all shadow-sm"
            >
              {social.icon} {social.name}
            </a>
          ))}
        </motion.div>

      </main>
      <Footer />
    </div>
  );
}