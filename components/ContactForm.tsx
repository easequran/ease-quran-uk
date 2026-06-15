"use client";
import { useState } from "react";
import { CheckCircle, Loader2, User, Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) return;

    const fields: Record<string, string> = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      phone: data.get("phone") as string,
      message: data.get("message") as string,
    };

    const newErrors: Record<string, string> = {};
    if (!fields.name.trim()) newErrors.name = "Please enter your name.";
    if (fields.email.trim() && !/\S+@\S+\.\S+/.test(fields.email)) newErrors.email = "Please enter a valid email address.";
    if (!fields.phone.trim()) newErrors.phone = "Please enter your phone or WhatsApp number.";
    if (!fields.message.trim()) newErrors.message = "Please enter your message.";

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
        body: JSON.stringify({ ...fields, course: "General Enquiry" }),
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
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={36} className="text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-[#122259] mb-2">Message Received!</h3>
        <p className="text-gray-600 max-w-sm mx-auto">Thank you for getting in touch. We will reply within 2 hours. For a faster response, WhatsApp us on{" "}
          <a href="https://wa.me/447311254423" className="text-[#F5A623] font-semibold">+44 7311 254423</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="c-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-[#F5A623]">*</span>
          </label>
          <div className="relative">
            <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="c-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Ahmed Khan"
              className={`w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] focus:border-transparent transition-colors placeholder:text-gray-400 ${errors.name ? "border-red-400 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1.5">! {errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="c-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone / WhatsApp <span className="text-[#F5A623]">*</span>
          </label>
          <div className="relative">
            <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              id="c-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+44 7700 000000"
              className={`w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] focus:border-transparent transition-colors placeholder:text-gray-400 ${errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1.5">! {errors.phone}</p>}
        </div>
      </div>

      {/* Email (optional) */}
      <div>
        <label htmlFor="c-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email Address <span className="text-gray-400 font-normal text-xs">(optional)</span>
        </label>
        <div className="relative">
          <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            id="c-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={`w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] focus:border-transparent transition-colors placeholder:text-gray-400 ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
          />
        </div>
        {errors.email && <p className="text-red-500 text-xs mt-1.5">! {errors.email}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="c-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          How can we help you? <span className="text-[#F5A623]">*</span>
        </label>
        <div className="relative">
          <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
          <textarea
            id="c-message"
            name="message"
            rows={5}
            placeholder="e.g. I would like to know more about your Tajweed classes for adults..."
            className={`w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] focus:border-transparent transition-colors placeholder:text-gray-400 resize-none ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
          />
        </div>
        {errors.message && <p className="text-red-500 text-xs mt-1.5">! {errors.message}</p>}
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
          <><Loader2 size={18} className="animate-spin" /> Sending...</>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-center text-xs text-gray-400">We reply within 2 hours. Your details are never shared.</p>
    </form>
  );
}
