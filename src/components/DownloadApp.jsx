import React from 'react';

export default function DownloadApp() {
  return (
    <section className="py-12 bg-[#161827] text-white px-margin-desktop md:px-margin-desktop px-margin-mobile border-t border-b border-white/10 relative z-20">
      <div className="max-w-container-max mx-auto flex flex-col items-center justify-center text-center gap-5">
        <p className="text-white text-xs font-semibold uppercase tracking-wider">DOWNLOAD MOBILE APP</p>
        <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
          <a href="#" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-slate-900 to-slate-950 hover:from-slate-800 hover:to-slate-900 text-white border border-slate-700/80 transition-all shadow-xl group">
            <div className="w-9 h-9 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 384 512" className="w-4 h-4 fill-current text-white transition-transform group-hover:scale-110">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-22.7-79.4-22c-35.5 .6-73.8 21.6-91.4 52.3-30 52-9.4 153.8 20.6 220 13.6 27.4 31.5 57 60.5 56.7 29-1.2 38.4-19.3 73.9-19.3 35.1 0 44.2 19.3 74.5 18.7 30.6-.6 46.8-26.9 60.2-53.7 16.5-30.7 23.5-59.3 23.8-60.8-.7-.2-69.9-27.1-70.1-105.7zM286.1 91c16.2-20.2 27.3-48.2 22.9-76.3-23.7 1.9-54 16.2-71.2 36.4-14.7 17.2-27.6 45.6-23.1 73.6 26.3 2 55.4-13.5 71.4-33.7z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[8px] text-slate-300 uppercase tracking-wide font-medium">Download on the</p>
              <p className="text-xs text-white font-bold">App Store</p>
            </div>
          </a>
          <a href="#" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-slate-900 to-slate-950 hover:from-slate-800 hover:to-slate-900 text-white border border-slate-700/80 transition-all shadow-xl group">
            <div className="w-9 h-9 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 512 512" className="w-4 h-4 fill-current text-indigo-400 transition-transform group-hover:scale-110">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1 118.1 26.8c12.4 2.8 21.8 13.7 21.8 27.2 0 13.5-9.4 24.4-21.8 27.2zm-146.7 52.2L104.6 499l220.7-126.5 60.1-60.1-60.1-34.6z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[8px] text-slate-300 uppercase tracking-wide font-medium">Get it on</p>
              <p className="text-xs text-white font-bold">Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
