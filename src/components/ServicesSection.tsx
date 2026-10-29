"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Tag, Check, Calendar, Info } from "lucide-react";
import { BRAND, SERVICES, SERVICE_CATEGORIES, ServiceItem } from "@/data/salonData";

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Facials",
    "Eyebrows and Face Grooming",
    "Hand and Leg Waxing",
    "Manicure and Pedicure",
    "Hair Care",
    "Mehendi",
  ];

  // Signature spotlight treatments with editorial images
  const signatureServices = useMemo(
    () => SERVICES.filter((s) => s.isSignature),
    []
  );

  // Group services by category
  const categoriesList = useMemo(() => {
    const list: { category: string; items: ServiceItem[] }[] = [];
    const targetCategories =
      activeCategory === "All"
        ? categories.filter((c) => c !== "All")
        : [activeCategory];

    targetCategories.forEach((cat) => {
      const items = SERVICES.filter((s) => s.category === cat);
      if (items.length > 0) {
        list.push({ category: cat, items });
      }
    });

    return list;
  }, [activeCategory, categories]);

  return (
    <section
      id="services"
      aria-label="Our Beauty Services"
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

          {/* Category Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-200 ${
                    isSelected
                      ? "bg-[#C99B95] text-white shadow-sm font-medium ring-2 ring-[#C99B95]/20 -translate-y-0.5"
                      : "bg-cream/60 text-charcoal hover:bg-cream border border-[#E6DCD5]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Signature Rituals (Shown when "All" or relevant category is selected) */}
        {activeCategory === "All" && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#E6DCD5]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal">
                  Signature Treatments
                </h3>
              </div>
              <span className="text-xs text-taupe uppercase tracking-wider">
                Popular Client Choices
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {signatureServices.slice(0, 3).map((service) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E6DCD5] shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image container */}
                    {service.image && (
                      <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-cream">
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-white/70 text-[10px] tracking-widest uppercase font-semibold text-charcoal shadow-sm">
                          {service.category}
                        </div>
                        <div className="absolute top-4 right-4 bg-[#342C29]/85 backdrop-blur-md px-3 py-1 rounded-full text-xs tracking-wider text-white font-medium">
                          {service.price}
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 space-y-2.5">
                      <h4 className="font-serif text-2xl text-charcoal group-hover:text-rose transition-colors duration-200">
                        {service.name}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-taupe leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="px-6 pb-6 pt-2">
                    <button
                      onClick={() => onSelectService(service.id)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full border border-[#D9CBC3] bg-[#FAF7F3] text-charcoal text-xs tracking-widest uppercase font-medium group-hover:bg-[#C99B95] group-hover:border-[#C99B95] group-hover:text-white transition-all duration-200"
                    >
                      <span>Book Service · {service.price}</span>
                      <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Complete Menu / Price List by Category (All 32 Services) */}
        <div className="space-y-12">
          {categoriesList.map(({ category, items }) => (
            <div
              key={category}
              className="bg-white/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E6DCD5] shadow-subtle"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-[#E6DCD5] gap-2">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                    Category Menu
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                    {category}
                  </h3>
                </div>
                <div className="text-xs text-taupe">
                  <span className="font-medium text-charcoal">{items.length}</span>{" "}
                  {items.length === 1 ? "service" : "services"} available
                </div>
              </div>

              {/* Service List Rows */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
                {items.map((service) => (
                  <div
                    key={service.id}
                    className="group py-3 border-b border-[#E6DCD5]/60 hover:border-gold/40 transition-colors flex flex-col justify-between"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-lg sm:text-xl text-charcoal group-hover:text-rose transition-colors font-medium">
                          {service.name}
                        </h4>
                        {service.isSignature && (
                          <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-cream text-gold border border-[#E6DCD5] font-semibold">
                            Popular
                          </span>
                        )}
                      </div>

                      {/* Dotted luxury leader line */}
                      <div className="hidden sm:block flex-grow border-b border-dotted border-[#D9CBC3]/80 mx-2" />

                      {/* Exact Price */}
                      <span className="text-base sm:text-lg font-serif font-bold text-charcoal flex-shrink-0 group-hover:text-rose transition-colors">
                        {service.price}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-1.5">
                      <p className="text-xs text-taupe leading-relaxed max-w-md">
                        {service.description}
                      </p>

                      <button
                        onClick={() => onSelectService(service.id)}
                        className="self-start sm:self-auto inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-charcoal font-semibold hover:text-rose transition-colors py-1 px-3 rounded-full hover:bg-cream border border-transparent hover:border-[#E6DCD5] flex-shrink-0"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>

                    {service.clarificationNote && (
                      <div className="mt-2 text-[11px] text-taupe/90 italic flex items-center gap-1.5">
                        <Info className="w-3 h-3 text-gold flex-shrink-0" />
                        <span>{service.clarificationNote}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Prompt */}
        <div className="mt-14 text-center bg-cream/40 rounded-2xl p-6 border border-[#E6DCD5] max-w-2xl mx-auto">
          <p className="font-serif text-lg text-charcoal mb-2">
            Ready to experience tailored beauty care?
          </p>
          <p className="text-xs sm:text-sm text-taupe mb-4">
            Select any service to plan your visit or enquire directly with our parlour team.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C99B95] text-white text-xs tracking-widest uppercase font-medium hover:bg-[#B68882] transition-colors shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Plan Your Appointment</span>
          </a>
        </div>
      </div>
    </section>
  );
};
