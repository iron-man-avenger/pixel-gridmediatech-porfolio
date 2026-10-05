import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { brandConfig } from '../data/content';

export default function Navbar({ onOpenEstimator }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Capabilities", href: "#capabilities" },
    { name: "Turnout Engine", href: "#turnout" },
    { name: "4K Stagecraft", href: "#simulator" },
    { name: "Case Studies", href: "#portfolio" },
    { name: "Command Hubs", href: "#hubs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F7F4EA]/95 backdrop-blur-md shadow-md py-3 border-b border-[#063037]/10' 
          : 'bg-[#F7F4EA]/90 backdrop-blur-sm py-4 border-b border-[#063037]/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo (Pure Vector SVG) */}
          <a href="#" className="flex items-center group focus:outline-none">
            <img 
              src="/pixelgrid-logo.svg" 
              alt="PixelGrid Events • Experiences • Beyond" 
              className="h-8 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </a>

          {/* Clean Desktop Navigation Links (Single-line, luxury spacing) */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-[#063037]/75 hover:text-[#063037] transition-colors relative py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C45B2B] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${brandConfig.contacts.primaryPhone}`}
              className="text-xs font-mono text-[#063037]/70 hover:text-[#C45B2B] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C45B2B]" />
              <span>{brandConfig.contacts.primaryPhone}</span>
            </a>

            <button
              onClick={onOpenEstimator}
              className="px-4 py-2 bg-[#063037] hover:bg-[#031D21] text-white text-xs font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center gap-1.5 group border border-[#063037]"
            >
              <span>Initiate RFP</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C45B2B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger & Quick RFP */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEstimator}
              className="px-3 py-1.5 bg-[#C45B2B] text-white text-xs font-semibold rounded-md shadow-sm"
            >
              Initiate RFP
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#063037] hover:bg-[#063037]/10 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Clean & Minimal) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[58px] bg-[#F7F4EA] border-b border-[#063037]/15 shadow-2xl p-6 transition-all animate-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-60px)] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-medium text-[#063037] hover:bg-[#063037]/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#063037]/40" />
              </a>
            ))}

            <div className="pt-4 border-t border-[#063037]/10 flex flex-col space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full py-3 bg-[#063037] text-white font-semibold rounded-lg flex items-center justify-center gap-2 text-xs shadow-md"
              >
                <span>Initiate Corporate Brief (RFP)</span>
                <ArrowUpRight className="w-4 h-4 text-[#C45B2B]" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${brandConfig.contacts.primaryPhone}`}
                  className="py-2.5 px-2 bg-white text-[#063037] text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 border border-[#063037]/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C45B2B]" />
                  <span>Call HQ Desk</span>
                </a>
                <a
                  href={`https://wa.me/${brandConfig.contacts.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-2 bg-[#25D366]/10 text-[#075E54] text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 border border-[#25D366]/30"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp RSVP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
