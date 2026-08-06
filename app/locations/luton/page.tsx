import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Classes in Luton",
  description: "One-to-one online Quran classes for Muslim families in Luton. Certified teachers, flexible timings. Serving Bury Park, Marsh Farm, High Town. Free first class.",
  openGraph: { url: "/locations/luton" },
  alternates: {
    canonical: "/locations/luton",
  },
};

export default function Luton() {
  return (
    <CityPageTemplate
      city="Luton"
      slug="luton"
      intro="Trusted one-to-one online Quran classes for Muslim families across Luton. Certified male and female teachers, flexible UK timings, and a free first class with no commitment needed."
      areas={["Bury Park", "Marsh Farm", "Biscot", "High Town", "Dallow", "Farley Hill", "Round Green", "Lewsey", "Leagrave", "Saints", "Bushmead", "Icknield", "Stopsley", "Hockwell Ring"]}
      whyOnline="Luton has one of the largest Muslim populations per capita of any town in the UK, with a strong, close-knit community across Bury Park, Marsh Farm, and High Town. Even so, fitting a daily madrassa run around school pickups, work shifts, and family life is genuinely hard for many Luton parents. Ease Quran brings a certified teacher straight to your child's screen, at a time that works for your household, without any travel across town. Families throughout Luton rely on us for exactly this convenience."
      localPoints={[
        "No travel across Luton, classes come straight to your home",
        "Flexible timings including after school (3pm to 8pm) and weekends",
        "Available across all Luton neighbourhoods, from Bury Park to Stopsley",
        "Female teacher available for sisters and daughters",
        "All lessons in English, ideal for Luton-born Muslim children",
        "One-to-one attention, not a shared class with other children",
      ]}
      faqs={[
        { q: "Do you offer online Quran classes to families in Bury Park and Marsh Farm?", a: "Yes, we serve families across all of Luton including Bury Park, Marsh Farm, High Town, Biscot, Dallow, and surrounding areas. Because classes are fully online, your location within Luton makes no difference at all." },
        { q: "Are there Quran classes available across all of Luton?", a: "Yes. We teach students throughout Luton, including Leagrave, Round Green, Stopsley, and Lewsey. Being online means there are no geographical restrictions for any family." },
        { q: "What timings are available for Luton students?", a: "We offer classes at flexible UK time slots including after school (3pm to 8pm) and weekends, ideal for Luton families with school-age children and working parents." },
        { q: "Is a female Quran teacher available for Luton sisters?", a: "Yes. Our certified female teacher Almas Fatima is available for sisters and daughters across Luton. Simply request a female teacher when booking your free trial." },
        { q: "Can Ease Quran complement a local Luton madrassa?", a: "Yes, many Luton families use Ease Quran alongside local mosque education for the one-to-one, personalised attention it adds. Parents can observe any class at any time." },
        { q: "How much does a Quran class cost in Luton?", a: "Our online plans start from £32 per month for 2 classes per week. There are no hidden fees, and the first class is completely free with no obligation to continue." },
        { q: "Is online Quran learning actually as effective as in-person classes?", a: "For most Luton families, yes, and often more so. One-to-one online attention means every mistake is caught and corrected in the moment, something a crowded in-person class cannot always offer. What matters most is consistency and a qualified teacher, both of which we guarantee." },
      ]}
    />
  );
}
