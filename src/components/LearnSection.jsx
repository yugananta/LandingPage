import React, { useState } from 'react';

const COMBINED_FEATURES = [
  {
    category: 'progress',
    icon: 'book',
    title: 'Automatic Trade Logging',
    desc: 'Record entries, exits, lot sizes, and PnL automatically from connected broker accounts.',
  },
  {
    category: 'progress',
    icon: 'analytics',
    title: 'Progress & Statistics',
    desc: 'Track win rate, profit factor, drawdown, and growth metrics over time with clean visuals.',
  },
  {
    category: 'progress',
    icon: 'sell',
    title: 'Unbiased Setup Insights',
    desc: 'Provides pure mathematical feedback to track which setups consistently yield profits.',
  },
  {
    category: 'psychology',
    icon: 'smart_toy',
    title: 'Error Pattern Detection',
    desc: 'Detects repetitive bad habits and alerts you before losses escalate.',
  },
  {
    category: 'psychology',
    icon: 'psychology',
    title: 'Psychology & FOMO Guard',
    desc: 'Monitors emotional volatility during drawdowns and recommends cooldown periods.',
  },
  {
    category: 'psychology',
    icon: 'notifications_active',
    title: 'Overtrade & Revenge Alerts',
    desc: 'Smart notifications that warn you when revenge trading patterns are detected.',
  },
];

export default function LearnSection() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'progress', 'psychology'

  const renderCompactSquareCard = (f) => {
    if (!f) return null;
    return (
      <div 
        key={f.title}
        className="p-3.5 sm:p-4 md:p-5 rounded-2xl bg-gradient-to-b from-[#181b30] to-[#121424] border border-white/10 hover:border-indigo-500/40 hover:from-[#1e233d] hover:to-[#16192c] shadow-lg transition-all duration-300 group flex flex-col md:flex-row justify-between md:justify-start gap-2 md:gap-4 items-start text-left h-full animate-on-scroll fade-in-up"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
          <span className="material-symbols-outlined text-indigo-300 group-hover:text-white text-base md:text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>
            {f.icon}
          </span>
        </div>
        <div className="flex flex-col justify-between h-full md:h-auto md:block flex-1">
          <div>
            <h3 className="text-white font-extrabold md:font-bold text-xs sm:text-sm md:text-base mb-1 tracking-tight leading-tight md:leading-normal">{f.title}</h3>
            <p className="text-slate-300 text-[10px] sm:text-xs md:text-sm leading-relaxed mb-2 md:mb-2.5 line-clamp-3 sm:line-clamp-4 md:line-clamp-none">{f.desc}</p>
          </div>
          <div>
            <span className={`text-[7.5px] sm:text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-full border inline-block ${
              f.category === 'progress' 
                ? 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' 
                : 'bg-violet-500/15 text-violet-300 border-violet-500/30'
            }`}>
              {f.category === 'progress' ? 'Progress' : 'AI Psychology'}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderNormalCard = (f) => {
    if (!f) return null;
    return (
      <div 
        key={f.title}
        className="p-5 rounded-2xl bg-gradient-to-b from-[#181b30] to-[#121424] border border-white/10 hover:border-indigo-500/40 hover:from-[#1e233d] hover:to-[#16192c] shadow-lg transition-all duration-300 group flex gap-4 items-start text-left animate-on-scroll fade-in-up"
      >
        <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
          <span className="material-symbols-outlined text-indigo-300 group-hover:text-white text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>
            {f.icon}
          </span>
        </div>
        <div>
          <h3 className="text-white font-bold text-base mb-1 tracking-tight">{f.title}</h3>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-2.5">{f.desc}</p>
          <span className={`text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-full border inline-block ${
            f.category === 'progress' 
              ? 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' 
              : 'bg-violet-500/15 text-violet-300 border-violet-500/30'
          }`}>
            {f.category === 'progress' ? 'Progress' : 'AI Psychology'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="ai-coach" className="pt-6 pb-16 lg:pt-8 lg:pb-24 px-margin-desktop md:px-margin-desktop px-margin-mobile bg-[#0c0e18] relative overflow-hidden border-t border-white/10">
        {/* Ambient glows */}
        <div className="absolute top-1/3 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10">
        
        {/* ── SECTION HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-5">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>auto_stories</span>
            TRACK PROGRESS & PSYCHOLOGY AI AUDIT
          </div>

          <h2 className="font-display-lg text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Track Your Trading Progress & Let AI Review Your{' '}
            <span className="primary-gradient-text">Psychology</span>.
          </h2>

          <p className="text-slate-300/80 font-body-md text-base leading-relaxed">
            Automatically log every trade, monitor performance metrics in real-time, and let AI analyze your psychology to eliminate revenge trading, FOMO, and costly error patterns.
          </p>

          {/* Interactive Filter / Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Overview All', icon: 'dashboard' },
              { id: 'progress', label: 'Track Trading Progress', icon: 'analytics' },
              { id: 'psychology', label: 'Psychology AI Audit', icon: 'psychology' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 border ${
                  activeTab === tab.id
                    ? 'primary-gradient-bg text-white border-transparent shadow-lg shadow-primary/30 scale-105'
                    : 'bg-gradient-to-b from-[#181b30] to-[#121424] text-slate-300 border-white/10 hover:border-indigo-500/40 hover:text-white shadow-md'
                }`}
              >
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── DUAL VISUAL SHOWCASE GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">

          {/* ── LEFT VISUAL: Track Trading Progress (Journal & Stats) ── */}
          <div 
            onClick={() => setActiveTab('progress')}
            className={`lg:col-span-6 transition-all duration-300 cursor-pointer rounded-3xl ${
              activeTab === 'progress' 
                ? 'ring-2 ring-indigo-500/80 shadow-2xl shadow-indigo-950/60 scale-[1.01]' 
                : 'hover:scale-[1.005]'
            }`}
          >
            <div className={`glass-card rounded-3xl p-6 glow-effect h-full flex flex-col justify-between border relative overflow-hidden bg-gradient-to-b from-[#181b30] to-[#121424] shadow-[0_15px_40px_rgba(0,0,0,0.45)] transition-colors ${
              activeTab === 'progress' ? 'border-indigo-400/50' : 'border-white/10'
            }`}>
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-xs shadow-md shadow-indigo-500/30">
                    GT
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-sm">Trading Progress & Journal</div>
                    <div className="text-slate-400 text-[11px]">Automatic Trade Recording</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 rounded-full text-emerald-400 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LIVE SYNC
                </div>
              </div>

              {/* Transactions / Progress Log */}
              <div className="flex flex-col gap-3 mb-4">
                {/* Trade 1 */}
                <div className="bg-[#1e233d] border border-white/10 rounded-2xl p-4 text-left hover:-translate-y-0.5 transition-all duration-200 shadow-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[9px]">BUY</span>
                      <span className="text-white font-extrabold text-xs">XAUUSD</span>
                      <span className="text-slate-400 text-[10px]">1.00 Lot</span>
                    </div>
                    <span className="text-slate-400 text-[10px]">1 hour ago</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400">Entry: <span className="font-bold text-white">2315.40</span></div>
                      <div className="text-[10px] text-slate-400">Exit: <span className="font-bold text-white">2326.75</span></div>
                    </div>
                    <div className="text-emerald-400 font-black text-base">+$1,135.01 USD</div>
                  </div>
                </div>

                {/* Trade 2 */}
                <div className="bg-[#1e233d]/80 border border-white/10 rounded-2xl p-3.5 text-left shadow-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[9px]">BUY</span>
                      <span className="text-white font-extrabold text-xs">GBPUSD</span>
                      <span className="text-slate-400 text-[10px]">0.50 Lot</span>
                    </div>
                    <span className="text-slate-400 text-[10px]">4 hours ago</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400">Entry: <span className="font-bold text-white">1.26400</span></div>
                    </div>
                    <div className="text-emerald-400 font-black text-sm">+$340.20 USD</div>
                  </div>
                </div>

                {/* Trade 3 */}
                <div className="bg-[#1e233d]/60 border border-white/10 rounded-2xl p-3 text-left shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold text-[9px]">SELL</span>
                      <span className="text-white font-extrabold text-xs">BTCUSD</span>
                    </div>
                    <div className="text-rose-400 font-black text-xs">-$120.00 USD</div>
                  </div>
                </div>
              </div>

              {/* Bottom Progress Metrics Banner */}
              <div className="bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-500/30 rounded-2xl p-3.5 flex items-center justify-between text-xs">
                <span className="text-white font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-indigo-300 text-base">trending_up</span>
                  Total Progress
                </span>
                <span className="text-indigo-300 font-black text-sm">+$1,355.21 USD</span>
              </div>

            </div>
          </div>

          {/* ── RIGHT VISUAL: Psychology AI Audit Assistant ── */}
          <div className={`lg:col-span-6 transition-all duration-500 ${
            activeTab === 'progress' ? 'opacity-40 scale-98 hidden md:block' : 'opacity-100 scale-100'
          }`}>
            <div className="glass-card rounded-3xl p-6 glow-effect h-full flex flex-col justify-between border border-white/10 relative overflow-hidden bg-gradient-to-b from-[#181b30] to-[#121424] shadow-[0_15px_40px_rgba(0,0,0,0.45)]">

              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-indigo-300 text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>smart_toy</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">AI Audit & Review Assistant</div>
                    <div className="text-slate-400 text-xs">Psychology & Discipline Evaluator</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-bold">ACTIVE</span>
                </div>
              </div>

              {/* Performance rings */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: 'Win Rate', val: '68%', pct: 68, color: '#6366f1' },
                  { label: 'Avg R:R', val: '1:1.5', pct: 50, color: '#8b5cf6' },
                  { label: 'Discipline', val: 'Grade A', pct: 92, color: '#a78bfa' },
                ].map((m, i) => (
                  <div key={i} className="bg-[#1e233d] rounded-xl p-3 text-center border border-white/10 shadow-sm">
                    <div className="relative w-12 h-12 mx-auto mb-1">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                           fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="3" />
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                           fill="none" stroke={m.color} strokeDasharray={`${m.pct}, 100`} strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-white font-black text-[10px]">{m.val}</span>
                    </div>
                    <div className="text-slate-400 text-[9px]">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Weekly chart bars */}
              <div className="bg-[#1e233d] rounded-xl p-3 border border-white/10 mb-3 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-xs font-bold">Psychology Consistency</span>
                  <span className="text-emerald-400 text-xs font-bold">+12.4%</span>
                </div>
                <div className="flex items-end gap-2 h-12">
                  {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          background: h >= 80
                            ? 'linear-gradient(to top, #6366f1, #8b5cf6)'
                            : 'rgba(99,102,241,0.25)'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Danger Pattern Warning Box */}
              <div className="rounded-xl p-3.5 border border-amber-500/35 bg-amber-500/15 text-left shadow-sm">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-amber-400 text-base mt-0.5 shrink-0" style={{ fontVariationSettings: '"FILL" 1' }}>
                    warning
                  </span>
                  <div>
                    <div className="text-white font-bold text-xs mb-0.5">Danger Pattern Detected</div>
                    <p className="text-slate-300 text-[10px] leading-relaxed">
                      You tend to open new positions within 15 minutes of a cut loss on XAUUSD. Win rate of revenge trades is only 22%. Recommendation: 2-hour cooldown.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ── COMBINED FEATURES LIST (Always visible, exactly as in screenshot) ── */}
        <div className="flex flex-col gap-3 md:gap-6">
          
          {/* Pair 1: Automatic Trade Logging & Progress & Statistics (2 small square cards side-by-side) */}
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {renderCompactSquareCard(COMBINED_FEATURES[0])}
            {renderCompactSquareCard(COMBINED_FEATURES[1])}
          </div>

          {/* Pair 2: Unbiased Setup Insights & Error Pattern Detection (2 small square cards side-by-side) */}
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {renderCompactSquareCard(COMBINED_FEATURES[2])}
            {renderCompactSquareCard(COMBINED_FEATURES[3])}
          </div>

          {/* Pair 3: Psychology & FOMO Guard & Overtrade & Revenge Alerts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {renderNormalCard(COMBINED_FEATURES[4])}
            {renderNormalCard(COMBINED_FEATURES[5])}
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-16 flex justify-center">
          <a href="https://my.gotrading.id/" className="primary-gradient-bg text-white px-9 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-all shadow-xl shadow-primary/25 inline-flex items-center gap-2">
            Start Journal Progress & AI Audit
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>

      </div>
    </section>

    {/* ── COLLABORATIVE LEARNING (LIGHT MODE) ── */}
    <section className="py-16 lg:py-24 px-margin-desktop md:px-margin-desktop px-margin-mobile bg-white relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-container-max mx-auto relative z-10 animate-on-scroll fade-in-up">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-5">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>school</span>
            COLLABORATIVE LEARNING
          </div>

          <h2 className="font-display-lg text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Learn and <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Grow Together</span>.
          </h2>

          <p className="text-slate-500 font-body-md text-base leading-relaxed">
            Connect with serious traders, share verified trading setup ideas, and support each other to build long-term consistency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            {
              title: 'Local Study Partners',
              desc: 'Find dedicated trade study partners in your city, or connect with global peers who share your style.',
              icon: 'groups'
            },
            {
              title: 'Setup Sharing',
              desc: 'Share setups directly from your AI-audited journal to get real mathematical feedback from the community.',
              icon: 'share'
            },
            {
              title: 'Habit Accountability',
              desc: 'It is not a competition; we support each other to eliminate mental blocks and master trading discipline.',
              icon: 'trending_up'
            }
          ].map((col, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-500/30 hover:shadow-md transition-all duration-300 group flex gap-4 items-start text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors shrink-0">
                <span className="material-symbols-outlined text-indigo-600 group-hover:text-white text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>
                  {col.icon}
                </span>
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-base mb-1 tracking-tight">{col.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{col.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}
