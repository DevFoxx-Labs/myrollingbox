"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BookingModal from "@/components/BookingModal";
import { LocationItem } from "@/data/locationsData";
import { MapPin, Lock, CheckCircle2, ArrowRight, PhoneCall, ChevronRight, Navigation, ShieldCheck, HelpCircle } from "lucide-react";

interface LocationDetailClientProps {
  location: LocationItem;
}

export default function LocationDetailClient({ location }: LocationDetailClientProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#090e1a]">
      <Navbar onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#111a2e] to-[#090e1a] py-12 lg:py-20 border-b border-[#1d2a45]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <Link href="/#locations" className="hover:text-amber-400">Locations</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-amber-400 font-bold">{location.cityName}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400">
                  {location.badge}
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  {location.title}
                </h1>
                <p className="text-lg text-amber-400 font-bold">
                  {location.tagline}
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {location.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="btn-amber-gold px-8 py-3.5 text-base font-bold flex items-center gap-2 cursor-pointer shadow-xl"
                  >
                    <span>Get Free {location.cityName} Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <a
                    href="tel:+919876543210"
                    className="px-6 py-3.5 rounded-xl bg-[#111a2e] border border-[#1d2a45] text-sm font-bold text-white hover:border-amber-500 flex items-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-400" />
                    <span>Call Hub: +91 98765 43210</span>
                  </a>
                </div>
              </div>

              {/* Local Sectors Card */}
              <div className="lg:col-span-5 card-rolling-featured p-8 bg-[#111a2e] space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-400" /> Local Areas Covered in {location.cityName}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {location.coveredAreas.map((area, aIdx) => (
                    <span key={aIdx} className="text-xs font-semibold px-2.5 py-1 rounded bg-[#090e1a] border border-[#1d2a45] text-slate-300">
                      📍 {area}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-[#1d2a45] text-xs text-slate-400 flex items-center gap-2 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Doorstep Physical & Video Survey Available
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Intercity Routes & Rate Tables */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Popular Routes */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Navigation className="w-6 h-6 text-amber-400" /> Direct Outstation Container Routes from {location.cityName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.popularRoutes.map((route, rIdx) => (
                <div key={rIdx} className="card-rolling p-6 border border-[#1d2a45] space-y-3">
                  <h3 className="text-lg font-bold text-white">{route.destination}</h3>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Distance: <strong className="text-white">{route.distance}</strong></span>
                    <span>Transit: <strong className="text-white">{route.estDuration}</strong></span>
                  </div>
                  <div className="text-xl font-black text-amber-400 pt-2 border-t border-[#1d2a45] flex items-center justify-between">
                    <span>From {route.startingPrice}</span>
                    <button
                      onClick={() => setIsBookingModalOpen(true)}
                      className="btn-amber-gold px-3 py-1.5 text-xs font-bold"
                    >
                      Book Route
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Local Rate Matrix Table */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Standard Moving Rates in {location.cityName}</h2>
            <div className="card-rolling border border-[#1d2a45] overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-[#090e1a] text-slate-200 uppercase font-bold text-[11px] border-b border-[#1d2a45]">
                  <tr>
                    <th className="p-4">Move Type</th>
                    <th className="p-4">Local City Shifting</th>
                    <th className="p-4">Intercity Express Rate</th>
                    <th className="p-4">Est. Packing Time</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1d2a45]">
                  {location.ratesTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#111a2e]/60">
                      <td className="p-4 font-bold text-white">{row.type}</td>
                      <td className="p-4 text-emerald-400 font-bold">{row.localRate}</td>
                      <td className="p-4 text-amber-400 font-bold">{row.intercityRate}</td>
                      <td className="p-4">{row.packingTime}</td>
                      <td className="p-4">
                        <button
                          onClick={() => setIsBookingModalOpen(true)}
                          className="btn-amber-gold px-3 py-1 text-xs font-bold"
                        >
                          Book Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* City FAQs */}
          {location.faqs && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-amber-400" /> {location.cityName} Moving FAQs
              </h2>
              <div className="space-y-4">
                {location.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="card-rolling p-6 border border-[#1d2a45] space-y-2">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Lock className="w-4 h-4 text-amber-400" /> {faq.question}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed pl-6">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialData={{ fromCity: location.cityName }}
      />
    </div>
  );
}
