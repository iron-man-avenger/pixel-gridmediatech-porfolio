import React from 'react';
import { workflowSteps } from '../data/content';
import { Sparkles, CheckCircle2, ShieldCheck, Zap, ArrowUpRight, Monitor, Layers } from 'lucide-react';

export default function TurnoutEngine({ onOpenEstimator }) {
  return (
    <section id="workflow" className="py-20 sm:py-28 bg-[#effefb] relative overflow-hidden bg-subtle-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c2f2f2]/60 text-[#356267] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-[#356267]" />
            <span>The PixelGrid Method</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#19383c] tracking-tight leading-tight">
            Our 4-Stage Production & Live Execution Pipeline.
          </h2>
          <p className="text-base text-[#41737c] mt-3 leading-relaxed font-normal">
            Great event production isn’t left to chance. Every stage, screen, and speaker setup goes through our structured pre-production and technical rehearsal workflow.
          </p>
        </div>

        {/* 4-Step Cards Grid (SmoothUI / Unlumen Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {workflowSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-[#356267]/10 shadow-[0_4px_20px_rgba(53,98,103,0.04)] hover:shadow-[0_16px_36px_rgba(53,98,103,0.08)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-[#356267] group-hover:scale-105 transition-transform">
                    [{step.step}]
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#c2f2f2] group-hover:bg-[#356267] transition-colors"></span>
                </div>

                <h3 className="text-lg font-bold text-[#19383c] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#41737c] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#356267]/10 font-mono">
                <div className="text-[10px] text-[#41737c] uppercase">Key Deliverable:</div>
                <div className="text-xs font-semibold text-[#356267] mt-0.5">
                  {step.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Fresh Agency Advantage (Honest Comparison) */}
        <div className="bg-white rounded-3xl border border-[#356267]/15 p-6 sm:p-10 shadow-[0_8px_30px_rgba(53,98,103,0.06)]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-3xl font-bold text-[#19383c]">
              The Fresh Agency Advantage
            </h3>
            <p className="text-xs sm:text-sm text-[#41737c] mt-1 font-mono">
              LEGACY BROKER AGENCIES VS. PIXELGRID DIRECT PRODUCTION
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Legacy Event Brokers */}
            <div className="bg-[#effefb]/60 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="text-xs font-bold text-[#41737c] font-mono uppercase tracking-wider">
                Legacy Event Agencies & Middlemen
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#41737c]">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">✕</span>
                  <span><strong>Layered Vendor Markups:</strong> Sub-contracting screens, sound, and lighting across 4 different third-party vendors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">✕</span>
                  <span><strong>Uncoordinated Glitches:</strong> Misalignment between stage designers, AV operators, and on-ground crew.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">✕</span>
                  <span><strong>Outdated Equipment:</strong> Low-refresh P3.9/P4.8 screens causing camera moiré lines on live stream recordings.</span>
                </li>
              </ul>
            </div>

            {/* PixelGrid Method */}
            <div className="bg-[#356267] text-white p-6 rounded-2xl border border-[#356267] space-y-4 shadow-lg">
              <div className="text-xs font-bold text-[#c2f2f2] font-mono uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#c2f2f2]" />
                <span>PixelGrid Media Tech Studio</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <span className="text-[#c2f2f2] font-bold">✓</span>
                  <span><strong>Direct In-House Directorship:</strong> Single technical directorship managing stagecraft, audio, and visual playback.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c2f2f2] font-bold">✓</span>
                  <span><strong>Ultra-Fine P1.9 – P2.6 Panels:</strong> High-refresh broadcast panels with zero moiré flicker on camera or video reels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c2f2f2] font-bold">✓</span>
                  <span><strong>Transparent Production Scopes:</strong> Clear itemized hardware scopes with no surprise vendor invoices.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#356267]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#41737c] font-mono">
              DIRECT MOBILIZATION // AHMEDABAD • PUNE • DELHI-NCR
            </div>
            <button
              onClick={onOpenEstimator}
              className="px-6 py-2.5 bg-[#356267] hover:bg-[#19383c] text-white font-semibold text-xs sm:text-sm rounded-full shadow transition-all flex items-center gap-2"
            >
              <span>Consult On Stage Production</span>
              <ArrowUpRight className="w-4 h-4 text-[#c2f2f2]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
