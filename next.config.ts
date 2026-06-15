import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      { source: "/quran-classes-birmingham", destination: "/locations/birmingham", permanent: true },
      { source: "/online-quran-classes-in-london", destination: "/locations/london", permanent: true },
      { source: "/noorani-qaida-course", destination: "/courses/noorani-qaida", permanent: true },
      { source: "/basic-qaida-course", destination: "/courses/noorani-qaida", permanent: true },
      { source: "/quran-reading-course", destination: "/courses/quran-reading", permanent: true },
      { source: "/memorize-quran-online", destination: "/courses/hifz", permanent: true },
      { source: "/tajweed-course", destination: "/courses/tajweed", permanent: true },
      { source: "/islamic-studies-course", destination: "/courses/islamic-studies", permanent: true },
      { source: "/tafseer-course", destination: "/courses/tafseer", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/blogs", destination: "/blog", permanent: true },
    ];
  },
};

export default withMDX(nextConfig);
