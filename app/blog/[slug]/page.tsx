import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ChevronRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

const posts: Post[] = [
  {
    slug: "how-to-choose-online-quran-teacher-uk",
    title: "How to Choose an Online Quran Teacher in the UK: A Parent's Guide",
    description: "A practical guide for UK Muslim parents on how to choose a trustworthy, qualified online Quran teacher — what to look for, what to avoid, and questions to ask.",
    date: "2024-12-01",
    readTime: "7 min read",
    content: (
      <div className="prose prose-gray max-w-none">
        <p>Choosing an online Quran teacher is one of the most important decisions a Muslim parent makes. You are trusting someone with your child&apos;s spiritual foundation — and with regular one-to-one access to your child. Getting it right matters enormously.</p>
        <p>The UK market has exploded with options: independent tutors on freelance platforms, WhatsApp groups, YouTube channels turned academies, and everything in between. Quality varies hugely. Here is what to look for.</p>

        <h2>1. Verify Their Credentials — Really</h2>
        <p>The most important question is: what is this teacher&apos;s actual Islamic education? Not just &ldquo;years of experience&rdquo; — but a specific, verifiable qualification from a recognised institution.</p>
        <p>In the South Asian Islamic education tradition, Wifaq ul Madaris Al-Arabia is one of the most respected certification bodies. A teacher who holds this (or an equivalent from a credible institution) has gone through years of structured religious education.</p>
        <p>Be wary of teachers who list credentials vaguely (&ldquo;trained for many years&rdquo;, &ldquo;hafiz&rdquo; without more context) or cannot point to a specific institution. &ldquo;Hafiz&rdquo; simply means someone who has memorised the Quran — it is not automatically a teaching qualification.</p>

        <h2>2. Insist on a Structured Academy — Not a Solo Freelancer</h2>
        <p>Individual tutors found via Facebook groups or WhatsApp introductions may be excellent — but you have no way to verify their background, no third party who has vetted them, and no recourse if something goes wrong.</p>
        <p>A real academy — even a small one — has a structure: the teachers are employed or contracted, there is oversight, and there is a named person accountable for quality. Ask: who runs this academy, who vets the teachers, and what happens if there is a problem?</p>

        <h2>3. Check That Teaching Is One-to-One</h2>
        <p>One-to-one teaching is significantly more effective for Quran learning than group classes. In a group, a teacher cannot give corrective feedback on every student&apos;s recitation. In a one-to-one session, mistakes are caught and corrected immediately.</p>
        <p>Many online academies advertise personalised learning but quietly place children in groups. Always confirm explicitly: is this a one-to-one class, or shared with other students?</p>

        <h2>4. Confirm English-Medium Teaching</h2>
        <p>For UK-born Muslim children who think and communicate in English, teaching in Urdu or another language creates an unnecessary barrier. The most effective Quran teachers for UK children explain rules, give instructions, and answer questions in clear, patient English.</p>
        <p>Ask before booking: in what language will the lesson be conducted?</p>

        <h2>5. Ask About Safeguarding and Transparency</h2>
        <p>As a parent, you are placing your child in regular contact with an adult they meet online. Responsible academies have thought about this. Ask:</p>
        <ul>
          <li>Can I observe the class at any time, without notice?</li>
          <li>Can the lesson be recorded?</li>
          <li>Is there any communication between the teacher and my child outside the scheduled class?</li>
          <li>How do I raise a concern?</li>
        </ul>
        <p>An academy that welcomes these questions is one that takes child safety seriously. One that is evasive or surprised by them is a warning sign.</p>

        <h2>6. Request a Female Teacher If Needed</h2>
        <p>For sisters, daughters, and many UK families, having a female Quran teacher is important — religiously or for comfort reasons. Not all academies have qualified female teachers. If this matters to you, confirm it explicitly and verify the female teacher&apos;s credentials just as rigorously as a male teacher&apos;s.</p>

        <h2>7. Take the Free Trial Seriously</h2>
        <p>Most reputable online Quran academies offer a free trial class. Use it properly:</p>
        <ul>
          <li>Observe the lesson yourself</li>
          <li>Notice whether the teacher communicates clearly in English</li>
          <li>Watch how the teacher handles mistakes — patient correction vs frustration</li>
          <li>Ask your child how they felt afterwards</li>
        </ul>
        <p>The free trial is not just a sales demo — it is your chance to genuinely assess whether this is the right teacher for your child.</p>

        <h2>Red Flags to Watch Out For</h2>
        <ul>
          <li>Vague or unverifiable credentials</li>
          <li>No clear information about who runs the academy</li>
          <li>Pressure to commit before trying</li>
          <li>Unable to answer basic questions about safeguarding</li>
          <li>No option to observe classes</li>
          <li>Prices that seem too low to sustain quality teaching</li>
        </ul>

        <p>Finding the right Quran teacher takes a little effort — but it is worth it. Your child&apos;s relationship with the Quran starts here.</p>
      </div>
    ),
  },
  {
    slug: "best-age-to-start-quran-classes",
    title: "What Is the Best Age to Start Quran Classes for Kids?",
    description: "When should children start Quran classes? We explore readiness signs, how age affects learning, and what UK parents should consider when timing their child's start.",
    date: "2024-11-15",
    readTime: "6 min read",
    content: (
      <div className="prose prose-gray max-w-none">
        <p>One of the most common questions from Muslim parents in the UK is: when should my child start Quran lessons? The eagerness is understandable — parents want to give their children the gift of Quranic education as early as possible. But starting too early, before a child is ready, can create frustration instead of love for the Quran.</p>

        <p>Here is an honest look at the right timing.</p>

        <h2>The Traditional Guidance</h2>
        <p>Islamic scholars have traditionally recommended beginning Quran education when a child is around 4–5 years old. The Prophet Muhammad (ﷺ) is reported to have said: &ldquo;Teach your children to pray when they are seven.&rdquo; The implication is that a foundation of Quranic literacy should come before formal worship begins.</p>
        <p>Most contemporary Islamic educators recommend starting Noorani Qaida (the Arabic alphabet and foundational reading skills) between ages 4 and 6, with actual Quran reading beginning around age 6–7.</p>

        <h2>Signs of Readiness — More Important Than Age</h2>
        <p>Age is a guide, not a rule. The more important question is whether the child is ready. Look for:</p>
        <ul>
          <li><strong>Ability to sit and focus for 20–30 minutes</strong> — A child who cannot yet sustain attention for that long will struggle with a formal lesson.</li>
          <li><strong>Recognition of their own name in writing</strong> — Basic symbol recognition suggests readiness for Arabic letters.</li>
          <li><strong>Willingness to repeat and practise</strong> — Quran learning requires repetition. A child who finds this frustrating may benefit from waiting a little longer.</li>
          <li><strong>Some enthusiasm or curiosity about the Quran</strong> — Not essential, but a strong positive sign.</li>
        </ul>

        <h2>What Happens If You Start Too Early?</h2>
        <p>A child who is not developmentally ready for formal lessons may:</p>
        <ul>
          <li>Associate the Quran with frustration and reluctance</li>
          <li>Fall behind peers who started later but were more ready</li>
          <li>Require significant revision once they are truly ready, as earlier &ldquo;learning&rdquo; may not have stuck</li>
        </ul>
        <p>Starting six months later with a ready child almost always produces better outcomes than starting six months earlier with a child who is not.</p>

        <h2>Age Groups and What to Expect</h2>

        <h3>Ages 4–5: Noorani Qaida Beginners</h3>
        <p>Children this age can absolutely begin Noorani Qaida — learning Arabic letters and sounds — provided they show the readiness signs above. Lessons should be short (15–20 minutes), playful in tone, and patient. A one-to-one format is essential at this age — group lessons are rarely effective for very young children.</p>

        <h3>Ages 6–8: Quran Reading Begins</h3>
        <p>By age 6–7, most children who have completed Noorani Qaida are ready to begin reading the Quran. School has improved their ability to focus, follow instructions, and engage with structured learning. This is often the most productive starting age.</p>

        <h3>Ages 9–12: Strong Learning Window</h3>
        <p>Children in this age group learn quickly, retain well, and can engage with Tajweed rules more formally. Many children who start Hifz (memorisation) do so at this age.</p>

        <h3>Teenagers and Adults</h3>
        <p>It is never too late. Teenagers and adults who begin Quran learning often have the motivation and discipline that very young children lack, and many make faster progress than expected — especially with a patient, English-speaking teacher who understands adult learning styles.</p>

        <h2>The Most Important Factor: Consistency</h2>
        <p>Regardless of when you start, the single biggest predictor of Quran learning success is consistency. Two or three short lessons per week, every week, will always outperform sporadic intensive sessions. Building a habit is more important than starting early.</p>

        <p>If you are unsure whether your child is ready, a free trial class is an excellent way to assess this without commitment.</p>
      </div>
    ),
  },
  {
    slug: "noorani-qaida-vs-quran-reading",
    title: "Noorani Qaida vs Quran Reading: Where Should My Child Start?",
    description: "Should your child start with Noorani Qaida or go straight to Quran reading? This guide explains the difference and helps UK parents make the right decision.",
    date: "2024-11-01",
    readTime: "5 min read",
    content: (
      <div className="prose prose-gray max-w-none">
        <p>When parents are booking their child&apos;s first Quran class, one of the most common points of confusion is this: should we start with Noorani Qaida, or go straight to reading the Quran?</p>
        <p>The short answer is: almost always Noorani Qaida first. But understanding why will help you make a more confident decision for your child.</p>

        <h2>What Is Noorani Qaida?</h2>
        <p>Noorani Qaida is a structured introductory course that teaches the Arabic alphabet and the foundational rules for reading Arabic text. It was developed by Molvi Noor Muhammad Ludhianvi in the early 20th century and has become the standard starting point for millions of Quran students worldwide.</p>
        <p>The Qaida takes students through:</p>
        <ul>
          <li>Individual Arabic letters and their pronunciation</li>
          <li>Letter forms (beginning, middle, and end of words)</li>
          <li>Short vowels (harakaat) — fatha, kasra, dhamma</li>
          <li>Tanween, sukoon, and shadda</li>
          <li>Letter joining (connecting letters into words)</li>
          <li>Introduction to elongation (madd) and basic Tajweed</li>
        </ul>

        <h2>What Is Quran Reading?</h2>
        <p>Quran reading is the direct recitation of the text of the Quran, beginning from Surah Al-Fatiha or Surah Al-Baqarah. It assumes the student can already read Arabic letters, recognise vowel marks, and apply basic reading rules.</p>

        <h2>Why Noorani Qaida Almost Always Comes First</h2>
        <p>Attempting to read the Quran without Noorani Qaida is like trying to read English without knowing the alphabet. The Quran is written in Arabic — a language that uses a completely different script. Before a student can read even the first word of the Quran correctly, they need to know the 28 Arabic letters and how they connect, the vowel marks that determine pronunciation, and the basic rules for reading Arabic text.</p>
        <p>Noorani Qaida builds all of this, systematically. Skipping it and trying to &ldquo;learn by doing&rdquo; typically results in deeply ingrained mispronunciations that are very difficult to correct later.</p>

        <h2>When Can a Child Skip Noorani Qaida?</h2>
        <p>A child can go straight to Quran reading only if they already:</p>
        <ul>
          <li>Know all 28 Arabic letters and their forms</li>
          <li>Can recognise and pronounce all vowel marks correctly</li>
          <li>Can join letters and read simple Arabic words</li>
        </ul>
        <p>If a child already attends a local mosque where they have covered these basics, a free trial lesson with an Ease Quran teacher will quickly establish whether they are ready for Quran reading or whether some Qaida revision would be beneficial first.</p>

        <h2>How Long Does Noorani Qaida Take?</h2>
        <p>With two or three classes per week in a one-to-one setting, most children complete Noorani Qaida in 3–6 months. Adults often complete it in a similar timeframe. The goal is accuracy, not speed — rushing through the Qaida leads to poor foundations.</p>

        <h2>What Comes After Noorani Qaida?</h2>
        <p>After completing Noorani Qaida, students naturally move to Quran reading. From there, many students pursue Tajweed (the rules of correct recitation), Hifz (memorisation), or continue reading through the full Quran.</p>
        <p>The progression is clear: Noorani Qaida → Quran Reading → Tajweed / Hifz → Tafseer (for those who want to understand the meaning).</p>

        <h2>In Summary</h2>
        <p>If your child is a complete beginner — start with Noorani Qaida. If you are unsure which level your child is at, book a free trial class and let the teacher assess. Our teachers are experienced with children at all levels and will give you an honest recommendation within the first session.</p>
      </div>
    ),
  },
];

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://easequran.co.uk/blog/${slug}` },
    openGraph: { type: "article", publishedTime: post.date },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Ease Quran UK" },
    publisher: { "@type": "Organization", name: "Ease Quran UK", logo: { "@type": "ImageObject", url: "https://easequran.co.uk/logo.png" } },
    url: `https://easequran.co.uk/blog/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-[#faf9f7] py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />
          <div className="flex items-center gap-3 text-xs text-gray-400 mt-4 mb-3">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#122259]">{post.title}</h1>
        </div>
      </div>

      <section className="section-pad">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-gray-700 leading-relaxed space-y-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#122259] [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#122259] [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-gray-700">
            {post.content}
          </div>

          <div className="mt-12 border-t border-gray-100 pt-8">
            <p className="text-sm font-semibold text-[#122259] mb-4">Related Articles</p>
            <div className="space-y-3">
              {posts.filter((p) => p.slug !== slug).map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="flex items-start gap-2 text-sm text-gray-600 hover:text-[#FD9C02] transition-colors">
                  <ChevronRight size={14} className="flex-shrink-0 mt-0.5" /> {p.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
