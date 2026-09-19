"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactLocations() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    fromCity: "Prayagraj",
    toCity: "Delhi NCR",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF7F5] border border-[#FF6B6B]/20 text-xs font-bold text-[#FF6B6B]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Prayagraj Headquarters & Contact Hubs
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed font-medium">
            Reach our customer support team 24/7 or visit our primary logistics office in Prayagraj (Allahabad).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Prayagraj Head Office */}
            <div className="p-8 bg-[#FFF7F5] rounded-3xl border border-[#FF6B6B]/20 space-y-4 shadow-md">
              <span className="text-xs font-black px-3 py-1 rounded-full bg-[#FF6B6B] text-white uppercase">
                ⭐ Main Head Office & Hub
              </span>
              <h3 className="text-xl font-bold text-[#0F172A]">Prayagraj (Allahabad) Hub</h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-[#475569] font-medium">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF6B6B] shrink-0 mt-0.5" />
                  <span>
                    MyRollingBox Tower, Civil Lines & Naini Industrial Transport Nagar, Prayagraj (Allahabad), Uttar Pradesh - 211001
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0F766E] shrink-0" />
                  <span className="font-extrabold text-[#0F172A]">Helpline: +91 9300 300 300 | Landline: 0532-2400000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FF6B6B] shrink-0" />
                  <span>info@myrollingbox.com | support@myrollingbox.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#0F766E] shrink-0" />
                  <span>Working Hours: 24/7 Support & Operation Center</span>
                </div>
              </div>
            </div>

            {/* Delhi & Regional Hubs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                <h4 className="font-extrabold text-[#0F172A]">Delhi NCR Hub</h4>
                <p className="text-slate-600 font-medium">Okhla Phase III & Gurugram Logistics Hub</p>
                <p className="text-[#FF6B6B] font-bold">+91 9300 300 301</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
                <h4 className="font-extrabold text-[#0F172A]">Mumbai Hub</h4>
                <p className="text-slate-600 font-medium">Andheri East & Vashi Transport Complex</p>
                <p className="text-[#FF6B6B] font-bold">+91 9300 300 302</p>
              </div>
            </div>

          </div>

          {/* Right Direct Message Form */}
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-black text-[#0F172A]">Send an Inquiry</h3>
              <p className="text-xs text-slate-500 font-medium">Our coordinator will call you within 15 minutes.</p>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#5CC9C3]/15 border border-[#0F766E]/20 text-[#0F766E] rounded-2xl text-center space-y-2">
                <CheckCircle className="w-10 h-10 mx-auto text-[#0F766E]" />
                <h4 className="font-extrabold text-base">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-slate-700">Our Prayagraj team will call you shortly on your provided number.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-3.5 text-slate-900 font-semibold focus:border-[#FF6B6B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-3.5 text-slate-900 font-semibold focus:border-[#FF6B6B] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">From City</label>
                    <input
                      type="text"
                      placeholder="Pickup city"
                      value={formData.fromCity}
                      onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-3.5 text-slate-900 font-semibold focus:border-[#FF6B6B] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">To City</label>
                    <input
                      type="text"
                      placeholder="Destination city"
                      value={formData.toCity}
                      onChange={(e) => setFormData({ ...formData, toCity: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-3.5 text-slate-900 font-semibold focus:border-[#FF6B6B] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Shifting Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about items or move date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-3.5 text-slate-900 font-semibold focus:border-[#FF6B6B] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-coral-pill py-3.5 text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry Now</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
