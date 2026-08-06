"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { MAIN_PLANS, planPrice, WEEKEND_POLICY_NOTE, type Duration } from "@/lib/pricing";

const BASE_FEATURES = [
  "One-to-one with a certified teacher",
  "Male or female teacher",
  "Flexible UK timings (GMT/BST)",
  "All courses covered",
  "Cancel anytime",
];

export default function PricingPlans() {
  const [duration, setDuration] = useState<Duration>(30);
  const [weekend, setWeekend] = useState(false);

  return (
    <div>
      {/* Toggles */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <div className="inline-flex items-center bg-white border border-gray-200 rounded-full p-1">
          {[30, 60].map((d) => (
            <button
              key={d}
              onClick={() => setDuration(d as Duration)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
                duration === d ? "bg-[#122259] text-white" : "text-gray-500 hover:text-[#122259]"
              }`}
            >
              {d}-min classes
            </button>
          ))}
        </div>

        <button
          onClick={() => setWeekend(!weekend)}
          className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
            weekend ? "bg-[#122259] text-white border-[#122259]" : "bg-white text-[#122259] border-gray-200 hover:border-[#122259]"
          }`}
        >
          <span className={`w-4 h-4 rounded flex items-center justify-center border-2 flex-shrink-0 ${weekend ? "bg-[#F5A623] border-[#F5A623]" : "border-gray-300"}`}>
            {weekend && <Check size={11} className="text-white" strokeWidth={3} />}
          </span>
          Weekend Priority — guaranteed Sat/Sun slot
        </button>
      </div>

      <p className="text-center text-xs text-gray-500 max-w-2xl mx-auto mb-10">{WEEKEND_POLICY_NOTE}</p>

      {/* Plan cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MAIN_PLANS.map((plan) => {
          const price = planPrice(plan, duration) + (weekend ? plan.weekendPriorityAddOn : 0);
          const highlight = !!plan.mostPopular;
          return (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl border-2 ${highlight ? "border-[#F5A623]" : "border-gray-100"} flex flex-col ${
                highlight ? "shadow-2xl shadow-[#F5A623]/10 scale-[1.02]" : "shadow-sm"
              } transition-all`}
            >
              {highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-full bg-[#F5A623] text-white">
                    <Sparkles size={14} /> Most Popular
                  </span>
                </div>
              )}

              <div className={`p-6 sm:p-7 rounded-t-2xl ${highlight ? "bg-gradient-to-br from-[#122259] to-[#1a3280]" : "bg-white"}`}>
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${highlight ? "text-[#F5A623]" : "text-gray-400"}`}>{plan.name}</p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl sm:text-5xl font-extrabold ${highlight ? "text-white" : "text-[#122259]"}`}>£{price}</span>
                  <span className={`text-sm mb-2 ${highlight ? "text-blue-200" : "text-gray-400"}`}>/month</span>
                </div>
                <p className="text-sm font-semibold mt-1 text-[#F5A623]">{plan.classesPerWeek} classes per week</p>
                <p className={`text-xs mt-1 ${highlight ? "text-blue-200" : "text-gray-400"}`}>
                  {plan.classesPerMonth} classes/month · {duration} min · 1-to-1
                  {weekend && ` · +£${plan.weekendPriorityAddOn} weekend priority`}
                </p>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <ul className="space-y-3 mb-7 flex-1">
                  {BASE_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-[#F5A623]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={9} className="text-[#F5A623]" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/free-trial"
                  className={`w-full text-center py-3 rounded-xl font-bold text-sm transition-all ${
                    highlight
                      ? "bg-[#F5A623] text-white hover:bg-[#d4901e] shadow-lg shadow-[#F5A623]/30"
                      : "border-2 border-[#122259] text-[#122259] hover:bg-[#122259] hover:text-white"
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center text-xs text-gray-400 mt-8">
        All prices in GBP. One-to-one lessons only. No group classes. Registration fee: £0. Prices confirmed before you start.
      </p>
    </div>
  );
}
