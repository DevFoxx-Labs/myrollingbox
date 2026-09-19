"use client";

import React, { useState } from "react";
import { Star, Play, Quote, CheckCircle2, ShieldCheck, X } from "lucide-react";

export default function ReviewsCarousel() {
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const reviews = [
    {
      name: "Rajesh & Meenakshi Sharma",
      location: "Moved Prayagraj ➔ Delhi NCR",
      rating: 5,
      review: "MyRollingBox handled our 3 BHK house move seamlessly. The lockable rolling boxes gave us total peace of mind for our electronics and jewelry!",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      date: "Verified Relocation • 3 Days Ago",
    },
    {
      name: "Anand Hansaria",
      location: "Moved Mumbai ➔ Bangalore",
      rating: 5,
      review: "Outstanding service! They provided IBA approved GST invoices for my bank claim reimbursement. Zero damages to our sofa and LED TV.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      date: "Verified Relocation • 1 Week Ago",
    },
    {
      name: "Dr. Sunita Deshmukh",
      location: "Moved Pune ➔ Hyderabad",
      rating: 5,
      review: "The 7-layer waterproof wrapping and closed container truck ensured our crockery and artwork arrived without a single scratch.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      date: "Verified Relocation • 2 Weeks Ago",
    },
  ];

  const corporateClients = ["TCS", "Infosys", "Wipro", "HDFC Bank", "State Bank of India", "ICICI Bank", "L&T"];

  return (
    <section className="py-20 bg-[#060911] text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/20 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-rose-400" />
            <span>Customer Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Trusted by 20,00,000+ Families
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            Read verified reviews from customers who experienced stress-free relocation with MyRollingBox.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-7 border border-slate-800 flex flex-col justify-between hover:border-rose-500/40 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveVideoModal(rev.videoUrl)}
                    className="flex items-center gap-1.5 bg-rose-600/20 text-rose-400 border border-rose-500/30 px-3 py-1 rounded-full text-[10px] font-black hover:bg-rose-600/30 transition-all cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-rose-400" />
                    <span>Watch Video</span>
                  </button>
                </div>

                <Quote className="w-8 h-8 text-slate-700" />

                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  &quot;{rev.review}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-extrabold text-white">{rev.name}</h4>
                  <p className="text-[10px] text-slate-400">{rev.location}</p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Logos Marquee Bar */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 text-center">
          <p className="text-[10px] font-extrabold uppercase text-slate-400 tracking-widest mb-4">
            Official Relocation Partner for Employees of Leading Corporations
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-400 font-black text-sm opacity-80">
            {corporateClients.map((client, i) => (
              <span key={i} className="hover:text-white transition-colors">
                {client}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Video Modal Popup */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-rose-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 text-center space-y-4">
              <h3 className="text-lg font-black text-white">Verified Customer Experience</h3>
              <div className="aspect-video w-full rounded-2xl bg-slate-950 flex items-center justify-center border border-slate-800">
                <p className="text-xs text-slate-400 font-bold p-4">
                  [ Video Testimonial Preview Player — 100% Verified Customer Relocation Story ]
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
