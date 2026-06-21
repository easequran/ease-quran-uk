"use client";
import Link from "next/link";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { usePathname } from "next/navigation";
import { waLink } from "@/lib/whatsapp";

export default function MobileBottomBar() {
  const pathname = usePathname();
  const href = waLink(pathname);

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 text-[#25D366] hover:bg-gray-50 transition-colors"
      >
        <MessageCircle size={20} />
        <span className="text-xs mt-0.5 font-medium">WhatsApp</span>
      </a>
      <Link
        href="/free-trial"
        className="flex-[2] flex flex-col items-center justify-center py-3 bg-[#F5A623] text-white"
      >
        <CalendarCheck size={20} />
        <span className="text-xs mt-0.5 font-semibold">Book Free Trial</span>
      </Link>
    </div>
  );
}
