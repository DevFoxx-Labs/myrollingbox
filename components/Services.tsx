"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { Home, Building2, Car, Warehouse, Package, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "home-relocation": Home,
  "office-relocation": Building2,
  "car-bike-transport": Car,
  "storage-solutions": Warehouse,
  "loading-unloading": Package,
  "insurance-assistance": ShieldCheck,
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
              className="px-4 py-2 rounded-full bg-red-50 border border-red-100 text-xs font-bold text-red-600 hover:bg-red-100 transition-colors flex items-center gap-1.5"
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
            const IconComponent = serviceIcons[service.slug] || Home;
            return (
              <div
                key={service.id}
                className="card-mockup p-5 flex flex-col justify-between group hover:border-red-600"
              >
                <div>
                  {/* Service Image / Icon Container */}
                  <div className="w-full h-32 rounded-xl bg-slate-100 mb-4 overflow-hidden relative flex items-center justify-center border border-slate-200/80 group-hover:scale-105 transition-transform">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
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
