"use client";

import React, { useState } from "react";
import { ShieldCheck, Truck, Lock, Users, Calendar, ChevronDown, Search, ArrowRight, CheckCircle2, Clock, Zap, Radio, ShieldAlert } from "lucide-react";

interface HeroNeoProps {
  onOpenBookingModal: (preselectedData?: any) => void;
  onOpenTrackingModal: () => void;
}

export default function HeroNeo({ onOpenBookingModal, onOpenTrackingModal }: HeroNeoProps) {
  const [activeTab, setActiveTab] = useState<"quote" | "radar" | "verify">("quote");

  // Form State
  const [pickupCity, setPickupCity] = useState("Prayagraj (Allahabad)");
  const [destCity, setDestCity] = useState("Delhi NCR");
  const [moveDate, setMoveDate] = useState("");
  const [moveType, setMoveType] = useState("2 BHK Household");

  // Radar State
  const [docketNo, setDocketNo] = useState("");
  const [radarResult, setRadarResult] = useState<any>(null);

  // Verify State
  const [verifyRef, setVerifyRef] = useState("");
  const [verifyResult, setVerifyResult] = useState<any>(null);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "radar") {
      if (!docketNo.trim()) return;
      setRadarResult({
        docket: docketNo.toUpperCase(),
        status: "In Transit",
        location: "Kanpur Toll Hub (NH-19 GPS Active)",
        eta: "Tomorrow, 4:00 PM",
        driver: "Vikram Singh (+91 98765 12345)",
      });
      return;
    }

    if (activeTab === "verify") {
      if (!verifyRef.trim()) return;
      if (verifyRef.toLowerCase().includes("mrb") || verifyRef.length >= 4) {
        setVerifyResult({
          valid: true,
          message: "Official MyRollingBox Partner & Invoice Verified!",
          details: "GSTIN: 09AAACM9876Q1Z3 | IBA Code: APM/10982/2026",
        });
      } else {
        setVerifyResult({
          valid: false,
          message: "Unverified Code!",
          details: "Call official helpline +91 9300 300 300 to verify.",
        });
      }
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
    <section className="relative bg-[#0B0E17] py-14 lg:py-24 overflow-hidden text-white border-b border-slate-800">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF1E4B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-extrabold text-slate-300 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
              <span>Next-Gen Relocation Network • IBA Approved</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] text-white">
              Relocate Without<br />
              Friction. <span className="text-gradient-neon">Re-engineered.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed max-w-xl">
              Zero transshipment, 7-layer waterproof packaging, and lockable <strong className="text-white font-bold">rolling box containers</strong>. Trusted by 20,00,000+ families across India.
            </p>

            {/* 4 Cyber Stats Cards */}
            <div className="grid grid-cols-2 gap-3 max-w-lg pt-2">
              <div className="glass-neo p-3.5 rounded-2xl border border-slate-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FF1E4B]/20 text-[#FF1E4B] flex items-center justify-center shrink-0 font-black">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">IBA Approved</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Govt / Bank Claims</p>
                </div>
              </div>

              <div className="glass-neo p-3.5 rounded-2xl border border-slate-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-black">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">Sealed Rolling Boxes</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Personal Key Seal</p>
                </div>
              </div>

              <div className="glass-neo p-3.5 rounded-2xl border border-slate-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center shrink-0 font-black">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">1200+ GPS Fleets</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Live Highway Radar</p>
                </div>
              </div>

              <div className="glass-neo p-3.5 rounded-2xl border border-slate-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-black">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">20L+ Happy Shifts</h4>
                  <p className="text-[10px] text-slate-400 font-medium">4.9/5 Rating</p>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBookingModal()}
                className="btn-neon-crimson px-8 py-3.5 text-xs font-black flex items-center gap-2 cursor-pointer shadow-xl"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTrackingModal}
                className="btn-cyber-glass px-6 py-3.5 text-xs font-bold flex items-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4 text-amber-400" />
                <span>Track Docket Radar</span>
              </button>
            </div>

          </div>

          {/* Right Column: 3-Tab Command Hub Widget */}
          <div className="lg:col-span-6 relative">
            <div className="glass-neo rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-800 relative z-20">
              
              {/* 3 Tabs Bar */}
              <div className="grid grid-cols-3 bg-slate-950 p-1.5 rounded-2xl mb-5 border border-slate-800 text-[11px] font-black text-center">
                <button
                  onClick={() => setActiveTab("quote")}
                  className={`py-2 rounded-xl transition-all cursor-pointer ${
                    activeTab === "quote"
                      ? "bg-gradient-to-r from-[#FF1E4B] to-[#FF4D00] text-white shadow-md font-black"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  ⚡ AI Quote
                </button>
                <button
                  onClick={() => setActiveTab("radar")}
                  className={`py-2 rounded-xl transition-all cursor-pointer ${
                    activeTab === "radar"
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md font-black"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  🛰️ GPS Radar
                </button>
                <button
                  onClick={() => setActiveTab("verify")}
                  className={`py-2 rounded-xl transition-all cursor-pointer ${
                    activeTab === "verify"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md font-black"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  🛡️ Verify
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleCommandSubmit} className="space-y-4 text-xs">
                
                {activeTab === "quote" && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                          Pickup City
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Prayagraj (Allahabad)"
                          value={pickupCity}
                          onChange={(e) => setPickupCity(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-700/80 rounded-xl py-2.5 px-3.5 text-white font-bold focus:border-[#FF1E4B] focus:outline-none"
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
                          className="w-full bg-slate-950 border border-slate-700/80 rounded-xl py-2.5 px-3.5 text-white font-bold focus:border-[#FF1E4B] focus:outline-none"
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
                            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl py-2.5 px-3.5 text-white font-bold focus:border-[#FF1E4B] focus:outline-none"
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
                            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl py-2.5 px-3.5 text-white font-bold appearance-none focus:border-[#FF1E4B] focus:outline-none"
                          >
                            <option value="1 BHK Household">1 BHK Household</option>
                            <option value="2 BHK Household">2 BHK Household</option>
                            <option value="3 BHK Villa / House">3 BHK Villa / House</option>
                            <option value="Office Relocation">Office Relocation</option>
                            <option value="Vehicle Shifting">Vehicle Shifting</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-3 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-neon-crimson py-3.5 text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-2"
                    >
                      <span>Calculate Dynamic AI Price</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {activeTab === "radar" && (
                  <>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                        Consignment / Docket Number
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. MRB-987654 or Phone No."
                        value={docketNo}
                        onChange={(e) => setDocketNo(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700/80 rounded-xl py-3 px-3.5 text-white font-black placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-neon-amber py-3.5 text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <span>Ping GPS Radar</span>
                      <Search className="w-4 h-4" />
                    </button>

                    {radarResult && (
                      <div className="mt-4 p-4 bg-slate-950 border border-amber-500/30 rounded-2xl text-xs space-y-3 animate-fadeIn">
                        <div className="flex justify-between items-center font-black text-amber-400">
                          <span>Docket: {radarResult.docket}</span>
                          <span className="bg-amber-400 text-slate-950 text-[10px] px-2.5 py-0.5 rounded-full font-black">
                            {radarResult.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-4 gap-1 text-[9px] font-bold text-center">
                          <div className="bg-emerald-500/20 text-emerald-400 py-1 rounded">1. Packed</div>
                          <div className="bg-emerald-500/20 text-emerald-400 py-1 rounded">2. Loaded</div>
                          <div className="bg-amber-500/30 text-amber-300 py-1 rounded font-black border border-amber-400">3. Transit</div>
                          <div className="bg-slate-800 text-slate-500 py-1 rounded">4. Delivery</div>
                        </div>

                        <div className="text-slate-300 text-[11px] space-y-1">
                          <p><strong>GPS Location:</strong> {radarResult.location}</p>
                          <p className="text-amber-300"><strong>ETA:</strong> {radarResult.eta}</p>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {activeTab === "verify" && (
                  <>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                        Quote ID / Representative Ref
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. MRB-8821 or Rep ID"
                        value={verifyRef}
                        onChange={(e) => setVerifyRef(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700/80 rounded-xl py-3 px-3.5 text-white font-black placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black py-3.5 text-xs rounded-full cursor-pointer shadow-lg hover:brightness-110 transition-all"
                    >
                      <span>Verify Authenticity</span>
                    </button>

                    {verifyResult && (
                      <div
                        className={`mt-4 p-3.5 rounded-2xl text-xs space-y-1 ${
                          verifyResult.valid
                            ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-200"
                            : "bg-[#FF1E4B]/20 border border-[#FF1E4B]/40 text-rose-200"
                        }`}
                      >
                        <p className="font-black">{verifyResult.message}</p>
                        <p className="text-[11px] opacity-90">{verifyResult.details}</p>
                      </div>
                    )}
                  </>
                )}

              </form>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-bold">
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
