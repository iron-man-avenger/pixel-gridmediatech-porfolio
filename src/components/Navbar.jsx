import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { brandConfig } from '../data/content';

export default function Navbar({ onOpenEstimator }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Capabilities", href: "#capabilities" },
    { name: "Production Flow", href: "#workflow" },
    { name: "Formats", href: "#formats" },
    { name: "Planner", href: "#planner" },
    { name: "Studio", href: "#studio" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(53,98,103,0.08)] py-2.5 px-5 sm:px-6 border border-[#356267]/15' 
          : 'bg-white/60 backdrop-blur-md py-3 px-5 sm:px-6 border border-[#356267]/10'
      }`}>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group focus:outline-none">
            <img 
              src="/pixelgrid-logo.svg" 
              alt="PixelGrid Media Tech" 
              className="h-7 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation Links (Breathable, Subtle Refero Style) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-[#41737c] hover:text-[#19383c] transition-colors relative py-1"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#356267] rounded-full transition-all duration-200 hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`https://wa.me/${brandConfig.contacts.whatsapp.replace('+', '')}?text=Hello%20PixelGrid%20Media%20Tech,%20we%20want%20to%20discuss%20an%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#356267] hover:text-[#19383c] hover:bg-[#c2f2f2]/40 rounded-full transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href={`tel:${brandConfig.contacts.primaryPhone}`}
              className="text-xs font-mono text-[#41737c] hover:text-[#19383c] flex items-center gap-1.5 transition-colors px-2.5 py-1.5 rounded-full hover:bg-[#c2f2f2]/30"
            >
              <Phone className="w-3.5 h-3.5 text-[#356267]" />
              <span>{brandConfig.contacts.primaryPhone}</span>
            </a>

            <button
              onClick={onOpenEstimator}
              className="px-4 py-2 bg-[#356267] hover:bg-[#19383c] text-white text-xs font-semibold rounded-full shadow-sm hover:shadow transition-all duration-200 flex items-center gap-1.5 group border border-[#356267]"
            >
              <span>Plan Event Brief</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#c2f2f2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEstimator}
              className="px-3 py-1.5 bg-[#356267] text-white text-xs font-semibold rounded-full shadow-sm"
            >
              Plan Event
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#356267] hover:bg-[#c2f2f2]/30 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Clean, Airy & Breathable) */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl border border-[#356267]/15 shadow-xl p-5 transition-all animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            <div className="text-[11px] font-mono text-[#356267] uppercase tracking-wider border-b border-[#356267]/10 pb-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#356267]" />
              <span>PixelGrid Media Tech Navigation</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl text-sm font-medium text-[#19383c] hover:bg-[#c2f2f2]/30 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#41737c]" />
              </a>
            ))}

            <div className="pt-3 border-t border-[#356267]/10 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full py-2.5 bg-[#356267] text-white font-semibold rounded-full flex items-center justify-center gap-1.5 text-xs shadow-md"
              >
                <span>Initiate Event Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#c2f2f2]" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${brandConfig.contacts.primaryPhone}`}
                  className="py-2 px-2 bg-[#f2fcf9] text-[#19383c] text-xs font-semibold rounded-full flex items-center justify-center gap-1.5 border border-[#356267]/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#356267]" />
                  <span>Call Direct</span>
                </a>
                <a
                  href={`https://wa.me/${brandConfig.contacts.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2 bg-[#25D366]/10 text-[#075E54] text-xs font-semibold rounded-full flex items-center justify-center gap-1.5 border border-[#25D366]/30"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
