import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full rounded-t-3xl bg-[#141522] border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-gutter py-16 px-margin-desktop max-w-container-max mx-auto text-left">
      {/* Logo & Tagline */}
      <div className="col-span-1 flex flex-col gap-4">
        <div className="h-16 flex items-center">
          <img
            src="/logo.png"
            alt="GoTrading"
            className="h-full w-auto max-w-[180px] object-contain transition-opacity duration-300"
          />
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Empowering local traders with AI-driven insights and real human connections.
        </p>
        <div className="flex gap-4 mt-4">
          {/* Simple social circles */}
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/50 transition-colors cursor-pointer">
            <span className="text-gray-300 text-xs font-bold">X</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/50 transition-colors cursor-pointer">
            <span className="text-gray-300 text-xs font-bold">IG</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/50 transition-colors cursor-pointer">
            <span className="text-gray-300 text-xs font-bold">YT</span>
          </div>
        </div>
      </div>

      {/* Platform Column */}
      <div className="col-span-1 flex flex-col gap-3">
        <h5 className="text-white font-bold text-sm mb-2">Platform</h5>
        <a className="text-gray-400 hover:text-primary transition-colors font-body-sm text-sm" href="#">Features</a>
        <a className="text-gray-400 hover:text-primary transition-colors font-body-sm text-sm" href="#">Pricing</a>
        <a className="text-gray-400 hover:text-primary transition-colors font-body-sm text-sm" href="#">Community</a>
      </div>

      {/* Company Column */}
      <div className="col-span-1 flex flex-col gap-3">
        <h5 className="text-white font-bold text-sm mb-2">Company</h5>
        <a className="text-gray-400 hover:text-primary transition-colors font-body-sm text-sm" href="#">About Us</a>
        <a className="text-gray-400 hover:text-primary transition-colors font-body-sm text-sm" href="#">Careers</a>
        <a className="text-gray-400 hover:text-primary transition-colors font-body-sm text-sm" href="#">Blog</a>
      </div>

      {/* Bottom Copyright Block */}
      <div className="col-span-1 md:col-span-3 mt-8 pt-8 border-t border-white/5 text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a className="text-gray-500 hover:text-white transition-colors text-xs" href="#">Privacy Policy</a>
          <a className="text-gray-500 hover:text-white transition-colors text-xs" href="#">Terms of Service</a>
          <a className="text-gray-500 hover:text-white transition-colors text-xs" href="#">Help</a>
        </div>
        <p className="text-gray-500 text-xs">
          © 2026 GoTrading. All rights reserved. Built for the community.
        </p>
      </div>
    </footer>
  );
}