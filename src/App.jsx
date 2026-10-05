import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import TurnoutEngine from './components/TurnoutEngine';
import InteractiveStage from './components/InteractiveStage';
import CaseStudies from './components/CaseStudies';
import RegionalHubs from './components/RegionalHubs';
import Footer from './components/Footer';
import EventEstimatorModal from './components/EventEstimatorModal';
import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { brandConfig } from './data/content';

export default function App() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  const openEstimator = () => setIsEstimatorOpen(true);
  const closeEstimator = () => setIsEstimatorOpen(false);

  return (
    <div className="min-h-screen bg-[#F7F4EA] text-[#063037] flex flex-col selection:bg-[#C45B2B] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenEstimator={openEstimator} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenEstimator={openEstimator} />

        {/* Capabilities [ 01 ] to [ 05 ] */}
        <Capabilities onOpenEstimator={openEstimator} />

        {/* Turnout & Telemarketing Engine */}
        <TurnoutEngine onOpenEstimator={openEstimator} />

        {/* Interactive Stage Architecture Simulator */}
        <InteractiveStage onOpenEstimator={openEstimator} />

        {/* Enterprise Case Studies */}
        <CaseStudies onOpenEstimator={openEstimator} />

        {/* Regional Hubs & Liaison Command */}
        <RegionalHubs onOpenEstimator={openEstimator} />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenEstimator={openEstimator} />

      {/* Interactive RFP Brief Estimator Modal */}
      <EventEstimatorModal isOpen={isEstimatorOpen} onClose={closeEstimator} />

      {/* Mobile Sticky Quick Action Ribbon (Always accessible on phones) */}
      <aside aria-label="Quick actions" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#063037]/95 backdrop-blur-md border-t border-white/10 p-3 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${brandConfig.contacts.primaryPhone}`}
          className="flex-1 py-2.5 px-2 bg-white/10 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 active:bg-white/20"
        >
          <Phone className="w-3.5 h-3.5 text-[#C45B2B]" />
          <span>Call HQ</span>
        </a>

        <a
          href={`https://wa.me/${brandConfig.contacts.whatsapp.replace('+', '')}?text=Hello%20PixelGrid,%20we%20want%20to%20discuss%20a%20corporate%20event.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 bg-[#25D366]/20 text-[#25D366] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 active:bg-[#25D366]/30 border border-[#25D366]/30"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={openEstimator}
          className="flex-1 py-2.5 px-2 bg-[#C45B2B] text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1 shadow-md active:bg-[#B24E21]"
        >
          <span>Scope RFP</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </aside>
    </div>
  );
}
