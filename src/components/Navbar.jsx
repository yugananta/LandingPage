import React, { useState, useEffect } from 'react';

const LANGUAGES = [
  { code: 'EN', flag: '🇬🇧', label: 'English' },
  { code: 'ID', flag: '🇮🇩', label: 'Bahasa Indonesia' },
  { code: 'VI', flag: '🇻🇳', label: 'Tiếng Việt' },
  { code: 'TH', flag: '🇹🇭', label: 'ภาษาไทย' }
];

export default function Navbar() {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#2a2d48]/95 via-[#1a1c29]/95 to-[#27243c]/95 backdrop-blur-md shadow-sm border-b border-indigo-500/10">
      <div className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto md:px-margin-desktop px-margin-mobile">
        <a 
          href="#" 
          className="flex items-center -ml-3 md:-ml-4" 
          aria-label="GoTrading Home"
        >
          {/* Logo switches based on current theme - always dark mode logo */}
          <img
            src="/logo.png"
            alt="GoTrading"
            className="h-16 w-auto object-contain transition-opacity duration-300"
          />
        </a>
        
        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="#features">
            Features
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="#community">
            Community
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="#how-it-works">
            How it Works
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="#ai-coach">
            AI Coach
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="#pricing">
            Pricing
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="#faq">
            FAQ
          </a>
        </div>
        
        {/* Buttons / language selector */}
        <div className="flex items-center gap-1.5 md:gap-4 relative -mr-2 md:mr-0">
          <a 
            href="https://my.gotrading.id/"
            className="hidden md:block text-on-surface hover:opacity-80 transition-all duration-200 font-label-sm text-label-sm"
          >
            Log In
          </a>
          
          <a 
            href="https://my.gotrading.id/"
            className="hidden md:block primary-gradient-bg text-white px-6 py-2.5 rounded-full font-label-sm text-label-sm hover:opacity-80 transition-all duration-200 active:scale-95"
          >
            Get Started
          </a>
          
          {/* Mobile Sign In button (Another 30% smaller) */}
          <a 
            href="https://my.gotrading.id/"
            className="md:hidden primary-gradient-bg text-white px-1.5 py-1 rounded-full font-extrabold text-[8px] tracking-wide hover:opacity-90 transition-all shadow-sm active:scale-95 flex items-center gap-0.5"
          >
            <span className="material-symbols-outlined text-[10px]">login</span>
            Sign In
          </a>

          {/* Language Flag selector dropdown */}
          <div className="relative">
            <button 
              className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Select language"
            >
              <span className="text-base leading-none">{selectedLang.flag}</span>
              <span className="text-[10px] font-bold text-gray-300 uppercase">{selectedLang.code}</span>
            </button>

            {/* Language Dropdown List - positioned perfectly below header so it doesn't cover it */}
            {langOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setLangOpen(false)} 
                />
                <div className="absolute right-0 top-full mt-3 w-[220px] rounded-2xl bg-[#edf2f9] border border-slate-200/80 shadow-2xl py-2 px-1.5 z-50 text-left animate-on-scroll is-visible scale-up">
                  {LANGUAGES.map((lang) => {
                    const isSelected = lang.code === selectedLang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-150 text-left ${
                          isSelected 
                            ? 'bg-blue-100/70 text-indigo-950 font-bold' 
                            : 'hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <span className="text-xl leading-none">{lang.flag}</span>
                        <span className="text-xs text-slate-400 font-bold w-5">{lang.code}</span>
                        <span className={`text-sm ${isSelected ? 'text-indigo-800 font-extrabold' : 'text-slate-800 font-medium'}`}>
                          {lang.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
