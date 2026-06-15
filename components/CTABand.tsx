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
    <section className="relative overflow-hidden bg-[#122259] py-20">
      {/* Background image with overlay */}
      <Image
        src="/cta-background.webp"
        alt=""
        fill
        className="object-cover object-center opacity-15"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
        <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest mb-3">Ease Quran UK</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/free-trial" className="btn-gold">Book Free Trial Class</Link>
          <a
            href="https://wa.me/447311254423"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            WhatsApp Us
          </a>
        </div>
        <p className="text-blue-200 text-xs mt-6">No card required. No commitment. We reply within 2 hours.</p>
      </div>
    </section>
  );
}
