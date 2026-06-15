import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Classes in Birmingham | Ease Quran UK",
  description: "Online Quran classes for Muslim families in Birmingham. One-to-one lessons with certified teachers. Serving Small Heath, Sparkhill, Handsworth, Bordesley Green and more.",
  alternates: { canonical: "https://easequran.co.uk/locations/birmingham" },
};

export default function Birmingham() {
  return (
    <CityPageTemplate
      city="Birmingham"
      slug="birmingham"
      intro="Quality online Quran classes for Muslim families in Birmingham. Certified male and female teachers, one-to-one lessons at flexible UK timings, and a completely free first class."
      areas={["Small Heath", "Sparkhill", "Handsworth", "Bordesley Green", "Balsall Heath", "Alum Rock", "Lozells", "Erdington", "Moseley", "Nechells", "Winson Green", "Aston", "Kingstanding", "Saltley"]}
      whyOnline="Birmingham has one of the largest Muslim communities in the UK, and families here have long relied on local madrassahs. But school-age children already face long days — adding a commute to a madrassa on top of homework and activities is genuinely tough. Online one-to-one classes with Ease Quran give Birmingham families access to certified Quran education at home, at times that actually fit."
      localPoints={[
        "No need to travel after school — classes happen at home",
        "Ideal for children in Birmingham's diverse Muslim communities",
        "Evening and weekend slots available around school hours",
        "Female teacher available — important for many Birmingham families",
        "English-medium teaching for Birmingham-born Muslim children",
      ]}
      faqs={[
        { q: "Do you provide online Quran classes in Small Heath and Sparkhill?", a: "Yes — we serve families across Small Heath, Sparkhill, and all Birmingham areas. Our classes are fully online, so your neighbourhood doesn't matter at all." },
        { q: "Is a female Quran teacher available in Birmingham?", a: "Yes. Our certified female teacher Almas Fatima is available for sisters and daughters from Birmingham families. Request a female teacher when booking." },
        { q: "How are your classes different from a local Birmingham madrassa?", a: "Our classes are one-to-one, online, taught in English, and with a fully certified teacher. There are no groups, no commute, and parents can observe any class. This is a premium, personalised alternative." },
        { q: "What Quran courses are available for Birmingham students?", a: "We offer Noorani Qaida, Quran Reading, Hifz, Tajweed, Islamic Studies, and Tafseer — all one-to-one, online, at flexible times." },
        { q: "How do I book a free trial class in Birmingham?", a: "Simply fill in the form on our free trial page or WhatsApp us on +44 7311 254423. We will confirm your free class within 2 hours." },
      ]}
    />
  );
}
