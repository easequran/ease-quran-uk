import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle, BookOpen, Users, Clock, Star, Shield, Wifi, User, ChevronRight, MessageCircle
} from "lucide-react";
import VideoEmbed from "@/components/VideoEmbed";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Online Quran Classes for Kids & Adults in the UK",
  description:
    "Trusted online Quran classes in the UK. One-to-one lessons with qualified male & female teachers. Flexible UK timings, free first class, no commitment. Start today.",
  alternates: {
    canonical: "https://easequran.co.uk",
    languages: { "en-GB": "https://easequran.co.uk", "en-US": "https://easequran.com" },
  },
};

const courses = [
  { title: "Noorani Qaida", desc: "The perfect starting point for beginners and young children learning to read Arabic letters.", img: "/course-noorani-qaida.webp", href: "/courses/noorani-qaida" },
  { title: "Quran Reading", desc: "Learn to read the Quran fluently with correct pronunciation and flowing recitation.", img: "/course-quran-reading.webp", href: "/courses/quran-reading" },
  { title: "Hifz", desc: "Memorise the Quran at your own pace with a dedicated hafiz teacher and proven methodology.", img: "/course-hifz.webp", href: "/courses/hifz" },
  { title: "Tajweed", desc: "Master the rules of Tajweed for a beautiful, accurate recitation of the Holy Quran.", img: "/course-tajweed.webp", href: "/courses/tajweed" },
  { title: "Islamic Studies", desc: "Comprehensive Islamic education covering aqeedah, fiqh, seerah, and Islamic manners.", img: "/course-islamic-studies.webp", href: "/courses/islamic-studies" },
  { title: "Tafseer", desc: "Understand the deep meanings of Quranic verses with structured tafseer lessons.", img: "/course-tafseer.webp", href: "/courses/tafseer" },
];

const painSolutions = [
  { pain: "Teachers who cancel last minute or disappear without notice", solution: "We have a structured timetable and a team of teachers. Your child's lesson always happens." },
  { pain: "Unverified strangers with no traceable credentials", solution: "Every Ease Quran teacher is certified, interviewed, and teaching under a real registered academy." },
  { pain: "No female teachers available for sisters or daughters", solution: "Our qualified female teacher Almas Fatima is available for sisters and female students of all ages." },
];

const steps = [
  { step: "1", title: "Book Your Free Trial", desc: "Fill in the short form. No card required, no commitment. We will contact you within 2 hours to confirm." },
  { step: "2", title: "Meet Your Teacher", desc: "We match you with the right certified teacher (male or female) and agree on a regular UK time slot." },
  { step: "3", title: "Start Learning", desc: "Your one-to-one lessons begin. Learn at your own pace, in English, from the comfort of your home." },
];

const whyUs = [
  { icon: <CheckCircle size={22} className="text-[#F5A623]" />, title: "Qualified, Certified Teachers", desc: "All our teachers hold recognised Islamic certifications and are experienced in teaching English-speaking, Western students." },
  { icon: <User size={22} className="text-[#F5A623]" />, title: "Completely One-to-One", desc: "Every class is private — your child gets the teacher's full attention, at a pace that suits them. No group classes." },
  { icon: <Users size={22} className="text-[#F5A623]" />, title: "Female Teachers Available", desc: "We offer dedicated female Quran teachers for sisters and daughters who prefer a female instructor." },
  { icon: <Clock size={22} className="text-[#F5A623]" />, title: "Flexible UK Timings", desc: "Classes available across UK time slots including evenings and weekends — built around school and work schedules." },
  { icon: <BookOpen size={22} className="text-[#F5A623]" />, title: "Taught in English", desc: "Our teachers communicate clearly in English so lessons are easy to follow for UK-born students." },
  { icon: <Shield size={22} className="text-[#F5A623]" />, title: "Safe & Transparent", desc: "Parents can sit in on any class. Sessions can be recorded on request. Full transparency — always." },
];

const faqs = [
  { q: "How do online Quran classes work?", a: "Lessons take place live via Zoom or Google Meet. Your teacher connects with your child one-to-one at the agreed time. All you need is a phone, tablet, or laptop and a stable internet connection." },
  { q: "Can I get a female Quran teacher?", a: "Yes. We have a qualified female teacher — Almas Fatima — available for sisters, daughters, and any student who prefers a female instructor. Simply mention this when booking." },
  { q: "What ages do you teach?", a: "We teach children from age 4 upwards, as well as teenagers and adults. Our teachers adapt their approach to the student's age and learning style." },
  { q: "What timings are available for UK students?", a: "We offer classes across all UK time slots including early mornings, after school (3pm–8pm), and weekends. We'll agree a regular slot that fits your family's routine." },
  { q: "How much do classes cost?", a: "Plans start from £30/month for 2 classes per week. All pricing is transparent — visit our pricing page for full details. Sibling discounts are also available." },
  { q: "Is the free trial really free?", a: "Yes — completely free, no card required, and no commitment. You try the class and decide afterwards if you'd like to continue." },
  { q: "How do you keep classes safe for children?", a: "All classes are one-to-one and online. Parents are welcome to sit in at any time. Sessions can be recorded on request. Visit our Child Safety page for full details." },
];

const cities = [
  { label: "London", href: "/locations/london" },
  { label: "Birmingham", href: "/locations/birmingham" },
  { label: "Manchester", href: "/locations/manchester" },
  { label: "Bradford", href: "/locations/bradford" },
  { label: "Leicester", href: "/locations/leicester" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const trustBadges = [
  { icon: <Shield size={20} />, label: "Qualified & Vetted Teachers" },
  { icon: <User size={20} />, label: "One-to-One Lessons" },
  { icon: <Users size={20} />, label: "Male & Female Teachers" },
  { icon: <Star size={20} />, label: "Free First Class" },
  { icon: <Wifi size={20} />, label: "Flexible UK Timings" },
  { icon: <BookOpen size={20} />, label: "Certified by Wifaq ul Madaris" },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="relative bg-[#122259] text-white overflow-hidden min-h-[560px] flex items-center">
        <picture className="absolute inset-0">
          <source media="(max-width: 767px)" srcSet="/hero-home-mobile.webp" />
          <Image
            src="/hero-home.webp"
            alt="Muslim child learning Quran online with a qualified UK teacher"
            fill
            className="object-cover object-center opacity-25"
            priority
            sizes="100vw"
          />
        </picture>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 w-full">
          <div className="max-w-2xl">
            <span className="tag mb-4 inline-block">UK&apos;s Trusted Online Quran Academy</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Trusted Online Quran Classes for Kids &amp; Adults in the UK
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              One-to-one lessons with qualified male and female teachers. Learn Tajweed, Hifz, Noorani Qaida, and more — at flexible UK timings, from home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/free-trial" className="btn-gold text-base">Book Your Free Trial Class</Link>
              <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-outline-white text-base">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Qualified Teachers", "One-to-One", "Female Teachers Available", "Free First Class", "Certified"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-sm bg-white/10 rounded-full px-3 py-1">
                  <CheckCircle size={13} className="text-[#F5A623]" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAIN → SOLUTION */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="tag mb-3">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#122259]">Tired of unreliable online Quran academies?</h2>
            <p className="text-gray-600 mt-4">Too many families have been let down. Ease Quran was built to fix that.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painSolutions.map((item, i) => (
              <div key={i} className="card p-6">
                <p className="text-gray-400 text-sm mb-4 line-through">{item.pain}</p>
                <div className="w-6 h-0.5 bg-[#F5A623] mb-4" />
                <p className="text-gray-800 text-sm font-medium">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="tag mb-3">Simple & Clear</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#122259]">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#122259] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-5">{s.step}</div>
                <h3 className="text-xl font-bold text-[#122259] mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/free-trial" className="btn-gold">Book Your Free Trial</Link>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="tag mb-3">What We Teach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#122259]">Our Courses</h2>
            <p className="text-gray-600 mt-3">From complete beginners to advanced students — a course for every level.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => (
              <Link key={c.href} href={c.href} className="card group hover:shadow-lg transition-shadow">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={c.img} alt={`${c.title} online course for UK students`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#122259] text-lg mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{c.desc}</p>
                  <span className="text-[#F5A623] text-sm font-semibold flex items-center gap-1">Learn more <ChevronRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/courses" className="btn-outline">View All Courses</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="tag mb-3">Why Ease Quran</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#122259]">What Makes Us Different</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="flex gap-4 p-5 rounded-xl bg-[#faf9f7]">
                <div className="flex-shrink-0 mt-0.5">{w.icon}</div>
                <div>
                  <h3 className="font-bold text-[#122259] mb-1">{w.title}</h3>
                  <p className="text-gray-600 text-sm">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-sm mx-auto w-full rounded-2xl overflow-hidden shadow-lg">
              <Image src="/founder.webp" alt="Shah Zaib — founder and head teacher of Ease Quran UK" fill className="object-cover object-top" sizes="(max-width: 768px) 80vw, 40vw" />
            </div>
            <div>
              <span className="tag mb-4 inline-block">Meet the Founder</span>
              <h2 className="text-3xl font-bold text-[#122259] mb-4">Shah Zaib — Founder &amp; Head Teacher</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Shah Zaib founded Ease Quran with a clear purpose: to give Muslim families in the UK access to genuinely qualified, English-friendly Quran education — without the unreliability or opacity that has let so many families down.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A Wifaq ul Madaris Al-Arabia certified teacher with over six years of experience teaching English-speaking and Western students, Shah Zaib understands what UK families need: clear communication, consistent scheduling, and a teacher who genuinely cares about each student&apos;s progress.
              </p>
              <blockquote className="border-l-4 border-[#F5A623] pl-4 italic text-gray-600 my-5">
                &ldquo;Every child deserves a teacher who shows up, who communicates in their language, and who makes the Quran feel accessible — not intimidating. That&apos;s what Ease Quran is built on.&rdquo;
              </blockquote>
              <Link href="/about" className="btn-navy inline-flex">Read Our Story <ChevronRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="tag mb-3">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#122259]">Meet Your Teachers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: "Muhammad Umair", role: "Tajweed & Hifz Specialist", bio: "A certified Quran teacher with two years of experience specialising in Tajweed and Hifz. Muhammad Umair uses proven memorisation techniques that help students — young and old — retain and revise with confidence.", img: "/teacher-1.webp", badge: "Tajweed & Hifz" },
              { name: "Almas Fatima", role: "Female Quran Teacher", bio: "A Qaria e Quran with a Bachelor's degree in Islamic Studies, Almas Fatima is available for sisters and female students. She provides a comfortable, professional, and encouraging learning environment.", img: "/teacher-2.webp", badge: "Female Teacher" },
            ].map((t) => (
              <div key={t.name} className="card p-6 flex flex-col items-center text-center">
                <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-[#F5A623]/30">
                  <Image src={t.img} alt={`${t.name} — ${t.role} at Ease Quran UK`} fill className="object-cover object-top" sizes="112px" />
                </div>
                <span className="tag mb-2">{t.badge}</span>
                <h3 className="text-xl font-bold text-[#122259]">{t.name}</h3>
                <p className="text-[#F5A623] text-sm font-semibold mb-3">{t.role}</p>
                <p className="text-gray-600 text-sm">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="tag mb-3">Real Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#122259]">What UK Families Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <VideoEmbed videoId="u_j-zh0jFL8" title="Ease Quran UK Review — Saman Imran" reviewer="Saman Imran" />
            <VideoEmbed videoId="1eQ9zKKLWfQ" title="Ease Quran UK Review — Younas Rahman" reviewer="Younas Rahman" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["/review-1.webp", "/review-2.webp"].map((src, i) => (
              <div key={i} className="card p-4">
                <Image src={src} alt={`Parent feedback for Ease Quran UK — WhatsApp review ${i + 1}`} width={600} height={400} className="w-full h-auto rounded-lg" />
                <p className="text-xs text-gray-400 mt-3 text-center">Parent feedback — shared via WhatsApp (private info blurred)</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO: NEAR ME */}
      <section className="section-pad">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="tag mb-3">Available Across the UK</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#122259] mb-6">
            Looking for &quot;Quran Classes Near Me&quot; in the UK?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The best Quran teacher is not always the one who lives nearby — it is the one who is qualified, consistent, and communicates clearly. Our one-to-one online classes mean you can access a certified Ease Quran teacher wherever you are in the UK.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Families in London, Birmingham, Manchester, Bradford, Leicester, and beyond choose Ease Quran for the quality of teaching, not just the convenience. One-to-one online means your child gets a teacher&apos;s full attention at times that work around school and family life.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map((c) => (
              <Link key={c.href} href={c.href} className="px-4 py-2 bg-[#faf9f7] rounded-full text-sm font-semibold text-[#122259] hover:bg-[#122259] hover:text-white transition-colors border border-gray-200">
                Quran Classes in {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="tag mb-3">FAQ</span>
            <h2 className="text-3xl font-bold text-[#122259]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-[#122259] list-none">
                  {f.q}
                  <ChevronRight size={16} className="transform group-open:rotate-90 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-10 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-6">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm font-medium text-[#122259]">
                <span className="text-[#F5A623]">{b.icon}</span> {b.label}
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
