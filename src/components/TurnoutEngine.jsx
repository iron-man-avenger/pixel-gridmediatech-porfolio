import React from 'react';
import { turnoutEngineSteps } from '../data/content';
import { PhoneCall, ShieldAlert, CheckCircle2, TrendingUp, Users, ArrowUpRight } from 'lucide-react';

export default function TurnoutEngine({ onOpenEstimator }) {
  return (
    <section id="turnout" className="py-20 sm:py-28 bg-[#F7F4EA] relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#063037]/5 text-[#C45B2B] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            [ 02 // THE ATTENDANCE MULTIPLIER ]
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#063037] tracking-tight leading-tight">
            The #1 Nightmare of Corporate Events is Empty Seats. We Solve It.
          </h2>
          <p className="text-base sm:text-lg text-[#063037]/80 mt-4 leading-relaxed font-normal">
            Most event agencies provide beautiful LED walls and floral stagecraft, then leave delegate turnout to your internal marketing team's generic email blasts. 
            <strong className="text-[#063037]"> PixelGrid Media Tech operates an in-house 45-seat B2B telemarketing floor</strong> dedicated exclusively to securing verified C-suite attendees.
          </p>
        </div>

        {/* 4-Step Funnel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {turnoutEngineSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#063037]/10 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-[#C45B2B]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#C45B2B] group-hover:scale-110 transition-transform">
                    [{step.step}]
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#063037]/20 group-hover:bg-[#C45B2B] transition-colors"></span>
                </div>

                <h3 className="text-lg font-bold text-[#063037] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#063037]/75 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#063037]/10 font-mono">
                <div className="text-xs font-bold text-[#063037]">
                  {step.metric}
                </div>
                <div className="text-[11px] text-[#063037]/60">
                  {step.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Stark Comparison Table */}
        <div className="bg-[#EFE9DC] rounded-2xl border border-[#063037]/15 p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#063037]">
              Why Enterprise CMOs & Event Heads Choose PixelGrid Media Tech
            </h3>
            <p className="text-xs sm:text-sm text-[#063037]/70 mt-1 font-mono">
              AUDIT // GENERIC EVENT COMPANIES VS. PIXELGRID MEDIA TECH METHODOLOGY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Generic Agency */}
            <div className="bg-white/60 p-6 rounded-xl border border-red-200/80 space-y-4">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm font-mono">
                <ShieldAlert className="w-4 h-4" />
                <span>GENERIC EVENT PRODUCTION FIRMS</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#063037]/80">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Zero Attendance Accountability:</strong> "We only handle lights & stage; you fill the hall."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>35% - 45% Drop-off Rate:</strong> Executives RSVP online but skip on event morning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Unattributed Lead ROI:</strong> No data on which keynote attendee was a qualified buyer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Stock Vendor Middlemen:</strong> Sub-contracting audio & trussing, resulting in uncoordinated technical glitches.</span>
                </li>
              </ul>
            </div>

            {/* PixelGrid Method */}
            <div className="bg-[#063037] text-white p-6 rounded-xl border border-[#063037] space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-[#C45B2B] font-bold text-sm font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#C45B2B]" />
                <span>PIXELGRID MEDIA TECH METHOD</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <span className="text-[#C45B2B] font-bold">✓</span>
                  <span><strong>Guaranteed Turnout Engine:</strong> 45-seat dedicated desk proactively securing C-suite commitments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C45B2B] font-bold">✓</span>
                  <span><strong>Under 4.2% Drop-off Rate:</strong> Flight verification, personalized concierge, and VIP calendar lock-in.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C45B2B] font-bold">✓</span>
                  <span><strong>Direct B2B Pipeline Handoff:</strong> Live NFC badge tracking syncing qualified CXO leads to client CRM.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C45B2B] font-bold">✓</span>
                  <span><strong>In-House Hardware & Fabrication:</strong> Direct ownership of 12,500 sq.ft LED inventory & CNC yards.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#063037]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#063037]/75 font-mono">
              VERIFIED TRACK RECORD // OVER 480 CONCLAVES ACROSS INDIA
            </div>
            <button
              onClick={onOpenEstimator}
              className="px-6 py-2.5 bg-[#C45B2B] hover:bg-[#B24E21] text-white font-semibold text-xs sm:text-sm rounded-lg shadow transition-all flex items-center gap-2"
            >
              <span>Consult Our Turnout Specialist</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
