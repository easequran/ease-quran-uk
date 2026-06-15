import type { Metadata } from "next";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata: Metadata = {
  title: "Online Islamic Studies Classes UK | Kids and Adults",
  description: "Online Islamic Studies classes for children and adults in the UK. One-to-one lessons covering aqeedah, fiqh, seerah, and Islamic manners with a certified teacher.",
  alternates: { canonical: "https://easequran.co.uk/courses/islamic-studies" },
};

export default function IslamicStudies() {
  return (
    <CoursePageTemplate
      h1="Online Islamic Studies Classes in the UK"
      title="Islamic Studies"
      subtitle="Comprehensive Islamic Education"
      slug="islamic-studies"
      image="/course-islamic-studies.webp"
      imageAlt="Online Islamic Studies class for children in the UK with a qualified teacher"
      schemaDescription="Online Islamic Studies classes for children and adults in the UK. One-to-one lessons covering aqeedah, fiqh, seerah, and Islamic manners."
      description="Growing up in the UK, Muslim children need more than Quran recitation — they need a solid grounding in Islamic knowledge that connects their faith to their daily lives. Our Islamic Studies programme gives children and adults the core knowledge of Islam in a structured, engaging, and English-medium format."
      learn={[
        "Aqeedah — Islamic beliefs, the pillars of faith, and tawheed",
        "Fiqh — acts of worship: salah, wudu, fasting, and zakah",
        "Seerah — the life of the Prophet Muhammad (peace be upon him) and his Companions",
        "Akhlaq — Islamic manners and character (adab)",
        "Islamic history — the early generations and key events",
        "Stories of the Prophets and their lessons",
        "Duas for daily life and their meanings",
        "Basic Arabic vocabulary relevant to worship",
      ]}
      whoFor={[
        "Children aged 5 and above who are ready to learn about their faith",
        "Teenagers who want to strengthen their Islamic knowledge",
        "UK-born students who learn and communicate in English",
        "Adults who want to revisit or deepen their understanding of Islam",
        "Reverts who want a structured introduction to Islamic knowledge",
      ]}
      howWorks="Islamic Studies classes are one-to-one and fully online, taught in English by a certified teacher with a degree in Islamic Studies. The curriculum is structured and age-appropriate — a 7-year-old's lessons look very different from a 14-year-old's. Each session is approximately 30 minutes and follows a clear progression. Students are encouraged to ask questions and connect what they are learning to their lives as Muslims in the UK."
      faqs={[
        { q: "What topics are covered in Islamic Studies?", a: "The programme covers aqeedah (beliefs), fiqh (worship and practice), seerah (the Prophet's life), Islamic manners, history of Islam, stories of the Prophets, and practical duas. The depth varies by age and level." },
        { q: "Is the course taught in English?", a: "Yes — all Islamic Studies classes are taught in English with Arabic terms introduced and explained where relevant. This makes it ideal for UK-born students." },
        { q: "Can Islamic Studies be combined with Quran lessons?", a: "Yes. Many families book both Quran Reading or Tajweed and Islamic Studies. We can help create a timetable that covers both without overloading the student." },
        { q: "Is this suitable for teenagers?", a: "Yes — we tailor the content and approach for different ages. Teenagers often benefit from deeper discussions about faith, identity, and how Islam applies to their daily lives in the UK." },
        { q: "Is there a female teacher available for Islamic Studies?", a: "Yes. Almas Fatima, our female teacher with a Bachelor's degree in Islamic Studies, can teach Islamic Studies to sisters and female students." },
      ]}
      related={[
        { title: "Tafseer", href: "/courses/tafseer" },
        { title: "Quran Reading", href: "/courses/quran-reading" },
        { title: "Tajweed", href: "/courses/tajweed" },
      ]}
    />
  );
}
