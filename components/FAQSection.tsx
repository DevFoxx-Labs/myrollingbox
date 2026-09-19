"use client";

import React, { useState } from "react";
import { Plus, X, Phone, MessageSquare, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How are your lockable boxes different from regular trucks?",
      a: "Our lockable rolling boxes ensure better safety, protection from weather, and zero item shifting during transit, reducing the risk of damage.",
    },
    {
      q: "Is my household items insured during transit?",
      a: "Yes! Comprehensive 100% transit damage insurance is included with instant policy certificates to cover all accidental road risks.",
    },
    {
      q: "How do I get a quote for my move?",
      a: "You can use our instant online cost calculator, request an immediate callback, or book a free doorstep survey through our helpline.",
    },
    {
      q: "How long does delivery take?",
      a: "Local intra-city moves are completed within 4 to 8 hours. Intercity shipments take 24 to 72 hours with live GPS highway tracking.",
    },
    {
      q: "Do you provide packing and unpacking services?",
      a: "Yes! 7-layer protective packing, loading, unloading, furniture dismantling, and setup are fully handled by our trained crew.",
    },
    {
      q: "Which cities do you serve?",
      a: "We provide pan-India relocation services with 100+ owned company branch offices serving all major cities across India.",
    },
  ];

  return (
    <section id="faqs" className="py-16 bg-[#FAFAFC] relative border-b border-slate-200/80 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Row with Pagination Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-black text-rose-600 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Got Questions? We&apos;ve Got Answers.
            </h2>
          </div>

          {/* Carousel Slider Pagination Indicators */}
          <div className="flex items-center gap-2 self-start sm:self-center">
            <button className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:border-slate-400 hover:text-slate-900 transition-colors shadow-2xs">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1 px-1">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
              <span className="w-2 h-2 rounded-full bg-slate-300" />
            </div>
            <button className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:border-slate-400 hover:text-slate-900 transition-colors shadow-2xs">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Grid: Left Accordion + Right Support Representative Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Accordion Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md space-y-3 flex flex-col justify-between">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-slate-200 shadow-2xs"
                      : "bg-white border-slate-100 hover:border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {/* Left Radio Icon */}
                      {isOpen ? (
                        <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 border border-rose-200 flex items-center justify-center text-xs font-black shrink-0">
                          <X className="w-3 h-3 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-slate-300 shrink-0" />
                      )}
                      
                      <span className={isOpen ? "text-slate-900 font-extrabold" : "text-slate-800 font-bold"}>
                        {faq.q}
                      </span>
                    </div>

                    {/* Right Action Icon */}
                    {!isOpen && (
                      <Plus className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pl-12 text-xs text-slate-600 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Customer Support Representative Box */}
          <div className="lg:col-span-5 bg-[#FFF5F5] rounded-3xl p-7 sm:p-8 border border-rose-100 relative overflow-hidden shadow-md flex flex-col justify-between min-h-[380px]">
            
            {/* Background Cutout Image of Customer Support Woman */}
            <div className="absolute top-0 right-0 bottom-0 w-1/2 sm:w-5/12 pointer-events-none overflow-hidden">
              <img
                src="/images/support_woman.jpg"
                alt="MyRollingBox Support Representative"
                className="w-full h-full object-cover object-left"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>

            {/* Content Left Overlay */}
            <div className="relative z-10 max-w-[60%] space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Still have questions?
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-normal">
                  Our support team is here to help you.
                </p>
              </div>

              {/* Pill CTAs */}
              <div className="space-y-3 pt-2">
                <a
                  href="tel:+919300300300"
                  className="w-full bg-white text-rose-600 border-2 border-rose-500 font-extrabold text-xs py-3 px-5 rounded-full flex items-center justify-center gap-2 shadow-xs hover:bg-rose-50 transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/919300300300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-emerald-600 border-2 border-emerald-500 font-extrabold text-xs py-3 px-5 rounded-full flex items-center justify-center gap-2 shadow-xs hover:bg-emerald-50 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <p className="text-[10px] text-slate-500 font-bold tracking-wide pt-1">
                Available Mon - Sat, 9AM - 9PM
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
