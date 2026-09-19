"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Home, Building2, Car, Warehouse, Package, ShieldCheck, Check } from "lucide-react";

interface ServicesGridLightProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export default function ServicesGridLight({ onOpenBookingModal }: ServicesGridLightProps) {
  const services = [
    {
      id: "home-relocation",
      title: "Household Shifting Services",
      desc: "Complete home relocation with 7-layer packing, lockable rolling boxes, and zero-scratch furniture handling.",
      image: "/images/service_home.jpg",
      icon: Home,
      badge: "Most Popular",
      features: ["7-Layer Cushioning", "Personal Padlock Sealed", "IBA Invoice Available"],
    },
    {
      id: "office-relocation",
      title: "Office & Corporate Relocation",
      desc: "Zero-downtime office moves for desks, IT servers, modular workstations, and confidential archives.",
      image: "/images/service_office.jpg",
      icon: Building2,
      badge: "Commercial Grade",
      features: ["Weekend Move Option", "IT Server Safe Crates", "Tag & Label Inventory"],
    },
    {
      id: "car-bike-transport",
      title: "Vehicle Transport (Car & Bike)",
      desc: "Enclosed hydraulic car carrier trailers and heavy metal bike crates with real-time GPS tracking.",
      image: "/images/service_vehicle.jpg",
      icon: Car,
      badge: "Enclosed Carriers",
      features: ["Door Pickup & Delivery", "Hydraulic Ramp Loading", "Scratch-Free Caging"],
    },
    {
      id: "storage-warehousing",
      title: "Storage & Warehousing",
      desc: "CCTV-monitored, climate-controlled warehouses with flexible short & long-term storage plans.",
      image: "/images/service_storage.jpg",
      icon: Warehouse,
      badge: "24/7 CCTV Monitored",
      features: ["Fire & Pest Protected", "Priced Per Box / Cubic Ft", "Easy Retrieval Access"],
    },
    {
      id: "packing-unpacking",
      title: "Professional Loading & Packing",
      desc: "Trained uniformed movers utilizing vacuum sealing, corner guards, and heavy-duty bubble wraps.",
      image: "/images/service_loading.jpg",
      icon: Package,
      badge: "Trained Movers",
      features: ["Uniformed Crew", "Bubble & Stretch Wrap", "Unpacking & Setup"],
    },
    {
      id: "goods-insurance",
      title: "Transit Insurance & Coverage",
      desc: "Full value risk coverage policies issued directly with instant claim settlements for total safety.",
      image: "/images/service_insurance.jpg",
      icon: ShieldCheck,
      badge: "100% Guaranteed",
      features: ["Comprehensive Coverage", "Instant Policy Certificate", "Fast Settlement"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7F5] border border-[#FF6B6B]/20 text-[#0F766E] text-xs font-extrabold uppercase tracking-wider">
              <Package className="w-3.5 h-3.5 text-[#FF6B6B]" />
              <span>Comprehensive Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F172A]">
              End-to-End Relocation Solutions
            </h2>
            <p className="text-sm text-[#475569] font-medium">
              Professional packing, transport, and warehousing engineered for maximum safety and convenience across India.
            </p>
          </div>

          <button
            onClick={() => onOpenBookingModal()}
            className="btn-teal-outline px-6 py-3 text-xs font-bold flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Browse All Services</span>
            <ArrowRight className="w-4 h-4 text-[#0F766E]" />
          </button>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => {
            const IconComp = svc.icon;
            return (
              <div
                key={svc.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#FF6B6B]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* Badge */}
                  <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#0F766E] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {svc.badge}
                  </span>

                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-2xl bg-[#FF6B6B] text-white flex items-center justify-center font-black shadow-md">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-[#0F172A] group-hover:text-[#FF6B6B] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed font-normal">
                      {svc.desc}
                    </p>
                  </div>

                  {/* Bullet list */}
                  <div className="space-y-1.5 pt-2">
                    {svc.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#0F766E] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/services/${svc.id}`}
                      className="text-xs font-bold text-[#475569] hover:text-[#FF6B6B] flex items-center gap-1 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF6B6B]" />
                    </Link>

                    <button
                      onClick={() => onOpenBookingModal(svc.title)}
                      className="btn-coral-pill px-4 py-2 text-[11px] font-black cursor-pointer shadow-md"
                    >
                      Book Now
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
