import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Classes in London",
  description: "One-to-one online Quran classes for Muslim families in London. Qualified male and female teachers, flexible timings around school and work. Serving Tower Hamlets, Ilford, Newham, Hackney and all London boroughs. Free first class.",
  openGraph: { url: "/locations/london" },
  alternates: {
    canonical: "/locations/london",
  },
};

export default function London() {
  return (
    <CityPageTemplate
      city="London"
      slug="london"
      intro="Trusted one-to-one online Quran classes for Muslim families across London. Qualified male and female teachers, flexible UK timings around school and work, and a free first class with no commitment."
      areas={["Tower Hamlets", "Ilford", "Newham", "Walthamstow", "Hackney", "Croydon", "Lewisham", "Brent", "Harrow", "Southwark", "Greenwich", "East Ham", "Seven Kings", "Whitechapel", "Stratford", "Barking"]}
      whyOnline="London has one of the largest Muslim communities in the UK, spread across dozens of boroughs from Tower Hamlets and Newham in the east to Brent and Harrow in the north west. But finding consistent, quality Quran education in a city this busy is surprisingly difficult. Commuting to a madrassa after school means traffic, parking, and precious family time gone. With Ease Quran, a certified teacher is at your child's screen at the agreed time, every single week, without anyone leaving home. Families in Ilford, Croydon, Walthamstow, and right across London choose us for exactly this reason."
      localPoints={[
        "No commute — perfect for London's busy family schedule",
        "Flexible timings including after school (3pm to 8pm) and weekends",
        "Available across all London boroughs — east, west, north, and south",
        "Female teacher available for sisters and daughters",
        "All lessons in English — ideal for London-born Muslim children",
        "One-to-one attention your child simply cannot get in a group class",
      ]}
      faqs={[
        { q: "Do you offer online Quran classes to families in East London?", a: "Yes — we serve families across all of East London including Tower Hamlets, Ilford, Newham, Walthamstow, Hackney, Stratford, East Ham, and surrounding areas. Because classes are fully online, your location within London makes no difference at all." },
        { q: "Are there Quran classes available in South London?", a: "Yes. We teach students in Croydon, Lewisham, Southwark, Greenwich, Catford, and throughout South London. Being online means there are no geographical restrictions for any family." },
        { q: "What timings are available for London students?", a: "We offer classes at flexible UK time slots including after school (3pm to 8pm) and weekends — ideal for London families with school-age children and working parents." },
        { q: "Is a female Quran teacher available for London sisters?", a: "Yes. Our certified female teacher Almas Fatima is available for sisters and daughters across London. Simply request a female teacher when booking your free trial." },
        { q: "How much does a Quran class cost in London?", a: "Our online plans start from £30 per month for 2 classes per week. There are no hidden fees, and the first class is completely free with no obligation to continue." },
      ]}
    />
  );
}
