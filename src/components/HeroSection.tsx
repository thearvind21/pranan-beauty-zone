"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/data/salonData";

interface HeroSectionProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookClick,
  onExploreServices,
}) => {
  return (
    <section
      aria-label="Welcome to Pranan Beauty Zone"
      className="relative bg-ivory overflow-hidden border-b border-[#E6DCD5]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[460px] lg:min-h-[540px]">
          {/* Left Column: 46% width on large screens */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center space-y-5 lg:space-y-6 z-10">
            {/* Small uppercase eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[1px] bg-gold" />
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-rose uppercase">
                {BRAND.heroEyebrow}
              </p>
            </div>

            {/* Main headline with elegant serif breaks */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] leading-[1.12] text-charcoal font-normal tracking-tight">
              Your Beauty, <br className="hidden sm:inline" />
              <span className="italic font-light text-[#8A6762]">Your Moment.</span>
            </h1>

            {/* Supporting paragraph: exactly 1 clear supporting sentence */}
            <p className="text-sm sm:text-base text-taupe leading-relaxed max-w-xl font-normal">
              {BRAND.heroSupporting}
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#C99B95] text-white text-xs tracking-[0.16em] uppercase font-medium shadow-sm hover:bg-[#B68882] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-[#D9CBC3] bg-transparent text-charcoal text-xs tracking-[0.16em] uppercase font-medium hover:bg-cream hover:border-taupe/40 transition-all duration-200"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Supporting line */}
            <div className="pt-2 border-t border-[#E6DCD5]/80">
              <p className="text-[10.5px] sm:text-xs tracking-wider text-taupe/90 uppercase font-medium flex items-center gap-2 flex-wrap">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold/70" />
                <span>Personalised Care</span>
                <span className="text-[#C99B95]">•</span>
                <span>Beauty Services</span>
                <span className="text-[#C99B95]">•</span>
                <span>A Moment for You</span>
              </p>
            </div>
          </div>

          {/* Right Column: 54% width on large screens */}
          <div className="lg:col-span-7 xl:col-span-7 relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px]">
            {/* Elegant framing border behind image */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 rounded-2xl border border-gold/30 bg-cream/50 -z-0" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-subtle border border-[#E6DCD5] bg-cream">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85"
                alt="Portrait of an elegant woman with natural, radiant skin and refined styling"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 650px"
                className="object-cover transition-transform duration-700 ease-out"
                style={{ objectPosition: "center 22%" }}
              />

              {/* Discreet luxury badge at bottom corner */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose animate-pulse" />
                <span className="text-[10.5px] uppercase tracking-wider text-charcoal font-medium">
                  Women&apos;s Beauty Parlour
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
