import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Online Quran Classes by UK Location",
  description: "Online Quran classes across the UK. London, Birmingham, Manchester, Bradford, Leicester and beyond. One-to-one, qualified teachers, free trial.",
  alternates: { canonical: "https://easequran.co.uk/locations" },
};

const cities = [
  {
    name: "London",
    href: "/locations/london",
    areas: "Tower Hamlets, Ilford, Newham, Croydon and more",
    desc: "Serving Muslim families across all London boroughs with flexible after-school and weekend timings.",
  },
  {
    name: "Birmingham",
    href: "/locations/birmingham",
    areas: "Small Heath, Sparkhill, Handsworth, Bordesley Green",
    desc: "One-to-one online classes for Birmingham families, available around school schedules.",
  },
  {
    name: "Manchester",
    href: "/locations/manchester",
    areas: "Rusholme, Longsight, Fallowfield, Cheetham Hill",
    desc: "Qualified Quran teachers for Manchester and Greater Manchester families.",
  },
  {
    name: "Bradford",
    href: "/locations/bradford",
    areas: "Manningham, Heaton, Toller, Great Horton",
    desc: "Certified teachers for Bradford families, taught in English at flexible UK timings.",
  },
  {
    name: "Leicester",
    href: "/locations/leicester",
    areas: "Highfields, Evington, Spinney Hills, Belgrave",
    desc: "Online Quran education for Leicester families with a dedicated female teacher option.",
  },
];

export default function Locations() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#122259] text-white overflow-hidden">
        <Image src="/city-hero.webp" alt="Online Quran classes across UK cities" fill className="object-cover opacity-20" sizes="100vw" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
          <div className="mt-4 max-w-2xl">
            <span className="tag mb-3 inline-block">Across the UK</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Online Quran Classes Across the UK</h1>
            <p className="text-blue-100 text-lg">
              Our certified teachers serve Muslim families in every UK city. Select your city below or book a free trial and we will match you with the right teacher wherever you are.
            </p>
          </div>
        </div>
      </section>

      {/* City cards */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="group card p-7 hover:shadow-xl transition-all hover:-translate-y-0.5 duration-200 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#122259]/8 flex items-center justify-center">
                    <MapPin size={18} className="text-[#F5A623]" />
                  </div>
                  <ChevronRight size={18} className="text-gray-300 group-hover:text-[#F5A623] transition-colors mt-1" />
                </div>
                <h2 className="text-xl font-bold text-[#122259] mb-1 group-hover:text-[#F5A623] transition-colors">
                  {city.name}
                </h2>
                <p className="text-xs text-[#F5A623] font-medium mb-3">{city.areas}</p>
                <p className="text-gray-600 text-sm flex-1 leading-relaxed">{city.desc}</p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-sm font-semibold text-[#122259] group-hover:text-[#F5A623] transition-colors">
                    View classes in {city.name}
                  </span>
                </div>
              </Link>
            ))}

            {/* Not listed card */}
            <div className="card p-7 bg-[#122259] text-white flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <MapPin size={18} className="text-[#F5A623]" />
                </div>
                <h2 className="text-xl font-bold mb-2">Anywhere in the UK</h2>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Your city not listed? We teach students across the entire UK. Our classes are fully online so location is never a barrier.
                </p>
              </div>
              <Link href="/free-trial" className="btn-gold mt-6 text-sm py-2.5 text-center justify-center">
                Book Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why online */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="tag mb-3 inline-block">Why Online Works</span>
          <h2 className="text-3xl font-bold text-[#122259] mb-4">The Teacher Comes to You</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Finding a qualified, consistent Quran teacher near you in the UK is genuinely difficult. Our one-to-one online classes remove the geography entirely. A certified teacher meets your child on screen at the agreed time, every week, at hours that fit around school and work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
            {[
              { label: "No commute", detail: "Classes happen at home, on a device you already own" },
              { label: "Any UK city", detail: "We teach students from Cornwall to Scotland" },
              { label: "Flexible timings", detail: "Evenings, weekends, after school — your schedule" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-5 shadow-sm text-left">
                <p className="font-bold text-[#122259] mb-1">{item.label}</p>
                <p className="text-gray-500 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
