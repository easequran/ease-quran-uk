import type { Metadata } from "next";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Classes for Adults & Beginners in the UK",
  description: "Online Quran classes for adults and beginners in the UK. One-to-one, private lessons at evening and weekend times, no judgement, no group classes. Free first class.",
  openGraph: { url: "/adult-quran-classes" },
  alternates: {
    canonical: "/adult-quran-classes",
  },
};

export default function AdultQuranClasses() {
  return (
    <CoursePageTemplate
      h1="Online Quran Classes for Adults & Beginners in the UK"
      title="Adult Quran Classes"
      subtitle="For Adults & Beginners"
      slug="adult-quran-classes"
      image="/course-noorani-qaida.webp"
      imageAlt="Adult learning to read the Quran online with a certified teacher in the UK"
      schemaDescription="Online Quran classes for adults and beginners in the UK. One-to-one lessons with a certified teacher, private, patient, and at flexible evening or weekend times."
      description="It is never too late to learn the Quran. Whether you never had the chance as a child, you're a revert taking your first steps, or you simply want to read with confidence again, our online Quran classes for adults are built around your life, not the other way around. Every lesson is private, one-to-one, and paced entirely to you, with no group classes and no pressure."
      learn={[
        "Arabic letters and pronunciation from complete scratch, if needed",
        "Reading the Quran fluently at your own pace",
        "Correct Tajweed rules woven in naturally as you progress",
        "Confidence to recite in front of family or in prayer",
        "Flexible curriculum, whether you want reading, Tajweed, or memorisation",
        "A private, judgement-free space to ask questions and make mistakes",
      ]}
      whoFor={[
        "Adults who never learnt to read the Quran as a child",
        "Reverts to Islam taking their first steps with the Quran",
        "Adults who learnt as children but have become rusty or lost confidence",
        "Busy professionals who need evening or weekend class times",
        "Parents who want to learn alongside their children",
      ]}
      howWorks="Classes take place live, one-to-one, via Zoom or Google Meet, at a time that fits around work and family life, including evenings and weekends. Your teacher starts exactly where you are, whether that's the Arabic alphabet or refining your existing recitation, and builds a plan around your goals. There is no group class, no comparison with other students, and no fixed pace. Male and female teachers are both available."
      faqs={[
        { q: "Is it too late for me to start learning the Quran as an adult?", a: "Not at all. Many of our adult students start with zero prior knowledge and make steady progress. What matters most is consistency, not age." },
        { q: "I'm a revert and can't read Arabic at all, where do I start?", a: "You'll begin with Noorani Qaida, the same structured foundation we use with beginners, adapted to an adult pace and explained fully in English." },
        { q: "Can I have classes in the evening or at weekends?", a: "Yes, our teachers offer flexible UK timings including evenings after work and weekends, so classes fit around your schedule." },
        { q: "Can I request a female teacher?", a: "Yes. Our qualified female teacher, Almas Fatima, is available for female adult students who prefer to learn with a woman." },
        { q: "Do I have to attend with other students?", a: "No. Every class at Ease Quran UK is completely one-to-one. You will never be grouped with other students." },
        { q: "How do I know these online Quran classes for adults are genuinely good?", a: "Look for real, verifiable credentials rather than promises, one-to-one lessons instead of group calls, and a free trial before you commit. Our teachers are certified and interviewed, our first class is always free, and adult students regularly tell us it's the first academy that felt properly organised, not just another online listing." },
      ]}
      related={[
        { title: "Noorani Qaida", href: "/courses/noorani-qaida" },
        { title: "Quran Reading", href: "/courses/quran-reading" },
        { title: "Tajweed", href: "/courses/tajweed" },
      ]}
    />
  );
}
