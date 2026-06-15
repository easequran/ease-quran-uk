"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-20 right-4 z-40 w-11 h-11 rounded-full bg-[#122259] text-white shadow-lg flex items-center justify-center hover:bg-[#F5A623] transition-colors duration-200 lg:bottom-6"
    >
      <ChevronUp size={20} strokeWidth={2.5} />
    </button>
  );
}
