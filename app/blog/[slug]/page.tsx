import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ChevronRight, Shield, Users, BookOpen, Star } from "lucide-react";
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
    description: "A clear, honest safety checklist for UK parents considering online Quran classes: what to ask, what to watch for, and how we keep every lesson safe.",
    date: "2026-06-01",
    readTime: "7 min read",
    heroImage: "/blog-safety-checklist.webp",
    heroAlt: "Parent sitting beside child during an online Quran class on a laptop",
    faqs: [
      { q: "Can I really watch my child's entire online Quran lesson?", a: "Yes. Every Ease Quran lesson is one-to-one, and parents are welcome to sit in for the full session, every time, with no notice required." },
      { q: "What platform do you use for online Quran classes?", a: "We teach live over Zoom or Google Meet, both well-known, secure platforms you can verify and control on your own device." },
      { q: "Is there a female Quran teacher available for my daughter?", a: "Yes. Our certified female teacher, Almas Fatima, is available for sisters and daughters of any age. Simply request a female teacher when you book your free trial." },
      { q: "Can I get my child's Quran lesson recorded?", a: "Yes, sessions can be recorded on request. Just let us know when booking and we will arrange it." },
      { q: "How do I know an online Quran teacher is actually qualified?", a: "Ask which body certified them (for example, Wifaq ul Madaris Al-Arabia) and ask to see proof. A properly qualified teacher will have a real, verifiable certification, not just a claim on a website." },
    ],
    content: (
      <div className="prose prose-gray max-w-none">
        <p>If you&apos;re a parent reading this, there&apos;s a good chance you&apos;ve typed some version of &ldquo;is online Quran teaching safe&rdquo; into Google late at night, after your child has gone to bed, while you&apos;re still not quite sure. That hesitation is completely fair. You&apos;re handing your child&apos;s religious education, and access to a screen in their bedroom, over to someone you&apos;ve never met in person. You should ask hard questions before you do that.</p>
        <p>We teach Quran online every day, and we still think that hesitation is healthy. So instead of just telling you &ldquo;don&apos;t worry, it&apos;s safe,&rdquo; here is the actual checklist we&apos;d want you to use, including the questions that, if an academy can&apos;t answer them clearly, should make you walk away.</p>

        <h2>Why This Question Matters More in 2026 Than Ever</h2>
        <p>Online Quran teaching has grown fast in the UK over the last few years, and growth without scrutiny is exactly how unsafe situations slip through. Some academies hire teachers with no verification at all. Some run group classes with a dozen children and one distracted tutor. Some have no policy on recording, no policy on who else might be in the room with the teacher, and no way for a parent to actually check in.</p>
        <p>None of that is true of every academy, but it&apos;s true of enough of them that &ldquo;is this safe?&rdquo; deserves a proper answer, not a reassurance.</p>

        <h2>The Six Things You Should Actually Check</h2>

        <h3>1. Is the teacher verified, or just &ldquo;qualified&rdquo;?</h3>
        <p>Anyone can write &ldquo;qualified Quran teacher&rdquo; on a website. What you want to know is: verified by whom? A real Ijazah or a recognised certification (for example, from Wifaq ul Madaris Al-Arabia) means the teacher has been examined by a religious authority, not just self-declared. Ask the academy directly which body certified their teacher, and ask to see it. A teacher with nothing to hide will be glad you asked.</p>

        <h3>2. Can you actually watch the lesson?</h3>
        <p>This is the single biggest difference between a safe setup and a risky one. If an academy tells you parents &ldquo;aren&apos;t allowed&rdquo; to sit in on lessons, or makes it awkward to ask, that&apos;s a red flag, not a privacy feature. In a properly run one-to-one class, you should be able to sit next to your child, in view of the screen, for the entire lesson, every single time, with no notice required.</p>

        <h3>3. Is it actually one-to-one, or &ldquo;one-to-one&rdquo; with extra people on the call?</h3>
        <p>Some academies advertise private lessons but the teacher is also managing a group chat, other tabs, or other students waiting in a queue visible on screen. Ask what the call looks like: who is on it, what platform is used (Zoom and Google Meet are the standard choices most parents already recognise; be cautious of academies using unfamiliar, unbranded &ldquo;classroom&rdquo; software you can&apos;t verify independently), and whether anyone besides the teacher and your child will ever be present.</p>

        <h3>4. Can sessions be recorded, on your terms?</h3>
        <p>You should be able to ask for a session to be recorded. Not because you distrust the teacher, but because it&apos;s a simple, practical safeguard that costs the academy nothing if everything is being done properly. If recording on request is not offered, ask why not.</p>

        <h3>5. Is there a female-teacher option, and is it real?</h3>
        <p>For many UK Muslim families, this isn&apos;t a preference. It&apos;s a requirement, especially for daughters as they get older. Ask specifically: is there a named <Link href="/female-quran-teachers" className="text-[#F5A623] hover:underline font-medium">female Quran teacher</Link> available, with her own credentials, or is &ldquo;female teachers available&rdquo; just a line on the website with nobody actually behind it? You should get a name and a real answer, not a vague &ldquo;we can probably arrange that.&rdquo;</p>

        <h3>6. What happens when something goes wrong?</h3>
        <p>Ask what their actual policy is if a teacher needs to be replaced, if a lesson needs to be rescheduled, or if you&apos;re not happy and want to raise a concern. An academy with a clear process (not just a &ldquo;contact us&rdquo; email) has clearly thought about this before you asked. An academy that is surprised by the question, and does not really have an answer, has not.</p>

        <h2>What This Looks Like at Ease Quran</h2>
        <p>We&apos;d rather show you our actual answers than just tell you we&apos;re &ldquo;safe,&rdquo; so here they are, plainly:</p>
        <ul>
          <li>Every teacher is certified and interviewed before they teach a single student. Our founder, <Link href="/about" className="text-[#F5A623] hover:underline font-medium">Shah Zaib</Link>, holds Wifaq ul Madaris Al-Arabia certification and has taught English-speaking students for over six years.</li>
          <li>Classes are strictly one-to-one. No groups, no other students on the call, ever.</li>
          <li>Parents are welcome to sit in on any class, at any time, with no notice needed.</li>
          <li>Sessions can be recorded on request. Just ask when you book.</li>
          <li>We have a named, qualified female teacher, <Link href="/female-quran-teachers" className="text-[#F5A623] hover:underline font-medium">Almas Fatima</Link>, a Qaria e Quran with a degree in Islamic Studies, available for sisters and daughters of any age.</li>
          <li>Lessons run on Zoom or Google Meet, platforms you already know and can verify yourself, not some unfamiliar third-party system.</li>
          <li>We have a structured timetable and a team of teachers so lessons don&apos;t get cancelled last-minute or simply disappear, which is one of the most common complaints families have about other academies.</li>
        </ul>
        <p>You can read our full policy on our <Link href="/safety" className="text-[#F5A623] hover:underline font-medium">Child Safety page</Link>, and we&apos;d rather you ask us every one of those six questions before booking than take any of this on trust.</p>

        <h2>So, Is It Safe?</h2>
        <p>It can be. But &ldquo;online Quran teaching&rdquo; is not one single thing with one single safety standard. It is only as safe as the specific academy and the specific teacher in front of your child. The checklist above is not really about us; it is about giving you the right questions to ask any academy, including this one, before you commit.</p>
        <p>If you&apos;d like to see how this works in practice, the easiest next step is a completely free first lesson (no card, no commitment) where you and your child can sit together, watch how the teacher works, and decide for yourselves.</p>
        <p>
          <Link href="/free-trial" className="text-[#F5A623] font-semibold hover:underline">Book Your Free Trial Class</Link>
          {" "}&middot;{" "}
          <a href="https://wa.me/447311254423?text=Hi%2C%20I%20read%20your%20safety%20article%20and%20I%27d%20like%20to%20book%20a%20free%20trial%20class." target="_blank" rel="noopener noreferrer" className="text-[#F5A623] font-semibold hover:underline">WhatsApp Us</a>
        </p>
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

const relatedPages = [
  { href: "/female-quran-teachers", icon: <Users size={14} />, label: "Female Quran Teacher" },
  { href: "/safety", icon: <Shield size={14} />, label: "Child Safety Policy" },
  { href: "/pricing", icon: <Star size={14} />, label: "Pricing and Plans" },
  { href: "/courses/noorani-qaida", icon: <BookOpen size={14} />, label: "Noorani Qaida Course" },
  { href: "/courses/hifz", icon: <BookOpen size={14} />, label: "Hifz Course" },
  { href: "/courses/tajweed", icon: <BookOpen size={14} />, label: "Tajweed Course" },
];

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
    author: { "@type": "Person", name: "Shah Zaib", url: "https://www.easequran.co.uk/about" },
    publisher: { "@type": "Organization", name: "Ease Quran UK", logo: { "@type": "ImageObject", url: "https://www.easequran.co.uk/logo.png" } },
    url: `https://www.easequran.co.uk/blog/${slug}`,
    image: post.heroImage ? `https://www.easequran.co.uk${post.heroImage}` : undefined,
  };

  const waMsg = encodeURIComponent("Hi, I read your safety article and I'd like to book a free trial class.");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Hero */}
      {post.heroImage && (
        <section className="relative bg-[#122259] overflow-hidden min-h-[340px] flex items-end">
          <Image src={post.heroImage} alt={post.heroAlt ?? ""} fill className="object-cover object-center opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#122259]/90 via-[#122259]/40 to-transparent" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-10">
            <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Safety Guide" }]} dark />
            <div className="mt-4 max-w-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-white bg-[#F5A623] px-3 py-1 rounded-full">Trust &amp; Safety</span>
                <span className="text-blue-200 text-xs flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                <time className="text-blue-200 text-xs" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </time>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug">{post.title}</h1>
            </div>
          </div>
        </section>
      )}

      {/* Content + Sidebar */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

            {/* Article */}
            <article>
              <div className="text-gray-700 leading-relaxed space-y-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#122259] [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#122259] [&_h3]:mt-7 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-gray-700 [&_p]:text-[15px] [&_p]:leading-[1.8]">
                {post.content}
              </div>

              {/* FAQs */}
              {post.faqs && (
                <div className="mt-12 border-t border-gray-100 pt-8">
                  <h2 className="text-2xl font-bold text-[#122259] mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {post.faqs.map((f, i) => (
                      <details key={i} className="bg-[#faf9f7] rounded-xl border border-gray-100 group">
                        <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-[#122259] list-none text-sm">
                          {f.q}
                          <ChevronRight size={15} className="transform group-open:rotate-90 transition-transform flex-shrink-0 ml-3 text-[#F5A623]" />
                        </summary>
                        <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Author */}
              <div className="mt-12 border-t border-gray-100 pt-8">
                <div className="flex items-start gap-5 bg-[#faf9f7] rounded-2xl p-6">
                  <div className="relative w-16 h-16 rounded-full flex-shrink-0 overflow-hidden border-2 border-[#F5A623]">
                    <Image src="/founder.webp" alt="Shah Zaib, founder of Ease Quran UK" fill className="object-cover object-top" sizes="64px" />
                  </div>
                  <div>
                    <p className="font-bold text-[#122259]">Shah Zaib</p>
                    <p className="text-xs text-[#F5A623] font-semibold mb-2">Founder, Ease Quran UK &bull; Wifaq ul Madaris Al-Arabia Certified</p>
                    <p className="text-sm text-gray-600 leading-relaxed">Shah Zaib has over six years of experience teaching English-speaking Muslim families in the UK. He founded Ease Quran to give UK families access to qualified, reliable Quran education without the problems that have let so many families down.</p>
                    <Link href="/about" className="inline-flex items-center gap-1 text-[#F5A623] text-xs font-semibold mt-2 hover:underline">
                      Read more about our teachers <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Explore more pages */}
              <div className="mt-10 border-t border-gray-100 pt-8">
                <p className="text-sm font-bold text-[#122259] mb-4">Explore Related Pages</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedPages.map((r) => (
                    <Link key={r.href} href={r.href} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#faf9f7] border border-gray-100 text-sm font-semibold text-[#122259] hover:border-[#F5A623]/50 hover:shadow-sm transition-all group">
                      <span className="text-[#F5A623]">{r.icon}</span>
                      {r.label}
                      <ChevronRight size={12} className="ml-auto text-gray-300 group-hover:text-[#F5A623] transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">

                {/* CTA card */}
                <div className="bg-[#122259] rounded-2xl p-6 text-white">
                  <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest mb-2">Free Trial Class</p>
                  <h3 className="font-bold text-lg mb-2 leading-snug">Try a Free Quran Lesson</h3>
                  <p className="text-blue-200 text-xs mb-4 leading-relaxed">No card needed. No commitment. One-to-one with a certified teacher, confirmed within 2 hours.</p>
                  <Link href="/free-trial" className="btn-gold w-full justify-center text-sm py-2.5 rounded-xl">Book Free Trial</Link>
                </div>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/447311254423?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] text-white rounded-2xl p-4 hover:bg-[#1ebe5d] transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="white" className="flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L.057 23.59a.75.75 0 00.917.932l5.898-1.546A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.029 22c-1.96 0-3.791-.527-5.363-1.443l-.385-.228-3.99 1.047 1.004-3.878-.249-.394A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  <div>
                    <p className="font-bold text-sm">Have a question?</p>
                    <p className="text-xs text-green-100">WhatsApp us directly</p>
                  </div>
                </a>

                {/* Quick links */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#122259] mb-4">Quick Links</p>
                  <ul className="space-y-2">
                    {[
                      { href: "/female-quran-teachers", label: "Female Quran Teacher" },
                      { href: "/safety", label: "Child Safety Policy" },
                      { href: "/pricing", label: "Pricing and Plans" },
                      { href: "/about", label: "About Our Teachers" },
                      { href: "/courses/hifz", label: "Hifz Course" },
                      { href: "/courses/tajweed", label: "Tajweed Course" },
                    ].map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#F5A623] transition-colors">
                          <ChevronRight size={12} className="text-[#F5A623]" /> {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABand />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
