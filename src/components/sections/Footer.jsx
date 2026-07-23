"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  // Hardcoded for July 2026 based on current context
  const CURRENT_DATE = 14; 
  const TIME_SLOTS = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "06:00 PM"];

  const handleDateSelect = (date) => {
    if (date < CURRENT_DATE) return; // Prevent selecting past dates
    setSelectedDate(date);
    setTimeout(() => setStep(2), 300); // Auto-advance to time selection
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setTimeout(() => setStep(3), 300); // Auto-advance to details
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsBooked(true);
    // Here you would normally trigger your backend API
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setIsBooked(false);
  };

  return (
    <footer className="relative w-full bg-[#f97316] pt-24 overflow-hidden mt-0">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-32">
        
        {/* Left Column: Schedule & Socials */}
        <div className="md:col-span-5 flex flex-col">
          <p className="text-black/70 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            Get in touch
          </p>
          <h2 className="text-6xl lg:text-7xl font-black text-black leading-[0.9] tracking-tight mb-6">
            Schedule<br/>a Talk.
          </h2>
          <p className="text-black/80 font-medium text-sm md:text-base max-w-sm mb-10">
            Pick a date and time that works for you. I'll confirm via email and we'll connect.
          </p>

          {/* Social Icons */}
          <div className="flex -space-x-4">
            <a href="https://www.linkedin.com/in/niharpadave281206/" className="w-14 h-14 rounded-full bg-[#0077b5] text-white flex items-center justify-center border-2 border-[#f97316] hover:z-10 hover:-translate-y-1 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/NIHAR-2812" className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center border-2 border-[#f97316] hover:z-10 hover:-translate-y-1 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>

        {/* Middle Column: Menu Links */}
        <div className="md:col-span-3 flex flex-col pt-2">
          <h3 className="text-black font-black text-lg mb-6">Menu</h3>
          <nav className="flex flex-col gap-4 text-black/70 font-medium">
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </nav>
        </div>

        {/* Right Column: Interactive Calendar Widget */}
        <div className="md:col-span-4 flex justify-end">
          <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl shadow-black/20 transform rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden relative min-h-[380px]">
            
            {/* Interactive Tabs Header */}
            {!isBooked && (
              <div className="flex items-center justify-center gap-1 mb-6 bg-slate-50 p-1.5 rounded-full border border-slate-100">
                <button onClick={() => setStep(1)} className={`flex-1 py-1.5 rounded-full text-[10px] font-bold flex items-center justify-center gap-1.5 transition-colors ${step === 1 ? 'bg-white text-[#f97316] shadow-sm border border-slate-100' : 'text-slate-400 hover:text-slate-600'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  DATE
                </button>
                <button onClick={() => selectedDate && setStep(2)} disabled={!selectedDate} className={`flex-1 py-1.5 rounded-full text-[10px] font-bold flex items-center justify-center gap-1.5 transition-colors ${step === 2 ? 'bg-white text-[#f97316] shadow-sm border border-slate-100' : 'text-slate-400 disabled:opacity-50 hover:text-slate-600'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  TIME
                </button>
                <button onClick={() => selectedTime && setStep(3)} disabled={!selectedTime} className={`flex-1 py-1.5 rounded-full text-[10px] font-bold flex items-center justify-center gap-1.5 transition-colors ${step === 3 ? 'bg-white text-[#f97316] shadow-sm border border-slate-100' : 'text-slate-400 disabled:opacity-50 hover:text-slate-600'}`}>
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
                    <h4 className="font-bold text-slate-900">July <span className="text-slate-400 font-medium">2026</span></h4>
                    <div className="flex gap-4 text-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-800"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-y-4 text-center text-xs">
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                      <div key={day} className="text-slate-300 font-bold text-[8px] tracking-wider">{day}</div>
                    ))}
                    {/* Padding for July 2026 */}
                    <div className="text-slate-100">28</div><div className="text-slate-100">29</div><div className="text-slate-100">30</div>
                    
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
                            isPast ? "text-slate-200 cursor-not-allowed line-through decoration-slate-200" : 
                            isSelected ? "bg-[#f97316] text-white shadow-md shadow-orange-500/30" : 
                            "text-slate-700 hover:bg-slate-100 cursor-pointer"
                          }`}
                        >
                          {date}
                          {/* Dot for today's date */}
                          {date === CURRENT_DATE && !isSelected && <div className="absolute bottom-1 w-1 h-1 bg-[#f97316] rounded-full"></div>}
                        </button>
                      );
                    })}
                    <div className="text-slate-100">1</div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: TIME SELECTION */}
              {step === 2 && !isBooked && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                  <div className="text-center mb-6">
                    <h4 className="font-bold text-slate-900">July {selectedDate}, 2026</h4>
                    <p className="text-xs text-slate-400 mt-1">Select an available time slot (IST)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`py-3 rounded-xl text-sm font-bold border transition-all ${
                          selectedTime === time 
                            ? "bg-[#f97316] text-white border-[#f97316] shadow-md shadow-orange-500/30" 
                            : "border-slate-200 text-slate-600 hover:border-[#f97316] hover:text-[#f97316]"
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
                    <span className="inline-block px-3 py-1 bg-orange-50 text-[#f97316] rounded-full text-[10px] font-bold mb-2 border border-orange-100">
                      July {selectedDate}, 2026 at {selectedTime}
                    </span>
                  </div>
                  <form onSubmit={handleBookingSubmit} className="flex flex-col gap-3">
                    <input 
                      required type="text" placeholder="Your Name" 
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] text-slate-800 placeholder:text-slate-400"
                    />
                    <input 
                      required type="email" placeholder="Email Address" 
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] text-slate-800 placeholder:text-slate-400"
                    />
                    <textarea 
                      required placeholder="Purpose of meeting..." rows="2"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] text-slate-800 placeholder:text-slate-400 resize-none"
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
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-2">Request Sent!</h4>
                  <p className="text-sm text-slate-500 mb-8">
                    Looking forward to chatting on<br/>
                    <span className="font-bold text-slate-800">July {selectedDate} at {selectedTime}</span>
                  </p>
                  <button onClick={resetBooking} className="text-xs font-bold text-slate-400 hover:text-slate-800 transition-colors">
                    Book another time
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* Deep Background Text & Credits */}
      <div className="relative w-full border-t border-black/10 pt-6 px-6 pb-6 z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-black/50 text-[10px] font-bold tracking-[0.2em] uppercase flex gap-4">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        </div>
        <div className="text-black/50 text-[10px] font-bold tracking-[0.2em] uppercase mt-4 md:mt-0">
          Made by <span className="text-black">Nihar Padave</span>
        </div>
      </div>

      <div className="absolute bottom-[-5%] left-0 w-full overflow-hidden pointer-events-none select-none flex justify-center z-0">
        <h1 className="text-[13vw] font-black text-black/10 whitespace-nowrap tracking-tighter leading-none">
          NIHAR PADAVE
        </h1>
      </div>
    </footer>
  );
}