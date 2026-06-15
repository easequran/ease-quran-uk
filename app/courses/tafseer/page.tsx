import type { Metadata } from "next";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata: Metadata = {
  title: "Online Tafseer Classes UK — Understand the Quran",
  description: "Online Tafseer classes for UK students. Learn the meanings, context, and lessons of the Quran with a qualified teacher. One-to-one, flexible timings. Free trial.",
  alternates: { canonical: "https://easequran.co.uk/courses/tafseer" },
};

export default function Tafseer() {
  return (
    <CoursePageTemplate
      title="Online Tafseer Classes — Understand the Quran"
      subtitle="Go Beyond Reading — Understand"
      slug="tafseer"
      image="/course-tafseer.webp"
      imageAlt="Online Tafseer class helping UK students understand the meanings of the Quran"
      schemaDescription="Online Tafseer (Quran explanation) classes for UK students. Learn the meanings, context, and wisdom of the Quran in one-to-one English-medium lessons."
      description="There is a profound difference between reciting the Quran and understanding what it says. Tafseer — the explanation and interpretation of Quranic verses — opens up the depth, wisdom, and context behind the words of Allah. Our online Tafseer classes help UK students build a meaningful connection with the Quran beyond recitation."
      learn={[
        "The meaning and translation of Quranic verses",
        "Asbab al-nuzool — the historical context and reasons for revelation",
        "Linguistic depth — key Arabic words and their significance",
        "Lessons and wisdom extracted from the text",
        "Thematic Tafseer — exploring recurring Quranic themes",
        "How verses relate to and complement each other",
        "Scholars' interpretations and their evidence",
        "How Quranic teachings apply to life as a Muslim in the UK",
      ]}
      whoFor={[
        "Students who can read the Quran and want to understand what they recite",
        "Adults who want a deeper connection with the Quran",
        "University students and professionals with a strong English-medium background",
        "Hifz students who want to understand what they have memorised",
        "Anyone curious about the Quran's meaning who has not studied it formally",
      ]}
      howWorks="Tafseer classes are conducted one-to-one in English, allowing students to ask questions freely and explore verses in depth. Each 30-minute session works through a section of the Quran (or a specific surah, depending on the student's goal), covering translation, contextual background, key vocabulary, and extracted lessons. The teacher uses classical tafseer works as a foundation while making the content accessible and relevant to modern Muslim life in the UK."
      faqs={[
        { q: "Do I need to be able to read Arabic to study Tafseer?", a: "It is helpful but not required. Tafseer classes can be conducted primarily in English translation. Students who can read Arabic will gain additional benefit from the linguistic explanations." },
        { q: "Which part of the Quran do we start with?", a: "This depends on your goals. Many students begin with Juz Amma (the 30th chapter, containing shorter surahs) or with surahs relevant to daily prayer. We tailor the curriculum to what is most useful for you." },
        { q: "What tafseer sources do you use?", a: "Our teachers draw on well-known and respected classical tafseer works, presented in an accessible English-medium format suitable for UK students." },
        { q: "Can teenagers benefit from Tafseer?", a: "Yes — Tafseer is particularly impactful for teenagers and young adults who want to understand their faith intellectually. It helps answer the 'why' behind what they have been taught." },
        { q: "Can this be combined with Islamic Studies?", a: "Yes. Tafseer and Islamic Studies complement each other very well. Many students take both — Tafseer for Quranic understanding and Islamic Studies for broader religious knowledge." },
      ]}
      related={[
        { title: "Islamic Studies", href: "/courses/islamic-studies" },
        { title: "Tajweed", href: "/courses/tajweed" },
        { title: "Quran Reading", href: "/courses/quran-reading" },
      ]}
    />
  );
}
