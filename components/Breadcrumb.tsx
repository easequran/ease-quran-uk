import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs, dark }: { crumbs: Crumb[]; dark?: boolean }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://easequran.co.uk${c.href}` } : {}),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" className={`text-xs flex items-center flex-wrap gap-1 ${dark ? "text-blue-300" : "text-gray-500"}`}>
        {crumbs.map((c, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={12} />}
            {c.href ? (
              <Link href={c.href} className={dark ? "hover:text-white" : "hover:text-[#122259]"}>{c.label}</Link>
            ) : (
              <span className={dark ? "text-white font-medium" : "text-gray-700 font-medium"}>{c.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
