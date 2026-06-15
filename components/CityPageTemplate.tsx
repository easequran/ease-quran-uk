import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight } from "lucide-react";
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

export default function CityPageTemplate({ city, slug, intro, areas, whyOnline, localPoints, faqs }: CityPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://easequran.co.uk/locations/${slug}`,
    name: "Ease Quran UK",
    url: `https://easequran.co.uk/locations/${slug}`,
    telephone: "+447311254423",
    email: "info@easequran.co.uk",
    areaServed: [
      { "@type": "City", name: city, addressCountry: "GB" },
    ],
    description: `Online Quran classes for families in ${city}, UK. One-to-one lessons with qualified teachers.`,
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://easequran.co.uk" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://easequran.co.uk/locations" },
      { "@type": "ListItem", position: 3, name: `Online Quran Classes in ${city}`, item: `https://easequran.co.uk/locations/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-[#122259] text-white overflow-hidden min-h-[420px] flex items-center">
        <Image src="/city-hero.webp" alt={`Online Quran classes for families in ${city}`} fill className="object-cover opacity-20" sizes="100vw" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Locations", href: "/locations" }, { label: city }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4">Online Quran Classes in {city}</h1>
          <p className="text-blue-100 text-lg max-w-2xl mb-8">{intro}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-trial" className="btn-gold">Book Free Trial</Link>
            <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-outline-white">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="tag mb-4 inline-block">Areas We Serve</span>
              <h2 className="text-2xl font-bold text-[#122259] mb-4">Quran Classes Across {city}</h2>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Our online classes mean geography is no barrier. We serve families across all areas of {city} — from the city centre to surrounding neighbourhoods. All you need is a phone, tablet, or laptop and an internet connection.
              </p>
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <span key={a} className="px-3 py-1.5 bg-[#faf9f7] rounded-full text-sm text-gray-700 border border-gray-200">{a}</span>
                ))}
              </div>
            </div>
            <div>
              <span className="tag mb-4 inline-block">Why Online Works</span>
              <h2 className="text-2xl font-bold text-[#122259] mb-4">Why {city} Families Choose Online Classes</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{whyOnline}</p>
              <ul className="space-y-2">
                {localPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#FD9C02] flex-shrink-0 mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#122259] mb-6 text-center">Courses Available in {city}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Noorani Qaida", href: "/courses/noorani-qaida" },
              { title: "Quran Reading", href: "/courses/quran-reading" },
              { title: "Hifz", href: "/courses/hifz" },
              { title: "Tajweed", href: "/courses/tajweed" },
              { title: "Islamic Studies", href: "/courses/islamic-studies" },
              { title: "Tafseer", href: "/courses/tafseer" },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="card p-4 text-center hover:shadow-md transition-shadow group">
                <p className="font-semibold text-[#122259] text-sm group-hover:text-[#FD9C02] transition-colors">{c.title}</p>
                <ChevronRight size={12} className="text-[#FD9C02] mx-auto mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#122259] mb-8 text-center">What UK Families Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <VideoEmbed videoId="u_j-zh0jFL8" title="Ease Quran UK Review — Saman Imran" reviewer="Saman Imran (UK)" />
            <VideoEmbed videoId="1eQ9zKKLWfQ" title="Ease Quran UK Review — Younas Rahman" reviewer="Younas Rahman (UK)" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#122259] mb-8 text-center">Frequently Asked Questions — {city}</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-[#122259] list-none">
                  {f.q} <ChevronRight size={16} className="transform group-open:rotate-90 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-[#122259] mb-5">Also Available In</h2>
          <div className="flex flex-wrap gap-3">
            {[["London", "/locations/london"], ["Birmingham", "/locations/birmingham"], ["Manchester", "/locations/manchester"], ["Bradford", "/locations/bradford"], ["Leicester", "/locations/leicester"]].filter(([l]) => l.toLowerCase() !== city.toLowerCase()).map(([l, h]) => (
              <Link key={h} href={h} className="px-4 py-2 bg-[#faf9f7] rounded-full text-sm font-semibold text-[#122259] border border-gray-200 hover:bg-[#122259] hover:text-white transition-colors">
                Quran Classes in {l}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading={`Start Your Free Trial — Serving ${city} Families`} />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
