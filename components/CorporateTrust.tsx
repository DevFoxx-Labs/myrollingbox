import React from "react";

export default function CorporateTrust() {
  const stats = [
    { label: "Total Relocations", val: "1,00,000+" },
    { label: "Zero Damage Rate", val: "99.8%" },
    { label: "Cities Covered", val: "150+ Cities" },
    { label: "Customer Rating", val: "4.9 / 5" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white border-y border-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-yellow-300">{s.val}</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
