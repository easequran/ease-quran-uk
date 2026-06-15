"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const courses = [
  { label: "Noorani Qaida", href: "/courses/noorani-qaida" },
  { label: "Quran Reading", href: "/courses/quran-reading" },
  { label: "Hifz", href: "/courses/hifz" },
  { label: "Tajweed", href: "/courses/tajweed" },
  { label: "Islamic Studies", href: "/courses/islamic-studies" },
  { label: "Tafseer", href: "/courses/tafseer" },
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

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.png" alt="Ease Quran UK" width={140} height={40} className="h-10 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-[#122259]">Home</Link>

          {/* Courses dropdown */}
          <div className="relative" onMouseEnter={() => setCoursesOpen(true)} onMouseLeave={() => setCoursesOpen(false)}>
            <button className="flex items-center gap-1 hover:text-[#122259]">
              Courses <ChevronDown size={14} />
            </button>
            {coursesOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                <Link href="/courses" className="block px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">All Courses</Link>
                {courses.map((c) => (
                  <Link key={c.href} href={c.href} className="block px-4 py-2 hover:bg-gray-50 hover:text-[#122259]">{c.label}</Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations dropdown */}
          <div className="relative" onMouseEnter={() => setLocationsOpen(true)} onMouseLeave={() => setLocationsOpen(false)}>
            <button className="flex items-center gap-1 hover:text-[#122259]">
              Locations <ChevronDown size={14} />
            </button>
            {locationsOpen && (
              <div className="absolute top-full left-0 mt-1 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                {locations.map((l) => (
                  <Link key={l.href} href={l.href} className="block px-4 py-2 hover:bg-gray-50 hover:text-[#122259]">{l.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-[#122259]">About</Link>
          <Link href="/pricing" className="hover:text-[#122259]">Pricing</Link>
          <Link href="/female-quran-teachers" className="hover:text-[#122259]">Female Teachers</Link>
          <Link href="/blog" className="hover:text-[#122259]">Blog</Link>
          <Link href="/contact" className="hover:text-[#122259]">Contact</Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/447311254423"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-[#25D366] border border-[#25D366] rounded-lg px-3 py-2 hover:bg-[#25D366] hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
          <Link href="/free-trial" className="btn-gold text-sm py-2">Book Free Trial</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6">
          <nav className="flex flex-col gap-1 mt-4 text-sm font-medium text-gray-700">
            <Link href="/" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[#122259]">Home</Link>
            <Link href="/courses" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[#122259]">All Courses</Link>
            {courses.map((c) => (
              <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)} className="py-1.5 pl-4 text-gray-500 hover:text-[#122259]">{c.label}</Link>
            ))}
            <Link href="/about" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[#122259]">About</Link>
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[#122259]">Pricing</Link>
            <Link href="/female-quran-teachers" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[#122259]">Female Teachers</Link>
            <Link href="/locations" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[#122259]">Locations</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[#122259]">Blog</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[#122259]">Contact</Link>
            <Link href="/safety" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[#122259]">Child Safety</Link>
          </nav>
          <div className="flex flex-col gap-3 mt-4">
            <a href="https://wa.me/447311254423" target="_blank" rel="noopener noreferrer" className="btn-outline text-center justify-center text-sm py-2">WhatsApp Us</a>
            <Link href="/free-trial" onClick={() => setMobileOpen(false)} className="btn-gold text-center justify-center text-sm py-2">Book Free Trial</Link>
          </div>
        </div>
      )}
    </header>
  );
}
