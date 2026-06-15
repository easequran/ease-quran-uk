"use client";
import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

const courses = [
  "Noorani Qaida",
  "Quran Reading",
  "Hifz (Memorisation)",
  "Tajweed",
  "Islamic Studies",
  "Tafseer",
];

export default function FreeTrialForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if (data.get("website")) return;

    const fields: Record<string, string> = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      phone: data.get("phone") as string,
      childAge: data.get("childAge") as string,
      course: data.get("course") as string,
      message: data.get("message") as string,
    };

    const newErrors: Record<string, string> = {};
    if (!fields.name.trim()) newErrors.name = "Please enter your name.";
    if (!fields.email.trim() || !/\S+@\S+\.\S+/.test(fields.email)) newErrors.email = "Please enter a valid email.";
    if (!fields.phone.trim()) newErrors.phone = "Please enter your phone/WhatsApp number.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#122259] mb-2">Booking Received!</h3>
        <p className="text-gray-600">Thank you — we will be in touch within 24 hours to confirm your free trial class. If you&apos;d like a faster response, please WhatsApp us on <a href="https://wa.me/447311254423" className="text-[#FD9C02] font-semibold">+44 7311 254423</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] ${errors.name ? "border-red-400" : "border-gray-300"}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] ${errors.email ? "border-red-400" : "border-gray-300"}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] ${errors.phone ? "border-red-400" : "border-gray-300"}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">Child&apos;s Age (optional)</label>
          <input
            id="childAge"
            name="childAge"
            type="text"
            placeholder="e.g. 7"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Preferred Course (optional)</label>
        <select
          id="course"
          name="course"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] bg-white"
        >
          <option value="">Select a course…</option>
          {courses.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Any questions or notes? (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm">Something went wrong — please try again or WhatsApp us directly on +44 7311 254423.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold w-full justify-center text-base py-3"
      >
        {status === "sending" ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : "Book My Free Trial"}
      </button>

      <p className="text-center text-xs text-gray-500">No card required · No commitment · 100% free</p>
    </form>
  );
}
