"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight, Mail } from "lucide-react";
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

function UKFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" className="rounded-sm flex-shrink-0">
      <rect width="60" height="40" fill="#012169"/>
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8"/>
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="5"/>
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="13"/>
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8"/>
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Top bar — NOT sticky, scrolls away */}
      <div className="bg-[#122259] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <a
              href="https://wa.me/447311254423"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium hover:text-[#F5A623] transition-colors"
            >
              <UKFlag />
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
          {/* Social icons in brand gold */}
          <div className="flex items-center gap-3.5">
            <a href="https://www.facebook.com/easequran" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#F5A623] hover:text-white transition-colors"><FacebookIcon size={14} /></a>
            <a href="https://www.instagram.com/contacteasequran/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#F5A623] hover:text-white transition-colors"><InstagramIcon size={14} /></a>
            <a href="https://www.linkedin.com/company/ease-quran" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#F5A623] hover:text-white transition-colors"><LinkedinIcon size={14} /></a>
            <a href="https://youtube.com/@contacteasequran" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[#F5A623] hover:text-white transition-colors"><YoutubeIcon size={14} /></a>
          </div>
        </div>
      </div>

      {/* White nav — STICKY */}
      <div className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? "shadow-md" : "border-b border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.png" alt="Ease Quran UK" width={140} height={40} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 text-sm font-medium text-gray-700">
            <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#122259] transition-colors">Home</Link>

            {/* Courses dropdown */}
            <div className="relative" onMouseEnter={() => setCoursesOpen(true)} onMouseLeave={() => setCoursesOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#122259] transition-colors">
                Courses <ChevronDown size={14} className={`transition-transform duration-200 ${coursesOpen ? "rotate-180" : ""}`} />
              </button>
              {coursesOpen && (
                <div className="absolute top-full left-0 mt-1 w-[500px] bg-white rounded-2xl shadow-xl border border-gray-100 p-5 z-50">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Our Courses</p>
                    <Link href="/courses" className="text-xs text-[#F5A623] font-semibold hover:underline">View all</Link>
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

            {/* Locations dropdown */}
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
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu — full-screen slide-in */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] flex">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobile} />

          {/* Panel */}
          <div className="relative ml-auto w-full max-w-xs bg-white h-full flex flex-col shadow-2xl overflow-y-auto">
            {/* Panel header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
              <Image src="/logo.png" alt="Ease Quran UK" width={110} height={32} className="h-8 w-auto" />
              <button onClick={closeMobile} className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 space-y-1">
              <Link href="/" onClick={closeMobile} className="flex items-center gap-3 px-3 py-3 rounded-xl font-semibold text-[#122259] hover:bg-[#faf9f7] transition-colors text-sm">
                Home
              </Link>

              {/* Courses accordion */}
              <div>
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-xl font-semibold text-[#122259] hover:bg-[#faf9f7] transition-colors text-sm"
                >
                  <span>Courses</span>
                  <ChevronDown size={16} className={`text-[#F5A623] transition-transform duration-200 ${mobileCoursesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileCoursesOpen && (
                  <div className="ml-3 mt-1 pl-3 border-l-2 border-[#F5A623]/30 space-y-0.5">
                    {courses.map((c) => (
                      <Link key={c.href} href={c.href} onClick={closeMobile} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-[#122259] hover:bg-[#faf9f7] transition-colors">
                        <ChevronRight size={12} className="text-[#F5A623] flex-shrink-0" />
                        {c.label}
                      </Link>
                    ))}
                    <Link href="/courses" onClick={closeMobile} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-[#F5A623] hover:bg-[#faf9f7] transition-colors">
                      View all courses
                    </Link>
                  </div>
                )}
              </div>

              {/* Locations accordion */}
              <div>
                <button
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-xl font-semibold text-[#122259] hover:bg-[#faf9f7] transition-colors text-sm"
                >
                  <span>Locations</span>
                  <ChevronDown size={16} className={`text-[#F5A623] transition-transform duration-200 ${mobileLocationsOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileLocationsOpen && (
                  <div className="ml-3 mt-1 pl-3 border-l-2 border-[#F5A623]/30 space-y-0.5">
                    {locations.map((l) => (
                      <Link key={l.href} href={l.href} onClick={closeMobile} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-[#122259] hover:bg-[#faf9f7] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] flex-shrink-0" />
                        {l.label}
                      </Link>
                    ))}
                    <Link href="/locations" onClick={closeMobile} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-[#F5A623] hover:bg-[#faf9f7] transition-colors">
                      All locations
                    </Link>
                  </div>
                )}
              </div>

              {[
                { label: "About", href: "/about" },
                { label: "Pricing", href: "/pricing" },
                { label: "Female Teachers", href: "/female-quran-teachers" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMobile} className="flex items-center gap-3 px-3 py-3 rounded-xl font-semibold text-[#122259] hover:bg-[#faf9f7] transition-colors text-sm">
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Bottom CTAs */}
            <div className="px-4 py-5 border-t border-gray-100 space-y-3 bg-white">
              <a
                href="https://wa.me/447311254423"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl border-2 border-[#25D366] text-[#25D366] font-semibold text-sm hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
              <Link
                href="/free-trial"
                onClick={closeMobile}
                className="flex items-center justify-center w-full py-3 rounded-xl bg-[#F5A623] text-white font-bold text-sm hover:bg-[#d4890a] transition-colors"
              >
                Book Free Trial Class
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
