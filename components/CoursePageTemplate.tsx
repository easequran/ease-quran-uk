import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight, Star, Users, Clock, Shield } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";
import { MAIN_PLANS, CURRENCY } from "@/lib/pricing";

const ukCities = [
  { label: "London", href: "/locations/london" },
  { label: "Birmingham", href: "/locations/birmingham" },
  { label: "Manchester", href: "/locations/manchester" },
  { label: "Bradford", href: "/locations/bradford" },
  { label: "Leicester", href: "/locations/leicester" },
  { label: "Leeds", href: "/locations/leeds" },
  { label: "Luton", href: "/locations/luton" },
  { label: "Glasgow", href: "/locations/glasgow" },
];

interface FAQ { q: string; a: string }
interface CoursePageProps {
  h1: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  learn: string[];
  whoFor: string[];
  howWorks: string;
  faqs: FAQ[];
  related: Array<{ title: string; href: string }>;
  schemaDescription: string;
}

export default function CoursePageTemplate({
  h1, title, subtitle, description, image, imageAlt, slug, learn, whoFor, howWorks, faqs, related, schemaDescription,
}: CoursePageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: h1,
    description: schemaDescription,
    provider: { "@type": "Organization", name: "Ease Quran UK", url: "https://www.easequran.co.uk" },
    url: `https://www.easequran.co.uk/courses/${slug}`,
    offers: { "@type": "Offer", price: String(MAIN_PLANS[0].price30), priceCurrency: CURRENCY, availability: "https://schema.org/InStock" },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT30M",
      instructor: { "@type": "Organization", name: "Ease Quran UK" },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero — full-width background image */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        {/* Background course image */}
        <Image src={image} alt={imageAlt} fill className="object-cover object-center" priority sizes="100vw" />
        {/* Flat navy overlay (design system: no gradients) */}
        <div className="absolute inset-0 bg-navy-900/85" />

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 py-16 md:py-24 w-full">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: title }]} />
          <div className="max-w-2xl mt-6 text-white">
            <span className="inline-block bg-orange-500/20 text-orange-500 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
              {subtitle}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">{h1}</h1>
            <p className="text-navy-100 text-lg mb-6 leading-relaxed">{description}</p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-navy-100">
              <span className="flex items-center gap-1.5"><Star size={14} className="text-orange-500 fill-orange-500" /> Free first class</span>
              <span className="flex items-center gap-1.5"><Users size={14} className="text-orange-500" /> One-to-one lessons</span>
              <span className="flex items-center gap-1.5"><Clock size={14} className="text-orange-500" /> Flexible UK timings</span>
              <span className="flex items-center gap-1.5"><Shield size={14} className="text-orange-500" /> Certified teacher</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/free-trial" className="btn-gold">Book a free trial class</Link>
              <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-outline-white">WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll learn + Who it's for */}
      <section className="section-pad">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-500 mb-3">Curriculum</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-6">What you will learn</h2>
              <ul className="space-y-3">
                {learn.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-500 mb-3">Who It Is For</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-6">Is this course right for you?</h2>
              <ul className="space-y-3">
                {whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-gray-700 bg-gray-50 rounded-xl px-4 py-3">
                    <ChevronRight size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How classes work */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-narrow mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-500 mb-3">How It Works</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">How the classes work</h2>
          <p className="text-gray-700 leading-relaxed text-base">{howWorks}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
            {[
              { label: "Format", value: "One-to-one online" },
              { label: "Duration", value: "30 minutes per class" },
              { label: "Timings", value: "Flexible UK slots" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 text-center shadow-eq-sm border border-gray-100">
                <p className="text-navy-900 font-semibold text-base">{item.value}</p>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="section-pad">
        <div className="max-w-narrow mx-auto px-4 sm:px-6">
          <div className="bg-navy-900 rounded-2xl p-8 text-white text-center">
            <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-2">Transparent Pricing</p>
            <h2 className="text-2xl font-semibold mb-2">Plans from £{MAIN_PLANS[0].price30} per month</h2>
            <p className="text-navy-100 text-sm mb-6 max-w-md mx-auto">Two classes per week. No hidden fees, no registration fee, no long contracts. Cancel any time. Your first class is always free.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/pricing" className="btn-outline-white text-sm py-2.5">View full pricing</Link>
              <Link href="/free-trial" className="btn-gold text-sm px-6 py-2.5">Book free trial</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-narrow mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-navy-900 mb-8 text-center">Frequently asked questions</h2>
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

      {/* Related courses */}
      {related.length > 0 && (
        <section className="section-pad">
          <div className="max-w-narrow mx-auto px-4 sm:px-6">
            <h2 className="text-lg font-semibold text-navy-900 mb-4">Also popular with our students</h2>
            <div className="flex flex-wrap gap-3">
              {related.map((r) => (
                <Link key={r.href} href={r.href} className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-50 rounded-full text-sm font-semibold text-navy-900 border border-gray-200 hover:bg-navy-50 transition-colors">
                  {r.title} <ChevronRight size={12} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Available across the UK */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-narrow mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-navy-900 mb-4">Available to families across the UK</h2>
          <div className="flex flex-wrap gap-3">
            {ukCities.map((c) => (
              <Link key={c.href} href={c.href} className="flex items-center gap-1.5 px-4 py-2.5 bg-white rounded-full text-sm font-semibold text-navy-900 border border-gray-200 hover:bg-navy-50 transition-colors">
                {c.label} <ChevronRight size={12} />
              </Link>
            ))}
            <Link href="/locations" className="flex items-center gap-1.5 px-4 py-2.5 bg-white rounded-full text-sm font-semibold text-orange-600 border border-gray-200 hover:bg-navy-50 transition-colors">
              All Locations <ChevronRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
