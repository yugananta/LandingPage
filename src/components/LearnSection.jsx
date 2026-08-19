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

  const renderSmallSquareCard = (f) => {
    if (!f) return null;
    return (
      <div 
        key={f.title}
        className="p-5 md:p-6 rounded-2xl bg-surface-container-low border border-surface-variant/15 hover:border-primary/30 transition-all duration-300 group flex flex-col justify-between w-full aspect-square text-left animate-on-scroll fade-in-up"
      >
        <div>
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-3 shrink-0">
            <span className="material-symbols-outlined text-primary-fixed text-base" style={{ fontVariationSettings: '"FILL" 1' }}>
              {f.icon}
            </span>
          </div>
          <h3 className="text-on-surface font-extrabold text-xs md:text-sm mb-1 leading-tight tracking-tight line-clamp-2">{f.title}</h3>
          <p className="text-on-surface-variant text-[10px] md:text-xs leading-relaxed line-clamp-3 md:line-clamp-4">{f.desc}</p>
        </div>
        <div className="mt-2">
          <span className={`text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-full border inline-block ${
            f.category === 'progress' 
              ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' 
              : 'bg-violet-500/10 text-violet-400 border-violet-500/20'
          }`}>
            {f.category === 'progress' ? 'Progress' : 'AI Psychology'}
          </span>
        </div>
      </div>
    );
  };

  const renderNormalCard = (f) => {
    if (!f) return null;
    return (
      <div 
        key={f.title}
        className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-surface-variant/15 hover:border-primary/30 transition-all duration-300 group flex flex-col justify-between h-full text-left animate-on-scroll fade-in-up"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary-fixed text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                {f.icon}
              </span>
            </div>
            <span className="text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border bg-violet-500/10 text-violet-400 border-violet-500/20">
              AI Psychology
            </span>
          </div>
          
          <h3 className="text-on-surface font-black text-lg mb-2">{f.title}</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="ai-coach" className="pt-6 pb-16 lg:pt-8 lg:pb-24 px-margin-desktop md:px-margin-desktop px-margin-mobile bg-background relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10">
        
        {/* ── SECTION HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary-fixed text-[10px] font-bold uppercase tracking-widest mb-5">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>auto_stories</span>
            TRACK PROGRESS & PSYCHOLOGY AI AUDIT
          </div>

          <h2 className="font-display-lg text-3xl md:text-5xl font-black text-on-background mb-4 leading-tight">
            Track Your Trading Progress & Let AI Review Your{' '}
            <span className="primary-gradient-text">Psychology</span>.
          </h2>

          <p className="text-on-surface-variant font-body-md text-base leading-relaxed">
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
                    ? 'primary-gradient-bg text-white border-transparent shadow-lg shadow-primary/20 scale-105'
                    : 'bg-surface-container-low text-on-surface-variant border-surface-variant/20 hover:border-primary/40'
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
          <div className={`lg:col-span-6 transition-all duration-500 ${
            activeTab === 'psychology' ? 'opacity-40 scale-98 hidden md:block' : 'opacity-100 scale-100'
          }`}>
            <div className="glass-card rounded-3xl p-6 glow-effect h-full flex flex-col justify-between border border-surface-variant/20 relative overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-surface-variant/20 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-xs shadow-md shadow-indigo-500/20">
                    GT
                  </div>
                  <div>
                    <div className="text-on-surface font-extrabold text-sm">Trading Progress & Journal</div>
                    <div className="text-on-surface-variant text-[11px]">Automatic Trade Recording</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LIVE SYNC
                </div>
              </div>

              {/* Transactions / Progress Log */}
              <div className="flex flex-col gap-3 mb-4">
                {/* Trade 1 */}
                <div className="bg-surface-container border border-surface-variant/20 rounded-2xl p-4 text-left hover:-translate-y-0.5 transition-transform duration-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold text-[9px]">BUY</span>
                      <span className="text-on-surface font-extrabold text-xs">XAUUSD</span>
                      <span className="text-on-surface-variant text-[10px]">1.00 Lot</span>
                    </div>
                    <span className="text-on-surface-variant text-[10px]">1 hour ago</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-on-surface-variant">Entry: <span className="font-bold text-on-surface">2315.40</span></div>
                      <div className="text-[10px] text-on-surface-variant">Exit: <span className="font-bold text-on-surface">2326.75</span></div>
                    </div>
                    <div className="text-emerald-400 font-black text-base">+$1,135.01 USD</div>
                  </div>
                </div>

                {/* Trade 2 */}
                <div className="bg-surface-container/70 border border-surface-variant/15 rounded-2xl p-3.5 text-left">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold text-[9px]">BUY</span>
                      <span className="text-on-surface font-extrabold text-xs">GBPUSD</span>
                      <span className="text-on-surface-variant text-[10px]">0.50 Lot</span>
                    </div>
                    <span className="text-on-surface-variant text-[10px]">4 hours ago</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-on-surface-variant">Entry: <span className="font-bold text-on-surface">1.26400</span></div>
                    </div>
                    <div className="text-emerald-400 font-black text-sm">+$340.20 USD</div>
                  </div>
                </div>

                {/* Trade 3 */}
                <div className="bg-surface-container/40 border border-surface-variant/10 rounded-2xl p-3 text-left">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-rose-500/15 text-rose-400 font-bold text-[9px]">SELL</span>
                      <span className="text-on-surface font-extrabold text-xs">BTCUSD</span>
                    </div>
                    <div className="text-rose-400 font-black text-xs">-$120.00 USD</div>
                  </div>
                </div>
              </div>

              {/* Bottom Progress Metrics Banner */}
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-3.5 flex items-center justify-between text-xs">
                <span className="text-on-surface font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-fixed text-base">trending_up</span>
                  Total Progress
                </span>
                <span className="text-primary-fixed font-black text-sm">+$1,355.21 USD</span>
              </div>

            </div>
          </div>

          {/* ── RIGHT VISUAL: Psychology AI Audit Assistant ── */}
          <div className={`lg:col-span-6 transition-all duration-500 ${
            activeTab === 'progress' ? 'opacity-40 scale-98 hidden md:block' : 'opacity-100 scale-100'
          }`}>
            <div className="glass-card rounded-3xl p-6 glow-effect h-full flex flex-col justify-between border border-surface-variant/20 relative overflow-hidden">

              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-surface-variant/20 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-fixed text-lg" style={{ fontVariationSettings: '"FILL" 1' }}>smart_toy</span>
                  </div>
                  <div>
                    <div className="text-on-surface font-bold text-sm">AI Audit & Review Assistant</div>
                    <div className="text-on-surface-variant text-xs">Psychology & Discipline Evaluator</div>
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
                  <div key={i} className="bg-surface-container rounded-xl p-3 text-center border border-surface-variant/20">
                    <div className="relative w-12 h-12 mx-auto mb-1">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                           fill="none" stroke="var(--border-card-color)" strokeWidth="3" />
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                           fill="none" stroke={m.color} strokeDasharray={`${m.pct}, 100`} strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-on-surface font-black text-[10px]">{m.val}</span>
                    </div>
                    <div className="text-on-surface-variant text-[9px]">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Weekly chart bars */}
              <div className="bg-surface-container rounded-xl p-3 border border-surface-variant/20 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-on-surface text-xs font-bold">Psychology Consistency</span>
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
                            : 'rgba(99,102,241,0.2)'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Danger Pattern Warning Box */}
              <div className="rounded-xl p-3.5 border border-amber-500/30 bg-amber-500/10 text-left">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-amber-400 text-base mt-0.5 shrink-0" style={{ fontVariationSettings: '"FILL" 1' }}>
                    warning
                  </span>
                  <div>
                    <div className="text-on-surface font-bold text-xs mb-0.5">Danger Pattern Detected</div>
                    <p className="text-on-surface-variant text-[10px] leading-relaxed">
                      You tend to open new positions within 15 minutes of a cut loss on XAUUSD. Win rate of revenge trades is only 22%. Recommendation: 2-hour cooldown.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ── COMBINED FEATURES LIST ── */}
        <div className="flex flex-col gap-6">
          
          {/* Pair 1: Automatic Trade Logging & Progress & Statistics (Side-by-side square cards) */}
          {(activeTab === 'all' || activeTab === 'progress') && (
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {renderSmallSquareCard(COMBINED_FEATURES[0])}
              {renderSmallSquareCard(COMBINED_FEATURES[1])}
            </div>
          )}

          {/* Pair 2: Unbiased Setup Insights & Error Pattern Detection (Side-by-side square cards) */}
          {activeTab === 'all' && (
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {renderSmallSquareCard(COMBINED_FEATURES[2])}
              {renderSmallSquareCard(COMBINED_FEATURES[3])}
            </div>
          )}

          {/* If Progress tab is selected, render Unbiased Setup Insights alone (square card) */}
          {activeTab === 'progress' && (
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {renderSmallSquareCard(COMBINED_FEATURES[2])}
              <div /> {/* Spacer for balance */}
            </div>
          )}

          {/* If Psychology tab is selected, render Error Pattern Detection alone (square card) */}
          {activeTab === 'psychology' && (
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {renderSmallSquareCard(COMBINED_FEATURES[3])}
              <div /> {/* Spacer for balance */}
            </div>
          )}

          {/* Pair 3: Psychology & FOMO Guard & Overtrade & Revenge Alerts (Left as standard cards) */}
          {(activeTab === 'all' || activeTab === 'psychology') && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderNormalCard(COMBINED_FEATURES[4])}
              {renderNormalCard(COMBINED_FEATURES[5])}
            </div>
          )}

        </div>

        {/* ── SEAMLESS DIVISION: COLLABORATIVE LEARNING ── */}
        <div className="mt-24 pt-20 border-t border-surface-variant/10 animate-on-scroll fade-in-up">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-5">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>school</span>
              COLLABORATIVE LEARNING
            </div>

            <h2 className="font-display-lg text-3xl md:text-5xl font-black text-on-background mb-4 leading-tight">
              Learn and <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">Grow Together</span>.
            </h2>

            <p className="text-on-surface-variant font-body-md text-base leading-relaxed">
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
                className="p-6 md:p-8 rounded-3xl bg-surface-container-low border border-surface-variant/15 hover:border-primary/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors mb-5">
                    <span className="material-symbols-outlined text-indigo-400 text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                      {col.icon}
                    </span>
                  </div>
                  <h3 className="text-on-surface font-extrabold text-lg mb-2 tracking-tight">{col.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{col.desc}</p>
                </div>
              </div>
            ))}
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
  );
}
