import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Ease Quran UK privacy policy, how we collect, use, and protect your data in compliance with UK GDPR.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-[#faf9f7] py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <h1 className="text-3xl font-bold text-[#122259] mt-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mt-1">Last updated: December 2024</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray max-w-none [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#122259] [&_h2]:mt-8 [&_h2]:mb-3">
          <p>Ease Quran UK (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This policy explains what personal information we collect through this website (easequran.co.uk), how we use it, and your rights under UK GDPR.</p>

          <h2>1. What Information We Collect</h2>
          <p>When you submit the contact or free trial form on this website, we collect:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone/WhatsApp number</li>
            <li>Child&apos;s age (if provided)</li>
            <li>Preferred course (if selected)</li>
            <li>Any message or notes you include</li>
          </ul>
          <p>We do not collect payment information through this website. We do not use tracking cookies beyond standard analytics.</p>

          <h2>2. How We Use Your Information</h2>
          <p>The information you submit is used solely to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your enquiry or booking request</li>
            <li>Arrange your free trial class</li>
            <li>Communicate with you about your classes and account</li>
          </ul>
          <p>We do not sell, share, or transfer your personal data to any third party for marketing purposes.</p>

          <h2>3. How Form Data Is Handled</h2>
          <p>Form submissions are sent securely to the Ease Quran UK team via an encrypted server-side email delivery service. Your email address and other contact details are never exposed in the website&apos;s source code and are not accessible to third parties.</p>

          <h2>4. Data Retention</h2>
          <p>We retain contact and enquiry data for as long as necessary to fulfil the purpose for which it was collected (typically the duration of your engagement with us). You may request deletion of your data at any time by contacting us at info@easequran.co.uk.</p>

          <h2>5. Your Rights (UK GDPR)</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the ICO (ico.org.uk)</li>
          </ul>

          <h2>6. Contact</h2>
          <p>If you have any questions about this privacy policy or how we handle your data, please contact us at <a href="mailto:info@easequran.co.uk" className="text-[#F5A623]">info@easequran.co.uk</a>.</p>
        </div>
      </section>
    </>
  );
}
