import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight, MapPin, Star, Users, Clock } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";
import VideoEmbed from "@/components/VideoEmbed";
import { MAIN_PLANS } from "@/lib/pricing";

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
  ["Leeds", "/locations/leeds"],
  ["Luton", "/locations/luton"],
  ["Glasgow", "/locations/glasgow"],
];

const coursesList = [
  { title: "Noorani Qaida", href: "/courses/noorani-qaida", desc: "For beginners and young children" },
  { title: "Quran Reading", href: "/courses/quran-reading", desc: "Build fluent recitation" },
  { title: "Hifz", href: "/courses/hifz", desc: "Quran memorisation" },
  { title: "Tajweed", href: "/courses/tajweed", desc: "Correct pronunciation" },
  { title: "Islamic Studies", href: "/courses/islamic-studies", desc: "Aqeedah, fiqh, seerah" },
  { title: "Tafseer", href: "/courses/tafseer", desc: "Understand the Quran" },
  { title: "Adult Quran Classes", href: "/adult-quran-classes", desc: "For adults and beginners" },
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
      <section className="relative bg-navy-900 text-white overflow-hidden min-h-[440px] flex items-center">
        <Image src="/city-hero.webp" alt={`Online Quran classes for families in ${city}`} fill className="object-cover opacity-15" sizes="100vw" />
        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 py-16 w-full">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Locations", href: "/locations" }, { label: city }]} />
          <div className="max-w-2xl mt-4">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={16} className="text-orange-500" />
              <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider">{city}, United Kingdom</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Online Quran classes in {city}
            </h1>
            <p className="text-navy-100 text-lg mb-6 leading-relaxed">{intro}</p>
            <div className="flex flex-wrap gap-3 mb-8 text-sm text-navy-100">
              <span className="flex items-center gap-1.5"><Star size={13} className="text-orange-500 fill-orange-500" /> Free first class</span>
              <span className="flex items-center gap-1.5"><Users size={13} className="text-orange-500" /> One-to-one lessons</span>
              <span className="flex items-center gap-1.5"><Clock size={13} className="text-orange-500" /> Flexible timings</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/free-trial" className="btn-gold">Book a free trial class</Link>
              <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-outline-white">WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Areas served + Why online */}
      <section className="section-pad">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-500 mb-3">Areas We Serve</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
                Quran classes across {city}
              </h2>
              <p className="text-gray-700 mb-5 leading-relaxed">
                Our online lessons are available to Muslim families across every area of {city}. Whether you are in the city centre or one of the surrounding neighbourhoods, all you need is a phone, tablet, or laptop and a stable internet connection. No travel, no parking, no wasted time.
              </p>
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <span key={a} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full text-sm text-gray-700 border border-gray-200">
                    <MapPin size={11} className="text-orange-500" /> {a}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-500 mb-3">Why Online Works</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
                Why {city} families choose online Quran classes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">{whyOnline}</p>
              <ul className="space-y-2.5">
                {localPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-orange-500 flex-shrink-0 mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Courses available */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-500 mb-2">What We Teach</span>
            <h2 className="text-2xl font-semibold text-navy-900">Courses available to {city} students</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coursesList.map((c) => (
              <Link key={c.href} href={c.href} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:border-orange-500/30 transition-all group">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-navy-900 group-hover:text-orange-600 transition-colors">{c.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{c.desc}</p>
                  </div>
                  <ChevronRight size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="section-pad">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-500 mb-2">Real Reviews</span>
            <h2 className="text-2xl font-semibold text-navy-900">What families across the UK say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <VideoEmbed videoId="u_j-zh0jFL8" title="Ease Quran UK Review — Saman Imran" reviewer="Saman Imran" />
            <VideoEmbed videoId="1eQ9zKKLWfQ" title="Ease Quran UK Review — Younas Rahman" reviewer="Younas Rahman" />
          </div>
        </div>
      </section>

      {/* Why choose us over a search for a local teacher */}
      <section className="section-pad">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-500 mb-2">Why Families Choose Us</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-navy-900">What to look for in a {city} Quran teacher</h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              When you search for a Quran teacher in {city}, you will find many academies making similar promises. Here is what actually sets Ease Quran UK apart, and what we would encourage any {city} parent to check before enrolling anywhere.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { label: "Verifiable credentials", detail: "Our teachers hold real, checkable qualifications, including certification from Wifaq ul Madaris Al-Arabia, not just a claim of being \"certified\"." },
              { label: "Genuinely one-to-one", detail: "Many academies fill group classes of several students per teacher. Every Ease Quran lesson is one student, one teacher, every time." },
              { label: "Full parental transparency", detail: `${city} parents can observe any class at any time. Nothing is hidden, and progress is shared regularly.` },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 border border-gray-100">
                <p className="text-navy-900 font-semibold text-sm mb-1.5">{item.label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-narrow mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-navy-900 mb-8 text-center">
            Questions from {city} families
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 shadow-eq-sm group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-navy-900 list-none">
                  {f.q}
                  <ChevronRight size={16} className="transform group-open:rotate-90 transition-transform flex-shrink-0 ml-3 text-orange-500" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Useful links for this city */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-navy-900 mb-5">Useful pages for {city} families</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/female-quran-teachers", title: "Female Quran Teacher", desc: "Available for sisters and daughters of all ages" },
              { href: "/pricing", title: "Pricing and Plans", desc: `From £${MAIN_PLANS[0].price30}/month, sibling discounts available` },
              { href: "/safety", title: "Child Safety Policy", desc: "How we keep every online class safe and open" },
              { href: "/about", title: "About Our Teachers", desc: "Meet Shah Zaib, Muhammad Umair, and Almas Fatima" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:border-orange-500/30 transition-all group">
                <p className="font-semibold text-navy-900 group-hover:text-orange-600 transition-colors text-sm mb-1">{link.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="section-pad">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-navy-900 mb-4">Also serving these UK cities</h2>
          <div className="flex flex-wrap gap-3">
            {allCities.filter(([l]) => l.toLowerCase() !== city.toLowerCase()).map(([l, h]) => (
              <Link key={h} href={h} className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-full text-sm font-semibold text-navy-900 border border-gray-200 hover:bg-navy-50 transition-colors">
                <MapPin size={12} className="text-orange-500" />
                Quran Classes in {l}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading={`Start Learning Today in ${city}`} />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
