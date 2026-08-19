import React from 'react';

const TRADING_CONDITIONS = [
  { icon: 'auto_stories', label: 'Journal Discipline', sub: 'Record every trade consistently' },
  { icon: 'psychology', label: 'AI Evaluation', sub: 'Objective analysis of trading patterns' },
  { icon: 'trending_down', label: 'Risk Management', sub: 'Monitor drawdown & R:R ratios' },
  { icon: 'groups', label: 'Local Hubs', sub: 'Share strategies in your city' },
  { icon: 'calendar_today', label: 'Market Updates', sub: 'Follow financial news & calendars' },
  { icon: 'mood', label: 'Psychology Guard', sub: 'Prevent FOMO & revenge trading' },
];

export default function AICoach() {
  return (
    <section className="py-16 lg:py-20 px-margin-desktop md:px-margin-desktop px-margin-mobile bg-surface-container-low relative overflow-hidden border-y border-surface-variant/10">

      {/* Ambient glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10">

        {/* ── Section 11: Rating & Consistency ── */}
        <div className="text-center mb-16 animate-on-scroll fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary-fixed text-[10px] font-bold uppercase tracking-widest mb-5">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
            TRADING CONSISTENCY
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-on-background leading-tight max-w-3xl mx-auto">
            Consistent Traders are Born from
            <span className="primary-gradient-text"> Consistent Habits.</span>
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-xl mx-auto text-base">
            Ratings from members who have experienced the benefits of GoTrading journals, regional communities, and AI reviews.
          </p>
        </div>

        {/* Rating badge */}
        <div className="flex justify-center mb-10 animate-on-scroll fade-in-up delay-100">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-card border border-amber-500/20 bg-amber-500/5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-amber-400 text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              ))}
            </div>
            <div>
              <span className="text-on-surface font-black text-lg">4.9</span>
              <span className="text-on-surface-variant text-xs ml-2">/ 5.0 rating from 12,000+ members</span>
            </div>
          </div>
        </div>

        {/* Condition cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20 animate-on-scroll fade-in-up delay-200">
          {TRADING_CONDITIONS.map((c, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-5 text-center group hover:-translate-y-1.5 hover:border-primary/40 transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary-fixed text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                  {c.icon}
                </span>
              </div>
              <div className="text-on-surface font-bold text-xs mb-0.5">{c.label}</div>
              <div className="text-on-surface-variant text-[10px]">{c.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
