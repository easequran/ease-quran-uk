"use client";
import { useState } from "react";
import { CheckCircle, Loader2, User, Mail, Phone, Calendar, BookOpen, MessageSquare } from "lucide-react";

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
    if (fields.email.trim() && !/\S+@\S+\.\S+/.test(fields.email)) newErrors.email = "Please enter a valid email address.";
    if (!fields.phone.trim()) newErrors.phone = "Please enter your phone/WhatsApp number.";
    if (!fields.childAge.trim()) newErrors.childAge = "Please enter the student's age.";
    if (!fields.course) newErrors.course = "Please select a course.";
    if (!fields.message.trim()) newErrors.message = "Please add a short message.";

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
        <p className="text-gray-600">Thank you. We will be in touch within 2 hours to confirm your free trial class. For an even faster response, WhatsApp us directly on <a href="https://wa.me/447311254423" className="text-[#F5A623] font-semibold">+44 7311 254423</a>.</p>
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
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-[#F5A623]">*</span>
          </label>
          <div className="relative">
            <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Ahmed Khan"
              className={`w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] focus:border-transparent transition-colors placeholder:text-gray-400 ${errors.name ? "border-red-400 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><span>!</span>{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email Address <span className="text-gray-400 font-normal text-xs">(optional)</span>
          </label>
          <div className="relative">
            <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={`w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] focus:border-transparent transition-colors placeholder:text-gray-400 ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><span>!</span>{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone / WhatsApp <span className="text-[#F5A623]">*</span>
          </label>
          <div className="relative">
            <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+44 7700 000000"
              className={`w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] focus:border-transparent transition-colors placeholder:text-gray-400 ${errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><span>!</span>{errors.phone}</p>}
        </div>

        {/* Child's Age */}
        <div>
          <label htmlFor="childAge" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Student&apos;s Age <span className="text-[#F5A623]">*</span>
          </label>
          <div className="relative">
            <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="childAge"
              name="childAge"
              type="text"
              placeholder="e.g. 8 years old"
              className={`w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] focus:border-transparent transition-colors placeholder:text-gray-400 ${errors.childAge ? "border-red-400 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
            />
          </div>
          {errors.childAge && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><span>!</span>{errors.childAge}</p>}
        </div>
      </div>

      {/* Course select */}
      <div>
        <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Preferred Course <span className="text-[#F5A623]">*</span>
        </label>
        <div className="relative">
          <BookOpen size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10" />
          <select
            id="course"
            name="course"
            className={`w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] focus:border-transparent transition-colors appearance-none cursor-pointer text-gray-700 ${errors.course ? "border-red-400 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
          >
            <option value="">Select a course</option>
            {courses.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
        {errors.course && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><span>!</span>{errors.course}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Tell us a bit more <span className="text-[#F5A623]">*</span>
        </label>
        <div className="relative">
          <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="e.g. Looking for a female teacher for my daughter, she is a complete beginner"
            className={`w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] focus:border-transparent transition-colors placeholder:text-gray-400 resize-none ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
          />
        </div>
        {errors.message && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><span>!</span>{errors.message}</p>}
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again or WhatsApp us on{" "}
          <a href="https://wa.me/447311254423" className="font-semibold underline">+44 7311 254423</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold w-full justify-center text-base py-3.5 rounded-xl"
      >
        {status === "sending" ? (
          <><Loader2 size={18} className="animate-spin" /> Sending your request...</>
        ) : (
          "Book My Free Trial Class"
        )}
      </button>

      <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />No card required</span>
        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />No commitment</span>
        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />100% free</span>
      </div>
    </form>
  );
}
