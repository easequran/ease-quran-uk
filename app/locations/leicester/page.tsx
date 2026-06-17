import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Classes in Leicester",
  description: "One-to-one online Quran classes for Muslim families in Leicester. Certified teachers, flexible timings. Serving Highfields, Evington, Spinney Hills, Belgrave and more. Free first class.",
  openGraph: { url: "/locations/leicester" },
  alternates: {
    canonical: "/locations/leicester",
  },
};

export default function Leicester() {
  return (
    <CityPageTemplate
      city="Leicester"
      slug="leicester"
      intro="Premium one-to-one online Quran classes for Muslim families across Leicester. Certified male and female teachers, flexible UK timings, and a completely free first class."
      areas={["Highfields", "Evington", "Spinney Hills", "Belgrave", "Rushey Mead", "Beaumont Leys", "Braunstone", "Stoneygate", "West End", "Newfoundpool", "Humberstone", "Knighton", "Oadby", "Wigston"]}
      whyOnline="Leicester's Muslim community is one of the most established in the UK, with a strong tradition of Islamic education going back generations. Families in Highfields, Evington, and Spinney Hills value that tradition deeply — but as children's lives become busier with school, homework, and activities, the daily madrassa trip does not always work. Ease Quran gives Leicester families the quality and structure of traditional Quran education in a format that fits modern family life, delivered one-to-one by a certified teacher, at home."
      localPoints={[
        "Serves Leicester city and surrounding areas including Oadby and Wigston",
        "Flexible class times — evenings and weekends available",
        "All lessons in English for Leicester-born Muslim children",
        "Dedicated female teacher available on request",
        "Certified teachers with Islamic qualifications — not anonymous tutors",
        "Students in Highfields, Belgrave, and Evington welcome",
      ]}
      faqs={[
        { q: "Do you offer online Quran classes to families in Highfields and Evington?", a: "Yes — we serve families across all Leicester areas including Highfields, Evington, Spinney Hills, Belgrave, and beyond. Our online lessons mean geography is never a barrier." },
        { q: "Are there timings available to suit Leicester school schedules?", a: "Yes. We offer classes after school (from 3pm), evenings, and weekends — all of which fit around Leicester's school timetables and working parents' schedules." },
        { q: "Can a Leicester family request a female Quran teacher?", a: "Yes. Our certified female teacher Almas Fatima is available for sisters and female students in Leicester. Simply request this when booking your free trial." },
        { q: "My child already goes to a local mosque — can Ease Quran complement this?", a: "Absolutely. Many families use Ease Quran for the one-to-one personalised attention it provides, alongside local mosque attendance. The two approaches work very well together." },
        { q: "How do I book in Leicester?", a: "Use the free trial form on our website or WhatsApp us on +44 7311 254423. We will confirm your free class within 2 hours." },
      ]}
    />
  );
}
