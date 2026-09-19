"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Package, Phone, Menu, X, MapPin, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenBookingModal: (preselectedService?: string) => void;
}

export default function Navbar({ onOpenBookingModal }: NavbarProps) {
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
      {/* Top Black Announcement Bar */}
      <div className="bg-[#0B0F19] text-white text-xs py-2 px-4 select-none border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-6 text-slate-300 font-medium text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              India&apos;s Trusted Packers & Movers
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              1,00,000+ Happy Families
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Pan-India Service
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              No Hidden Charges
            </span>
          </div>

          <div className="mx-auto md:mx-0 flex items-center gap-4 text-xs font-bold text-slate-200">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3"
            : "bg-white border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
              <Package className="w-5 h-5 text-white font-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
                My<span className="text-red-600">Rolling</span>Box
              </span>
              <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase mt-0.5">
                Pack. Move. Relax.
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs sm:text-sm font-semibold text-slate-600">
            <Link href="/" className="text-red-600 font-bold">
              Home
            </Link>
            <Link href="/#services" className="hover:text-red-600 transition-colors">
              Services
            </Link>
            <Link href="/#routes" className="hover:text-red-600 transition-colors">
              Routes
            </Link>
            <Link href="/#pricing" className="hover:text-red-600 transition-colors">
              Pricing
            </Link>
            <Link href="/#why-us" className="hover:text-red-600 transition-colors">
              About
            </Link>
            <Link href="/#contact" className="hover:text-red-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBookingModal()}
              className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
              title="Select Location"
            >
              <MapPin className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenBookingModal()}
              className="btn-red-pill px-5 py-2.5 text-xs font-bold flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Get Free Quote</span>
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white">
                →
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-red-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3 font-bold text-slate-800 text-sm">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-red-600 py-1">
                Home
              </Link>
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-600 py-1">
                Services
              </Link>
              <Link href="/#routes" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-600 py-1">
                Routes
              </Link>
              <Link href="/#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-600 py-1">
                Pricing
              </Link>
              <Link href="/#why-us" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-600 py-1">
                About
              </Link>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-600 py-1">
                Contact
              </Link>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full btn-red-pill py-3 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>
    </>
  );
}
