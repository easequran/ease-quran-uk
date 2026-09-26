import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { MAIN_PLANS } from "@/lib/pricing";

const BASE_FEATURES = [
  "One-to-one with a certified teacher",
  "Male or female teacher",
  "Flexible UK timings (GMT/BST)",
  "All courses covered",
  "Cancel anytime",
];

export default function PricingPlans() {
  return (
    <div>
      {/* Plan cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MAIN_PLANS.map((plan) => {
          const highlight = !!plan.mostPopular;
          return (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl border ${highlight ? "border-navy-900" : "border-gray-200"} flex flex-col ${
                highlight ? "shadow-eq-lg" : "shadow-eq-sm"
              }`}
            >
              {highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full bg-orange-500 text-navy-900">
                    <Sparkles size={14} /> Most popular
                  </span>
                </div>
              )}

              <div className={`p-6 sm:p-7 rounded-t-2xl ${highlight ? "bg-navy-900" : "bg-white"}`}>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${highlight ? "text-orange-400" : "text-gray-500"}`}>{plan.name}</p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl sm:text-5xl font-bold ${highlight ? "text-white" : "text-navy-900"}`}>£{plan.price30}</span>
                  <span className={`text-sm mb-2 ${highlight ? "text-navy-100" : "text-gray-400"}`}>/month</span>
                </div>
                <p className={`text-sm font-semibold mt-1 ${highlight ? "text-orange-400" : "text-orange-600"}`}>{plan.classesPerWeek} classes per week</p>
                <p className={`text-xs mt-1 ${highlight ? "text-navy-100" : "text-gray-400"}`}>
                  {plan.classesPerMonth} classes/month · 30 min · 1-to-1
                </p>
                <p className={`text-xs mt-2 pt-2 border-t ${highlight ? "border-white/15 text-navy-100" : "border-gray-100 text-gray-500"}`}>
                  Prefer 60-minute classes? <span className={`font-semibold ${highlight ? "text-white" : "text-navy-900"}`}>£{plan.price60}/month</span>
                </p>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <ul className="space-y-3 mb-7 flex-1">
                  {BASE_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={9} className="text-orange-600" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/free-trial"
                  className={`w-full text-sm ${highlight ? "btn-gold" : "btn-outline"}`}
                >
                  Book free trial
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
