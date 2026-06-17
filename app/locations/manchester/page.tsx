import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Classes in Manchester",
  description: "One-to-one online Quran classes for Muslim families in Manchester. Certified teachers, flexible UK timings. Serving Rusholme, Longsight, Cheetham Hill, Levenshulme and more. Free first class.",
  openGraph: { url: "/locations/manchester" },
  alternates: {
    canonical: "/locations/manchester",
  },
};

export default function Manchester() {
  return (
    <CityPageTemplate
      city="Manchester"
      slug="manchester"
      intro="One-to-one online Quran classes for Muslim families across Manchester and Greater Manchester. Qualified male and female teachers, flexible UK timings, and a completely free first class."
      areas={["Rusholme", "Longsight", "Fallowfield", "Cheetham Hill", "Moss Side", "Levenshulme", "Gorton", "Didsbury", "Withington", "Hulme", "Stretford", "Salford", "Oldham", "Rochdale", "Bolton"]}
      whyOnline="Manchester has a vibrant and growing Muslim community, from Rusholme's 'Curry Mile' corridor to the neighbourhoods of Longsight, Levenshulme, and Cheetham Hill. But finding a genuinely reliable Quran teacher in the area is harder than it should be. Many parents we speak to have tried local options only to deal with inconsistency and last-minute cancellations. With Ease Quran, a certified teacher joins your child's lesson online at the agreed time, every week, without anyone having to step outside."
      localPoints={[
        "Serves families across Greater Manchester including Salford, Oldham, and Rochdale",
        "Flexible evening and weekend timings to fit around school",
        "All lessons in English — ideal for Manchester-born Muslim children",
        "Female teacher available for sisters and daughters",
        "Cancel or reschedule with reasonable notice — no rigid contracts",
        "Parents can observe any class, any time",
      ]}
      faqs={[
        { q: "Do you offer Quran classes to families in Rusholme and Longsight?", a: "Yes — we serve families across Rusholme, Longsight, Cheetham Hill, and all Manchester areas. Being fully online means your location within Manchester makes no difference." },
        { q: "Can you teach children in Greater Manchester including Salford and Oldham?", a: "Absolutely. We serve the entire Greater Manchester area including Salford, Oldham, Rochdale, Bolton, and beyond. Our online lessons have no geographical limits." },
        { q: "What age groups do you teach in Manchester?", a: "We teach children from age 4 upwards, as well as teenagers and adults. Our teachers adapt their approach to the student's age, level, and learning style." },
        { q: "Is there a female Quran teacher available for Manchester sisters?", a: "Yes. Our certified female teacher Almas Fatima is available for sisters of all ages across Manchester and Greater Manchester. Simply mention this when booking." },
        { q: "How do I book a free trial in Manchester?", a: "Book via our free trial form or WhatsApp us on +44 7311 254423. We will confirm your free one-to-one class within 2 hours." },
      ]}
    />
  );
}
