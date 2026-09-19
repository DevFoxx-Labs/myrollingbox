"use client";

import React, { useState } from "react";
import { ShieldCheck, Truck, Lock, Users, Calendar, ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenBookingModal: (preselectedData?: any) => void;
}

export default function Hero({ onOpenBookingModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState("Home");
  const [pickupCity, setPickupCity] = useState("");
  const [destCity, setDestCity] = useState("");
  const [moveDate, setMoveDate] = useState("");
  const [moveType, setMoveType] = useState("");

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal({
      fromCity: pickupCity || "Prayagraj (Allahabad)",
      toCity: destCity || "Delhi NCR",
      moveType: activeTab + (moveType ? ` - ${moveType}` : ""),
      moveDate,
    });
  };

  return (
    <section className="relative bg-[#FAFAFC] py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag */}
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-xs bg-red-600" />
              <span>Packers & Movers Across India</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Move Better<br />
              Live <span className="text-red-600">Brighter</span>
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-xl">
              India&apos;s safest packers & movers with lockable <strong className="text-slate-900">rolling boxes</strong>. Relocate your home, office or vehicle anywhere in India — securely, affordably and stress-free.
            </p>

            {/* 4 Feature Pills Grid (2x2) */}
            <div className="grid grid-cols-2 gap-3 max-w-lg pt-2">
              <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">100% Safe & Secure</div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">On-Time Delivery</div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">Lockable Rolling Boxes</div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">Trusted by 1L+ Families</div>
              </div>
            </div>

            {/* Dual CTAs + Handwritten Note */}
            <div className="pt-4 flex flex-wrap items-center gap-4 relative">
              <button
                onClick={() => onOpenBookingModal()}
                className="btn-red-pill px-8 py-3.5 text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-red-500/25"
              >
                <span>Get Free Quote</span>
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white">
                  →
                </span>
              </button>

              <button
                onClick={() => onOpenBookingModal()}
                className="btn-outline-pill px-6 py-3.5 text-xs font-bold flex items-center gap-2 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px]">
                  ▶
                </div>
                <span>Watch How It Works</span>
              </button>

              {/* Handwritten style text annotation */}
              <div className="hidden sm:block absolute -bottom-10 left-48 handwritten-text text-sm transform -rotate-6 text-slate-700">
                Moving Made Simple! ⤵
              </div>
            </div>

          </div>

          {/* Right Hero Column - Form & Delivery Image Visual */}
          <div className="lg:col-span-6 relative">
            
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              
              {/* Free Quote Card */}
              <div className="sm:col-span-7 bg-white rounded-3xl p-6 shadow-xl border border-slate-200/80 relative z-20">
                <div className="mb-4">
                  <h3 className="text-lg font-black text-slate-900">Get a Free Quote</h3>
                  <p className="text-[11px] text-slate-400 font-medium">Fast. Free. No Obligation.</p>
                </div>

                {/* Tab selector */}
                <div className="flex bg-slate-100 p-1 rounded-xl mb-4 text-xs font-bold">
                  {["Home", "Office", "Vehicle"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-1.5 rounded-lg text-center transition-all cursor-pointer ${
                        activeTab === tab
                          ? "bg-red-600 text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleQuoteSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                      Route City
                    </label>
                    <input
                      type="text"
                      placeholder="Enter pickup city"
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-slate-900 font-semibold focus:border-red-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                      To City
                    </label>
                    <input
                      type="text"
                      placeholder="Enter destination city"
                      value={destCity}
                      onChange={(e) => setDestCity(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-slate-900 font-semibold focus:border-red-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                      Move Date
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Select date"
                        value={moveDate}
                        onChange={(e) => setMoveDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 pr-8 text-slate-900 font-semibold focus:border-red-600 focus:outline-none"
                      />
                      <Calendar className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                      Move Type
                    </label>
                    <div className="relative">
                      <select
                        value={moveType}
                        onChange={(e) => setMoveType(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 appearance-none text-slate-900 font-semibold focus:border-red-600 focus:outline-none"
                      >
                        <option value="">Select move type</option>
                        <option value="1 BHK">1 BHK Flat</option>
                        <option value="2 BHK">2 BHK Flat</option>
                        <option value="3 BHK">3 BHK House</option>
                        <option value="Villa">Villa / 4+ BHK</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-red-pill py-3 text-xs font-extrabold flex items-center justify-center gap-1.5 cursor-pointer shadow-md mt-2"
                  >
                    <span>Get Quote Now</span>
                    <span>→</span>
                  </button>
                </form>

                <p className="text-[10px] text-slate-400 text-center font-medium mt-3">
                  Our team will call you within 30 minutes.
                </p>
              </div>

              {/* Delivery Executive Visual Graphic */}
              <div className="hidden sm:block sm:col-span-5 relative">
                
                {/* Handwritten Annotation top right */}
                <div className="absolute -top-6 right-0 handwritten-text text-sm transform rotate-6 text-slate-800 leading-tight z-30">
                  Happy<br />Moves,<br />Happier<br />People ⤵
                </div>

                {/* Delivery Boy Styled Visual Card */}
                <div className="w-full h-84 rounded-3xl overflow-hidden bg-gradient-to-b from-red-600 via-red-500 to-red-600 relative border border-slate-200 shadow-xl flex flex-col justify-between p-4 text-white">
                  
                  {/* Decorative background elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  
                  {/* Executive Header */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md">
                      Verified Crew
                    </span>
                    <span className="text-xs font-bold text-yellow-300">★ 4.9 Verified</span>
                  </div>

                  {/* Center Graphic */}
                  <div className="text-center my-auto z-10 space-y-2">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-white text-slate-900 flex flex-col items-center justify-center shadow-2xl border-2 border-red-200">
                      <span className="text-3xl">📦</span>
                      <span className="text-[9px] font-black tracking-tight text-red-600 uppercase">MyRollingBox</span>
                    </div>
                    <h4 className="text-sm font-black leading-tight">Safe Doorstep Delivery</h4>
                    <p className="text-[10px] text-red-100 font-medium">Uniformed & Background-Verified Staff</p>
                  </div>

                  {/* Bottom Footer */}
                  <div className="bg-black/30 backdrop-blur-md p-2 rounded-xl text-center z-10 border border-white/10">
                    <span className="text-[10px] font-bold tracking-wide">100% Personal Lock Key Guarantee</span>
                  </div>
                </div>

                {/* Floating Bottom Right Badge */}
                <div className="absolute -bottom-4 -right-2 bg-white rounded-2xl p-2.5 shadow-xl border border-slate-200 flex items-center gap-2 z-30">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-red-600 border-2 border-white flex items-center justify-center text-[10px] text-white font-black">A</div>
                    <div className="w-7 h-7 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-[10px] text-slate-900 font-black">P</div>
                    <div className="w-7 h-7 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-[10px] text-white font-black">M</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Trusted by</span>
                    <span className="text-xs font-black text-slate-900 block leading-tight">1,00,000+</span>
                    <span className="text-[9px] text-slate-500 block">Happy Families</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
