import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Sparkles, Send, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { brandConfig } from '../data/content';

export default function EventEstimatorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState('agm');
  const [delegateSize, setDelegateSize] = useState('medium');
  const [selectedServices, setSelectedServices] = useState([
    'led_wall',
    'turnout_engine',
    'audio_acoustics'
  ]);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    city: 'Ahmedabad'
  });
  const [submitted, setSubmitted] = useState(false);

  const eventTypes = [
    { id: 'agm', name: 'Statutory AGM & Investor Meet' },
    { id: 'launch', name: '4K Experiential Product Unveil' },
    { id: 'roundtable', name: 'CXO Chatham House Roundtable' },
    { id: 'summit', name: 'Mega Dealer Summit & Convention' },
    { id: 'exhibition', name: 'Turnkey 3D Exhibition Pavilions' }
  ];

  const sizeOptions = [
    { id: 'compact', label: '50 - 200 CXOs' },
    { id: 'medium', label: '200 - 800 Delegates' },
    { id: 'large', label: '800 - 2,500 Delegates' },
    { id: 'mega', label: '2,500+ Mega Arena' }
  ];

  const serviceOptions = [
    { id: 'led_wall', label: '4K/8K Curved LED Wall & AV Rigging' },
    { id: 'turnout_engine', label: 'B2B Tele-RSVP Attendance Engine' },
    { id: 'audio_acoustics', label: 'Line-Array Acoustics & Redundant Sound' },
    { id: 'booth_fabrication', label: 'Custom CNC Exhibition Booth Fabrication' },
    { id: 'webcast_evoting', label: 'SEBI/MCA Compliant Hybrid Webcast' }
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
      colors: ['#063037', '#C45B2B', '#F7F4EA']
    });
  };

  const getWhatsAppBriefUrl = () => {
    const text = encodeURIComponent(
      `*PIXELGRID EVENT BRIEF (RFP)*\n` +
      `-------------------------------\n` +
      `*Company:* ${formData.companyName || 'Not specified'}\n` +
      `*Contact:* ${formData.contactName || 'Not specified'}\n` +
      `*Phone:* ${formData.phone || 'Not specified'}\n` +
      `*City:* ${formData.city}\n` +
      `*Event Type:* ${eventTypes.find(e => e.id === eventType)?.name}\n` +
      `*Attendance:* ${sizeOptions.find(s => s.id === delegateSize)?.label}\n` +
      `*Modules:* ${selectedServices.length} selected\n` +
      `-------------------------------\n` +
      `Please share proposal & schedule consultation.`
    );
    return `https://wa.me/${brandConfig.contacts.whatsapp.replace('+', '')}?text=${text}`;
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-[#F7F4EA] rounded-2xl shadow-2xl border border-[#063037]/20 p-5 sm:p-6 text-[#063037] my-auto max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-4 relative">
            <button
              type="button"
              onClick={resetAndClose}
              className="absolute top-0 right-0 p-1.5 rounded-full bg-[#063037]/5 hover:bg-[#063037]/15 text-[#063037] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto border-2 border-green-500 shadow-sm">
              <Check className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#063037]">
                Brief Submitted Successfully
              </h3>
              <p className="text-xs text-[#063037]/80 max-w-xs mx-auto">
                Our planning team for <strong>{formData.city}</strong> will contact you within 4 business hours.
              </p>
            </div>

            <div className="bg-[#EFE9DC] p-3 rounded-xl border border-[#063037]/10 text-xs font-mono text-left max-w-xs mx-auto space-y-1">
              <div><strong className="text-[#063037]">Client:</strong> {formData.companyName}</div>
              <div><strong className="text-[#063037]">Format:</strong> {eventTypes.find(e => e.id === eventType)?.name}</div>
              <div><strong className="text-[#063037]">Size:</strong> {sizeOptions.find(s => s.id === delegateSize)?.label}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 justify-center pt-2">
              <a
                href={getWhatsAppBriefUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Transmit via WhatsApp Now</span>
              </a>

              <button
                onClick={resetAndClose}
                className="px-5 py-2.5 bg-[#063037] text-white font-semibold text-xs rounded-xl hover:bg-[#031D21] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* 2-Step Compact Wizard */
          <div>
            {/* Modal Header */}
            <div className="mb-4 border-b border-[#063037]/10 pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#C45B2B] font-semibold uppercase flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>PixelGrid RFP Brief</span>
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#063037]/10 text-[#063037] font-semibold">
                    Step {step} of 2
                  </span>
                </div>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="p-1.5 rounded-full bg-[#063037]/5 hover:bg-[#063037]/15 text-[#063037] transition-colors -mr-1"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-lg font-bold text-[#063037] mt-1">
                {step === 1 ? "Event Format & Attendance" : "Production Modules & Details"}
              </h3>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                /* Step 1: Format & Attendance */
                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-[#063037] uppercase tracking-wider mb-1.5">
                      Select Event Format
                    </label>
                    <div className="space-y-1.5">
                      {eventTypes.map((type) => (
                        <button
                          type="button"
                          key={type.id}
                          onClick={() => setEventType(type.id)}
                          className={`w-full py-2 px-3 rounded-lg text-left border transition-all text-xs flex items-center justify-between ${
                            eventType === type.id
                              ? 'bg-[#063037] text-white border-[#063037] font-semibold shadow-xs'
                              : 'bg-white text-[#063037] border-[#063037]/15 hover:border-[#063037]/40'
                          }`}
                        >
                          <span>{type.name}</span>
                          {eventType === type.id && <Check className="w-3.5 h-3.5 text-[#C45B2B]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-[#063037] uppercase tracking-wider mb-1.5">
                      Target Executive Attendance
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {sizeOptions.map((size) => (
                        <button
                          type="button"
                          key={size.id}
                          onClick={() => setDelegateSize(size.id)}
                          className={`py-2 px-2.5 rounded-lg text-center border text-xs transition-all ${
                            delegateSize === size.id
                              ? 'bg-[#C45B2B] text-white border-[#C45B2B] font-semibold shadow-xs'
                              : 'bg-white text-[#063037] border-[#063037]/15 hover:border-[#063037]/40'
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
                      className="w-full py-2.5 bg-[#063037] hover:bg-[#031D21] text-white font-semibold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Continue to Modules & Dispatch</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C45B2B]" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Step 2: Modules & Contact Details */
                <div className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-[#063037] uppercase tracking-wider mb-1.5">
                      Required Services
                    </label>
                    <div className="space-y-1">
                      {serviceOptions.map((service) => {
                        const isSelected = selectedServices.includes(service.id);
                        return (
                          <div
                            key={service.id}
                            onClick={() => toggleService(service.id)}
                            className={`py-1.5 px-2.5 rounded-lg border text-xs cursor-pointer flex items-center justify-between transition-colors ${
                              isSelected
                                ? 'bg-[#063037]/5 border-[#063037]/40 font-semibold text-[#063037]'
                                : 'bg-white border-[#063037]/15 text-[#063037]/70'
                            }`}
                          >
                            <span>{service.label}</span>
                            <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                              isSelected ? 'bg-[#C45B2B] text-white font-bold' : 'border border-[#063037]/30'
                            }`}>
                              {isSelected ? '✓' : ''}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-[#063037] uppercase tracking-wider mb-1.5">
                      Organization & Contact Details
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        name="companyName"
                        required
                        placeholder="Company / Enterprise *"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-2.5 py-2 rounded-lg border border-[#063037]/20 bg-white text-xs text-[#063037] focus:outline-none focus:border-[#C45B2B]"
                      />
                      <input
                        type="text"
                        name="contactName"
                        required
                        placeholder="Your Name *"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full px-2.5 py-2 rounded-lg border border-[#063037]/20 bg-white text-xs text-[#063037] focus:outline-none focus:border-[#C45B2B]"
                      />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Direct Phone *"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-2.5 py-2 rounded-lg border border-[#063037]/20 bg-white text-xs text-[#063037] focus:outline-none focus:border-[#C45B2B]"
                      />
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-2.5 py-2 rounded-lg border border-[#063037]/20 bg-white text-xs text-[#063037] focus:outline-none focus:border-[#C45B2B]"
                      >
                        <option value="Ahmedabad">Ahmedabad (HQ)</option>
                        <option value="Pune">Pune (Western Hub)</option>
                        <option value="Delhi NCR">Delhi NCR (Northern Hub)</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Other">Other Metro</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-2.5 px-3 bg-[#063037]/5 hover:bg-[#063037]/10 text-[#063037] text-xs font-semibold rounded-xl border border-[#063037]/15 flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="flex-1 py-2.5 bg-[#C45B2B] hover:bg-[#B24E21] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit RFP Brief</span>
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
