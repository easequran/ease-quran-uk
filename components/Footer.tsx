import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#122259] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image src="/footer.png" alt="Ease Quran UK" width={140} height={40} className="h-10 w-auto mb-4" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              A trusted online Quran academy serving Muslim families across the UK with qualified, certified teachers and one-to-one personalised lessons.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://www.facebook.com/easequran" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FD9C02] transition-colors"><FacebookIcon size={14} /></a>
              <a href="https://www.instagram.com/contacteasequran/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FD9C02] transition-colors"><InstagramIcon size={14} /></a>
              <a href="https://www.linkedin.com/company/ease-quran" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FD9C02] transition-colors"><LinkedinIcon size={14} /></a>
              <a href="https://youtube.com/@contacteasequran" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FD9C02] transition-colors"><YoutubeIcon size={14} /></a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Noorani Qaida", "/courses/noorani-qaida"],
                ["Quran Reading", "/courses/quran-reading"],
                ["Hifz", "/courses/hifz"],
                ["Tajweed", "/courses/tajweed"],
                ["Islamic Studies", "/courses/islamic-studies"],
                ["Tafseer", "/courses/tafseer"],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="hover:text-[#FD9C02] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["About Us", "/about"],
                ["Female Teachers", "/female-quran-teachers"],
                ["Pricing", "/pricing"],
                ["Book Free Trial", "/free-trial"],
                ["Locations", "/locations"],
                ["Blog", "/blog"],
                ["Child Safety", "/safety"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="hover:text-[#FD9C02] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@easequran.co.uk" className="flex items-center gap-2 hover:text-[#FD9C02] transition-colors">
                  <Mail size={14} className="flex-shrink-0" /> info@easequran.co.uk
                </a>
              </li>
              <li>
                <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FD9C02] transition-colors">
                  <Phone size={14} className="flex-shrink-0" /> +44 7311 254423
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3 text-sm">Locations</h4>
              <ul className="space-y-1.5 text-sm">
                {[["London", "/locations/london"], ["Birmingham", "/locations/birmingham"], ["Manchester", "/locations/manchester"], ["Bradford", "/locations/bradford"], ["Leicester", "/locations/leicester"]].map(([l, h]) => (
                  <li key={h}><Link href={h} className="hover:text-[#FD9C02] transition-colors">{l}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Ease Quran UK. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-gray-300">Terms & Conditions</Link>
            <Link href="/safety" className="hover:text-gray-300">Child Safety</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
