import type { Metadata } from "next";
import { CheckCircle, MessageCircle } from "lucide-react";
import FreeTrialForm from "@/components/FreeTrialForm";

export const metadata: Metadata = {
  title: "Book a Free Quran Trial Class",
  description: "Book your free online Quran trial class today. No card required, no commitment. A qualified UK teacher, confirmed within 2 hours.",
  openGraph: { url: "/free-trial" },
  alternates: {
    canonical: "/free-trial",
  },
};

const reassurances = [
  "100% free. No card, no payment",
  "No commitment. You decide after the class",
  "Confirmed within 2 hours",
  "One-to-one with a certified teacher",
  "Male or female teacher available",
  "Flexible UK timings",
];

export default function FreeTrial() {
  return (
    <>
      <div className="bg-[#122259] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
          <span className="tag mb-3 inline-block">No Card Required</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Book Your Free Trial Class</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Try a one-to-one Quran class for free. No commitment, no payment. We will match you with the right teacher and confirm your time within 2 hours.</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#122259] mb-6">Request Your Free Trial</h2>
                <FreeTrialForm />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6">
                <h3 className="font-bold text-[#122259] mb-4">What to expect</h3>
                <ul className="space-y-3">
                  {reassurances.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-[#F5A623] flex-shrink-0 mt-0.5" /> {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6 bg-[#faf9f7]">
                <h3 className="font-bold text-[#122259] mb-3">Prefer to message us?</h3>
                <p className="text-sm text-gray-600 mb-4">WhatsApp us directly and we will arrange your free trial over chat.</p>
                <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center text-sm py-2.5">
                  <MessageCircle size={16} /> WhatsApp +44 7311 254423
                </a>
              </div>

              <div className="card p-6">
                <h3 className="font-bold text-[#122259] mb-3">Our courses</h3>
                <ul className="space-y-2 text-sm">
                  {["Noorani Qaida", "Quran Reading", "Hifz (Memorisation)", "Tajweed", "Islamic Studies", "Tafseer"].map((c) => (
                    <li key={c} className="text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] flex-shrink-0" /> {c}
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
