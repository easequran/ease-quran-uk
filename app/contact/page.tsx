import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";
import FreeTrialForm from "@/components/FreeTrialForm";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact Ease Quran UK",
  description: "Get in touch with Ease Quran UK. Send us a message, WhatsApp us, or email info@easequran.co.uk. We reply within 24 hours.",
  alternates: { canonical: "https://easequran.co.uk/contact" },
};

export default function Contact() {
  return (
    <>
      <div className="bg-[#faf9f7] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="text-4xl font-bold text-[#122259] mt-4">Get in Touch</h1>
          <p className="text-gray-600 mt-2">We&apos;d love to hear from you — send us a message, WhatsApp, or email. We reply within 24 hours.</p>
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
                <h3 className="font-bold text-[#122259] mb-4">Contact Details</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="mailto:info@easequran.co.uk" className="flex items-start gap-3 text-sm text-gray-700 hover:text-[#122259]">
                      <Mail size={18} className="text-[#FD9C02] flex-shrink-0 mt-0.5" />
                      <span><strong>Email</strong><br />info@easequran.co.uk</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-gray-700 hover:text-[#122259]">
                      <Phone size={18} className="text-[#FD9C02] flex-shrink-0 mt-0.5" />
                      <span><strong>UK WhatsApp</strong><br />+44 7311 254423</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/923195657389" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-gray-700 hover:text-[#122259]">
                      <Phone size={18} className="text-[#FD9C02] flex-shrink-0 mt-0.5" />
                      <span><strong>Alternative WhatsApp</strong><br />+92 319 5657389</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="font-bold text-[#122259] mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { href: "https://www.facebook.com/easequran", icon: <FacebookIcon size={18} />, label: "Facebook" },
                    { href: "https://www.instagram.com/contacteasequran/", icon: <InstagramIcon size={18} />, label: "Instagram" },
                    { href: "https://www.linkedin.com/company/ease-quran", icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
                    { href: "https://youtube.com/@contacteasequran", icon: <YoutubeIcon size={18} />, label: "YouTube" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-9 h-9 rounded-full bg-[#faf9f7] border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#122259] hover:text-white transition-colors">
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
