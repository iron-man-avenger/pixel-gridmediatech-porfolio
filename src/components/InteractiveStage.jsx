import React, { useState } from 'react';
import { Monitor, Volume2, ShieldCheck, Users, Clock, Check, ArrowRight } from 'lucide-react';

export default function InteractiveStage({ onOpenEstimator }) {
  const [activeMode, setActiveMode] = useState('agm');

  const modes = {
    agm: {
      id: 'agm',
      tabLabel: 'Statutory AGM & Investor Meet',
      subtitle: 'MCA/SEBI Compliant Statutory Production',
      headline: 'Flawless Dual-Stream Telecast & Electronic Voting Desks',
      description: 'Engineered specifically for statutory Annual General Meetings. Features confidential chairman isolation booths, zero-latency multi-location telecast, and synchronized e-voting terminals.',
      specs: {
        ledWall: '60ft P2.6 Ultra-Contrast Matte (Anti-Reflective)',
        audio: 'Acoustic Feedback Suppression + Shure Microflex Wireless Podiums',
        broadcasting: 'Bonded Tri-Carrier Satellite / Fiber 1Gbps Uplink',
        attendanceProtocol: 'Pre-Vetted Shareholder Biometric & RoC Registry Sync',
        turnoutTarget: '500-1,200 Shareholders + 25,000 Webcast Viewers'
      },
      tags: ['SEBI Compliant', 'Dual-Redundant Feed', 'Instant Scrutinizer Audit']
    },
    launch: {
      id: 'launch',
      tabLabel: '4K Experiential Product Unveil',
      subtitle: 'Kinetic Hardware & Immersive Reveal',
      headline: '3D Anamorphic LED Visuals With Hydraulic Vehicle Reveals',
      description: 'Designed for high-impact commercial launches, tech hardware unveils, and experiential media demos. Uses timecode-synced laser projections and motorized kinetic drop screens.',
      specs: {
        ledWall: '120ft Curved P1.9 Anamorphic 3D Corner Display',
        audio: 'L-Acoustics K2 360° Spatial Immersion Array',
        broadcasting: 'Broadcast-Grade 4K HDR Camera Jibs & Steadicam Teams',
        attendanceProtocol: 'VIP National Press & Key Tier-1 Distributors',
        turnoutTarget: '1,500-3,500 High-Profile Executives & Media'
      },
      tags: ['Anamorphic 3D', 'Timecode Lasers', 'Hydraulic Lift Stage']
    },
    roundtable: {
      id: 'roundtable',
      tabLabel: 'CXO Chatham House Roundtable',
      subtitle: 'Confidential Executive Symposium',
      headline: 'High-Security Acoustic Suites for Board & C-Suite Deliberation',
      description: 'Custom built for intimate discussions between Managing Directors, CXOs, and policymakers. High-density acoustic panelling guarantees total confidentiality with seamless digital presentations.',
      specs: {
        ledWall: 'Custom 24ft Flush-Mount OLED Media Presentation Ribbon',
        audio: 'Individually Gated Push-to-Talk Flush Table Microphones',
        broadcasting: 'Private Local Network (Offline Air-Gapped Recording)',
        attendanceProtocol: 'White-Glove Peer-to-Peer Calling & Personal Escort',
        turnoutTarget: '30-80 C-Suite Decision Makers (100% RSVP Verified)'
      },
      tags: ['Air-Gapped Privacy', 'White-Glove Service', 'Luxury Hospitality']
    },
    summit: {
      id: 'summit',
      tabLabel: 'Mega Dealer Summit & Gala (2,000+)',
      subtitle: 'Mass Convention & Award Spectacle',
      headline: 'Multi-Tier Kinetic Stagecraft With High-Volume Turnstiles',
      description: 'Turnkey arena-scale management for annual dealer conventions, channel partner recognitions, and gala dinner concerts with coordinated light choreography.',
      specs: {
        ledWall: '3-Tier Modular LED Backdrops with Integrated Entry Portals',
        audio: 'Dual Line Array Towers + Fill Arrays for 5,000+ Capacity',
        broadcasting: '8-Cam Telecast + Real-Time Live Drone Stage Tracking',
        attendanceProtocol: 'Flight Ticket Verification & RFID Badge Check-In',
        turnoutTarget: '1,800-4,000 Regional Distributors & Channel Partners'
      },
      tags: ['RFID Turnstiles', 'Multi-Tier Rigs', 'Mass Registration Engine']
    }
  };

  const current = modes[activeMode];

  return (
    <section id="simulator" className="py-20 sm:py-28 bg-[#063037] text-white relative overflow-hidden">
      {/* Precision Grid lines */}
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="text-xs font-mono text-[#C45B2B] tracking-wider uppercase mb-2">
              [ 03 // INTERACTIVE STAGE ARCHITECTURE ]
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F7F4EA] tracking-tight">
              Configured For Your Exact Corporate Format.
            </h2>
          </div>
          <p className="text-sm text-white/70 max-w-md mt-4 md:mt-0 font-normal">
            Every corporate event requires distinct acoustic calibration, display engineering, and security protocol. Switch modes below to inspect PixelGrid specifications.
          </p>
        </div>

        {/* Mode Selector Tabs (Mobile Responsive Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {Object.values(modes).map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`px-4 sm:px-5 py-3 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 border flex items-center gap-2 ${
                activeMode === mode.id
                  ? 'bg-[#C45B2B] text-white border-[#C45B2B] shadow-lg shadow-[#C45B2B]/20'
                  : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80"></span>
              <span>{mode.tabLabel}</span>
            </button>
          ))}
        </div>

        {/* Active Stage Blueprint Display */}
        <div className="bg-[#031D21] rounded-2xl border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Stage Specs & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#C45B2B]/20 text-[#C45B2B] font-semibold border border-[#C45B2B]/30">
                  {current.subtitle}
                </span>
                <span className="text-xs font-mono text-white/40">
                  REF // PG-ARC-{current.id.toUpperCase()}
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-bold text-white leading-snug">
                {current.headline}
              </h3>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                {current.description}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                    <Monitor className="w-3.5 h-3.5 text-[#C45B2B]" />
                    <span>LED & VISUAL CANVASES</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {current.specs.ledWall}
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                    <Volume2 className="w-3.5 h-3.5 text-[#C45B2B]" />
                    <span>ACOUSTIC CLARITY SYSTEM</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {current.specs.audio}
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C45B2B]" />
                    <span>BROADCAST & UPLINK</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {current.specs.broadcasting}
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                    <Users className="w-3.5 h-3.5 text-[#C45B2B]" />
                    <span>TURNKEY AUDIENCE TARGET</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#C45B2B]">
                    {current.specs.turnoutTarget}
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {current.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 text-white/80 text-xs font-mono border border-white/10"
                  >
                    <Check className="w-3 h-3 text-[#C45B2B]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Execution Metric Card */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#063037] p-6 sm:p-7 rounded-xl border border-white/15 relative">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono text-white/60">DEPLOYMENT METRICS</span>
                  <span className="text-xs font-mono text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    READY FOR DEPLOYMENT
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-white/60">Stage Rigging & Truss Load-In</span>
                      <span className="text-[#C45B2B]">Under 8 Hours</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#C45B2B] h-full w-4/5 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-white/60">B2B Tele-RSVP Calling Lead Time</span>
                      <span className="text-white">14 to 21 Days</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-white/60 h-full w-3/4 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-white/60">Backup Power & Uplink Redundancy</span>
                      <span className="text-green-400">100% Dual-Grid</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-green-400 h-full w-full rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Callout Box */}
                <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-xs text-white/80 leading-relaxed font-sans">
                  <strong className="text-white block mb-1">PixelGrid Guarantee:</strong>
                  If stage hardware or audio suffers a dropout during live session, our contractual SLA carries a 100% technical credit. Zero corporate failure tolerated.
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  onClick={onOpenEstimator}
                  className="w-full py-3.5 bg-[#C45B2B] hover:bg-[#B24E21] text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Build RFP For This Format</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
