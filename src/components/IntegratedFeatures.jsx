import React from 'react';

export default function IntegratedFeatures() {
  return (
    <section className="py-12 lg:py-16 px-margin-desktop md:px-margin-desktop px-margin-mobile bg-surface-container-low relative overflow-hidden border-y border-surface-variant/10">
      
      {/* Ambient glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left text */}
          <div className="animate-on-scroll fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary-fixed text-[10px] font-bold uppercase tracking-widest mb-5">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>dashboard</span>
              INTEGRATED FEATURES
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-on-background mb-4 leading-tight">
              All in one platform — manage your entire journey.
            </h3>
            <p className="text-on-surface-variant text-base mb-8 leading-relaxed">
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
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary-fixed text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-on-surface text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Feature grid visual */}
          <div className="glass-card rounded-3xl p-6 glow-effect animate-on-scroll scale-up delay-100">
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'groups', label: 'Local Communities', desc: 'Solid & trusted regional circles', color: 'from-indigo-500/20 to-violet-500/10' },
                { icon: 'dashboard', label: 'Unified Dashboard', desc: 'Monitor performance stats in real-time', color: 'from-violet-500/20 to-purple-500/10' },
                { icon: 'security', label: 'Data Security', desc: 'Secure & encrypted read-only API connections', color: 'from-blue-500/20 to-indigo-500/10' },
                { icon: 'psychology', label: 'AI Audit Assistant', desc: 'Automated trading journal evaluations', color: 'from-purple-500/20 to-pink-500/10' },
                { icon: 'calendar_today', label: 'News & Calendar', desc: 'Regular economic calendar releases', color: 'from-pink-500/20 to-rose-500/10' },
                { icon: 'trending_up', label: 'Portfolio Tracker', desc: 'Connect & monitor multiple broker accounts', color: 'from-rose-500/20 to-orange-500/10' },
              ].map((f, i) => (
                <div key={i} className={`rounded-2xl p-4 bg-gradient-to-br ${f.color} border border-white/5 hover:border-primary/25 transition-all group cursor-default`}>
                  <span className="material-symbols-outlined text-primary-fixed text-xl mb-2 block" style={{ fontVariationSettings: '"FILL" 1' }}>
                    {f.icon}
                  </span>
                  <div className="text-on-surface font-bold text-xs mb-0.5">{f.label}</div>
                  <div className="text-on-surface-variant text-[10px] leading-relaxed">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
