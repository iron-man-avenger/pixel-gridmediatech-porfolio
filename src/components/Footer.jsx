import React from 'react';
import { brandConfig } from '../data/content';
import { Phone, Mail, MapPin, ArrowUp, MessageSquare, Sparkles } from 'lucide-react';

export default function Footer({ onOpenEstimator }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#19383c] text-white pt-16 pb-12 border-t border-[#356267]/30 relative overflow-hidden">
      {/* Background Subtle Mint Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c2f2f2]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Grid: Brand & Direct Inquiries */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <img 
              src="/pixelgrid-logo.svg" 
              alt="PixelGrid Media Tech" 
              className="h-9 w-auto object-contain brightness-125" 
            />
            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              A fresh, agile experiential agency designing curved 4K LED environments, vocal acoustics, and brand pop-ups across India.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#c2f2f2]">
                In-House Technical Directorship
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                P1.9 – P2.6 Ultra-Fine Pitch
              </span>
            </div>
          </div>

          {/* Quick Hub Addresses */}
          <div className="md:col-span-4 space-y-3 text-xs text-white/80">
            <div className="font-mono text-xs uppercase tracking-wider text-[#c2f2f2] font-semibold">
              Operational Presence
            </div>
            <div className="space-y-2">
              <div>
                <strong className="text-white block">Ahmedabad Production Studio:</strong>
                <span className="text-white/60">{brandConfig.contacts.hqAddress}</span>
              </div>
              <div>
                <strong className="text-white block">Pune Liaison Desk:</strong>
                <span className="text-white/60">{brandConfig.contacts.puneAddress}</span>
              </div>
              <div>
                <strong className="text-white block">Delhi-NCR Coordination:</strong>
                <span className="text-white/60">{brandConfig.contacts.delhiAddress}</span>
              </div>
            </div>
          </div>

          {/* Direct Connect */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-[#c2f2f2] font-semibold">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs">
              <a 
                href={`tel:${brandConfig.contacts.primaryPhone}`} 
                className="flex items-center gap-2 text-white/80 hover:text-[#c2f2f2] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c2f2f2]" />
                <span>{brandConfig.contacts.primaryPhone}</span>
              </a>
              <a 
                href={`mailto:${brandConfig.contacts.email}`} 
                className="flex items-center gap-2 text-white/80 hover:text-[#c2f2f2] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#c2f2f2]" />
                <span>{brandConfig.contacts.email}</span>
              </a>
              <a 
                href={`https://wa.me/${brandConfig.contacts.whatsapp.replace('+', '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-[#25D366] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEstimator}
                className="w-full py-2.5 bg-[#356267] hover:bg-[#41737c] text-white text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-1.5 shadow-sm border border-white/10"
              >
                <span>Initiate Event Brief</span>
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
            <span>PIXELGRID MEDIA TECH // STUDIO</span>
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
