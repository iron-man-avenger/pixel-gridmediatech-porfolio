import React from 'react';
import { brandConfig, studioInfo } from '../data/content';
import { MapPin, Phone, MessageSquare, Building, ArrowUpRight, Clock, ShieldCheck, Layers, Sparkles, Navigation } from 'lucide-react';

export default function RegionalHubs({ onOpenEstimator }) {
  return (
    <section id="studio" className="py-20 sm:py-28 bg-[#f2fcf9] relative bg-dot-subtle">
      {/* Invisible Anchor for backwards-compatibility with #hubs links */}
      <span id="hubs" className="sr-only">Hubs</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 border-b border-[#356267]/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c2f2f2]/60 text-[#356267] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#356267]" />
              <span>Verified Production Base</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#19383c] tracking-tight">
              Creative & Production Studio.
            </h2>
          </div>
          <p className="text-sm text-[#41737c] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            Headquartered in Prahlad Nagar, Ahmedabad. We house our core technical directors, 3D pre-viz suites, and direct stagecraft hardware under one roof.
          </p>
        </div>

        {/* Studio Showcase: 2-Column Bento Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Studio Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-[#356267]/10 shadow-[0_4px_24px_rgba(53,98,103,0.04)] hover:shadow-[0_16px_36px_rgba(53,98,103,0.08)] transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              {/* Studio Status Header */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#effefb] text-[#356267] border border-[#356267]/10">
                  STUDIO HQ // AHMEDABAD
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] font-mono font-medium text-[#41737c]">Active Operational Studio</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Building className="w-6 h-6 text-[#356267]" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#19383c]">
                    Ahmedabad Production Studio
                  </h3>
                </div>
                <div className="text-xs font-mono text-[#356267] font-semibold">
                  PixelGrid Media Tech Pvt. Ltd. • Corporate Road
                </div>
              </div>

              {/* Verified Address */}
              <div className="p-4 rounded-2xl bg-[#effefb]/80 border border-[#356267]/10 space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#356267] font-bold flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-[#356267]" />
                  <span>Physical Address & Landmark</span>
                </div>
                <p className="text-sm font-medium text-[#19383c] leading-relaxed">
                  {brandConfig.contacts.hqAddress}
                </p>
                <div className="text-xs text-[#41737c] font-mono pt-0.5">
                  Landmark: Prahlad Nagar Corporate Road • Ahmedabad, Gujarat 380015
                </div>
              </div>

              {/* Studio Core Capabilities */}
              <div className="space-y-2.5 pt-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#356267] font-bold">
                  What Happens At Our Studio:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#19383c]">
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[#356267] font-bold">✓</span>
                    <span><strong>Direct Hardware:</strong> Curved P1.9–P2.6 LED video walls & 4K media processors.</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[#356267] font-bold">✓</span>
                    <span><strong>3D CAD Pre-Viz:</strong> Stage walkthroughs & visual mapping simulations.</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[#356267] font-bold">✓</span>
                    <span><strong>Audio Engineering:</strong> Vocal line-array acoustics & digital sound consoles.</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[#356267] font-bold">✓</span>
                    <span><strong>Technical Directorship:</strong> On-site switchers & broadcast directorship.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Action Bar */}
            <div className="pt-6 mt-6 border-t border-[#356267]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                <a
                  href={`tel:${brandConfig.contacts.primaryPhone}`}
                  className="font-bold text-[#19383c] hover:text-[#356267] flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#356267]" />
                  <span>{brandConfig.contacts.primaryPhone}</span>
                </a>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <a
                  href={`tel:${brandConfig.contacts.secondaryPhone}`}
                  className="text-[#41737c] hover:text-[#356267] flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#41737c]" />
                  <span>{brandConfig.contacts.secondaryPhone}</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${brandConfig.contacts.whatsapp.replace('+', '')}?text=Hi%20PixelGrid%20Studio%2C%20I%20would%20like%20to%20discuss%20an%20event%20production%20requirement`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Studio</span>
                </a>

                <button
                  onClick={onOpenEstimator}
                  className="px-4 py-2 bg-[#356267] hover:bg-[#19383c] text-white rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <span>Brief Event</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#c2f2f2]" />
                </button>
              </div>
            </div>
          </div>

          {/* Side Column: Direct Staging Mobilization & Transparency */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            {/* Direct Mobilization Belt */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#356267]/10 shadow-[0_4px_20px_rgba(53,98,103,0.04)] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#356267] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#356267]" />
                <span>Zero Middlemen • Direct Gear</span>
              </div>
              <h4 className="text-lg font-bold text-[#19383c] leading-snug">
                Why An In-House Ahmedabad Directorship Matters:
              </h4>
              <p className="text-xs text-[#41737c] leading-relaxed">
                Many agencies broker and sub-rent AV hardware with hefty markups. At PixelGrid, you deal directly with the owners who direct the staging crew, program the 4K processors, and own the LED inventory.
              </p>

              <div className="pt-2 space-y-2.5 text-xs text-[#19383c]">
                <div className="flex items-start gap-2">
                  <span className="text-[#356267] font-bold">1.</span>
                  <span><strong>Direct Cost Transparency:</strong> Itemized hardware scopes with no hidden broker margins.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#356267] font-bold">2.</span>
                  <span><strong>Hands-On Directorship:</strong> Founders personally oversee your live console, camera feeds, and LED calibration.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#356267] font-bold">3.</span>
                  <span><strong>Zero Moiré Guarantee:</strong> High-refresh broadcast panels tuned specifically for crystal-clear video recordings.</span>
                </div>
              </div>
            </div>

            {/* Mobilization Radius Card */}
            <div className="bg-[#effefb] rounded-3xl p-6 border border-[#356267]/15 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#356267] uppercase tracking-wider">
                  Direct Mobilization Radius
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#c2f2f2] text-[#19383c] font-semibold">
                  WESTERN INDIA
                </span>
              </div>
              <p className="text-xs text-[#41737c] leading-relaxed">
                Rapid staging mobilization from Ahmedabad to Gandhinagar (Mahatma Mandir), Vadodara, Surat, Rajkot, Mumbai, and national venues across India on project brief.
              </p>
              <div className="pt-2 border-t border-[#356267]/10 flex items-center justify-between text-[11px] font-mono text-[#41737c]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#356267]" />
                  <span>Mon – Sat: 9:30 AM – 7:30 PM</span>
                </span>
                <span className="text-[#356267] font-semibold">24/7 on Event Dates</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
