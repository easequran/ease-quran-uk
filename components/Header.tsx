"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";

const courses = [
  { label: "Noorani Qaida", href: "/courses/noorani-qaida", desc: "For beginners and young children" },
  { label: "Quran Reading", href: "/courses/quran-reading", desc: "Build fluent recitation skills" },
  { label: "Hifz", href: "/courses/hifz", desc: "Memorise the Quran" },
  { label: "Tajweed", href: "/courses/tajweed", desc: "Perfect your pronunciation" },
  { label: "Islamic Studies", href: "/courses/islamic-studies", desc: "Aqeedah, fiqh and seerah" },
  { label: "Tafseer", href: "/courses/tafseer", desc: "Understand the Quran" },
];

const locations = [
  { label: "London", href: "/locations/london" },
  { label: "Birmingham", href: "/locations/birmingham" },
  { label: "Manchester", href: "/locations/manchester" },
  { label: "Bradford", href: "/locations/bradford" },
  { label: "Leicester", href: "/locations/leicester" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar — navy */}
      <div className="bg-[#122259] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            {/* WhatsApp link with UK flag only (no phone icon) */}
            <a
              href="https://wa.me/447311254423"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium hover:text-[#F5A623] transition-colors"
            >
              <span className="text-sm leading-none">🇬🇧</span>
              <span>+44 7311 254423</span>
            </a>
            <a
              href="mailto:info@easequran.co.uk"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#F5A623] transition-colors"
            >
              <Mail size={11} />
              <span>info@easequran.co.uk</span>
            </a>
          </div>
          <div className="flex items-center gap-3.5">
            <a href="https://www.facebook.com/easequran" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-80 hover:opacity-100 hover:text-[#F5A623] transition-all"><FacebookIcon size={13} /></a>
            <a href="https://www.instagram.com/contacteasequran/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100 hover:text-[#F5A623] transition-all"><InstagramIcon size={13} /></a>
            <a href="https://www.linkedin.com/company/ease-quran" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="opacity-80 hover:opacity-100 hover:text-[#F5A623] transition-all"><LinkedinIcon size={13} /></a>
            <a href="https://youtube.com/@contacteasequran" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="opacity-80 hover:opacity-100 hover:text-[#F5A623] transition-all"><YoutubeIcon size={13} /></a>
          </div>
        </div>
      </div>

      {/* Main nav — white with shadow on scroll */}
      <div className={`bg-white transition-shadow duration-200 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.png" alt="Ease Quran UK" width={140} height={40} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 text-sm font-medium text-gray-700">
            <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#122259] transition-colors">
              Home
            </Link>

            {/* Courses mega menu */}
            <div className="relative" onMouseEnter={() => setCoursesOpen(true)} onMouseLeave={() => setCoursesOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#122259] transition-colors">
                Courses <ChevronDown size={14} className={`transition-transform duration-200 ${coursesOpen ? "rotate-180" : ""}`} />
              </button>
              {coursesOpen && (
                <div className="absolute top-full left-0 mt-1 w-[500px] bg-white rounded-2xl shadow-xl border border-gray-100 p-5 z-50">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Our Courses</p>
                    <Link href="/courses" className="text-xs text-[#F5A623] font-semibold hover:underline">View all courses</Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {courses.map((c) => (
                      <Link key={c.href} href={c.href} className="flex flex-col px-3 py-3 rounded-xl hover:bg-[#faf9f7] group transition-colors">
                        <span className="font-semibold text-[#122259] group-hover:text-[#F5A623] transition-colors text-sm">{c.label}</span>
                        <span className="text-xs text-gray-400 mt-0.5">{c.desc}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link href="/free-trial" className="flex items-center justify-between px-4 py-3 bg-[#122259] rounded-xl text-white text-sm font-semibold hover:bg-[#0d1a45] transition-colors">
                      <span>Start with a free trial class</span>
                      <span className="bg-[#F5A623] text-white text-xs font-bold px-2.5 py-1 rounded-full">Free</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Locations mega menu */}
            <div className="relative" onMouseEnter={() => setLocationsOpen(true)} onMouseLeave={() => setLocationsOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#122259] transition-colors">
                Locations <ChevronDown size={14} className={`transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`} />
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-50">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-3 mb-2">UK Cities</p>
                  {locations.map((l) => (
                    <Link key={l.href} href={l.href} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-[#faf9f7] hover:text-[#122259] text-sm transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] flex-shrink-0" />
                      {l.label}
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-gray-100 px-3">
                    <Link href="/locations" className="text-xs text-[#F5A623] font-semibold hover:underline">All locations</Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#122259] transition-colors">About</Link>
            <Link href="/pricing" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#122259] transition-colors">Pricing</Link>
            <Link href="/female-quran-teachers" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#122259] transition-colors">Female Teachers</Link>
            <Link href="/blog" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#122259] transition-colors">Blog</Link>
            <Link href="/contact" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#122259] transition-colors">Contact</Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/447311254423"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-[#25D366] border border-[#25D366] rounded-lg px-4 py-2 hover:bg-[#25D366] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <Link href="/free-trial" className="btn-gold text-sm py-2 px-5">Book Free Trial</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6 max-h-[80vh] overflow-y-auto shadow-lg">
          <nav className="flex flex-col gap-0.5 mt-4 text-sm font-medium text-gray-700">
            <Link href="/" onClick={() => setMobileOpen(false)} className="py-2.5 px-3 rounded-lg hover:bg-gray-50 hover:text-[#122259]">Home</Link>
            <p className="pt-4 pb-1.5 px-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Courses</p>
            {courses.map((c) => (
              <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)} className="py-2 px-6 rounded-lg text-gray-500 hover:text-[#122259] hover:bg-gray-50">{c.label}</Link>
            ))}
            <p className="pt-4 pb-1.5 px-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Locations</p>
            {locations.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="py-2 px-6 rounded-lg text-gray-500 hover:text-[#122259] hover:bg-gray-50">{l.label}</Link>
            ))}
            <div className="border-t border-gray-100 mt-3 pt-3 space-y-0.5">
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-2.5 px-3 rounded-lg hover:bg-gray-50 hover:text-[#122259]">About</Link>
              <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block py-2.5 px-3 rounded-lg hover:bg-gray-50 hover:text-[#122259]">Pricing</Link>
              <Link href="/female-quran-teachers" onClick={() => setMobileOpen(false)} className="block py-2.5 px-3 rounded-lg hover:bg-gray-50 hover:text-[#122259]">Female Teachers</Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="block py-2.5 px-3 rounded-lg hover:bg-gray-50 hover:text-[#122259]">Blog</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2.5 px-3 rounded-lg hover:bg-gray-50 hover:text-[#122259]">Contact</Link>
              <Link href="/safety" onClick={() => setMobileOpen(false)} className="block py-2.5 px-3 rounded-lg hover:bg-gray-50 hover:text-[#122259]">Child Safety</Link>
            </div>
          </nav>
          <div className="flex flex-col gap-3 mt-5 pt-4 border-t border-gray-100">
            <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-outline text-center justify-center text-sm py-2.5">WhatsApp Us</a>
            <Link href="/free-trial" onClick={() => setMobileOpen(false)} className="btn-gold text-center justify-center text-sm py-2.5">Book Free Trial</Link>
          </div>
        </div>
      )}
    </header>
  );
}
