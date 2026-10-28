"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface AnnouncementBarProps {
  onBookClick?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onBookClick }) => {
  return (
    <aside
      aria-label="Salon Announcement"
      className="bg-[#C99B95] text-white text-xs tracking-wider font-light transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
        {/* Message */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Sparkles className="w-3.5 h-3.5 text-cream/90 flex-shrink-0 hidden xs:inline" />
          <span className="text-[12px] md:text-[13px] tracking-wide font-normal">
            A little time for yourself. A beautiful experience awaits.
          </span>
        </div>

        {/* Action Link */}
        <a
          href="#booking"
          onClick={(e) => {
            if (onBookClick) {
              e.preventDefault();
              onBookClick();
            }
          }}
          className="inline-flex items-center gap-1.5 text-[11px] md:text-xs tracking-widest uppercase font-medium text-white hover:text-cream transition-colors duration-200 border-b border-white/40 pb-0.5 hover:border-white group"
        >
          <span>Book Your Appointment</span>
          <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </aside>
  );
};
