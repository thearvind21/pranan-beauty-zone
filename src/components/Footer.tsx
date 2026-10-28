"use client";

import React from "react";
import { ArrowUp, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { BRAND, SERVICES } from "@/data/salonData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F2EBE5] border-t border-[#E6DCD5] text-charcoal pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#E6DCD5]">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif text-2xl tracking-[0.22em] text-charcoal uppercase font-normal">
                {BRAND.name}
              </span>
              <p className="text-[10px] tracking-[0.25em] uppercase text-taupe font-medium">
                {BRAND.descriptor}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-taupe leading-relaxed max-w-sm">
              &ldquo;A more thoughtful approach to beauty and self-care.&rdquo;
              A tranquil haven crafted exclusively for women to pause, refresh, and experience tailored beauty rituals.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#E6DCD5] flex items-center justify-center text-charcoal hover:text-rose hover:border-rose transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/?text=Hello%20Maison%20Belle`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#E6DCD5] flex items-center justify-center text-charcoal hover:text-rose hover:border-rose transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BRAND.contact.phone}`}
                className="w-9 h-9 rounded-full bg-white border border-[#E6DCD5] flex items-center justify-center text-charcoal hover:text-rose hover:border-rose transition-all duration-200"
                aria-label="Telephone Concierge"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal">
              Explore
            </p>
            <ul className="space-y-2 text-xs text-taupe">
              <li>
                <a href="#services" className="hover:text-rose transition-colors">
                  Signature Rituals
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-rose transition-colors">
                  Reserve Visit
                </a>
              </li>
              <li>
                <a href="#specialists" className="hover:text-rose transition-colors">
                  Our Specialists
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-rose transition-colors">
                  Studio Philosophy
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-rose transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rose transition-colors">
                  Concierge Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal">
              Rituals
            </p>
            <ul className="space-y-2 text-xs text-taupe">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-rose transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal">
              Studio Suite
            </p>
            <div className="space-y-2 text-xs text-taupe leading-relaxed">
              <p>{BRAND.contact.address}</p>
              <p>{BRAND.contact.cityState}</p>
              <p className="pt-1">
                <span className="font-medium text-charcoal">Phone: </span>
                {BRAND.contact.phone}
              </p>
              <p>
                <span className="font-medium text-charcoal">Concierge: </span>
                {BRAND.contact.email}
              </p>
              <p className="text-[11px] text-gold font-medium pt-1">
                Tues–Fri: 9am–7:30pm · Sat: 9am–6pm
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-taupe gap-4">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. Built as a luxury demonstration experience.
          </p>

          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-rose transition-colors">
              Privacy & Discretion
            </a>
            <span className="text-taupe/40">•</span>
            <a href="#contact" className="hover:text-rose transition-colors">
              Terms of Visit
            </a>
            <span className="text-taupe/40">•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-charcoal hover:text-rose font-medium transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
