import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MessageCircle, ChevronRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Quran Class Pricing UK — Plans from £30/month",
  description: "Transparent online Quran class pricing for UK families. Plans from £30/month. One-to-one lessons, no hidden fees, cancel anytime. Free trial class included.",
  alternates: { canonical: "https://easequran.co.uk/pricing" },
};

const plans = [
  {
    name: "Starter",
    price: "£30",
    period: "per month",
    classes: "2 classes/week",
    total: "8 classes/month",
    duration: "~30 min each",
    popular: false,
    features: ["One-to-one lesson", "Qualified & certified teacher", "Flexible UK timings", "Male or female teacher", "Cancel anytime"],
  },
  {
    name: "Most Popular",
    price: "£45",
    period: "per month",
    classes: "3 classes/week",
    total: "12 classes/month",
    duration: "~30 min each",
    popular: true,
    features: ["One-to-one lesson", "Qualified & certified teacher", "Flexible UK timings", "Male or female teacher", "Cancel anytime", "Recommended for consistent progress"],
  },
  {
    name: "Intensive",
    price: "£60",
    period: "per month",
    classes: "5 classes/week",
    total: "20 classes/month",
    duration: "~30 min each",
    popular: false,
    features: ["One-to-one lesson", "Qualified & certified teacher", "Flexible UK timings", "Male or female teacher", "Cancel anytime", "Best for fast progress & Hifz students"],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much do online Quran classes cost in the UK?", acceptedAnswer: { "@type": "Answer", text: "Ease Quran UK plans start from £30 per month for 2 classes per week (8 classes/month). The most popular plan is £45/month for 3 classes per week. All plans include one-to-one lessons with a qualified teacher." } },
    { "@type": "Question", name: "Is there a free trial?", acceptedAnswer: { "@type": "Answer", text: "Yes — the first class is completely free. No card required, no commitment. You can book your free trial from our website." } },
    { "@type": "Question", name: "Can I cancel anytime?", acceptedAnswer: { "@type": "Answer", text: "Yes. There are no long-term contracts. You can cancel or change your plan at any time." } },
    { "@type": "Question", name: "Are there family or sibling discounts?", acceptedAnswer: { "@type": "Answer", text: "Yes. If you have more than one child you'd like to enrol, please WhatsApp us and we'll create a custom family plan." } },
  ],
};

export default function Pricing() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#faf9f7] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-[#122259] mt-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-600 mt-3 max-w-xl">No hidden fees. No long contracts. Just clear, fair pricing for quality one-to-one Quran education — in £, for UK families.</p>
        </div>
      </div>

      {/* Free Trial Banner */}
      <section className="py-8 bg-[#122259] text-white text-center">
        <p className="text-lg font-semibold">Start with a <span className="text-[#F5A623]">completely free trial class</span> — no card, no commitment.</p>
        <Link href="/free-trial" className="btn-gold mt-4 inline-flex">Book Free Trial</Link>
      </section>

      {/* Plans */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card p-7 relative flex flex-col ${plan.popular ? "ring-2 ring-[#F5A623] shadow-xl" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#F5A623] text-white text-xs font-bold px-4 py-1.5 rounded-full">Most Popular</span>
                  </div>
                )}
                <h2 className="text-xl font-bold text-[#122259] mb-1">{plan.name}</h2>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-[#122259]">{plan.price}</span>
                  <span className="text-gray-500 text-sm mb-1.5">{plan.period}</span>
                </div>
                <p className="text-[#F5A623] font-semibold text-sm mb-1">{plan.classes}</p>
                <p className="text-gray-500 text-xs mb-5">{plan.total} · {plan.duration} · One-to-one</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle size={15} className="text-[#F5A623] flex-shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/free-trial" className={`${plan.popular ? "btn-gold" : "btn-navy"} text-center justify-center`}>
                  Get Started — Free Trial <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#faf9f7] rounded-2xl p-6 md:p-8 text-center">
            <MessageCircle size={28} className="text-[#F5A623] mx-auto mb-3" />
            <h3 className="text-xl font-bold text-[#122259] mb-2">Family or sibling discount?</h3>
            <p className="text-gray-600 text-sm mb-4">If you have more than one child you&apos;d like to enrol, or need a custom plan, WhatsApp us and we&apos;ll put together a personalised arrangement.</p>
            <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex">
              <MessageCircle size={16} /> WhatsApp for a Custom Plan
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#122259] mb-8 text-center">Pricing Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is the free trial really free?", a: "Yes — completely free. No card required, no payment, no commitment. You try the class, meet the teacher, and decide afterwards if you'd like to continue." },
              { q: "Can I cancel anytime?", a: "Yes. There are no long-term contracts. If you need to pause or cancel, simply let us know and we'll sort it without any fuss." },
              { q: "Are there family discounts?", a: "Yes. If you have more than one child, please WhatsApp us on +44 7311 254423 and we'll create a custom family plan with a discount." },
              { q: "How do I pay?", a: "We'll discuss payment method when you sign up after your free trial. We accept common methods — details will be confirmed directly." },
              { q: "What if I need to reschedule a class?", a: "Life happens — just let your teacher or the academy know in advance and we'll rearrange. We're flexible." },
            ].map((f, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-[#122259] list-none">
                  {f.q}
                  <ChevronRight size={16} className="transform group-open:rotate-90 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
