import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Ease Quran UK services.",
  alternates: { canonical: "/terms-conditions" },
  robots: { index: false, follow: false },
};

export default function Terms() {
  return (
    <>
      <div className="bg-[#faf9f7] py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
          <h1 className="text-3xl font-bold text-[#122259] mt-4">Terms &amp; Conditions</h1>
          <p className="text-gray-500 text-sm mt-1">Last updated: December 2024</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#122259] [&_h2]:mt-8 [&_h2]:mb-3 text-gray-700 space-y-4">
          <p>These terms and conditions govern your use of the Ease Quran UK website (easequran.co.uk) and our online teaching services. By using this website or enrolling in classes, you agree to these terms.</p>

          <h2>1. Services</h2>
          <p>Ease Quran UK provides online one-to-one Quran and Islamic Studies tuition via video call (Zoom or Google Meet). All classes are conducted remotely. We do not provide in-person tuition.</p>

          <h2>2. Free Trial</h2>
          <p>The free trial class is a single, one-to-one lesson provided at no charge. No payment or card details are required. There is no obligation to continue after the trial.</p>

          <h2>3. Payments and Plans</h2>
          <p>Payment terms, amounts, and methods are agreed directly between the family and Ease Quran UK following enrolment. Pricing is clearly stated on our pricing page. We do not charge hidden fees.</p>

          <h2>4. Cancellations and Rescheduling</h2>
          <p>Students may cancel or reschedule classes by giving reasonable notice to the teacher or academy. We ask for as much notice as possible. There are no long-term contracts, you may cancel your enrolment at any time.</p>

          <h2>5. Code of Conduct</h2>
          <p>Students and parents are expected to engage respectfully with teachers. Ease Quran UK reserves the right to end enrolment if conduct is inappropriate or disruptive.</p>

          <h2>6. Safeguarding</h2>
          <p>Our child safeguarding approach is described in full on our <a href="/safety" className="text-[#F5A623]">Child Safety page</a>. By enrolling a child in our classes, you agree to the safeguarding practices described there.</p>

          <h2>7. Intellectual Property</h2>
          <p>All content on this website, including text, images, and design, is the property of Ease Quran UK. You may not reproduce, republish, or redistribute any content without written permission.</p>

          <h2>8. Limitation of Liability</h2>
          <p>Ease Quran UK is not liable for any indirect or consequential loss arising from use of our services. Our liability in respect of any claim is limited to the amount paid for the relevant service.</p>

          <h2>9. Governing Law</h2>
          <p>These terms are governed by the laws of England and Wales.</p>

          <h2>10. Contact</h2>
          <p>For any questions about these terms, contact us at <a href="mailto:info@easequran.co.uk" className="text-[#F5A623]">info@easequran.co.uk</a>.</p>
        </div>
      </section>
    </>
  );
}
