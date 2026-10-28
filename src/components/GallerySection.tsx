"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Sparkles } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/salonData";
import { LightboxModal } from "./LightboxModal";

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const categories = ["All", "Interiors", "Hair Styling", "Skincare", "Makeup", "Bridal"];

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="gallery"
      aria-label="Salon Gallery"
      className="py-16 sm:py-24 bg-cream/25 border-b border-[#E6DCD5]/70 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-gold" />
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-rose uppercase">
              STUDIO ATMOSPHERE
            </p>
            <span className="w-5 h-[1px] bg-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight">
            The Maison Experience
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-taupe leading-relaxed">
            A visual curation of our tranquil suites, refined artistry, and thoughtful beauty rituals.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs tracking-wider uppercase transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#C99B95] text-white shadow-sm font-medium"
                    : "bg-white/80 text-charcoal hover:bg-cream border border-[#E6DCD5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry/Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-cream border border-[#E6DCD5] shadow-subtle hover:shadow-card transition-all duration-300"
            >
              <div className="relative w-full h-80 sm:h-96">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/60 text-[10px] tracking-widest uppercase font-medium text-charcoal shadow-sm">
                  {item.category}
                </div>

                {/* View Icon & Title overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-gold font-medium">
                        {item.category}
                      </p>
                      <h3 className="font-serif text-lg font-medium">
                        {item.title}
                      </h3>
                    </div>
                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photography note */}
        <p className="mt-8 text-center text-[11px] text-taupe/80 uppercase tracking-widest font-light">
          (Demonstration gallery photography · Authentic salon imagery will be placed upon client provision)
        </p>

        {/* Lightbox component */}
        <LightboxModal
          isOpen={lightboxOpen}
          currentIndex={activeImageIndex}
          items={filteredItems}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(newIdx) => setActiveImageIndex(newIdx)}
        />
      </div>
    </section>
  );
};
