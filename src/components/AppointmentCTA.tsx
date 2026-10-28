"use client";

import React from "react";
import { Calendar, MessageCircle, Sparkles } from "lucide-react";
import { BRAND } from "@/data/salonData";

interface AppointmentCTAProps {
  onBookClick: () => void;
}

export const AppointmentCTA: React.FC<AppointmentCTAProps> = ({ onBookClick }) => {
  return (
    <section
      aria-label="Appointment Call to Action"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#F2EBE5] to-[#FAF7F3] border-b border-[#E6DCD5]/80 relative overflow-hidden"
    >
      {/* Decorative luxury watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] md:text-[220px] font-serif font-light text-rose/5 select-none pointer-events-none whitespace-nowrap">
        MAISON BELLE
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-7">
        <div className="inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-gold" />
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-rose uppercase">
            BEGIN YOUR EXPERIENCE
          </p>
          <Sparkles className="w-4 h-4 text-gold" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal font-normal tracking-tight">
          {BRAND.ctaHeadline}
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-taupe max-w-2xl mx-auto leading-relaxed">
          {BRAND.ctaSupporting}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C99B95] text-white text-xs tracking-[0.18em] uppercase font-medium shadow-sm hover:bg-[#B68882] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Request an Appointment</span>
          </button>

          <a
            href={`https://wa.me/?text=Hello%20Maison%20Belle,%20I%20would%20like%20to%20inquire%20about%20your%20beauty%20services%20and%20availability.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-[#B49A70]/60 bg-white/90 text-charcoal text-xs tracking-[0.18em] uppercase font-medium hover:bg-cream transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>Chat With Us</span>
          </a>
        </div>

        <p className="text-xs text-taupe/80 tracking-wider">
          Complimentary warm organic tea & tailored consultation included with all appointments.
        </p>
      </div>
    </section>
  );
};
