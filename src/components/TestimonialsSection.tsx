"use client";

import React from "react";
import { Star, Sparkles } from "lucide-react";
import { BRAND, TESTIMONIALS } from "@/data/salonData";

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      aria-label="Client Testimonials"
      className="py-16 sm:py-24 bg-ivory border-b border-[#E6DCD5]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-gold" />
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-rose uppercase">
              {BRAND.testimonialsEyebrow}
            </p>
            <span className="w-5 h-[1px] bg-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight">
            {BRAND.testimonialsHeading}
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-taupe leading-relaxed">
            Reflections from women who have made Maison Belle their personal ritual of wellness and care.
          </p>

          <p className="mt-2 text-[11px] uppercase tracking-widest text-taupe/70 font-medium">
            (Sample demonstration feedback · Configurable with approved client reviews)
          </p>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream/40 rounded-3xl p-8 border border-[#E6DCD5] shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5-star subtle gold rating */}
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-lg sm:text-xl text-charcoal leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author & Service */}
              <div className="pt-6 mt-6 border-t border-[#E6DCD5]/70 flex items-center justify-between">
                <div>
                  <p className="font-serif text-base text-charcoal font-medium">
                    {testimonial.author}
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-taupe mt-0.5">
                    {testimonial.service}
                  </p>
                </div>

                <span className="text-[10px] tracking-wider uppercase px-2.5 py-1 bg-white rounded-full text-gold font-medium border border-[#E6DCD5]">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
