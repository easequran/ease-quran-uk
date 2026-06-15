import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Classes in Bradford | Ease Quran UK",
  description: "Online Quran classes for Muslim families in Bradford. One-to-one lessons with certified teachers. Serving Manningham, Heaton, Toller, and across Bradford district.",
  alternates: { canonical: "https://easequran.co.uk/locations/bradford" },
};

export default function Bradford() {
  return (
    <CityPageTemplate
      city="Bradford"
      slug="bradford"
      intro="Qualified online Quran classes for Muslim families in Bradford. Personalised, one-to-one lessons at flexible UK timings — with a certified teacher, a female teacher option, and a free first class."
      areas={["Manningham", "Heaton", "Toller", "Great Horton", "Girlington", "Lidget Green", "Wibsey", "Bradford Moor", "Undercliffe", "Keighley", "Ilkley Road", "Thornbury", "Laisterdyke", "Little Horton"]}
      whyOnline="Bradford has one of the highest proportions of British Muslims of any city in the UK. Families here are deeply committed to Quranic education — but the local provision is not always consistent, and busy working parents often struggle to organise transport to a madrassa every day. Ease Quran brings the class to your home: a certified, English-speaking teacher, available at times that fit Bradford family life."
      localPoints={[
        "One-to-one classes — far more effective than crowded local groups",
        "Certified teachers with formal Islamic qualifications",
        "Timings that fit Bradford school and work schedules",
        "Female teacher available — particularly important in Bradford's conservative community",
        "All taught in English — ideal for Bradford-born children",
      ]}
      faqs={[
        { q: "Do you serve families in Manningham and Heaton?", a: "Yes — we serve all Bradford areas including Manningham, Heaton, Toller, and the surrounding district. Our classes are fully online so no travel is needed." },
        { q: "Is this better than a Bradford madrassa?", a: "It's a different model — and a complementary one for many families. Our classes are one-to-one, in English, with a certified teacher, and parents can watch any time. Many Bradford families use Ease Quran alongside local mosque education." },
        { q: "Is a female teacher available for Bradford sisters?", a: "Yes. Our certified female teacher Almas Fatima is available for sisters and daughters across Bradford. Simply mention your preference when booking." },
        { q: "What courses are available in Bradford?", a: "All our courses are available: Noorani Qaida, Quran Reading, Hifz, Tajweed, Islamic Studies, and Tafseer." },
        { q: "How do I start with a free trial in Bradford?", a: "Book via our free trial form or WhatsApp us on +44 7311 254423. We will confirm within 2 hours." },
      ]}
    />
  );
}
