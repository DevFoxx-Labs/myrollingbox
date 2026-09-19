"use client";

import React, { useState } from "react";
import { MapPin, Search, Phone, ArrowRight, Building, Star, Play, Quote, CheckCircle2, X } from "lucide-react";

interface BranchesAndReviewsLightProps {
  onOpenBookingModal: (cityOrService?: string) => void;
}

export default function BranchesAndReviewsLight({ onOpenBookingModal }: BranchesAndReviewsLightProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const branches = [
    { city: "Prayagraj (Allahabad)", area: "Civil Lines & Naini Industrial Area", phone: "+91 9300 300 300", badge: "Hub Center" },
    { city: "Delhi NCR", area: "Gurugram Hub & Okhla Phase III", phone: "+91 9300 300 301", badge: "Metro Hub" },
    { city: "Mumbai", area: "Andheri East & Vashi Logistics Park", phone: "+91 9300 300 302", badge: "Port Branch" },
    { city: "Bangalore", area: "Whitefield & Electronic City Phase 1", phone: "+91 9300 300 303", badge: "Tech Hub" },
    { city: "Hyderabad", area: "HITEC City & Gachibowli", phone: "+91 9300 300 304", badge: "South Hub" },
    { city: "Pune", area: "Hinjewadi & Wakad Sector 14", phone: "+91 9300 300 305", badge: "West Branch" },
    { city: "Kolkata", area: "Salt Lake Sector V & New Town", phone: "+91 9300 300 306", badge: "East Hub" },
    { city: "Chennai", area: "OMR Guindy & Sriperumbudur", phone: "+91 9300 300 307", badge: "South Branch" },
  ];

  const filtered = branches.filter(
    (b) =>
      b.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const reviews = [
    {
      name: "Rajesh & Meenakshi Sharma",
      location: "Moved Prayagraj ➔ Delhi NCR",
      rating: 5,
      review: "MyRollingBox handled our 3 BHK house move seamlessly. The lockable rolling boxes gave us total peace of mind for our electronics and jewelry!",
      date: "Verified Relocation • 3 Days Ago",
    },
    {
      name: "Anand Hansaria",
      location: "Moved Mumbai ➔ Bangalore",
      rating: 5,
      review: "Outstanding service! They provided IBA approved GST invoices for my bank claim reimbursement. Zero damages to our sofa and LED TV.",
      date: "Verified Relocation • 1 Week Ago",
    },
    {
      name: "Dr. Sunita Deshmukh",
      location: "Moved Pune ➔ Hyderabad",
      rating: 5,
      review: "The 7-layer waterproof wrapping and closed container truck ensured our crockery and artwork arrived without a single scratch.",
      date: "Verified Relocation • 2 Weeks Ago",
    },
  ];

  const corporateClients = ["TCS", "Infosys", "Wipro", "HDFC Bank", "State Bank of India", "ICICI Bank", "L&T"];

  return (
    <section id="branches" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Branch Network Section */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5CC9C3]/15 border border-[#0F766E]/20 text-[#0F766E] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Pan-India Network</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0F172A]">
                100+ City Branch Offices
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] font-medium">
                Fully-owned company branch hubs with 24/7 warehouse facilities across major Indian cities.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search city or branch area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 pr-10 text-xs font-bold text-[#0F172A] placeholder-slate-400 focus:border-[#FF6B6B] focus:outline-none shadow-xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#FF6B6B]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-[#5CC9C3]/20 text-[#0F766E] flex items-center justify-center font-extrabold">
                      <Building className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {b.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-[#0F172A] group-hover:text-[#FF6B6B] transition-colors">
                      {b.city}
                    </h3>
                    <p className="text-xs text-[#475569] font-medium mt-1">
                      {b.area}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
                  <a
                    href={`tel:${b.phone}`}
                    className="flex items-center gap-1.5 text-[#FF6B6B] font-bold hover:underline"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Branch</span>
                  </a>

                  <button
                    onClick={() => onOpenBookingModal(`Move from ${b.city}`)}
                    className="text-xs font-extrabold text-[#0F766E] hover:text-[#FF6B6B] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3 h-3 text-[#FF6B6B]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF7F5] border border-[#FF6B6B]/20 text-[#FF6B6B] text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-[#FF6B6B]" />
              <span>Customer Reviews</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
              Trusted by 20,00,000+ Families
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] font-medium">
              Read authentic feedback from families and business owners who moved with MyRollingBox.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-lg flex flex-col justify-between hover:shadow-2xl hover:border-[#FF6B6B]/30 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <button
                      onClick={() => setActiveVideoModal("video")}
                      className="flex items-center gap-1.5 bg-[#FFF7F5] text-[#FF6B6B] border border-[#FF6B6B]/20 px-3 py-1 rounded-full text-[10px] font-black hover:bg-[#FF6B6B]/10 transition-all cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-[#FF6B6B]" />
                      <span>Watch Story</span>
                    </button>
                  </div>

                  <Quote className="w-8 h-8 text-slate-300" />

                  <p className="text-xs text-[#0F172A] leading-relaxed font-medium">
                    &quot;{rev.review}&quot;
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-extrabold text-[#0F172A]">{rev.name}</h4>
                    <p className="text-[10px] text-[#475569]">{rev.location}</p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Partner Logos */}
        <div className="bg-[#FFF7F5] rounded-3xl p-8 border border-[#FF6B6B]/15 text-center">
          <p className="text-[10px] font-extrabold uppercase text-[#475569] tracking-widest mb-4">
            Preferred Relocation Partner for Corporate & Government Employees
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-[#0F766E] font-black text-sm">
            {corporateClients.map((client, i) => (
              <span key={i} className="hover:text-[#FF6B6B] transition-colors">
                {client}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Video Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl p-6 text-center space-y-4">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-[#FF6B6B] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-black text-[#0F172A]">Verified Customer Story</h3>
            <div className="aspect-video w-full rounded-2xl bg-slate-900 text-white flex items-center justify-center border border-slate-800">
              <p className="text-xs text-slate-300 font-bold p-4">
                [ Verified Customer Relocation Story Video Player ]
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
