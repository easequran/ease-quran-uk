import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex">
      <a
        href="tel:+447311254423"
        className="flex-1 flex flex-col items-center justify-center py-2.5 text-[#122259] hover:bg-gray-50"
      >
        <Phone size={20} />
        <span className="text-xs mt-0.5 font-medium">Call</span>
      </a>
      <a
        href="https://wa.me/447311254423"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-2.5 text-[#25D366] hover:bg-gray-50"
      >
        <MessageCircle size={20} />
        <span className="text-xs mt-0.5 font-medium">WhatsApp</span>
      </a>
      <Link
        href="/free-trial"
        className="flex-1 flex flex-col items-center justify-center py-2.5 bg-[#FD9C02] text-white"
      >
        <CalendarCheck size={20} />
        <span className="text-xs mt-0.5 font-semibold">Free Trial</span>
      </Link>
    </div>
  );
}
