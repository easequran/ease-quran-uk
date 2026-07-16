import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ChevronRight, Shield, Users, BookOpen, Star } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";
import { fetchSurahWithTranslation, fetchSurahArabic, fetchAyahArabic } from "@/lib/quran-api";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FAQ { q: string; a: string }

interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  heroAlt: string;
  faqs?: FAQ[];
}

// ─── Post registry ────────────────────────────────────────────────────────────

const allPosts: PostMeta[] = [
  {
    slug: "is-it-safe-online-quran-classes-uk",
    title: "Is It Safe for My Child to Learn Quran Online? A Parent's Honest Safety Checklist",
    description: "A clear, honest safety checklist for UK parents considering online Quran classes: what to ask, what to watch for, and how we keep every lesson safe.",
    date: "2026-06-01",
    readTime: "7 min read",
    category: "Trust & Safety",
    heroImage: "/blog-safety-checklist.webp",
    heroAlt: "Parent sitting beside child during an online Quran class on a laptop",
    faqs: [
      { q: "Can I really watch my child's entire online Quran lesson?", a: "Yes. Every Ease Quran lesson is one-to-one, and parents are welcome to sit in for the full session, every time, with no notice required." },
      { q: "What platform do you use for online Quran classes?", a: "We teach live over Zoom or Google Meet, both well-known, secure platforms you can verify and control on your own device." },
      { q: "Is there a female Quran teacher available for my daughter?", a: "Yes. Our certified female teacher, Almas Fatima, is available for sisters and daughters of any age. Simply request a female teacher when you book your free trial." },
      { q: "Can I get my child's Quran lesson recorded?", a: "Yes, sessions can be recorded on request. Just let us know when booking and we will arrange it." },
      { q: "How do I know an online Quran teacher is actually qualified?", a: "Ask which body certified them (for example, Wifaq ul Madaris Al-Arabia) and ask to see proof. A properly qualified teacher will have a real, verifiable certification, not just a claim on a website." },
    ],
  },
  {
    slug: "surah-al-kahf-friday-reading-guide",
    title: "Surah Al-Kahf: Why We Read It Every Friday and Its Virtues",
    description: "Discover the virtues of Surah Al-Kahf, why Muslims read it every Friday, and how to help your child learn to recite it beautifully. Full Arabic text and English translation inside.",
    date: "2026-07-01",
    readTime: "15 min read",
    category: "Quran Knowledge",
    heroImage: "/images/blog/surah-al-kahf-friday-reading-hero.webp",
    heroAlt: "Open Quran resting on a wooden stand in warm Friday morning light",
    faqs: [
      { q: "Is it obligatory (fard) to read Surah Al-Kahf every Friday?", a: "No, it is a recommended (sunnah) practice, not an obligation, but it carries significant reward and virtue based on authentic hadith." },
      { q: "Can I read Surah Al-Kahf on Thursday night if I won't have time on Friday?", a: "Most scholars agree the reward applies to the Islamic day of Friday, which begins at Maghrib on Thursday evening, so reading it Thursday night after Maghrib is generally considered within the timeframe." },
      { q: "How long does it take to read the full Surah Al-Kahf?", a: "On average, reading all 110 verses at a moderate pace takes around 25-35 minutes, though this varies by reading speed and familiarity with the Arabic text." },
    ],
  },
  {
    slug: "quran-verses-to-memorize-first",
    title: "Quran Verses Every Beginner Should Memorize First",
    description: "Not sure which Quran verses to memorize first? Here are the most essential, beginner-friendly verses, why they matter, and how to build a lasting memorization habit.",
    date: "2026-07-08",
    readTime: "8 min read",
    category: "Quran Memorization",
    heroImage: "/images/blog/quran-verses-memorization-hero.webp",
    heroAlt: "Child reading the Quran with a teacher in a warm home learning setting",
    faqs: [
      { q: "How many verses should a beginner memorize per week?", a: "A common beginner pace is 3-5 short verses or one short surah per week, prioritizing accuracy and retention over speed." },
      { q: "Should I memorize in Arabic order or start with the easiest surahs?", a: "Most structured Hifz programmes start with the shortest surahs at the end of the Quran (Juz Amma) before moving toward longer chapters." },
      { q: "Is it better to memorize with or without understanding the meaning?", a: "Understanding alongside memorization is strongly recommended, it deepens retention and creates a genuine connection to what's being recited." },
    ],
  },
  {
    slug: "dua-for-success",
    title: "Powerful Dua for Success: Quranic Duas for Exams, Work and Life",
    description: "Looking for a dua for success? Discover authentic Quranic duas for exams, work, and everyday challenges, with Arabic, transliteration, and meaning.",
    date: "2026-07-15",
    readTime: "6 min read",
    category: "Dua and Dhikr",
    heroImage: "/images/blog/dua-for-success-exam-hero.webp",
    heroAlt: "Student's desk with an open notebook and a small dua book in soft natural light",
    faqs: [
      { q: "Can I make dua for success in my own language instead of Arabic?", a: "Yes, dua can be made in any language, though many Muslims prefer to recite Quranic duas in Arabic when possible." },
      { q: "Is there a specific dua just for exam day?", a: "The dua for ease and 'Rabbi zidni ilma' are the two most commonly recited by students specifically for exams and studying." },
      { q: "Do I need to be in wudu (ablution) to make dua?", a: "No, wudu is not a requirement for making dua, though it is recommended and considered a means of drawing closer to Allah." },
    ],
  },
];

// ─── Shared UI helpers ────────────────────────────────────────────────────────

function AyahBlock({ num, arabic, translation }: { num: number; arabic: string; translation?: string }) {
  return (
    <div className="border border-gray-100 rounded-xl bg-[#faf9f7] p-5 mb-3">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="w-7 h-7 rounded-full bg-[#122259] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{num}</span>
        <p className="text-right text-2xl leading-loose font-arabic flex-1" dir="rtl" lang="ar">{arabic}</p>
      </div>
      {translation && <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 mt-3 italic">{translation}</p>}
    </div>
  );
}

function ArabicCard({ arabic, transliteration, meaning, source }: { arabic: string; transliteration: string; meaning: string; source?: string }) {
  return (
    <div className="bg-[#122259] rounded-2xl p-6 my-6">
      <p className="text-right text-2xl sm:text-3xl leading-loose font-arabic text-white mb-4" dir="rtl" lang="ar">{arabic}</p>
      <p className="text-[#F5A623] text-sm font-semibold mb-1 italic">{transliteration}</p>
      <p className="text-blue-200 text-sm leading-relaxed">{meaning}</p>
      {source && <p className="text-blue-300/60 text-xs mt-2">— {source}</p>}
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#F5A623]/30" />
      <span className="text-xs font-bold uppercase tracking-widest text-[#F5A623] px-3 py-1 rounded-full border border-[#F5A623]/30">{label}</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#F5A623]/30" />
    </div>
  );
}

// ─── Post content renderers ───────────────────────────────────────────────────

function SafetyChecklistContent() {
  return (
    <div className="text-gray-700 leading-relaxed space-y-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#122259] [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#122259] [&_h3]:mt-7 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-gray-700 [&_p]:text-[15px] [&_p]:leading-[1.8]">
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
      <p>Some academies advertise private lessons but the teacher is also managing other students. Ask what the call looks like: who is on it, what platform is used (Zoom and Google Meet are the standard choices most parents already recognise), and whether anyone besides the teacher and your child will ever be present.</p>
      <h3>4. Can sessions be recorded, on your terms?</h3>
      <p>You should be able to ask for a session to be recorded. Not because you distrust the teacher, but because it&apos;s a simple, practical safeguard that costs the academy nothing if everything is being done properly. If recording on request is not offered, ask why not.</p>
      <h3>5. Is there a female-teacher option, and is it real?</h3>
      <p>For many UK Muslim families, this isn&apos;t a preference. It&apos;s a requirement, especially for daughters as they get older. Ask specifically: is there a named <Link href="/female-quran-teachers" className="text-[#F5A623] hover:underline font-medium">female Quran teacher</Link> available, with her own credentials, or is &ldquo;female teachers available&rdquo; just a line on the website with nobody actually behind it? You should get a name and a real answer.</p>
      <h3>6. What happens when something goes wrong?</h3>
      <p>Ask what their actual policy is if a teacher needs to be replaced, if a lesson needs to be rescheduled, or if you&apos;re not happy and want to raise a concern. An academy with a clear process has clearly thought about this before you asked.</p>
      <h2>What This Looks Like at Ease Quran</h2>
      <ul>
        <li>Every teacher is certified and interviewed. Our founder, <Link href="/about" className="text-[#F5A623] hover:underline font-medium">Shah Zaib</Link>, holds Wifaq ul Madaris Al-Arabia certification and has taught English-speaking students for over six years.</li>
        <li>Classes are strictly one-to-one. No groups, no other students on the call, ever.</li>
        <li>Parents are welcome to sit in on any class, at any time, with no notice needed.</li>
        <li>Sessions can be recorded on request.</li>
        <li>We have a named, qualified female teacher, <Link href="/female-quran-teachers" className="text-[#F5A623] hover:underline font-medium">Almas Fatima</Link>, a Qaria e Quran with a degree in Islamic Studies, available for sisters and daughters of any age.</li>
        <li>Lessons run on Zoom or Google Meet, platforms you already know and can verify yourself.</li>
      </ul>
      <p>You can read our full policy on our <Link href="/safety" className="text-[#F5A623] hover:underline font-medium">Child Safety page</Link>.</p>
      <h2>So, Is It Safe?</h2>
      <p>It can be. But &ldquo;online Quran teaching&rdquo; is not one single thing with one single safety standard. It is only as safe as the specific academy and the specific teacher in front of your child. The checklist above is not really about us; it is about giving you the right questions to ask any academy, including this one, before you commit.</p>
      <p><Link href="/free-trial" className="text-[#F5A623] font-semibold hover:underline">Book Your Free Trial Class</Link>{" "}&middot;{" "}<Link href="/blog/quran-verses-to-memorize-first" className="text-[#F5A623] font-semibold hover:underline">What Quran Verses to Teach Your Child First</Link></p>
    </div>
  );
}

async function SurahAlKahfContent() {
  const ayahs = await fetchSurahWithTranslation(18);

  const sections = [
    { id: "verses-1-10", label: "Verses 1–10", start: 1, end: 10, story: "Opening and Special Virtue" },
    { id: "verses-11-26", label: "Verses 11–26", start: 11, end: 26, story: "The People of the Cave" },
    { id: "verses-27-44", label: "Verses 27–44", start: 27, end: 44, story: "The Two Gardens" },
    { id: "verses-45-59", label: "Verses 45–59", start: 45, end: 59, story: "Life of This World" },
    { id: "verses-60-82", label: "Verses 60–82", start: 60, end: 82, story: "Musa and Al-Khidr" },
    { id: "verses-83-101", label: "Verses 83–101", start: 83, end: 101, story: "Dhul-Qarnayn" },
    { id: "verses-102-110", label: "Verses 102–110", start: 102, end: 110, story: "Closing" },
  ];

  return (
    <div className="text-gray-700 space-y-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#122259] [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#122259] [&_h3]:mt-7 [&_h3]:mb-2 [&_p]:text-[15px] [&_p]:leading-[1.8]">
      <p>Every Friday, millions of Muslims around the world pause to read one particular chapter of the Quran: Surah Al-Kahf, &ldquo;The Cave.&rdquo; It&apos;s not a coincidence or a cultural habit passed down without reason. It&apos;s a practice rooted directly in the teachings of Prophet Muhammad ﷺ, and it carries real spiritual weight for anyone who makes it part of their weekly routine.</p>
      <p>If you&apos;ve ever wondered what makes this surah so special, why it&apos;s specifically tied to Fridays, or how you can help your children build the habit of reading it, this guide walks through everything you need to know, including the full Arabic text and English translation.</p>

      <h2>What Is Surah Al-Kahf?</h2>
      <p>Surah Al-Kahf is the 18th chapter of the Quran, made up of 110 verses. It tells four distinct stories woven together around a single theme: protection from the trials (fitnah) of this world.</p>
      <ol className="list-decimal pl-5 space-y-2 text-[15px] leading-relaxed">
        <li><strong>The People of the Cave</strong>, young believers who fled persecution and were miraculously protected by Allah for centuries.</li>
        <li><strong>The Owner of Two Gardens</strong>, a wealthy man whose arrogance and lack of gratitude led to the loss of everything he had.</li>
        <li><strong>Musa (Moses) and Al-Khidr</strong>, a journey of humility and learning, where even a Prophet is taught there is always more to learn.</li>
        <li><strong>Dhul-Qarnayn</strong>, a just and powerful ruler who used his strength to protect the weak, not to oppress them.</li>
      </ol>

      <h2>Why Do Muslims Read Surah Al-Kahf on Fridays?</h2>
      <p>The practice comes directly from the sunnah. The Prophet ﷺ said that whoever reads Surah Al-Kahf on the day of Jumu&apos;ah (Friday) will have light (noor) shine for them between one Friday and the next, according to a hadith reported in Al-Mustadrak by Al-Hakim.</p>
      <p>Scholars also point to the surah&apos;s deep relevance to the trials of every age, the stories of deception, arrogance, and unchecked power remain as vivid today as they were when first revealed.</p>

      <h2>The Virtues of Reading Surah Al-Kahf</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Protection from the Dajjal:</strong> Several hadith mention that memorising the first ten (or last ten) verses of Surah Al-Kahf offers protection from the trial of the Dajjal.</li>
        <li><strong>Light between two Fridays:</strong> Weekly recitation is described as a source of spiritual light lasting until the following Friday.</li>
        <li><strong>A weekly reminder of what truly matters:</strong> Reading it regularly keeps the believer grounded, a natural check against greed, arrogance, and losing sight of what is real.</li>
      </ul>

      <h2>Full Surah Al-Kahf, Arabic and English Translation</h2>

      {/* Jump links */}
      <div className="bg-[#faf9f7] rounded-2xl border border-gray-100 p-5 my-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#122259] mb-3">Jump to Section</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#F5A623] transition-colors">
              <ChevronRight size={12} className="text-[#F5A623]" />
              {s.label}, {s.story}
            </a>
          ))}
        </div>
      </div>

      {sections.map((section) => (
        <div key={section.id} id={section.id}>
          <SectionDivider label={`${section.label}, ${section.story}`} />
          {ayahs.filter(a => a.numberInSurah >= section.start && a.numberInSurah <= section.end).map((a) => (
            <AyahBlock key={a.numberInSurah} num={a.numberInSurah} arabic={a.text} translation={a.translation} />
          ))}
        </div>
      ))}

      <SectionDivider label="How to Build This Habit" />
      <h2>How to Build This Habit as a Family</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Start small.</strong> If reading all 110 verses feels too much at first, begin with the first ten verses, which carry their own specific virtue.</li>
        <li><strong>Make it a Friday ritual</strong>, ideally after Fajr or before Jumu&apos;ah prayer, so it becomes tied to a fixed point in the week.</li>
        <li><strong>Read together as a family</strong> rather than assigning it as solitary homework, children pick up habits faster when they see them modelled.</li>
        <li><strong>Focus on understanding, not just recitation.</strong> A simple summary of what each story teaches makes the habit meaningful rather than mechanical.</li>
      </ul>
      <p>A child who can recite Surah Al-Kahf with correct tajweed and understands its meaning will carry this habit for life. This is exactly where proper Quran education makes the biggest difference. <Link href="/blog/quran-verses-to-memorize-first" className="text-[#F5A623] hover:underline font-medium">Read our guide on which Quran verses to memorize first.</Link></p>

      <div className="bg-[#122259] rounded-2xl p-6 my-6 text-white">
        <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest mb-2">Free Trial Class</p>
        <h3 className="font-bold text-lg mb-2">Give Your Child the Gift of Reading the Quran with Confidence</h3>
        <p className="text-blue-200 text-sm mb-4 leading-relaxed">Learning to recite Surah Al-Kahf fluently and with proper tajweed takes consistent, one-on-one guidance. Our qualified teachers work with children and adults alike to build real, lasting Quran recitation skills.</p>
        <Link href="/free-trial" className="inline-flex items-center gap-2 bg-[#F5A623] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#d4901e] transition-colors">Book a Free Trial Class <ChevronRight size={14} /></Link>
      </div>
    </div>
  );
}

async function QuranVersesContent() {
  const [fatiha, ikhlas, falaq, naas, baqarah285, baqarah286, ayatulKursi] = await Promise.all([
    fetchSurahArabic(1),
    fetchSurahArabic(112),
    fetchSurahArabic(113),
    fetchSurahArabic(114),
    fetchAyahArabic(2, 285),
    fetchAyahArabic(2, 286),
    fetchAyahArabic(2, 255),
  ]);

  return (
    <div className="text-gray-700 space-y-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#122259] [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#122259] [&_h3]:mt-7 [&_h3]:mb-2 [&_p]:text-[15px] [&_p]:leading-[1.8]">
      <p>Starting Quran memorization can feel overwhelming, 6,236 verses across 114 surahs is a lot to think about all at once. But every hafiz and hafiza started exactly where you are now: with a handful of short, manageable verses that gradually built into something much bigger.</p>
      <p>This guide breaks down the Quran verses most commonly recommended for beginners, why they&apos;re taught first, and how to structure a memorization habit that actually sticks.</p>

      <h2>Why Verse Selection Matters When You&apos;re Starting Out</h2>
      <p>Not all verses are equal when it comes to where a beginner should start. The best starting verses share three things in common:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>They&apos;re short</strong>, so early progress feels achievable rather than discouraging.</li>
        <li><strong>They&apos;re used daily</strong> in the five daily prayers, so memorization and practical application happen together.</li>
        <li><strong>They carry deep meaning</strong>, so the process builds spiritual connection alongside memory.</li>
      </ul>

      <h2>The Verses Most Teachers Recommend First</h2>

      <h3>1. Surah Al-Fatiha (The Opening)</h3>
      <p>Seven verses, recited in every unit of every prayer. This is the natural starting point for every student, since it&apos;s reinforced five times a day through salah.</p>
      <div className="bg-[#faf9f7] rounded-2xl border border-gray-100 p-5 my-4">
        <p className="text-xs font-bold uppercase tracking-widest text-[#122259] mb-3">Surah Al-Fatiha (1:1–7)</p>
        {fatiha.map((a) => (
          <AyahBlock key={a.numberInSurah} num={a.numberInSurah} arabic={a.text} />
        ))}
      </div>

      <h3>2. The Last Two Verses of Surah Al-Baqarah</h3>
      <p>Known as &ldquo;Aamana Rasool,&rdquo; these two verses are widely recommended by teachers as an early memorization goal. The Prophet ﷺ mentioned specific virtue in reciting them at night for protection, based on a hadith found in Sahih Al-Bukhari.</p>
      <div className="bg-[#faf9f7] rounded-2xl border border-gray-100 p-5 my-4">
        <p className="text-xs font-bold uppercase tracking-widest text-[#122259] mb-3">Al-Baqarah 2:285–286</p>
        <AyahBlock num={285} arabic={baqarah285} />
        <AyahBlock num={286} arabic={baqarah286} />
      </div>

      <h3>3. Surah Al-Ikhlas, Al-Falaq, and An-Nas (The Three Quls)</h3>
      <p>These three short surahs are often taught together early on. They&apos;re frequently recited for protection and are short enough that most beginners memorize all three within a matter of days.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
        {[
          { name: "Al-Ikhlas (112)", ayahs: ikhlas },
          { name: "Al-Falaq (113)", ayahs: falaq },
          { name: "An-Nas (114)", ayahs: naas },
        ].map((s) => (
          <div key={s.name} className="bg-[#faf9f7] rounded-2xl border border-gray-100 p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#122259] mb-3">{s.name}</p>
            {s.ayahs.map((a) => (
              <div key={a.numberInSurah} className="mb-2">
                <p className="text-right text-lg leading-loose font-arabic" dir="rtl" lang="ar">{a.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <h3>4. Ayatul Kursi (Al-Baqarah 2:255)</h3>
      <p>Often introduced slightly later due to its length, Ayatul Kursi is considered one of the greatest verses in the Quran. Many hadith highlight its virtue, including protection when recited before sleep.</p>
      <div className="bg-[#122259] rounded-2xl p-6 my-4">
        <p className="text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-3">Ayatul Kursi, Al-Baqarah 2:255</p>
        <p className="text-right text-xl sm:text-2xl leading-loose font-arabic text-white" dir="rtl" lang="ar">{ayatulKursi}</p>
      </div>

      <h3>5. Short, High-Frequency Surahs</h3>
      <p>Al-Kawthar (108), An-Nasr (110), and Al-Asr (103) are extremely short surahs ideal as confidence-builders early in a memorization journey, often memorized in a single sitting.</p>

      <h2>How to Structure a Memorization Routine That Works</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Little and often beats long and rare.</strong> Ten minutes of focused daily repetition consistently outperforms one long weekly session.</li>
        <li><strong>Repeat out loud, not silently.</strong> Hearing your own recitation reinforces memory far more effectively than reading with your eyes alone.</li>
        <li><strong>Revise old verses while learning new ones.</strong> Memorization without regular revision (muraja&apos;ah) fades quickly.</li>
        <li><strong>Learn correct pronunciation (tajweed) alongside memorization</strong>, not after. Fixing pronunciation mistakes after they become habits is much harder than learning correctly from day one.</li>
      </ul>

      <h2>Why One-on-One Guidance Makes All the Difference</h2>
      <p>Self-teaching from an app or book can only go so far, mistakes in pronunciation often go unnoticed without a live teacher correcting them in real time. This is especially true for children, who benefit enormously from a structured, encouraging, one-on-one learning environment.</p>
      <p>At Ease Quran UK, our teachers guide students step by step, from their very first verses through to full Hifz, with proper tajweed built in from day one. You can also <Link href="/blog/dua-for-success" className="text-[#F5A623] hover:underline font-medium">read our guide on duas for success</Link> to pair your memorization journey with sincere supplication.</p>

      <div className="bg-[#122259] rounded-2xl p-6 my-6 text-white">
        <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest mb-2">Start Today</p>
        <h3 className="font-bold text-lg mb-2">Give Your Child the Right Foundation from Day One</h3>
        <p className="text-blue-200 text-sm mb-4 leading-relaxed">Our qualified teachers build proper tajweed and memorization habits from the very first lesson, not corrected after the fact.</p>
        <Link href="/free-trial" className="inline-flex items-center gap-2 bg-[#F5A623] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#d4901e] transition-colors">Book a Free Trial Class <ChevronRight size={14} /></Link>
      </div>
    </div>
  );
}

async function DuaForSuccessContent() {
  const [rabbi, hasbuna, rabbana] = await Promise.all([
    fetchAyahArabic(20, 114),
    fetchAyahArabic(3, 173),
    fetchAyahArabic(2, 201),
  ]);

  // Hadith dua, sourced from Sunan Ibn Majah 3519, NOT from Quran API
  // VERIFY ARABIC: human check against sunnah.com before publishing
  const duaForEaseArabic = "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزَنَ إِذَا شِئْتَ سَهْلًا";

  return (
    <div className="text-gray-700 space-y-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#122259] [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#122259] [&_h3]:mt-7 [&_h3]:mb-2 [&_p]:text-[15px] [&_p]:leading-[1.8]">
      <p>Whether it&apos;s an exam tomorrow morning, a big decision at work, or simply the everyday challenge of doing your best in a difficult situation, turning to dua (supplication) for success is one of the most grounding habits a Muslim can build. It&apos;s not about replacing effort, it&apos;s about pairing your hard work with sincere reliance on Allah.</p>
      <p>This guide brings together some of the most well-known and authentic duas for success, with their Arabic text, transliteration, and meaning, along with guidance on when and how to use them.</p>


      <h2>Why Dua Matters Alongside Effort</h2>
      <p>There&apos;s a common misunderstanding that relying on dua means relying less on your own effort, but Islamic teaching frames it the opposite way. The Prophet ﷺ himself combined action with supplication in everything he did. Dua is what grounds effort in humility, reminding us that ultimate outcomes are not fully in our own hands, even when we&apos;ve done everything within our control.</p>

      <h2>Dua for Ease and Success</h2>
      <p>One of the most widely recited duas for approaching something difficult or new is this supplication from Sunan Ibn Majah, especially popular among students before exams:</p>

      <ArabicCard
        arabic={duaForEaseArabic}
        transliteration="Allahumma la sahla illa ma ja'altahu sahla, wa anta taj'alul hazna idha shi'ta sahla"
        meaning="O Allah, there is no ease except in what You have made easy, and You make the difficult easy if You will."
        source="Sunan Ibn Majah 3519"
      />

      <h2>Dua for Increase in Knowledge</h2>
      <p>Mentioned directly in the Quran (Surah Ta-Ha, 20:114), this short but powerful dua is ideal for students and lifelong learners alike. Its simplicity makes it easy to recite quietly before opening a book, starting a lecture, or sitting down for an exam.</p>

      <ArabicCard
        arabic={rabbi}
        transliteration="Rabbi zidni ilma"
        meaning="My Lord, increase me in knowledge."
        source="Surah Ta-Ha 20:114"
      />

      <h2>Dua for Removing Difficulty and Worry</h2>
      <p>This dua is often recited in moments of anxiety before a difficult task, an exam, a job interview, or an important decision, as a reminder that reliance on Allah brings genuine calm.</p>

      <ArabicCard
        arabic={hasbuna}
        transliteration="Hasbunallahu wa ni'mal wakeel"
        meaning="Allah is sufficient for us, and He is the best disposer of affairs."
        source="Surah Aal-e-Imran 3:173"
      />

      <h2>Dua for a Good Outcome in Affairs</h2>
      <p>Though widely recited, this dua&apos;s meaning extends naturally to seeking success and good outcomes in both worldly matters and the akhirah together, a balance many people forget to ask for.</p>

      <ArabicCard
        arabic={rabbana}
        transliteration="Rabbana atina fid-dunya hasanatan wa fil akhirati hasanatan wa qina 'adhaban-nar"
        meaning="Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire."
        source="Surah Al-Baqarah 2:201"
      />

      <h2>When Should You Recite These Duas?</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Before starting a task</strong>, studying, an interview, a project, or any effort where the outcome matters to you.</li>
        <li><strong>During moments of anxiety or overwhelm</strong>, as a way to reground and refocus.</li>
        <li><strong>After salah</strong>, when supplications are especially encouraged.</li>
        <li><strong>In sujood (prostration)</strong>, considered one of the times a person is closest to Allah.</li>
      </ul>

      <h2>Learning to Recite Dua and Quran with Confidence</h2>
      <p>Reciting dua from memory, with correct pronunciation and genuine understanding, is a skill built the same way Quran recitation is, through consistent, guided practice. Many children and adults memorize duas phonetically without ever learning the meaning or correct Arabic pronunciation behind them.</p>
      <p>At Ease Quran UK, our teachers help students build a real connection to the Quran and daily duas. Building this weekly habit of reading Surah Al-Kahf is another great complement to your dua practice, <Link href="/blog/surah-al-kahf-friday-reading-guide" className="text-[#F5A623] hover:underline font-medium">read our full Surah Al-Kahf guide.</Link></p>

      <div className="bg-[#122259] rounded-2xl p-6 my-6 text-white">
        <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest mb-2">Start Your Journey</p>
        <h3 className="font-bold text-lg mb-2">Build a Confident, Meaningful Relationship with the Quran</h3>
        <p className="text-blue-200 text-sm mb-4 leading-relaxed">Our teachers combine proper tajweed with meaning-based learning so recitation becomes second nature, not just memorized sound.</p>
        <Link href="/free-trial" className="inline-flex items-center gap-2 bg-[#F5A623] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#d4901e] transition-colors">Book a Free Trial Class <ChevronRight size={14} /></Link>
      </div>
    </div>
  );
}

// ─── Static params & metadata ─────────────────────────────────────────────────

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { url: `/blog/${slug}`, type: "article", publishedTime: post.date },
  };
}

// ─── Shared layout ────────────────────────────────────────────────────────────

const relatedPages = [
  { href: "/female-quran-teachers", icon: <Users size={14} />, label: "Female Quran Teacher" },
  { href: "/safety", icon: <Shield size={14} />, label: "Child Safety Policy" },
  { href: "/pricing", icon: <Star size={14} />, label: "Pricing and Plans" },
  { href: "/courses/noorani-qaida", icon: <BookOpen size={14} />, label: "Noorani Qaida Course" },
  { href: "/courses/hifz", icon: <BookOpen size={14} />, label: "Hifz Course" },
  { href: "/courses/tajweed", icon: <BookOpen size={14} />, label: "Tajweed Course" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const faqSchema = post.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  } : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: "Shah Zaib", url: "https://www.easequran.co.uk/about" },
    publisher: { "@type": "Organization", name: "Ease Quran UK", logo: { "@type": "ImageObject", url: "https://www.easequran.co.uk/logo.png" } },
    url: `https://www.easequran.co.uk/blog/${slug}`,
    image: `https://www.easequran.co.uk${post.heroImage}`,
  };

  const waMsg = encodeURIComponent("Hi, I found your blog and I'd like to book a free trial Quran class.");

  let content: React.ReactNode;
  if (slug === "is-it-safe-online-quran-classes-uk") {
    content = <SafetyChecklistContent />;
  } else if (slug === "surah-al-kahf-friday-reading-guide") {
    content = await SurahAlKahfContent();
  } else if (slug === "quran-verses-to-memorize-first") {
    content = await QuranVersesContent();
  } else if (slug === "dua-for-success") {
    content = await DuaForSuccessContent();
  } else {
    notFound();
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Hero */}
      <section className="relative bg-[#122259] overflow-hidden min-h-[320px] sm:min-h-[380px] flex items-end">
        <Image src={post.heroImage} alt={post.heroAlt} fill className="object-cover object-center opacity-30" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#122259]/90 via-[#122259]/40 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-10">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.category }]} dark />
          <div className="mt-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-bold text-white bg-[#F5A623] px-3 py-1 rounded-full">{post.category}</span>
              <span className="text-blue-200 text-xs flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
              <time className="text-blue-200 text-xs" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </time>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

            {/* Article */}
            <article>
              {content}

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
                      Meet our teachers <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Explore more */}
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
                <div className="bg-[#122259] rounded-2xl p-6 text-white">
                  <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest mb-2">Free Trial Class</p>
                  <h3 className="font-bold text-lg mb-2 leading-snug">Try a Free Quran Lesson</h3>
                  <p className="text-blue-200 text-xs mb-4 leading-relaxed">No card needed. No commitment. One-to-one with a certified teacher, confirmed within 2 hours.</p>
                  <Link href="/free-trial" className="btn-gold w-full justify-center text-sm py-2.5 rounded-xl">Book Free Trial</Link>
                </div>

                <a href={`https://wa.me/447311254423?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#25D366] text-white rounded-2xl p-4 hover:bg-[#1ebe5d] transition-colors">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="white" className="flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L.057 23.59a.75.75 0 00.917.932l5.898-1.546A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.029 22c-1.96 0-3.791-.527-5.363-1.443l-.385-.228-3.99 1.047 1.004-3.878-.249-.394A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  <div>
                    <p className="font-bold text-sm">Have a question?</p>
                    <p className="text-xs text-green-100">WhatsApp us directly</p>
                  </div>
                </a>

                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#122259] mb-4">More from the Blog</p>
                  <ul className="space-y-3">
                    {allPosts.filter(p => p.slug !== slug).map((p) => (
                      <li key={p.slug}>
                        <Link href={`/blog/${p.slug}`} className="flex items-start gap-2 text-sm text-gray-600 hover:text-[#F5A623] transition-colors leading-snug">
                          <ChevronRight size={12} className="text-[#F5A623] flex-shrink-0 mt-0.5" />
                          {p.title.length > 60 ? p.title.slice(0, 57) + "..." : p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#122259] mb-4">Quick Links</p>
                  <ul className="space-y-2">
                    {[
                      { href: "/female-quran-teachers", label: "Female Quran Teacher" },
                      { href: "/safety", label: "Child Safety Policy" },
                      { href: "/pricing", label: "Pricing and Plans" },
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
