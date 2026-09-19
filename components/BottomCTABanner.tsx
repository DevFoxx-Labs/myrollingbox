"use client";

import React from "react";
import { Phone } from "lucide-react";

interface BottomCTABannerProps {
  onOpenBookingModal: () => void;
}

export default function BottomCTABanner({ onOpenBookingModal }: BottomCTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Headline */}
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Ready to Move?<br className="hidden sm:block" /> Get Your Free Quote Today!
            </h2>
            <p className="text-xs sm:text-sm text-red-100 font-medium">
              Join 1,00,000+ happy families who moved safely with MyRollingBox.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 relative">
            
            {/* Handwritten annotation top right */}
            <div className="hidden sm:block absolute -top-8 -right-4 handwritten-text text-xs text-white transform rotate-6">
              New Home, New Memories ⤵
            </div>

            <button
              onClick={onOpenBookingModal}
              className="bg-white text-slate-900 font-extrabold text-xs px-7 py-3.5 rounded-full hover:bg-slate-100 transition-colors shadow-lg cursor-pointer flex items-center gap-1.5"
            >
              <span>Get Free Quote</span>
              <span>→</span>
            </button>

            <a
              href="tel:+919876543210"
              className="border-1.5 border-white text-white font-bold text-xs px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>+91 98765 43210</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
