"use client";

import React, { useState } from "react";
import { MapPin, Search, Phone, ArrowRight, Building, Star, Play, Quote, CheckCircle2, X } from "lucide-react";

interface BranchesAndReviewsNeoProps {
  onOpenBookingModal: (cityOrService?: string) => void;
}

export default function BranchesAndReviewsNeo({ onOpenBookingModal }: BranchesAndReviewsNeoProps) {
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
    <section id="branches" className="py-20 bg-[#070A12] text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Branch Network Section */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Pan-India Presence</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                100+ City Branch Network
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Fully-owned company branch hubs with 24/7 warehouse facilities across major Indian cities.
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search city or branch area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-2xl py-3 px-4 pr-10 text-xs font-bold text-white placeholder-slate-500 focus:border-[#FF1E4B] focus:outline-none shadow-lg"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((b, idx) => (
              <div
                key={idx}
                className="glass-neo rounded-3xl p-5 border border-slate-800 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-extrabold">
                      <Building className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-slate-800">
                      {b.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors">
                      {b.city}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-1">
                      {b.area}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs">
                  <a
                    href={`tel:${b.phone}`}
                    className="flex items-center gap-1.5 text-[#FF1E4B] font-bold hover:underline"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Branch</span>
                  </a>

                  <button
                    onClick={() => onOpenBookingModal(`Move from ${b.city}`)}
                    className="text-xs font-extrabold text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3 h-3 text-[#FF1E4B]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF1E4B]/10 border border-[#FF1E4B]/30 text-[#FF1E4B] text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-[#FF1E4B]" />
              <span>Customer Reviews</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Trusted by 20,00,000+ Families
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Read authentic feedback from families and business owners who moved with MyRollingBox.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="glass-neo rounded-3xl p-7 border border-slate-800 flex flex-col justify-between hover:border-[#FF1E4B]/40 transition-all duration-300 relative group"
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
                      className="flex items-center gap-1.5 bg-[#FF1E4B]/20 text-[#FF1E4B] border border-[#FF1E4B]/30 px-3 py-1 rounded-full text-[10px] font-black hover:bg-[#FF1E4B]/30 transition-all cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-[#FF1E4B]" />
                      <span>Watch Story</span>
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
        </div>

        {/* Corporate Logos Bar */}
        <div className="glass-neo rounded-2xl p-6 border border-slate-800 text-center">
          <p className="text-[10px] font-extrabold uppercase text-slate-400 tracking-widest mb-4">
            Official Relocation Partner for Employees of Leading Corporations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-400 font-black text-sm">
            {corporateClients.map((client, i) => (
              <span key={i} className="hover:text-white transition-colors">
                {client}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Video Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl p-6 text-center space-y-4">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#FF1E4B] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-black text-white">Verified Customer Experience</h3>
            <div className="aspect-video w-full rounded-2xl bg-slate-950 text-white flex items-center justify-center border border-slate-800">
              <p className="text-xs text-slate-400 font-bold p-4">
                [ Verified Customer Relocation Story Video Player ]
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
