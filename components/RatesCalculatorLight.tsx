"use client";

import React, { useState } from "react";
import { ChevronDown, DollarSign, Headset, Calendar, MapPin, Calculator, ArrowRight } from "lucide-react";

interface RatesCalculatorLightProps {
  onOpenBookingModal: (preselectedData?: any) => void;
}

export default function RatesCalculatorLight({ onOpenBookingModal }: RatesCalculatorLightProps) {
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
    <section id="calculator" className="py-16 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Warm White Tint Container Box */}
        <div className="bg-[#FFF7F5] rounded-3xl p-8 sm:p-12 border border-[#FF6B6B]/20 relative overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Form Content */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#FF6B6B] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-xs bg-[#FF6B6B]" />
                  <span>Instant Cost Estimator</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                  Calculate Your Moving Cost
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] font-medium">
                  Get a fast transparent price estimate with zero hidden fees.
                </p>
              </div>

              {/* Form Bar (White rounded container bar) */}
              <form onSubmit={handleCalculate} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-md space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Moving From</label>
                    <div className="relative">
                      <select
                        value={fromCity}
                        onChange={(e) => setFromCity(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 appearance-none text-[#0F172A] font-bold focus:border-[#FF6B6B] focus:outline-none"
                      >
                        <option value="Prayagraj (Allahabad)">Prayagraj (Allahabad)</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Lucknow">Lucknow</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Kolkata">Kolkata</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Moving To</label>
                    <div className="relative">
                      <select
                        value={toCity}
                        onChange={(e) => setToCity(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 appearance-none text-[#0F172A] font-bold focus:border-[#FF6B6B] focus:outline-none"
                      >
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Prayagraj (Allahabad)">Prayagraj (Allahabad)</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Lucknow">Lucknow</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Kolkata">Kolkata</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Move Category</label>
                    <div className="relative">
                      <select
                        value={moveType}
                        onChange={(e) => setMoveType(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 appearance-none text-[#0F172A] font-bold focus:border-[#FF6B6B] focus:outline-none"
                      >
                        <option value="Home (1 BHK)">Home (1 BHK)</option>
                        <option value="Home (2 BHK)">Home (2 BHK)</option>
                        <option value="Home (3 BHK)">Home (3 BHK)</option>
                        <option value="Villa / 4+ BHK">Villa / 4+ BHK</option>
                        <option value="Vehicle Shifting">Vehicle Shifting</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
                    </div>
                  </div>

                </div>

                <button
                  type="submit"
                  className="w-full btn-coral-pill py-3.5 text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Calculate Instant Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

            </div>

            {/* Right Graphic Box & Feature Vertical List */}
            <div className="lg:col-span-4 flex items-center justify-end gap-6">
              
              {/* Box graphic mockup */}
              <div className="hidden sm:flex flex-col items-center justify-center relative">
                <div className="w-28 h-28 bg-[#FFF7F5] border border-[#FF6B6B]/30 rounded-2xl flex items-center justify-center text-4xl shadow-md">
                  📦
                </div>
                <div className="absolute -top-3 -right-6 bg-[#FF6B6B] text-white font-extrabold text-[9px] px-2.5 py-1 rounded-full shadow-md whitespace-nowrap">
                  Zero Hidden Charges Guaranteed
                </div>
              </div>

              {/* Vertical Feature Badges */}
              <div className="space-y-2.5 w-full sm:w-auto">
                <div className="flex items-center gap-2.5 bg-white p-2.5 px-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-[#FFF7F5] text-[#FF6B6B] flex items-center justify-center shrink-0 font-bold">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0F172A]">Best Value Rate</span>
                </div>

                <div className="flex items-center gap-2.5 bg-white p-2.5 px-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-[#5CC9C3]/20 text-[#0F766E] flex items-center justify-center shrink-0 font-bold">
                    <Headset className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0F172A]">Live Support Coordinator</span>
                </div>

                <div className="flex items-center gap-2.5 bg-white p-2.5 px-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-[#5CC9C3]/20 text-[#0F766E] flex items-center justify-center shrink-0 font-bold">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0F172A]">Flexible Schedule</span>
                </div>

                <div className="flex items-center gap-2.5 bg-white p-2.5 px-3 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-[#FFF7F5] text-[#FF6B6B] flex items-center justify-center shrink-0 font-bold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0F172A]">Pan-India Coverage</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Reference Price Matrix Table */}
        <div className="mt-10 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
            <div>
              <h3 className="text-base font-black text-[#0F172A]">Standard Relocation Rate Tariff Chart</h3>
              <p className="text-xs text-[#475569]">Indicative market rates (Includes 7-layer packing, loading, & transport)</p>
            </div>
            <span className="text-[11px] font-bold text-[#0F766E] bg-[#5CC9C3]/20 border border-[#0F766E]/20 px-3 py-1 rounded-full">
              IBA Approved GST Invoice Standard
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#0F766E] text-white font-extrabold border-b border-slate-200">
                  <th className="py-3.5 px-4 rounded-l-xl">Move Category</th>
                  <th className="py-3.5 px-4">Local Shifting (Within City)</th>
                  <th className="py-3.5 px-4">Intercity (100 - 500 KM)</th>
                  <th className="py-3.5 px-4">Interstate (&gt; 500 KM)</th>
                  <th className="py-3.5 px-4 rounded-r-xl">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#0F172A]">1 BHK Flat / Apartment</td>
                  <td className="py-3.5 px-4 text-[#0F766E] font-bold">₹3,500 - ₹6,500</td>
                  <td className="py-3.5 px-4">₹8,500 - ₹14,000</td>
                  <td className="py-3.5 px-4">₹14,500 - ₹22,000</td>
                  <td className="py-3.5 px-4">
                    <button onClick={() => onOpenBookingModal({ moveType: "1 BHK Flat" })} className="text-[#FF6B6B] font-extrabold hover:underline cursor-pointer">
                      Book Quote →
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#0F172A]">2 BHK Flat / House</td>
                  <td className="py-3.5 px-4 text-[#0F766E] font-bold">₹6,000 - ₹10,500</td>
                  <td className="py-3.5 px-4">₹12,500 - ₹20,000</td>
                  <td className="py-3.5 px-4">₹20,500 - ₹32,000</td>
                  <td className="py-3.5 px-4">
                    <button onClick={() => onOpenBookingModal({ moveType: "2 BHK Flat" })} className="text-[#FF6B6B] font-extrabold hover:underline cursor-pointer">
                      Book Quote →
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#0F172A]">3 BHK Villa / House</td>
                  <td className="py-3.5 px-4 text-[#0F766E] font-bold">₹9,500 - ₹16,000</td>
                  <td className="py-3.5 px-4">₹18,000 - ₹28,000</td>
                  <td className="py-3.5 px-4">₹28,500 - ₹45,000</td>
                  <td className="py-3.5 px-4">
                    <button onClick={() => onOpenBookingModal({ moveType: "3 BHK House" })} className="text-[#FF6B6B] font-extrabold hover:underline cursor-pointer">
                      Book Quote →
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#0F172A]">Car / Vehicle Carrier</td>
                  <td className="py-3.5 px-4 text-[#0F766E] font-bold">₹2,500 - ₹4,500</td>
                  <td className="py-3.5 px-4">₹6,000 - ₹10,000</td>
                  <td className="py-3.5 px-4">₹11,000 - ₹18,000</td>
                  <td className="py-3.5 px-4">
                    <button onClick={() => onOpenBookingModal({ moveType: "Car Transport" })} className="text-[#FF6B6B] font-extrabold hover:underline cursor-pointer">
                      Book Quote →
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
