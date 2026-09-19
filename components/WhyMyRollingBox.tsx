"use client";

import React from "react";
import { CheckCircle2, ArrowRight, Users, MapPin, Star } from "lucide-react";

interface WhyMyRollingBoxProps {
  onOpenBookingModal: () => void;
}

export default function WhyMyRollingBox({ onOpenBookingModal }: WhyMyRollingBoxProps) {
  const points = [
    "Lockable rolling boxes",
    "No item loss or damage",
    "Real-time tracking",
    "Professional handling",
    "Affordable pricing",
  ];

  return (
    <section id="why-us" className="py-16 bg-[#FAFAFC] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Bullet Points */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-xs bg-red-600" />
              <span>Why MyRollingBox?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Safer Than<br />Open Trucks
            </h2>

            <ul className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white text-xs shrink-0">
                    ✓
                  </div>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenBookingModal}
                className="btn-red-pill px-7 py-3 text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Show More</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Truck Banner & Stats Card */}
          <div className="lg:col-span-7 relative">
            
            {/* Handwritten annotation on top right */}
            <div className="hidden sm:block absolute -top-10 right-8 handwritten-text text-sm transform rotate-6 text-slate-800 leading-tight">
              Moving A Stronger India<br />Together ⤵
            </div>

            {/* Container Truck Graphic Area */}
            <div className="w-full h-80 sm:h-96 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative border border-slate-700 shadow-2xl flex items-center justify-center">
              
              {/* Landmark Silhouette Background */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Truck Illustration graphic mockup */}
              <div className="relative z-10 text-center space-y-4 px-6">
                <div className="inline-flex items-center gap-3 bg-red-600 text-white font-black text-lg sm:text-2xl px-6 py-3 rounded-2xl shadow-xl">
                  🚚 MYROLLINGBOX CONTAINER TRUCK
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-bold max-w-md mx-auto">
                  100% Sealed & Weatherproof Polypropylene Moving Containers
                </p>
              </div>
            </div>

            {/* Bottom Floating Stats Bar */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] bg-white rounded-2xl p-4 shadow-xl border border-slate-200 flex items-center justify-around text-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-black text-slate-900 block leading-none">1,00,000+</span>
                  <span className="text-[10px] text-slate-500 font-bold">Happy Families</span>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-black text-slate-900 block leading-none">150+</span>
                  <span className="text-[10px] text-slate-500 font-bold">Cities</span>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 fill-red-600" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-black text-slate-900 block leading-none">4.9 / 5</span>
                  <span className="text-[10px] text-slate-500 font-bold">Customer Rating</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
