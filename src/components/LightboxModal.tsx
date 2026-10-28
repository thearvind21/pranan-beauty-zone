"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/salonData";

interface LightboxModalProps {
  isOpen: boolean;
  currentIndex: number;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      } else if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % items.length);
      }
    },
    [isOpen, currentIndex, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between py-3 text-white">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-gold font-medium">
              {currentItem.category}
            </span>
            <span className="text-white/40">•</span>
            <span className="text-sm font-medium text-white/90">
              {currentItem.title}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-white/60 font-mono">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Display */}
        <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden bg-charcoal/40 shadow-2xl border border-white/10">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            onNavigate((currentIndex - 1 + items.length) % items.length)
          }
          className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-all duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-all duration-200"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
