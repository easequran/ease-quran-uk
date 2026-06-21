import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Eye, MessageCircle, ClipboardCheck, Lock, AlertCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Child Safety & Safeguarding Policy",
  description: "How Ease Quran UK keeps children safe in online Quran classes. Read our honest safeguarding approach — parental supervision, teacher vetting, transparency, and how to raise a concern.",
  openGraph: { url: "/safety" },
  alternates: {
    canonical: "/safety",
  },
};

export default function Safety() {
  return (
    <>
      <div className="bg-[#122259] py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Child Safety" }]} />
          <div className="mt-4 max-w-2xl">
            <Shield size={40} className="text-[#F5A623] mb-4" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Child Safety &amp; Safeguarding</h1>
            <p className="text-blue-100 text-lg">We believe every parent deserves to know exactly how their child is kept safe in our online classes. This page explains our approach — honestly and in plain English.</p>
          </div>
        </div>
      </div>

      <section className="section-pad">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <p className="text-gray-700 leading-relaxed mb-8">
            Trusting a Quran teacher with your child is a significant decision. At Ease Quran UK, we take this responsibility seriously. Below is a transparent account of how our classes are structured, how our teachers are selected, and what you can do if you ever have a concern.
          </p>

          <div className="space-y-10">

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye size={24} className="text-[#F5A623]" />
                <h2 className="text-2xl font-bold text-[#122259]">1. Parents Can Observe Any Class, Any Time</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                All classes are one-to-one and conducted online via video call (Zoom or Google Meet). There are no hidden groups, no secondary sessions, and no communication with students outside the scheduled class time. Parents and guardians are welcome — and encouraged — to sit in on any class at any time, without prior notice. You can observe the full lesson as often as you wish.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Lock size={24} className="text-[#F5A623]" />
                <h2 className="text-2xl font-bold text-[#122259]">2. Classes Can Be Recorded on Request</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                If you would like a record of your child&apos;s lesson for your own peace of mind, simply ask. Classes can be recorded by the parent or, on request, by the teacher. Recordings remain with the family and are not shared or stored by the academy without your consent.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck size={24} className="text-[#F5A623]" />
                <h2 className="text-2xl font-bold text-[#122259]">3. How We Vet Our Teachers</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Every teacher at Ease Quran UK goes through a structured selection process before working with students. This includes:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                {[
                  "A thorough interview conducted by the founder Shah Zaib",
                  "Verification of Islamic educational credentials",
                  "A trial teaching assessment covering teaching ability, communication, and professional conduct",
                  "An ongoing probationary period before full assignment to students",
                  "Regular oversight and communication between teachers and the academy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F5A623] flex-shrink-0 mt-1.5" /> {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm mt-4 italic">
                Note: As an online academy, our teachers are not required to obtain a UK DBS check (which is a requirement for in-person roles with children). We do not claim DBS checked status. Instead, our safeguarding approach relies on parental oversight, full lesson transparency, and our internal teacher vetting process described above.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield size={24} className="text-[#F5A623]" />
                <h2 className="text-2xl font-bold text-[#122259]">4. Our Code of Conduct for Teachers</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">All Ease Quran teachers are required to:</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                {[
                  "Conduct all lessons professionally and respectfully at all times",
                  "Never contact students outside of scheduled class time without parental knowledge",
                  "Never request personal information from students beyond what is shared by the parent",
                  "Immediately report any concerns about a student's wellbeing to the academy",
                  "Accept parental observation without prior notice",
                  "Dress appropriately and maintain Islamic standards of conduct throughout",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F5A623] flex-shrink-0 mt-1.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle size={24} className="text-[#F5A623]" />
                <h2 className="text-2xl font-bold text-[#122259]">5. How to Raise a Concern</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you ever feel uncomfortable about anything related to your child&apos;s classes — however small — please contact us immediately. No concern is too minor. We take all feedback seriously and will respond promptly.
              </p>
              <div className="bg-[#faf9f7] rounded-xl p-5 space-y-3">
                <p className="text-sm font-semibold text-[#122259]">Contact us to raise a concern:</p>
                <a href="mailto:info@easequran.co.uk" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#122259]">
                  <MessageCircle size={15} /> info@easequran.co.uk
                </a>
                <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#122259]">
                  <MessageCircle size={15} /> WhatsApp: +44 7311 254423
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 bg-[#122259] rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-2">Our Commitment</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              The safety and wellbeing of every student at Ease Quran UK is our highest priority. We are committed to continuous improvement of our safeguarding practices and welcome any feedback that helps us serve families better. If you have a concern, please never hesitate to contact us — your child&apos;s safety comes first.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/free-trial" className="btn-gold inline-flex">Book a Free Trial Class</Link>
            <p className="mt-3 text-sm text-gray-500">Have questions? <a href="https://wa.me/447311254423" className="text-[#F5A623] font-semibold">WhatsApp us</a></p>
          </div>
        </div>
      </section>
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
