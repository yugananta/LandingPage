import React from 'react';

export default function NetworkMap() {
  return (
    <section id="community" className="py-24 px-margin-desktop md:px-margin-desktop px-margin-mobile bg-[#1a1c29] relative overflow-hidden border-t border-white/5">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10">
        
        {/* Main Card Container */}
        <div className="rounded-[32px] bg-[#222436] border border-white/5 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN: Headline & Details */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left animate-on-scroll fade-in-up">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-[10px] font-bold uppercase tracking-widest w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                LOCAL TRADING HUB
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Traders from Every City, <br />
                <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
                  Growing Together.
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-white/50 text-sm md:text-base leading-relaxed">
                GoTrading is active in major financial hubs and cities. Each region has its own local community that gathers regularly to discuss setups and maintain consistent profit levels together.
              </p>

              {/* Live Counter Widget */}
              <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 w-fit shadow-lg mt-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center relative shrink-0">
                  <span className="material-symbols-outlined text-emerald-400 text-lg">groups</span>
                  <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0c0d15] animate-ping" />
                  <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0c0d15]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-white font-black text-lg">2,150+</span>
                    <span className="text-emerald-400 font-extrabold text-[9px] uppercase tracking-widest bg-emerald-500/10 px-1.5 py-0.5 rounded">ONLINE</span>
                  </div>
                  <div className="text-white/40 text-[9px] uppercase tracking-wider font-semibold">Traders Active in Discussions</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center mt-4">
                <a href="#how-it-works" className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20 inline-flex items-center gap-2">
                  Join Your Local Hub
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                <a href="#features" className="text-white/60 hover:text-white font-bold text-sm transition-colors inline-flex items-center gap-1.5">
                  Explore Trading Journal
                  <span className="material-symbols-outlined text-base">explore</span>
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN: World Map Photo */}
            <div className="lg:col-span-7 relative w-full aspect-[4/3] rounded-2xl bg-[#141522] border border-white/10 overflow-hidden flex items-center justify-center animate-on-scroll scale-up delay-100 p-6">
              <img 
                src="/map_new.png" 
                alt="World map network" 
                className="w-full h-full object-contain"
              />
            </div>

          </div>

          {/* BOTTOM METRICS ROW */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-16 border-t border-white/5 text-center animate-on-scroll fade-in-up delay-200">
            <div>
              <div className="text-2xl md:text-3xl font-black text-white">45+</div>
              <div className="text-white/40 text-[10px] uppercase tracking-wider font-semibold mt-1">Active Cities</div>
            </div>
            <div className="border-l border-white/5 pl-2 md:pl-0">
              <div className="text-2xl md:text-3xl font-black text-white">12K+</div>
              <div className="text-white/40 text-[10px] uppercase tracking-wider font-semibold mt-1">Registered Members</div>
            </div>
            <div className="border-l border-white/5 pl-0">
              <div className="text-2xl md:text-3xl font-black text-white">500K+</div>
              <div className="text-white/40 text-[10px] uppercase tracking-wider font-semibold mt-1">Trades Recorded</div>
            </div>
            <div className="border-l border-white/5 pl-2 md:pl-0">
              <div className="text-2xl md:text-3xl font-black text-white">24/7</div>
              <div className="text-white/40 text-[10px] uppercase tracking-wider font-semibold mt-1">Community Forums</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
