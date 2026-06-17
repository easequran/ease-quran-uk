import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Online Quran Courses UK — All Courses",
  description: "Browse all online Quran courses at Ease Quran UK. One-to-one classes for kids and adults — Noorani Qaida, Tajweed, Hifz, Islamic Studies, Tafseer. Free trial available.",
  openGraph: { url: "/courses" },
  alternates: {
    canonical: "/courses",
  },
};

const courses = [
  { title: "Noorani Qaida", desc: "Start from scratch with the foundational building blocks of Arabic reading. Ideal for children aged 4+ and adult beginners.", img: "/course-noorani-qaida.webp", href: "/courses/noorani-qaida", keyword: "Beginners" },
  { title: "Quran Reading", desc: "Develop fluent, confident Quran recitation with accurate pronunciation and natural reading flow.", img: "/course-quran-reading.webp", href: "/courses/quran-reading", keyword: "All Levels" },
  { title: "Hifz", desc: "Memorise the Quran with a dedicated hafiz teacher using a structured, proven memorisation methodology.", img: "/course-hifz.webp", href: "/courses/hifz", keyword: "Memorisation" },
  { title: "Tajweed", desc: "Learn the rules of correct Quranic recitation — pronunciation, elongation, stopping rules, and beautification.", img: "/course-tajweed.webp", href: "/courses/tajweed", keyword: "Recitation" },
  { title: "Islamic Studies", desc: "A structured programme covering aqeedah, fiqh, seerah, Islamic manners, and core Islamic knowledge.", img: "/course-islamic-studies.webp", href: "/courses/islamic-studies", keyword: "Knowledge" },
  { title: "Tafseer", desc: "Go beyond reading and understand the meanings, context, and lessons of the Quran through guided tafseer.", img: "/course-tafseer.webp", href: "/courses/tafseer", keyword: "Understanding" },
];

export default function Courses() {
  return (
    <>
      <div className="bg-[#faf9f7] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Courses" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-[#122259] mt-4">Online Quran Courses</h1>
          <p className="text-gray-600 mt-3 max-w-2xl">Every course is delivered one-to-one by a certified teacher, at flexible UK timings. Whether you&apos;re booking for a child, a teenager, or yourself — we have the right programme.</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c) => (
              <Link key={c.href} href={c.href} className="card group hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={c.img} alt={`${c.title} online course for UK students`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <span className="absolute top-3 left-3 tag">{c.keyword}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-bold text-[#122259] text-xl mb-2">{c.title}</h2>
                  <p className="text-gray-600 text-sm mb-5 flex-1">{c.desc}</p>
                  <span className="text-[#F5A623] text-sm font-semibold flex items-center gap-1">
                    View course <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
