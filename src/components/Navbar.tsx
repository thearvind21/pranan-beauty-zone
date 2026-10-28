"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, Sparkles } from "lucide-react";
import { BRAND } from "@/data/salonData";

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Specialists", href: "#specialists" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F3]/95 backdrop-blur-md border-b border-[#E6DCD5] shadow-sm py-3.5"
          : "bg-[#FAF7F3] border-b border-[#E6DCD5]/70 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Typographic Wordmark */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none"
            aria-label="Maison Belle Home"
          >
            <span className="font-serif text-2xl sm:text-2xl md:text-3xl tracking-[0.22em] text-charcoal uppercase font-normal transition-colors duration-200 group-hover:text-rose">
              {BRAND.name}
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-taupe font-medium -mt-0.5">
              Beauty & Wellness Studio
            </span>
          </a>

          {/* Centre: Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-7 lg:space-x-10"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-[13px] tracking-[0.16em] uppercase text-charcoal/80 hover:text-charcoal font-medium transition-all duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-rose hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Book Appointment CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C99B95] text-white text-xs tracking-[0.16em] uppercase font-medium shadow-sm hover:bg-[#B68882] transition-all duration-200 hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden space-x-2">
            <button
              onClick={onBookClick}
              className="px-3.5 py-1.5 rounded-full bg-[#C99B95] text-white text-[11px] tracking-wider uppercase font-medium"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-charcoal hover:bg-cream transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F3] border-b border-[#E6DCD5] px-4 pt-4 pb-6 space-y-3 transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm tracking-widest uppercase text-charcoal/80 hover:text-rose py-2 border-b border-cream font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#C99B95] text-white text-xs tracking-widest uppercase font-medium shadow-sm hover:bg-[#B68882]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Appointment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
