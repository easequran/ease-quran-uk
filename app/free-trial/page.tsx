import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MessageCircle, ChevronRight } from "lucide-react";
import FreeTrialForm from "@/components/FreeTrialForm";

const faqs = [
  { q: "Are there any free trial options for online Quran education services?", a: "Yes. Ease Quran UK offers a completely free first class, no card required and no obligation to continue. You meet your teacher, try a real one-to-one lesson, and decide afterwards." },
  { q: "Is the free trial really a full class, or just a call?", a: "It's a genuine one-to-one lesson with a certified teacher, not a sales call. You'll get real teaching so you can judge the quality for yourself before paying anything." },
  { q: "Do I need to give payment details to book the free trial?", a: "No. No card, no payment information, no commitment. We only ask for basic contact details so we can confirm your class time." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
                  {[
                    { title: "Noorani Qaida", href: "/courses/noorani-qaida" },
                    { title: "Quran Reading", href: "/courses/quran-reading" },
                    { title: "Hifz (Memorisation)", href: "/courses/hifz" },
                    { title: "Tajweed", href: "/courses/tajweed" },
                    { title: "Islamic Studies", href: "/courses/islamic-studies" },
                    { title: "Tafseer", href: "/courses/tafseer" },
                    { title: "Adult Quran Classes", href: "/adult-quran-classes" },
                  ].map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className="text-gray-600 hover:text-[#F5A623] flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] flex-shrink-0" /> {c.title}
                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#122259] mb-8 text-center">Free Trial Questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-[#122259] list-none">
                  {f.q}
                  <ChevronRight size={16} className="transform group-open:rotate-90 transition-transform flex-shrink-0 ml-3 text-[#F5A623]" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
