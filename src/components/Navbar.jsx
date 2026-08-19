import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#2a2d48]/95 via-[#1a1c29]/95 to-[#27243c]/95 backdrop-blur-md shadow-sm border-b border-indigo-500/10">
      <div className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto md:px-margin-desktop px-margin-mobile">
        <a 
          href="#" 
          className="flex items-center" 
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
        
        {/* Buttons / hamburger toggle */}
        <div className="flex items-center gap-2 md:gap-4">
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
          
          {/* Mobile Sign In button */}
          <a 
            href="https://my.gotrading.id/"
            className="md:hidden primary-gradient-bg text-white px-4 py-2 rounded-full font-bold text-xs hover:opacity-90 transition-all shadow-md active:scale-95 flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">login</span>
            Sign In
          </a>

          <button 
            className="md:hidden text-on-surface focus:outline-none ml-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      
      {/* Mobile nav drawer */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#1a1c29]/98 to-[#13141f]/98 border-b border-indigo-500/10 flex flex-col items-start gap-4 p-6 w-full animate-on-scroll is-visible">
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md w-full" href="#features" onClick={() => setIsOpen(false)}>
            Features
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md w-full" href="#community" onClick={() => setIsOpen(false)}>
            Community
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md w-full" href="#how-it-works" onClick={() => setIsOpen(false)}>
            How it Works
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md w-full" href="#ai-coach" onClick={() => setIsOpen(false)}>
            AI Coach
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md w-full" href="#pricing" onClick={() => setIsOpen(false)}>
            Pricing
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md w-full" href="#faq" onClick={() => setIsOpen(false)}>
            FAQ
          </a>
          <div className="w-full flex flex-col gap-2 pt-2">
            <a 
              href="https://my.gotrading.id/"
              className="text-on-surface hover:opacity-80 transition-all duration-200 font-label-sm text-label-sm border border-on-surface/10 rounded-full w-full py-2 text-center block" 
              onClick={() => setIsOpen(false)}
            >
              Log In
            </a>
            <a 
              href="https://my.gotrading.id/"
              className="primary-gradient-bg text-white font-label-sm text-label-sm rounded-full w-full py-2.5 text-center block hover:opacity-80 transition-all duration-200 active:scale-95" 
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
