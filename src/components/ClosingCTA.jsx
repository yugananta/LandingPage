import React from 'react';

export default function ClosingCTA() {
  return (
    <section id="pricing" className="py-12 lg:py-16 relative overflow-hidden bg-[#1a1c29] border-t border-white/5">
      {/* Decorative ambient glowing lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[300px] bg-indigo-600/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 right-1/4 w-[600px] h-[300px] bg-violet-600/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-margin-desktop md:px-margin-desktop px-margin-mobile text-center relative z-10">
        
        {/* Stat badges above CTA */}
        <div className="inline-flex justify-center gap-6 md:gap-12 mb-8 flex-wrap animate-on-scroll fade-in-up">
          <div className="text-center">
            <div className="text-white font-black text-2xl md:text-3xl">12,000+</div>
            <div className="text-white/45 text-[10px] uppercase tracking-wider font-semibold mt-1">Active Members</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block self-center" />
          <div className="text-center">
            <div className="text-white font-black text-2xl md:text-3xl">45+</div>
            <div className="text-white/40 text-[10px] uppercase tracking-wider font-semibold mt-1">Active Cities</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block self-center" />
          <div className="text-center">
            <div className="text-white font-black text-2xl md:text-3xl">500K+</div>
            <div className="text-white/40 text-[10px] uppercase tracking-wider font-semibold mt-1">Trades Recorded</div>
          </div>
        </div>



        {/* ─── BLUE-PURPLE GRADIENT CARD ─── */}
        <div className="rounded-2xl bg-gradient-to-r from-[#7c3aed] via-[#5c52eb] to-[#2563eb] p-6 md:p-8 text-center relative overflow-hidden group hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 animate-on-scroll scale-up delay-200">
          {/* Subtle pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent)] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center gap-2.5 max-w-xl mx-auto">
            
            {/* Header label */}
            <span className="text-white/80 text-[11px] font-extrabold tracking-widest uppercase flex items-center gap-1.5">
              gotrading <span className="text-white/60 font-medium">Free Access</span>
            </span>

            {/* Card title */}
            <h3 className="text-xl md:text-3xl font-black text-white leading-tight">
              Join the GoTrading Community
            </h3>

            {/* Card description */}
            <p className="text-white/85 text-xs md:text-sm leading-relaxed mb-2">
              Find local trading partners, journal automatically, receive AI audits, and accelerate your performance today.
            </p>

            {/* CTA Button */}
            <a 
              href="https://my.gotrading.id/"
              className="mt-2 px-8 py-3.5 rounded-full bg-white text-indigo-700 font-extrabold text-xs md:text-sm hover:bg-slate-100 transition-all shadow-lg active:scale-95 inline-flex items-center gap-2"
            >
              Join a Community
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            
          </div>
        </div>

      </div>
    </section>
  );
}
