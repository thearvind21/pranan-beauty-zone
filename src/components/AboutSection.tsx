"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, HeartHandshake, Shield, Leaf, ArrowRight } from "lucide-react";
import { BRAND } from "@/data/salonData";

interface AboutSectionProps {
  onExploreServices: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreServices }) => {
  return (
    <section
      id="about"
      aria-label="About Maison Belle"
      className="py-16 sm:py-24 bg-ivory border-b border-[#E6DCD5]/70 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Photo of Studio Interior */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden shadow-subtle border border-[#E6DCD5] bg-cream">
              <Image
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
                alt="Tranquil and elegant interior of Maison Belle salon suite"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-charcoal/10" />

              {/* Floating aesthetic feature badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-ivory/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/60 shadow-sm max-w-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-[11px] uppercase tracking-widest text-charcoal font-semibold">
                    The Sanctuary Philosophy
                  </span>
                </div>
                <p className="text-xs text-taupe leading-relaxed">
                  Private suites, soothing aromatherapy, and intentional scheduling to ensure you are never rushed.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Values */}
          <div className="lg:col-span-6 space-y-7">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[1px] bg-gold" />
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-rose uppercase">
                  {BRAND.aboutEyebrow}
                </p>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight leading-[1.15]">
                {BRAND.aboutHeadline}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-taupe leading-relaxed">
              {BRAND.aboutParagraph1}
            </p>

            <p className="text-sm sm:text-base text-taupe leading-relaxed">
              {BRAND.aboutParagraph2}
            </p>

            {/* Three Brand Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-cream/50 border border-[#E6DCD5]/80 space-y-1.5">
                <Shield className="w-4 h-4 text-gold" />
                <h3 className="font-serif text-base text-charcoal">Space for Women</h3>
                <p className="text-[11px] text-taupe leading-normal">
                  A sanctuary dedicated solely to female comfort and peace.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cream/50 border border-[#E6DCD5]/80 space-y-1.5">
                <Leaf className="w-4 h-4 text-gold" />
                <h3 className="font-serif text-base text-charcoal">Clean Formulations</h3>
                <p className="text-[11px] text-taupe leading-normal">
                  Organic, cruelty-free, and dermatologically vetted treatments.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cream/50 border border-[#E6DCD5]/80 space-y-1.5">
                <HeartHandshake className="w-4 h-4 text-gold" />
                <h3 className="font-serif text-base text-charcoal">Attentive Care</h3>
                <p className="text-[11px] text-taupe leading-normal">
                  In-depth consultations shaped around your unique lifestyle.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C99B95] text-white text-xs tracking-widest uppercase font-medium hover:bg-[#B68882] shadow-sm transition-all duration-200"
              >
                <span>Experience Our Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="text-xs uppercase tracking-widest text-charcoal font-semibold hover:text-rose transition-colors border-b border-charcoal/30 pb-0.5 hover:border-rose"
              >
                Inquire With Our Concierge
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
