import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight, MessageCircle } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Female Quran Teacher UK — Online Classes for Sisters",
  description: "Book a qualified female Quran teacher in the UK for your daughter or yourself. One-to-one online lessons for sisters of all ages. Free trial class, no commitment.",
  openGraph: { url: "/female-quran-teachers" },
  alternates: {
    canonical: "/female-quran-teachers",
    languages: {
      "en-GB": "https://www.easequran.co.uk/female-quran-teachers",
      "en-US": "https://easequran.com/female-quran-teachers",
      "x-default": "https://easequran.com/female-quran-teachers",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is a female Quran teacher available at Ease Quran UK?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our teacher Almas Fatima is a qualified female Quran teacher available for sisters and female students of all ages in the UK." } },
    { "@type": "Question", name: "Can my daughter have a female teacher?", acceptedAnswer: { "@type": "Answer", text: "Yes. Simply mention when booking that you would prefer a female teacher and your daughter will be matched with Almas Fatima." } },
    { "@type": "Question", name: "What courses can the female teacher cover?", acceptedAnswer: { "@type": "Answer", text: "Almas Fatima can teach Noorani Qaida, Quran Reading, Tajweed, and Islamic Studies. Please mention your course preference when booking." } },
    { "@type": "Question", name: "How do I request a female teacher?", acceptedAnswer: { "@type": "Answer", text: "Simply book your free trial via the form or WhatsApp and mention that you require a female teacher. We will ensure Almas Fatima is your assigned teacher." } },
  ],
};

export default function FemaleQuranTeachers() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#122259] py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Female Quran Teachers" }]} />
          <div className="mt-4 max-w-2xl">
            <span className="tag mb-3 inline-block">For Sisters & Daughters</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Female Quran Teacher UK</h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              A qualified, certified female Quran teacher — available for sisters, daughters, and all female students who prefer to learn with a woman. One-to-one, private, and professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/free-trial" className="btn-gold">Book Free Trial</Link>
              <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
                <MessageCircle size={16} /> Request Female Teacher via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why important */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="tag mb-4 inline-block">Why It Matters</span>
              <h2 className="text-3xl font-bold text-[#122259] mb-4">Learning Quran with a Female Teacher</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For many Muslim families in the UK, it is important — or essential — that daughters, sisters, and women learn from a female teacher. This is a matter of comfort, privacy, and in some cases, religious preference.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We understand this need and provide it properly. Almas Fatima is a fully qualified, certified female teacher — not an afterthought or a workaround. She is a Qaria e Quran with a Bachelor&apos;s degree in Islamic Studies, experienced in teaching female students of all ages in a warm, professional, and encouraging environment.
              </p>
              <ul className="space-y-3 mt-5">
                {[
                  "Private, one-to-one class — no mixed-gender groups",
                  "Completely online — learn from the privacy of your home",
                  "Parent can be present at any time during the class",
                  "Classes are available at flexible UK timings including evenings and weekends",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-[#F5A623] flex-shrink-0 mt-0.5" /> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square max-w-sm mx-auto w-full rounded-2xl overflow-hidden shadow-lg">
              <Image src="/teacher-2.webp" alt="Almas Fatima — qualified female Quran teacher at Ease Quran UK" fill className="object-cover object-top" sizes="(max-width: 768px) 80vw, 40vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Teacher profile */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="tag mb-4 inline-block">Your Teacher</span>
          <h2 className="text-3xl font-bold text-[#122259] mb-2">Almas Fatima</h2>
          <p className="text-[#F5A623] font-semibold mb-4">Qaria e Quran · Bachelor of Islamic Studies · Certified Teacher</p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Almas Fatima is available exclusively for sisters and female students. She holds a Bachelor&apos;s degree in Islamic Studies and is a certified Qaria e Quran — meaning she has received formal training in Quranic recitation to a high standard.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            She teaches Noorani Qaida, Quran Reading, Tajweed, and Islamic Studies. Her approach is patient, structured, and encouraging — creating a space where female students feel comfortable to ask questions, make mistakes, and progress at their own pace.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Qaria e Quran", "Bachelor of Islamic Studies", "Certified Teacher", "Noorani Qaida", "Quran Reading", "Tajweed", "Islamic Studies"].map((b) => (
              <span key={b} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-700">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Courses available */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#122259] mb-8 text-center">Courses Available with a Female Teacher</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Noorani Qaida", desc: "The perfect starting point for young girls and female beginners learning Arabic letters.", href: "/courses/noorani-qaida" },
              { title: "Quran Reading", desc: "Build fluent, confident Quran recitation in one-to-one lessons with Almas Fatima.", href: "/courses/quran-reading" },
              { title: "Tajweed", desc: "Learn the rules of correct Quranic recitation, applied to your own recitation in each class.", href: "/courses/tajweed" },
              { title: "Islamic Studies", desc: "Structured Islamic education covering aqeedah, fiqh, seerah, and Islamic manners.", href: "/courses/islamic-studies" },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="card p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-bold text-[#122259] mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{c.desc}</p>
                <span className="text-[#F5A623] text-sm font-semibold flex items-center gap-1">View course <ChevronRight size={12} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to request */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-[#122259] mb-4">How to Request a Female Teacher</h2>
          <p className="text-gray-600 mb-6">Requesting a female teacher is simple. When you book your free trial, simply mention in the &apos;notes&apos; field (or via WhatsApp) that you would like a female teacher. We will ensure Almas Fatima is assigned to your class.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-trial" className="btn-gold">Book Free Trial with Female Teacher</Link>
            <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp to Request</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#122259] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is a female teacher guaranteed?", a: "Yes. If you request a female teacher, Almas Fatima will be your assigned teacher. We do not have a waiting list for female teachers — availability is confirmed at booking." },
              { q: "What courses does the female teacher offer?", a: "Almas Fatima teaches Noorani Qaida, Quran Reading, Tajweed, and Islamic Studies. If you have a specific requirement, please mention it when booking." },
              { q: "Can female adults book as well as children?", a: "Absolutely. Almas Fatima teaches sisters of all ages — children, teenagers, adults, and reverts." },
              { q: "Are the classes private?", a: "Yes — all classes are one-to-one and completely private. No other students are present." },
            ].map((f, i) => (
              <details key={i} className="bg-[#faf9f7] rounded-xl border border-gray-100 group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-[#122259] list-none">
                  {f.q} <ChevronRight size={16} className="transform group-open:rotate-90 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading="Book Your Free Class with a Female Teacher" sub="Completely free, no card required. Mention 'female teacher' and we'll arrange it for you." />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
