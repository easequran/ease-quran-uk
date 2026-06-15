import type { Metadata } from "next";
import { Mail, Phone, Clock, MessageCircle, Shield, Star } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";
import ContactForm from "@/components/ContactForm";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Ease Quran UK",
  description: "Get in touch with Ease Quran UK. Send us a message, WhatsApp us, or email info@easequran.co.uk. We reply within 2 hours.",
  alternates: { canonical: "https://easequran.co.uk/contact" },
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#122259] pt-12 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #F5A623 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} dark />
          <div className="mt-6 max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] border border-[#F5A623]/30 rounded-full px-3 py-1 mb-4">We Reply Within 2 Hours</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">Get in Touch</h1>
            <p className="text-blue-200 text-lg">Have a question about our courses, teachers, or how it works? Send us a message and we will get back to you quickly.</p>
          </div>
          {/* Trust strip */}
          <div className="mt-8 flex flex-wrap gap-6">
            {[
              { icon: <Clock size={14} />, label: "Reply within 2 hours" },
              { icon: <Shield size={14} />, label: "Your details are safe" },
              { icon: <Star size={14} />, label: "No sales pressure" },
            ].map((t) => (
              <span key={t.label} className="flex items-center gap-2 text-blue-200 text-sm">
                <span className="text-[#F5A623]">{t.icon}</span>{t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
                <h2 className="text-2xl font-bold text-[#122259] mb-1">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-7">Fill in the form below and we will get back to you shortly.</p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">

              {/* Quick contact */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-[#122259] mb-5 text-base">Prefer to reach out directly?</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#faf9f7] transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                        <MessageCircle size={18} className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">WhatsApp (fastest)</p>
                        <p className="font-bold text-[#122259] group-hover:text-[#F5A623] transition-colors text-sm">+44 7311 254423</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@easequran.co.uk"
                      className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#faf9f7] transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-[#faf9f7] border border-gray-100 flex items-center justify-center flex-shrink-0">
                        <Mail size={18} className="text-[#F5A623]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Email</p>
                        <p className="font-bold text-[#122259] group-hover:text-[#F5A623] transition-colors text-sm">info@easequran.co.uk</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center gap-4 p-3">
                      <div className="w-10 h-10 rounded-xl bg-[#faf9f7] border border-gray-100 flex items-center justify-center flex-shrink-0">
                        <Clock size={18} className="text-[#F5A623]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Response Time</p>
                        <p className="font-bold text-[#122259] text-sm">Within 2 hours</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Book trial CTA */}
              <div className="bg-[#122259] rounded-3xl p-6 text-white">
                <p className="text-[#F5A623] text-xs font-bold uppercase tracking-widest mb-2">Ready to start?</p>
                <h3 className="font-bold text-lg mb-2">Book a Free Trial Class</h3>
                <p className="text-blue-200 text-sm mb-5">Try a one-to-one class with a qualified teacher — completely free, no commitment.</p>
                <Link href="/free-trial" className="btn-gold w-full justify-center text-sm">Book Free Trial</Link>
              </div>

              {/* Social */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-[#122259] mb-1 text-base">Follow Us</h3>
                <p className="text-gray-400 text-xs mb-4">Stay connected for tips, updates, and Quran learning resources.</p>
                <div className="flex gap-3">
                  {[
                    { href: "https://www.facebook.com/easequran", icon: <FacebookIcon size={17} />, label: "Facebook" },
                    { href: "https://www.instagram.com/contacteasequran/", icon: <InstagramIcon size={17} />, label: "Instagram" },
                    { href: "https://www.linkedin.com/company/ease-quran", icon: <LinkedinIcon size={17} />, label: "LinkedIn" },
                    { href: "https://youtube.com/@contacteasequran", icon: <YoutubeIcon size={17} />, label: "YouTube" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      className="w-10 h-10 rounded-xl bg-[#faf9f7] border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#122259] hover:text-white hover:border-[#122259] transition-colors">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className="lg:hidden h-14" aria-hidden="true" />
    </>
  );
}
