import React from 'react';
import { ArrowUpRight, CheckCircle2, Monitor, Sparkles } from 'lucide-react';
import { brandConfig } from '../data/content';

export default function Hero({ onOpenEstimator }) {
  return (
    <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-grid-pattern">
      {/* Background Accent Gradients */}
      <div className="absolute top-12 right-0 w-96 h-96 bg-[#C45B2B]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#063037]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid: Headline & Shifted-Up Production Deck Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-5">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#063037]/5 border border-[#063037]/10 text-[#063037] text-xs font-mono font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#C45B2B] animate-ping"></span>
              <span className="font-semibold text-[#C45B2B]">GRID // LIVE:</span>
              <span>BOOKING Q3 & Q4 2026 ENTERPRISE AGMs & CONCLAVES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-bold text-[#063037] tracking-tight leading-[1.12]">
              Where Architectural{' '}
              <span className="font-serif-luxury italic font-normal text-[#C45B2B]">
                Stagecraft
              </span>{' '}
              Meets Guaranteed Corporate Turnout.
            </h1>

            <p className="text-sm sm:text-base text-[#063037]/80 leading-relaxed font-normal max-w-xl">
              Most corporate events suffer from generic stage sets and empty front rows. 
              <strong className="text-[#063037] font-semibold"> PixelGrid Media Tech</strong> pairs 
              ultra-fine 4K LED production and spatial audio with a dedicated peer-to-peer 
              B2B telemarketing RSVP desk to deliver <strong className="text-[#C45B2B]">measurable enterprise ROI</strong>.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-medium text-[#063037]/90 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C45B2B]" />
                Zero-Latency 4K Webcasting
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C45B2B]" />
                45-Seat B2B RSVP Calling Floor
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C45B2B]" />
                SEBI/MCA Statutory Compliance
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenEstimator}
                className="px-6 py-3 bg-[#C45B2B] hover:bg-[#B24E21] text-white font-semibold text-sm rounded-xl shadow-lg shadow-[#C45B2B]/20 hover:shadow-xl hover:shadow-[#C45B2B]/30 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Plan Corporate Summit</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#simulator"
                className="px-6 py-3 bg-[#063037]/5 hover:bg-[#063037]/10 text-[#063037] font-semibold text-sm rounded-xl border border-[#063037]/15 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Monitor className="w-4 h-4 text-[#063037]" />
                <span>Simulate Stage Layout</span>
              </a>
            </div>

            {/* Formula Ribbon */}
            <div className="pt-3 border-t border-[#063037]/10 flex items-center gap-2 text-xs font-mono text-[#063037]/70">
              <span className="px-2 py-0.5 bg-[#063037]/5 rounded text-[#063037] font-semibold text-[11px]">FORMULA:</span>
              <span className="text-[11px]">Stagecraft + B2B Attendance Engine = Guaranteed Executive Turnout</span>
            </div>
          </div>

          {/* Right Column: Shifted-Up High-Tech Production Blueprint Card */}
          <div className="lg:col-span-5 lg:pt-0">
            <div className="relative rounded-2xl bg-[#063037] text-white p-5 sm:p-6 shadow-2xl border border-white/10 crosshair-corner">
              {/* Card Header (Now perfectly top-aligned) */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C45B2B]"></div>
                  <span className="font-mono text-xs text-[#EFE9DC] tracking-wider uppercase font-semibold">
                    PixelGrid Media Tech Production Deck
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/80">
                  SYSTEM READY
                </span>
              </div>

              {/* Blueprint Graphic / Interactive Display */}
              <div className="bg-[#031D21] rounded-xl p-3.5 border border-white/10 mb-4 relative overflow-hidden">
                <div className="flex justify-between items-center text-[11px] font-mono text-white/60 mb-2.5 border-b border-white/10 pb-1.5">
                  <span>STAGE RES: 7680 × 2160 (8K)</span>
                  <span className="text-[#C45B2B] font-semibold">ACTIVE 120 FPS</span>
                </div>

                {/* Visual Stage Representation */}
                <div className="relative h-36 rounded-lg bg-[#063037]/80 border border-dashed border-white/20 flex flex-col items-center justify-center p-2 text-center">
                  {/* Curved LED indicator */}
                  <div className="w-full h-7 border-t-2 border-x-2 border-[#C45B2B] rounded-t-2xl mb-1.5 flex items-center justify-center">
                    <span className="text-[9px] font-mono text-[#EFE9DC] tracking-widest uppercase">
                      120ft Curved P2.6 LED Wall
                    </span>
                  </div>

                  {/* Stage Podium */}
                  <div className="w-4/5 h-10 bg-white/5 border border-white/15 rounded flex items-center justify-around px-2 mb-1.5">
                    <span className="text-[9px] font-mono text-white/70">PODIUM A</span>
                    <span className="text-[9px] font-mono text-[#C45B2B] font-bold">KEYNOTE DESK</span>
                    <span className="text-[9px] font-mono text-white/70">PANEL DESK</span>
                  </div>

                  {/* Floor Seating Array */}
                  <div className="w-full flex items-center justify-center gap-1">
                    {[...Array(12)].map((_, i) => (
                      <span key={i} className="w-1.5 h-1.5 rounded-xs bg-white/25 hover:bg-[#C45B2B] transition-colors"></span>
                    ))}
                  </div>
                  <span className="text-[8px] font-mono text-white/40 mt-1">
                    EXECUTIVE SEATING // 850 VERIFIED SEATS
                  </span>
                </div>

                {/* Stage Specs Grid */}
                <div className="grid grid-cols-3 gap-2 mt-2.5 pt-2.5 border-t border-white/10 text-center font-mono">
                  <div className="bg-white/5 p-1.5 rounded">
                    <div className="text-[9px] text-white/50">AUDIO SPL</div>
                    <div className="text-xs font-bold text-white">96 dB (A)</div>
                  </div>
                  <div className="bg-white/5 p-1.5 rounded">
                    <div className="text-[9px] text-white/50">UPLINK</div>
                    <div className="text-xs font-bold text-[#C45B2B]">Dual 1Gbps</div>
                  </div>
                  <div className="bg-white/5 p-1.5 rounded">
                    <div className="text-[9px] text-white/50">ATTENDANCE</div>
                    <div className="text-xs font-bold text-green-400">99.1% RSVP</div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                  <span>DEPLOYMENT TIME: &lt; 8 HOURS</span>
                  <span className="text-white/90">PUNE / AHMEDABAD / DELHI</span>
                </div>

                <button
                  onClick={onOpenEstimator}
                  className="w-full py-2.5 bg-white/10 hover:bg-[#C45B2B] text-white font-medium text-xs rounded-lg transition-all duration-200 border border-white/15 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Configure Stage Setup for Your Event</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Ribbon */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#063037]/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brandConfig.stats.map((stat, idx) => (
              <div key={idx} className="relative group">
                <div className="font-display text-2xl sm:text-4xl font-extrabold text-[#063037] tracking-tight group-hover:text-[#C45B2B] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#063037]/90 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#063037]/60 font-mono mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
