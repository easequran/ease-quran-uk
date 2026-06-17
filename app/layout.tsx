import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ScrollToTop from "@/components/ScrollToTop";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const WWW = "https://www.easequran.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(WWW),
  title: {
    default: "Online Quran Classes UK | Ease Quran Academy",
    template: "%s | Ease Quran UK",
  },
  description:
    "Qualified online Quran classes for kids and adults in the UK. One-to-one lessons, male and female teachers, free first class. Book your free trial today.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Ease Quran UK",
    images: [{ url: `${WWW}/og-image.png`, width: 1200, height: 630, alt: "Ease Quran UK - Online Quran Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${WWW}/og-image.png`],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${heading.variable} ${body.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
        <ScrollToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["EducationalOrganization", "Organization"],
              name: "Ease Quran UK",
              url: WWW,
              logo: `${WWW}/logo.png`,
              email: "info@easequran.co.uk",
              telephone: "+447311254423",
              address: { "@type": "PostalAddress", addressCountry: "GB" },
              areaServed: "GB",
              sameAs: [
                "https://www.facebook.com/easequran",
                "https://www.instagram.com/contacteasequran/",
                "https://www.linkedin.com/company/ease-quran",
                "https://youtube.com/@contacteasequran",
                "https://easequran.com",
              ],
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Certificate",
                recognizedBy: { "@type": "Organization", name: "Wifaq ul Madaris Al-Arabia" },
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ease Quran UK",
              url: WWW,
            }),
          }}
        />
      </body>
    </html>
  );
}
