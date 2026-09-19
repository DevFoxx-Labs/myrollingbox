"use client";

import React from "react";
import Link from "next/link";
import { Lock, ShieldCheck, Key, CloudRain, Package, Check, ArrowRight } from "lucide-react";

interface RollingBoxTechProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export default function RollingBoxTech({ onOpenBookingModal }: RollingBoxTechProps) {
  const containerTypes = [
    {
      name: "Rolling Box Mini (150 cu.ft)",
      ideal: "Studio Flat / 1 BHK / Single Room",
      capacity: "Up to 1.5 Tons",
      features: ["Personal Padlock Latch", "Rubber Weather Barrier", "Anti-Dust Interior", "Compact Footprint"],
      badge: "Compact",
    },
    {
      name: "Rolling Box Standard (300 cu.ft)",
      ideal: "2 BHK & 3 BHK Apartments",
      capacity: "Up to 3.5 Tons",
      features: ["Double Lock Cylinder", "Heavy Duty Steel Frame", "7-Layer Quilt Padding", "GPS Sensor Ready"],
      badge: "Most Popular",
      featured: true,
    },
    {
      name: "Rolling Box Master (500 cu.ft)",
      ideal: "3-4 BHK Independent Houses / Villas",
      capacity: "Up to 6 Tons",
      features: ["Quad Lock System", "Integrated Hydraulic Latch", "Padded Wall Liners", "Dedicated Sealed Truck"],
      badge: "High Capacity",
    },
  ];

  return (
    <section id="rolling-box" className="py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-extrabold text-red-700">
            <Lock className="w-3.5 h-3.5 text-red-600" />
            <span>The Rolling Box Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why <span className="red-text-gradient">Rolling Box Container</span> is 10x Safer Than Open Trucks
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Standard moving trucks expose your sofa, electronics, and wooden furniture to dust, rain leakage, highway friction, and unauthorized handling. Rolling Boxes solve this completely with private sealed containers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="card-21dev p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center text-red-600">
              <Key className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Personal Key Lock</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              You lock the container at your old house and keep the key. Only you unlock it at your destination. Zero access during transit.
            </p>
          </div>

          <div className="card-21dev p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600">
              <CloudRain className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">100% Weatherproof</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Molded polypropylene shell with rubber gasket seals prevents monsoon water, road grime, and dust from touching your items.
            </p>
          </div>

          <div className="card-21dev p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Zero Item Mixing</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Your goods stay isolated in your dedicated container. No risk of items getting mixed up with another family&apos;s cargo.
            </p>
          </div>

          <div className="card-21dev p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Shock-Absorbing Shell</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Reinforced interior wall padding cushions fragile glassware, LED TVs, and polished wooden furniture on bumpy highways.
            </p>
          </div>
        </div>

        {/* Container Types Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {containerTypes.map((c, i) => (
            <div
              key={i}
              className={`p-8 flex flex-col justify-between ${
                c.featured ? "card-21dev-featured relative" : "card-21dev"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900">
                    {c.badge}
                  </span>
                  <Lock className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{c.name}</h3>
                <p className="text-xs font-bold text-red-600 mb-4">{c.ideal}</p>
                <div className="text-xs font-bold text-slate-700 mb-6 bg-slate-50 py-2.5 px-3 rounded-xl border border-slate-200">
                  Capacity: {c.capacity}
                </div>

                <ul className="space-y-3 text-xs text-slate-600 mb-8 font-medium">
                  {c.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenBookingModal("rolling-box-container")}
                className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer ${
                  c.featured ? "btn-brand-red" : "bg-slate-100 text-slate-900 hover:bg-red-600 hover:text-white transition-colors"
                }`}
              >
                <span>Book This Box Size</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
