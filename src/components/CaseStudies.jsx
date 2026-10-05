import React from 'react';
import { caseStudies } from '../data/content';
import { MapPin, Calendar, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function CaseStudies({ onOpenEstimator }) {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#F7F4EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#063037]/15 pb-8">
          <div>
            <div className="text-xs font-mono text-[#C45B2B] tracking-wider uppercase mb-2 font-semibold">
              [ 04 // MEASURED OUTCOMES ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#063037] tracking-tight">
              Enterprise Case Studies & Metrics.
            </h2>
          </div>
          <p className="text-sm text-[#063037]/80 max-w-md mt-4 md:mt-0 font-normal">
            We measure success in filled seats, zero technical downtime, and quantifiable client deal pipeline.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#063037]/10 p-6 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-[#063037]/30"
            >
              {/* Left Column: Context & Title */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-[#063037] text-white font-semibold">
                    {study.type}
                  </span>
                  <span className="flex items-center gap-1 text-[#063037]/70">
                    <MapPin className="w-3.5 h-3.5 text-[#C45B2B]" />
                    {study.location}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#063037] group-hover:text-[#C45B2B] transition-colors leading-tight">
                  {study.client}
                </h3>

                <p className="text-sm sm:text-base text-[#063037]/80 leading-relaxed font-normal">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full bg-[#EFE9DC] text-[#063037] text-xs font-mono border border-[#063037]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Delivered Metric Card */}
              <div className="lg:col-span-5 bg-[#063037] text-white p-6 sm:p-7 rounded-xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#C45B2B] tracking-wider uppercase mb-2">
                    VERIFIED EXECUTION METRIC
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {study.stats}
                  </div>
                  <div className="text-xs text-white/70 leading-relaxed">
                    SLA contract executed with zero audio dropouts, full broadcast redundancy, and real-time delegate attendance logs.
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/50">
                    ARCHIVE RECORD: #2026-{idx + 1}
                  </span>
                  <button
                    onClick={onOpenEstimator}
                    className="text-xs font-semibold text-[#C45B2B] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Request Case Brief</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
