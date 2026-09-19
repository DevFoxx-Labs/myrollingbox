"use client";

import React from "react";
import { Tv, Shirt, Shield, Bike, Box, Sparkles } from "lucide-react";

export default function PackingMaterials() {
  const materials = [
    {
      icon: Tv,
      title: "LED / LCD Screen Safes",
      desc: "Custom heavy-duty wooden frame with high-density EVA foam corner pads for zero-damage screen movement.",
      badge: "Patent Design",
    },
    {
      icon: Shirt,
      title: "Wardrobe Carton Boxes",
      desc: "Vertical hanging wardrobe boxes so suit coats, dresses, and formal wear transfer straight without creasing.",
      badge: "Wrinkle-Free",
    },
    {
      icon: Shield,
      title: "7-Layer Waterproof Wraps",
      desc: "Layered thermocol, bubble wrap, stretch film, edge guards, and corrugated sheets for maximum shock protection.",
      badge: "100% Waterproof",
    },
    {
      icon: Bike,
      title: "Bike & Vehicle Crates",
      desc: "Heavy metal/wooden cages with tire locks to ensure 2-wheelers travel scratch-free across any distance.",
      badge: "Zero-Scratch",
    },
    {
      icon: Box,
      title: "Sealed Lockable Rolling Cubes",
      desc: "Exclusive tamper-proof rolling boxes sealed with customer's personal lock and key at origin.",
      badge: "Personal Key",
    },
    {
      icon: Sparkles,
      title: "Fine Art & Crockery Safes",
      desc: "Honeycomb partitioned cell boxes with velvet tissue cushioning for delicate glass and heirloom ceramics.",
      badge: "Ultra-Delicate",
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Box className="w-3.5 h-3.5" />
            <span>Packaging Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Specialized Packaging Material Innovations
          </h2>

          <p className="text-sm text-slate-400">
            We use zero-compromise, military-grade packing materials matching international relocation standards.
          </p>
        </div>

        {/* 6 Material Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((mat, i) => {
            const IconComp = mat.icon;
            return (
              <div
                key={i}
                className="bg-slate-800/80 border border-slate-700/80 hover:border-red-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-700 text-slate-300 border border-slate-600">
                    {mat.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {mat.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {mat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
