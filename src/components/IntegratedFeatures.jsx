import React from 'react';

export default function IntegratedFeatures() {
  return (
    <section className="py-12 lg:py-16 px-margin-desktop md:px-margin-desktop px-margin-mobile bg-[#0c0e18] relative overflow-hidden border-y border-white/10">
      
      {/* Ambient glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left text */}
          <div className="animate-on-scroll fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-5">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>dashboard</span>
              INTEGRATED FEATURES
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">
              All in one platform — manage your entire journey.
            </h3>
            <p className="text-slate-300/80 text-base mb-8 leading-relaxed">
              From locating local hubs and analyzing journals to learning with curated resources — GoTrading is the only platform you need to elevate your trading.
            </p>

            {/* Feature pills */}
            <div className="space-y-3">
              {[
                { icon: 'map', text: 'Network Map — Find traders in your city' },
                { icon: 'auto_stories', text: 'Trading Journal — Record every trade automatically' },
                { icon: 'psychology', text: 'AI Review — Evaluate trading performance without bias' },
                { icon: 'calendar_today', text: 'News & Calendar — Get live real-time financial updates' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group p-2 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-indigo-300 group-hover:text-white text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-slate-200 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Feature grid visual */}
          <div className="glass-card rounded-3xl p-6 glow-effect animate-on-scroll scale-up delay-100 bg-gradient-to-b from-[#181b30] to-[#121424] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'groups', label: 'Local Communities', desc: 'Solid & trusted regional circles', color: 'from-indigo-500/25 to-violet-500/15' },
                { icon: 'dashboard', label: 'Unified Dashboard', desc: 'Monitor performance stats in real-time', color: 'from-violet-500/25 to-purple-500/15' },
                { icon: 'security', label: 'Data Security', desc: 'Secure & encrypted read-only API connections', color: 'from-blue-500/25 to-indigo-500/15' },
                { icon: 'psychology', label: 'AI Audit Assistant', desc: 'Automated trading journal evaluations', color: 'from-purple-500/25 to-pink-500/15' },
                { icon: 'calendar_today', label: 'News & Calendar', desc: 'Regular economic calendar releases', color: 'from-pink-500/25 to-rose-500/15' },
                { icon: 'trending_up', label: 'Portfolio Tracker', desc: 'Connect & monitor multiple broker accounts', color: 'from-rose-500/25 to-orange-500/15' },
              ].map((f, i) => (
                <div key={i} className={`rounded-2xl p-4 bg-gradient-to-br ${f.color} border border-white/10 hover:border-indigo-400/40 bg-[#1a1e34] transition-all group cursor-default shadow-sm`}>
                  <span className="material-symbols-outlined text-indigo-300 text-xl mb-2 block" style={{ fontVariationSettings: '"FILL" 1' }}>
                    {f.icon}
                  </span>
                  <div className="text-white font-bold text-xs mb-0.5">{f.label}</div>
                  <div className="text-slate-300/80 text-[10px] leading-relaxed">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
