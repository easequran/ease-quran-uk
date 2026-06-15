import type { Metadata } from "next";
import { Mail, Phone, Clock } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";
import FreeTrialForm from "@/components/FreeTrialForm";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact Ease Quran UK",
  description: "Get in touch with Ease Quran UK. Send us a message, WhatsApp us, or email info@easequran.co.uk. We reply within 2 hours.",
  alternates: { canonical: "https://easequran.co.uk/contact" },
};

export default function Contact() {
  return (
    <>
      <div className="bg-[#faf9f7] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="text-4xl font-bold text-[#122259] mt-4">Get in Touch</h1>
          <p className="text-gray-600 mt-2">Send us a message, WhatsApp, or email. We reply within 2 hours.</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="card p-6 md:p-8">
                <h2 className="text-xl font-bold text-[#122259] mb-6">Send Us a Message</h2>
                <FreeTrialForm />
              </div>
            </div>
            <div className="lg:col-span-2 space-y-5">
              <div className="card p-6">
                <h3 className="font-bold text-[#122259] mb-5">Contact Details</h3>
                <ul className="space-y-5">
                  <li>
                    <a href="mailto:info@easequran.co.uk" className="flex items-start gap-3 text-sm text-gray-700 hover:text-[#122259] group">
                      <div className="w-9 h-9 rounded-lg bg-[#faf9f7] border border-gray-100 flex items-center justify-center flex-shrink-0">
                        <Mail size={16} className="text-[#FD9C02]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Email</p>
                        <p className="font-semibold text-[#122259] group-hover:text-[#FD9C02] transition-colors">info@easequran.co.uk</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-gray-700 hover:text-[#122259] group">
                      <div className="w-9 h-9 rounded-lg bg-[#faf9f7] border border-gray-100 flex items-center justify-center flex-shrink-0">
                        <Phone size={16} className="text-[#FD9C02]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">WhatsApp (UK)</p>
                        <p className="font-semibold text-[#122259] group-hover:text-[#FD9C02] transition-colors">+44 7311 254423</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#faf9f7] border border-gray-100 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-[#FD9C02]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Response Time</p>
                      <p className="font-semibold text-[#122259]">Within 2 hours</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-bold text-[#122259] mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { href: "https://www.facebook.com/easequran", icon: <FacebookIcon size={17} />, label: "Facebook" },
                    { href: "https://www.instagram.com/contacteasequran/", icon: <InstagramIcon size={17} />, label: "Instagram" },
                    { href: "https://www.linkedin.com/company/ease-quran", icon: <LinkedinIcon size={17} />, label: "LinkedIn" },
                    { href: "https://youtube.com/@contacteasequran", icon: <YoutubeIcon size={17} />, label: "YouTube" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-10 h-10 rounded-xl bg-[#faf9f7] border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#122259] hover:text-white transition-colors">
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
