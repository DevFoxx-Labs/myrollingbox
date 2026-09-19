"use client";

import React, { useState } from "react";
import { AlertTriangle, ShieldCheck, CheckCircle2, Search, Building2, PhoneCall } from "lucide-react";

export default function VerificationPortal() {
  const [verifyId, setVerifyId] = useState("");
  const [verifyStatus, setVerifyStatus] = useState<any>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyId.trim()) return;

    if (verifyId.toLowerCase().includes("mrb") || verifyId.length >= 4) {
      setVerifyStatus({
        valid: true,
        message: "Verified Original MyRollingBox Booking / Representative!",
        details: "Official GSTIN: 09AAACM9876Q1Z3 | IBA Approval Code: APM/10982/2026",
      });
    } else {
      setVerifyStatus({
        valid: false,
        message: "Unverified Reference Number!",
        details: "Please contact official 24/7 helpline +91 9300 300 300 before making any advance payment.",
      });
    }
  };

  return (
    <section id="fake-warning" className="py-16 bg-[#090D16] border-y border-amber-500/20 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Warning Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Public Safety & Anti-Fraud Advisory</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Beware of Fake Packers & Movers!
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Unscrupulous operators often register fake websites with names similar to <strong className="text-white">MyRollingBox</strong>, Agarwal, or Om Packers to quote low prices and demand ransom money. Verify credentials before making any payments.
              </p>

              {/* 4 Checklist Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300 font-semibold">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Verify Official GSTIN & IBA Code</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Domain must be: myrollingbox.com</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Pay only to Corporate Bank Accounts</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Insist on Sealed Lockable Containers</span>
                </div>
              </div>
            </div>

            {/* Verification Widget Box */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-extrabold text-white">Verification Portal</h3>
              </div>

              <p className="text-xs text-slate-400 mb-4">
                Enter your Quote Ref No. or Representative ID to check authenticity:
              </p>

              <form onSubmit={handleVerify} className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. MRB-8821 or Rep Phone"
                    value={verifyId}
                    onChange={(e) => setVerifyId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 px-3.5 pr-10 text-xs font-bold text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
                </div>

                <button
                  type="submit"
                  className="w-full btn-21-amber py-3 text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Verify Credentials Now</span>
                </button>
              </form>

              {verifyStatus && (
                <div
                  className={`mt-4 p-3.5 rounded-xl text-xs space-y-1 ${
                    verifyStatus.valid
                      ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-200"
                      : "bg-rose-500/20 border border-rose-500/40 text-rose-200"
                  }`}
                >
                  <p className="font-extrabold">{verifyStatus.message}</p>
                  <p className="text-[11px] opacity-90">{verifyStatus.details}</p>
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" /> IBA Code: APM/10982
                </span>
                <a href="tel:+919300300300" className="flex items-center gap-1 text-amber-400 font-bold hover:underline">
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
