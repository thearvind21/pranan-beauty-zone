"use client";

import React, { useState, useMemo } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  User,
  Phone,
  Mail,
  MessageSquare,
  Scissors,
} from "lucide-react";
import { BRAND, SERVICES, TIME_SLOTS, ServiceItem } from "@/data/salonData";

interface BookingSectionProps {
  selectedServiceId?: string;
  onSelectService?: (serviceId: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedServiceId,
  onSelectService,
}) => {
  // Generate dates for the next 12 days
  const availableDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
      const monthName = d.toLocaleDateString("en-US", { month: "short" });
      const dayNumber = d.getDate();
      const isoDate = d.toISOString().split("T")[0];
      // Skip Mondays as salon is closed
      const isMonday = d.getDay() === 1;
      dates.push({
        dayName,
        monthName,
        dayNumber,
        isoDate,
        isClosed: isMonday,
      });
    }
    return dates;
  }, []);

  const [serviceId, setServiceId] = useState<string>(
    selectedServiceId || SERVICES[0].id
  );

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedServiceId) {
      setServiceId(selectedServiceId);
    }
  }, [selectedServiceId]);

  // Default to first open date
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const firstOpen = availableDates.find((d) => !d.isClosed);
    return firstOpen ? firstOpen.isoDate : availableDates[0].isoDate;
  });

  const [selectedTime, setSelectedTime] = useState<string>(TIME_SLOTS[1]);
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [validationError, setValidationError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [confirmedData, setConfirmedData] = useState<any>(null);

  const currentService = useMemo(
    () => SERVICES.find((s) => s.id === serviceId) || SERVICES[0],
    [serviceId]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!fullName.trim()) {
      setValidationError("Please enter your name so our concierge can address you.");
      return;
    }
    if (!phone.trim()) {
      setValidationError("Please provide your contact phone or WhatsApp number.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedData({
        service: currentService.name,
        date: selectedDate,
        time: selectedTime,
        name: fullName.trim(),
        phone: phone.trim(),
        email: email.trim() || "Not provided",
        requests: specialRequests.trim() || "None specified",
        referenceCode: `MB-${Math.floor(100000 + Math.random() * 900000)}`,
      });
      setBookingConfirmed(true);
    }, 700);
  };

  const resetForm = () => {
    setBookingConfirmed(false);
    setConfirmedData(null);
    setFullName("");
    setPhone("");
    setEmail("");
    setSpecialRequests("");
  };

  return (
    <section
      id="booking"
      aria-label="Appointment Booking"
      className="py-14 sm:py-20 bg-cream/40 border-b border-[#E6DCD5]/80 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-6 border-b border-[#E6DCD5]/60 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[1px] bg-gold" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-rose uppercase">
                {BRAND.bookingEyebrow}
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight">
              {BRAND.bookingHeading}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-taupe font-normal">
              {BRAND.bookingSupporting}
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-ivory border border-[#E6DCD5] text-xs text-taupe">
            <span className="w-2 h-2 rounded-full bg-emerald-600/70" />
            <span>Demonstration Scheduling Interface</span>
          </div>
        </div>

        {/* Booking Card */}
        {bookingConfirmed && confirmedData ? (
          /* Confirmation State */
          <div className="bg-ivory border border-[#E6DCD5] rounded-3xl p-6 sm:p-10 shadow-card max-w-3xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-rose/15 text-rose mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9 text-[#C99B95]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
                Appointment Request Received
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal">
                Thank you, {confirmedData.name}
              </h3>
              <p className="text-sm text-taupe max-w-md mx-auto">
                We have received your requested visit time for demonstration purposes.
                Our concierge desk will review and confirm availability.
              </p>
            </div>

            {/* Request Summary */}
            <div className="bg-cream/60 border border-[#E6DCD5] rounded-2xl p-5 text-left max-w-lg mx-auto text-sm space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-[#E6DCD5]">
                <span className="text-taupe">Reference Code:</span>
                <span className="font-mono font-medium text-charcoal text-xs bg-white px-2.5 py-1 rounded border border-[#E6DCD5]">
                  {confirmedData.referenceCode}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-taupe">Ritual Selected:</span>
                <span className="font-medium text-charcoal">{confirmedData.service}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-taupe">Preferred Date:</span>
                <span className="font-medium text-charcoal">{confirmedData.date}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-taupe">Preferred Time:</span>
                <span className="font-medium text-charcoal">{confirmedData.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-taupe">Contact Number:</span>
                <span className="font-medium text-charcoal">{confirmedData.phone}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C99B95] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#B68882] transition-colors"
              >
                Plan Another Visit
              </button>
              <a
                href={`https://wa.me/?text=Hello%20Maison%20Belle,%20I%20have%20an%20appointment%20enquiry%20for%20${encodeURIComponent(
                  confirmedData.service
                )}%20on%20${confirmedData.date}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#D9CBC3] bg-white text-charcoal text-xs uppercase tracking-widest font-medium hover:bg-cream transition-colors text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          /* Main Interactive Booking Form */
          <form
            onSubmit={handleSubmit}
            className="bg-ivory border border-[#E6DCD5] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card space-y-10"
          >
            {/* Step 1: Select Service */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm uppercase tracking-[0.18em] font-medium text-charcoal flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cream text-charcoal text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  <span>Select Desired Service Ritual</span>
                </label>
                <span className="text-xs text-taupe font-normal">
                  {currentService.duration}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {SERVICES.map((srv) => {
                  const isSelected = srv.id === serviceId;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => {
                        setServiceId(srv.id);
                        if (onSelectService) onSelectService(srv.id);
                      }}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between min-h-[96px] ${
                        isSelected
                          ? "bg-[#C99B95] border-[#C99B95] text-white shadow-sm ring-2 ring-[#C99B95]/30"
                          : "bg-white/80 border-[#E6DCD5] text-charcoal hover:border-gold hover:bg-cream/40"
                      }`}
                    >
                      <span className="text-[11px] uppercase tracking-wider block opacity-80">
                        {srv.category}
                      </span>
                      <span className="text-xs sm:text-[13px] font-medium leading-tight mt-1 line-clamp-2">
                        {srv.name}
                      </span>
                      <span
                        className={`text-[10px] mt-2 block ${
                          isSelected ? "text-cream" : "text-taupe"
                        }`}
                      >
                        {srv.duration}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Preferred Date */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm uppercase tracking-[0.18em] font-medium text-charcoal flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cream text-charcoal text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  <span>Choose Preferred Date</span>
                </label>
                <span className="text-xs text-taupe flex items-center gap-1.5">
                  <CalendarIcon className="w-3.5 h-3.5 text-gold" />
                  <span>Next 14 Days</span>
                </span>
              </div>

              {/* Horizontal scrollable date pills */}
              <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar">
                {availableDates.map((d) => {
                  const isSelected = selectedDate === d.isoDate;
                  const isClosed = d.isClosed;

                  if (isClosed) {
                    return (
                      <div
                        key={d.isoDate}
                        className="flex-shrink-0 w-20 py-3 rounded-2xl border border-dashed border-[#E6DCD5] bg-cream/20 text-center opacity-40 cursor-not-allowed select-none"
                        title="Salon closed for private consultations"
                      >
                        <span className="text-[10px] uppercase font-semibold text-taupe block">
                          {d.dayName}
                        </span>
                        <span className="text-base font-serif text-charcoal block">
                          {d.dayNumber}
                        </span>
                        <span className="text-[9px] text-taupe/80 block uppercase">
                          Closed
                        </span>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={d.isoDate}
                      type="button"
                      onClick={() => setSelectedDate(d.isoDate)}
                      className={`flex-shrink-0 w-20 py-3.5 rounded-2xl border transition-all duration-200 text-center ${
                        isSelected
                          ? "bg-[#C99B95] border-[#C99B95] text-white shadow-sm ring-2 ring-[#C99B95]/30 -translate-y-0.5"
                          : "bg-white border-[#E6DCD5] text-charcoal hover:border-gold hover:bg-cream/40"
                      }`}
                    >
                      <span className="text-[10px] uppercase font-medium tracking-wider block opacity-85">
                        {d.dayName}
                      </span>
                      <span className="text-lg font-serif font-medium block my-0.5">
                        {d.dayNumber}
                      </span>
                      <span
                        className={`text-[10px] uppercase tracking-wider block ${
                          isSelected ? "text-cream" : "text-taupe"
                        }`}
                      >
                        {d.monthName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Choose Available Time */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm uppercase tracking-[0.18em] font-medium text-charcoal flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cream text-charcoal text-xs flex items-center justify-center font-bold">
                    3
                  </span>
                  <span>Choose Available Time Slot</span>
                </label>
                <span className="text-xs text-taupe flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  <span>Demonstration Timetable</span>
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
                {TIME_SLOTS.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-3 px-2 rounded-xl text-xs font-medium border text-center transition-all duration-200 ${
                        isSelected
                          ? "bg-[#C99B95] border-[#C99B95] text-white shadow-sm ring-2 ring-[#C99B95]/30 font-semibold"
                          : "bg-white border-[#E6DCD5] text-charcoal hover:border-gold hover:bg-cream/40"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div className="space-y-4 pt-2 border-t border-[#E6DCD5]/70">
              <label className="text-xs sm:text-sm uppercase tracking-[0.18em] font-medium text-charcoal flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cream text-charcoal text-xs flex items-center justify-center font-bold">
                  4
                </span>
                <span>Your Contact Details</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-[11px] uppercase tracking-wider text-taupe mb-1 font-medium"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-taupe/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-[#E6DCD5] bg-white text-xs sm:text-sm text-charcoal placeholder-taupe/50 focus:border-rose focus:ring-1 focus:ring-rose"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[11px] uppercase tracking-wider text-taupe mb-1 font-medium"
                  >
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-taupe/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +1 (555) 019-2831"
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-[#E6DCD5] bg-white text-xs sm:text-sm text-charcoal placeholder-taupe/50 focus:border-rose focus:ring-1 focus:ring-rose"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] uppercase tracking-wider text-taupe mb-1 font-medium"
                  >
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-taupe/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. eleanor@example.com"
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-[#E6DCD5] bg-white text-xs sm:text-sm text-charcoal placeholder-taupe/50 focus:border-rose focus:ring-1 focus:ring-rose"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="specialRequests"
                  className="block text-[11px] uppercase tracking-wider text-taupe mb-1 font-medium"
                >
                  Preferences or Special Requests (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-taupe/60 absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    id="specialRequests"
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Mention any sensitivities, bridal notes, or preferred stylist..."
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#E6DCD5] bg-white text-xs sm:text-sm text-charcoal placeholder-taupe/50 focus:border-rose focus:ring-1 focus:ring-rose resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Error Message if any */}
            {validationError && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Step 5: Summary & Submit Action */}
            <div className="pt-4 border-t border-[#E6DCD5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-taupe text-center sm:text-left">
                <span className="font-medium text-charcoal">Selected:</span>{" "}
                <span className="text-rose font-medium">{currentService.name}</span> on{" "}
                <span className="font-medium text-charcoal">{selectedDate}</span> at{" "}
                <span className="font-medium text-charcoal">{selectedTime}</span>
                <p className="text-[11px] text-taupe/80 mt-0.5">
                  Appointment requests are confirmed by our concierge team via WhatsApp or call.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C99B95] text-white text-xs tracking-[0.18em] uppercase font-medium shadow-sm hover:bg-[#B68882] transition-all duration-200 hover:shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Request...</span>
                  </>
                ) : (
                  <>
                    <span>Request Appointment</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
