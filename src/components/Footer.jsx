import React from 'react';
import { brandConfig } from '../data/content';
import { Phone, Mail, MapPin, Shield, ArrowUp, MessageSquare } from 'lucide-react';

export default function Footer({ onOpenEstimator }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#031D21] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden bg-grid-pattern-dark">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C45B2B]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Grid: Brand & Direct Inquiries */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <img 
              src="/pixelgrid-logo.svg" 
              alt="PixelGrid" 
              className="h-10 w-auto object-contain brightness-125" 
            />
            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              Architectural corporate stagecraft, 4K LED mapping, and a dedicated B2B attendance engine for enterprises across India.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-[#C45B2B]">
                ISO 9001:2015
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                SEBI/MCA Ready
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                Structural Rigging Certified
              </span>
            </div>
          </div>

          {/* Quick Hub Addresses */}
          <div className="md:col-span-4 space-y-3 text-xs text-white/80">
            <div className="font-mono text-xs uppercase tracking-wider text-[#C45B2B] font-semibold">
              Operational Command Desks
            </div>
            <div className="space-y-2">
              <div>
                <strong className="text-white block">Ahmedabad National HQ:</strong>
                <span className="text-white/60">{brandConfig.contacts.hqAddress}</span>
              </div>
              <div>
                <strong className="text-white block">Pune Western Desk:</strong>
                <span className="text-white/60">{brandConfig.contacts.puneAddress}</span>
              </div>
              <div>
                <strong className="text-white block">Delhi NCR Liaison:</strong>
                <span className="text-white/60">{brandConfig.contacts.delhiAddress}</span>
              </div>
            </div>
          </div>

          {/* Direct Connect */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-[#C45B2B] font-semibold">
              Direct Contact Lines
            </div>
            <div className="space-y-2 text-xs">
              <a 
                href={`tel:${brandConfig.contacts.primaryPhone}`} 
                className="flex items-center gap-2 text-white/80 hover:text-[#C45B2B] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C45B2B]" />
                <span>{brandConfig.contacts.primaryPhone} (HQ Desk)</span>
              </a>
              <a 
                href={`tel:${brandConfig.contacts.secondaryPhone}`} 
                className="flex items-center gap-2 text-white/80 hover:text-[#C45B2B] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C45B2B]" />
                <span>{brandConfig.contacts.secondaryPhone} (Regional Desk)</span>
              </a>
              <a 
                href={`mailto:${brandConfig.contacts.email}`} 
                className="flex items-center gap-2 text-white/80 hover:text-[#C45B2B] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C45B2B]" />
                <span>{brandConfig.contacts.email}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEstimator}
                className="w-full py-2.5 bg-[#C45B2B] hover:bg-[#B24E21] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                <span>Initiate Corporate Brief (RFP)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} {brandConfig.legalName} All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>GRID SYSTEM // VER 4.2</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
