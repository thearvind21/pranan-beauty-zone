"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { BRAND, SERVICES } from "@/data/salonData";

export const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICES[0].name);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setErrorMessage("Please enter your contact number or WhatsApp.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Location"
      className="py-16 sm:py-24 bg-ivory border-b border-[#E6DCD5]/70 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-gold" />
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-rose uppercase">
              REACH OUT
            </p>
            <span className="w-5 h-[1px] bg-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight">
            We look forward to welcoming you.
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-taupe leading-relaxed">
            Have questions about our rituals or wish to coordinate a private appointment? Connect directly with our concierge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Salon Information & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Salon Details Box */}
            <div className="bg-cream/40 rounded-3xl p-7 border border-[#E6DCD5] space-y-6">
              <h3 className="font-serif text-2xl text-charcoal">
                Studio Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">Studio Address</p>
                    <p className="text-taupe mt-0.5">{BRAND.contact.address}</p>
                    <p className="text-taupe">{BRAND.contact.cityState}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">Direct Concierge</p>
                    <a
                      href={`tel:${BRAND.contact.phone}`}
                      className="text-taupe hover:text-rose transition-colors"
                    >
                      {BRAND.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MessageCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">WhatsApp Direct</p>
                    <a
                      href={`https://wa.me/?text=Hello%20Maison%20Belle`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-taupe hover:text-rose transition-colors"
                    >
                      {BRAND.contact.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">Email Inquiries</p>
                    <a
                      href={`mailto:${BRAND.contact.email}`}
                      className="text-taupe hover:text-rose transition-colors"
                    >
                      {BRAND.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-4 border-t border-[#E6DCD5]/80 space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold" />
                  <span className="text-xs uppercase tracking-wider font-medium text-charcoal">
                    Salon Hours
                  </span>
                </div>
                <div className="space-y-1.5 text-xs">
                  {BRAND.contact.hours.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-taupe">
                      <span>{item.days}</span>
                      <span className="font-medium text-charcoal">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quiet studio amenities note */}
            <div className="p-5 rounded-2xl bg-ivory border border-[#E6DCD5] space-y-2">
              <span className="text-[11px] uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Guest Amenities</span>
              </span>
              <p className="text-xs text-taupe leading-relaxed">
                Complimentary underground valet parking, private waiting lounge, organic botanical refreshments, and high-speed Wi-Fi provided.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E6DCD5] shadow-subtle">
              <div className="mb-6">
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                  Send an Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-taupe mt-1">
                  Leave your details and preferences. Our concierge responds promptly within studio hours.
                </p>
              </div>

              {isSuccess ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-cream text-rose mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#C99B95]" />
                  </div>
                  <h4 className="font-serif text-2xl text-charcoal">
                    Message Received
                  </h4>
                  <p className="text-xs sm:text-sm text-taupe max-w-sm mx-auto">
                    Thank you, {name}. Your demonstration enquiry has been registered. For real deployment, this connects to your salon's email or CRM.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setName("");
                      setPhone("");
                      setMessage("");
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#C99B95] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#B68882]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-taupe mb-1 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Charlotte Dubois"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E6DCD5] bg-ivory/50 text-xs sm:text-sm text-charcoal placeholder-taupe/40 focus:border-rose focus:ring-1 focus:ring-rose"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-taupe mb-1 font-medium">
                        Contact Number / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 012-3456"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E6DCD5] bg-ivory/50 text-xs sm:text-sm text-charcoal placeholder-taupe/40 focus:border-rose focus:ring-1 focus:ring-rose"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-taupe mb-1 font-medium">
                      Service of Interest
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E6DCD5] bg-ivory/50 text-xs sm:text-sm text-charcoal focus:border-rose focus:ring-1 focus:ring-rose"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.duration})
                        </option>
                      ))}
                      <option value="Custom Consultation">Custom Consultation / Multiple Services</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-taupe mb-1 font-medium">
                        Preferred Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E6DCD5] bg-ivory/50 text-xs sm:text-sm text-charcoal focus:border-rose focus:ring-1 focus:ring-rose"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-taupe mb-1 font-medium">
                        Preferred Time of Day
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E6DCD5] bg-ivory/50 text-xs sm:text-sm text-charcoal focus:border-rose focus:ring-1 focus:ring-rose"
                      >
                        <option value="">Any time available</option>
                        <option value="Morning (9:30 AM - 12:00 PM)">Morning (9:30 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                        <option value="Evening (4:00 PM - 7:30 PM)">Evening (4:00 PM - 7:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-taupe mb-1 font-medium">
                      Message or Inquiry Notes
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share any special preferences, bridal considerations, or questions..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E6DCD5] bg-ivory/50 text-xs sm:text-sm text-charcoal placeholder-taupe/40 focus:border-rose focus:ring-1 focus:ring-rose resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#C99B95] text-white text-xs tracking-widest uppercase font-medium hover:bg-[#B68882] transition-colors shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Salon Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
