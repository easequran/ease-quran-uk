import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Online Quran Classes by UK Location",
  description: "Online Quran classes across the UK — London, Birmingham, Manchester, Bradford, Leicester and beyond. One-to-one, qualified teachers, free trial. Book now.",
  alternates: { canonical: "https://easequran.co.uk/locations" },
};

const cities = [
  { name: "London", href: "/locations/london", desc: "Serving families across East London, South London, Tower Hamlets, Ilford, Croydon, and beyond." },
  { name: "Birmingham", href: "/locations/birmingham", desc: "Online Quran classes for families in Small Heath, Sparkhill, Handsworth, Bordesley Green, and across Birmingham." },
  { name: "Manchester", href: "/locations/manchester", desc: "Serving Manchester families including Rusholme, Fallowfield, Longsight, Cheetham Hill, and surrounding areas." },
  { name: "Bradford", href: "/locations/bradford", desc: "One-to-one Quran classes for Bradford families in Manningham, Heaton, Toller, and across the district." },
  { name: "Leicester", href: "/locations/leicester", desc: "Online Quran education for families in Leicester's Highfields, Evington, Spinney Hills, and nearby areas." },
];

export default function Locations() {
  return (
    <>
      <div className="bg-[#faf9f7] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
          <h1 className="text-4xl font-bold text-[#122259] mt-4">Online Quran Classes Across the UK</h1>
          <p className="text-gray-600 mt-3 max-w-2xl">We teach students across the entire UK. Select your city below to find out more — or book your free trial and we&apos;ll match you with the right teacher wherever you are.</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link key={city.href} href={city.href} className="card p-6 hover:shadow-lg transition-shadow group">
                <h2 className="text-xl font-bold text-[#122259] mb-2 group-hover:text-[#FD9C02] transition-colors">
                  Online Quran Classes in {city.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{city.desc}</p>
                <span className="text-[#FD9C02] text-sm font-semibold flex items-center gap-1">
                  Learn more <ChevronRight size={14} />
                </span>
              </Link>
            ))}
            <div className="card p-6 bg-[#122259] text-white">
              <h2 className="text-xl font-bold mb-2">Your City Not Listed?</h2>
              <p className="text-blue-100 text-sm mb-4">We teach students across the entire UK — your location doesn&apos;t matter. Book a free trial and we&apos;ll find the right teacher for you.</p>
              <Link href="/free-trial" className="btn-gold text-sm py-2">Book Free Trial</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
