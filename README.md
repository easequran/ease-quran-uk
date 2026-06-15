# Ease Quran UK — Next.js Website

Production website for **Ease Quran UK** (easequran.co.uk) — an online Quran academy targeting the UK market.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-native config)
- **Resend** for server-side email delivery
- **next/font** — Plus Jakarta Sans (headings) + Inter (body)
- **next/image** — all images optimised
- Static Generation (SSG) for all pages

---

## Environment Variables

Create a `.env.local` file in the project root (copy from `.env.example`):

```bash
# Gmail account used to send emails
GMAIL_USER=contacteasequran@gmail.com

# Gmail App Password (16 chars) — NOT your regular password
# Get it: Google Account → Security → 2-Step Verification → App Passwords
GMAIL_APP_PASSWORD=your_16_char_app_password_here

# Where form submissions are delivered (server-side only — never shown on site)
CONTACT_EMAIL=contacteasequran@gmail.com
```

> **Important:** These are only used server-side in `/app/api/contact/route.ts` — never included in any client bundle or page HTML.

---

## Setup & Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

1. Push to GitHub
2. Import the repo at vercel.com/new
3. Add environment variables in Vercel project settings:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy — Vercel auto-detects Next.js

**Custom domain:** Set `easequran.co.uk` in Vercel project > Domains, then point your DNS to Vercel's nameservers.

---

## Adding a Blog Post

Blog posts are defined in `/app/blog/[slug]/page.tsx`.

To add a new post:

1. Open `/app/blog/[slug]/page.tsx`
2. Add a new entry to the `posts` array:

```ts
{
  slug: "your-post-slug",
  title: "Your Post Title",
  description: "Short description for SEO (under 155 chars)",
  date: "2025-01-15",
  readTime: "5 min read",
  content: (
    <div className="prose prose-gray max-w-none">
      <p>Your content here...</p>
    </div>
  ),
}
```

3. Add the post to the listing in `/app/blog/page.tsx`
4. Add the URL to `/app/sitemap.ts`

---

## Site Structure

```
/                           Homepage
/about                      About page
/courses                    Courses hub
/courses/noorani-qaida      Noorani Qaida
/courses/quran-reading      Quran Reading
/courses/hifz               Hifz
/courses/tajweed            Tajweed
/courses/islamic-studies    Islamic Studies
/courses/tafseer            Tafseer
/female-quran-teachers      Female teachers
/pricing                    Pricing
/locations                  Locations hub
/locations/london           London
/locations/birmingham       Birmingham
/locations/manchester       Manchester
/locations/bradford         Bradford
/locations/leicester        Leicester
/free-trial                 Booking form
/contact                    Contact
/blog                       Blog listing
/blog/[slug]                Blog posts
/safety                     Child safety
/privacy-policy             Privacy policy
/terms-conditions           Terms & conditions
```

---

## Key Files

| File | Purpose |
|---|---|
| `app/layout.tsx` | Root layout, fonts, global schema, metadata |
| `app/globals.css` | Brand colours, utility classes |
| `next.config.ts` | MDX support, 301 redirects |
| `components/Header.tsx` | Sticky header with dropdown navigation |
| `components/Footer.tsx` | Footer with links and social icons |
| `components/MobileBottomBar.tsx` | Mobile sticky bottom CTA bar |
| `components/FreeTrialForm.tsx` | Contact/booking form (client-side) |
| `app/api/contact/route.ts` | Server-side form handler (Resend) |
| `components/CoursePageTemplate.tsx` | Reusable course page template |
| `components/CityPageTemplate.tsx` | Reusable city/location page template |
| `app/sitemap.ts` | Dynamic sitemap.xml |
| `app/robots.ts` | robots.txt |

---

## Email Setup (Gmail App Password)

1. Log into `contacteasequran@gmail.com`
2. Go to **Google Account → Security → 2-Step Verification** (enable if not already)
3. Then go to **App Passwords** → create one named "Ease Quran Website"
4. Copy the 16-character password (no spaces)
5. Add to Vercel env vars: `GMAIL_USER` and `GMAIL_APP_PASSWORD`

No domain verification needed — works immediately.

---

## Contact Info Used on Site

- Public email: **info@easequran.co.uk** (displayed on site)
- UK WhatsApp: **+44 7311 254423**
- Alt WhatsApp: **+92 319 5657389**
- Form submissions route privately to: `contacteasequran@gmail.com` (server-side only)
