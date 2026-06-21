import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, BookOpen, ArrowRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Quran Education Blog — Tips & Advice for UK Families",
  description: "Helpful guides and articles for UK Muslim families on Quran education — choosing a teacher, starting ages, Tajweed vs reading, and more. Read the Ease Quran blog.",
  openGraph: { url: "/blog" },
  alternates: {
    canonical: "/blog",
  },
};

const posts = [
  {
    slug: "is-it-safe-online-quran-classes-uk",
    title: "Is It Safe for My Child to Learn Quran Online? A Parent's Honest Safety Checklist",
    excerpt: "A clear, honest safety checklist for UK parents considering online Quran classes — what to ask, what to watch for, and how we keep every lesson safe.",
    date: "2026-06-01",
    readTime: "7 min read",
    category: "Trust & Safety",
  },
  {
    slug: "how-to-choose-online-quran-teacher-uk",
    title: "How to Choose an Online Quran Teacher in the UK: A Parent's Guide",
    excerpt: "With so many options — from individual tutors to online academies — choosing the right Quran teacher for your child in the UK can feel overwhelming. Here is what to look for, what to avoid, and the questions to ask before you commit.",
    date: "2024-12-01",
    readTime: "7 min read",
    category: "Choosing a Teacher",
  },
  {
    slug: "best-age-to-start-quran-classes",
    title: "What Is the Best Age to Start Quran Classes for Kids?",
    excerpt: "Most parents want to start their children on the Quran as early as possible — but is there an ideal age? We explore the signs of readiness, how different ages learn differently, and how to make the most of early Quranic education.",
    date: "2024-11-15",
    readTime: "6 min read",
    category: "Getting Started",
  },
  {
    slug: "noorani-qaida-vs-quran-reading",
    title: "Noorani Qaida vs Quran Reading: Where Should My Child Start?",
    excerpt: "Many parents are unsure whether their child should begin with Noorani Qaida or go straight to reading the Quran. This guide explains the difference, who each approach suits, and how to make the right decision for your child.",
    date: "2024-11-01",
    readTime: "5 min read",
    category: "Courses",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#122259] overflow-hidden min-h-[360px] flex items-center">
        <Image
          src="/blog-hero.webp"
          alt="UK Muslim parent and child reading together — Ease Quran blog"
          fill
          className="object-cover object-center opacity-20"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} dark />
          <div className="mt-6 max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] border border-[#F5A623]/30 rounded-full px-3 py-1 mb-4">Quran Education Blog</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">Guides for UK Muslim Families</h1>
            <p className="text-blue-200 text-lg">Practical, honest advice on Quran education, written by teachers for parents.</p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Featured post */}
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-4">Featured Article</p>
            <Link href={`/blog/${featured.slug}`} className="group block bg-white rounded-3xl border-2 border-[#122259]/10 hover:border-[#F5A623]/50 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-white bg-[#122259] px-3 py-1 rounded-full">{featured.category}</span>
                  <span className="text-gray-400 text-xs flex items-center gap-1"><Clock size={11} /> {featured.readTime}</span>
                  <time className="text-gray-400 text-xs" dateTime={featured.date}>{formatDate(featured.date)}</time>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#122259] mb-3 group-hover:text-[#F5A623] transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-[#F5A623] font-semibold text-sm">
                  Read article <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>

          {/* Rest of posts */}
          {rest.length > 0 && (
            <>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">More Articles</p>
              <div className="space-y-5">
                {rest.map((post) => (
                  <article key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="group flex flex-col sm:flex-row gap-5 bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#F5A623]/40 hover:shadow-md transition-all duration-300">
                      <div className="sm:w-10 sm:pt-1 flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-[#faf9f7] border border-gray-100 flex items-center justify-center">
                          <BookOpen size={16} className="text-[#F5A623]" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold text-[#122259] bg-[#faf9f7] border border-gray-200 px-2.5 py-0.5 rounded-full">{post.category}</span>
                          <span className="text-gray-400 text-xs flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                        </div>
                        <h2 className="text-lg font-bold text-[#122259] mb-1.5 group-hover:text-[#F5A623] transition-colors leading-snug">
                          {post.title}
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                      </div>
                      <div className="sm:flex sm:items-center flex-shrink-0">
                        <ChevronRight size={18} className="text-gray-300 group-hover:text-[#F5A623] transition-colors" />
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </>
          )}

          {/* Newsletter / no more posts nudge */}
          <div className="mt-14 bg-[#faf9f7] rounded-3xl border border-gray-100 p-8 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-3">More Coming Soon</span>
            <h3 className="text-xl font-bold text-[#122259] mb-2">We publish new guides regularly</h3>
            <p className="text-gray-500 text-sm mb-5 max-w-sm mx-auto">Follow us on social media or WhatsApp us to be notified when new articles are published.</p>
            <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-navy inline-flex text-sm">
              WhatsApp Us
            </a>
          </div>

        </div>
      </section>

      <CTABand />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
