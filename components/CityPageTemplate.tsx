import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight, MapPin, Star, Users, Clock } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";
import VideoEmbed from "@/components/VideoEmbed";

interface FAQ { q: string; a: string }
interface CityPageProps {
  city: string;
  slug: string;
  intro: string;
  areas: string[];
  whyOnline: string;
  localPoints: string[];
  faqs: FAQ[];
}

const allCities = [
  ["London", "/locations/london"],
  ["Birmingham", "/locations/birmingham"],
  ["Manchester", "/locations/manchester"],
  ["Bradford", "/locations/bradford"],
  ["Leicester", "/locations/leicester"],
];

const coursesList = [
  { title: "Noorani Qaida", href: "/courses/noorani-qaida", desc: "For beginners and young children" },
  { title: "Quran Reading", href: "/courses/quran-reading", desc: "Build fluent recitation" },
  { title: "Hifz", href: "/courses/hifz", desc: "Quran memorisation" },
  { title: "Tajweed", href: "/courses/tajweed", desc: "Correct pronunciation" },
  { title: "Islamic Studies", href: "/courses/islamic-studies", desc: "Aqeedah, fiqh, seerah" },
  { title: "Tafseer", href: "/courses/tafseer", desc: "Understand the Quran" },
];

export default function CityPageTemplate({ city, slug, intro, areas, whyOnline, localPoints, faqs }: CityPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.easequran.co.uk/locations/${slug}`,
    name: "Ease Quran UK",
    url: `https://www.easequran.co.uk/locations/${slug}`,
    telephone: "+447311254423",
    email: "info@easequran.co.uk",
    areaServed: { "@type": "City", name: city, addressCountry: "GB" },
    description: `Online Quran classes for families in ${city}, UK. One-to-one lessons with qualified teachers. Free first class.`,
    sameAs: ["https://www.facebook.com/easequran", "https://www.instagram.com/contacteasequran/"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.easequran.co.uk" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.easequran.co.uk/locations" },
      { "@type": "ListItem", position: 3, name: `Online Quran Classes in ${city}`, item: `https://www.easequran.co.uk/locations/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-[#122259] text-white overflow-hidden min-h-[440px] flex items-center">
        <Image src="/city-hero.webp" alt={`Online Quran classes for families in ${city}`} fill className="object-cover opacity-15" sizes="100vw" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Locations", href: "/locations" }, { label: city }]} />
          <div className="max-w-2xl mt-4">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={16} className="text-[#F5A623]" />
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-widest">{city}, United Kingdom</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Online Quran Classes in {city}
            </h1>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">{intro}</p>
            <div className="flex flex-wrap gap-3 mb-8 text-sm text-blue-100">
              <span className="flex items-center gap-1.5"><Star size={13} className="text-[#F5A623] fill-[#F5A623]" /> Free first class</span>
              <span className="flex items-center gap-1.5"><Users size={13} className="text-[#F5A623]" /> One-to-one lessons</span>
              <span className="flex items-center gap-1.5"><Clock size={13} className="text-[#F5A623]" /> Flexible timings</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/free-trial" className="btn-gold">Book Free Trial Class</Link>
              <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-outline-white">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Areas served + Why online */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-3">Areas We Serve</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#122259] mb-4">
                Quran Classes Across {city}
              </h2>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Our online lessons are available to Muslim families across every area of {city}. Whether you are in the city centre or one of the surrounding neighbourhoods, all you need is a phone, tablet, or laptop and a stable internet connection. No travel, no parking, no wasted time.
              </p>
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <span key={a} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#faf9f7] rounded-full text-sm text-gray-700 border border-gray-200">
                    <MapPin size={11} className="text-[#F5A623]" /> {a}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-3">Why Online Works</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#122259] mb-4">
                Why {city} Families Choose Online Quran Classes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">{whyOnline}</p>
              <ul className="space-y-2.5">
                {localPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#F5A623] flex-shrink-0 mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Courses available */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-2">What We Teach</span>
            <h2 className="text-2xl font-bold text-[#122259]">Courses Available to {city} Students</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coursesList.map((c) => (
              <Link key={c.href} href={c.href} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:border-[#F5A623]/30 transition-all group">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold text-[#122259] group-hover:text-[#F5A623] transition-colors">{c.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{c.desc}</p>
                  </div>
                  <ChevronRight size={14} className="text-[#F5A623] flex-shrink-0 mt-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-2">Real Reviews</span>
            <h2 className="text-2xl font-bold text-[#122259]">What Families Across the UK Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <VideoEmbed videoId="u_j-zh0jFL8" title="Ease Quran UK Review — Saman Imran" reviewer="Saman Imran" />
            <VideoEmbed videoId="1eQ9zKKLWfQ" title="Ease Quran UK Review — Younas Rahman" reviewer="Younas Rahman" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#122259] mb-8 text-center">
            Questions from {city} Families
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-[#122259] list-none">
                  {f.q}
                  <ChevronRight size={16} className="transform group-open:rotate-90 transition-transform flex-shrink-0 ml-3 text-[#F5A623]" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-bold text-[#122259] mb-4">Also Serving These UK Cities</h2>
          <div className="flex flex-wrap gap-3">
            {allCities.filter(([l]) => l.toLowerCase() !== city.toLowerCase()).map(([l, h]) => (
              <Link key={h} href={h} className="flex items-center gap-2 px-4 py-2.5 bg-[#faf9f7] rounded-xl text-sm font-semibold text-[#122259] border border-gray-200 hover:bg-[#122259] hover:text-white hover:border-[#122259] transition-colors">
                <MapPin size={12} className="text-[#F5A623]" />
                Quran Classes in {l}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading={`Book Your Free Trial — Serving Families in ${city}`} />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
