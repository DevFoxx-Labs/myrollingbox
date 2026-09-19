"use client";

import React from "react";
import { Award, ShieldCheck, Truck, FileCheck, CheckCircle2 } from "lucide-react";

export default function TrustCertificationsLight() {
  const Badges = [
    {
      icon: FileCheck,
      title: "IBA Approved Bills",
      subtitle: "Code: APM/10982/2026 (Govt/Bank Claims)",
    },
    {
      icon: ShieldCheck,
      title: "ISO 9001:2015 Quality",
      subtitle: "Verified Relocation Management",
    },
    {
      icon: Truck,
      title: "1200+ GPS Containers",
      subtitle: "Zero Transshipment Sealed Cubes",
    },
    {
      icon: Award,
      title: "Limca Record Book",
      subtitle: "34+ Years Industry Leadership",
    },
    {
      icon: CheckCircle2,
      title: "100% Transit Covered",
      subtitle: "Full Value Risk Policy Protection",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#0F766E] via-[#064E4B] to-[#0F172A] py-8 text-white select-none shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {Badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-xs p-3.5 rounded-2xl border border-white/20 hover:bg-white/20 transition-all flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF6B6B] text-white flex items-center justify-center font-extrabold shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black tracking-tight text-white group-hover:text-[#5CC9C3] transition-colors">
                    {badge.title}
                  </h4>
                  <p className="text-[10px] text-teal-100 font-medium leading-tight mt-0.5">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
