"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { Home, Building2, Car, Warehouse, Package, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const serviceGraphics: Record<string, { icon: React.ComponentType<{ className?: string }>; bgGradient: string; badge: string; imagePath: string }> = {
  "home-relocation": { icon: Home, bgGradient: "from-red-50 to-amber-50", badge: "🏡 House Moving", imagePath: "/images/service_home.jpg" },
  "office-relocation": { icon: Building2, bgGradient: "from-blue-50 to-slate-50", badge: "🏢 Commercial", imagePath: "/images/service_office.jpg" },
  "car-bike-transport": { icon: Car, bgGradient: "from-amber-50 to-orange-50", badge: "🚗 Auto Transit", imagePath: "/images/service_vehicle.jpg" },
  "storage-solutions": { icon: Warehouse, bgGradient: "from-emerald-50 to-teal-50", badge: "📦 Safe Warehousing", imagePath: "/images/service_storage.jpg" },
  "loading-unloading": { icon: Package, bgGradient: "from-purple-50 to-pink-50", badge: "👷 Crew Handling", imagePath: "/images/service_loading.jpg" },
  "insurance-assistance": { icon: ShieldCheck, bgGradient: "from-red-50 to-rose-50", badge: "🛡️ 100% Protection", imagePath: "/images/service_insurance.jpg" },
};

interface ServicesProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export default function Services({ onOpenBookingModal }: ServicesProps) {
  return (
    <section id="services" className="py-16 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Right Action Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-xs bg-red-600" />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Complete Relocation & Logistics Services
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              From households to businesses, we move everything with care.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-4 py-2 rounded-full bg-red-50 border border-red-100 text-xs font-bold text-red-600 hover:bg-red-100 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore All Services</span>
              <span>→</span>
            </button>
            <div className="flex items-center gap-1.5">
              <button className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-200">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-200">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {servicesData.map((service) => {
            const graphic = serviceGraphics[service.slug] || { icon: Home, bgGradient: "from-red-50 to-amber-50", badge: "Service", imagePath: "/images/service_home.jpg" };
            const IconComponent = graphic.icon;
            return (
              <div
                key={service.id}
                className="card-mockup p-5 flex flex-col justify-between group hover:border-red-600"
              >
                <div>
                  {/* Service Graphic Illustration Container */}
                  <div className={`w-full h-32 rounded-2xl bg-gradient-to-br ${graphic.bgGradient} mb-4 overflow-hidden relative flex flex-col items-center justify-center border border-slate-200/80 group-hover:scale-105 transition-transform p-3 text-center shadow-2xs`}>
                    <img
                      src={graphic.imagePath}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-red-600 shadow-md mb-2 z-10">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-700 bg-white/90 px-2 py-0.5 rounded-full border border-slate-200 z-10 shadow-xs">
                      {graphic.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium mb-4 line-clamp-2">
                    {service.subtitle}
                  </p>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-bold text-red-600 flex items-center gap-1 group-hover:underline pt-2 border-t border-slate-100"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
