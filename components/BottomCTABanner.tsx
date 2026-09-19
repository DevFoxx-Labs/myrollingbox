"use client";

import React from "react";
import { Phone, ArrowRight } from "lucide-react";

interface BottomCTABannerProps {
  onOpenBookingModal: () => void;
}

export default function BottomCTABanner({ onOpenBookingModal }: BottomCTABannerProps) {
  return (
    <section className="py-8 bg-[#FAFAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-[#D91B24] via-[#E5232C] to-[#C81018] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl border border-red-600/30">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Headline */}
            <div className="lg:col-span-6 space-y-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Ready to Move?<br />
                Get Your Free Quote Today!
              </h2>
              <p className="text-xs sm:text-sm text-red-100 font-medium">
                Join 1,00,000+ happy families who moved safely with MyRollingBox.
              </p>
            </div>

            {/* Center Action Buttons */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-3 relative">
              
              <button
                onClick={onOpenBookingModal}
                className="bg-white text-rose-600 text-xs font-black px-7 py-3.5 rounded-full shadow-lg hover:bg-rose-50 transition-all flex items-center gap-2 cursor-pointer shrink-0"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4 text-rose-600" />
              </button>

              <a
                href="tel:+919300300300"
                className="bg-rose-700/60 border border-white/30 text-white text-xs font-bold px-6 py-3.5 rounded-full flex items-center gap-2 hover:bg-rose-700/80 transition-all shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-white fill-white" />
                <span>+91 9300 300 300</span>
              </a>

              {/* Handwritten annotation right top */}
              <div className="hidden xl:block absolute -top-10 right-4 handwritten-text text-sm text-white transform rotate-3 whitespace-nowrap">
                New Home<br />
                New Memories ⤵
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
