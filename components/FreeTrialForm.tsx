"use client";
import { useState } from "react";
import {
  CheckCircle, Loader2, User, Mail, Phone, Calendar, BookOpen,
  MessageSquare, ChevronRight, ChevronLeft, Users, Clock,
} from "lucide-react";

const courses = [
  "Noorani Qaida",
  "Quran Reading",
  "Hifz (Memorisation)",
  "Tajweed",
  "Islamic Studies",
  "Tafseer",
  "Not sure yet",
];

const hearAboutOptions = [
  "Google Search",
  "Facebook / Instagram",
  "WhatsApp",
  "Recommended by someone",
  "YouTube",
  "Other",
];

type Fields = {
  name: string;
  phone: string;
  email: string;
  childAge: string;
  course: string;
  teacherGender: string;
  hearAbout: string;
  message: string;
};

const empty: Fields = {
  name: "", phone: "", email: "",
  childAge: "", course: "", teacherGender: "",
  hearAbout: "", message: "",
};

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><span aria-hidden>!</span>{msg}</p>;
}

function InputWrap({ icon, error, children }: { icon: React.ReactNode; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">{icon}</span>
        {children}
      </div>
      <FieldError msg={error} />
    </div>
  );
}

const inputCls = (err?: string) =>
  `w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] focus:border-transparent transition-colors placeholder:text-gray-400 ${
    err ? "border-red-400 bg-red-50" : "border-gray-200 bg-white hover:border-gray-300"
  }`;

function StepDots({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {[1, 2, 3].map((n) => (
        <div key={n} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300 ${
              n < step
                ? "bg-green-500 text-white"
                : n === step
                ? "bg-[#122259] text-white ring-4 ring-[#122259]/20"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            {n < step ? <CheckCircle size={14} /> : n}
          </div>
          {n < 3 && (
            <div className={`h-0.5 w-8 sm:w-14 rounded transition-all duration-300 ${n < step ? "bg-green-400" : "bg-gray-200"}`} />
          )}
        </div>
      ))}
      <span className="ml-2 text-xs text-gray-400 font-medium">Step {step} of 3</span>
    </div>
  );
}

function TeacherCard({ value, label, sub, icon, selected, onClick }: {
  value: string; label: string; sub: string; icon: React.ReactNode;
  selected: boolean; onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl border-2 text-center transition-all duration-200 cursor-pointer ${
        selected
          ? "border-[#122259] bg-[#122259]/5 shadow-sm"
          : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
      }`}
    >
      <span className={`w-10 h-10 rounded-full flex items-center justify-center ${selected ? "bg-[#122259] text-white" : "bg-gray-100 text-gray-500"}`}>
        {icon}
      </span>
      <span className={`text-sm font-semibold ${selected ? "text-[#122259]" : "text-gray-700"}`}>{label}</span>
      <span className="text-xs text-gray-400 leading-tight">{sub}</span>
    </button>
  );
}

export default function FreeTrialForm() {
  const [step, setStep] = useState(1);
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");

  function set(key: keyof Fields, val: string) {
    setFields((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
  }

  function validateStep1(): boolean {
    const e: Partial<Fields> = {};
    if (!fields.name.trim()) e.name = "Please enter your name.";
    if (!fields.phone.trim()) e.phone = "Please enter your phone or WhatsApp number.";
    if (fields.email.trim() && !/\S+@\S+\.\S+/.test(fields.email)) e.email = "Please enter a valid email address.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep2(): boolean {
    const e: Partial<Fields> = {};
    if (!fields.childAge.trim()) e.childAge = "Please enter the student's age.";
    if (!fields.course) e.course = "Please select a course.";
    if (!fields.teacherGender) e.teacherGender = "Please choose a teacher preference.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (step === 1 && validateStep1()) setStep(2);
    if (step === 2 && validateStep2()) setStep(3);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12 px-4">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-[#122259] mb-3">Booking Received!</h3>
        <p className="text-gray-600 mb-5 leading-relaxed">
          Thank you, {fields.name.split(" ")[0]}. We will be in touch within 2 hours to confirm your free trial class.
        </p>
        <p className="text-sm text-gray-500">
          For a faster response, WhatsApp us on{" "}
          <a href="https://wa.me/447311254423" className="text-[#F5A623] font-semibold">+44 7311 254423</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <StepDots step={step} />

      {/* ── STEP 1: Your Details ── */}
      {step === 1 && (
        <div className="space-y-5">
          <div>
            <p className="text-base font-bold text-[#122259] mb-1">Your contact details</p>
            <p className="text-sm text-gray-500 mb-5">We will use these to confirm your free trial class.</p>
          </div>

          <InputWrap icon={<User size={15} />} error={errors.name}>
            <label htmlFor="name" className="sr-only">Full Name</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name *"
              value={fields.name}
              onChange={(e) => set("name", e.target.value)}
              className={inputCls(errors.name)}
            />
          </InputWrap>

          <InputWrap icon={<Phone size={15} />} error={errors.phone}>
            <label htmlFor="phone" className="sr-only">Phone / WhatsApp</label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Phone / WhatsApp number *"
              value={fields.phone}
              onChange={(e) => set("phone", e.target.value)}
              className={inputCls(errors.phone)}
            />
          </InputWrap>

          <InputWrap icon={<Mail size={15} />} error={errors.email}>
            <label htmlFor="email" className="sr-only">Email (optional)</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Email address (optional)"
              value={fields.email}
              onChange={(e) => set("email", e.target.value)}
              className={inputCls(errors.email)}
            />
          </InputWrap>

          <button
            type="button"
            onClick={next}
            className="btn-gold w-full justify-center text-base py-3.5 rounded-xl mt-2"
          >
            Continue <ChevronRight size={17} />
          </button>
        </div>
      )}

      {/* ── STEP 2: About the Student ── */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <p className="text-base font-bold text-[#122259] mb-1">About the student</p>
            <p className="text-sm text-gray-500 mb-5">This helps us match the right teacher.</p>
          </div>

          <InputWrap icon={<Calendar size={15} />} error={errors.childAge}>
            <label htmlFor="childAge" className="sr-only">Student's Age</label>
            <input
              id="childAge"
              type="text"
              placeholder="Student's age (e.g. 8) *"
              value={fields.childAge}
              onChange={(e) => set("childAge", e.target.value)}
              className={inputCls(errors.childAge)}
            />
          </InputWrap>

          <div>
            <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Preferred course <span className="text-[#F5A623]">*</span>
            </label>
            <div className="relative">
              <BookOpen size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10" />
              <select
                id="course"
                value={fields.course}
                onChange={(e) => set("course", e.target.value)}
                className={`${inputCls(errors.course)} appearance-none cursor-pointer`}
              >
                <option value="">Select a course</option>
                {courses.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
            <FieldError msg={errors.course} />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Teacher preference <span className="text-[#F5A623]">*</span>
            </p>
            <div className="flex gap-3">
              <TeacherCard
                value="Male"
                label="Male"
                sub="Shah Zaib or Umair"
                icon={<User size={18} />}
                selected={fields.teacherGender === "Male"}
                onClick={() => { set("teacherGender", "Male"); setErrors((e) => ({ ...e, teacherGender: "" })); }}
              />
              <TeacherCard
                value="Female"
                label="Female"
                sub="Almas Fatima"
                icon={<Users size={18} />}
                selected={fields.teacherGender === "Female"}
                onClick={() => { set("teacherGender", "Female"); setErrors((e) => ({ ...e, teacherGender: "" })); }}
              />
              <TeacherCard
                value="No preference"
                label="No preference"
                sub="We will match you"
                icon={<CheckCircle size={18} />}
                selected={fields.teacherGender === "No preference"}
                onClick={() => { set("teacherGender", "No preference"); setErrors((e) => ({ ...e, teacherGender: "" })); }}
              />
            </div>
            <FieldError msg={errors.teacherGender} />
          </div>

          <div>
            <label htmlFor="hearAbout" className="block text-sm font-semibold text-gray-700 mb-1.5">
              How did you hear about us? <span className="text-gray-400 font-normal text-xs">(optional)</span>
            </label>
            <div className="relative">
              <Clock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10" />
              <select
                id="hearAbout"
                value={fields.hearAbout}
                onChange={(e) => set("hearAbout", e.target.value)}
                className={`${inputCls()} appearance-none cursor-pointer`}
              >
                <option value="">Select an option</option>
                {hearAboutOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-600 hover:border-gray-300 transition-colors"
            >
              <ChevronLeft size={16} /> Back
            </button>
            <button
              type="button"
              onClick={next}
              className="btn-gold flex-1 justify-center text-base py-3 rounded-xl"
            >
              Continue <ChevronRight size={17} />
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3: Review & Send ── */}
      {step === 3 && (
        <div className="space-y-5">
          <div>
            <p className="text-base font-bold text-[#122259] mb-1">Almost done. Check your details below.</p>
            <p className="text-sm text-gray-500 mb-5">Everything look right? Add a note below if needed, then submit.</p>
          </div>

          {/* Summary card */}
          <div className="bg-[#faf9f7] rounded-2xl border border-gray-100 p-4 space-y-2.5 text-sm">
            {[
              { label: "Name", val: fields.name },
              { label: "Phone", val: fields.phone },
              ...(fields.email ? [{ label: "Email", val: fields.email }] : []),
              { label: "Student age", val: fields.childAge },
              { label: "Course", val: fields.course },
              { label: "Teacher", val: fields.teacherGender },
              ...(fields.hearAbout ? [{ label: "Heard via", val: fields.hearAbout }] : []),
            ].map(({ label, val }) => (
              <div key={label} className="flex justify-between gap-4">
                <span className="text-gray-400 font-medium shrink-0">{label}</span>
                <span className="text-gray-800 font-semibold text-right">{val}</span>
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Anything else we should know? <span className="text-gray-400 font-normal text-xs">(optional)</span>
            </label>
            <div className="relative">
              <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
              <textarea
                id="message"
                rows={3}
                placeholder="e.g. Looking for a female teacher for my daughter, she is a complete beginner"
                value={fields.message}
                onChange={(e) => set("message", e.target.value)}
                className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#122259] focus:border-transparent transition-colors placeholder:text-gray-400 resize-none bg-white hover:border-gray-300"
              />
            </div>
          </div>

          {status === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
              Something went wrong. Please try again or{" "}
              <a href="https://wa.me/447311254423" className="font-semibold underline">WhatsApp us directly</a>.
            </div>
          )}

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-600 hover:border-gray-300 transition-colors"
            >
              <ChevronLeft size={16} /> Back
            </button>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-gold flex-1 justify-center text-base py-3 rounded-xl"
            >
              {status === "sending" ? (
                <><Loader2 size={18} className="animate-spin" /> Sending…</>
              ) : (
                "Book My Free Trial Class"
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-5 text-xs text-gray-400 pt-1">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />No card required</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />No commitment</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />100% free</span>
          </div>
        </div>
      )}
    </form>
  );
}
