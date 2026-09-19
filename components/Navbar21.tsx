"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Package, Phone, Menu, X, MapPin, Search, ShieldCheck, ArrowRight, AlertTriangle } from "lucide-react";

interface Navbar21Props {
  onOpenBookingModal: (preselectedService?: string) => void;
  onOpenTrackingModal: () => void;
}

export default function Navbar21({ onOpenBookingModal, onOpenTrackingModal }: Navbar21Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 21dev Announcement Ticker Dock */}
      <div className="bg-[#060911] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="hidden lg:flex items-center gap-5 text-[11px]">
            <span className="flex items-center gap-1.5 text-amber-400 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              IBA Approved Bills (Govt/Bank Eligible)
            </span>
            <span className="text-slate-700">•</span>
            <button
              onClick={onOpenTrackingModal}
              className="hover:text-rose-400 transition-colors flex items-center gap-1 text-slate-300 cursor-pointer"
            >
              <Search className="w-3 h-3 text-rose-500" />
              <span>Track Consignment</span>
            </button>
            <span className="text-slate-700">•</span>
            <a
              href="#fake-warning"
              className="hover:text-amber-400 transition-colors text-amber-300 font-bold flex items-center gap-1"
            >
              <AlertTriangle className="w-3 h-3 text-amber-400" />
              <span>Beware of Fake Packers Notice</span>
            </a>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              ISO 9001:2015 Certified
            </span>
          </div>

          <div className="mx-auto lg:mx-0 flex items-center gap-4 text-xs font-bold">
            <span className="hidden sm:inline-block text-[11px] text-slate-400 font-normal">
              24/7 Helpline:
            </span>
            <a
              href="tel:+919300300300"
              className="flex items-center gap-1.5 bg-rose-600/20 text-rose-400 border border-rose-500/30 px-3 py-1 rounded-full text-xs font-extrabold hover:bg-rose-600/30 transition-all"
            >
              <Phone className="w-3 h-3 text-rose-400" />
              <span>+91 9300 300 300</span>
            </a>
          </div>

        </div>
      </div>

      {/* 21dev Glass Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-panel shadow-2xl py-3 border-b border-slate-800/80"
            : "bg-[#090D16]/90 backdrop-blur-md border-b border-slate-800/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-rose-500 flex items-center justify-center shadow-lg shadow-rose-600/30 group-hover:scale-105 transition-all">
              <Package className="w-5 h-5 text-white font-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white leading-none">
                My<span className="text-gradient-red">Rolling</span>Box
              </span>
              <span className="text-[9px] text-slate-400 font-bold tracking-widest uppercase mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Packers & Movers India
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold text-slate-300">
            <Link href="/" className="text-rose-400 font-black">
              Home
            </Link>
            <Link href="#services" className="hover:text-rose-400 transition-colors">
              Services
            </Link>
            <Link href="#calculator" className="hover:text-rose-400 transition-colors">
              Rate Calculator
            </Link>
            <Link href="#fake-warning" className="hover:text-rose-400 transition-colors">
              Verification Portal
            </Link>
            <Link href="#packaging" className="hover:text-rose-400 transition-colors">
              Packaging Tech
            </Link>
            <Link href="#branches" className="hover:text-rose-400 transition-colors">
              City Branches
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenTrackingModal}
              className="btn-21-glass px-4 py-2.5 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span>Track Docket</span>
            </button>

            <button
              onClick={() => onOpenBookingModal()}
              className="btn-21-red px-5 py-2.5 text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-rose-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 shadow-2xl mt-2">
            <div className="flex flex-col space-y-3 font-bold text-slate-200 text-sm">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-rose-400 py-1">
                Home
              </Link>
              <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-rose-400 py-1">
                Services
              </Link>
              <Link href="#calculator" onClick={() => setMobileMenuOpen(false)} className="hover:text-rose-400 py-1">
                Rate Calculator
              </Link>
              <Link href="#fake-warning" onClick={() => setMobileMenuOpen(false)} className="hover:text-rose-400 py-1">
                Verification Portal
              </Link>
              <Link href="#packaging" onClick={() => setMobileMenuOpen(false)} className="hover:text-rose-400 py-1">
                Packaging Tech
              </Link>
              <Link href="#branches" onClick={() => setMobileMenuOpen(false)} className="hover:text-rose-400 py-1">
                City Branches
              </Link>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrackingModal();
                }}
                className="w-full btn-21-glass py-3 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4 text-amber-400" />
                <span>Track Consignment</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full btn-21-red py-3 text-xs font-black flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
