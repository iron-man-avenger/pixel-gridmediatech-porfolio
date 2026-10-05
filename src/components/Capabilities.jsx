import React from 'react';
import { capabilities } from '../data/content';
import { Layers, ShieldCheck, Box, Crown, Compass, ArrowUpRight, Check } from 'lucide-react';

export default function Capabilities({ onOpenEstimator }) {
  const getIcon = (name) => {
    switch (name) {
      case 'Layers': return <Layers className="w-5 h-5 text-[#C45B2B]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#C45B2B]" />;
      case 'Box': return <Box className="w-5 h-5 text-[#C45B2B]" />;
      case 'Crown': return <Crown className="w-5 h-5 text-[#C45B2B]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#C45B2B]" />;
      default: return <Layers className="w-5 h-5 text-[#C45B2B]" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#EFE9DC] relative overflow-hidden bg-dot-matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#063037]/15 pb-8">
          <div>
            <div className="text-xs font-mono text-[#C45B2B] tracking-wider uppercase mb-2 font-semibold">
              [ 01 // SOLUTIONS ARCHITECTURE ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#063037] tracking-tight">
              Enterprise Deliverables. Engineered In-House.
            </h2>
          </div>
          <p className="text-sm text-[#063037]/80 max-w-md mt-4 md:mt-0 font-normal">
            No vendor markups or sub-contracting risk. PixelGrid owns direct inventory of stage mechanics, LED hardware, and fabrication facilities.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-7 border border-[#063037]/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-[#063037] relative ${
                idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-white to-[#F7F4EA]' : ''
              }`}
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#063037]/5 text-[#063037] border border-[#063037]/10">
                    {item.badge}
                  </span>
                  <span className="font-mono text-lg font-bold text-[#C45B2B]">
                    [{item.id}]
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-[#063037]/5 group-hover:bg-[#C45B2B]/10 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono text-[#063037]/60 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#063037] mb-3 leading-snug group-hover:text-[#C45B2B] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#063037]/75 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2 border-t border-[#063037]/10">
                  <span className="text-[11px] font-mono font-bold text-[#063037]/50 uppercase tracking-wider block">
                    Core Specifications:
                  </span>
                  <ul className="space-y-1.5">
                    {item.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-[#063037]/85 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#C45B2B] flex-shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-6 mt-6 border-t border-[#063037]/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#063037]/50">
                  RFP PROTOCOL READY
                </span>
                <button
                  onClick={onOpenEstimator}
                  className="text-xs font-semibold text-[#063037] group-hover:text-[#C45B2B] flex items-center gap-1 transition-colors"
                >
                  <span>Scope Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
