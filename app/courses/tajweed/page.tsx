import type { Metadata } from "next";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata: Metadata = {
  title: "Online Tajweed Classes UK | Learn Correct Quran Recitation",
  description: "Online Tajweed classes in the UK with a certified teacher. Learn to recite the Quran with proper pronunciation and Tajweed rules. One-to-one, free trial available.",
  alternates: { canonical: "https://easequran.co.uk/courses/tajweed" },
};

export default function Tajweed() {
  return (
    <CoursePageTemplate
      h1="Online Tajweed Classes in the UK"
      title="Tajweed"
      subtitle="Perfect Your Quran Recitation"
      slug="tajweed"
      image="/course-tajweed.webp"
      imageAlt="Online Tajweed class with a certified UK Quran teacher teaching correct recitation rules"
      schemaDescription="Online Tajweed classes for UK students. Learn the rules of correct Quranic recitation with a certified Tajweed teacher in one-to-one lessons."
      description="Tajweed is the science of reciting the Quran correctly — with proper pronunciation of each letter, accurate application of elongation rules, and the beautiful precision that the Quran deserves. Our online Tajweed classes help UK students move from simply reading to truly reciting the Quran as it was revealed."
      learn={[
        "Makhaarij al-huroof — correct articulation points of Arabic letters",
        "Sifaat — the characteristics of letters and their pronunciation",
        "Noon sakinah and tanween rules (izhar, idgham, ikhfa, iqlab)",
        "Meem sakinah rules",
        "Madd (elongation) rules — all types and their durations",
        "Laam shamsiyyah and qamariyyah",
        "Waqf and ibtida — stopping and starting rules",
        "Qalqalah, tafkheem, and tarqeeq",
      ]}
      whoFor={[
        "Students who can read the Quran but want to improve their recitation quality",
        "Children who have completed Noorani Qaida and Quran Reading",
        "Adults who recite regularly but know their Tajweed needs work",
        "Hifz students who want to ensure their memorised portions are accurate",
        "Anyone who wants to recite the Quran beautifully and correctly",
      ]}
      howWorks="Tajweed is a structured science and our lessons follow a clear, logical curriculum. Each one-to-one session focuses on a specific set of Tajweed rules, applied immediately to real Quranic verses. Your teacher Muhammad Umair — a Tajweed specialist — listens to your recitation, identifies errors, explains the rule behind each correction, and ensures you can apply it independently before moving on. Sessions are live, online, and approximately 30 minutes long."
      faqs={[
        { q: "Is Tajweed necessary or optional?", a: "Scholarly opinion holds that learning basic Tajweed to the level that avoids changing the meaning of verses is obligatory (fardh). Beautifying recitation further is highly recommended (mustahabb). For anyone who recites the Quran regularly, Tajweed is essential." },
        { q: "Can I learn Tajweed without knowing Arabic?", a: "Yes. Tajweed is about pronunciation and recitation rules, not Arabic language comprehension. Many UK students learn Tajweed in English without any Arabic language background." },
        { q: "How long does a Tajweed course take?", a: "A foundational Tajweed course covering all the main rules typically takes 6 to 12 months at 2 classes per week. Students can then continue to refine their recitation further." },
        { q: "Can children learn Tajweed?", a: "Yes — children who can read the Quran are ready to begin Tajweed. Many find the structured rules help them understand what they have been doing naturally." },
        { q: "Will I get corrections on my own recitation?", a: "Every session includes live recitation practice with immediate, specific corrections. This one-to-one feedback is what makes our Tajweed classes so effective." },
      ]}
      related={[
        { title: "Quran Reading", href: "/courses/quran-reading" },
        { title: "Hifz", href: "/courses/hifz" },
        { title: "Tafseer", href: "/courses/tafseer" },
      ]}
    />
  );
}
