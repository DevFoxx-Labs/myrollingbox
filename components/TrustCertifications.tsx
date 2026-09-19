"use client";

import React from "react";
import { Award, ShieldCheck, Truck, FileCheck, CheckCircle2 } from "lucide-react";

export default function TrustCertifications() {
  const Badges = [
    {
      icon: FileCheck,
      title: "IBA Approved Bills",
      subtitle: "Eligible for Bank & Govt Relocation Claims",
    },
    {
      icon: ShieldCheck,
      title: "ISO 9001:2015 Certified",
      subtitle: "Certified Relocation Management Quality",
    },
    {
      icon: Truck,
      title: "1200+ GPS Containers",
      subtitle: "Zero Transshipment Sealed Cubes",
    },
    {
      icon: Award,
      title: "Record Book Honored",
      subtitle: "34+ Years of Industry Leadership",
    },
    {
      icon: CheckCircle2,
      title: "100% Transit Insurance",
      subtitle: "Full Value Risk Protection Covered",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-red-600 via-red-700 to-slate-900 py-8 text-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/15 hover:bg-white/15 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-extrabold shrink-0 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black tracking-tight leading-tight text-white">
                    {badge.title}
                  </h4>
                  <p className="text-[10px] text-red-100 font-medium leading-tight mt-0.5">
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
