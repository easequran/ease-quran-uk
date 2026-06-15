import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Online Quran Classes in Manchester | Ease Quran UK",
  description: "Online Quran classes for Muslim families in Manchester. One-to-one lessons with certified teachers. Serving Rusholme, Longsight, Fallowfield, Cheetham Hill and more.",
  alternates: { canonical: "https://easequran.co.uk/locations/manchester" },
};

export default function Manchester() {
  return (
    <CityPageTemplate
      city="Manchester"
      slug="manchester"
      intro="One-to-one online Quran classes for Muslim families in Manchester. Qualified teachers, flexible UK timings, female teacher available. Your first class is completely free."
      areas={["Rusholme", "Longsight", "Fallowfield", "Cheetham Hill", "Moss Side", "Levenshulme", "Gorton", "Didsbury", "Withington", "Hulme", "Stretford", "Salford", "Oldham", "Rochdale"]}
      whyOnline="Manchester's Muslim community is vibrant and growing, but finding a truly reliable Quran teacher can be difficult. Many families in Rusholme, Longsight, and across Greater Manchester want consistent, quality Quran education that fits around demanding school and work schedules. Online classes with Ease Quran bring a certified teacher to your home screen — no traffic, no cancellations, no compromise on quality."
      localPoints={[
        "Serves families across Greater Manchester including Salford, Oldham, and Rochdale",
        "Flexible evening and weekend timings around school",
        "English-medium classes — ideal for Manchester-born Muslim children",
        "Female teacher option available for sisters",
        "Cancel or rearrange anytime — full flexibility",
      ]}
      faqs={[
        { q: "Do you offer Quran classes to families in Rusholme and Longsight?", a: "Yes — we serve families across Rusholme, Longsight, and all Manchester areas. As our classes are fully online, your location within Manchester doesn't limit what we can offer." },
        { q: "Can you teach children in Greater Manchester including Salford and Oldham?", a: "Absolutely. We serve the entire Greater Manchester area including Salford, Oldham, Rochdale, and beyond. Online classes have no geographical limitations." },
        { q: "What age groups do you teach in Manchester?", a: "We teach children from age 4 upwards, through to teenagers and adults. Our teachers adapt their approach to the student's age and level." },
        { q: "Is there a female Quran teacher available for Manchester sisters?", a: "Yes. Our certified female teacher Almas Fatima is available for sisters of all ages across Manchester. Mention this preference when booking your free trial." },
        { q: "How do I book a free trial in Manchester?", a: "Book via our website form or WhatsApp +44 7311 254423. We will be in touch within 2 hours to confirm your free one-to-one class." },
      ]}
    />
  );
}
