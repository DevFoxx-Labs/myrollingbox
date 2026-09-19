"use client";

import React from "react";
import { Tv, Shirt, Shield, Bike, Box, Sparkles } from "lucide-react";

export default function PackagingTechLight() {
  const materials = [
    {
      icon: Tv,
      title: "LED / LCD Screen Safes",
      desc: "Custom heavy wooden frame padded with high-density EVA foam corner blocks for zero screen vibration.",
      badge: "Patent Protected",
    },
    {
      icon: Shirt,
      title: "Wrinkle-Free Wardrobe Cartons",
      desc: "Vertical hanging wardrobe crates so suit coats and dresses transfer straight without creasing.",
      badge: "Wrinkle-Free",
    },
    {
      icon: Shield,
      title: "7-Layer Thermo-Bubble Wraps",
      desc: "Layered thermocol, air-bubble wrap, stretch film, edge guards, and corrugated sheets.",
      badge: "100% Waterproof",
    },
    {
      icon: Bike,
      title: "Heavy Bike & Scooter Metal Crates",
      desc: "Heavy-duty steel cages with tire locks to ensure 2-wheelers travel scratch-free across any distance.",
      badge: "Zero-Scratch",
    },
    {
      icon: Box,
      title: "Sealed Rolling Box Containers",
      desc: "Exclusive tamper-proof rolling boxes sealed with customer's personal padlock at origin.",
      badge: "Personal Key",
    },
    {
      icon: Sparkles,
      title: "Fine Art & Crockery Cell Safes",
      desc: "Honeycomb partitioned cell boxes with velvet tissue cushioning for delicate glass and heirloom ceramics.",
      badge: "Ultra-Delicate",
    },
  ];

  return (
    <section id="packaging" className="py-20 bg-[#064E4B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5CC9C3]/20 border border-[#5CC9C3]/40 text-[#5CC9C3] text-xs font-extrabold uppercase tracking-wider">
            <Box className="w-3.5 h-3.5" />
            <span>Packaging Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Specialized Packaging Material Innovations
          </h2>

          <p className="text-xs sm:text-sm text-teal-100 font-medium">
            Military-grade packing materials engineered to meet international relocation standards.
          </p>
        </div>

        {/* 6 Material Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((mat, i) => {
            const IconComp = mat.icon;
            return (
              <div
                key={i}
                className="bg-[#0F766E]/60 border border-teal-600/50 hover:border-[#FF6B6B]/60 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF6B6B]/20 border border-[#FF6B6B]/40 flex items-center justify-center text-[#FF6B6B] group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full bg-[#064E4B] text-[#5CC9C3] border border-teal-600">
                      {mat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white mb-2 group-hover:text-[#5CC9C3] transition-colors">
                    {mat.title}
                  </h3>

                  <p className="text-xs text-teal-100/90 leading-relaxed font-normal">
                    {mat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-teal-700/60 mt-6 flex items-center justify-between text-[10px] text-teal-200 font-bold">
                  <span>Zero Transshipment Safe</span>
                  <span className="text-[#5CC9C3]">Verified Quality ✓</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
