"use client";

import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Rohit Sharma",
      location: "Delhi",
      review: "Smooth and hassle-free experience! My items reached safely without a single scratch.",
      rating: 5,
    },
    {
      name: "Priya Verma",
      location: "Bangalore",
      review: "Professional team, transparent pricing and on-time delivery. Best movers in India.",
      rating: 5,
    },
    {
      name: "Amit Singh",
      location: "Mumbai",
      review: "The lockable boxes give real peace of mind. Will definitely use again.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-[#FAFAFC] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Title */}
          <div className="lg:col-span-4 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-xs bg-red-600" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Customers Say About MyRollingBox
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Real stories from real customers across India.
            </p>
          </div>

          {/* Right 3 Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="card-mockup p-6 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 gap-1 mb-3">
                    {[...Array(r.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-700 font-medium leading-relaxed italic">
                    &ldquo;{r.review}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-700">
                    {r.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{r.name}</h4>
                    <span className="text-[10px] text-slate-400 font-medium">{r.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Carousel Navigation */}
        <div className="flex items-center justify-center gap-3">
          <button className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100">
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
          </div>
          <button className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100">
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
