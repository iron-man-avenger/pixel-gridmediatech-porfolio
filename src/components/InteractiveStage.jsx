import React, { useState } from 'react';
import { Monitor, Volume2, Sparkles, Check, ArrowRight, Video, Layers, Sliders } from 'lucide-react';

export default function InteractiveStage({ onOpenEstimator }) {
  const [activeTab, setActiveTab] = useState('conclave');

  const formats = {
    conclave: {
      id: 'conclave',
      tabLabel: 'Corporate Conclave & Summits',
      subtitle: 'Executive Conferences & AGMs',
      headline: 'Architectural Curved LED Stage with Vocal Clarity Acoustics',
      description: 'Engineered for executive summits, CXO roundtables, and statutory corporate AGMs. Features clean matte backdrops, speech-tuned line arrays, and seamless keynote multi-screen management.',
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80",
      specs: {
        ledWall: 'Curved P2.6 Ultra-Contrast Matte (Anti-Glare)',
        audio: 'L-Acoustics K2 Array + Shure Axient Digital Podium Microphones',
        lighting: 'Soft Key White Profiles + Subtle Architectural Up-lighting',
        playback: 'Seamless Watchout / Novastar 4K Multi-Input Switching'
      },
      tags: ['Anti-Glare Matte', 'Speech Clarity Rigging', 'Multi-Cam Stream Ready']
    },
    launch: {
      id: 'launch',
      tabLabel: 'Product Unveils & Reveals',
      subtitle: 'High-Impact Brand Experiential',
      headline: 'Dramatic Anamorphic 3D LED Displays & Motorized Light Reveals',
      description: 'Crafted for high-energy tech launches, commercial product reveals, and automobile unveils. Combines timecode-synced laser projections, kinetic moving heads, and synchronized unveil sequences.',
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80",
      specs: {
        ledWall: 'High-Brightness P1.9 Anamorphic Corner & Flat Canvases',
        audio: 'Dual Sub Bass + High-SPL Line Arrays for Punchy Audio',
        lighting: 'DMX Motorized Beam/Spot Movers + High-Power Laser Mapping',
        playback: 'Custom 4K Timecode Motion Video & Audio Sync Engine'
      },
      tags: ['Anamorphic 3D', 'Timecoded Lasers', 'Dramatic Reveal Stage']
    },
    dealer: {
      id: 'dealer',
      tabLabel: 'Dealer Meets & Gala Awards',
      subtitle: 'Large-Scale Conventions',
      headline: 'Arena-Scale Stagecraft with Immersive Visuals & Concert Sound',
      description: 'Turnkey stagecraft for annual dealer conventions, channel partner recognition ceremonies, and evening entertainment galas with multi-tier stages and synchronized spotlights.',
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
      specs: {
        ledWall: 'Multi-Tier Modular LED Backdrop with Walk-Through Portals',
        audio: 'Concert-Grade Sound Reinforcement with Delay Towers',
        lighting: 'GrandMA3 Programmed Moving Fixtures + Follow Spots',
        playback: 'Live Award Nominee Graphics & Real-Time Winner Triggers'
      },
      tags: ['Arena Scale', 'Gala Awards Rig', 'High-Capacity Audio']
    },
    pavilion: {
      id: 'pavilion',
      tabLabel: 'Tech Pavilions & Expo Stalls',
      subtitle: 'Spatial 3D Architecture',
      headline: 'Modular Exhibition Stalls with Touch-Interactive Media Pods',
      description: 'Designed for trade shows, industrial expos, and branded pop-up pavilions. Incorporates custom CNC wooden fabrication, LED video pillars, and interactive product demo stations.',
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
      specs: {
        ledWall: 'Integrated Slim LED Video Strips & 65" 4K Interactive Touch Pods',
        audio: 'Localized Directional Ceiling Sound Baffles',
        lighting: 'Crisp 4000K Neutral Showroom Fixtures & Accent Neon Accents',
        playback: 'Self-Service Touchscreen Interactive Product Brochures'
      },
      tags: ['Modular Fabrication', 'Interactive Touch', 'Expo Ready']
    }
  };

  const current = formats[activeTab];

  return (
    <section id="planner" className="py-20 sm:py-28 bg-[#f2fcf9] relative overflow-hidden bg-dot-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#356267]/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c2f2f2]/60 text-[#356267] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <Sliders className="w-3.5 h-3.5 text-[#356267]" />
              <span>Interactive Production Planner</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#19383c] tracking-tight">
              Configured For Your Event Format.
            </h2>
          </div>
          <p className="text-sm text-[#41737c] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            Select an event type below to inspect recommended stage architecture, visual resolution, and audio calibration.
          </p>
        </div>

        {/* Tab Pills (Refero / SmoothUI Style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {Object.values(formats).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 border flex items-center gap-2 ${
                activeTab === item.id
                  ? 'bg-[#356267] text-white border-[#356267] shadow-sm'
                  : 'bg-white/80 text-[#41737c] border-[#356267]/15 hover:bg-white hover:text-[#19383c]'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeTab === item.id ? 'bg-[#c2f2f2]' : 'bg-[#356267]/40'}`}></span>
              <span>{item.tabLabel}</span>
            </button>
          ))}
        </div>

        {/* Active Stage Blueprint Display */}
        <div className="bg-white rounded-3xl border border-[#356267]/10 p-6 sm:p-10 shadow-[0_8px_30px_rgba(53,98,103,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Image Card */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-slate-900 h-72 sm:h-96 shadow-md border border-[#356267]/10 group">
              <img
                src={current.image}
                alt={current.headline}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#19383c] text-xs font-mono font-semibold shadow-xs">
                  {current.subtitle}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono bg-black/40 backdrop-blur-xs p-2.5 rounded-xl border border-white/20">
                <span>FORMAT // </span>
                <span className="text-[#c2f2f2] font-semibold">{current.tabLabel}</span>
              </div>
            </div>

            {/* Right Column: Technical Specifications */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#effefb] text-[#356267] font-semibold border border-[#356267]/10 inline-block mb-3">
                  {current.subtitle}
                </span>
                <h3 className="text-xl sm:text-3xl font-bold text-[#19383c] leading-snug">
                  {current.headline}
                </h3>
                <p className="text-xs sm:text-sm text-[#41737c] mt-2 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="bg-[#effefb] p-3.5 rounded-2xl border border-[#356267]/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#356267] font-semibold">
                    <Monitor className="w-3.5 h-3.5" />
                    <span>LED DISPLAY RIG</span>
                  </div>
                  <div className="text-xs font-semibold text-[#19383c]">
                    {current.specs.ledWall}
                  </div>
                </div>

                <div className="bg-[#effefb] p-3.5 rounded-2xl border border-[#356267]/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#356267] font-semibold">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>AUDIO REINFORCEMENT</span>
                  </div>
                  <div className="text-xs font-semibold text-[#19383c]">
                    {current.specs.audio}
                  </div>
                </div>

                <div className="bg-[#effefb] p-3.5 rounded-2xl border border-[#356267]/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#356267] font-semibold">
                    <Layers className="w-3.5 h-3.5" />
                    <span>LIGHTING ARCHITECTURE</span>
                  </div>
                  <div className="text-xs font-semibold text-[#19383c]">
                    {current.specs.lighting}
                  </div>
                </div>

                <div className="bg-[#effefb] p-3.5 rounded-2xl border border-[#356267]/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#356267] font-semibold">
                    <Video className="w-3.5 h-3.5" />
                    <span>MEDIA SWITCHING</span>
                  </div>
                  <div className="text-xs font-semibold text-[#19383c]">
                    {current.specs.playback}
                  </div>
                </div>
              </div>

              {/* Tags & Action */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#356267]/10">
                <div className="flex flex-wrap gap-2">
                  {current.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#f2fcf9] text-[#19383c] text-xs font-mono border border-[#356267]/10"
                    >
                      <Check className="w-3 h-3 text-[#356267]" />
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenEstimator}
                  className="px-5 py-2.5 rounded-full bg-[#356267] hover:bg-[#19383c] text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
                >
                  <span>Build RFP For This Format</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c2f2f2]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
