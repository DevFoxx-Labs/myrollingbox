import React from "react";
import { Lock, ShieldCheck, Users, Navigation, Receipt, Award } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Lock,
      title: "Customer Personal Lock & Key",
      desc: "Unlike open trucks, you lock your container yourself. You keep the master key until final unloading.",
    },
    {
      icon: ShieldCheck,
      title: "100% Full Transit Insurance",
      desc: "Complete financial coverage against accidental damage, theft, or natural calamities during intercity transport.",
    },
    {
      icon: Users,
      title: "Background Verified Crew",
      desc: "Polite, trained, background-verified packing professionals who handle your valuable belongings with utmost care.",
    },
    {
      icon: Navigation,
      title: "Real-Time GPS Vehicle Tracking",
      desc: "Track your shipment live on Google Maps or receive automated WhatsApp progress updates.",
    },
    {
      icon: Receipt,
      title: "Zero Hidden Costs Guarantee",
      desc: "What we quote is what you pay. Transparent written invoice with all labor, toll, and taxes included.",
    },
    {
      icon: Award,
      title: "ISO 9001:2015 Quality Standards",
      desc: "Operating with strict ISO quality guidelines for multi-layer packing material and cargo handling.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-700">
            <span>The MyRollingBox Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why 100,000+ Indian Families Trust MyRollingBox
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            We combined top-grade packing material with lockable container technology to make moving stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="card-21dev p-8 border border-slate-200 space-y-4 group hover:border-red-600"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{r.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
