import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Classes in Bradford | Ease Quran UK",
  description: "One-to-one online Quran classes for Muslim families in Bradford. Certified teachers, flexible timings. Serving Manningham, Heaton, Girlington, Great Horton and the Bradford district. Free first class.",
  alternates: { canonical: "https://easequran.co.uk/locations/bradford" },
};

export default function Bradford() {
  return (
    <CityPageTemplate
      city="Bradford"
      slug="bradford"
      intro="Qualified one-to-one online Quran classes for Muslim families across Bradford. A certified teacher, flexible UK timings, a female teacher option, and a free first class — no commitment needed."
      areas={["Manningham", "Heaton", "Toller", "Great Horton", "Girlington", "Lidget Green", "Wibsey", "Bradford Moor", "Undercliffe", "Keighley", "Thornbury", "Laisterdyke", "Little Horton", "Thornton"]}
      whyOnline="Bradford has one of the highest proportions of British Muslims of any city in the UK, and families here are deeply committed to Quranic education. But the local provision is not always consistent — and busy working parents in Manningham, Girlington, and Great Horton often struggle to organise transport to a madrassa on top of everything else. Ease Quran brings the lesson directly to your home: a certified, English-speaking teacher, at a time that fits Bradford family life, with no commute required."
      localPoints={[
        "One-to-one classes — more effective than crowded local groups",
        "Certified teachers with formal Islamic qualifications",
        "Timings that fit Bradford school and work schedules",
        "Female teacher available — particularly valued in Bradford's Muslim community",
        "All lessons in English — ideal for Bradford-born children",
        "Parents can observe any class at any time",
      ]}
      faqs={[
        { q: "Do you serve families in Manningham and Heaton?", a: "Yes — we serve all Bradford areas including Manningham, Heaton, Girlington, Great Horton, and across the wider Bradford district. Our classes are fully online so no travel is needed from any area." },
        { q: "Is this better than a Bradford madrassa?", a: "It is a different model, and a complementary one for many families. Our classes are one-to-one, in English, with a certified teacher, and parents can observe any time. Many Bradford families use Ease Quran alongside local mosque education for the personalised attention it provides." },
        { q: "Is a female teacher available for Bradford sisters?", a: "Yes. Our certified female teacher Almas Fatima is available for sisters and daughters across Bradford. Simply mention your preference when booking your free trial." },
        { q: "What courses are available for Bradford students?", a: "All our courses are available: Noorani Qaida, Quran Reading, Hifz, Tajweed, Islamic Studies, and Tafseer — all one-to-one and online." },
        { q: "How do I start with a free trial in Bradford?", a: "Book via our free trial form or WhatsApp us on +44 7311 254423. We will confirm your free class within 2 hours." },
      ]}
    />
  );
}
