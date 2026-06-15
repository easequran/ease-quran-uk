import type { Metadata } from "next";
import { CheckCircle, MessageCircle } from "lucide-react";
import FreeTrialForm from "@/components/FreeTrialForm";

export const metadata: Metadata = {
  title: "Book a Free Quran Trial Class",
  description: "Book your free online Quran trial class today. No card required, no commitment — just a free, one-to-one class with a qualified UK teacher. Contact within 24 hours.",
  alternates: { canonical: "https://easequran.co.uk/free-trial" },
};

const reassurances = [
  "100% free — no card, no payment",
  "No commitment — you decide after the class",
  "We'll confirm within 24 hours",
  "One-to-one with a certified teacher",
  "Male or female teacher — your choice",
  "Flexible UK timings",
];

export default function FreeTrial() {
  return (
    <>
      <div className="bg-[#122259] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
          <span className="tag mb-3 inline-block">No Card Required</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Book Your Free Trial Class</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Try a one-to-one Quran class for free — no commitment, no payment. We&apos;ll match you with the right teacher and confirm your time within 24 hours.</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#122259] mb-6">Request Your Free Trial</h2>
                <FreeTrialForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6">
                <h3 className="font-bold text-[#122259] mb-4">What to expect</h3>
                <ul className="space-y-3">
                  {reassurances.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-[#FD9C02] flex-shrink-0 mt-0.5" /> {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6 bg-[#faf9f7]">
                <h3 className="font-bold text-[#122259] mb-3">Prefer to message us?</h3>
                <p className="text-sm text-gray-600 mb-4">WhatsApp us directly and we&apos;ll arrange your free trial over chat — often faster than the form.</p>
                <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center text-sm py-2.5">
                  <MessageCircle size={16} /> WhatsApp +44 7311 254423
                </a>
                <a href="https://wa.me/923195657389" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500 hover:text-[#122259]">
                  Alternative: +92 319 5657389
                </a>
              </div>

              <div className="card p-6">
                <h3 className="font-bold text-[#122259] mb-3">Our courses</h3>
                <ul className="space-y-2 text-sm">
                  {["Noorani Qaida", "Quran Reading", "Hifz (Memorisation)", "Tajweed", "Islamic Studies", "Tafseer"].map((c) => (
                    <li key={c} className="text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FD9C02] flex-shrink-0" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
