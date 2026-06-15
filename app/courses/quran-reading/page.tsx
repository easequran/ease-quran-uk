import type { Metadata } from "next";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Reading Classes UK | Learn to Read Quran",
  description: "Learn to read the Quran online with a qualified UK teacher. One-to-one Quran reading classes for children and adults. Flexible timings, free first class, no commitment.",
  alternates: { canonical: "https://easequran.co.uk/courses/quran-reading" },
};

export default function QuranReading() {
  return (
    <CoursePageTemplate
      h1="Online Quran Reading Classes in the UK"
      title="Quran Reading"
      subtitle="From Letters to Fluent Recitation"
      slug="quran-reading"
      image="/course-quran-reading.webp"
      imageAlt="Student reading the Quran online with a certified teacher in the UK"
      schemaDescription="Online Quran reading classes for all levels in the UK. One-to-one lessons helping children and adults read the Quran fluently with correct pronunciation."
      description="The ability to read the Quran is one of the most precious gifts a parent can give their child — and one of the most meaningful journeys an adult can take. Our one-to-one online Quran reading classes take students from their current level to confident, flowing recitation."
      learn={[
        "Fluent reading of Arabic script with correct pronunciation",
        "Word recognition and reading speed development",
        "Application of basic Tajweed rules during reading",
        "Stopping and starting rules (waqf and ibtida)",
        "Recitation of the 30th Juz (Juz Amma) — commonly memorised surahs",
        "Reading through the full Quran (Khatam ul Quran)",
        "Building confidence for independent recitation",
      ]}
      whoFor={[
        "Students who have completed Noorani Qaida and are ready to read the Quran",
        "Children who can read basic Arabic but need to build fluency",
        "Adults who learnt as children but have become rusty",
        "Reverts who can read Arabic letters and want to progress to the Quran",
        "Anyone who wants to recite the Quran with understanding and confidence",
      ]}
      howWorks="Each one-to-one lesson takes place online at your agreed weekly slots. The teacher listens carefully to your recitation, corrects mistakes immediately, and introduces Tajweed rules naturally as they appear in the text. Progress is tracked across each lesson and parents receive regular updates on their child's advancement. The goal is not just to reach the end of the Quran, but to recite it correctly and with confidence."
      faqs={[
        { q: "My child knows the alphabet — can they start Quran reading?", a: "If your child can read the Arabic alphabet and basic vowels confidently, they may be ready to begin Quran reading. The free trial will help the teacher assess the right starting point." },
        { q: "How long does it take to read the full Quran?", a: "This varies widely. A focused child attending 3 classes per week might complete the Quran in 1 to 2 years. An adult may take longer but will progress consistently." },
        { q: "What is the difference between Quran Reading and Tajweed?", a: "Quran Reading focuses on fluency and completing the Quran. Tajweed is a dedicated course on the rules of correct recitation, going deeper into pronunciation. Many students do both together." },
        { q: "Can adults learn to read the Quran from scratch?", a: "Absolutely. We have teachers experienced with adult learners who are patient, encouraging, and understand the unique needs of adults coming to Quran reading later in life." },
        { q: "Can I get a female teacher for my daughter?", a: "Yes. Our female teacher Almas Fatima is available for sisters and daughters. Simply request a female teacher when booking your free trial." },
      ]}
      related={[
        { title: "Noorani Qaida", href: "/courses/noorani-qaida" },
        { title: "Tajweed", href: "/courses/tajweed" },
        { title: "Hifz", href: "/courses/hifz" },
      ]}
    />
  );
}
