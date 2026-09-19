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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-700">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Prayagraj Headquarters & Contact Hubs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Reach our customer support team 24/7 or visit our primary logistics office in Prayagraj (Allahabad).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Prayagraj Head Office */}
            <div className="card-21dev-featured p-8 bg-white border-red-600 space-y-4 shadow-xl">
              <span className="text-xs font-black px-3 py-1 rounded-full bg-red-600 text-white uppercase">
                ⭐ Main Head Office & Hub
              </span>
              <h3 className="text-xl font-bold text-slate-900">Prayagraj (Allahabad) Hub</h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>
                    MyRollingBox Tower, Civil Lines & Naini Industrial Transport Nagar, Prayagraj (Allahabad), Uttar Pradesh - 211001
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="font-extrabold text-slate-900">Helpline: +91 98765 43210 | Landline: 0532-2400000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>support@myrollingbox.com / prayagraj@myrollingbox.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-600 shrink-0" />
                  <span>24/7 Customer Support & Daily Truck Dispatch</span>
                </div>
              </div>
            </div>

            {/* Metro Branch Network */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card-21dev p-5 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Delhi NCR Office</h4>
                <p className="text-xs text-slate-500 mb-2 font-medium">Transport Nagar, Sec 62, Noida & Gurgaon</p>
                <p className="text-xs font-bold text-red-600">Ph: +91 98765 43211</p>
              </div>
              <div className="card-21dev p-5 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Mumbai Hub</h4>
                <p className="text-xs text-slate-500 mb-2 font-medium">Goregaon West & Thane West, Mumbai</p>
                <p className="text-xs font-bold text-red-600">Ph: +91 98765 43212</p>
              </div>
              <div className="card-21dev p-5 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Bangalore Hub</h4>
                <p className="text-xs text-slate-500 mb-2 font-medium">Whitefield & Electronic City, Bengaluru</p>
                <p className="text-xs font-bold text-red-600">Ph: +91 98765 43213</p>
              </div>
              <div className="card-21dev p-5 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Lucknow Office</h4>
                <p className="text-xs text-slate-500 mb-2 font-medium">Transport Nagar, Gomti Nagar, Lucknow</p>
                <p className="text-xs font-bold text-red-600">Ph: +91 98765 43214</p>
              </div>
            </div>

          </div>

          {/* Right Lead Contact Form */}
          <div className="lg:col-span-6 card-21dev p-8 border border-slate-200 bg-white">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Send Us a Direct Message</h3>
            <p className="text-xs text-slate-500 mb-6 font-medium">Our Prayagraj logistics team will call you back within 15 minutes.</p>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Inquiry Received Successfully!</h4>
                <p className="text-xs text-slate-700 font-medium">
                  Thank you, <span className="font-bold text-red-600">{formData.name}</span>. Our moving supervisor will contact you at <span className="font-bold text-slate-900">{formData.phone}</span> shortly with your detailed quote.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-brand-red px-6 py-2 text-xs font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mobile Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">From City</label>
                    <input
                      type="text"
                      value={formData.fromCity}
                      onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">To City</label>
                    <input
                      type="text"
                      value={formData.toCity}
                      onChange={(e) => setFormData({ ...formData, toCity: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Move Details / Items</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your household goods or vehicle details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-brand-red py-3.5 text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Instant Callback</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
