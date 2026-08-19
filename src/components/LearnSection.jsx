import React from 'react';

const FEATURES = [
  {
    icon: 'smart_toy',
    title: 'Error Pattern Detection',
    desc: 'Detects repetitive bad habits and alerts you before losses escalate.',
  },
  {
    icon: 'analytics',
    title: 'Objective Evaluation',
    desc: 'Reviews emotional volatility during drawdowns and recommends lot sizes based on historical win rates.',
  },
  {
    icon: 'sell',
    title: 'Unbiased Insights',
    desc: 'Provides pure mathematical feedback to track which setups consistently yield profits.',
  },
  {
    icon: 'notifications_active',
    title: 'Overtrade & FOMO Alerts',
    desc: 'Smart notifications that warn you when revenge trading patterns are detected.',
  },
];

export default function LearnSection() {
  return (
    <section id="ai-coach" className="py-12 lg:py-16 px-margin-desktop md:px-margin-desktop px-margin-mobile bg-background relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* ── LEFT: Dashboard Visual ── */}
          <div className="order-2 lg:order-1 animate-on-scroll scale-up delay-100">
            <div className="glass-card rounded-3xl p-6 glow-effect relative">

              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-surface-variant/20 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-fixed text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>smart_toy</span>
                  </div>
                  <div>
                    <div className="text-on-surface font-bold text-sm">AI Audit Assistant</div>
                    <div className="text-on-surface-variant text-xs">GoTrading Intelligence</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-bold">LIVE</span>
                </div>
              </div>

              {/* Performance rings */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: 'Win Rate', val: '68%', pct: 68, color: '#6366f1' },
                  { label: 'Avg R:R', val: '1:1.5', pct: 50, color: '#8b5cf6' },
                  { label: 'Consistency', val: 'A', pct: 92, color: '#a78bfa' },
                ].map((m, i) => (
                  <div key={i} className="bg-surface-container rounded-xl p-4 text-center border border-surface-variant/20">
                    <div className="relative w-14 h-14 mx-auto mb-2">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                           fill="none" stroke="var(--border-card-color)" strokeWidth="3" />
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                           fill="none" stroke={m.color} strokeDasharray={`${m.pct}, 100`} strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-on-surface font-black text-xs">{m.val}</span>
                    </div>
                    <div className="text-on-surface-variant text-[10px]">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Weekly chart bars */}
              <div className="bg-surface-container rounded-xl p-4 border border-surface-variant/20 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-on-surface text-xs font-bold">Weekly Performance</span>
                  <span className="text-emerald-400 text-xs font-bold">+12.4%</span>
                </div>
                <div className="flex items-end gap-2 h-16">
                  {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          background: h >= 80
                            ? 'linear-gradient(to top, #6366f1, #8b5cf6)'
                            : 'rgba(99,102,241,0.2)'
                        }}
                      />
                      <span className="text-on-surface-variant text-[8px]">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insight warning box */}
              <div className="rounded-xl p-4 border border-amber-500/20 bg-amber-500/8">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-amber-400 text-base mt-0.5 shrink-0" style={{ fontVariationSettings: '"FILL" 1' }}>
                    warning
                  </span>
                  <div>
                    <div className="text-on-surface font-bold text-xs mb-1">Danger Pattern Detected</div>
                    <p className="text-on-surface-variant text-[11px] leading-relaxed">
                      You tend to open new positions within 15 minutes of a cut loss on XAUUSD. The win rate of these revenge trades is only 22%. Recommendation: take a 2-hour cooldown.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Text Content ── */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary-fixed text-[10px] font-bold uppercase tracking-widest mb-6 animate-on-scroll fade-in-up">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>psychology</span>
              AI AUDIT & REVIEW
            </div>

            <h2 className="font-display-lg text-display-lg text-on-background mb-4 leading-tight animate-on-scroll fade-in-up delay-100">
              Let AI
              <span className="primary-gradient-text"> Review Your Trades</span>.
            </h2>

            <p className="text-on-surface-variant font-body-md text-body-md mb-8 leading-relaxed animate-on-scroll fade-in-up delay-200">
              Every entry is analyzed automatically — identifying error patterns, unprofitable habits, and hidden insights you might miss. It is not a replacement for your trading intuition, but a mirror for objective evaluation.
            </p>

            {/* Feature list */}
            <div className="space-y-4 mb-10 animate-on-scroll fade-in-up delay-300">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary-fixed text-base" style={{ fontVariationSettings: '"FILL" 1' }}>
                      {f.icon}
                    </span>
                  </div>
                  <div>
                    <div className="text-on-surface font-bold text-sm mb-0.5">{f.title}</div>
                    <div className="text-on-surface-variant text-xs leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 animate-on-scroll fade-in-up delay-400">
              <a href="#how-it-works" className="primary-gradient-bg text-white px-8 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-all glow-effect flex items-center justify-center">
                Start AI Journal Audit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
