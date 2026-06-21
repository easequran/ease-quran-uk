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
      // Non-www → www
      {
        source: "/:path*",
        has: [{ type: "host", value: "easequran.co.uk" }],
        destination: "https://www.easequran.co.uk/:path*",
        permanent: true,
      },
      { source: "/quran-classes-birmingham", destination: "/locations/birmingham", permanent: true },
      { source: "/online-quran-classes-in-london", destination: "/locations/london", permanent: true },
      { source: "/noorani-qaida-course", destination: "/courses/noorani-qaida", permanent: true },
      { source: "/basic-qaida-course", destination: "/courses/noorani-qaida", permanent: true },
      { source: "/quran-reading-course", destination: "/courses/quran-reading", permanent: true },
      { source: "/memorize-quran-online", destination: "/courses/hifz", permanent: true },
      { source: "/tajweed-course", destination: "/courses/tajweed", permanent: true },
      { source: "/islamic-studies-course", destination: "/courses/islamic-studies", permanent: true },
      { source: "/tafseer-course", destination: "/courses/tafseer", permanent: true },
      // City variants
      { source: "/quran-classes-manchester", destination: "/locations/manchester", permanent: true },
      { source: "/online-quran-classes-in-manchester", destination: "/locations/manchester", permanent: true },
      { source: "/quran-classes-bradford", destination: "/locations/bradford", permanent: true },
      { source: "/online-quran-classes-in-bradford", destination: "/locations/bradford", permanent: true },
      { source: "/quran-classes-leicester", destination: "/locations/leicester", permanent: true },
      { source: "/online-quran-classes-in-leicester", destination: "/locations/leicester", permanent: true },
      { source: "/online-quran-classes-in-birmingham", destination: "/locations/birmingham", permanent: true },
      { source: "/quran-classes-london", destination: "/locations/london", permanent: true },
      // Other legacy patterns
      { source: "/hifz-course", destination: "/courses/hifz", permanent: true },
      { source: "/quran-memorization-course", destination: "/courses/hifz", permanent: true },
      { source: "/online-hifz-course", destination: "/courses/hifz", permanent: true },
      { source: "/online-tajweed-course", destination: "/courses/tajweed", permanent: true },
      { source: "/online-islamic-studies", destination: "/courses/islamic-studies", permanent: true },
      { source: "/online-tafseer-course", destination: "/courses/tafseer", permanent: true },
      { source: "/female-quran-teacher", destination: "/female-quran-teachers", permanent: true },
      { source: "/female-quran-teacher-uk", destination: "/female-quran-teachers", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/blogs", destination: "/blog", permanent: true },
    ];
  },
};

export default withMDX(nextConfig);
