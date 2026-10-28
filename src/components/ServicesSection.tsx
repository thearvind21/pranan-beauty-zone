"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Clock, Sparkles, Check } from "lucide-react";
import { BRAND, SERVICES, ServiceItem } from "@/data/salonData";

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Haircare", "Skin Wellness", "Artistry", "Nail Care", "Grooming", "Bridal"];

  const filteredServices =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section
      id="services"
      aria-label="Signature Beauty Services"
      className="py-16 sm:py-24 bg-ivory border-b border-[#E6DCD5]/70 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-gold" />
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-rose uppercase">
              {BRAND.servicesEyebrow}
            </p>
            <span className="w-5 h-[1px] bg-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight">
            {BRAND.servicesHeading}
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-taupe leading-relaxed">
            {BRAND.servicesSupporting}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#C99B95] text-white shadow-sm font-medium"
                    : "bg-cream/60 text-charcoal hover:bg-cream border border-[#E6DCD5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (3 Columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E6DCD5] shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image container */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-cream">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/70 text-[10px] tracking-widest uppercase font-medium text-charcoal">
                    {service.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-charcoal/75 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-wider text-white font-normal flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-gold" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-charcoal group-hover:text-rose transition-colors duration-200">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-[13px] text-taupe leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 space-y-1.5 border-t border-[#E6DCD5]/60">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-charcoal/80">
                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span className="text-[11px] sm:text-xs">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onSelectService(service.id)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full border border-[#D9CBC3] bg-[#FAF7F3] text-charcoal text-xs tracking-widest uppercase font-medium group-hover:bg-[#C99B95] group-hover:border-[#C99B95] group-hover:text-white transition-all duration-200"
                >
                  <span>Reserve This Ritual</span>
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-taupe mb-4">
            Looking for a combination ritual, pre-wedding consultation, or custom group reservation?
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-charcoal font-semibold hover:text-rose transition-colors duration-200 border-b border-charcoal/30 pb-0.5 hover:border-rose group"
          >
            <span>Explore All Bespoke Packages & Appointments</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
