import React from "react";
import Link from "next/link";
import { Package, Facebook, Instagram, Youtube, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080D1A] text-slate-400 border-t border-slate-800 text-xs pt-16 pb-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row (5 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white font-black shadow-md">
                <Package className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white leading-none">
                  My<span className="text-red-500">Rolling</span>Box
                </span>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                  Pack. Move. Relax.
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              India&apos;s trusted packers and movers with lockable rolling boxes. Safe. Reliable. Pan India.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 text-slate-400">
              <a href="#" className="w-7 h-7 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors">
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3 font-medium">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link href="/#services" className="hover:text-red-400 transition-colors">Services</Link></li>
              <li><Link href="/#routes" className="hover:text-red-400 transition-colors">Routes</Link></li>
              <li><Link href="/#pricing" className="hover:text-red-400 transition-colors">Pricing</Link></li>
              <li><Link href="/#why-us" className="hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="hover:text-red-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-3 font-medium">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/services/home-relocation" className="hover:text-red-400 transition-colors">Home Relocation</Link></li>
              <li><Link href="/services/office-relocation" className="hover:text-red-400 transition-colors">Office Relocation</Link></li>
              <li><Link href="/services/car-bike-transport" className="hover:text-red-400 transition-colors">Vehicle Transport</Link></li>
              <li><Link href="/services/storage-solutions" className="hover:text-red-400 transition-colors">Storage Solutions</Link></li>
              <li><Link href="/services/loading-unloading" className="hover:text-red-400 transition-colors">Loading & Unloading</Link></li>
              <li><Link href="/services/insurance-assistance" className="hover:text-red-400 transition-colors">Insurance Assistance</Link></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="space-y-3 font-medium">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-red-400 transition-colors">Track Your Move</a></li>
              <li><Link href="/#faqs" className="hover:text-red-400 transition-colors">FAQs</Link></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>

          {/* Column 5: Subscribe to Updates */}
          <div className="space-y-3 font-medium">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Subscribe to Updates</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Get moving tips, offers and the latest updates.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-900 border border-slate-800 rounded-l-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-red-600"
              />
              <button
                type="submit"
                className="bg-red-600 text-white p-2 px-3 rounded-r-xl font-bold hover:bg-red-700 transition-colors"
              >
                ➔
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-medium">
          <div>
            © 2026 MyRollingBox. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 font-bold">
            <span>Moving India, Together</span>
            <span>🇮🇳</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
