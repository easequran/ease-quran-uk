// Google tag (gtag.js) — GA4.
// ID is public by design (it ships in the page HTML). Override per-environment
// with NEXT_PUBLIC_GA_ID; falls back to the production tag below.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-55JSSDFGJ5";

export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
        }}
      />
    </>
  );
}
