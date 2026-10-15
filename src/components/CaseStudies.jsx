import React from 'react';
import { eventFormats } from '../data/content';
import { ArrowUpRight, Sparkles, Layers, Sliders } from 'lucide-react';

export default function CaseStudies({ onOpenEstimator }) {
  return (
    <section id="formats" className="py-20 sm:py-28 bg-[#effefb] relative bg-subtle-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-[#356267]/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c2f2f2]/60 text-[#356267] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5 text-[#356267]" />
              <span>Event Environments</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#19383c] tracking-tight">
              Specialized Production Formats.
            </h2>
          </div>
          <p className="text-sm text-[#41737c] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            Every corporate format demands a distinct technical setup. Here is how we architect acoustics, video walls, and spatial lighting for each environment.
          </p>
        </div>

        {/* Gallery Grid (SmoothUI / Refero Inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventFormats.map((format, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#356267]/10 shadow-[0_4px_24px_rgba(53,98,103,0.05)] hover:shadow-[0_16px_40px_rgba(53,98,103,0.09)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Frame with Subtle Scale */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={format.image}
                    alt={format.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  
                  {/* Floating Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#19383c] text-xs font-mono font-semibold shadow-xs">
                      {format.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#19383c] mb-2.5 group-hover:text-[#356267] transition-colors leading-snug">
                    {format.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#41737c] leading-relaxed mb-4">
                    {format.description}
                  </p>
                </div>
              </div>

              {/* Bottom Trigger */}
              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#356267]/5">
                <span className="text-[11px] font-mono text-[#41737c]">
                  FORMAT 0{idx + 1} // TURNKEY EXECUTION
                </span>
                <button
                  onClick={onOpenEstimator}
                  className="text-xs font-semibold text-[#356267] hover:text-[#19383c] flex items-center gap-1 transition-colors"
                >
                  <span>Scope This Event</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
