"use client";

import React, { useState } from "react";
import { MapPin, Search, Phone, ArrowRight, Building } from "lucide-react";

interface CityBranchLocatorProps {
  onOpenBookingModal: (city?: string) => void;
}

export default function CityBranchLocator({ onOpenBookingModal }: CityBranchLocatorProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const branches = [
    { city: "Prayagraj (Allahabad)", area: "Civil Lines & Naini Industrial Area", phone: "+91 9300 300 300", badge: "Hub Center" },
    { city: "Delhi NCR", area: "Gurugram Hub & Okhla Phase III", phone: "+91 9300 300 301", badge: "Metro Hub" },
    { city: "Mumbai", area: "Andheri East & Vashi Logistics Park", phone: "+91 9300 300 302", badge: "Port Branch" },
    { city: "Bangalore", area: "Whitefield & Electronic City Phase 1", phone: "+91 9300 300 303", badge: "Tech Hub" },
    { city: "Hyderabad", area: "HITEC City & Gachibowli", phone: "+91 9300 300 304", badge: "South Hub" },
    { city: "Pune", area: "Hinjewadi & Wakad Sector 14", phone: "+91 9300 300 305", badge: "West Branch" },
    { city: "Kolkata", area: "Salt Lake Sector V & New Town", phone: "+91 9300 300 306", badge: "East Hub" },
    { city: "Chennai", area: "OMR Guindy & Sriperumbudur", phone: "+91 9300 300 307", badge: "South Branch" },
  ];

  const filtered = branches.filter(
    (b) =>
      b.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="branches" className="py-20 bg-[#090D16] text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Pan-India Presence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Pan-India Branch Network
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Over 100+ fully-owned company branch offices and warehouses across India.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search city or branch area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-3 px-4 pr-10 text-xs font-bold text-white placeholder-slate-500 focus:border-rose-500 focus:outline-none shadow-lg"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
          </div>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((b, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-5 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-extrabold">
                    <Building className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                    {b.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors">
                    {b.city}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {b.area}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs">
                <a
                  href={`tel:${b.phone}`}
                  className="flex items-center gap-1.5 text-rose-400 font-bold hover:underline"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call Branch</span>
                </a>

                <button
                  onClick={() => onOpenBookingModal(`Move from ${b.city}`)}
                  className="text-xs font-extrabold text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3 h-3 text-rose-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
