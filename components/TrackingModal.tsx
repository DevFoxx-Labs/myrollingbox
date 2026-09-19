"use client";

import React, { useState } from "react";
import { X, Search, Clock, Truck, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrackingModal({ isOpen, onClose }: TrackingModalProps) {
  const [docketNumber, setDocketNumber] = useState("");
  const [result, setResult] = useState<any>(null);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docketNumber.trim()) return;

    setResult({
      docket: docketNumber.toUpperCase(),
      status: "In Transit",
      step: 3,
      origin: "Prayagraj Hub",
      destination: "Delhi NCR Hub",
      location: "En Route near Kanpur Highway Toll",
      eta: "Tomorrow, 4:30 PM",
      driver: "Vikram Singh (+91 98765 12345)",
      lastUpdate: "Checked in via Live GPS 20 mins ago",
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="glass-panel border border-slate-800 rounded-3xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-extrabold shrink-0">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white">Track Your Consignment</h3>
            <p className="text-xs text-slate-400 font-medium">Real-time GPS Docket & Container Status</p>
          </div>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
              Consignment / Docket Number
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. MRB-987654 or Mobile No."
                value={docketNumber}
                onChange={(e) => setDocketNumber(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-3 px-4 text-xs font-bold text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
              />
              <Search className="w-4 h-4 text-amber-400 absolute right-4 top-3.5" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-21-amber py-3.5 text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Track Live Shipment Status</span>
          </button>
        </form>

        {/* Status Result Box */}
        {result && (
          <div className="mt-6 p-4 bg-slate-900/90 border border-amber-500/30 rounded-2xl text-xs space-y-3 animate-fadeIn">
            <div className="flex justify-between items-center font-extrabold text-amber-400">
              <span>Docket: {result.docket}</span>
              <span className="bg-amber-400 text-slate-950 text-[10px] px-2.5 py-0.5 rounded-full font-black">
                {result.status}
              </span>
            </div>

            {/* Visual Timeline Stepper */}
            <div className="grid grid-cols-4 gap-1 text-[9px] font-bold text-center">
              <div className="bg-emerald-500/20 text-emerald-400 py-1 rounded">1. Packed</div>
              <div className="bg-emerald-500/20 text-emerald-400 py-1 rounded">2. Loaded</div>
              <div className="bg-amber-500/30 text-amber-300 py-1 rounded font-black border border-amber-400">3. In Transit</div>
              <div className="bg-slate-800 text-slate-500 py-1 rounded">4. Delivered</div>
            </div>

            <div className="text-slate-300 text-[11px] space-y-1.5 pt-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <strong>Current Location:</strong> {result.location}
              </p>
              <p className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-amber-400" />
                <strong>Driver Info:</strong> {result.driver}
              </p>
              <p className="flex items-center gap-1.5 text-amber-300">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <strong>Expected Delivery:</strong> {result.eta}
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
