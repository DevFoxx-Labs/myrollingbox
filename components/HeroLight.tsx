"use client";

import React, { useState } from "react";
import { ShieldCheck, Truck, Lock, Users, Calendar, ChevronDown, Search, ArrowRight, CheckCircle2, Clock } from "lucide-react";

interface HeroLightProps {
  onOpenBookingModal: (preselectedData?: any) => void;
  onOpenTrackingModal: () => void;
}

export default function HeroLight({ onOpenBookingModal, onOpenTrackingModal }: HeroLightProps) {
  const [activeTab, setActiveTab] = useState<"quote" | "track">("quote");

  // Form state
  const [pickupCity, setPickupCity] = useState("Prayagraj (Allahabad)");
  const [destCity, setDestCity] = useState("Delhi NCR");
  const [moveDate, setMoveDate] = useState("");
  const [moveType, setMoveType] = useState("2 BHK Household");

  // Tracking state
  const [docketNo, setDocketNo] = useState("");
  const [trackResult, setTrackResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "track") {
      if (!docketNo.trim()) return;
      setTrackResult({
        docket: docketNo.toUpperCase(),
        status: "In Transit",
        origin: pickupCity || "Prayagraj",
        destination: destCity || "Delhi NCR",
        driverName: "Vikram Singh (GPS Verified)",
        eta: "Tomorrow by 4:00 PM",
        location: "Kanpur Toll Plaza (NH-19)",
      });
      return;
    }

    onOpenBookingModal({
      fromCity: pickupCity,
      toCity: destCity,
      moveType,
      moveDate,
    });
  };

  return (
    <section className="relative bg-[#F8FAFC] py-12 lg:py-16 overflow-hidden border-b border-slate-200/80">
      
      {/* Background Soft Coral & Teal Ambient Glows */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#FF6B6B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7F5] border border-[#FF6B6B]/20 text-[#0F766E] text-xs font-extrabold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-pulse" />
              <span>India&apos;s Trusted Packers & Movers</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.08]">
              Move Forward,<br />
              Live <span className="text-[#FF6B6B]">Brighter</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-medium max-w-xl">
              India&apos;s safest packers & movers featuring lockable <strong className="text-[#0F172A]">rolling box containers</strong>, zero transshipment, and 7-layer waterproof packaging. Same destinations, brighter tomorrows.
            </p>

            {/* 4 Feature Cards (2x2) */}
            <div className="grid grid-cols-2 gap-3 max-w-lg pt-2">
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#FF6B6B]/20 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#FFF7F5] text-[#FF6B6B] flex items-center justify-center shrink-0 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">IBA Approved Bills</h4>
                  <p className="text-[10px] text-[#475569] font-medium">Govt / Bank Claims</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#0F766E]/20 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#5CC9C3]/15 text-[#0F766E] flex items-center justify-center shrink-0 font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">Sealed Rolling Boxes</h4>
                  <p className="text-[10px] text-[#475569] font-medium">Personal Lock Key</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#0F766E]/20 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#5CC9C3]/15 text-[#0F766E] flex items-center justify-center shrink-0 font-bold">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">1200+ GPS Vehicles</h4>
                  <p className="text-[10px] text-[#475569] font-medium">Live Highway Track</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#FF6B6B]/20 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#FFF7F5] text-[#FF6B6B] flex items-center justify-center shrink-0 font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">20L+ Happy Families</h4>
                  <p className="text-[10px] text-[#475569] font-medium">4.9/5 Star Rating</p>
                </div>
              </div>
            </div>

            {/* CTAs & Handwritten Annotation */}
            <div className="pt-4 flex flex-wrap items-center gap-4 relative">
              <button
                onClick={() => onOpenBookingModal()}
                className="btn-coral-pill px-8 py-3.5 text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Get Instant Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTrackingModal}
                className="btn-teal-outline px-6 py-3.5 text-xs font-bold flex items-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#0F766E]" />
                <span>Track Consignment</span>
              </button>

              <div className="hidden sm:block absolute -bottom-10 left-60 handwritten-text text-sm transform -rotate-6 text-[#0F766E]">
                Same Destinations, Brighter Tomorrows ⤵
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Widget Card & Image Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              
              {/* Form Card */}
              <div className="sm:col-span-7 bg-white rounded-3xl p-6 shadow-xl border border-slate-200/90 relative z-20">
                
                {/* Tab selector */}
                <div className="flex bg-[#FFF7F5] p-1.5 rounded-2xl mb-4 text-xs font-bold border border-[#FF6B6B]/20">
                  <button
                    onClick={() => {
                      setActiveTab("quote");
                      setTrackResult(null);
                    }}
                    className={`flex-1 py-2 rounded-xl text-center transition-all cursor-pointer ${
                      activeTab === "quote"
                        ? "bg-gradient-to-r from-[#FF6B6B] to-[#FFA89A] text-white shadow-xs font-black"
                        : "text-[#475569] hover:text-[#0F172A]"
                    }`}
                  >
                    Instant Quote
                  </button>
                  <button
                    onClick={() => setActiveTab("track")}
                    className={`flex-1 py-2 rounded-xl text-center transition-all cursor-pointer ${
                      activeTab === "track"
                        ? "bg-gradient-to-r from-[#0F766E] to-[#5CC9C3] text-white shadow-xs font-black"
                        : "text-[#475569] hover:text-[#0F172A]"
                    }`}
                  >
                    🔍 Track
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  {activeTab === "quote" ? (
                    <>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                          Pickup City
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Prayagraj (Allahabad)"
                          value={pickupCity}
                          onChange={(e) => setPickupCity(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-[#0F172A] font-bold focus:border-[#FF6B6B] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                          Destination City
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Delhi NCR / Mumbai"
                          value={destCity}
                          onChange={(e) => setDestCity(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-[#0F172A] font-bold focus:border-[#FF6B6B] focus:outline-none"
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
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 pr-8 text-[#0F172A] font-bold focus:border-[#FF6B6B] focus:outline-none"
                          />
                          <Calendar className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                          Move Category
                        </label>
                        <div className="relative">
                          <select
                            value={moveType}
                            onChange={(e) => setMoveType(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 appearance-none text-[#0F172A] font-bold focus:border-[#FF6B6B] focus:outline-none"
                          >
                            <option value="1 BHK Household">1 BHK Household</option>
                            <option value="2 BHK Household">2 BHK Household</option>
                            <option value="3 BHK Villa / House">3 BHK Villa / House</option>
                            <option value="Office Move">Office Relocation</option>
                            <option value="Vehicle Shifting">Vehicle Shifting</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full btn-coral-pill py-3 text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-md mt-2"
                      >
                        <span>Calculate Estimate</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                          Consignment / Docket No.
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. MRB-987654 or Phone No."
                          value={docketNo}
                          onChange={(e) => setDocketNo(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-[#0F172A] font-black focus:border-[#0F766E] focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full btn-teal-pill py-3 text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-md mt-2"
                      >
                        <span>Locate Consignment</span>
                        <Search className="w-4 h-4" />
                      </button>

                      {trackResult && (
                        <div className="mt-3 p-3 bg-[#FFF7F5] border border-[#FF6B6B]/30 rounded-xl text-xs space-y-2 animate-fadeIn">
                          <div className="flex justify-between items-center font-bold text-[#FF6B6B]">
                            <span>Docket: {trackResult.docket}</span>
                            <span className="bg-[#0F766E] text-white text-[10px] px-2 py-0.5 rounded-full font-black">
                              {trackResult.status}
                            </span>
                          </div>

                          <div className="grid grid-cols-4 gap-1 text-[9px] font-bold text-center">
                            <div className="bg-emerald-100 text-emerald-800 py-1 rounded">1. Packed</div>
                            <div className="bg-emerald-100 text-emerald-800 py-1 rounded">2. Loaded</div>
                            <div className="bg-amber-100 text-amber-900 py-1 rounded font-black border border-amber-300">3. Transit</div>
                            <div className="bg-slate-100 text-slate-400 py-1 rounded">4. Delivery</div>
                          </div>

                          <p className="text-slate-700 text-[11px]">
                            <strong>Location:</strong> {trackResult.location}
                          </p>
                          <p className="text-slate-700 text-[11px]">
                            <strong>ETA:</strong> {trackResult.eta}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </form>

                <p className="text-[10px] text-slate-400 text-center font-medium mt-3">
                  Response within 15 minutes • No Obligation
                </p>
              </div>

              {/* Delivery Boy Visual Graphic */}
              <div className="hidden sm:block sm:col-span-5 relative">
                <div className="w-full h-84 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 relative">
                  <img
                    src="/images/hero_delivery.jpg"
                    alt="MyRollingBox Delivery Executive"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-4 -right-2 bg-white rounded-2xl p-2.5 shadow-xl border border-slate-200 flex items-center gap-2 z-30">
                  <div className="w-8 h-8 rounded-full bg-[#FF6B6B] text-white flex items-center justify-center font-black text-xs">
                    ✓
                  </div>
                  <div>
                    <span className="text-[10px] text-[#475569] block font-semibold">Trusted Brand</span>
                    <span className="text-xs font-black text-[#0F172A] block leading-tight">20.5+ Lakh</span>
                    <span className="text-[9px] text-[#475569] block">Happy Families</span>
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
