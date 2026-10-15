import React from 'react';
import { capabilities } from '../data/content';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';

export default function Capabilities({ onOpenEstimator }) {
  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#f2fcf9] relative overflow-hidden bg-dot-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-[#356267]/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c2f2f2]/60 text-[#356267] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 text-[#356267]" />
              <span>Production Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#19383c] tracking-tight">
              End-to-End Technical Stagecraft & Digital Media.
            </h2>
          </div>
          <p className="text-sm text-[#41737c] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            From curved 4K LED backdrops and calibrated vocal acoustics to custom spatial sets and live webcasting, all equipment and technical directorship are handled in-house.
          </p>
        </div>

        {/* Bento Grid (SmoothUI / Unlumen inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl overflow-hidden border border-[#356267]/10 shadow-[0_4px_20px_rgba(53,98,103,0.04)] hover:shadow-[0_16px_36px_rgba(53,98,103,0.08)] transition-all duration-300 flex flex-col justify-between group ${
                idx === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Image Header with Subtle Zoom */}
                <div className={`relative w-full overflow-hidden bg-slate-900 ${idx === 0 ? 'h-64 sm:h-72' : 'h-48'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Floating Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-[#19383c] text-[11px] font-mono font-medium shadow-xs border border-white/40">
                      {item.badge}
                    </span>
                  </div>

                  {/* ID Tag */}
                  <div className="absolute top-4 right-4 font-mono text-sm font-bold text-white/90 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-xs">
                    [{item.id}]
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  <div className="text-[11px] font-mono text-[#356267] uppercase tracking-wider mb-1 font-semibold">
                    {item.category}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#19383c] mb-2.5 leading-snug group-hover:text-[#356267] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#41737c] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Specs Checklist */}
                  <div className="space-y-2 pt-2 border-t border-[#356267]/10">
                    <span className="text-[10px] font-mono font-bold text-[#356267] uppercase tracking-wider block">
                      Hardware & Delivery Specs:
                    </span>
                    <ul className="space-y-1.5">
                      {item.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2 text-xs text-[#19383c] font-medium">
                          <Check className="w-3.5 h-3.5 text-[#356267] flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 sm:p-7 pt-0 border-t border-transparent">
                <button
                  onClick={onOpenEstimator}
                  className="w-full py-2.5 rounded-full bg-[#effefb] hover:bg-[#c2f2f2] text-[#19383c] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-[#356267]/10"
                >
                  <span>Request Scope for {item.category}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#356267]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
