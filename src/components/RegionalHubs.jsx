import React from 'react';
import { hubs, brandConfig } from '../data/content';
import { MapPin, Phone, MessageSquare, Building, ArrowUpRight } from 'lucide-react';

export default function RegionalHubs({ onOpenEstimator }) {
  return (
    <section id="hubs" className="py-20 sm:py-28 bg-[#f2fcf9] relative bg-dot-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-[#356267]/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c2f2f2]/60 text-[#356267] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#356267]" />
              <span>Pan-India Presence</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#19383c] tracking-tight">
              Operational Hubs & Liaison Desks.
            </h2>
          </div>
          <p className="text-sm text-[#41737c] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            Headquartered in Ahmedabad with dedicated regional liaison points in Pune and Delhi-NCR, our technical staging teams mobilize rapidly across all Indian metro hubs.
          </p>
        </div>

        {/* Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hubs.map((hub, idx) => (
            <div
              key={hub.city}
              className="bg-white rounded-3xl p-7 border border-[#356267]/10 shadow-[0_4px_24px_rgba(53,98,103,0.04)] hover:shadow-[0_16px_36px_rgba(53,98,103,0.08)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#effefb] text-[#356267] border border-[#356267]/10">
                    HUB // 0{idx + 1}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin className="w-5 h-5 text-[#356267]" />
                  <h3 className="text-2xl font-bold text-[#19383c]">
                    {hub.city}
                  </h3>
                </div>

                <div className="text-xs font-mono text-[#356267] font-semibold mb-3">
                  {hub.role}
                </div>

                <p className="text-xs sm:text-sm text-[#41737c] mb-6 leading-relaxed">
                  {hub.details}
                </p>

                <div className="pt-4 border-t border-[#356267]/10 text-xs text-[#41737c] flex items-center gap-2">
                  <Building className="w-3.5 h-3.5 text-[#356267] flex-shrink-0" />
                  <span className="truncate">{hub.location}</span>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="pt-6 mt-6 border-t border-[#356267]/10 flex items-center justify-between">
                <a
                  href={`tel:${hub.phone}`}
                  className="text-xs font-bold text-[#19383c] hover:text-[#356267] flex items-center gap-1.5 transition-colors font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-[#356267]" />
                  <span>{hub.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${brandConfig.contacts.whatsapp.replace('+', '')}?text=Inquiry%20for%20${hub.city}%20PixelGrid%20Media%20Tech%20Studio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#41737c] hover:text-[#25D366] hover:bg-[#25D366]/10 rounded-full transition-colors"
                  title="WhatsApp this hub"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
