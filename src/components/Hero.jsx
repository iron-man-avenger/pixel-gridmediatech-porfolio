import React from 'react';
import { ArrowUpRight, Sparkles, Sliders, Layers, Volume2, Video } from 'lucide-react';
import { brandConfig } from '../data/content';

export default function Hero({ onOpenEstimator }) {
  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden bg-[#effefb] bg-subtle-grid">
      {/* Soft Ambient Ethereal Glows */}
      <div className="absolute top-12 right-10 w-96 h-96 bg-[#c2f2f2]/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-28 left-10 w-80 h-80 bg-[#356267]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid: Headline + High-End Stage Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Creative Editorial Narrative */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Fresh Agency Status Pill (SmoothUI style) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c2f2f2]/60 border border-[#356267]/15 text-[#19383c] text-xs font-mono font-medium backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#356267] animate-pulse"></span>
              <span className="font-semibold text-[#356267]">NEW-AGE STUDIO:</span>
              <span className="text-[#41737c]">EXPERIENTIAL & EVENT MEDIA TECH</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-[#19383c] tracking-tight leading-[1.12]">
              Where Spatial Stagecraft Meets{' '}
              <span className="font-serif-luxury italic font-normal text-[#356267] relative inline-block">
                Next-Gen Media Tech.
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-[#c2f2f2]/70 -z-10 rounded-full"></span>
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#41737c] leading-relaxed font-normal max-w-xl">
              PixelGrid Media Tech is a fresh, tech-forward experiential agency based in Ahmedabad. 
              We build curved 4K LED environments, crystal-clear vocal acoustics, and dynamic brand pop-ups 
              for corporate summits, product unveils, and dealer conferences across India.
            </p>

            {/* Subtle Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-0.5 text-xs font-medium text-[#19383c]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#356267]/10 shadow-xs">
                <Layers className="w-3.5 h-3.5 text-[#356267]" />
                Curved P1.9 – P2.6 LED Walls
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#356267]/10 shadow-xs">
                <Volume2 className="w-3.5 h-3.5 text-[#356267]" />
                Vocal Line-Array Acoustics
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#356267]/10 shadow-xs">
                <Video className="w-3.5 h-3.5 text-[#356267]" />
                Multi-Cam Live Webcasting
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenEstimator}
                className="px-6 py-3 bg-[#356267] hover:bg-[#19383c] text-white font-semibold text-sm rounded-full shadow-[0_4px_20px_rgba(53,98,103,0.2)] hover:shadow-[0_8px_25px_rgba(53,98,103,0.3)] transition-all duration-200 flex items-center justify-center gap-2 group border border-[#356267]"
              >
                <span>Plan Your Event Brief</span>
                <ArrowUpRight className="w-4 h-4 text-[#c2f2f2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#capabilities"
                className="px-6 py-3 bg-white/80 hover:bg-white text-[#19383c] font-semibold text-sm rounded-full border border-[#356267]/15 shadow-xs hover:shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Sliders className="w-4 h-4 text-[#356267]" />
                <span>Explore Capabilities</span>
              </a>
            </div>

            {/* Transparent Note */}
            <div className="pt-2 border-t border-[#356267]/10 text-xs text-[#41737c] font-mono">
              <span className="text-[#356267] font-semibold">DIRECT PRODUCTION:</span> Zero middleman agency markups. Direct in-house technical directorship.
            </div>
          </div>

          {/* Right Column: Breathable Stage & Media Visual Card (Refero / Unlumen Style) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(53,98,103,0.12)] border border-[#356267]/15 bg-white group">
              {/* Image Container with Full Visual Breathing Room */}
              <div className="relative h-96 sm:h-[440px] lg:h-[460px] w-full overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80" 
                  alt="High-Tech Stagecraft & Curved LED Wall Production" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle Gradient Shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#19383c]/90 via-[#19383c]/20 to-transparent"></div>

                {/* Floating Micro-Pill (Top Right) */}
                <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-white/40 text-[#19383c] text-[11px] font-mono font-medium shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#356267]"></span>
                  <span>4K LED STAGECRAFT</span>
                </div>

                {/* Bottom Overlaid Metadata Card (Sleek & Compact) */}
                <div className="absolute bottom-3 sm:bottom-3.5 left-3 sm:left-3.5 right-3 sm:right-3.5 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/50 shadow-lg text-[#19383c] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-[#356267] uppercase tracking-wider">
                      PixelGrid Stage Blueprint
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#c2f2f2] text-[#19383c] font-semibold">
                      IN-HOUSE GEAR
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-[#41737c] font-medium leading-relaxed">
                    Custom curved LED backdrops, digital sound consoles, and laser-mapped keynotes tailored for Indian corporate halls.
                  </p>

                  <div className="grid grid-cols-3 gap-1.5 pt-1 border-t border-[#356267]/10 text-center font-mono">
                    <div className="bg-[#effefb] p-1.5 rounded-lg border border-[#356267]/5">
                      <div className="text-[9px] text-[#41737c]">REFRESH</div>
                      <div className="text-[11px] font-bold text-[#19383c]">3840 Hz</div>
                    </div>
                    <div className="bg-[#effefb] p-1.5 rounded-lg border border-[#356267]/5">
                      <div className="text-[9px] text-[#41737c]">AUDIO</div>
                      <div className="text-[11px] font-bold text-[#19383c]">Line Array</div>
                    </div>
                    <div className="bg-[#effefb] p-1.5 rounded-lg border border-[#356267]/5">
                      <div className="text-[9px] text-[#41737c]">DIRECTORSHIP</div>
                      <div className="text-[11px] font-bold text-[#356267]">100% Live</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breathable Metric Ribbon (Honest, Fresh & Credible) */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#356267]/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brandConfig.metrics.map((metric, idx) => (
              <div key={idx} className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-[#356267]/10 hover:border-[#356267]/30 transition-all shadow-2xs">
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#356267] tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#19383c] mt-0.5">
                  {metric.label}
                </div>
                <div className="text-[11px] text-[#41737c] font-mono mt-0.5">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
