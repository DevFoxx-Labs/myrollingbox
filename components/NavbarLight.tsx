"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Package, Phone, Menu, X, MapPin, Search, ShieldCheck, ArrowRight, AlertTriangle } from "lucide-react";

interface NavbarLightProps {
  onOpenBookingModal: (preselectedService?: string) => void;
  onOpenTrackingModal: () => void;
}

export default function NavbarLight({ onOpenBookingModal, onOpenTrackingModal }: NavbarLightProps) {
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
      {/* Top Navy Announcement Dock */}
      <div className="bg-[#0F172A] text-slate-200 text-xs py-2 px-4 border-b border-slate-800 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="hidden lg:flex items-center gap-5 text-[11px]">
            <span className="flex items-center gap-1.5 text-[#F59E0B] font-extrabold">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              IBA Approved Bills (Govt & Bank Relocation Claims)
            </span>
            <span className="text-slate-600">•</span>
            <button
              onClick={onOpenTrackingModal}
              className="hover:text-[#FF6B6B] transition-colors flex items-center gap-1 text-slate-300 cursor-pointer"
            >
              <Search className="w-3 h-3 text-[#FF6B6B]" />
              <span>Track Consignment</span>
            </button>
            <span className="text-slate-600">•</span>
            <a
              href="#fake-warning"
              className="hover:text-[#FFA89A] transition-colors text-[#FFA89A] font-bold flex items-center gap-1"
            >
              <AlertTriangle className="w-3 h-3 text-[#FFA89A]" />
              <span>Beware of Fake Packers Notice</span>
            </a>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5CC9C3]" />
              ISO 9001:2015 Certified
            </span>
          </div>

          <div className="mx-auto lg:mx-0 flex items-center gap-4 text-xs font-bold">
            <span className="hidden sm:inline-block text-[11px] text-slate-400 font-normal">
              24/7 Helpline:
            </span>
            <a
              href="tel:+919300300300"
              className="flex items-center gap-1.5 bg-[#FF6B6B]/20 text-[#FF6B6B] border border-[#FF6B6B]/40 px-3 py-1 rounded-full text-xs font-extrabold hover:bg-[#FF6B6B]/30 transition-all"
            >
              <Phone className="w-3 h-3 text-[#FF6B6B]" />
              <span>+91 9300 300 300</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Glass Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md py-3"
            : "bg-white border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo in Coral & Teal */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF6B6B] to-[#FFA89A] flex items-center justify-center shadow-lg shadow-[#FF6B6B]/25 group-hover:scale-105 transition-all">
              <Package className="w-5 h-5 text-white font-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#0F172A] leading-none">
                My<span className="text-[#FF6B6B]">Rolling</span><span className="text-[#0F766E]">Box</span>
              </span>
              <span className="text-[9px] text-[#475569] font-extrabold tracking-widest uppercase mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
                Move Forward Together
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold text-[#475569]">
            <Link href="/" className="text-[#FF6B6B] font-black">
              Home
            </Link>
            <Link href="#services" className="hover:text-[#0F766E] transition-colors">
              Services
            </Link>
            <Link href="#calculator" className="hover:text-[#0F766E] transition-colors">
              Rates Calculator
            </Link>
            <Link href="#fake-warning" className="hover:text-[#0F766E] transition-colors">
              Verification Portal
            </Link>
            <Link href="#packaging" className="hover:text-[#0F766E] transition-colors">
              Packaging Tech
            </Link>
            <Link href="#branches" className="hover:text-[#0F766E] transition-colors">
              City Branches
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBookingModal()}
              className="w-9 h-9 rounded-full bg-[#FFF7F5] border border-[#FF6B6B]/20 flex items-center justify-center text-[#FF6B6B] hover:bg-[#FF6B6B]/10 transition-colors cursor-pointer"
              title="Select Location"
            >
              <MapPin className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenTrackingModal}
              className="btn-teal-outline px-4 py-2 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>Track Docket</span>
            </button>

            <button
              onClick={() => onOpenBookingModal()}
              className="btn-coral-pill px-5 py-2.5 text-xs font-extrabold flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#FF6B6B]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl mt-2">
            <div className="flex flex-col space-y-3 font-bold text-slate-800 text-sm">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-[#FF6B6B] py-1">
                Home
              </Link>
              <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0F766E] py-1">
                Services
              </Link>
              <Link href="#calculator" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0F766E] py-1">
                Rates Calculator
              </Link>
              <Link href="#fake-warning" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0F766E] py-1">
                Verification Portal
              </Link>
              <Link href="#packaging" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0F766E] py-1">
                Packaging Tech
              </Link>
              <Link href="#branches" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0F766E] py-1">
                City Branches
              </Link>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrackingModal();
                }}
                className="w-full btn-teal-outline py-3 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#0F766E]" />
                <span>Track Consignment</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full btn-coral-pill py-3 text-xs font-black flex items-center justify-center gap-2 cursor-pointer"
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
