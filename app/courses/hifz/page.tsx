import type { Metadata } from "next";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata: Metadata = {
  title: "Online Hifz Course UK | Quran Memorisation Classes",
  description: "Online Hifz course in the UK with a certified Hafiz teacher. Memorise the Quran at your own pace with one-to-one lessons. Flexible UK timings. Free trial class.",
  openGraph: { url: "/courses/hifz" },
  alternates: {
    canonical: "/courses/hifz",
    languages: {
      "en-GB": "https://www.easequran.co.uk/courses/hifz",
      "en-US": "https://easequran.com/courses/hifz",
      "x-default": "https://easequran.com/courses/hifz",
    },
  },
};

export default function Hifz() {
  return (
    <CoursePageTemplate
      h1="Online Hifz Course in the UK"
      title="Hifz"
      subtitle="One-to-One Quran Memorisation"
      slug="hifz"
      image="/course-hifz.webp"
      imageAlt="Student memorising the Quran online with a certified Hafiz teacher in the UK"
      schemaDescription="Online Hifz (Quran memorisation) course for children and adults in the UK. One-to-one lessons with a certified Hafiz teacher at flexible UK timings."
      description="Becoming a Hafiz is one of the highest honours in Islam. Our online Hifz programme makes this goal achievable for children and adults across the UK, with a dedicated teacher, a structured methodology, and a pace tailored to each student's life and commitments."
      learn={[
        "Memorisation of new verses (sabaq) each lesson",
        "Daily revision of recently memorised portions (sabaqi)",
        "Systematic review of older memorised portions (manzil)",
        "Correct Tajweed applied throughout memorisation",
        "Techniques for long-term retention and recall",
        "Building consistency and maintaining Hifz over time",
        "Guidance on managing school and Hifz together",
      ]}
      whoFor={[
        "Children who can read the Quran fluently and are ready to begin memorisation",
        "Teenagers who want to complete Hifz alongside school studies",
        "Adults who want to memorise the Quran later in life",
        "Students who started Hifz elsewhere and need to continue or restart",
        "Parents who want a structured, accountable programme for their child",
      ]}
      howWorks="Hifz requires consistency above all else. Classes are available up to 5 days per week so students can maintain a daily memorisation routine. Each one-to-one session focuses on new memorisation (sabaq), recent revision (sabaqi), and periodic review of older portions (manzil). Your teacher Muhammad Umair is a Tajweed and Hifz specialist who understands how to keep students motivated, correct errors early, and ensure what is memorised stays memorised. Parents are kept informed of progress at regular intervals."
      faqs={[
        { q: "What age should a child start Hifz?", a: "Many children start between the ages of 7 and 10, once they can read the Quran fluently. However, teenagers and adults also memorise successfully — it requires dedication more than a specific age." },
        { q: "How many classes per week do you recommend for Hifz?", a: "We recommend a minimum of 3 classes per week for consistent progress. Our intensive plan at 5 days per week is popular with dedicated Hifz students." },
        { q: "Does my child need to complete Quran reading before starting Hifz?", a: "Yes — the student must be able to read the Quran fluently before beginning memorisation. If needed, they can complete our Quran Reading course first." },
        { q: "How do you ensure what is memorised stays memorised?", a: "Our teachers use a structured revision system — new portions are reviewed frequently and older portions are regularly revisited (manzil) to keep them fresh and secure." },
        { q: "Can adults memorise the Quran?", a: "Absolutely. Adults take longer than children, but with regular one-to-one classes and consistent effort, adult Hifz is entirely achievable. Many adults successfully memorise Juz Amma and beyond." },
      ]}
      related={[
        { title: "Quran Reading", href: "/courses/quran-reading" },
        { title: "Tajweed", href: "/courses/tajweed" },
        { title: "Islamic Studies", href: "/courses/islamic-studies" },
      ]}
    />
  );
}
