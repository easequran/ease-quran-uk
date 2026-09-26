import Link from "next/link";

interface CTABandProps {
  heading?: string;
  sub?: string;
}

export default function CTABand({
  heading = "Start your child's Quran journey today",
  sub = "Book a completely free, no-commitment trial class with a qualified teacher.",
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden py-20 bg-navy-900">
      <div className="relative z-10 max-w-narrow mx-auto px-4 sm:px-6 text-center text-white">
        <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-3">Ease Quran UK</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{heading}</h2>
        <p className="text-lg text-navy-100 mb-8 max-w-xl mx-auto">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/free-trial" className="btn-gold">Book a free trial class</Link>
          <a
            href="https://wa.me/447311254423"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            WhatsApp us
          </a>
        </div>
        <p className="text-navy-100 text-xs mt-6">No card required. No commitment. We reply within 2 hours.</p>
      </div>
    </section>
  );
}
