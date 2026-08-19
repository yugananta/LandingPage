import React from 'react';

export default function Testimonials() {
  const list = [
    {
      id: 1,
      name: "Bima S.",
      role: "Day Trader • London",
      text: "I used to overtrade constantly due to emotions. Since using the AI journal here, I realized exactly which hours I was losing control. Connecting with other traders in my city has also greatly improved my discipline.",
      avatar: "from-indigo-500 to-purple-600",
      rating: 5
    },
    {
      id: 2,
      name: "Nadia K.",
      role: "Swing Trader • New York",
      text: "The network map feature is incredible. When traveling to other cities, I can instantly connect with local traders to discuss setups and share market insights.",
      avatar: "from-teal-400 to-emerald-600",
      rating: 5
    },
    {
      id: 3,
      name: "Reza M.",
      role: "Scalper • Tokyo",
      text: "The auto-log journal is a lifesaver. No more manual excel entries every night. The AI coach gives highly accurate feedback during drawdowns.",
      avatar: "from-amber-400 to-rose-500",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-12 lg:py-16 bg-[#1e2030] border-y border-surface-variant/10 relative overflow-hidden">
      
      <div className="max-w-container-max mx-auto px-margin-desktop md:px-margin-desktop px-margin-mobile relative z-10 text-white">
        
        {/* ─── USER TESTIMONIALS ─── */}
        <div className="text-center mb-8 animate-on-scroll fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-5">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>forum</span>
            MEMBER TESTIMONIALS
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
            What our members say
          </h3>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-base">
            Honest reviews from traders who use our journaling features, AI Audit, and are connected through GoTrading city hubs.
          </p>
        </div>

        {/* Testimonial List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left animate-on-scroll fade-in-up delay-100">
          {list.map((item) => (
            <div key={item.id} className="glass-card p-6 rounded-2xl relative transition-all duration-300 hover:scale-[1.01] hover:border-indigo-500/30 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-3xl text-white/5 absolute top-5 right-5 select-none">format_quote</span>
                
                {/* Star Rating display */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`material-symbols-outlined text-sm ${i < item.rating ? 'text-amber-400' : 'text-white/20'}`}
                      style={{ fontVariationSettings: i < item.rating ? '"FILL" 1' : '"FILL" 0' }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  "{item.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-3 border-t border-white/5 pt-4 mt-2">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                  <div className={`w-full h-full bg-gradient-to-br ${item.avatar} flex items-center justify-center text-white font-bold text-base shadow-inner`}>
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold text-xs">{item.name}</div>
                  <div className="text-indigo-300 text-[10px]">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
