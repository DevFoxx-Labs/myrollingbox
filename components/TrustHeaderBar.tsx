"use client";

import React from "react";
import { Award, ShieldCheck, Truck, FileCheck, CheckCircle2 } from "lucide-react";

export default function TrustHeaderBar() {
  const Badges = [
    {
      icon: FileCheck,
      title: "IBA Approved Bills",
      subtitle: "Code: APM/10982/2026 (Govt/Bank Claim Eligible)",
    },
    {
      icon: ShieldCheck,
      title: "ISO 9001:2015 Certified",
      subtitle: "Verified Quality Management Standard",
    },
    {
      icon: Truck,
      title: "1200+ GPS Containers",
      subtitle: "Zero Transshipment Sealed Cubes",
    },
    {
      icon: Award,
      title: "Limca Record Holder",
      subtitle: "34+ Years of Industry Leadership",
    },
    {
      icon: CheckCircle2,
      title: "100% Transit Covered",
      subtitle: "Full Value Risk Policy Guarantee",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-rose-950 via-slate-900 to-amber-950 py-6 border-y border-slate-800 text-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {Badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-extrabold shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    {badge.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
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
