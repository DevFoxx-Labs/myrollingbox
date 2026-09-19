import React from "react";
import Link from "next/link";
import { Package, ShieldCheck, Heart, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800 text-xs pt-16 pb-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row (5 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF6B6B] to-[#FFA89A] flex items-center justify-center text-white font-black shadow-md">
                <Package className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white leading-none">
                  My<span className="text-[#FF6B6B]">Rolling</span><span className="text-[#5CC9C3]">Box</span>
                </span>
                <span className="text-[9px] text-[#FFA89A] font-extrabold uppercase tracking-wider mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CC9C3]" />
                  Move Forward Together
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              India&apos;s most trusted packers &amp; movers equipped with lockable smart rolling boxes. Safe. Transparent. Pan-India Network.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 text-slate-300">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white text-[10px] font-extrabold hover:bg-[#FF6B6B] hover:border-[#FF6B6B] transition-all">
                FB
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white text-[10px] font-extrabold hover:bg-[#FF6B6B] hover:border-[#FF6B6B] transition-all">
                IG
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white text-[10px] font-extrabold hover:bg-[#0F766E] hover:border-[#0F766E] transition-all">
                YT
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white text-[10px] font-extrabold hover:bg-[#0F766E] hover:border-[#0F766E] transition-all">
                IN
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3 font-medium">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-[#FF6B6B] transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-[#FF6B6B] transition-colors">Our Services</Link></li>
              <li><Link href="#calculator" className="hover:text-[#FF6B6B] transition-colors">Rates Calculator</Link></li>
              <li><Link href="#fake-warning" className="hover:text-[#FF6B6B] transition-colors">Verification Portal</Link></li>
              <li><Link href="#packaging" className="hover:text-[#FF6B6B] transition-colors">Packaging Tech</Link></li>
              <li><Link href="#branches" className="hover:text-[#FF6B6B] transition-colors">City Branches</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-3 font-medium">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">Popular Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-[#5CC9C3] transition-colors">House Relocation</a></li>
              <li><a href="#services" className="hover:text-[#5CC9C3] transition-colors">Corporate Office Move</a></li>
              <li><a href="#services" className="hover:text-[#5CC9C3] transition-colors">Car &amp; Bike Transport</a></li>
              <li><a href="#services" className="hover:text-[#5CC9C3] transition-colors">Climate Secure Storage</a></li>
              <li><a href="#services" className="hover:text-[#5CC9C3] transition-colors">Professional Loading</a></li>
              <li><a href="#services" className="hover:text-[#5CC9C3] transition-colors">Full Transit Insurance</a></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="space-y-3 font-medium">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">Support &amp; Trust</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#calculator" className="hover:text-[#FF6B6B] transition-colors">Track Consignment</a></li>
              <li><a href="#faqs" className="hover:text-[#FF6B6B] transition-colors">Frequently Asked FAQs</a></li>
              <li><a href="#fake-warning" className="hover:text-[#FF6B6B] transition-colors">Report Fake Movers</a></li>
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Terms &amp; Conditions</a></li>
              <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 5: Subscribe to Updates */}
          <div className="space-y-3 font-medium">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">Subscribe to Updates</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Receive relocation checklists, discount coupons, and moving safety tips.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-900 border border-slate-700 rounded-l-xl py-2.5 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6B6B]"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FF6B6B] to-[#FFA89A] text-white p-2.5 px-3.5 rounded-r-xl font-bold hover:brightness-110 transition-all flex items-center justify-center cursor-pointer shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <span>© 2026 MyRollingBox. All rights reserved.</span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-[#5CC9C3]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5CC9C3]" />
              ISO 9001:2015 Certified
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300 font-bold">
            <span>Moving India, Together</span>
            <Heart className="w-3 h-3 text-[#FF6B6B] fill-[#FF6B6B]" />
            <span>🇮🇳</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
