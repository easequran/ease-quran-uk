import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, MessageCircle, Gift, Settings2, BookOpenCheck } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTABand from "@/components/CTABand";
import PricingPlans from "@/components/PricingPlans";
import {
  MAIN_PLANS,
  SIBLING_DISCOUNTS,
  siblingWorkedExample,
  PREPAY_TERMS,
  prepayTotalAndSaving,
  HIFZ_INTENSIVE,
  CUSTOM_TIMETABLE,
  REFERRAL,
  REGISTRATION_FEE,
  WEEKEND_POLICY_NOTE,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Quran Class Pricing UK, Plans from £32/month",
  description: "Transparent online Quran class pricing for UK families. Plans from £32/month, no hidden fees, cancel anytime. Free trial class included.",
  openGraph: { url: "/pricing" },
  alternates: {
    canonical: "/pricing",
  },
};

const steadyPlan = MAIN_PLANS.find((p) => p.id === "steady")!;
const worked = siblingWorkedExample();

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much do online Quran classes cost in the UK?", acceptedAnswer: { "@type": "Answer", text: "Ease Quran UK plans start from £32 per month for 2 classes per week (8 classes/month, 30 minutes each). The most popular plan is £45/month for 3 classes per week. All plans include one-to-one lessons with a qualified teacher." } },
    { "@type": "Question", name: "Is there a free trial?", acceptedAnswer: { "@type": "Answer", text: "Yes, the first class is completely free. No card required, no commitment, and there is no registration fee. You can book your free trial from our website." } },
    { "@type": "Question", name: "Can I cancel anytime?", acceptedAnswer: { "@type": "Answer", text: "Yes. There are no long-term contracts. You can cancel or change your plan at any time." } },
    { "@type": "Question", name: "Are there family or sibling discounts?", acceptedAnswer: { "@type": "Answer", text: "Yes, applied automatically with no code needed. The 1st child pays full price, the 2nd child gets 15% off, the 3rd child gets 25% off, and the 4th child onwards gets 30% off." } },
    { "@type": "Question", name: "What are the typical costs for online Quran tutoring sessions?", acceptedAnswer: { "@type": "Answer", text: "Online Quran tutoring in the UK typically costs between £32 and £122 per month, depending on class frequency and duration. Our Foundation plan is £32/month for 2 classes per week, rising to £122/month for an intensive 60-minute, 5-day schedule, all one-to-one with no hidden fees." } },
  ],
};

const faqs = [
  { q: "How much do online Quran classes cost in the UK?", a: "Our online Quran classes UK fees start from £32 per month for 2 classes per week, £45/month for 3 classes (our most popular plan), and £68/month for an intensive 5-day schedule, all at 30 minutes per class. Every plan is one-to-one, with no hidden fees, no registration fee, and no long contract." },
  { q: "Is the free trial really free?", a: "Yes, completely free. No card required, no payment, no registration fee, no commitment. You try the class, meet the teacher, and decide afterwards if you'd like to continue." },
  { q: "Can I cancel anytime?", a: "Yes. There are no long-term contracts. If you need to pause or cancel, simply let us know and we'll sort it without any fuss." },
  { q: "How does the 60-minute option work?", a: "Every plan is available at 30 or 60 minutes per class. The 60-minute price for each plan is shown on its card and in the comparison table further down this page. You don't need separate plans for this, just choose your preferred length when you book." },
  { q: "What is Weekend Priority and when does it cost extra?", a: "Weekend Priority guarantees your child a Saturday or Sunday slot and only applies an extra charge when every class in your week falls on the weekend. If your timetable mixes weekdays with one or two weekend classes, there is no extra charge at all." },
  { q: "How does the sibling discount work?", a: `It's automatic and needs no code. The 1st child enrolled pays full price, the 2nd child gets 15% off, the 3rd child gets 25% off, and the 4th child onwards gets 30% off. For example, 3 children on the Steady plan comes to £${worked.prices[0]} + £${worked.prices[1]} + £${worked.prices[2]} = £${worked.total}/month.` },
  { q: "Can I prepay for a discount?", a: "Yes. Pay every 3 months for 5% off, every 6 months for 10% off, or yearly and get 2 months free (you only pay for 10 months). The pound saving for each plan is shown on this page." },
  { q: "Do you offer an intensive Hifz programme?", a: `Yes, our Hifz Intensive plan starts from £${HIFZ_INTENSIVE.fromPrice}/month for ${HIFZ_INTENSIVE.classesPerWeek} sessions a week at ${HIFZ_INTENSIVE.durationMinutes} minutes each, with a senior teacher and weekly memorisation tracking.` },
  { q: "What if I need a completely custom timetable?", a: `We can build a bespoke timetable around your family's schedule. Typical custom plans range from £${CUSTOM_TIMETABLE.rangeLow} to £${CUSTOM_TIMETABLE.rangeHigh} per month, and we'll always confirm your exact price before you start.` },
  { q: "Is there a registration or sign-up fee?", a: "No. The registration fee is £0. You only ever pay for your chosen plan." },
  { q: "Do you have a referral programme?", a: "Yes. Refer a family and you get 50% off one month once they enrol, and they get 20% off their first month." },
];

export default function Pricing() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#122259] pt-10 pb-16 relative overflow-hidden">
        <Image
          src="/pricing-hero.webp"
          alt="Quran resting open on a wooden stand beside a lit lantern, warm sunlight through a latticed window"
          fill
          priority
          className="object-cover opacity-40 -scale-x-100"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#122259] via-[#122259]/90 to-[#122259]/40" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 0%, rgba(245,166,35,0.12) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]} dark />
          <div className="mt-6 max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] border border-[#F5A623]/30 rounded-full px-3 py-1 mb-4">Plans and Pricing</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Simple, Honest Pricing<br className="hidden sm:block" /> for UK Families
            </h1>
            <p className="text-blue-200 text-base sm:text-lg max-w-xl">
              Straightforward online Quran classes UK fees, no hidden charges, no long contracts. Every plan includes a completely free first class, no card needed, and a £{REGISTRATION_FEE} registration fee.
            </p>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["Free first class", "£0 registration fee", "No card required", "Cancel anytime", "Certified teachers"].map((t) => (
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
          <PricingPlans />
        </div>
      </section>

      {/* 30 vs 60 minute comparison */}
      <section className="section-pad">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-2">Class Length</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122259]">30-Minute vs 60-Minute Classes</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Every plan is available at either length. Prices below are per month.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-5 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Plan</th>
                  <th className="text-left px-5 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Classes/week</th>
                  <th className="text-left px-5 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">30 min</th>
                  <th className="text-left px-5 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">60 min</th>
                </tr>
              </thead>
              <tbody>
                {MAIN_PLANS.map((plan) => (
                  <tr key={plan.id} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-4 font-bold text-[#122259]">{plan.name}</td>
                    <td className="px-5 py-4 text-gray-700">{plan.classesPerWeek}</td>
                    <td className="px-5 py-4 text-gray-700">£{plan.price30}</td>
                    <td className="px-5 py-4 text-gray-700">£{plan.price60}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#faf9f7] rounded-2xl border border-gray-100 p-6 sm:p-7 mt-6">
            <p className="text-sm font-bold text-[#122259] mb-2">Weekend Priority — guaranteed Sat/Sun slot (+15%)</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Foundation +£{MAIN_PLANS[0].weekendPriorityAddOn}/month · Steady +£{MAIN_PLANS[1].weekendPriorityAddOn}/month · Immersion +£{MAIN_PLANS[2].weekendPriorityAddOn}/month.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">{WEEKEND_POLICY_NOTE}</p>
          </div>
        </div>
      </section>

      {/* Sibling discount */}
      <section className="section-pad">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-2">Automatic, No Code Needed</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122259]">Sibling Discount</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Enrol more than one child and the discount is applied automatically to each additional child's plan.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {["1st child", "2nd child", "3rd child", "4th+ child"].map((label, i) => (
              <div key={label} className="bg-white rounded-2xl border border-gray-100 p-5 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-[#122259]">{SIBLING_DISCOUNTS[i] === 0 ? "Full price" : `-${SIBLING_DISCOUNTS[i] * 100}%`}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#faf9f7] rounded-2xl border border-gray-100 p-6 sm:p-7">
            <p className="text-sm font-bold text-[#122259] mb-2">Worked example</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              3 children on the {worked.planName} plan (£{steadyPlan.price30}/month each before discount): £{worked.prices[0]} + £{worked.prices[1]} + £{worked.prices[2]} ={" "}
              <span className="font-bold text-[#122259]">£{worked.total}/month</span> for all three children.
            </p>
          </div>
        </div>
      </section>

      {/* Prepay discounts */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-2">Pay Ahead, Save More</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122259]">Prepay Discounts</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Pay every 3 months for 5% off, every 6 months for 10% off, or yearly for 2 months free. Prices below are for 30-minute plans.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-5 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Plan</th>
                  {PREPAY_TERMS.map((t) => (
                    <th key={t.id} className="text-left px-5 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">{t.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MAIN_PLANS.map((plan) => (
                  <tr key={plan.id} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-4 font-bold text-[#122259]">{plan.name}</td>
                    {PREPAY_TERMS.map((t) => {
                      const { total, saving } = prepayTotalAndSaving(plan.price30, t.id);
                      return (
                        <td key={t.id} className="px-5 py-4 text-gray-700">
                          £{total}
                          {saving > 0 && <span className="block text-xs text-[#F5A623] font-semibold mt-0.5">save £{saving}</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hifz Intensive + Custom Timetable */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="relative bg-white rounded-2xl border-2 border-[#122259]/20 flex flex-col sm:flex-row overflow-hidden shadow-sm">
              <div className="sm:w-2 h-2 sm:h-auto bg-[#122259] flex-shrink-0" />
              <div className="flex-1 p-6 sm:p-7">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#122259] bg-[#122259]/8 rounded-full px-3 py-1 mb-2">
                  <BookOpenCheck size={13} /> Senior Teacher
                </span>
                <h2 className="text-xl font-extrabold text-[#122259]">{HIFZ_INTENSIVE.name}</h2>
                <p className="text-3xl font-extrabold text-[#122259] mt-2">from £{HIFZ_INTENSIVE.fromPrice}<span className="text-sm font-medium text-gray-400">/month</span></p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{HIFZ_INTENSIVE.description}</p>
                <Link href="/courses/hifz" className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold text-[#122259] hover:text-[#F5A623] transition-colors">
                  Learn more about Hifz <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl border-2 border-gray-100 flex flex-col sm:flex-row overflow-hidden shadow-sm">
              <div className="sm:w-2 h-2 sm:h-auto bg-[#F5A623] flex-shrink-0" />
              <div className="flex-1 p-6 sm:p-7">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#122259] bg-[#122259]/8 rounded-full px-3 py-1 mb-2">
                  <Settings2 size={13} /> Bespoke
                </span>
                <h2 className="text-xl font-extrabold text-[#122259]">{CUSTOM_TIMETABLE.name}</h2>
                <p className="text-2xl font-extrabold text-[#122259] mt-2">£{CUSTOM_TIMETABLE.rangeLow}–£{CUSTOM_TIMETABLE.rangeHigh}<span className="text-sm font-medium text-gray-400">/month, typical</span></p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{CUSTOM_TIMETABLE.description}</p>
                <a
                  href="https://wa.me/447311254423?text=Hi%2C%20I%27d%20like%20a%20custom%20Quran%20class%20timetable."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 bg-[#122259] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#0e1b47] transition-colors"
                >
                  <MessageCircle size={15} /> WhatsApp to Discuss
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral */}
      <section className="pb-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-[#122259] rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#F5A623]/15 flex items-center justify-center flex-shrink-0">
                <Gift size={20} className="text-[#F5A623]" />
              </div>
              <div>
                <p className="text-white font-bold">Refer a family</p>
                <p className="text-blue-200 text-sm">You get {REFERRAL.referrerDiscount * 100}% off one month. They get {REFERRAL.refereeDiscount * 100}% off their first month.</p>
              </div>
            </div>
            <a
              href="https://wa.me/447311254423?text=Hi%2C%20I%27d%20like%20to%20refer%20a%20family%20to%20Ease%20Quran%20UK."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm py-2.5 px-5 flex-shrink-0"
            >
              Refer via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Choose your course */}
      <section className="section-pad">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-bold text-[#122259] mb-4 text-center">Choose Your Course</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { title: "Noorani Qaida", href: "/courses/noorani-qaida" },
              { title: "Quran Reading", href: "/courses/quran-reading" },
              { title: "Hifz", href: "/courses/hifz" },
              { title: "Tajweed", href: "/courses/tajweed" },
              { title: "Islamic Studies", href: "/courses/islamic-studies" },
              { title: "Tafseer", href: "/courses/tafseer" },
              { title: "Adult Quran Classes", href: "/adult-quran-classes" },
              { title: "Female Quran Teachers", href: "/female-quran-teachers" },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="flex items-center gap-1.5 px-4 py-2.5 bg-[#faf9f7] rounded-xl text-sm font-semibold text-[#122259] border border-gray-200 hover:bg-[#122259] hover:text-white hover:border-[#122259] transition-colors">
                {c.title} <ChevronRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us strip */}
      <section className="py-10 bg-[#122259]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { stat: "Free", label: "First class, always" },
              { stat: `£${MAIN_PLANS[0].price30}`, label: "Plans start from" },
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
