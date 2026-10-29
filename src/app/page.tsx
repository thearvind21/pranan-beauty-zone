"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BookingSection } from "@/components/BookingSection";
import { SpecialistsSection } from "@/components/SpecialistsSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("3d-facial");

  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectServiceFromCard = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    scrollToBooking();
  };

  const handleRequestSpecialist = (name: string) => {
    scrollToBooking();
  };

  return (
    <main className="min-h-screen flex flex-col bg-ivory">
      {/* 1. Redesigned Clean Header (Without Generic Announcement Bar) */}
      <Navbar onBookClick={scrollToBooking} />

      {/* 2. Hero Section (Split Screen Editorial) */}
      <HeroSection
        onBookClick={scrollToBooking}
        onExploreServices={scrollToServices}
      />

      {/* 3. Services and Prices (Shown First so Visitors Browse Offerings) */}
      <ServicesSection onSelectService={handleSelectServiceFromCard} />

      {/* 4. Appointment Booking (Directly Beneath Services) */}
      <BookingSection
        selectedServiceId={selectedServiceId}
        onSelectService={(id) => setSelectedServiceId(id)}
      />

      {/* 5. Specialists / Team Section (Sample Demonstration Profiles) */}
      <SpecialistsSection onRequestSpecialist={handleRequestSpecialist} />

      {/* 6. About the Parlour */}
      <AboutSection onExploreServices={scrollToServices} />

      {/* 7. Gallery with Accessible Lightbox */}
      <GallerySection />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. Final Appointment Call to Action */}
      <AppointmentCTA onBookClick={scrollToBooking} />

      {/* 10. Contact Information & Location */}
      <ContactSection />

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Parlour Concierge */}
      <FloatingWhatsApp />
    </main>
  );
}
