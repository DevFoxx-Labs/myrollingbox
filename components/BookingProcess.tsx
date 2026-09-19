"use client";

import React from "react";
import { ClipboardCheck, Calculator, Truck, Smile } from "lucide-react";

interface BookingProcessProps {
  onOpenBookingModal: () => void;
}

export default function BookingProcess({ onOpenBookingModal }: BookingProcessProps) {
  const steps = [
    {
      num: 1,
      icon: ClipboardCheck,
      title: "Book a Free Quote",
      desc: "Share your details online or call us.",
    },
    {
      num: 2,
      icon: Calculator,
      title: "Get an Estimate",
      desc: "Receive a transparent price in minutes.",
    },
    {
      num: 3,
      icon: Truck,
      title: "We Pick, Pack & Move",
      desc: "Our team packs, loads and transports safely.",
    },
    {
      num: 4,
      icon: Smile,
      title: "You Relax",
      desc: "Track your move and receive at your new home.",
    },
  ];

  return (
    <section className="py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-xs bg-red-600" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            4 Simple Steps to Your New Beginning
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Moving with MyRollingBox is simple, transparent, and hassle-free.
          </p>
        </div>

        {/* 4 Connected Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connecting Curved Dotted Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-red-200 pointer-events-none z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                onClick={onOpenBookingModal}
                className="flex flex-col items-center text-center space-y-4 relative z-10 cursor-pointer group"
              >
                {/* Circle Icon Badge */}
                <div className="w-16 h-16 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm relative">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Step Number Badge */}
                <div className="w-6 h-6 rounded-full bg-red-600 text-white font-extrabold text-xs flex items-center justify-center -mt-6 shadow-xs border-2 border-white">
                  {step.num}
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-red-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
