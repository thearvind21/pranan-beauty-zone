"use client";

import React, { useState } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BookingSection } from "@/components/BookingSection";
import { ServicesSection } from "@/components/ServicesSection";
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
      {/* 1. Slim Dusty-Rose Announcement Bar */}
      <AnnouncementBar onBookClick={scrollToBooking} />

      {/* 2. Refined Typographic Navigation */}
      <Navbar onBookClick={scrollToBooking} />

      {/* 3. Hero Section (Split Screen Editorial) */}
      <HeroSection
        onBookClick={scrollToBooking}
        onExploreServices={scrollToServices}
      />

      {/* 4. Appointment Booking Section (Directly Beneath Hero) */}
      <BookingSection
        selectedServiceId={selectedServiceId}
        onSelectService={(id) => setSelectedServiceId(id)}
      />

      {/* 5. Signature Beauty Services */}
      <ServicesSection onSelectService={handleSelectServiceFromCard} />

      {/* 6. Beauty Specialists */}
      <SpecialistsSection onRequestSpecialist={handleRequestSpecialist} />

      {/* 7. About Salon Sanctuary */}
      <AboutSection onExploreServices={scrollToServices} />

      {/* 8. Gallery with Accessible Lightbox */}
      <GallerySection />

      {/* 9. Client Testimonials */}
      <TestimonialsSection />

      {/* 10. Final Appointment CTA */}
      <AppointmentCTA onBookClick={scrollToBooking} />

      {/* 11. Contact Section */}
      <ContactSection />

      {/* 12. Footer */}
      <Footer />

      {/* 13. Floating WhatsApp Concierge */}
      <FloatingWhatsApp />
    </main>
  );
}
