import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Classes in London | Ease Quran UK",
  description: "Online Quran classes for families in London. One-to-one lessons with qualified teachers for kids and adults. Serving East London, Tower Hamlets, Ilford, Croydon and more.",
  alternates: { canonical: "https://easequran.co.uk/locations/london" },
};

export default function London() {
  return (
    <CityPageTemplate
      city="London"
      slug="london"
      intro="Trusted one-to-one online Quran classes for Muslim families across London. Qualified male and female teachers, flexible timings around school and work, and a free first class — no commitment."
      areas={["Tower Hamlets", "Ilford", "Newham", "Walthamstow", "Hackney", "Croydon", "Lewisham", "Brent", "Harrow", "Southwark", "Greenwich", "East Ham", "Seven Kings", "Whitechapel"]}
      whyOnline="London families face unique challenges when it comes to Quran education. Traffic, long commutes, and busy schedules make travelling to a madrassa difficult — and the quality of provision varies widely. Online one-to-one classes with Ease Quran solve this entirely: a qualified, vetted teacher arrives at your child's screen at the agreed time, every time."
      localPoints={[
        "No commute — perfect for London's busy family life",
        "Flexible timings including after school (3–8pm) and weekends",
        "Available across all London boroughs — east, west, north, south",
        "Female teachers available for sisters in conservative families",
        "Classes in English — ideal for London-born Muslim children",
      ]}
      faqs={[
        { q: "Do you offer online Quran classes to families in East London?", a: "Yes — we serve families across all areas of East London including Tower Hamlets, Ilford, Newham, Walthamstow, Hackney, and East Ham. Classes are fully online so your location within London doesn't matter." },
        { q: "Are there Quran classes available in South London?", a: "Yes. We teach students in Croydon, Lewisham, Southwark, Greenwich, and all South London areas. Online classes mean no geographical restrictions." },
        { q: "What timings are available for London students?", a: "We offer classes at flexible UK time slots including after school (3pm–8pm) and weekends — ideal for London families with school-age children." },
        { q: "Is a female Quran teacher available for London sisters?", a: "Yes. Our certified female teacher Almas Fatima is available for sisters and daughters across London. Simply request a female teacher when booking." },
        { q: "How much does a Quran class cost in London?", a: "Our online plans start from £30/month for 2 classes per week. There are no hidden fees, and the first class is completely free." },
      ]}
    />
  );
}
