"use client";

import React, { useState } from "react";
import { ChevronDown, DollarSign, Headset, Calendar, MapPin } from "lucide-react";

interface RatesCalculatorProps {
  onOpenBookingModal: (preselectedData?: any) => void;
}

export default function RatesCalculator({ onOpenBookingModal }: RatesCalculatorProps) {
  const [fromCity, setFromCity] = useState("Prayagraj (Allahabad)");
  const [toCity, setToCity] = useState("Delhi NCR");
  const [moveType, setMoveType] = useState("Home (2 BHK)");

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal({
      fromCity,
      toCity,
      moveType,
    });
  };

  return (
    <section id="pricing" className="py-16 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft Pink Tint Container Box */}
        <div className="bg-[#FFF5F5] rounded-3xl p-8 sm:p-12 border border-red-100 relative overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Form Content */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-xs bg-red-600" />
                  <span>Price Estimator</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Calculate Your Moving Cost
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Get an instant estimated price for your move.
                </p>
              </div>

              {/* Form Bar (White rounded container bar) */}
              <form onSubmit={handleCalculate} className="bg-white p-3 rounded-2xl border border-slate-200 shadow-md">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-3">
                  
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Moving From</label>
                    <div className="relative">
                      <select
                        value={fromCity}
                        onChange={(e) => setFromCity(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 appearance-none text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                      >
                        <option value="Prayagraj (Allahabad)">Prayagraj (Allahabad)</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Lucknow">Lucknow</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Moving To</label>
                    <div className="relative">
                      <select
                        value={toCity}
                        onChange={(e) => setToCity(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 appearance-none text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                      >
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Prayagraj (Allahabad)">Prayagraj (Allahabad)</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Lucknow">Lucknow</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Move Type</label>
                    <div className="relative">
                      <select
                        value={moveType}
                        onChange={(e) => setMoveType(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 appearance-none text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                      >
                        <option value="Home (1 BHK)">Home (1 BHK)</option>
                        <option value="Home (2 BHK)">Home (2 BHK)</option>
                        <option value="Home (3 BHK)">Home (3 BHK)</option>
                        <option value="Villa / 4+ BHK">Villa / 4+ BHK</option>
                        <option value="Vehicle Shifting">Vehicle Shifting</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                </div>

                <button
                  type="submit"
                  className="w-full btn-red-pill py-3 text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Calculate Estimate</span>
                  <span>→</span>
                </button>
              </form>

            </div>

            {/* Right Graphic Box & Feature Vertical List */}
            <div className="lg:col-span-4 flex items-center justify-end gap-6">
              
              {/* Box graphic stack mockup */}
              <div className="hidden sm:flex flex-col items-center justify-center relative">
                <div className="w-28 h-28 bg-amber-100 border border-amber-300 rounded-2xl flex items-center justify-center text-4xl shadow-md">
                  📦
                </div>
                <div className="absolute -top-3 -right-6 bg-red-600 text-white font-extrabold text-[9px] px-2.5 py-1 rounded-full shadow-md whitespace-nowrap">
                  Transparent Pricing - No Hidden Charges
                </div>
              </div>

              {/* Vertical Feature Badges List */}
              <div className="space-y-2.5 w-full sm:w-auto">
                <div className="flex items-center gap-2.5 bg-white p-2.5 px-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">Best Value Guaranteed</span>
                </div>

                <div className="flex items-center gap-2.5 bg-white p-2.5 px-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Headset className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">Live Support During Move</span>
                </div>

                <div className="flex items-center gap-2.5 bg-white p-2.5 px-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">Flexible Scheduling</span>
                </div>

                <div className="flex items-center gap-2.5 bg-white p-2.5 px-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">Pan-India Coverage</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
