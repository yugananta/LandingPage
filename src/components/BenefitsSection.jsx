import React, { useState, useRef } from 'react';

const BENEFITS = [
  {
    title: 'Meet Local Traders',
    desc: 'Find study partners close to you, not just random usernames in chat groups.',
    icon: 'location_on'
  },
  {
    title: 'Events & Meetups',
    desc: 'Join local meetups, share strategies, discuss technical setups, or grab coffee with regional traders.',
    icon: 'groups'
  },
  {
    title: 'Collaborative Learning',
    desc: 'Share your analysis for peer feedback and learn directly from experienced local traders.',
    icon: 'school'
  }
];

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-[#1a1c29] relative overflow-hidden border-t border-white/5">
      
      {/* Background glow ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* TOP SECTION: Full Width Video (Edge-to-Edge, NO PADDING AT ALL) */}
      <div className="w-full mb-12 animate-on-scroll scale-up">
        <div className="relative w-full aspect-[16/9] md:aspect-[2.4/1] overflow-hidden border-y border-white/10 shadow-2xl bg-[#222436] flex items-center justify-center group">
          
          {/* HTML5 Video */}
          <video
            ref={videoRef}
            src="/vidio/WhatsApp Video 2026-08-18 at 13.11.15.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Mute/Unmute Overlay Button */}
          <button 
            onClick={toggleMute}
            className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 border border-white/15 text-white flex items-center justify-center transition-all duration-300 active:scale-95 shadow-lg backdrop-blur-sm"
            title={isMuted ? "Unmute video" : "Mute video"}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMuted ? 'volume_off' : 'volume_up'}
            </span>
          </button>

          {/* Video Decorative Gradient Cover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="max-w-container-max mx-auto relative z-10 px-margin-desktop md:px-margin-desktop px-margin-mobile">
        <div className="flex flex-col gap-8 items-center">
          
          {/* BOTTOM SECTION: Benefits Text Content */}
          <div className="w-full max-w-[960px] flex flex-col gap-6 text-center items-center animate-on-scroll fade-in-up">
            
            {/* Upper Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-bold uppercase tracking-widest w-fit">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>diversity_1</span>
              WHY GOTRADING
            </div>

            {/* Headline Title */}
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
              Build the Community <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">in Your City.</span>
            </h2>
            
            <p className="text-white/60 text-base max-w-2xl mx-auto -mt-2">
              No active trading community in your area? Start one here. GoTrading helps you form and expand local trading circles, so you can transition from trading in isolation to growing with support.
            </p>

            {/* Benefits Horizontal Grid (Desktop) / Vertical List (Mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
              {BENEFITS.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div 
                    key={idx}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left flex flex-col gap-4 ${
                      isActive 
                        ? 'bg-[#2d3047] border-indigo-500/30 shadow-lg' 
                        : 'bg-[#222436]/60 border-white/5 hover:bg-[#222436] hover:border-white/10'
                    }`}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon container */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' 
                          : 'bg-white/5 text-white/40'
                      }`}>
                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                      </div>
                      
                      {/* Item Title */}
                      <h3 className={`text-lg md:text-xl font-bold transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-indigo-300 via-purple-300 to-violet-300 bg-clip-text text-transparent' 
                          : 'text-white/60'
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className={`text-xs md:text-sm leading-relaxed transition-all duration-300 ${
                      isActive ? 'text-white/80' : 'text-white/40'
                    }`}>
                      {item.desc}
                    </p>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
