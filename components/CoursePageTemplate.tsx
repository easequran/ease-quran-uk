import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight, Star, Users, Clock, Shield } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";

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
    offers: { "@type": "Offer", price: "30", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
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
        {/* Navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#122259]/95 via-[#122259]/80 to-[#122259]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: title }]} />
          <div className="max-w-2xl mt-6 text-white">
            <span className="inline-block bg-[#F5A623]/20 text-[#F5A623] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              {subtitle}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">{h1}</h1>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">{description}</p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-blue-100">
              <span className="flex items-center gap-1.5"><Star size={14} className="text-[#F5A623] fill-[#F5A623]" /> Free first class</span>
              <span className="flex items-center gap-1.5"><Users size={14} className="text-[#F5A623]" /> One-to-one lessons</span>
              <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#F5A623]" /> Flexible UK timings</span>
              <span className="flex items-center gap-1.5"><Shield size={14} className="text-[#F5A623]" /> Certified teacher</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/free-trial" className="btn-gold">Book Free Trial Class</Link>
              <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-outline-white">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll learn + Who it's for */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-3">Curriculum</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#122259] mb-6">What You Will Learn</h2>
              <ul className="space-y-3">
                {learn.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-[#F5A623] flex-shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-3">Who It Is For</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#122259] mb-6">Is This Course Right for You?</h2>
              <ul className="space-y-3">
                {whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-gray-700 bg-[#faf9f7] rounded-xl px-4 py-3">
                    <ChevronRight size={16} className="text-[#F5A623] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How classes work */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-3">How It Works</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#122259] mb-4">How the Classes Work</h2>
          <p className="text-gray-700 leading-relaxed text-base">{howWorks}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
            {[
              { label: "Format", value: "One-to-one online" },
              { label: "Duration", value: "30 minutes per class" },
              { label: "Timings", value: "Flexible UK slots" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                <p className="text-[#122259] font-bold text-base">{item.value}</p>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="section-pad">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#122259] rounded-2xl p-8 text-white text-center">
            <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest mb-2">Transparent Pricing</p>
            <h2 className="text-2xl font-bold mb-2">Plans from £30 per month</h2>
            <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">Two classes per week. No hidden fees, no long contracts. Cancel any time. Your first class is always free.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/pricing" className="bg-white text-[#122259] font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-colors">View Full Pricing</Link>
              <Link href="/free-trial" className="btn-gold text-sm px-6 py-2.5">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#122259] mb-8 text-center">Frequently Asked Questions</h2>
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

      {/* Related courses */}
      {related.length > 0 && (
        <section className="section-pad">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-lg font-bold text-[#122259] mb-4">Also Popular With Our Students</h2>
            <div className="flex flex-wrap gap-3">
              {related.map((r) => (
                <Link key={r.href} href={r.href} className="flex items-center gap-1.5 px-4 py-2.5 bg-[#faf9f7] rounded-xl text-sm font-semibold text-[#122259] border border-gray-200 hover:bg-[#122259] hover:text-white hover:border-[#122259] transition-colors">
                  {r.title} <ChevronRight size={12} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
