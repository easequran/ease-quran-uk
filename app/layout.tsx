import type { Metadata } from "next";
import { Poppins, Cairo, Amiri } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppSticky from "@/components/WhatsAppSticky";

// Poppins for both headings and body per the Ease Quran Design System.
const heading = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700", "800"],
});

const body = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic-ui",
  display: "swap",
  weight: ["400", "500", "700"],
});

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-arabic-display",
  display: "swap",
  weight: ["400", "700"],
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
    <html lang="en-GB" className={`${heading.variable} ${body.variable} ${cairo.variable} ${amiri.variable}`}>
      <body>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
        <WhatsAppSticky />
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
              image: `${WWW}/logo.png`,
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
