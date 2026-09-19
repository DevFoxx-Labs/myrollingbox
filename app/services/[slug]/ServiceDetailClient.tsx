"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BookingModal from "@/components/BookingModal";
import { ServiceItem } from "@/data/servicesData";
import { Lock, CheckCircle2, ShieldCheck, ArrowRight, PhoneCall, HelpCircle, Star, Package, ChevronRight } from "lucide-react";

interface ServiceDetailClientProps {
  service: ServiceItem;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#090e1a]">
      <Navbar onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      <main className="flex-1">
        {/* Breadcrumb & Hero */}
        <section className="bg-gradient-to-b from-[#111a2e] to-[#090e1a] py-12 lg:py-20 border-b border-[#1d2a45]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <Link href="/#services" className="hover:text-amber-400">Services</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-amber-400 font-bold">{service.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400">
                  {service.badge}
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  {service.title}
                </h1>
                <p className="text-lg text-amber-400 font-bold">
                  {service.subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {service.longDescription}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="btn-amber-gold px-8 py-3.5 text-base font-bold flex items-center gap-2 cursor-pointer shadow-xl"
                  >
                    <span>Get Instant Price Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <a
                    href="tel:+919876543210"
                    className="px-6 py-3.5 rounded-xl bg-[#111a2e] border border-[#1d2a45] text-sm font-bold text-white hover:border-amber-500 flex items-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-400" />
                    <span>Call Helpline: +91 98765 43210</span>
                  </a>
                </div>
              </div>

              {/* Key Highlights Card */}
              <div className="lg:col-span-5 card-rolling-featured p-8 bg-[#111a2e] space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Lock className="w-5 h-5 text-amber-400" /> Service Highlights & Safety
                </h3>
                <div className="space-y-3">
                  {service.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#1d2a45] flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 font-bold text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> ISO Certified
                  </span>
                  <span className="flex items-center gap-1 font-bold text-slate-200">
                    <Lock className="w-4 h-4 text-amber-400" /> Personal Key Lock
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & Container Suggestions */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Why Choose This Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.benefits.map((b, bIdx) => (
                <div key={bIdx} className="card-rolling p-6 border border-[#1d2a45] space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-amber-400" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Container Size Pricing Table */}
          {service.recommendedContainers && service.recommendedContainers.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Recommended Container & Rate Estimates</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.recommendedContainers.map((rc, rIdx) => (
                  <div key={rIdx} className="card-rolling p-6 border border-[#1d2a45] space-y-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-500/20 text-amber-400">
                      {rc.type}
                    </span>
                    <h3 className="text-lg font-bold text-white">{rc.name}</h3>
                    <p className="text-xs text-slate-400">Capacity: {rc.capacity}</p>
                    <div className="text-xl font-black text-amber-400 pt-2 border-t border-[#1d2a45]">
                      {rc.estPrice}
                    </div>
                    <button
                      onClick={() => setIsBookingModalOpen(true)}
                      className="w-full btn-amber-gold py-2.5 text-xs font-bold"
                    >
                      Book This Option
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-400" /> Service FAQs
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="card-rolling p-6 border border-[#1d2a45] space-y-2">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Lock className="w-4 h-4 text-amber-400" /> {faq.question}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialData={{ moveType: service.title }}
      />
    </div>
  );
}
