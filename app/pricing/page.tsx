import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight, MessageCircle, Sparkles, Users, Settings } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Quran Class Pricing UK, Plans from £30/month",
  description: "Transparent online Quran class pricing for UK families. Plans from £30/month. One-to-one lessons, no hidden fees, cancel anytime. Free trial class included.",
  openGraph: { url: "/pricing" },
  alternates: {
    canonical: "/pricing",
    languages: {
      "en-GB": "https://www.easequran.co.uk/pricing",
      "en-US": "https://easequran.com/pricing",
      "x-default": "https://easequran.com/pricing",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much do online Quran classes cost in the UK?", acceptedAnswer: { "@type": "Answer", text: "Ease Quran UK plans start from £30 per month for 2 classes per week (8 classes/month). The most popular plan is £45/month for 3 classes per week. All plans include one-to-one lessons with a qualified teacher." } },
    { "@type": "Question", name: "Is there a free trial?", acceptedAnswer: { "@type": "Answer", text: "Yes, the first class is completely free. No card required, no commitment. You can book your free trial from our website." } },
    { "@type": "Question", name: "Can I cancel anytime?", acceptedAnswer: { "@type": "Answer", text: "Yes. There are no long-term contracts. You can cancel or change your plan at any time." } },
    { "@type": "Question", name: "Are there family or sibling discounts?", acceptedAnswer: { "@type": "Answer", text: "Yes. If you have more than one child you'd like to enrol, please WhatsApp us and we'll create a custom family plan." } },
  ],
};

const plans = [
  {
    name: "Starter",
    price: "£30",
    period: "/month",
    frequency: "2 classes per week",
    detail: "8 classes · ~30 min · 1-to-1",
    highlight: false,
    badge: null,
    icon: null,
    color: "border-gray-100",
    features: [
      "One-to-one with a certified teacher",
      "Male or female teacher",
      "Flexible UK timings",
      "All courses covered",
      "Cancel anytime",
    ],
    cta: { label: "Start Free Trial", href: "/free-trial", style: "outline" },
  },
  {
    name: "Standard",
    price: "£45",
    period: "/month",
    frequency: "3 classes per week",
    detail: "12 classes · ~30 min · 1-to-1",
    highlight: true,
    badge: "Most Popular",
    icon: <Sparkles size={14} />,
    color: "border-[#F5A623]",
    features: [
      "One-to-one with a certified teacher",
      "Male or female teacher",
      "Flexible UK timings",
      "All courses covered",
      "Cancel anytime",
      "Best for steady, consistent progress",
    ],
    cta: { label: "Start Free Trial", href: "/free-trial", style: "gold" },
  },
  {
    name: "Intensive",
    price: "£60",
    period: "/month",
    frequency: "5 classes per week",
    detail: "20 classes · ~30 min · 1-to-1",
    highlight: false,
    badge: null,
    icon: null,
    color: "border-gray-100",
    features: [
      "One-to-one with a certified teacher",
      "Male or female teacher",
      "Flexible UK timings",
      "All courses covered",
      "Cancel anytime",
      "Ideal for Hifz and fast progress",
    ],
    cta: { label: "Start Free Trial", href: "/free-trial", style: "outline" },
  },
  {
    name: "Family Plan",
    price: "Custom",
    period: "",
    frequency: "2+ children",
    detail: "Sibling discount applied",
    highlight: false,
    badge: "Save More",
    icon: <Users size={14} />,
    color: "border-[#122259]/20",
    features: [
      "Separate 1-to-1 for each child",
      "Sibling discount on 2nd child+",
      "Flexible scheduling per child",
      "Male or female teacher per child",
      "Single WhatsApp point of contact",
      "All courses covered",
    ],
    cta: { label: "WhatsApp for Family Price", href: "https://wa.me/447311254423?text=Hi%2C%20I%27d%20like%20a%20family%20plan%20for%20my%20children.", style: "navy", external: true },
  },
  {
    name: "Custom Plan",
    price: "Bespoke",
    period: "",
    frequency: "Your schedule",
    detail: "Built around your needs",
    highlight: false,
    badge: "Flexible",
    icon: <Settings size={14} />,
    color: "border-gray-100",
    features: [
      "Longer sessions (45 or 60 min)",
      "Adult learners welcome",
      "Specialist Hifz programme",
      "Specific course combinations",
      "Choose your preferred teacher",
      "Pricing agreed before you start",
    ],
    cta: { label: "WhatsApp to Discuss", href: "https://wa.me/447311254423?text=Hi%2C%20I%27d%20like%20a%20custom%20Quran%20class%20plan.", style: "navy", external: true },
  },
];

const faqs = [
  { q: "Is the free trial really free?", a: "Yes, completely free. No card required, no payment, no commitment. You try the class, meet the teacher, and decide afterwards if you'd like to continue." },
  { q: "Can I cancel anytime?", a: "Yes. There are no long-term contracts. If you need to pause or cancel, simply let us know and we'll sort it without any fuss." },
  { q: "Are there family discounts?", a: "Yes. If you have more than one child, WhatsApp us on +44 7311 254423 and we'll create a custom family plan with a sibling discount." },
  { q: "How do I pay?", a: "We'll confirm payment details when you sign up after your free trial. We accept common payment methods." },
  { q: "What if I need to reschedule a class?", a: "Just let your teacher or the academy know in advance and we'll rearrange. We're flexible." },
];

export default function Pricing() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#122259] pt-10 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 0%, rgba(245,166,35,0.12) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]} dark />
          <div className="mt-6 max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] border border-[#F5A623]/30 rounded-full px-3 py-1 mb-4">Plans and Pricing</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Simple, Honest Pricing<br className="hidden sm:block" /> for UK Families
            </h1>
            <p className="text-blue-200 text-base sm:text-lg max-w-xl">
              No hidden fees. No long contracts. Every plan includes a completely free first class, no card needed.
            </p>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["Free first class", "No card required", "Cancel anytime", "Certified teachers"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 border border-white/15 rounded-full px-3 py-1.5">
                <Check size={11} className="text-[#F5A623]" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Top 3, main plans */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {plans.slice(0, 3).map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl border-2 ${plan.color} flex flex-col ${plan.highlight ? "shadow-2xl shadow-[#F5A623]/10 scale-[1.02]" : "shadow-sm"} transition-all`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-full ${plan.highlight ? "bg-[#F5A623] text-white" : "bg-[#122259] text-white"}`}>
                      {plan.icon} {plan.badge}
                    </span>
                  </div>
                )}

                <div className={`p-6 sm:p-7 rounded-t-2xl ${plan.highlight ? "bg-gradient-to-br from-[#122259] to-[#1a3280]" : "bg-white"}`}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${plan.highlight ? "text-[#F5A623]" : "text-gray-400"}`}>{plan.name}</p>
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl sm:text-5xl font-extrabold ${plan.highlight ? "text-white" : "text-[#122259]"}`}>{plan.price}</span>
                    {plan.period && <span className={`text-sm mb-2 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>{plan.period}</span>}
                  </div>
                  <p className={`text-sm font-semibold mt-1 ${plan.highlight ? "text-[#F5A623]" : "text-[#F5A623]"}`}>{plan.frequency}</p>
                  <p className={`text-xs mt-1 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>{plan.detail}</p>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <ul className="space-y-3 mb-7 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className="w-4 h-4 rounded-full bg-[#F5A623]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={9} className="text-[#F5A623]" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.cta.href}
                    className={`w-full text-center py-3 rounded-xl font-bold text-sm transition-all ${
                      plan.cta.style === "gold"
                        ? "bg-[#F5A623] text-white hover:bg-[#d4901e] shadow-lg shadow-[#F5A623]/30"
                        : "border-2 border-[#122259] text-[#122259] hover:bg-[#122259] hover:text-white"
                    }`}
                  >
                    {plan.cta.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom 2, Family + Custom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {plans.slice(3).map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl border-2 ${plan.color} flex flex-col sm:flex-row overflow-hidden shadow-sm`}
              >
                {/* Left color strip */}
                <div className="sm:w-2 h-2 sm:h-auto bg-[#122259] flex-shrink-0" />

                <div className="flex-1 p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      {plan.badge && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#122259] bg-[#122259]/8 rounded-full px-3 py-1 mb-2">
                          {plan.icon} {plan.badge}
                        </span>
                      )}
                      <h2 className="text-xl font-extrabold text-[#122259]">{plan.name}</h2>
                      <p className="text-xs text-gray-400 mt-0.5">{plan.detail}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-extrabold text-[#122259]">{plan.price}</p>
                      <p className="text-xs text-[#F5A623] font-semibold">{plan.frequency}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-4 h-4 rounded-full bg-[#F5A623]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={9} className="text-[#F5A623]" strokeWidth={3} />
                        </span>
                        {f}
                      </div>
                    ))}
                  </div>

                  {"external" in plan.cta && plan.cta.external ? (
                    <a
                      href={plan.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#122259] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#0e1b47] transition-colors"
                    >
                      <MessageCircle size={15} /> {plan.cta.label}
                    </a>
                  ) : (
                    <Link href={plan.cta.href} className="inline-flex items-center gap-2 bg-[#122259] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#0e1b47] transition-colors">
                      {plan.cta.label} <ChevronRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Comparison note */}
          <p className="text-center text-xs text-gray-400 mt-8">All prices in GBP. One-to-one lessons only. No group classes. Prices confirmed before you start.</p>
        </div>
      </section>

      {/* Why choose us strip */}
      <section className="py-10 bg-[#122259]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { stat: "Free", label: "First class, always" },
              { stat: "£30", label: "Plans start from" },
              { stat: "1-to-1", label: "Every lesson" },
              { stat: "Certified", label: "Qualified teachers only" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#F5A623] mb-1">{s.stat}</p>
                <p className="text-blue-200 text-xs font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-2">Questions</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122259]">Pricing Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-[#122259] list-none text-sm sm:text-base">
                  {f.q}
                  <ChevronRight size={15} className="transform group-open:rotate-90 transition-transform flex-shrink-0 ml-3 text-[#F5A623]" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{f.a}</p>
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
