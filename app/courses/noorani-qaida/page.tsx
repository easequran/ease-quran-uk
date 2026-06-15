import type { Metadata } from "next";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata: Metadata = {
  title: "Noorani Qaida Online UK — Learn Arabic for Beginners",
  description: "Start your Quran journey with Noorani Qaida online classes in the UK. One-to-one lessons for children and adult beginners. Qualified teacher, free first class.",
  alternates: { canonical: "https://easequran.co.uk/courses/noorani-qaida", languages: { "en-GB": "https://easequran.co.uk/courses/noorani-qaida" } },
};

export default function NooraniQaida() {
  return (
    <CoursePageTemplate
      title="Noorani Qaida Online Classes"
      subtitle="For Beginners — Children & Adults"
      slug="noorani-qaida"
      image="/course-noorani-qaida.webp"
      imageAlt="Child learning Noorani Qaida online with a qualified Quran teacher in the UK"
      schemaDescription="Online Noorani Qaida classes for beginners in the UK. One-to-one lessons with a certified teacher for children and adults learning to read Arabic."
      description="Noorani Qaida is the proven starting point for anyone learning to read the Quran. Whether you're booking for a young child taking their very first Arabic lesson, or an adult who never had the opportunity to learn — this course gives you the right foundation."
      learn={[
        "Arabic letters — recognition, pronunciation, and written forms",
        "Joining letters to form syllables and words",
        "Basic Tajweed rules introduced from the start",
        "Short vowels (harakaat), tanween, and sukoon",
        "Madd (elongation) rules at beginner level",
        "Simple Quranic words and practice exercises",
        "Gradual progression — no rushing, no skipping",
      ]}
      whoFor={[
        "Children aged 4 and above who are completely new to Arabic",
        "UK-born children who speak English at home",
        "Adult beginners — reverts and those who never learnt",
        "Students who started Qaida elsewhere but need a reset",
        "Parents who want to learn alongside their child",
      ]}
      howWorks="Classes take place live one-to-one via Zoom or Google Meet at a time agreed with you. Each session is approximately 30 minutes — long enough to make real progress, short enough to keep children engaged. Your teacher works through the Noorani Qaida book at a pace suited to your child's learning speed. There is no rush, no group pressure, and no moving on until the student is confident. Parents are welcome to sit in at any time, and regular progress updates are provided."
      faqs={[
        { q: "What age can children start Noorani Qaida?", a: "Children as young as 4 can begin, though we recommend 5+ for the best learning experience. The right age depends on the child's ability to focus — your teacher will assess this in the free trial." },
        { q: "Do adults need Noorani Qaida?", a: "Yes — Noorani Qaida is for anyone who cannot yet read Arabic confidently. Many adult beginners and reverts start here and make excellent progress with a patient, English-speaking teacher." },
        { q: "How long does Noorani Qaida take to complete?", a: "This varies by student, but on average 3–6 months of regular classes. The priority is accuracy over speed." },
        { q: "Do I need to buy any materials?", a: "We recommend purchasing a Noorani Qaida book (widely available online for under £5) but this is not essential for the first few lessons. Your teacher will guide you." },
        { q: "What comes after Noorani Qaida?", a: "After completing Noorani Qaida, students naturally progress to Quran Reading — reading the full Quran with fluency and correct pronunciation." },
      ]}
      related={[
        { title: "Quran Reading", href: "/courses/quran-reading" },
        { title: "Tajweed", href: "/courses/tajweed" },
        { title: "Islamic Studies", href: "/courses/islamic-studies" },
      ]}
    />
  );
}
