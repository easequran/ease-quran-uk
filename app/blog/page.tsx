import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, BookMarked } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Quran Education Blog: Tips and Advice for UK Families",
  description: "Helpful guides for UK Muslim families on Quran education: choosing a teacher, online class safety, starting ages, and more. Read the Ease Quran blog.",
  openGraph: { url: "/blog" },
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "is-it-safe-online-quran-classes-uk",
    title: "Is It Safe for My Child to Learn Quran Online? A Parent's Honest Safety Checklist",
    excerpt: "A clear, honest safety checklist for UK parents: what to ask, what to watch for, and how we keep every lesson safe.",
    date: "2026-06-01",
    readTime: "7 min read",
    category: "Trust & Safety",
    heroImage: "/blog-safety-checklist.webp",
  },
  {
    slug: "surah-al-kahf-friday-reading-guide",
    title: "Surah Al-Kahf: Why We Read It Every Friday and Its Virtues",
    excerpt: "The virtues of Surah Al-Kahf, why Muslims read it every Friday, and the full Arabic text with English translation.",
    date: "2026-07-01",
    readTime: "15 min read",
    category: "Quran Knowledge",
    heroImage: "/images/blog/surah-al-kahf-friday-reading-hero.webp",
  },
  {
    slug: "quran-verses-to-memorize-first",
    title: "Quran Verses Every Beginner Should Memorize First",
    excerpt: "The most essential, beginner-friendly verses, why they matter, and how to build a lasting memorization habit.",
    date: "2026-07-08",
    readTime: "8 min read",
    category: "Memorization",
    heroImage: "/images/blog/quran-verses-memorization-hero.webp",
  },
  {
    slug: "dua-for-success",
    title: "Powerful Dua for Success: Quranic Duas for Exams, Work and Life",
    excerpt: "Authentic Quranic duas for exams, work, and everyday challenges, with Arabic text, transliteration, and meaning.",
    date: "2026-07-15",
    readTime: "6 min read",
    category: "Dua & Dhikr",
    heroImage: "/images/blog/dua-for-success-exam-hero.webp",
  },
];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#122259] overflow-hidden min-h-[280px] sm:min-h-[340px] flex items-center">
        <Image src="/blog-hero.webp" alt="UK Muslim parent and child reading together" fill className="object-cover object-center opacity-20" priority sizes="100vw" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 w-full">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} dark />
          <div className="mt-5 max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] border border-[#F5A623]/30 rounded-full px-3 py-1 mb-4">Quran Education Blog</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">Guides for UK Muslim Families</h1>
            <p className="text-blue-200 text-base sm:text-lg">Practical, honest advice on Quran education, written by teachers, for parents.</p>
          </div>
        </div>
      </section>

      {/* All posts, uniform 2×2 grid */}
      <section className="section-pad">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#F5A623]/50 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image, 16:9 aspect ratio, consistent across all cards */}
                <div className="relative w-full overflow-hidden bg-[#122259]" style={{ paddingTop: "56.25%" }}>
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#122259]/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-[#F5A623] px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Clock size={11} /> {post.readTime}
                    </span>
                    <time className="text-gray-400 text-xs" dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <h2 className="text-[15px] sm:text-base font-bold text-[#122259] leading-snug mb-2 group-hover:text-[#F5A623] transition-colors flex-1">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#F5A623] font-bold text-xs border-t border-gray-100 pt-4">
                    Read article <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp nudge */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#122259] rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 60% 0%, #F5A623 0%, transparent 60%)" }} />
            <div className="relative">
              <BookMarked size={26} className="text-[#F5A623] mx-auto mb-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">New articles every month</h3>
              <p className="text-blue-200 text-sm mb-6 max-w-sm mx-auto">WhatsApp us and we will send you new guides as they are published. No spam, just useful advice for UK families.</p>
              <a
                href="https://wa.me/447311254423?text=Hi%2C%20please%20let%20me%20know%20when%20you%20publish%20new%20blog%20articles."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex text-sm"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L.057 23.59a.75.75 0 00.917.932l5.898-1.546A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.029 22c-1.96 0-3.791-.527-5.363-1.443l-.385-.228-3.99 1.047 1.004-3.878-.249-.394A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                WhatsApp for Updates
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
