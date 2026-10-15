import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Sparkles, Send, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { brandConfig } from '../data/content';

export default function EventEstimatorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState('conclave');
  const [delegateSize, setDelegateSize] = useState('medium');
  const [selectedServices, setSelectedServices] = useState([
    'led_wall',
    'audio_acoustics',
    'stage_design'
  ]);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    city: 'Ahmedabad'
  });
  const [submitted, setSubmitted] = useState(false);

  const eventTypes = [
    { id: 'conclave', name: 'Corporate Conclave & Summits' },
    { id: 'launch', name: 'Product Unveils & Brand Reveals' },
    { id: 'dealer', name: 'Dealer Meets & Gala Awards' },
    { id: 'pavilion', name: 'Interactive Tech Pavilions & Expos' }
  ];

  const sizeOptions = [
    { id: 'compact', label: '50 - 200 Attendees' },
    { id: 'medium', label: '200 - 600 Delegates' },
    { id: 'large', label: '600 - 1,500 Delegates' },
    { id: 'mega', label: '1,500+ Large Arena' }
  ];

  const serviceOptions = [
    { id: 'led_wall', label: '4K/8K Curved LED Wall & Visual Mapping' },
    { id: 'audio_acoustics', label: 'Line-Array Acoustics & Speech Reinforcement' },
    { id: 'stage_design', label: 'Spatial Stagecraft, Podiums & Set Fabrication' },
    { id: 'lighting', label: 'Moving Head Fixtures, Profiles & Laser Mapping' },
    { id: 'webcasting', label: 'Multi-Cam Live Production & Hybrid Webcast' }
  ];

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#356267', '#41737c', '#c2f2f2']
    });
  };

  const getWhatsAppBriefUrl = () => {
    const text = encodeURIComponent(
      `*PIXELGRID MEDIA TECH - EVENT BRIEF*\n` +
      `-----------------------------------\n` +
      `*Company:* ${formData.companyName || 'Not specified'}\n` +
      `*Contact:* ${formData.contactName || 'Not specified'}\n` +
      `*Phone:* ${formData.phone || 'Not specified'}\n` +
      `*City:* ${formData.city}\n` +
      `*Format:* ${eventTypes.find(e => e.id === eventType)?.name}\n` +
      `*Scale:* ${sizeOptions.find(s => s.id === delegateSize)?.label}\n` +
      `*Modules:* ${selectedServices.length} modules selected\n` +
      `-----------------------------------\n` +
      `Please provide recommended stage setup and direct quotation.`
    );
    return `https://wa.me/${brandConfig.contacts.whatsapp.replace('+', '')}?text=${text}`;
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#19383c]/60 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-[#effefb] rounded-3xl shadow-2xl border border-[#356267]/20 p-5 sm:p-7 text-[#19383c] my-auto max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-4 relative">
            <button
              type="button"
              onClick={resetAndClose}
              className="absolute top-0 right-0 p-1.5 rounded-full bg-[#356267]/10 hover:bg-[#356267]/20 text-[#19383c] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-12 h-12 rounded-full bg-[#c2f2f2] text-[#356267] flex items-center justify-center mx-auto border border-[#356267]/20 shadow-xs">
              <Check className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#19383c]">
                Event Brief Received
              </h3>
              <p className="text-xs text-[#41737c] max-w-xs mx-auto">
                Our technical director for <strong>{formData.city}</strong> will prepare a 3D stage preview and itemized scope within 4 hours.
              </p>
            </div>

            <div className="bg-white/80 p-3.5 rounded-2xl border border-[#356267]/10 text-xs font-mono text-left max-w-xs mx-auto space-y-1">
              <div><strong className="text-[#19383c]">Organization:</strong> {formData.companyName}</div>
              <div><strong className="text-[#19383c]">Format:</strong> {eventTypes.find(e => e.id === eventType)?.name}</div>
              <div><strong className="text-[#19383c]">Scale:</strong> {sizeOptions.find(s => s.id === delegateSize)?.label}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 justify-center pt-2">
              <a
                href={getWhatsAppBriefUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-xs rounded-full flex items-center justify-center gap-1.5 shadow"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send Brief via WhatsApp</span>
              </a>

              <button
                onClick={resetAndClose}
                className="px-5 py-2.5 bg-[#356267] text-white font-semibold text-xs rounded-full hover:bg-[#19383c] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* 2-Step Compact Wizard */
          <div>
            {/* Modal Header */}
            <div className="mb-4 border-b border-[#356267]/10 pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#356267] font-semibold uppercase flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#356267]" />
                    <span>PixelGrid Brief Planner</span>
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#c2f2f2] text-[#19383c] font-semibold border border-[#356267]/10">
                    Step {step} of 2
                  </span>
                </div>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="p-1.5 rounded-full bg-white hover:bg-slate-100 text-[#19383c] transition-colors border border-[#356267]/10"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-lg font-bold text-[#19383c] mt-1">
                {step === 1 ? "Event Format & Attendance Scale" : "Production Modules & Direct Dispatch"}
              </h3>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                /* Step 1: Format & Attendance */
                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-[#19383c] uppercase tracking-wider mb-1.5">
                      Select Event Format
                    </label>
                    <div className="space-y-1.5">
                      {eventTypes.map((type) => (
                        <button
                          type="button"
                          key={type.id}
                          onClick={() => setEventType(type.id)}
                          className={`w-full py-2.5 px-3 rounded-xl text-left border transition-all text-xs flex items-center justify-between ${
                            eventType === type.id
                              ? 'bg-[#356267] text-white border-[#356267] font-semibold shadow-xs'
                              : 'bg-white text-[#19383c] border-[#356267]/15 hover:border-[#356267]/40'
                          }`}
                        >
                          <span>{type.name}</span>
                          {eventType === type.id && <Check className="w-3.5 h-3.5 text-[#c2f2f2]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-[#19383c] uppercase tracking-wider mb-1.5">
                      Target Delegate Scale
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {sizeOptions.map((size) => (
                        <button
                          type="button"
                          key={size.id}
                          onClick={() => setDelegateSize(size.id)}
                          className={`py-2 px-2.5 rounded-xl text-center border text-xs transition-all ${
                            delegateSize === size.id
                              ? 'bg-[#356267] text-white border-[#356267] font-semibold shadow-xs'
                              : 'bg-white text-[#19383c] border-[#356267]/15 hover:border-[#356267]/40'
                          }`}
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-2.5 bg-[#356267] hover:bg-[#19383c] text-white font-semibold text-xs rounded-full shadow transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Continue to Production Modules</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#c2f2f2]" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Step 2: Modules & Contact Details */
                <div className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-[#19383c] uppercase tracking-wider mb-1.5">
                      Required Hardware & Production Modules
                    </label>
                    <div className="space-y-1">
                      {serviceOptions.map((service) => {
                        const isSelected = selectedServices.includes(service.id);
                        return (
                          <div
                            key={service.id}
                            onClick={() => toggleService(service.id)}
                            className={`py-2 px-3 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-colors ${
                              isSelected
                                ? 'bg-white border-[#356267] font-semibold text-[#19383c]'
                                : 'bg-white/60 border-[#356267]/15 text-[#41737c]'
                            }`}
                          >
                            <span>{service.label}</span>
                            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                              isSelected ? 'bg-[#356267] text-white font-bold' : 'border border-[#356267]/30'
                            }`}>
                              {isSelected ? '✓' : ''}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-[#19383c] uppercase tracking-wider mb-1.5">
                      Organization & Contact Details
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        name="companyName"
                        required
                        placeholder="Company Name *"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-xl border border-[#356267]/20 bg-white text-xs text-[#19383c] focus:outline-none focus:border-[#356267]"
                      />
                      <input
                        type="text"
                        name="contactName"
                        required
                        placeholder="Your Name *"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-xl border border-[#356267]/20 bg-white text-xs text-[#19383c] focus:outline-none focus:border-[#356267]"
                      />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Direct Phone *"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-xl border border-[#356267]/20 bg-white text-xs text-[#19383c] focus:outline-none focus:border-[#356267]"
                      />
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-xl border border-[#356267]/20 bg-white text-xs text-[#19383c] focus:outline-none focus:border-[#356267]"
                      >
                        <option value="Ahmedabad">Ahmedabad Hub</option>
                        <option value="Pune">Pune Hub</option>
                        <option value="Delhi-NCR">Delhi-NCR Hub</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Other">Other City</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-2.5 px-3.5 bg-white hover:bg-slate-100 text-[#19383c] text-xs font-semibold rounded-full border border-[#356267]/15 flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="flex-1 py-2.5 bg-[#356267] hover:bg-[#19383c] text-white font-bold text-xs rounded-full shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5 text-[#c2f2f2]" />
                      <span>Submit Event Brief</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
