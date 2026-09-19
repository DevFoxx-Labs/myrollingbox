"use client";

import React, { useState } from "react";
import { ShieldCheck, Truck, Lock, Users, Calendar, ChevronDown, Search, ArrowRight, CheckCircle2, Clock } from "lucide-react";

interface Hero21Props {
  onOpenBookingModal: (preselectedData?: any) => void;
  onOpenTrackingModal: () => void;
}

export default function Hero21({ onOpenBookingModal, onOpenTrackingModal }: Hero21Props) {
  const [activeWidgetTab, setActiveWidgetTab] = useState<"quote" | "track">("quote");

  // Form State
  const [pickupCity, setPickupCity] = useState("Prayagraj (Allahabad)");
  const [destCity, setDestCity] = useState("Delhi NCR");
  const [moveDate, setMoveDate] = useState("");
  const [moveType, setMoveType] = useState("2 BHK Household");

  // Tracking State
  const [docketNo, setDocketNo] = useState("");
  const [trackResult, setTrackResult] = useState<any>(null);

  const handleWidgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeWidgetTab === "track") {
      if (!docketNo.trim()) return;
      setTrackResult({
        docket: docketNo.toUpperCase(),
        currentStep: 3,
        status: "In Transit on National Highway (NH-19)",
        origin: pickupCity || "Prayagraj",
        destination: destCity || "Delhi NCR",
        driverName: "Vikram Singh (GPS Verified)",
        eta: "Tomorrow by 4:00 PM",
        lastCheckin: "Kanpur Toll Hub - 35 mins ago",
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
    <section className="relative bg-[#090D16] py-12 lg:py-20 overflow-hidden text-white border-b border-slate-800">
      
      {/* 21dev Background Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 21dev Headline & Trust Credentials */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-bold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>India&apos;s #1 IBA Approved Relocation Network</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] text-white">
              Relocate Without<br />
              <span className="text-gradient-red">Friction.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed max-w-xl">
              Zero transshipment, 7-layer waterproof packaging, and lockable <strong className="text-white">rolling box containers</strong>. Trusted by 20,00,000+ families across 100+ cities in India.
            </p>

            {/* 2x2 Feature Bento Cards */}
            <div className="grid grid-cols-2 gap-3 max-w-lg pt-2">
              
              <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white">IBA Approved Bills</h4>
                  <p className="text-[10px] text-slate-400">Govt/Bank Claims</p>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white">Sealed Rolling Boxes</h4>
                  <p className="text-[10px] text-slate-400">Personal Lock Key</p>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white">1200+ GPS Vehicles</h4>
                  <p className="text-[10px] text-slate-400">Live Highway Track</p>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white">20L+ Happy Families</h4>
                  <p className="text-[10px] text-slate-400">4.9/5 Star Rating</p>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBookingModal()}
                className="btn-21-red px-8 py-3.5 text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-xl"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTrackingModal}
                className="btn-21-glass px-6 py-3.5 text-xs font-bold flex items-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4 text-amber-400" />
                <span>Track Consignment</span>
              </button>
            </div>

          </div>

          {/* Right Column: 21dev Dual Widget (Quote vs Track) */}
          <div className="lg:col-span-6 relative">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-800 relative z-20">
              
              {/* Tab Switcher */}
              <div className="flex bg-slate-900 p-1.5 rounded-2xl mb-5 border border-slate-800 text-xs font-bold">
                <button
                  onClick={() => {
                    setActiveWidgetTab("quote");
                    setTrackResult(null);
                  }}
                  className={`flex-1 py-2 rounded-xl text-center transition-all cursor-pointer ${
                    activeWidgetTab === "quote"
                      ? "bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-md font-black"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  ⚡ Instant Relocation Quote
                </button>
                <button
                  onClick={() => setActiveWidgetTab("track")}
                  className={`flex-1 py-2 rounded-xl text-center transition-all cursor-pointer ${
                    activeWidgetTab === "track"
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md font-black"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  🔍 Track Docket Status
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleWidgetSubmit} className="space-y-4 text-xs">
                
                {activeWidgetTab === "quote" ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                          Pickup City
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Prayagraj / Allahabad"
                          value={pickupCity}
                          onChange={(e) => setPickupCity(e.target.value)}
                          className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl py-2.5 px-3.5 text-white font-bold focus:border-rose-500 focus:outline-none"
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
                          className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl py-2.5 px-3.5 text-white font-bold focus:border-rose-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                            className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl py-2.5 px-3.5 text-white font-bold focus:border-rose-500 focus:outline-none"
                          />
                          <Calendar className="w-4 h-4 text-slate-500 absolute right-3 top-3" />
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
                            className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl py-2.5 px-3.5 text-white font-bold appearance-none focus:border-rose-500 focus:outline-none"
                          >
                            <option value="1 BHK Household">1 BHK Household</option>
                            <option value="2 BHK Household">2 BHK Household</option>
                            <option value="3 BHK Villa / House">3 BHK Villa / House</option>
                            <option value="Office & Corporate Move">Office & Corporate Move</option>
                            <option value="Car & Bike Shifting">Car & Bike Shifting</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-3 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-21-red py-3.5 text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-2"
                    >
                      <span>Calculate Estimated Price</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                        Enter Consignment / Docket Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="e.g. MRB-987654 or Registered Mobile No."
                          value={docketNo}
                          onChange={(e) => setDocketNo(e.target.value)}
                          className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl py-3 px-3.5 text-white font-black placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                        />
                        <Search className="w-4 h-4 text-amber-400 absolute right-3.5 top-3.5" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-21-amber py-3.5 text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <span>Locate Consignment Now</span>
                      <Search className="w-4 h-4" />
                    </button>

                    {trackResult && (
                      <div className="mt-4 p-4 bg-slate-900/90 border border-amber-500/30 rounded-2xl text-xs space-y-3 animate-fadeIn">
                        <div className="flex justify-between items-center font-extrabold text-amber-400">
                          <span>Docket: {trackResult.docket}</span>
                          <span className="bg-amber-400 text-slate-950 text-[10px] px-2.5 py-0.5 rounded-full font-black">
                            {trackResult.status}
                          </span>
                        </div>

                        {/* Visual Step Timeline Stepper */}
                        <div className="grid grid-cols-4 gap-1 text-[9px] font-bold text-center pt-1">
                          <div className="bg-emerald-500/20 text-emerald-400 py-1 rounded">1. Packed</div>
                          <div className="bg-emerald-500/20 text-emerald-400 py-1 rounded">2. Loaded</div>
                          <div className="bg-amber-500/30 text-amber-300 py-1 rounded font-black border border-amber-400">3. In Transit</div>
                          <div className="bg-slate-800 text-slate-500 py-1 rounded">4. Delivery</div>
                        </div>

                        <div className="text-slate-300 text-[11px] space-y-1">
                          <p><strong>Route:</strong> {trackResult.origin} ➔ {trackResult.destination}</p>
                          <p><strong>Driver / GPS:</strong> {trackResult.driverName}</p>
                          <p className="flex items-center gap-1 text-amber-300">
                            <Clock className="w-3 h-3 text-amber-400" />
                            <strong>Expected Delivery:</strong> {trackResult.eta}
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}

              </form>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free Quotation Guarantee
                </span>
                <span>Response Time: &lt; 15 Mins</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
