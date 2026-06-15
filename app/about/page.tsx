import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Shield, BookOpen, Users, ChevronRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Ease Quran UK — Our Story & Teachers",
  description: "Learn about Ease Quran UK — a trusted online Quran academy founded by certified teacher Shah Zaib to serve Muslim families across the UK with honest, quality education.",
  alternates: { canonical: "https://easequran.co.uk/about" },
};

export default function About() {
  return (
    <>
      <div className="bg-[#faf9f7] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-[#122259] mt-4">About Ease Quran UK</h1>
          <p className="text-gray-600 mt-3 max-w-2xl">A trusted online Quran academy built for Muslim families in the UK — qualified teachers, honest practices, and a genuine commitment to your child&apos;s learning.</p>
        </div>
      </div>

      {/* Story & Mission */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <Image src="/about-easequran.webp" alt="Ease Quran UK — online Quran academy for UK families" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div>
              <span className="tag mb-4 inline-block">Our Story</span>
              <h2 className="text-3xl font-bold text-[#122259] mb-4">Why We Started Ease Quran</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Ease Quran began with a simple observation: Muslim families in the UK were struggling to find Quran teachers they could genuinely trust. The options were either local mosques with overstretched teachers, or anonymous online strangers with unverifiable credentials.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Shah Zaib — our founder and head teacher — had spent years teaching English-speaking and Western Muslim families and saw firsthand what was missing: clear English-medium communication, consistent scheduling, transparent credentials, and a real academy structure that parents could rely on.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ease Quran was built to fill that gap. Every decision we make — from how we vet our teachers to how we communicate with parents — is guided by a single question: would I trust this for my own child?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="tag mb-3">What We Stand For</span>
            <h2 className="text-3xl font-bold text-[#122259]">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <CheckCircle size={28} className="text-[#F5A623]" />, title: "Honesty", desc: "We never overstate our credentials or make promises we can&apos;t keep. What you see is what you get." },
              { icon: <BookOpen size={28} className="text-[#F5A623]" />, title: "Quality", desc: "Certified teachers, one-to-one classes, and structured curricula — not freelancers piecing lessons together." },
              { icon: <Shield size={28} className="text-[#F5A623]" />, title: "Safety", desc: "Parents can attend any class. Full transparency, always. Read our Child Safety page for details." },
              { icon: <Users size={28} className="text-[#F5A623]" />, title: "Inclusion", desc: "Male and female teachers. Classes for children, teenagers, adults, and reverts. We teach everyone." },
            ].map((v) => (
              <div key={v.title} className="card p-6 text-center">
                <div className="flex justify-center mb-4">{v.icon}</div>
                <h3 className="font-bold text-[#122259] mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: v.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square max-w-sm mx-auto w-full rounded-2xl overflow-hidden shadow-lg">
              <Image src="/founder.webp" alt="Shah Zaib — founder and head teacher of Ease Quran UK" fill className="object-cover object-top" sizes="(max-width: 768px) 80vw, 40vw" />
            </div>
            <div>
              <span className="tag mb-4 inline-block">Founder</span>
              <h2 className="text-3xl font-bold text-[#122259] mb-1">Shah Zaib</h2>
              <p className="text-[#F5A623] font-semibold mb-4">Founder &amp; Head Teacher</p>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>Shah Zaib holds a certification from Wifaq ul Madaris Al-Arabia — one of the most respected Islamic education boards in the world — and has over six years of experience teaching Quran to English-speaking and Western Muslim families.</p>
                <p>He specialises in English-medium Quran teaching, meaning he bridges the gap between traditional Islamic learning and the needs of UK-born students who think and communicate primarily in English.</p>
                <p>Shah Zaib personally oversees teacher recruitment, vetting, and quality at Ease Quran. Every teacher goes through a structured interview process and trial period before working with students.</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {["Wifaq ul Madaris Al-Arabia Certified", "6+ Years Experience", "English-Medium Teaching"].map((b) => (
                  <span key={b} className="text-xs bg-[#faf9f7] border border-gray-200 rounded-full px-3 py-1 text-gray-700">{b}</span>
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
            <span className="tag mb-3">Our Teaching Team</span>
            <h2 className="text-3xl font-bold text-[#122259]">Meet the Teachers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: "Muhammad Umair", role: "Tajweed & Hifz Specialist", bio: "Certified and experienced in Tajweed rules and Hifz methodology. Muhammad Umair has two years of experience and uses structured, engaging techniques proven to help students memorise and retain Quranic verses.", img: "/teacher-1.webp", creds: ["Certified Teacher", "Tajweed Specialist", "Hifz Methodology"] },
              { name: "Almas Fatima", role: "Female Quran Teacher", bio: "Almas Fatima is a Qaria e Quran with a Bachelor's degree in Islamic Studies. She is available exclusively for sisters and female students, providing a comfortable and professional learning environment.", img: "/teacher-2.webp", creds: ["Qaria e Quran", "Bachelor of Islamic Studies", "Female Students"] },
            ].map((t) => (
              <div key={t.name} className="card p-6">
                <div className="flex gap-5 mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#F5A623]/20">
                    <Image src={t.img} alt={`${t.name} — ${t.role}`} fill className="object-cover object-top" sizes="80px" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#122259] text-lg">{t.name}</h3>
                    <p className="text-[#F5A623] text-sm font-semibold">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{t.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {t.creds.map((c) => <span key={c} className="text-xs bg-[#faf9f7] border border-gray-100 rounded-full px-2.5 py-1 text-gray-600">{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguarding mention */}
      <section className="section-pad">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Shield size={40} className="text-[#122259] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#122259] mb-3">Safety &amp; Transparency</h2>
          <p className="text-gray-600 mb-6">
            We take child safety seriously. All classes are one-to-one and online, parents are welcome to observe any session at any time, and we operate with complete transparency. Read our full safeguarding approach on our Child Safety page.
          </p>
          <Link href="/safety" className="btn-navy inline-flex">Child Safety Policy <ChevronRight size={16} /></Link>
        </div>
      </section>

      <CTABand />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
