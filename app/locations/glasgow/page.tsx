import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Classes in Glasgow",
  description: "One-to-one online Quran classes for Muslim families in Glasgow. Certified teachers, flexible timings. Serving Pollokshields, Govanhill, Shawlands. Free first class.",
  openGraph: { url: "/locations/glasgow" },
  alternates: {
    canonical: "/locations/glasgow",
  },
};

export default function Glasgow() {
  return (
    <CityPageTemplate
      city="Glasgow"
      slug="glasgow"
      intro="Trusted one-to-one online Quran classes for Muslim families across Glasgow. Certified male and female teachers, flexible UK timings, and a free first class with no commitment needed."
      areas={["Pollokshields", "Govanhill", "Shawlands", "Gorbals", "Kinning Park", "Battlefield", "Ibrox", "Cardonald", "Toryglen", "Crosshill", "Mount Florida", "Dennistoun", "Maryhill", "Milton"]}
      whyOnline="Glasgow's Muslim community, concentrated around the Southside in Pollokshields, Govanhill, and Shawlands, has a long tradition of Islamic education. But Scottish winters, early evenings, and busy family schedules make the regular commute to a local madrassa harder than it should be. Ease Quran brings a certified, English-speaking teacher directly to your child's screen, at a time that suits your family, with nobody needing to leave the house in the cold or the dark. Families across Glasgow choose us for exactly this reason."
      localPoints={[
        "No commute needed, especially valued during Glasgow's winter evenings",
        "Flexible timings including after school (3pm to 8pm) and weekends",
        "Available across all Glasgow neighbourhoods, from Pollokshields to Maryhill",
        "Female teacher available for sisters and daughters",
        "All lessons in English, ideal for Glasgow-born Muslim children",
        "One-to-one attention your child will not get in a shared class",
      ]}
      faqs={[
        { q: "Do you offer online Quran classes to families in Pollokshields and Govanhill?", a: "Yes, we serve families across all of Glasgow including Pollokshields, Govanhill, Shawlands, Gorbals, Kinning Park, and surrounding areas. Because classes are fully online, your location within Glasgow makes no difference at all." },
        { q: "Are there Quran classes available across all of Glasgow, not just the Southside?", a: "Yes. We teach students throughout Glasgow, including Dennistoun, Maryhill, Milton, and beyond. Being online means there are no geographical restrictions for any family." },
        { q: "What timings are available for Glasgow students?", a: "We offer classes at flexible UK time slots including after school (3pm to 8pm) and weekends, ideal for Glasgow families with school-age children and working parents." },
        { q: "Is a female Quran teacher available for Glasgow sisters?", a: "Yes. Our certified female teacher Almas Fatima is available for sisters and daughters across Glasgow. Simply request a female teacher when booking your free trial." },
        { q: "Can Ease Quran complement a local Glasgow mosque or madrassa?", a: "Yes, many Glasgow families use Ease Quran alongside local mosque education for the one-to-one, personalised attention it adds. Parents can observe any class at any time." },
        { q: "How much does a Quran class cost in Glasgow?", a: "Our online plans start from £30 per month for 2 classes per week. There are no hidden fees, and the first class is completely free with no obligation to continue." },
        { q: "Is online Quran learning actually as effective as in-person classes?", a: "For most Glasgow families, yes, and often more so. One-to-one online attention means every mistake is caught and corrected in the moment, something a crowded in-person class cannot always offer. What matters most is consistency and a qualified teacher, both of which we guarantee." },
      ]}
    />
  );
}
