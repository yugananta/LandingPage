import React from 'react';

const FeaturesRow = [
  { icon: 'groups', title: 'FIND PARTNERS', desc: 'Traders in your city' },
  { icon: 'forum', title: 'DISCUSS STRATEGIES', desc: 'Share analysis & setups' },
  { icon: 'diversity_3', title: 'LOCAL HUBS', desc: 'Offline meetups & gatherings' },
  { icon: 'trending_up', title: 'GROW TOGETHER', desc: 'No more trading alone' },
];

export default function CommunityFeatures() {
  return (
    <section className="relative py-12 lg:py-16 px-margin-desktop md:px-margin-desktop px-margin-mobile bg-[#161827] text-white border-t border-white/5">
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-container-max mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Phone Mockup Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative flex justify-center animate-on-scroll scale-up">
            <div className="relative w-[280px] md:w-[320px]">
              
              {/* Back shadow/glow */}
              <div className="absolute inset-0 bg-indigo-500/10 rounded-[40px] blur-2xl transform rotate-6 scale-95" />
              
              {/* Phone Frame */}
              <img 
                src="/phone.png" 
                alt="App interface mockup" 
                className="w-full h-auto relative z-10 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-[float_6s_ease-in-out_infinite]"
              />

              {/* Floating active traders card */}
              <div className="absolute top-1/3 -left-12 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 flex items-center gap-3 shadow-xl z-20">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <div>
                  <div className="text-white font-black text-sm">12K+ Traders</div>
                  <div className="text-slate-400 text-[9px] uppercase tracking-wider font-semibold">Active Globally</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6 text-left animate-on-scroll fade-in-up delay-100">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest w-fit">
              <span className="material-symbols-outlined text-sm">map</span>
              COMMUNITY FEATURES
            </div>

            <h2 className="text-3xl md:text-5xl font-black leading-tight text-white">
              Meet Other Traders<br />
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                in Your City.
              </span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Find like-minded trading partners — forex, crypto, or stock traders living in your area. Discuss strategies, share analyses, or keep each other company when the market is busy.
            </p>

            {/* Stats Badge Row */}
            <div className="flex gap-4 items-center bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 w-fit text-xs font-semibold text-slate-200">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />45+ Active Cities</span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />12K+ Active Members</span>
            </div>

            {/* Action features lists */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {FeaturesRow.map((f, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-indigo-400 text-lg">{f.icon}</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs">{f.title}</div>
                    <div className="text-slate-400 text-[10px]">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
