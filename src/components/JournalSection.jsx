import React from 'react';

export default function JournalSection() {
  return (
    <section id="trading-journal-section" className="py-24 px-margin-desktop md:px-margin-desktop px-margin-mobile bg-slate-50 relative overflow-hidden border-t border-slate-200/60">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text and Features */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left animate-on-scroll fade-in-up">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-200 bg-violet-50 text-violet-600 text-xs font-bold uppercase tracking-widest mb-4">
                <span className="material-symbols-outlined text-sm">book</span>
                RECORD & EVALUATE
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                Trading <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Journal</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
                Automatically record every entry and exit. A clean trading journal is not just about discipline, but the most honest way to see where you frequently go wrong — and where you are actually doing well.
              </p>
            </div>

            {/* Feature items */}
            <div className="flex flex-col gap-4">
              {[
                { title: 'Automatic Syncing', desc: 'Trade data imports automatically from connected accounts, no manual entry required.', icon: 'sync' },
                { title: 'Patterns & Statistics', desc: 'View win rate, drawdown, and profit factor calculated directly from your trade history.', icon: 'analytics' },
                { title: 'Foundation for AI Review', desc: 'Your journal data serves as the source for the AI Audit analysis in the next section.', icon: 'psychology' }
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-100 flex gap-4 hover:border-indigo-500/20 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
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
                href="#trading-journal-section"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20 inline-flex items-center gap-2"
              >
                Start Journaling Your Trades
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Mockup (GoTrading Journal +$1,135.01) */}
          <div className="lg:col-span-6 animate-on-scroll scale-up flex items-center justify-center">
            <div className="w-full max-w-[420px] bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl relative overflow-hidden">
              
              {/* Decorative top bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-xs shadow-md shadow-indigo-500/20">
                    GT
                  </div>
                  <div className="text-left">
                    <div className="text-slate-900 font-extrabold text-sm">GoTrading Journal</div>
                    <div className="text-slate-400 text-[10px]">Account History Performance</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-indigo-600 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
                  CONNECTED
                </div>
              </div>

              {/* Stacked transactions cards */}
              <div className="flex flex-col gap-4 relative">
                
                {/* Highlight Journal Card 1 */}
                <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 shadow-sm hover:-translate-y-1 transition-transform duration-300 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 font-bold text-[9px]">BUY</span>
                      <span className="text-slate-800 font-extrabold text-xs">XAUUSD</span>
                      <span className="text-slate-400 text-[10px]">1.00 Lot</span>
                    </div>
                    <span className="text-slate-400 text-[10px]">1 hour ago</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400">Entry: <span className="font-bold text-slate-700">2315.40</span></div>
                      <div className="text-[10px] text-slate-400">Exit: <span className="font-bold text-slate-700">2326.75</span></div>
                    </div>
                    <div className="text-emerald-500 font-black text-base">+$1,135.01 USD</div>
                  </div>
                </div>

                {/* Journal Card 2 */}
                <div className="bg-slate-50/70 border border-slate-200/40 rounded-2xl p-4 opacity-75 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 font-bold text-[9px]">BUY</span>
                      <span className="text-slate-800 font-extrabold text-xs">GBPUSD</span>
                      <span className="text-slate-400 text-[10px]">0.50 Lot</span>
                    </div>
                    <span className="text-slate-400 text-[10px]">4 hours ago</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400">Entry: <span className="font-bold text-slate-750">1.26400</span></div>
                      <div className="text-[10px] text-slate-400">Exit: <span className="font-bold text-slate-750">1.27080</span></div>
                    </div>
                    <div className="text-emerald-500 font-black text-sm">+$340.20 USD</div>
                  </div>
                </div>

                {/* Journal Card 3 */}
                <div className="bg-slate-50/30 border border-slate-200/20 rounded-2xl p-3 opacity-40 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-red-50 text-red-600 font-bold text-[9px]">SELL</span>
                      <span className="text-slate-800 font-extrabold text-xs">BTCUSD</span>
                      <span className="text-slate-400 text-[10px]">0.10 Lot</span>
                    </div>
                    <span className="text-slate-400 text-[10px]">Yesterday</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400">Entry: <span className="font-bold text-slate-750">67540</span></div>
                    </div>
                    <div className="text-red-500 font-black text-xs">-$120.00 USD</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
