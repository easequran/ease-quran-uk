import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import Breadcrumb from "@/components/Breadcrumb";

interface FAQ { q: string; a: string }
interface CoursePageProps {
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
  title, subtitle, description, image, imageAlt, slug, learn, whoFor, howWorks, faqs, related, schemaDescription,
}: CoursePageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: title,
    description: schemaDescription,
    provider: { "@type": "Organization", name: "Ease Quran UK", url: "https://easequran.co.uk" },
    url: `https://easequran.co.uk/courses/${slug}`,
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

      {/* Hero */}
      <section className="relative bg-[#122259] text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }, { label: title }]} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-6">
            <div>
              <span className="tag mb-4 inline-block">{subtitle}</span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">{title}</h1>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">{description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/free-trial" className="btn-gold">Book Free Trial</Link>
                <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-outline-white">WhatsApp Us</a>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image src={image} alt={imageAlt} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="tag mb-4 inline-block">Curriculum</span>
              <h2 className="text-3xl font-bold text-[#122259] mb-6">What You&apos;ll Learn</h2>
              <ul className="space-y-3">
                {learn.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-[#FD9C02] flex-shrink-0 mt-0.5" /> {l}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="tag mb-4 inline-block">Who It&apos;s For</span>
              <h2 className="text-3xl font-bold text-[#122259] mb-6">Is This Course Right for You?</h2>
              <ul className="space-y-3">
                {whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-gray-700">
                    <ChevronRight size={18} className="text-[#FD9C02] flex-shrink-0 mt-0.5" /> {w}
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
          <span className="tag mb-4 inline-block">How It Works</span>
          <h2 className="text-3xl font-bold text-[#122259] mb-4">How the Classes Work</h2>
          <p className="text-gray-700 leading-relaxed">{howWorks}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {[
              { label: "Format", value: "One-to-one, live online" },
              { label: "Duration", value: "~30 minutes per class" },
              { label: "Timings", value: "Flexible UK time slots" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-5 text-center shadow-sm">
                <p className="text-[#FD9C02] font-bold text-lg">{item.value}</p>
                <p className="text-gray-500 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#122259] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-[#faf9f7] rounded-xl border border-gray-100 group">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-[#122259] list-none">
                  {f.q}
                  <ChevronRight size={16} className="transform group-open:rotate-90 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <p className="px-5 pb-5 text-gray-600 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related courses */}
      {related.length > 0 && (
        <section className="section-pad bg-[#faf9f7]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-[#122259] mb-5">Related Courses</h2>
            <div className="flex flex-wrap gap-3">
              {related.map((r) => (
                <Link key={r.href} href={r.href} className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-[#122259] border border-gray-200 hover:bg-[#122259] hover:text-white transition-colors">
                  {r.title} <ChevronRight size={12} className="inline" />
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
