"use client";

import React, { useState, useEffect } from "react";
import { X, Lock, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Calculator, MessageSquare } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    fromCity?: string;
    toCity?: string;
    moveType?: string;
    moveDate?: string;
    estimatedPrice?: string;
  };
}

export default function BookingModal({ isOpen, onClose, initialData }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [moveType, setMoveType] = useState("Household Shifting");
  const [fromCity, setFromCity] = useState("Prayagraj (Allahabad)");
  const [toCity, setToCity] = useState("Delhi NCR");
  const [houseSize, setHouseSize] = useState("2 BHK");
  const [moveDate, setMoveDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addons, setAddons] = useState({
    rollingBoxLock: true,
    insuranceCover: true,
    acDisassembly: false,
    carCarrier: false,
  });

  useEffect(() => {
    if (initialData) {
      if (initialData.fromCity) setFromCity(initialData.fromCity);
      if (initialData.toCity) setToCity(initialData.toCity);
      if (initialData.moveType) {
        if (initialData.moveType.includes("BHK") || initialData.moveType.includes("Villa")) {
          setHouseSize(initialData.moveType);
          setMoveType("Household Shifting");
        } else {
          setMoveType(initialData.moveType);
        }
      }
      if (initialData.moveDate) setMoveDate(initialData.moveDate);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello MyRollingBox! I need a quote for relocation.%0A%0A📦 Move Type: ${moveType} (${houseSize})%0A📍 Origin: ${fromCity}%0A🎯 Destination: ${toCity}%0A📅 Preferred Date: ${moveDate || "Flexible"}%0A🔒 Lockable Box: ${addons.rollingBoxLock ? "Yes" : "Standard"}%0A🛡️ Insurance: ${addons.insuranceCover ? "Yes" : "No"}%0A👤 Name: ${name}%0A📞 Phone: ${phone}`;
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-red-500 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Instant Quote & Booking <span className="text-xs text-yellow-300 font-bold">(Step {step} of 3)</span>
              </h3>
              <p className="text-xs text-slate-100">Personal Lockable Rolling Box Relocation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Relocation Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Household Shifting",
                    "Rolling Box Container",
                    "Car / Bike Transport",
                    "Office Relocation",
                    "Warehouse Storage",
                    "Single Item Move",
                  ].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setMoveType(cat)}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer ${
                        moveType === cat
                          ? "bg-red-600 text-white border-red-600 shadow-md"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:border-red-600"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {moveType.includes("Household") && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Property Size / Goods Volume
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {["1 BHK", "2 BHK", "3 BHK", "4+ BHK / Villa"].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setHouseSize(size)}
                        className={`py-2 px-2 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                          houseSize === size
                            ? "bg-red-600 text-white border-red-600"
                            : "bg-slate-50 border-slate-200 text-slate-700"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Pickup City</label>
                  <select
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                  >
                    <option value="Prayagraj (Allahabad)">Prayagraj (Allahabad)</option>
                    <option value="Delhi NCR">Delhi NCR (Delhi, Noida, Gurgaon)</option>
                    <option value="Mumbai">Mumbai (Goregaon, Thane)</option>
                    <option value="Bangalore">Bangalore (Bengaluru)</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Varanasi">Varanasi</option>
                    <option value="Pune">Pune</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Hyderabad">Hyderabad</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Destination City</label>
                  <select
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                  >
                    <option value="Delhi NCR">Delhi NCR (Delhi, Noida, Gurgaon)</option>
                    <option value="Prayagraj (Allahabad)">Prayagraj (Allahabad)</option>
                    <option value="Mumbai">Mumbai (Goregaon, Thane)</option>
                    <option value="Bangalore">Bangalore (Bengaluru)</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Varanasi">Varanasi</option>
                    <option value="Pune">Pune</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Hyderabad">Hyderabad</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Select Safety & Value Add-ons
              </label>

              <div className="space-y-3">
                <div
                  onClick={() => toggleAddon("rollingBoxLock")}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    addons.rollingBoxLock
                      ? "bg-red-50 border-red-600 text-slate-900"
                      : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-red-600" />
                    <div>
                      <h4 className="text-sm font-bold">Personal Lockable Rolling Box Container</h4>
                      <p className="text-xs text-slate-500 font-medium">Customer retains the lock key. Zero transit access.</p>
                    </div>
                  </div>
                  <CheckCircle2 className={`w-5 h-5 ${addons.rollingBoxLock ? "text-red-600" : "text-slate-400"}`} />
                </div>

                <div
                  onClick={() => toggleAddon("insuranceCover")}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    addons.insuranceCover
                      ? "bg-emerald-50 border-emerald-600 text-slate-900"
                      : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <div>
                      <h4 className="text-sm font-bold">Full Transit Damage Insurance Cover</h4>
                      <p className="text-xs text-slate-500 font-medium">Complete financial protection against road mishaps.</p>
                    </div>
                  </div>
                  <CheckCircle2 className={`w-5 h-5 ${addons.insuranceCover ? "text-emerald-600" : "text-slate-400"}`} />
                </div>

                <div
                  onClick={() => toggleAddon("acDisassembly")}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    addons.acDisassembly
                      ? "bg-blue-50 border-blue-600 text-slate-900"
                      : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Calculator className="w-5 h-5 text-blue-600" />
                    <div>
                      <h4 className="text-sm font-bold">AC Uninstallation & Furniture Assembly</h4>
                      <p className="text-xs text-slate-500 font-medium">Professional technician for split/window AC setup.</p>
                    </div>
                  </div>
                  <CheckCircle2 className={`w-5 h-5 ${addons.acDisassembly ? "text-blue-600" : "text-slate-400"}`} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Date of Movement</label>
                <input
                  type="date"
                  value={moveDate}
                  onChange={(e) => setMoveDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs font-medium">
                <div className="flex justify-between">
                  <span className="text-slate-500">Category:</span>
                  <span className="font-bold text-slate-900">{moveType} ({houseSize})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Route:</span>
                  <span className="font-bold text-red-600">{fromCity} ➔ {toCity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Rolling Box Lock:</span>
                  <span className="font-bold text-emerald-600">{addons.rollingBoxLock ? "Included (Customer Holds Key)" : "Standard"}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-sm text-slate-900 font-bold focus:border-red-600 focus:outline-none"
                />
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="btn-brand-red px-6 py-2.5 text-xs font-bold flex items-center gap-2 cursor-pointer"
            >
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleWhatsAppBooking}
              className="px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 cursor-pointer shadow-lg bg-emerald-600 hover:bg-emerald-500 text-white"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Quote to WhatsApp</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
