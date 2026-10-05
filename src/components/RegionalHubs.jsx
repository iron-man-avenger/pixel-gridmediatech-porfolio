import React from 'react';
import { hubs, brandConfig } from '../data/content';
import { MapPin, Phone, Building2, UserCheck, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function RegionalHubs({ onOpenEstimator }) {
  return (
    <section id="hubs" className="py-20 sm:py-28 bg-[#EFE9DC] relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#063037]/15 pb-8">
          <div>
            <div className="text-xs font-mono text-[#C45B2B] tracking-wider uppercase mb-2 font-semibold">
              [ 05 // NATIONWIDE OPERATIONAL COMMAND ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#063037] tracking-tight">
              3 Command Hubs. Rapid Pan-India Mobilization.
            </h2>
          </div>
          <p className="text-sm text-[#063037]/80 max-w-md mt-4 md:mt-0 font-normal">
            With centralized fabrication yards in Ahmedabad and strategic liaison desks in Pune and Delhi NCR, PixelGrid deploys staging teams anywhere in India within 24 hours.
          </p>
        </div>

        {/* Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hubs.map((hub, idx) => (
            <div
              key={hub.city}
              className="bg-white rounded-2xl p-7 border border-[#063037]/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#063037]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#063037]/5 text-[#063037] border border-[#063037]/10">
                    HUB // 0{idx + 1}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-[#C45B2B]" />
                  <h3 className="text-2xl font-bold text-[#063037]">
                    {hub.city}
                  </h3>
                </div>

                <div className="text-xs font-mono text-[#C45B2B] font-semibold mb-3">
                  {hub.role}
                </div>

                <p className="text-xs sm:text-sm text-[#063037]/80 mb-5 leading-relaxed">
                  {hub.facility}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#063037]/10 text-xs">
                  <div className="flex items-center gap-2 text-[#063037]/80">
                    <UserCheck className="w-3.5 h-3.5 text-[#063037]/50" />
                    <span>Desk Lead: <strong>{hub.lead}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-[#063037]/80">
                    <Building2 className="w-3.5 h-3.5 text-[#063037]/50" />
                    <span>{hub.location}</span>
                  </div>
                </div>
              </div>

              {/* Hub Contact Action */}
              <div className="pt-6 mt-6 border-t border-[#063037]/10 flex items-center justify-between">
                <a
                  href={`tel:${hub.phone}`}
                  className="text-xs font-bold text-[#063037] hover:text-[#C45B2B] flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C45B2B]" />
                  <span>{hub.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${brandConfig.contacts.whatsapp.replace('+', '')}?text=Inquiry%20for%20${hub.city}%20PixelGrid%20Desk`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#063037]/60 hover:text-[#25D366] hover:bg-[#25D366]/10 rounded-lg transition-colors"
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
