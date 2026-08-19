import React from 'react';

export default function NewsSection() {
  return (
    <section id="news-calendar" className="py-12 lg:py-16 px-margin-desktop md:px-margin-desktop px-margin-mobile bg-white relative overflow-hidden border-t border-slate-200/60">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Mockup (Economic Calendar Widget) */}
          <div className="lg:col-span-6 order-2 lg:order-1 animate-on-scroll scale-up flex items-center justify-center">
            <div className="w-full max-w-[420px] bg-slate-50 border border-slate-200/80 rounded-3xl p-6 shadow-xl relative">
              
              {/* Header inside widget */}
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-indigo-600 text-lg">calendar_today</span>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-black text-sm">Economic Calendar</h4>
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">Real-Time Update</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-100 animate-pulse">
                  LIVE FEED
                </span>
              </div>

              {/* Calendar events list */}
              <div className="flex flex-col gap-3">
                {[
                  { time: '19:30', curr: 'USD', impact: 'HIGH', impactColor: 'bg-red-500 text-red-600 bg-red-50', name: 'Non-Farm Employment Change', actual: '220K', forecast: '180K' },
                  { time: '20:15', curr: 'EUR', impact: 'MED', impactColor: 'bg-amber-500 text-amber-600 bg-amber-50', name: 'CPI Flash Estimate y/y', actual: '2.4%', forecast: '2.5%' },
                  { time: '21:30', curr: 'GBP', impact: 'HIGH', impactColor: 'bg-red-500 text-red-600 bg-red-50', name: 'GDP m/m', actual: '0.1%', forecast: '0.2%' }
                ].map((ev, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 font-bold text-xs">{ev.time}</span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-black text-[10px]">{ev.curr}</span>
                        <span className={`px-2 py-0.5 rounded text-[8px] font-bold ${ev.impactColor.split(' ')[1]} ${ev.impactColor.split(' ')[2]}`}>
                          {ev.impact} IMPACT
                        </span>
                      </div>
                      <span className="text-slate-300 text-xs">●</span>
                    </div>
                    <div className="text-slate-900 font-bold text-xs text-left">{ev.name}</div>
                    <div className="flex gap-4 border-t border-slate-100 pt-2 mt-1 text-[10px]">
                      <div><span className="text-slate-400">Actual:</span> <span className="text-slate-800 font-bold">{ev.actual}</span></div>
                      <div><span className="text-slate-400">Forecast:</span> <span className="text-slate-850 font-semibold">{ev.forecast}</span></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Text and Features */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-8 text-left animate-on-scroll fade-in-up">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                MARKET UPDATES
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                Market News & <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Calendar</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
                Real-time economic calendar and financial market news releases, so your entry-exit decisions are never based on stale information.
              </p>
            </div>

            {/* Feature items - styled like AffiliateDetails */}
            <div className="flex flex-col gap-4">
              {[
                { title: 'Real-Time Economic Calendar', desc: 'Schedules of economic data releases and their market impact levels, updated automatically.', icon: 'schedule' },
                { title: 'Pre-Release Notifications', desc: 'Get reminders before high-impact news releases to keep your positions prepared.', icon: 'notifications_active' },
                { title: 'Journal Integration', desc: 'Tag and review your trades based on the market news context happening at that moment.', icon: 'auto_stories' }
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
                href="#news-calendar"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20 inline-flex items-center gap-2"
              >
                View Calendar Now
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
