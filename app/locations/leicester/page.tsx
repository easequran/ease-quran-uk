import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Classes in Leicester | Ease Quran UK",
  description: "Online Quran classes for Muslim families in Leicester. One-to-one certified teachers, flexible UK timings, female teacher available. Serving Highfields, Evington, Spinney Hills and more.",
  alternates: { canonical: "https://easequran.co.uk/locations/leicester" },
};

export default function Leicester() {
  return (
    <CityPageTemplate
      city="Leicester"
      slug="leicester"
      intro="Premium online Quran education for Muslim families across Leicester. One-to-one, certified teachers, English-medium teaching, and a female teacher option. Your first class is free."
      areas={["Highfields", "Evington", "Spinney Hills", "Belgrave", "Rushey Mead", "Beaumont Leys", "Braunstone", "Stoneygate", "West End", "Newfoundpool", "Humberstone", "Knighton", "Oadby", "Wigston"]}
      whyOnline="Leicester's Muslim community is one of the most established in the UK, with a strong tradition of Islamic education. But as families' lives become busier, the structured format of daily madrassa trips doesn't always work. Online one-to-one Quran classes with Ease Quran give Leicester families certified, high-quality Quran education on a schedule that actually fits — without leaving home."
      localPoints={[
        "Serves Leicester city and surrounding areas including Oadby and Wigston",
        "Flexible class times — evenings and weekends available",
        "English-medium teaching for Leicester-born Muslim children",
        "Dedicated female teacher available on request",
        "Certified teachers with Islamic qualifications — not anonymous tutors",
      ]}
      faqs={[
        { q: "Do you offer online Quran classes to families in Highfields and Evington?", a: "Yes — we serve families across all Leicester areas including Highfields, Evington, Spinney Hills, Belgrave, and beyond. Online classes remove all geographical barriers." },
        { q: "Are there timings available to suit Leicester school schedules?", a: "Yes. We offer classes after school (from 3pm), evenings, and weekends — all of which fit around Leicester's school timetables." },
        { q: "Can a Leicester family request a female Quran teacher?", a: "Yes. Our certified female teacher Almas Fatima is available for sisters and female students in Leicester. Simply request this when booking." },
        { q: "My child already goes to a local mosque — can Ease Quran complement this?", a: "Absolutely. Many families use Ease Quran for the one-to-one personalised attention it provides, alongside local mosque attendance. It's a very effective combination." },
        { q: "How do I book in Leicester?", a: "Use the free trial form on our website or WhatsApp us on +44 7311 254423. We'll confirm your free class within 24 hours." },
      ]}
    />
  );
}
