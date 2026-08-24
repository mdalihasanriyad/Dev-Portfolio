# Md Ali Hasan Riyad — Portfolio (Next.js)

## চালু করবেন যেভাবে

```bash
npm install
npm run dev
```

তারপর ব্রাউজারে `http://localhost:3000` ওপেন করুন।

## Deploy

সবচেয়ে সহজ উপায় [Vercel](https://vercel.com) — GitHub-এ পুশ করে Vercel-এ ইম্পোর্ট করলেই ডিপ্লয় হয়ে যাবে।

## কোথায় কী এডিট করবেন

- `components/Hero.tsx` — নাম, টাইটেল, ইনট্রো লাইন
- `components/About.tsx` — নিজের সম্পর্কে বায়ো ও কুইক ফ্যাক্টস (এখানে বাংলায় প্লেসহোল্ডার লেখা আছে)
- `components/Skills.tsx` — স্কিল লিস্ট (UI/API/Data/Infra লেয়ার অনুযায়ী)
- `components/Projects.tsx` — প্রজেক্টের নাম, বিবরণ, স্ট্যাক, লিংক
- `components/Experience.tsx` — কাজের অভিজ্ঞতা টাইমলাইন
- `components/Contact.tsx` — ইমেইল, GitHub, LinkedIn, WhatsApp লিংক
- `app/layout.tsx` — সাইটের টাইটেল ও মেটা ডেসক্রিপশন

বাংলায় লেখা প্লেসহোল্ডার টেক্সটগুলো খুঁজে নিজের তথ্য দিয়ে রিপ্লেস করে নিন।

## SEO সেটআপ

- `app/layout.tsx` এ metadata, Open Graph, Twitter card বসানো আছে
- `app/sitemap.ts` ও `app/robots.ts` — অটো sitemap.xml ও robots.txt জেনারেট করে
- `app/icon.tsx` — অটো ফেভিকন জেনারেট করে (কোনো ইমেজ ফাইল লাগে না)
- `app/opengraph-image.tsx` — সোশ্যাল শেয়ারের জন্য অটো OG ইমেজ জেনারেট করে
- `app/page.tsx` এ JSON-LD (schema.org Person) স্ট্রাকচার্ড ডেটা আছে

**জরুরি:** এই সব জায়গায় `https://ahriyad.top` একটা প্লেসহোল্ডার ডোমেইন হিসেবে বসানো আছে (`layout.tsx`, `sitemap.ts`, `robots.ts`, `page.tsx`) — আপনার আসল ডোমেইন কিনলে/ঠিক করলে এই লিংকগুলো replace করে দিন।

## Animation gুলো কোথায় আছে (কোনো external animation library ছাড়াই — pure CSS + vanilla React দিয়ে বানানো, তাই কোনো 3rd-party lib এর সাথে Next.js এর compatibility bug হওয়ার সুযোগ নেই)

- `components/Preloader.tsx` — পেজ লোড হওয়ার সময় টার্মিনাল-স্টাইল বুট অ্যানিমেশন
- `components/ScrollProgress.tsx` — উপরে স্ক্রল-প্রগ্রেস বার
- `components/CursorGlow.tsx` — মাউসের সাথে ভেসে বেড়ানো গ্লো (শুধু ডেস্কটপে)
- `components/Hero.tsx` + `components/RoleTyping.tsx` — স্ট্যাগার্ড এন্ট্রান্স + টাইপরাইটার ইফেক্ট
- `components/StackVisual.tsx` — মাউস মুভমেন্টে 3D প্যারালাক্স টিল্ট
- `components/Marquee.tsx` — ইনফিনিট স্ক্রলিং টেক-স্ট্যাক টিকার
- `components/Skills.tsx` — ট্যাব সুইচ করলে অ্যানিমেটেড কন্টেন্ট ট্রানজিশন
- `components/TiltCard.tsx` — প্রজেক্ট কার্ডে হোভার করলে 3D টিল্ট
- `components/Experience.tsx` — স্ক্রল করার সাথে সাথে টাইমলাইন লাইন আঁকা হয়
- `components/MagneticButton.tsx` — বাটনগুলো মাউসের দিকে সামান্য টেনে আসে
- `components/ScrollToTop.tsx` — নিচে স্ক্রল করলে একটা floating "top" বাটন দেখা যায়
- `components/Hero.tsx` — ব্যাকগ্রাউন্ড ব্লবগুলো স্ক্রলের সাথে প্যারালাক্স হয়ে move করে

অ্যানিমেশন কম/বেশি করতে চাইলে সংশ্লিষ্ট ফাইলে `transition`, `duration`, `delay` ভ্যালুগুলো এডিট করুন।

## Responsive

মোবাইল, ট্যাবলেট ও ডেস্কটপ — সব সাইজে টেস্ট করে লেআউট ঠিক করা হয়েছে (skills tabs, experience timeline, about facts গ্রিড সহ)। Reduced-motion preference respect করা হয়।

## Design tokens

- Colors: `tailwind.config.ts` এ (`ink`, `paper`, `amber`, `teal`, `rose`)
- Fonts: `app/layout.tsx` এ (Space Grotesk / IBM Plex Sans / IBM Plex Mono)
# Dev-Portfolio
