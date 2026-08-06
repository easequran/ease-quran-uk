import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Classes in Leeds",
  description: "One-to-one online Quran classes for Muslim families in Leeds. Certified teachers, flexible timings. Serving Beeston, Harehills, Chapeltown. Free first class.",
  openGraph: { url: "/locations/leeds" },
  alternates: {
    canonical: "/locations/leeds",
  },
};

export default function Leeds() {
  return (
    <CityPageTemplate
      city="Leeds"
      slug="leeds"
      intro="Trusted one-to-one online Quran classes for Muslim families across Leeds. Certified male and female teachers, flexible UK timings around school and work, and a free first class with no commitment."
      areas={["Beeston", "Harehills", "Chapeltown", "Hyde Park", "Armley", "Gipton", "Roundhay", "Chapel Allerton", "Burley", "Headingley", "Cross Green", "Little London", "Moortown", "Farnley"]}
      whyOnline="Leeds is home to a large and well-established Muslim community, with families across Beeston, Harehills, and Chapeltown looking for consistent, quality Quran education. But getting a child to a local madrassa after a full school day, often in the evening rush, is not always realistic for busy Leeds families. Ease Quran removes the commute entirely: a certified teacher joins your child on screen at the agreed time, every week, without anyone leaving the house. Families across Leeds choose us for exactly this reason."
      localPoints={[
        "No commute, ideal for Leeds families juggling school and work",
        "Flexible timings including after school (3pm to 8pm) and weekends",
        "Available across all Leeds neighbourhoods, from Beeston to Chapel Allerton",
        "Female teacher available for sisters and daughters",
        "All lessons in English, ideal for Leeds-born Muslim children",
        "One-to-one attention your child will not get in a crowded class",
      ]}
      faqs={[
        { q: "Do you offer online Quran classes to families in Beeston and Harehills?", a: "Yes, we serve families across all of Leeds including Beeston, Harehills, Chapeltown, Hyde Park, Armley, Gipton, and surrounding areas. Because classes are fully online, your location within Leeds makes no difference at all." },
        { q: "Are there Quran classes available across Greater Leeds?", a: "Yes. We teach students throughout Leeds and the wider district, including Roundhay, Chapel Allerton, Headingley, and Moortown. Being online means there are no geographical restrictions for any family." },
        { q: "What timings are available for Leeds students?", a: "We offer classes at flexible UK time slots including after school (3pm to 8pm) and weekends, ideal for Leeds families with school-age children and working parents." },
        { q: "Is a female Quran teacher available for Leeds sisters?", a: "Yes. Our certified female teacher Almas Fatima is available for sisters and daughters across Leeds. Simply request a female teacher when booking your free trial." },
        { q: "How does this compare to a local Leeds madrassa?", a: "It is a strong complement to local madrassa or mosque attendance. Our one-to-one format means your child gets individual correction and pace that a group class cannot always provide, and parents can observe any lesson." },
        { q: "How much does a Quran class cost in Leeds?", a: "Our online plans start from £32 per month for 2 classes per week. There are no hidden fees, and the first class is completely free with no obligation to continue." },
        { q: "Is online Quran learning actually as effective as in-person classes?", a: "For most Leeds families, yes, and often more so. One-to-one online attention means every mistake is caught and corrected in the moment, something a crowded in-person class cannot always offer. What matters most is consistency and a qualified teacher, both of which we guarantee." },
      ]}
    />
  );
}
