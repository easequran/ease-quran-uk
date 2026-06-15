import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Quran Education Blog — Tips & Advice for UK Families",
  description: "Helpful guides and articles for UK Muslim families on Quran education — choosing a teacher, starting ages, Tajweed vs reading, and more. Read the Ease Quran blog.",
  alternates: { canonical: "https://easequran.co.uk/blog" },
};

const posts = [
  {
    slug: "how-to-choose-online-quran-teacher-uk",
    title: "How to Choose an Online Quran Teacher in the UK: A Parent's Guide",
    excerpt: "With so many options — from individual tutors to online academies — choosing the right Quran teacher for your child in the UK can feel overwhelming. Here is what to look for, what to avoid, and the questions to ask before you commit.",
    date: "2024-12-01",
    readTime: "7 min read",
  },
  {
    slug: "best-age-to-start-quran-classes",
    title: "What Is the Best Age to Start Quran Classes for Kids?",
    excerpt: "Most parents want to start their children on the Quran as early as possible — but is there an ideal age? We explore the signs of readiness, how different ages learn differently, and how to make the most of early Quranic education.",
    date: "2024-11-15",
    readTime: "6 min read",
  },
  {
    slug: "noorani-qaida-vs-quran-reading",
    title: "Noorani Qaida vs Quran Reading: Where Should My Child Start?",
    excerpt: "Many parents are unsure whether their child should begin with Noorani Qaida or go straight to reading the Quran. This guide explains the difference, who each approach suits, and how to make the right decision for your child.",
    date: "2024-11-01",
    readTime: "5 min read",
  },
];

export default function Blog() {
  return (
    <>
      <div className="bg-[#faf9f7] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <h1 className="text-4xl font-bold text-[#122259] mt-4">Quran Education Blog</h1>
          <p className="text-gray-600 mt-2 max-w-xl">Practical guides and honest advice for Muslim families in the UK navigating Quran education.</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="card p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#122259] mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#FD9C02] transition-colors">{post.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-[#FD9C02] text-sm font-semibold flex items-center gap-1">
                  Read article <ChevronRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
