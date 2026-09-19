import React from "react";
import { Lock, Shield, Truck, Award, CheckCircle, Zap } from "lucide-react";

export default function MarqueeBar() {
  const tickerItems = [
    { icon: Lock, text: "🔒 Exclusive Personal Lockable Rolling Box Containers — Customer Keeps The Key!" },
    { icon: Truck, text: "🚚 Daily Express Relocation Hub: Prayagraj ↔ Delhi NCR ↔ Mumbai ↔ Bangalore" },
    { icon: Shield, text: "🛡️ 100% Comprehensive Transit Damage Insurance Cover Provided" },
    { icon: Award, text: "⭐ ISO 9001:2015 Certified Safe Cargo Relocation Logistics" },
    { icon: Zap, text: "⚡ 100% Free Doorstep Physical or Video Survey with Zero Hidden Charges" },
    { icon: CheckCircle, text: "📦 7-Layer Weatherproof Anti-Scratch Protective Sheet Wrapping" },
  ];

  return (
    <div className="bg-slate-900 text-white border-y border-slate-800 py-3 overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
        {tickerItems.concat(tickerItems).map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
              <Icon className="w-4 h-4 text-yellow-400 shrink-0" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
