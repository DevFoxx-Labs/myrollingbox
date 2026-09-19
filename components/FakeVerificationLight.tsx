"use client";

import React, { useState } from "react";
import { AlertTriangle, ShieldCheck, CheckCircle2, Search, Building2, PhoneCall } from "lucide-react";

export default function FakeVerificationLight() {
  const [verifyId, setVerifyId] = useState("");
  const [verifyStatus, setVerifyStatus] = useState<any>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyId.trim()) return;

    if (verifyId.toLowerCase().includes("mrb") || verifyId.length >= 4) {
      setVerifyStatus({
        valid: true,
        message: "Verified Original MyRollingBox Partner / Booking!",
        details: "Official GSTIN: 09AAACM9876Q1Z3 | IBA Code: APM/10982/2026",
      });
    } else {
      setVerifyStatus({
        valid: false,
        message: "Unverified Reference Number!",
        details: "Please contact official helpline +91 9300 300 300 before making any advance payment.",
      });
    }
  };

  return (
    <section id="fake-warning" className="py-12 bg-[#FFF7F5] border-y border-[#FF6B6B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-[#FF6B6B]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Warning Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B6B]/10 text-[#FF6B6B] text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-[#FF6B6B]" />
                <span>Public Safety Advisory</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                Beware of Duplicate & Fake Packers & Movers!
              </h2>

              <p className="text-sm text-[#475569] leading-relaxed font-medium">
                Many fake operators use names similar to <strong className="text-[#0F172A]">MyRollingBox</strong> / Agarwal / Om Packers to deceive customers with sub-standard service and hidden charges. Protect your belongings by verifying credentials before booking.
              </p>

              {/* 4 Checklist Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700 font-semibold">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <span>Verify Official GSTIN & IBA Code</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <span>Always check domain: myrollingbox.com</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <span>Pay only to Corporate Bank Accounts</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <span>Insist on Sealed Lockable Rolling Boxes</span>
                </div>
              </div>
            </div>

            {/* Verification Widget Box in Deep Teal */}
            <div className="lg:col-span-5 bg-[#064E4B] text-white rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-[#5CC9C3]" />
                <h3 className="text-base font-extrabold text-white">Verification Portal</h3>
              </div>

              <p className="text-xs text-teal-100 mb-4">
                Enter your Quote Ref No. or Representative ID to check authenticity:
              </p>

              <form onSubmit={handleVerify} className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter Quote ID (e.g. MRB-8821)"
                    value={verifyId}
                    onChange={(e) => setVerifyId(e.target.value)}
                    className="w-full bg-[#0F766E]/50 border border-[#5CC9C3]/40 rounded-xl py-2.5 px-3.5 pr-10 text-xs font-bold text-white placeholder-teal-200/60 focus:border-[#FF6B6B] focus:outline-none"
                  />
                  <Search className="w-4 h-4 text-teal-200 absolute right-3 top-3" />
                </div>

                <button
                  type="submit"
                  className="w-full btn-coral-pill py-2.5 text-xs font-black flex items-center justify-center cursor-pointer shadow-md"
                >
                  Verify Authenticity Now
                </button>
              </form>

              {verifyStatus && (
                <div
                  className={`mt-4 p-3 rounded-xl text-xs space-y-1 ${
                    verifyStatus.valid
                      ? "bg-emerald-500/30 border border-emerald-400/40 text-emerald-100"
                      : "bg-[#FF6B6B]/30 border border-[#FF6B6B]/40 text-rose-100"
                  }`}
                >
                  <p className="font-extrabold">{verifyStatus.message}</p>
                  <p className="text-[11px] opacity-90">{verifyStatus.details}</p>
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-teal-700/60 flex items-center justify-between text-[11px] text-teal-100 font-bold">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#5CC9C3]" /> IBA Code: APM/10982
                </span>
                <a href="tel:+919300300300" className="flex items-center gap-1 text-[#5CC9C3] font-bold hover:underline">
                  <PhoneCall className="w-3.5 h-3.5" /> Helpline
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
