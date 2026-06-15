import Link from "next/link";
import Image from "next/image";

interface CTABandProps {
  heading?: string;
  sub?: string;
}

export default function CTABand({
  heading = "Start Your Child's Quran Journey Today",
  sub = "Book a completely free, no-commitment trial class with a qualified teacher.",
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden py-16">
      <Image
        src="/cta-background.webp"
        alt=""
        fill
        className="object-cover object-center opacity-20"
        sizes="100vw"
      />
      <div className="relative z-10 bg-[#122259]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] mb-4">{heading}</h2>
          <p className="text-lg text-blue-100 mb-8">{sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-trial" className="btn-gold">Book Free Trial</Link>
            <a
              href="https://wa.me/447311254423"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
