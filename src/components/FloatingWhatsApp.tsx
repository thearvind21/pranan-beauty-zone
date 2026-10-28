"use client";

import React, { useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-elevated border border-[#E6DCD5] p-4 text-xs space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-[#E6DCD5]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-serif text-sm font-medium text-charcoal">
                Maison Belle Concierge
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-taupe hover:text-charcoal p-1"
              aria-label="Close chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-taupe leading-relaxed">
            Welcome to Maison Belle. How may we assist with your beauty ritual or appointment planning today?
          </p>

          <a
            href="https://wa.me/?text=Hello%20Maison%20Belle,%20I%20have%20an%20enquiry%20regarding%20salon%20appointments."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs tracking-wider uppercase transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#342C29] text-white shadow-card hover:bg-charcoal-light hover:shadow-elevated transition-all duration-200 group"
        aria-label="Chat with Concierge"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose"></span>
        </span>
        <span className="text-xs uppercase tracking-widest font-medium hidden sm:inline">
          Studio Concierge
        </span>
        <MessageCircle className="w-4 h-4 text-rose group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};
