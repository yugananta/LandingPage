import React from 'react';

export default function LearnGrowSection() {
  return (
    <section id="learn-grow-section" className="py-12 lg:py-16 px-margin-desktop md:px-margin-desktop px-margin-mobile bg-white relative overflow-hidden border-t border-slate-200/60">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Mockup (Social Discussion Forum Feed) */}
          <div className="lg:col-span-6 order-2 lg:order-1 animate-on-scroll scale-up flex items-center justify-center">
            <div className="w-full max-w-[420px] bg-slate-50 border border-slate-200/80 rounded-3xl p-6 shadow-xl relative text-left">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-violet-600 text-lg">forum</span>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-black text-sm">Community Discussion</h4>
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">South Jakarta Group</p>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Forum post 1 */}
              <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-[10px]">
                    BS
                  </div>
                  <div>
                    <div className="text-slate-800 font-extrabold text-[11px]">Budi Santoso</div>
                    <div className="text-slate-400 text-[9px]">20 minutes ago</div>
                  </div>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Setup Buy XAUUSD H4 based on order block support. What do you think guys? Already rejected from the demand zone.
                </p>
                
                {/* Mini chart visual mock */}
                <div className="h-20 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden mb-2">
                  <div className="absolute inset-x-0 bottom-4 h-[1px] bg-slate-200" />
                  <svg className="w-full h-full p-2" viewBox="0 0 100 40">
                    <path d="M0 35 L20 30 L40 28 L60 38 L80 12 L100 10" fill="none" stroke="#6366f1" strokeWidth="2" />
                    <circle cx="80" cy="12" r="3" fill="#8b5cf6" />
                  </svg>
                  <span className="absolute right-2 top-2 bg-indigo-500 text-white font-bold text-[8px] px-1.5 py-0.5 rounded">
                    XAUUSD H4
                  </span>
                </div>
              </div>

              {/* Reply comment 1 */}
              <div className="bg-white border border-slate-100 rounded-2xl p-3 shadow-sm pl-6 relative">
                <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-indigo-500/20" />
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-[9px]">
                    AM
                  </div>
                  <div>
                    <div className="text-slate-800 font-extrabold text-[10px]">Amelia</div>
                    <div className="text-slate-400 text-[8px]">10 minutes ago</div>
                  </div>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Agree, solid demand zone. Already placed a pending order Buy Limit at 2312. Hope the setup is valid!
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Text and Features */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-8 text-left animate-on-scroll fade-in-up">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
                <span className="material-symbols-outlined text-sm">school</span>
                COLLABORATIVE LEARNING
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                Learn and Grow <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Together</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
                Share and discuss with the community — from new traders finding their direction to experienced pros eager to give back. Join open discussions on setups, analysis, or even vent about failed trades, because this community understands your journey.
              </p>
            </div>

            {/* Feature items */}
            <div className="flex flex-col gap-4">
              {[
                { title: 'City Discussion Forums', desc: 'Discuss setups and analysis with other traders in your city.', icon: 'forum' },
                { title: 'Curated Content', desc: 'Learn from curated resources and insights shared by experienced members.', icon: 'menu_book' },
                { title: 'Grow Together', desc: 'It is not a competition; we support each other to build long-term consistency.', icon: 'trending_up' }
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100/80 flex gap-4 hover:border-indigo-500/20 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-200/50 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-indigo-600 group-hover:text-white text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-base mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Link Button */}
            <div className="mt-2">
              <a 
                href="https://my.gotrading.id/"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20 inline-flex items-center gap-2"
              >
                Join Community Discussions
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
