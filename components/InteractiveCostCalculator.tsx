"use client";

import React, { useState } from "react";
import { Calculator, CheckCircle2, ChevronRight, DollarSign, ShieldCheck, ArrowRight, Info } from "lucide-react";

interface InteractiveCostCalculatorProps {
  onOpenBookingModal: (preselectedData?: any) => void;
}

export default function InteractiveCostCalculator({ onOpenBookingModal }: InteractiveCostCalculatorProps) {
  const [step, setStep] = useState(1);
  const [moveType, setMoveType] = useState("2 BHK");
  const [fromCity, setFromCity] = useState("Prayagraj (Allahabad)");
  const [toCity, setToCity] = useState("Delhi NCR");
  const [packTier, setPackTier] = useState<"standard" | "premium">("premium");

  // Dynamic cost calculation logic
  const getBaseCost = () => {
    let base = 4500;
    if (moveType.includes("2 BHK")) base = 8500;
    if (moveType.includes("3 BHK")) base = 14500;
    if (moveType.includes("Office")) base = 18500;
    if (moveType.includes("Car")) base = 6500;

    const isIntercity = fromCity !== toCity;
    const distanceMult = isIntercity ? 1.8 : 1.0;
    const tierMult = packTier === "premium" ? 1.2 : 1.0;

    const estimatedTotal = Math.round(base * distanceMult * tierMult);
    return {
      packing: Math.round(estimatedTotal * 0.3),
      labor: Math.round(estimatedTotal * 0.2),
      transport: Math.round(estimatedTotal * 0.4),
      gst: Math.round(estimatedTotal * 0.1),
      total: estimatedTotal,
    };
  };

  const costs = getBaseCost();

  return (
    <section id="calculator" className="py-20 bg-[#060911] text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Calculate Your Moving Cost
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            Transparent price estimate with zero hidden charges and IBA-approved GST tax breakdown.
          </p>
        </div>

        {/* 21dev Wizard Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          
          {/* Stepper Tabs Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8 max-w-xl mx-auto text-xs font-extrabold">
            <button
              onClick={() => setStep(1)}
              className={`flex items-center gap-2 cursor-pointer ${
                step === 1 ? "text-rose-400 font-black" : "text-slate-500"
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                step === 1 ? "bg-rose-600 text-white" : "bg-slate-800 text-slate-400"
              }`}>1</span>
              <span>1. Category</span>
            </button>

            <ChevronRight className="w-4 h-4 text-slate-700" />

            <button
              onClick={() => setStep(2)}
              className={`flex items-center gap-2 cursor-pointer ${
                step === 2 ? "text-rose-400 font-black" : "text-slate-500"
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                step === 2 ? "bg-rose-600 text-white" : "bg-slate-800 text-slate-400"
              }`}>2</span>
              <span>2. Route</span>
            </button>

            <ChevronRight className="w-4 h-4 text-slate-700" />

            <button
              onClick={() => setStep(3)}
              className={`flex items-center gap-2 cursor-pointer ${
                step === 3 ? "text-rose-400 font-black" : "text-slate-500"
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                step === 3 ? "bg-rose-600 text-white" : "bg-slate-800 text-slate-400"
              }`}>3</span>
              <span>3. Estimate</span>
            </button>
          </div>

          {/* Step 1: Category */}
          {step === 1 && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-center text-white">Select Your Relocation Category</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["1 BHK Flat", "2 BHK Household", "3 BHK Villa", "Office Relocation", "Car / Bike Transport"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setMoveType(cat);
                      setStep(2);
                    }}
                    className={`p-4 rounded-2xl border text-center transition-all cursor-pointer font-bold text-xs ${
                      moveType === cat
                        ? "bg-rose-600/20 border-rose-500 text-white shadow-lg shadow-rose-600/20"
                        : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="text-base mb-1">📦</div>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Route */}
          {step === 2 && (
            <div className="space-y-6 max-w-xl mx-auto">
              <h3 className="text-lg font-bold text-center text-white">Select Pickup & Destination Cities</h3>
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Moving From</label>
                  <select
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-3.5 text-white font-bold focus:border-rose-500 focus:outline-none"
                  >
                    <option value="Prayagraj (Allahabad)">Prayagraj (Allahabad)</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Kolkata">Kolkata</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Moving To</label>
                  <select
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 px-3.5 text-white font-bold focus:border-rose-500 focus:outline-none"
                  >
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Prayagraj (Allahabad)">Prayagraj (Allahabad)</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Kolkata">Kolkata</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Packaging Tier</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPackTier("standard")}
                      className={`p-3 rounded-xl border text-left text-xs ${
                        packTier === "standard"
                          ? "bg-rose-600/20 border-rose-500 text-white font-bold"
                          : "bg-slate-900 border-slate-800 text-slate-400"
                      }`}
                    >
                      <p className="font-extrabold text-white">Standard 5-Layer</p>
                      <p className="text-[10px] opacity-80">Bubble & corrugated boxes</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPackTier("premium")}
                      className={`p-3 rounded-xl border text-left text-xs ${
                        packTier === "premium"
                          ? "bg-rose-600/20 border-rose-500 text-white font-bold"
                          : "bg-slate-900 border-slate-800 text-slate-400"
                      }`}
                    >
                      <p className="font-extrabold text-white">Premium 7-Layer Sealed</p>
                      <p className="text-[10px] opacity-80">Lockable Rolling Box Container</p>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setStep(3)}
                  className="w-full btn-21-red py-3.5 text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-2"
                >
                  <span>View Itemized Cost Breakdown</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Breakdown Result */}
          {step === 3 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
              
              {/* Cost Card Breakdown */}
              <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div>
                    <h4 className="text-base font-black text-white">{moveType}</h4>
                    <p className="text-xs text-slate-400">{fromCity} ➔ {toCity}</p>
                  </div>
                  <span className="bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-full uppercase">
                    {packTier} Tier
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-300 font-medium">
                  <div className="flex justify-between">
                    <span>Professional 7-Layer Packing:</span>
                    <span className="font-bold text-white">₹{costs.packing.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Loading & Unloading Labor:</span>
                    <span className="font-bold text-white">₹{costs.labor.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Closed Container Freight:</span>
                    <span className="font-bold text-white">₹{costs.transport.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IBA Approved GST (5%):</span>
                    <span className="font-bold text-white">₹{costs.gst.toLocaleString()}</span>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-sm font-black text-white">
                  <span>Estimated Total:</span>
                  <span className="text-xl text-rose-400">₹{costs.total.toLocaleString()}*</span>
                </div>

                <p className="text-[10px] text-slate-500">
                  *Includes door-to-door transit insurance policy and personal lockable cube.
                </p>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
                <h4 className="text-lg font-black text-white">Lock In Your Quote Price</h4>
                <p className="text-xs text-slate-400 font-medium">
                  Get official IBA-approved PDF estimate sent directly to your WhatsApp.
                </p>

                <button
                  onClick={() => onOpenBookingModal({ fromCity, toCity, moveType })}
                  className="w-full btn-21-red py-3.5 text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <span>Book This Quote Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setStep(1)}
                  className="w-full text-xs font-bold text-slate-400 hover:text-white cursor-pointer py-1"
                >
                  ← Recalculate
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Reference Price Matrix Table */}
        <div className="mt-12 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
            <div>
              <h3 className="text-lg font-black text-white">Standard Market Rate Tariff Chart</h3>
              <p className="text-xs text-slate-400">Indicative market rates for local & intercity relocations</p>
            </div>
            <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
              IBA Approved GST Invoice Standard
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-slate-300 font-extrabold border-b border-slate-800">
                  <th className="py-3.5 px-4 rounded-l-xl">Move Category</th>
                  <th className="py-3.5 px-4">Local Shifting (Within City)</th>
                  <th className="py-3.5 px-4">Intercity (100 - 500 KM)</th>
                  <th className="py-3.5 px-4">Interstate (&gt; 500 KM)</th>
                  <th className="py-3.5 px-4 rounded-r-xl">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300 font-medium">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">1 BHK Flat / Apartment</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-bold">₹3,500 - ₹6,500</td>
                  <td className="py-3.5 px-4">₹8,500 - ₹14,000</td>
                  <td className="py-3.5 px-4">₹14,500 - ₹22,000</td>
                  <td className="py-3.5 px-4">
                    <button onClick={() => onOpenBookingModal({ moveType: "1 BHK Flat" })} className="text-rose-400 font-extrabold hover:underline cursor-pointer">
                      Book Quote →
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">2 BHK Flat / House</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-bold">₹6,000 - ₹10,500</td>
                  <td className="py-3.5 px-4">₹12,500 - ₹20,000</td>
                  <td className="py-3.5 px-4">₹20,500 - ₹32,000</td>
                  <td className="py-3.5 px-4">
                    <button onClick={() => onOpenBookingModal({ moveType: "2 BHK Flat" })} className="text-rose-400 font-extrabold hover:underline cursor-pointer">
                      Book Quote →
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">3 BHK Villa / House</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-bold">₹9,500 - ₹16,000</td>
                  <td className="py-3.5 px-4">₹18,000 - ₹28,000</td>
                  <td className="py-3.5 px-4">₹28,500 - ₹45,000</td>
                  <td className="py-3.5 px-4">
                    <button onClick={() => onOpenBookingModal({ moveType: "3 BHK House" })} className="text-rose-400 font-extrabold hover:underline cursor-pointer">
                      Book Quote →
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">Car / Vehicle Carrier</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-bold">₹2,500 - ₹4,500</td>
                  <td className="py-3.5 px-4">₹6,000 - ₹10,000</td>
                  <td className="py-3.5 px-4">₹11,000 - ₹18,000</td>
                  <td className="py-3.5 px-4">
                    <button onClick={() => onOpenBookingModal({ moveType: "Car Transport" })} className="text-rose-400 font-extrabold hover:underline cursor-pointer">
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
