import React from 'react';

export default function Pillars() {
  return (
    <section id="features" className="py-28 px-margin-desktop md:px-margin-desktop px-margin-mobile bg-[#1a1c29] relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-5">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
            CORE FEATURES
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl mx-auto">
            Designed specifically for
            <span className="block bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent mt-1">
              your trading growth.
            </span>
          </h2>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          
          {/* ─── CARD 1: Trading Journal (6-Cols) ─── */}
          <div className="col-span-1 md:col-span-6 rounded-2xl bg-[#222436] border border-white/5 p-8 flex flex-col justify-between min-h-[360px] group hover:border-indigo-500/30 transition-all duration-300 animate-on-scroll fade-in-up">
            
            {/* Visual element: Journal Card mock */}
            <div className="relative h-48 flex items-center justify-center overflow-hidden">
              <div className="w-[280px] bg-[#292b42] border border-white/5 rounded-2xl p-4 shadow-xl text-left transform scale-100 group-hover:-translate-y-2 transition-transform duration-300 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-xs shadow-md">
                    GT
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-xs">GoTrading Journal</div>
                    <div className="text-slate-400 text-[9px]">1 hour ago</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-black text-sm">+$1,135.01</div>
                  <div className="text-emerald-400/80 font-bold text-[9px]">USD</div>
                </div>
              </div>
            </div>

            {/* Content text */}
            <div className="text-left mt-4">
              <h3 className="text-white font-bold text-lg md:text-xl mb-2">Trading Journal</h3>
              <p className="text-[#8e92a4] text-xs md:text-sm leading-relaxed">
                Record every entry and exit automatically. A clean trading journal helps you identify your own error patterns without tedious manual data entry.
              </p>
            </div>
          </div>

          {/* ─── CARD 2: Network Map (6-Cols) ─── */}
          <div className="col-span-1 md:col-span-6 rounded-2xl bg-[#222436] border border-white/5 p-8 flex flex-col justify-between min-h-[360px] group hover:border-indigo-500/30 transition-all duration-300 animate-on-scroll fade-in-up delay-100">
            
            {/* Visual element: World map image */}
            <div className="relative h-48 flex items-center justify-center overflow-hidden">
              <img 
                src="/map.png" 
                alt="Network Map" 
                className="w-full h-full object-contain opacity-95 scale-[1.35] group-hover:scale-[1.42] transition-transform duration-300"
              />
            </div>

            {/* Content text */}
            <div className="text-left mt-4">
              <h3 className="text-white font-bold text-lg md:text-xl mb-2">Network Map</h3>
              <p className="text-[#8e92a4] text-xs md:text-sm leading-relaxed">
                View the real-time distribution of GoTrading members across cities. Find discussion partners situated near your geographic location.
              </p>
            </div>
          </div>

          {/* ─── CARD 3: AI Audit & Review (4-Cols) ─── */}
          <div className="col-span-1 md:col-span-4 rounded-2xl bg-[#222436] border border-white/5 p-8 flex flex-col justify-start min-h-[250px] group hover:border-indigo-500/30 transition-all duration-300 animate-on-scroll fade-in-up">
            
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-305">
              <span className="material-symbols-outlined text-indigo-400 group-hover:text-white text-xl">psychology</span>
            </div>

            {/* Content text */}
            <div className="text-left">
              <h3 className="text-white font-bold text-lg mb-2">AI Audit & Review</h3>
              <p className="text-[#8e92a4] text-xs md:text-sm leading-relaxed">
                Our AI Assistant analyzes entry/exit error patterns and trading psychology to provide objective performance audits.
              </p>
            </div>
          </div>

          {/* ─── CARD 4: News & Calendar (4-Cols) ─── */}
          <div className="col-span-1 md:col-span-4 rounded-2xl bg-[#222436] border border-white/5 p-8 flex flex-col justify-start min-h-[250px] group hover:border-indigo-500/30 transition-all duration-300 animate-on-scroll fade-in-up delay-100">
            
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-305">
              <span className="material-symbols-outlined text-indigo-400 group-hover:text-white text-xl">calendar_today</span>
            </div>

            {/* Content text */}
            <div className="text-left">
              <h3 className="text-white font-bold text-lg mb-2">News & Calendar</h3>
              <p className="text-[#8e92a4] text-xs md:text-sm leading-relaxed">
                Integrated economic calendars and real-time financial market news releases ensure your execution decisions are always well-timed.
              </p>
            </div>
          </div>

          {/* ─── CARD 5: Saling Belajar (4-Cols) ─── */}
          <div className="col-span-1 md:col-span-4 rounded-2xl bg-[#222436] border border-white/5 p-8 flex flex-col justify-start min-h-[250px] group hover:border-indigo-500/30 transition-all duration-300 animate-on-scroll fade-in-up delay-200">
            
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-305">
              <span className="material-symbols-outlined text-indigo-400 group-hover:text-white text-xl">groups</span>
            </div>

            {/* Content text */}
            <div className="text-left">
              <h3 className="text-white font-bold text-lg mb-2">Collaborative Learning</h3>
              <p className="text-[#8e92a4] text-xs md:text-sm leading-relaxed">
                Learn alongside the community from fundamentals to expert levels. Trading in isolation is tough; grow within the right circle instead.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
