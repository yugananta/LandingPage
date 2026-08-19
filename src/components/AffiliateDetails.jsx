import React, { useState, useEffect } from 'react';

const METRICS = [
  { id: 'wr', name: 'Win Rate', rate: 15, baseText: 'Trade accuracy based on history', icon: 'check_circle' },
  { id: 'dd', name: 'Max Drawdown', rate: 3, baseText: 'Average controlled drawdown', icon: 'trending_down' },
  { id: 'pf', name: 'Profit Factor', rate: 220, baseText: 'Efficiency ratio of profit vs loss', icon: 'star' },
  { id: 'rr', name: 'Risk:Reward', rate: 110, baseText: 'Average risk-to-reward ratio of 1:1.5', icon: 'balance' }
];


const PARTNER_AVATARS_1 = [
  '/avatar_amelia.jpg',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
  '/avatar_bima.jpg',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
  '/avatar_nadia.jpg',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
  '/avatar_reza.jpg',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
];

const PARTNER_AVATARS_2 = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
  '/avatar_nadia.jpg',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
  '/avatar_amelia.jpg',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
  '/avatar_bima.jpg',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
  '/avatar_reza.jpg'
];

export default function AffiliateDetails() {
  const [selectedMetric, setSelectedMetric] = useState(METRICS[0]);
  const [tradeCount, setTradeCount] = useState(25);
  const [displayEarnings, setDisplayEarnings] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const targetEarnings = tradeCount * selectedMetric.rate;

  useEffect(() => {
    let start = displayEarnings;
    const end = targetEarnings;
    if (start === end) return;

    const duration = 400;
    const range = end - start;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const step = Math.min(progress / duration, 1);
      const current = Math.floor(start + range * step);
      setDisplayEarnings(current);

      if (step < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    window.requestAnimationFrame(animate);
  }, [targetEarnings]);

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-slate-200/60">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full relative z-10">
        
        {/* ======================================================== */}
        {/* SUBSECTION 3: PARALLAX PARTNERS CAROUSEL (JOIN OVER TRADERS) */}
        {/* ======================================================== */}
        <div className="w-full lg:max-w-container-max lg:mx-auto px-4 lg:px-0 flex flex-col gap-12 text-center items-center mb-16 overflow-hidden py-6 relative">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Join Over <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">12,000+ Traders</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-3 max-w-xl mx-auto">
              From novice to veteran, traders connect and level up together using GoTrading.
            </p>
          </div>

          {/* Parallax scrolling rows container */}
          <div className="w-full flex flex-col gap-4 relative select-none pointer-events-none mt-4 max-w-4xl mx-auto overflow-hidden">
            
            {/* Row 1: moves to left */}
            <div className="flex gap-4 w-[160%] md:w-[120%] transition-transform duration-100 ease-out will-change-transform opacity-70"
                 style={{ transform: `translateX(${-50 - (scrollOffset * 0.06)}px)` }}>
              {[...PARTNER_AVATARS_1, ...PARTNER_AVATARS_1].map((img, i) => (
                <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0">
                  <img src={img} alt="Partner avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Row 2: moves to right */}
            <div className="flex gap-4 w-[160%] md:w-[120%] transition-transform duration-100 ease-out will-change-transform opacity-70"
                 style={{ transform: `translateX(${-300 + (scrollOffset * 0.06)}px)` }}>
              {[...PARTNER_AVATARS_2, ...PARTNER_AVATARS_2].map((img, i) => (
                <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0">
                  <img src={img} alt="Partner avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Left and Right blur overlays */}
            <div className="absolute inset-y-0 left-0 w-2/12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-2/12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

          </div>

        </div>

        {/* ======================================================== */}
        {/* SUBSECTION 2: TRACK YOUR TRADING PROGRESS */}
        {/* ======================================================== */}
        <div className="w-full lg:max-w-container-max lg:mx-auto p-6 md:p-12 rounded-none lg:rounded-[32px] border-y lg:border border-slate-800 bg-[#1e2030] relative overflow-hidden mb-10 shadow-2xl text-white animate-on-scroll fade-in-up">
          
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Calculator Left */}
            <div className="lg:col-span-7 text-left flex flex-col gap-6">
              <div>
                <h3 className="text-white font-black text-2xl md:text-4xl mb-3">
                  Track Your Trading Progress
                </h3>
                <p className="text-white/55 text-xs md:text-sm">
                  Monitor your win rate, average drawdown, and monthly performance automatically parsed from your trading journal, not rough estimates.
                </p>
              </div>

              {/* Metric Selector Badges */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] text-white/30 uppercase tracking-wider font-semibold">Select Analytics Focus</span>
                <div className="flex flex-wrap gap-2.5">
                  {METRICS.map((metric) => {
                    const isSelected = selectedMetric.id === metric.id;
                    return (
                      <button
                        key={metric.id}
                        onClick={() => setSelectedMetric(metric)}
                        className={`px-4 py-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all duration-300 ${
                          isSelected
                            ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/20'
                            : 'bg-white/5 text-white/60 border-white/5 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span className="material-symbols-outlined text-sm">{metric.icon}</span>
                        {metric.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Slider Control */}
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/40 font-semibold uppercase tracking-wider">Simulated Trades per Month</span>
                  <span className="text-indigo-400 font-bold bg-indigo-500/10 px-2.5 py-1 rounded-md text-sm">{tradeCount} Trades</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="150" 
                  value={tradeCount} 
                  onChange={(e) => setTradeCount(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[10px] text-white/30">
                  <span>5 Trades</span>
                  <span>150+ Trades</span>
                </div>
              </div>

            </div>

            {/* Calculator Right */}
            <div className="lg:col-span-5 w-full">
              <div className="p-8 rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl relative flex flex-col justify-center items-center text-center gap-4">
                
                <div className="absolute inset-0 rounded-2xl border border-indigo-500/20 pointer-events-none animate-pulse" />

                <span className="text-[10px] text-white/30 uppercase tracking-widest font-black">Estimated Journal Analytics</span>
                
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-emerald-300 leading-tight">
                  {selectedMetric.id === 'wr' ? `${Math.min(displayEarnings / 15 + 40, 88).toFixed(1)}%` : 
                   selectedMetric.id === 'dd' ? `${Math.max(12 - displayEarnings / 40, 2.1).toFixed(1)}%` :
                   selectedMetric.id === 'pf' ? `${(1.1 + displayEarnings / 1500).toFixed(2)}` :
                   `1:${(1.0 + displayEarnings / 2000).toFixed(2)}`}
                  <span className="text-sm font-semibold text-white/40 block mt-1">{selectedMetric.name}</span>
                </div>

                <div className="text-xs text-white/40 border-t border-white/5 pt-4 w-full">
                  {selectedMetric.baseText}. Integrated dynamically into the GoTrading AI evaluation dashboard.
                </div>

                <a href="#how-it-works" className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-black text-sm transition-all duration-300 shadow-lg shadow-indigo-600/25 active:scale-95 flex items-center justify-center">
                  Start Journaling Your Trades
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
