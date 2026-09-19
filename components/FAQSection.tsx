"use client";

import React, { useState } from "react";
import { Plus, Phone, MessageSquare } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How are your lockable boxes different from regular trucks?",
      a: "Our lockable rolling boxes ensure better safety, protection from weather, and zero item shifting during transit, reducing the risk of damage.",
    },
    {
      q: "Is my household items insured during transit?",
      a: "Yes! Full transit damage insurance is available to cover accidental road risks or mishaps.",
    },
    {
      q: "How do I get a quote for my move?",
      a: "You can use our online price calculator, request an instant callback, or schedule a free doorstep survey.",
    },
    {
      q: "How long does delivery take?",
      a: "Local moves take 4 to 8 hours. Intercity shipments typically take 24 to 72 hours depending on distance.",
    },
    {
      q: "Do you provide packing and unpacking services?",
      a: "Yes, 7-layer packing, loading, unloading, and furniture reassembly are all included.",
    },
    {
      q: "Which cities do you serve?",
      a: "We provide pan-India logistics serving over 150+ cities across all major Indian states.",
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-xs bg-red-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Got Questions? We&apos;ve Got Answers.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Accordions */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  openIdx === idx
                    ? "bg-[#FFF1F2] border-red-200"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    {openIdx === idx && (
                      <span className="w-2 h-2 rounded-xs bg-red-600 shrink-0" />
                    )}
                    <span>{faq.q}</span>
                  </span>
                  <Plus
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300 ${
                      openIdx === idx ? "rotate-45 text-red-600" : ""
                    }`}
                  />
                </button>

                {openIdx === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 font-medium leading-relaxed border-t border-red-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Customer Support Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-b from-red-50 to-red-100 rounded-3xl p-8 border border-red-200 text-center space-y-6 shadow-md relative overflow-hidden">
              
              {/* Headset Girl / Support Image Banner */}
              <div className="w-24 h-24 mx-auto rounded-full bg-red-600 flex items-center justify-center text-white text-3xl shadow-lg">
                🎧
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900 mb-1">Still have questions?</h3>
                <p className="text-xs text-slate-600 font-medium">
                  Our support team is here to help you.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="tel:+919876543210"
                  className="w-full btn-outline-pill py-3 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-emerald-600 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <p className="text-[10px] text-slate-500 font-medium pt-2">
                Available Mon - Sat, 9AM - 8PM
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
