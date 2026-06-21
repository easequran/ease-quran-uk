import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Classes in Birmingham",
  description: "One-to-one online Quran classes for Muslim families in Birmingham. Certified teachers, flexible timings. Serving Small Heath, Sparkhill, Handsworth, Alum Rock and more. Free first class.",
  openGraph: { url: "/locations/birmingham" },
  alternates: {
    canonical: "/locations/birmingham",
  },
};

export default function Birmingham() {
  return (
    <CityPageTemplate
      city="Birmingham"
      slug="birmingham"
      intro="Quality one-to-one online Quran classes for Muslim families across Birmingham. Certified male and female teachers, flexible UK timings, and a completely free first class with no commitment."
      areas={["Small Heath", "Sparkhill", "Handsworth", "Bordesley Green", "Balsall Heath", "Alum Rock", "Lozells", "Erdington", "Moseley", "Nechells", "Winson Green", "Aston", "Kingstanding", "Saltley", "Hodge Hill"]}
      whyOnline="Birmingham has one of the largest Muslim communities in the UK, and families here have long relied on local madrassahs. But school-age children already face long days, and adding a madrassa journey on top of homework puts real pressure on family time. Parents in Small Heath, Sparkhill, Alum Rock, and Handsworth tell us the same thing: they want quality, consistency, and a teacher who actually shows up. Ease Quran provides exactly that, online, without anyone leaving home."
      localPoints={[
        "No need to travel after school — lessons happen at home",
        "Ideal for families across Birmingham's Muslim communities",
        "Evening and weekend slots available around school hours",
        "Female teacher available — important for many Birmingham families",
        "All lessons in English — ideal for Birmingham-born Muslim children",
        "One certified teacher, one student — full attention every class",
      ]}
      faqs={[
        { q: "Do you provide online Quran classes in Small Heath and Sparkhill?", a: "Yes — we serve families across Small Heath, Sparkhill, Handsworth, Alum Rock, and all Birmingham areas. Our classes are fully online so your neighbourhood makes no difference." },
        { q: "Is a female Quran teacher available in Birmingham?", a: "Yes. Our certified female teacher Almas Fatima is available for sisters and daughters from Birmingham families. Simply request a female teacher when booking your free trial." },
        { q: "How are your classes different from a local Birmingham madrassa?", a: "Our classes are one-to-one, online, and taught in English by a fully certified teacher. There are no groups, no commute, and parents can observe any class at any time. It is a genuinely personalised alternative." },
        { q: "What Quran courses are available for Birmingham students?", a: "We offer Noorani Qaida, Quran Reading, Hifz, Tajweed, Islamic Studies, and Tafseer — all one-to-one, online, at flexible times that suit your family." },
        { q: "How do I book a free trial class in Birmingham?", a: "Fill in the form on our free trial page or WhatsApp us on +44 7311 254423. We will confirm your free class within 2 hours." },
      ]}
    />
  );
}
