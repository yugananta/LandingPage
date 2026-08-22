import React, { useState } from 'react';

const FAQS = [
  {
    question: "Is GoTrading a broker or trading platform?",
    answer: "No. GoTrading is not a broker, and we do not handle or process funds. We are an AI-powered trading journal analytics platform, an interactive education hub, and a social community connecting traders globally."
  },
  {
    question: "How does the AI Audit analyze my trading journal?",
    answer: "Once you link your trading account, the AI Audit scans transaction metrics including frequency, average position hold times, lot size ratios, and execution timings. It then detects repetitive psychological errors and provides objective corrective feedback."
  },
  {
    question: "How does the Network Map connect me with local traders?",
    answer: "The Network Map functions as an encrypted geographical directory. It displays regional concentrations of active traders in your area (e.g. Jakarta, Surabaya, Bandung) and allows you to join official local chat groups to coordinate offline gatherings."
  },
  {
    question: "Is my trading journal data secure and confidential?",
    answer: "Absolutely. Your data privacy is our highest priority. Your transaction logs and trading records are accessed via read-only APIs, fully encrypted, and never shared with third parties without your explicit authorization."
  },
  {
    question: "How do I connect my trading account?",
    answer: "Linking your account is simple. Enter the read-only credentials of your trading terminal (such as MT4, MT5, or cTrader) into the dashboard. GoTrading never requests transaction passwords or withdrawal access."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 lg:py-16 px-margin-desktop md:px-margin-desktop px-margin-mobile bg-[#0c0e18] relative overflow-hidden border-t border-white/10">
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 animate-on-scroll fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-5">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>help</span>
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Have Questions?
          </h2>
          <p className="text-slate-300/80 mt-4 text-base leading-relaxed">
            Find quick answers regarding our AI features, account linking, data security, and the GoTrading community.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3 text-left animate-on-scroll fade-in-up delay-100">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-gradient-to-b from-[#222746] to-[#171a33] border border-indigo-500/50 shadow-xl shadow-indigo-950/40 ring-1 ring-indigo-500/20' 
                    : 'bg-gradient-to-b from-[#181b30] to-[#121424] border border-white/10 hover:border-indigo-500/40 hover:from-[#1e233d] hover:to-[#16192c] shadow-md'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-white font-bold text-sm md:text-base focus:outline-none transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className={`material-symbols-outlined text-indigo-300 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-indigo-400' : ''
                  }`}>
                    keyboard_arrow_down
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-white/10' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 py-5 text-slate-300 text-xs md:text-sm leading-relaxed bg-[#0c0e18]/80">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
