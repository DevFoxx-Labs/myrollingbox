"use client";

import React from "react";
import { MessageSquare, Phone } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/919876543210?text=Hello%20MyRollingBox!%20I%20want%20to%20get%20a%20relocation%20quote%20for%20household/vehicle%20moving.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Phone Call Float */}
      <a
        href="tel:+919876543210"
        className="w-12 h-12 rounded-full bg-[#111a2e] border border-amber-500/50 text-amber-400 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
        aria-label="Call Customer Helpline"
        title="Call Helpline: +91 98765 43210"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Float */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
        <MessageSquare className="w-6 h-6 fill-slate-950 text-emerald-500" />
      </a>
    </div>
  );
}
