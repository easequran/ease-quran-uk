import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ChevronRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";

interface FAQ { q: string; a: string }
interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  heroImage?: string;
  heroAlt?: string;
  faqs?: FAQ[];
  content: React.ReactNode;
}

const posts: Post[] = [
  {
    slug: "is-it-safe-online-quran-classes-uk",
    title: "Is It Safe for My Child to Learn Quran Online? A Parent's Honest Safety Checklist",
    description: "A clear, honest safety checklist for UK parents considering online Quran classes — what to ask, what to watch for, and how we keep every lesson safe.",
    date: "2026-06-01",
    readTime: "7 min read",
    heroImage: "/blog-safety-checklist.webp",
    heroAlt: "Parent sitting beside child during an online Quran class on a laptop",
    faqs: [
      { q: "Can I really watch my child's entire online Quran lesson?", a: "Yes. Every Ease Quran lesson is one-to-one, and parents are welcome to sit in for the full session, every time, with no notice required." },
      { q: "What platform do you use for online Quran classes?", a: "We teach live over Zoom or Google Meet — both well-known, secure platforms you can verify and control on your own device." },
      { q: "Is there a female Quran teacher available for my daughter?", a: "Yes. Our certified female teacher, Almas Fatima, is available for sisters and daughters of any age. Simply request a female teacher when you book your free trial." },
      { q: "Can I get my child's Quran lesson recorded?", a: "Yes — sessions can be recorded on request. Just let us know when booking and we will arrange it." },
      { q: "How do I know an online Quran teacher is actually qualified?", a: "Ask which body certified them — for example, Wifaq ul Madaris Al-Arabia — and ask to see proof. A genuinely qualified teacher will have a real, verifiable certification, not just a claim on a website." },
    ],
    content: (
      <div className="prose prose-gray max-w-none">
        <p>If you&apos;re a parent reading this, there&apos;s a good chance you&apos;ve typed some version of &ldquo;is online Quran teaching safe&rdquo; into Google late at night, after your child has gone to bed, while you&apos;re still not quite sure. That hesitation is completely fair. You&apos;re handing your child&apos;s religious education — and a screen, in their bedroom or living room — over to someone you&apos;ve never met in person. You should ask hard questions before you do that.</p>
        <p>We teach Quran online every day, and we still think that hesitation is healthy. So instead of just telling you &ldquo;don&apos;t worry, it&apos;s safe,&rdquo; here is the actual checklist we&apos;d want you to use — including the questions that, if an academy can&apos;t answer them clearly, should make you walk away.</p>

        <h2>Why This Question Matters More in 2026 Than Ever</h2>
        <p>Online Quran teaching has grown fast in the UK over the last few years, and growth without scrutiny is exactly how unsafe situations slip through. Some academies hire teachers with no verification at all. Some run group classes with a dozen children and one distracted tutor. Some have no policy on recording, no policy on who else might be in the room with the teacher, and no way for a parent to actually check in.</p>
        <p>None of that is true of every academy — but it&apos;s true of enough of them that &ldquo;is this safe?&rdquo; deserves a proper answer, not a reassurance.</p>

        <h2>The Six Things You Should Actually Check</h2>

        <h3>1. Is the teacher verified, or just &ldquo;qualified&rdquo;?</h3>
        <p>Anyone can write &ldquo;qualified Quran teacher&rdquo; on a website. What you want to know is: verified by whom? A real Ijazah or a recognised certification (for example, from Wifaq ul Madaris Al-Arabia) means the teacher has been examined by a religious authority, not just self-declared. Ask the academy directly which body certified their teacher, and ask to see it. A teacher with nothing to hide will be glad you asked.</p>

        <h3>2. Can you actually watch the lesson?</h3>
        <p>This is the single biggest difference between a safe setup and a risky one. If an academy tells you parents &ldquo;aren&apos;t allowed&rdquo; to sit in on lessons, or makes it awkward to ask, that&apos;s a red flag — not a privacy feature. In a genuinely safe one-to-one class, you should be able to sit next to your child, in view of the screen, for the entire lesson, every single time, with no notice required.</p>

        <h3>3. Is it actually one-to-one, or &ldquo;one-to-one&rdquo; with extra people on the call?</h3>
        <p>Some academies advertise private lessons but the teacher is also managing a group chat, other tabs, or other students waiting in a queue visible on screen. Ask what the call looks like: who is on it, what platform is used (Zoom and Google Meet are the standard, well-understood choices — be cautious of academies using unfamiliar, unbranded &ldquo;classroom&rdquo; software you can&apos;t verify independently), and whether anyone besides the teacher and your child will ever be present.</p>

        <h3>4. Can sessions be recorded, on your terms?</h3>
        <p>You should be able to ask for a session to be recorded — not because you distrust the teacher, but because it&apos;s a simple, healthy safeguard that costs the academy nothing if everything is being done properly. If recording on request isn&apos;t offered, ask why not.</p>

        <h3>5. Is there a female-teacher option, and is it real?</h3>
        <p>For many UK Muslim families, this isn&apos;t a preference — it&apos;s a requirement, especially for daughters as they get older. Ask specifically: is there a named female teacher available, with her own credentials, or is &ldquo;female teachers available&rdquo; just a line on the website with nobody actually behind it? You should get a name and a real answer, not a vague &ldquo;we can probably arrange that.&rdquo;</p>

        <h3>6. What happens when something goes wrong?</h3>
        <p>Ask what their actual policy is if a teacher needs to be replaced, if a lesson needs to be rescheduled, or if you&apos;re not happy and want to raise a concern. An academy with a real answer here — a real process, not just &ldquo;contact us&rdquo; — has clearly thought about safeguarding before you asked. An academy that&apos;s never been asked this before, and doesn&apos;t really have an answer, hasn&apos;t.</p>

        <h2>What This Looks Like at Ease Quran</h2>
        <p>We&apos;d rather show you our actual answers than just tell you we&apos;re &ldquo;safe,&rdquo; so here they are, plainly:</p>
        <ul>
          <li>Every teacher is certified and interviewed before they teach a single student — our founder, Shah Zaib, holds Wifaq ul Madaris Al-Arabia certification and has taught English-speaking, Western students for over six years.</li>
          <li>Classes are genuinely one-to-one. No groups, no other students on the call, ever.</li>
          <li>Parents are welcome to sit in on any class, at any time, with no notice needed.</li>
          <li>Sessions can be recorded on request — just ask when you book.</li>
          <li>We have a named, qualified female teacher, Almas Fatima, a Qaria e Quran with a degree in Islamic Studies, available for sisters and daughters of any age.</li>
          <li>Lessons run on Zoom or Google Meet — platforms you already know and can verify yourself, not an unfamiliar third-party system.</li>
          <li>We have a structured timetable and a team of teachers so lessons don&apos;t get cancelled last-minute or simply disappear, which is one of the most common complaints families have about other academies.</li>
        </ul>
        <p>You can read our full policy on our <a href="/safety" className="text-[#F5A623] hover:underline">Child Safety page</a>, and we&apos;d genuinely rather you ask us every one of the six questions above before booking than take any of this on trust.</p>

        <h2>So, Is It Safe?</h2>
        <p>It can be — but &ldquo;online Quran teaching&rdquo; isn&apos;t one single thing with one single safety standard. It&apos;s only as safe as the specific academy and the specific teacher in front of your child. The checklist above isn&apos;t really about us; it&apos;s about giving you the right questions to ask any academy, including this one, before you commit.</p>
        <p>If you&apos;d like to see how this works in practice, the easiest next step is a completely free first lesson — no card required, no commitment — where you and your child can sit together, watch how the teacher works, and decide for yourselves.</p>
        <p><a href="/free-trial" className="text-[#F5A623] font-semibold hover:underline">Book Your Free Trial Class</a> &middot; <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="text-[#F5A623] font-semibold hover:underline">WhatsApp Us</a></p>
      </div>
    ),
  },
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
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { url: `/blog/${slug}`, type: "article", publishedTime: post.date },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const faqSchema = post.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  } : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Ease Quran UK" },
    publisher: { "@type": "Organization", name: "Ease Quran UK", logo: { "@type": "ImageObject", url: "https://www.easequran.co.uk/logo.png" } },
    url: `https://www.easequran.co.uk/blog/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {post.heroImage && (
        <section className="relative bg-[#122259] overflow-hidden min-h-[320px] flex items-center">
          <Image src={post.heroImage} alt={post.heroAlt ?? ""} fill className="object-cover object-center opacity-25" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#122259]/80 to-transparent" />
        </section>
      )}

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

          {post.faqs && (
            <div className="mt-12 border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-[#122259] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.faqs.map((f, i) => (
                  <details key={i} className="bg-[#faf9f7] rounded-xl border border-gray-100 group">
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-[#122259] list-none">
                      {f.q}
                      <ChevronRight size={16} className="transform group-open:rotate-90 transition-transform flex-shrink-0 ml-3 text-[#F5A623]" />
                    </summary>
                    <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 border-t border-gray-100 pt-8">
            <p className="text-sm font-semibold text-[#122259] mb-4">Related Articles</p>
            <div className="space-y-3">
              {posts.filter((p) => p.slug !== slug).map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="flex items-start gap-2 text-sm text-gray-600 hover:text-[#F5A623] transition-colors">
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
