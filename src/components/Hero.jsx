import React from 'react';

const FeaturesRow = [
  { icon: 'groups', title: 'FIND PARTNERS', desc: 'Traders in your city' },
  { icon: 'forum', title: 'DISCUSS STRATEGIES', desc: 'Share analysis & setups' },
  { icon: 'diversity_3', title: 'LOCAL HUBS', desc: 'Offline meetups & gatherings' },
  { icon: 'trending_up', title: 'GROW TOGETHER', desc: 'No more trading alone' },
];

const COMMUNITY_AVATARS = [
  { 
    src: '/avatar_reza.jpg', 
    name: 'Indonesian', 
    posClass: 'left-[2%] top-[12%]', 
    animClass: 'animate-[float-card-1_4s_ease-in-out_infinite]' 
  },
  { 
    src: '/avatar_asian.png', 
    name: 'East Asian', 
    posClass: 'right-[2%] top-[12%]', 
    animClass: 'animate-[float-card-2_4.5s_ease-in-out_0.2s_infinite]' 
  },
  { 
    src: '/avatar_indian.png', 
    name: 'Indian', 
    posClass: 'left-[-6%] top-[45%] -translate-y-1/2', 
    animClass: 'animate-[float-card-1_5s_ease-in-out_0.4s_infinite]' 
  },
  { 
    src: '/avatar_white.png', 
    name: 'European', 
    posClass: 'right-[-6%] top-[45%] -translate-y-1/2', 
    animClass: 'animate-[float-card-2_4.8s_ease-in-out_0.6s_infinite]' 
  },
  { 
    src: '/avatar_black.png', 
    name: 'African', 
    posClass: 'left-[2%] bottom-[12%]', 
    animClass: 'animate-[float-card-1_4.2s_ease-in-out_0.8s_infinite]' 
  },
  { 
    src: '/avatar_arab.png', 
    name: 'Arabian', 
    posClass: 'right-[2%] bottom-[12%]', 
    animClass: 'animate-[float-card-2_4.6s_ease-in-out_1s_infinite]' 
  },
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1.03) translate(0, 0); }
          50% { transform: scale(1.08) translate(-1%, 0.5%); }
          100% { transform: scale(1.03) translate(0, 0); }
        }
        .animate-ken-burns {
          animation: ken-burns 36s ease-in-out infinite;
        }
        .hero-overlay-grad {
          background-image: linear-gradient(to bottom, rgba(19, 20, 34, 0.98) 0%, rgba(19, 20, 34, 0.72) 50%, rgba(19, 20, 34, 0.98) 100%);
        }
        @media (min-width: 1024px) {
          .hero-overlay-grad {
            background-image: linear-gradient(to right, rgba(19, 20, 34, 1) 0%, rgba(19, 20, 34, 0.96) 28%, rgba(19, 20, 34, 0.78) 45%, rgba(19, 20, 34, 0.22) 75%, rgba(19, 20, 34, 0.95) 100%);
          }
        }
      `}</style>
      
      {/* ─── SECTION 1: HERO (DARK MODE) ─── */}
      <section className="relative h-[100dvh] lg:h-screen flex flex-col justify-start lg:justify-center pt-20 lg:pt-0 pb-2 px-margin-desktop md:px-margin-desktop px-margin-mobile text-white bg-[#131422] overflow-hidden">
        
        {/* Soft Sunset City Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-[1.03] animate-ken-burns"
          style={{
            backgroundImage: `url('/hero_bg_sunset.png')`,
            filter: 'blur(2px) brightness(0.55) contrast(1.1)',
          }}
        />
        
        {/* Responsive Gradient Overlay for Readability */}
        <div className="absolute inset-0 pointer-events-none hero-overlay-grad z-[1]" />
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none z-[1]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none z-[1]" />
 
        <div className="max-w-container-max mx-auto w-full h-full relative z-10 lg:flex lg:flex-col lg:justify-center">
          
          {/* DESKTOP LAYOUT (hidden lg:grid) */}
          <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Tagline Content */}
            <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-6 items-start text-left animate-on-scroll fade-in-up py-16">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest w-fit">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                GOTRADING
              </div>
 
              {/* Tagline Headline */}
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.2] tracking-tight text-white">
                You're Not Losing To The Market.<br className="hidden lg:block" />
                <span className="lg:whitespace-nowrap">You're Losing To The Same Mistakes.</span><br className="hidden lg:block" />
                <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent mt-2 block">
                  And You're Fighting Them Alone.
                </span>
              </h1>
 
              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-start gap-4 mt-2">
                <a 
                  href="#how-it-works"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20 inline-flex items-center gap-2"
                >
                  Join a Community
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Desktop Hoodie Avatar Visual */}
            <div className="lg:col-span-5 relative flex justify-end self-end pt-12 animate-on-scroll scale-up delay-100">
              <div className="relative w-[490px] aspect-square rounded-full bg-gradient-to-br from-indigo-600/20 to-violet-600/10 border border-indigo-500/20 flex items-center justify-center p-4 -translate-y-16">
                
                {/* Decorative orbit rings */}
                <div className="absolute inset-2 border border-white/5 rounded-full animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-8 border border-indigo-500/10 border-dashed rounded-full" />

                {/* Connecting Lines (Realistic, Curved, Interactive Flow Mesh) */}
                <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="flow-grad-desktop" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <filter id="glow-filter-desktop" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <style>{`
                    @keyframes stroke-flow-desktop {
                      0% { stroke-dashoffset: 120; }
                      100% { stroke-dashoffset: 0; }
                    }
                    .animate-flow-desktop-1 {
                      stroke-dasharray: 12 60;
                      animation: stroke-flow-desktop 5s linear infinite;
                    }
                    .animate-flow-desktop-2 {
                      stroke-dasharray: 18 70;
                      animation: stroke-flow-desktop 7s linear infinite reverse;
                    }
                    .animate-flow-desktop-center {
                      stroke-dasharray: 8 40;
                      animation: stroke-flow-desktop 4s linear infinite;
                    }
                  `}</style>

                  {/* Outer hex connections: base static paths */}
                  <path d="M 5,15 Q 50,5 95,15" fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="0.75" />
                  <path d="M 95,15 Q 105,30 103,45" fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="0.75" />
                  <path d="M 103,45 Q 105,65 95,85" fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="0.75" />
                  <path d="M 95,85 Q 50,95 5,85" fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="0.75" />
                  <path d="M 5,85 Q -5,65 -3,45" fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="0.75" />
                  <path d="M -3,45 Q -5,30 5,15" fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="0.75" />

                  {/* Inner center connections: base static paths */}
                  <line x1="5" y1="15" x2="50" y2="50" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />
                  <line x1="95" y1="15" x2="50" y2="50" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />
                  <line x1="-3" y1="45" x2="50" y2="50" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />
                  <line x1="103" y1="45" x2="50" y2="50" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />
                  <line x1="5" y1="85" x2="50" y2="50" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />
                  <line x1="95" y1="85" x2="50" y2="50" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />

                  {/* Outer hex connections: animated flowing glow overlays */}
                  <path d="M 5,15 Q 50,5 95,15" fill="none" stroke="url(#flow-grad-desktop)" strokeWidth="1.2" filter="url(#glow-filter-desktop)" className="animate-flow-desktop-1" />
                  <path d="M 95,15 Q 105,30 103,45" fill="none" stroke="url(#flow-grad-desktop)" strokeWidth="1.2" filter="url(#glow-filter-desktop)" className="animate-flow-desktop-2" />
                  <path d="M 103,45 Q 105,65 95,85" fill="none" stroke="url(#flow-grad-desktop)" strokeWidth="1.2" filter="url(#glow-filter-desktop)" className="animate-flow-desktop-1" />
                  <path d="M 95,85 Q 50,95 5,85" fill="none" stroke="url(#flow-grad-desktop)" strokeWidth="1.2" filter="url(#glow-filter-desktop)" className="animate-flow-desktop-2" />
                  <path d="M 5,85 Q -5,65 -3,45" fill="none" stroke="url(#flow-grad-desktop)" strokeWidth="1.2" filter="url(#glow-filter-desktop)" className="animate-flow-desktop-1" />
                  <path d="M -3,45 Q -5,30 5,15" fill="none" stroke="url(#flow-grad-desktop)" strokeWidth="1.2" filter="url(#glow-filter-desktop)" className="animate-flow-desktop-2" />

                  {/* Inner center connections: animated flowing glow overlays */}
                  <line x1="5" y1="15" x2="50" y2="50" stroke="url(#flow-grad-desktop)" strokeWidth="0.8" filter="url(#glow-filter-desktop)" className="animate-flow-desktop-center" />
                  <line x1="95" y1="15" x2="50" y2="50" stroke="url(#flow-grad-desktop)" strokeWidth="0.8" filter="url(#glow-filter-desktop)" className="animate-flow-desktop-center" />
                  <line x1="-3" y1="45" x2="50" y2="50" stroke="url(#flow-grad-desktop)" strokeWidth="0.8" filter="url(#glow-filter-desktop)" className="animate-flow-desktop-center" />
                  <line x1="103" y1="45" x2="50" y2="50" stroke="url(#flow-grad-desktop)" strokeWidth="0.8" filter="url(#glow-filter-desktop)" className="animate-flow-desktop-center" />
                  <line x1="5" y1="85" x2="50" y2="50" stroke="url(#flow-grad-desktop)" strokeWidth="0.8" filter="url(#glow-filter-desktop)" className="animate-flow-desktop-center" />
                  <line x1="95" y1="85" x2="50" y2="50" stroke="url(#flow-grad-desktop)" strokeWidth="0.8" filter="url(#glow-filter-desktop)" className="animate-flow-desktop-center" />

                  {/* Glowing Connection Nodes */}
                  <circle cx="5" cy="15" r="1.5" fill="#818cf8" className="animate-pulse" />
                  <circle cx="95" cy="15" r="1.5" fill="#c084fc" className="animate-pulse" />
                  <circle cx="103" cy="45" r="1.5" fill="#f472b6" className="animate-pulse" />
                  <circle cx="95" cy="85" r="1.5" fill="#c084fc" className="animate-pulse" />
                  <circle cx="5" cy="85" r="1.5" fill="#818cf8" className="animate-pulse" />
                  <circle cx="-3" cy="45" r="1.5" fill="#f472b6" className="animate-pulse" />
                  <circle cx="50" cy="50" r="2.5" fill="#a855f7" className="animate-ping" style={{ animationDuration: '3s' }} />
                  <circle cx="50" cy="50" r="2" fill="#a855f7" />
                </svg>

                {/* 6 Surrounding Avatars */}
                {COMMUNITY_AVATARS.map((avatar, idx) => (
                  <div 
                    key={idx} 
                    className={`absolute ${avatar.posClass} ${avatar.animClass} z-20 w-28 h-28 rounded-full p-[2.5px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_24px_rgba(168,85,247,0.55)]`}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden border border-[#1a1c29] bg-[#1a1c29] relative">
                      <img 
                        src={avatar.src} 
                        alt={avatar.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}

                {/* Quote / Subtext centered under the hoodie guy, aligned with bottom boundary */}
                <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[440px] text-center z-20 pointer-events-none">
                  <p className="text-white/80 text-sm md:text-base font-medium italic leading-relaxed">
                    "Join a community of traders who are building <span className="text-indigo-300 font-semibold">discipline</span>, <span className="text-indigo-300 font-semibold">accountability</span>, and <span className="text-indigo-300 font-semibold">growth</span> together."
                  </p>
                </div>

                {/* Hoodie Avatar - aligned exactly at bottom offset to compensate for container translation, keeping pants aligned at boundary */}
                <img 
                  src="/human.png" 
                  alt="Trader in hoodie" 
                  className="absolute bottom-[-235px] w-[95%] h-[105%] object-contain object-bottom z-10 scale-[1.38] origin-bottom filter drop-shadow-[0_20px_50px_rgba(99,102,241,0.35)]"
                />

              </div>
            </div>
          </div>

          {/* MOBILE & TABLET LAYOUT (lg:hidden) */}
          <div className="lg:hidden flex flex-col justify-between h-full w-full pt-10 pb-4 px-4 relative z-10">
            
            {/* Top content: Tagline Headline */}
            <div className="flex flex-col items-center text-center mt-0 animate-fade-in-up">
              <h1 className="text-xl sm:text-2xl font-extrabold leading-[1.35] tracking-tight text-white max-w-sm">
                You're Not Losing<br />
                To The Market.<br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent mt-1.5 block">
                  You're Losing To<br />
                  The Same Mistakes.
                </span>
                <span className="mt-1.5 block">
                  And You're Fighting<br />
                  Them Alone.
                </span>
              </h1>
            </div>

            {/* Middle Content: Large Hoodie Image with Orbits */}
            <div className="relative w-full flex-1 flex items-end justify-center min-h-0 py-2">
              
              {/* Orbit and Avatars container - square to match desktop SVG path scale */}
              <div className="relative w-[250px] h-[250px] max-w-[75vw] aspect-square flex items-center justify-center scale-[1.02] origin-center -mb-8">
                
                {/* Background glowing circle and orbits */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-600/20 to-violet-600/10 border border-indigo-500/20 flex items-center justify-center p-4">
                  {/* Decorative orbit rings */}
                  <div className="absolute inset-2 border border-white/5 rounded-full animate-[spin_40s_linear_infinite]" />
                  <div className="absolute inset-8 border border-indigo-500/10 border-dashed rounded-full" />

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="flow-grad-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                      <filter id="glow-filter-mobile" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <style>{`
                      @keyframes stroke-flow-mobile {
                        0% { stroke-dashoffset: 120; }
                        100% { stroke-dashoffset: 0; }
                      }
                      .animate-flow-mobile-1 {
                        stroke-dasharray: 12 60;
                        animation: stroke-flow-mobile 5s linear infinite;
                      }
                      .animate-flow-mobile-2 {
                        stroke-dasharray: 18 70;
                        animation: stroke-flow-mobile 7s linear infinite reverse;
                      }
                      .animate-flow-mobile-center {
                        stroke-dasharray: 8 40;
                        animation: stroke-flow-mobile 4s linear infinite;
                      }
                    `}</style>

                    <path d="M 5,15 Q 50,5 95,15" fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="0.75" />
                    <path d="M 95,15 Q 105,30 103,45" fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="0.75" />
                    <path d="M 103,45 Q 105,65 95,85" fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="0.75" />
                    <path d="M 95,85 Q 50,95 5,85" fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="0.75" />
                    <path d="M 5,85 Q -5,65 -3,45" fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="0.75" />
                    <path d="M -3,45 Q -5,30 5,15" fill="none" stroke="rgba(99,102,241,0.18)" strokeWidth="0.75" />

                    <line x1="5" y1="15" x2="50" y2="50" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />
                    <line x1="95" y1="15" x2="50" y2="50" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />
                    <line x1="-3" y1="45" x2="50" y2="50" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />
                    <line x1="103" y1="45" x2="50" y2="50" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />
                    <line x1="5" y1="85" x2="50" y2="50" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />
                    <line x1="95" y1="85" x2="50" y2="50" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />

                    <path d="M 5,15 Q 50,5 95,15" fill="none" stroke="url(#flow-grad-mobile)" strokeWidth="1.2" filter="url(#glow-filter-mobile)" className="animate-flow-mobile-1" />
                    <path d="M 95,15 Q 105,30 103,45" fill="none" stroke="url(#flow-grad-mobile)" strokeWidth="1.2" filter="url(#glow-filter-mobile)" className="animate-flow-mobile-2" />
                    <path d="M 103,45 Q 105,65 95,85" fill="none" stroke="url(#flow-grad-mobile)" strokeWidth="1.2" filter="url(#glow-filter-mobile)" className="animate-flow-mobile-1" />
                    <path d="M 95,85 Q 50,95 5,85" fill="none" stroke="url(#flow-grad-mobile)" strokeWidth="1.2" filter="url(#glow-filter-mobile)" className="animate-flow-mobile-2" />
                    <path d="M 5,85 Q -5,65 -3,45" fill="none" stroke="url(#flow-grad-mobile)" strokeWidth="1.2" filter="url(#glow-filter-mobile)" className="animate-flow-mobile-1" />
                    <path d="M -3,45 Q -5,30 5,15" fill="none" stroke="url(#flow-grad-mobile)" strokeWidth="1.2" filter="url(#glow-filter-mobile)" className="animate-flow-mobile-2" />

                    <line x1="5" y1="15" x2="50" y2="50" stroke="url(#flow-grad-mobile)" strokeWidth="0.8" filter="url(#glow-filter-mobile)" className="animate-flow-mobile-center" />
                    <line x1="95" y1="15" x2="50" y2="50" stroke="url(#flow-grad-mobile)" strokeWidth="0.8" filter="url(#glow-filter-mobile)" className="animate-flow-mobile-center" />
                    <line x1="-3" y1="45" x2="50" y2="50" stroke="url(#flow-grad-mobile)" strokeWidth="0.8" filter="url(#glow-filter-mobile)" className="animate-flow-mobile-center" />
                    <line x1="103" y1="45" x2="50" y2="50" stroke="url(#flow-grad-mobile)" strokeWidth="0.8" filter="url(#glow-filter-mobile)" className="animate-flow-mobile-center" />
                    <line x1="5" y1="85" x2="50" y2="50" stroke="url(#flow-grad-mobile)" strokeWidth="0.8" filter="url(#glow-filter-mobile)" className="animate-flow-mobile-center" />
                    <line x1="95" y1="85" x2="50" y2="50" stroke="url(#flow-grad-mobile)" strokeWidth="0.8" filter="url(#glow-filter-mobile)" className="animate-flow-mobile-center" />

                    <circle cx="5" cy="15" r="1.5" fill="#818cf8" className="animate-pulse" />
                    <circle cx="95" cy="15" r="1.5" fill="#c084fc" className="animate-pulse" />
                    <circle cx="103" cy="45" r="1.5" fill="#f472b6" className="animate-pulse" />
                    <circle cx="95" cy="85" r="1.5" fill="#c084fc" className="animate-pulse" />
                    <circle cx="5" cy="85" r="1.5" fill="#818cf8" className="animate-pulse" />
                    <circle cx="-3" cy="45" r="1.5" fill="#f472b6" className="animate-pulse" />
                    <circle cx="50" cy="50" r="2.5" fill="#a855f7" className="animate-ping" style={{ animationDuration: '3s' }} />
                    <circle cx="50" cy="50" r="2" fill="#a855f7" />
                  </svg>
                </div>

                {/* 6 Surrounding Avatars */}
                {COMMUNITY_AVATARS.map((avatar, idx) => (
                  <div 
                    key={idx} 
                    className={`absolute ${avatar.posClass} ${avatar.animClass} z-20 w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.35)]`}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden border border-[#1a1c29] bg-[#1a1c29] relative">
                      <img 
                        src={avatar.src} 
                        alt={avatar.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c29]/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                ))}

                {/* Hoodie Avatar with fade-out mask */}
                <img 
                  src="/human.png" 
                  alt="Trader in hoodie" 
                  className="absolute bottom-0 w-[75%] h-[90%] object-contain object-bottom z-10 scale-[1.2] origin-bottom filter drop-shadow-[0_20px_50px_rgba(99,102,241,0.35)]"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)'
                  }}
                />

              </div>

            </div>

            {/* Bottom Content: Quote & Full Width Button */}
            <div className="flex flex-col items-center w-full gap-3 mt-auto z-30">
              {/* Quote text */}
              <p className="text-white/70 text-[11px] sm:text-xs text-center leading-relaxed max-w-[280px]">
                Join a community of traders who are building <span className="text-indigo-300 font-semibold">discipline</span>, <span className="text-indigo-300 font-semibold">accountability</span>, and <span className="text-indigo-300 font-semibold">growth</span> together.
              </p>

              {/* Full Width Gradient Button */}
              <a 
                href="#how-it-works"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all duration-300"
              >
                Join a Community!
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
