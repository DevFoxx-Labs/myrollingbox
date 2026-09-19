"use client";

import React from "react";
import { Users, MapPin, Star } from "lucide-react";

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
                  <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white text-xs shrink-0 font-black">
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

          {/* Right Truck Banner Graphic Area */}
          <div className="lg:col-span-7 relative">
            
            {/* Handwritten annotation top right */}
            <div className="hidden sm:block absolute -top-10 right-8 handwritten-text text-sm transform rotate-6 text-slate-800 leading-tight z-30">
              Moving A Stronger India<br />Together ⤵
            </div>

            {/* Container Truck Graphic Container */}
            <div className="w-full h-80 sm:h-96 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative border border-slate-700 shadow-2xl flex flex-col justify-between p-6 text-white">
              <img
                src="/images/truck_highway.jpg"
                alt="MyRollingBox Lockable Container Truck on Highway"
                className="absolute inset-0 w-full h-full object-cover z-0"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />

              {/* Top Banner Tag */}
              <div className="flex justify-between items-center z-10">
                <span className="text-xs font-black uppercase tracking-wider bg-red-600 text-white px-3 py-1 rounded-full shadow-md">
                  🚚 Lockable Express Fleet
                </span>
                <span className="text-xs font-bold text-yellow-300 bg-black/40 px-2.5 py-1 rounded-md">Pan-India Transit</span>
              </div>

              {/* Truck Illustration fallback */}
              <div className="relative z-10 text-center space-y-3 bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-lg mx-auto shadow-2xl">
                <div className="inline-flex items-center gap-2 bg-white text-slate-900 font-black text-xl sm:text-2xl px-5 py-2.5 rounded-xl shadow-lg border-2 border-red-500">
                  <span className="w-4 h-4 rounded-full bg-red-600" />
                  <span>MyRollingBox Truck</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-semibold">
                  Zero Item Damage • Customer Keeps Personal Lock Key • Real-Time GPS
                </p>
              </div>

              <div />
            </div>

            {/* Bottom Floating Stats Bar */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[92%] sm:w-[85%] bg-white rounded-2xl p-4 shadow-xl border border-slate-200 flex items-center justify-around text-center z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-sm sm:text-base font-black text-slate-900 block leading-none">1,00,000+</span>
                  <span className="text-[10px] text-slate-500 font-bold">Happy Families</span>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-sm sm:text-base font-black text-slate-900 block leading-none">150+</span>
                  <span className="text-[10px] text-slate-500 font-bold">Cities</span>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 fill-red-600" />
                </div>
                <div className="text-left">
                  <span className="text-sm sm:text-base font-black text-slate-900 block leading-none">4.9 / 5</span>
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
