import type { Metadata } from "next";
import { Mail, Phone, Clock, MessageCircle, Shield, Star } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";
import ContactForm from "@/components/ContactForm";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Ease Quran UK",
  description: "Get in touch with Ease Quran UK. Send us a message, WhatsApp us, or email info@easequran.co.uk. We reply within 2 hours.",
  openGraph: { url: "/contact" },
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-12 pb-16 relative overflow-hidden">
        <div className="max-w-container mx-auto px-4 sm:px-6 relative">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} dark />
          <div className="mt-6 max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-500 border border-orange-500/30 rounded-full px-3 py-1 mb-4">We Reply Within 2 Hours</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">Get in touch</h1>
            <p className="text-navy-100 text-lg">Have a question about our courses, teachers, or how it works? Send us a message and we will get back to you quickly.</p>
          </div>
          {/* Trust strip */}
          <div className="mt-8 flex flex-wrap gap-6">
            {[
              { icon: <Clock size={14} />, label: "Reply within 2 hours" },
              { icon: <Shield size={14} />, label: "Your details are safe" },
              { icon: <Star size={14} />, label: "No sales pressure" },
            ].map((t) => (
              <span key={t.label} className="flex items-center gap-2 text-navy-100 text-sm">
                <span className="text-orange-500">{t.icon}</span>{t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 md:p-10">
                <h2 className="text-2xl font-semibold text-navy-900 mb-1">Send us a message</h2>
                <p className="text-gray-500 text-sm mb-7">Fill in the form below and we will get back to you shortly.</p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">

              {/* Quick contact */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-navy-900 mb-5 text-base">Prefer to reach out directly?</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-success-100 flex items-center justify-center flex-shrink-0">
                        <MessageCircle size={18} className="text-success-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">WhatsApp (fastest)</p>
                        <p className="font-semibold text-navy-900 group-hover:text-orange-600 transition-colors text-sm">+44 7311 254423</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@easequran.co.uk"
                      className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors group">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                        <Mail size={18} className="text-orange-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Email</p>
                        <p className="font-semibold text-navy-900 group-hover:text-orange-600 transition-colors text-sm">info@easequran.co.uk</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center gap-4 p-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                        <Clock size={18} className="text-orange-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Response Time</p>
                        <p className="font-semibold text-navy-900 text-sm">Within 2 hours</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Book trial CTA */}
              <div className="bg-navy-900 rounded-2xl p-6 text-white">
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-2">Ready to start?</p>
                <h3 className="font-semibold text-lg mb-2">Book a free trial class</h3>
                <p className="text-navy-100 text-sm mb-5">Try a one-to-one class with a qualified teacher, completely free, no commitment.</p>
                <Link href="/free-trial" className="btn-gold w-full justify-center text-sm">Book free trial</Link>
              </div>

              {/* Social */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-navy-900 mb-1 text-base">Follow us</h3>
                <p className="text-gray-400 text-xs mb-4">Stay connected for tips, updates, and Quran learning resources.</p>
                <div className="flex gap-3">
                  {[
                    { href: "https://www.facebook.com/easequran", icon: <FacebookIcon size={17} />, label: "Facebook" },
                    { href: "https://www.instagram.com/contacteasequran/", icon: <InstagramIcon size={17} />, label: "Instagram" },
                    { href: "https://www.linkedin.com/company/ease-quran", icon: <LinkedinIcon size={17} />, label: "LinkedIn" },
                    { href: "https://youtube.com/@contacteasequran", icon: <YoutubeIcon size={17} />, label: "YouTube" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-navy-50 hover:text-navy-900 transition-colors">
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
