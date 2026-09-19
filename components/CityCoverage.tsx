"use client";

import React from "react";
import Link from "next/link";
import { locationsData } from "@/data/locationsData";

const routeImageMap: Record<string, string> = {
  "Prayagraj ➔ Delhi": "/images/route_delhi.jpg",
  "Prayagraj ➔ Mumbai": "/images/route_mumbai.jpg",
  "Prayagraj ➔ Bangalore": "/images/route_bangalore.jpg",
  "Prayagraj ➔ Hyderabad": "/images/route_hyderabad.jpg",
  "Prayagraj ➔ Kolkata": "/images/route_kolkata.jpg",
};

interface CityCoverageProps {
  onOpenBookingModal: (preselectedData?: any) => void;
}

export default function CityCoverage({ onOpenBookingModal }: CityCoverageProps) {
  const prayagrajHub = locationsData.find((l) => l.id === "loc-prayagraj");

  return (
    <section id="routes" className="py-16 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-xs bg-red-600" />
              <span>Popular Routes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Prayagraj Head Hub & Interstate Express Routes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Fast, reliable and affordable moving across major Indian cities.
            </p>
          </div>

          <div>
            <button
              onClick={() => onOpenBookingModal()}
              className="px-4 py-2 rounded-full bg-red-50 border border-red-100 text-xs font-bold text-red-600 hover:bg-red-100 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>View All Routes</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* 5 City Route Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {prayagrajHub?.popularRoutes.map((route, rIdx) => {
            const imgSrc = routeImageMap[route.destination] || "/images/route_delhi.jpg";
            return (
              <div
                key={rIdx}
                onClick={() => onOpenBookingModal({ fromCity: "Prayagraj", toCity: route.destination.split("➔")[1]?.trim() })}
                className="card-mockup p-4 flex flex-col justify-between group hover:border-red-600 cursor-pointer"
              >
                <div>
                  {/* Photo Thumbnail */}
                  <div className="w-full h-32 rounded-xl bg-slate-100 mb-3 overflow-hidden relative flex items-center justify-center border border-slate-200/80 group-hover:scale-105 transition-transform">
                    <img
                      src={imgSrc}
                      alt={route.destination}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="text-2xl z-10">🏛️</div>
                  </div>

                  <h3 className="text-xs font-extrabold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">
                    {route.destination}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-2">
                  <div className="text-xs font-bold text-red-600">
                    From <strong className="font-black">{route.startingPrice}</strong>
                  </div>

                  <div className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-xs font-bold group-hover:bg-red-600 group-hover:text-white transition-colors">
                    →
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
