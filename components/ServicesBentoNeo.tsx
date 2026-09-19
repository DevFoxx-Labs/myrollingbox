"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Home, Building2, Car, Warehouse, Package, ShieldCheck } from "lucide-react";

interface ServicesBentoNeoProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export default function ServicesBentoNeo({ onOpenBookingModal }: ServicesBentoNeoProps) {
  const services = [
    {
      id: "home-relocation",
      title: "Household Shifting",
      desc: "Complete home relocation with 7-layer packing, lockable rolling boxes, and zero-scratch furniture handling.",
      image: "/images/service_home.jpg",
      icon: Home,
      colSpan: "lg:col-span-8",
      badge: "Most Popular",
    },
    {
      id: "office-relocation",
      title: "Office & Corporate Relocation",
      desc: "Zero-downtime office moves for desks, IT servers, modular workstations, and confidential archives.",
      image: "/images/service_office.jpg",
      icon: Building2,
      colSpan: "lg:col-span-4",
      badge: "Commercial Grade",
    },
    {
      id: "car-bike-transport",
      title: "Vehicle Transport (Car & Bike)",
      desc: "Enclosed hydraulic car carrier trailers and heavy metal bike crates with real-time GPS tracking.",
      image: "/images/service_vehicle.jpg",
      icon: Car,
      colSpan: "lg:col-span-4",
      badge: "Enclosed Carriers",
    },
    {
      id: "storage-warehousing",
      title: "Storage & Warehousing",
      desc: "CCTV-monitored, climate-controlled warehouses with flexible short & long-term storage plans.",
      image: "/images/service_storage.jpg",
      icon: Warehouse,
      colSpan: "lg:col-span-4",
      badge: "24/7 CCTV Monitored",
    },
    {
      id: "packing-unpacking",
      title: "Professional Loading & Packing",
      desc: "Trained uniformed movers utilizing vacuum sealing, corner guards, and heavy-duty bubble wraps.",
      image: "/images/service_loading.jpg",
      icon: Package,
      colSpan: "lg:col-span-4",
      badge: "7-Layer Cushioning",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0B0E17] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF1E4B]/10 border border-[#FF1E4B]/30 text-[#FF1E4B] text-xs font-extrabold uppercase tracking-wider">
              <Package className="w-3.5 h-3.5" />
              <span>Comprehensive Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              End-to-End Relocation Services
            </h2>
            <p className="text-sm text-slate-400 font-medium">
              Tailored shifting solutions engineered for safety, speed, and complete peace of mind across India.
            </p>
          </div>

          <button
            onClick={() => onOpenBookingModal()}
            className="btn-cyber-glass px-6 py-3 text-xs font-bold flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 text-[#FF1E4B]" />
          </button>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {services.map((svc) => {
            const IconComp = svc.icon;
            return (
              <div
                key={svc.id}
                className={`${svc.colSpan} glass-neo rounded-3xl overflow-hidden border border-slate-800 hover:border-[#FF1E4B]/50 transition-all duration-300 group flex flex-col justify-between relative`}
              >
                {/* Image Container with Dark Gradient Overlay */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E17] via-[#0B0E17]/60 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-700 text-[#FF1E4B] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    {svc.badge}
                  </span>

                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-2xl bg-[#FF1E4B]/30 backdrop-blur-md border border-[#FF1E4B]/40 text-white flex items-center justify-center font-extrabold shadow-lg">
                    <IconComp className="w-5 h-5 text-[#FF1E4B]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-3 relative z-10 -mt-10">
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FF1E4B] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {svc.desc}
                  </p>

                  <div className="pt-3 flex items-center justify-between">
                    <Link
                      href={`/services/${svc.id}`}
                      className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <span>Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF1E4B]" />
                    </Link>

                    <button
                      onClick={() => onOpenBookingModal(svc.title)}
                      className="btn-neon-crimson px-4 py-2 text-[11px] font-black cursor-pointer shadow-md"
                    >
                      Book {svc.title.split(" ")[0]}
                    </button>
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
