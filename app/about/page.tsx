import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Shield, BookOpen, Users, ChevronRight, Award, Heart, Star } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Ease Quran UK — Our Story & Teachers",
  description: "Learn about Ease Quran UK — a trusted online Quran academy founded by certified teacher Shah Zaib to serve Muslim families across the UK with honest, quality education.",
  alternates: { canonical: "https://easequran.co.uk/about" },
};

const stats = [
  { value: "6+", label: "Years Teaching" },
  { value: "1:1", label: "Every Lesson" },
  { value: "2h", label: "Reply Time" },
  { value: "UK", label: "Based & Focused" },
];

const values = [
  { icon: <CheckCircle size={22} className="text-[#F5A623]" />, title: "Honesty First", desc: "We never overstate our credentials or make promises we cannot keep. What you see is what you get — always." },
  { icon: <BookOpen size={22} className="text-[#F5A623]" />, title: "Genuine Quality", desc: "Certified teachers, one-to-one classes, and structured curricula — not freelancers piecing lessons together." },
  { icon: <Shield size={22} className="text-[#F5A623]" />, title: "Child Safety", desc: "Parents can attend any class at any time. Full transparency, always. No exceptions." },
  { icon: <Users size={22} className="text-[#F5A623]" />, title: "For Everyone", desc: "Male and female teachers. Classes for children, teenagers, adults, and reverts. Everyone is welcome." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#122259] pt-12 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 80% 50%, #F5A623 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "About" }]} dark />
          <div className="mt-6 max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] border border-[#F5A623]/30 rounded-full px-3 py-1 mb-4">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">About Ease Quran UK</h1>
            <p className="text-blue-200 text-lg leading-relaxed">A trusted online Quran academy built for Muslim families across the UK — qualified teachers, honest practices, and a genuine commitment to your child&apos;s learning.</p>
          </div>
          {/* Stats row */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-2xl px-4 py-4 text-center">
                <p className="text-2xl font-extrabold text-[#F5A623]">{s.value}</p>
                <p className="text-blue-200 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
              <Image src="/about-easequran.webp" alt="Ease Quran UK — online Quran academy for UK families" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#122259]/40 to-transparent" />
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-3">Why We Started</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#122259] mb-5 leading-snug">We built Ease Quran because trust was missing</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Muslim families in the UK were struggling to find Quran teachers they could genuinely trust. The options were either overstretched mosque teachers, or anonymous online strangers with unverifiable credentials.</p>
                <p>Shah Zaib — our founder — had spent years teaching English-speaking and Western Muslim families and saw what was missing: clear communication, consistent scheduling, verified credentials, and a real academy structure that parents could rely on.</p>
                <p>Ease Quran was built to fill that gap. Every decision we make is guided by one question: <strong className="text-[#122259]">would I trust this for my own child?</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-3">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#122259]">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-3xl border-2 border-[#122259]/10 p-7 hover:border-[#F5A623]/50 hover:shadow-md transition-all duration-300 group">
                <div className="w-11 h-11 rounded-2xl bg-[#faf9f7] flex items-center justify-center mb-4 group-hover:bg-[#F5A623]/10 transition-colors">
                  {v.icon}
                </div>
                <h3 className="font-bold text-[#122259] mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative max-w-sm mx-auto w-full">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                <Image src="/founder.webp" alt="Shah Zaib — founder and head teacher of Ease Quran UK" fill className="object-cover object-top" sizes="(max-width: 768px) 80vw, 40vw" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#F5A623] text-white rounded-2xl px-4 py-3 shadow-lg text-center">
                <p className="text-xs font-bold uppercase tracking-wide">Experience</p>
                <p className="text-2xl font-extrabold leading-none">6+</p>
                <p className="text-xs">Years</p>
              </div>
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-3">Our Founder</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#122259] mb-1">Shah Zaib</h2>
              <p className="text-[#F5A623] font-semibold mb-5 flex items-center gap-2"><Award size={16} /> Founder &amp; Head Teacher</p>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Shah Zaib holds a certification from Wifaq ul Madaris Al-Arabia — one of the most respected Islamic education boards in the world — and has over six years of experience teaching Quran to English-speaking and Western Muslim families.</p>
                <p>He specialises in English-medium Quran teaching, bridging the gap between traditional Islamic learning and the needs of UK-born students who think and communicate primarily in English.</p>
                <p>Shah Zaib personally oversees teacher recruitment, vetting, and quality at Ease Quran. Every teacher goes through a structured interview and trial period before working with any student.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Wifaq ul Madaris Al-Arabia Certified", "6+ Years Experience", "English-Medium Teaching"].map((b) => (
                  <span key={b} className="text-xs bg-[#faf9f7] border border-gray-200 rounded-full px-3 py-1.5 text-gray-700 font-medium">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-3">Our Teaching Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#122259]">Meet the Teachers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Muhammad Umair",
                role: "Tajweed & Hifz Specialist",
                bio: "Certified and experienced in Tajweed rules and Hifz methodology. Muhammad Umair has two years of experience and uses structured, engaging techniques proven to help students memorise and retain Quranic verses.",
                img: "/teacher-1.webp",
                creds: ["Certified Teacher", "Tajweed Specialist", "Hifz Methodology"],
              },
              {
                name: "Almas Fatima",
                role: "Female Quran Teacher",
                bio: "Almas Fatima is a Qaria e Quran with a Bachelor's degree in Islamic Studies. She is available exclusively for sisters and female students, providing a comfortable and professional learning environment.",
                img: "/teacher-2.webp",
                creds: ["Qaria e Quran", "Bachelor of Islamic Studies", "Female Students"],
              },
            ].map((t) => (
              <div key={t.name} className="relative bg-white rounded-3xl border-2 border-[#122259]/10 px-8 pt-12 pb-7 hover:border-[#F5A623]/50 hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-full bg-[#F5A623] group-hover:w-24 transition-all duration-300" />
                <div className="relative w-24 h-24 rounded-full mb-4 p-0.5 bg-gradient-to-br from-[#F5A623] to-[#122259]">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image src={t.img} alt={`${t.name} — ${t.role}`} width={96} height={96} className="object-cover object-top w-full h-full" />
                  </div>
                </div>
                <h3 className="font-bold text-[#122259] text-lg">{t.name}</h3>
                <p className="text-[#F5A623] text-sm font-semibold mb-3">{t.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{t.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {t.creds.map((c) => <span key={c} className="text-xs bg-[#faf9f7] border border-gray-100 rounded-full px-2.5 py-1 text-gray-600">{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguarding */}
      <section className="section-pad">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#122259] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, #F5A623 0%, transparent 60%)" }} />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-[#F5A623]/20 flex items-center justify-center mx-auto mb-5">
                <Shield size={28} className="text-[#F5A623]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Safety &amp; Transparency</h2>
              <p className="text-blue-200 mb-6 max-w-lg mx-auto">
                All classes are one-to-one and online. Parents are welcome to observe any session at any time. We operate with complete transparency — no exceptions.
              </p>
              <Link href="/safety" className="inline-flex items-center gap-2 bg-white text-[#122259] font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm">
                Child Safety Policy <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us strip */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-3">Why Ease Quran</span>
            <h2 className="text-3xl font-bold text-[#122259]">What Makes Us Different</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <Heart size={22} className="text-[#F5A623]" />, title: "Family-Focused", desc: "We understand the challenges UK Muslim families face. Every policy and process is designed around you." },
              { icon: <Star size={22} className="text-[#F5A623]" />, title: "Verified Teachers", desc: "Every teacher is vetted, interviewed, and monitored. We never hire without thorough checks." },
              { icon: <Shield size={22} className="text-[#F5A623]" />, title: "No Lock-In", desc: "No long contracts. No hidden fees. Cancel any time. We earn your trust one class at a time." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#122259] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
