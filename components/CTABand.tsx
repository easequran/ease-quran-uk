import Link from "next/link";

interface CTABandProps {
  heading?: string;
  sub?: string;
}

export default function CTABand({
  heading = "Start Your Child's Quran Journey Today",
  sub = "Book a completely free, no-commitment trial class with a qualified teacher.",
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden py-20" style={{ backgroundColor: "#122259" }}>
      {/* Mobile background (< 640px) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 sm:hidden"
        style={{ backgroundImage: "url('/cta-background-mobile.webp')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.13 }}
      />
      {/* Desktop background (≥ 640px) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden sm:block"
        style={{ backgroundImage: "url('/cta-background.webp')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.2 }}
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
