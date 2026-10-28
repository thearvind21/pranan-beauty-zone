"use client";

import React from "react";
import Image from "next/image";
import { Instagram, ArrowRight, Sparkles } from "lucide-react";
import { BRAND, SPECIALISTS } from "@/data/salonData";

interface SpecialistsSectionProps {
  onRequestSpecialist?: (name: string) => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({
  onRequestSpecialist,
}) => {
  return (
    <section
      id="specialists"
      aria-label="Beauty Specialists"
      className="py-16 sm:py-24 bg-cream/30 border-b border-[#E6DCD5]/70 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-gold" />
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-rose uppercase">
              {BRAND.specialistsEyebrow}
            </p>
            <span className="w-5 h-[1px] bg-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight">
            {BRAND.specialistsHeading}
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-taupe leading-relaxed">
            {BRAND.specialistsSupporting}
          </p>

          <p className="mt-2 text-[11px] uppercase tracking-widest text-taupe/70 font-medium">
            (Demonstration Specialist Profiles · Client team easily configurable)
          </p>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPECIALISTS.map((specialist) => (
            <div
              key={specialist.id}
              className="group bg-ivory rounded-3xl p-6 border border-[#E6DCD5] shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Circular portrait with luxury double ring */}
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 mb-5">
                <div className="absolute inset-0 rounded-full border border-gold/40 scale-105 group-hover:scale-110 group-hover:border-rose transition-all duration-300" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-sm bg-cream">
                  <Image
                    src={specialist.image}
                    alt={specialist.name}
                    fill
                    sizes="(max-width: 768px) 160px, 160px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Bio info */}
              <h3 className="font-serif text-2xl text-charcoal group-hover:text-rose transition-colors duration-200">
                {specialist.name}
              </h3>

              <p className="text-[11px] uppercase tracking-widest font-medium text-gold mt-1">
                {specialist.role}
              </p>

              <span className="inline-block px-3 py-1 bg-cream/70 rounded-full text-[10px] text-taupe font-medium mt-2">
                {specialist.specialty}
              </span>

              <p className="text-xs text-taupe mt-3 leading-relaxed">
                {specialist.bio}
              </p>

              {/* Action / Social Link */}
              <div className="mt-5 pt-4 border-t border-[#E6DCD5]/60 w-full flex items-center justify-between">
                <a
                  href={specialist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-taupe hover:text-rose transition-colors p-1.5 rounded-full hover:bg-cream"
                  aria-label={`${specialist.name}'s portfolio`}
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="#booking"
                  onClick={() => {
                    if (onRequestSpecialist) onRequestSpecialist(specialist.name);
                  }}
                  className="text-[11px] uppercase tracking-widest text-charcoal font-semibold hover:text-rose flex items-center gap-1 group/btn"
                >
                  <span>Request Visit</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
