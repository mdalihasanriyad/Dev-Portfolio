// import type { Metadata } from "next";
// import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
// import "./globals.css";
// import Preloader from "@/components/Preloader";
// import CursorGlow from "@/components/CursorGlow";
// import ScrollProgress from "@/components/ScrollProgress";

// const display = Space_Grotesk({
//   subsets: ["latin"],
//   weight: ["500", "700"],
//   variable: "--font-display",
//   display: "swap",
// });

// const body = IBM_Plex_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   variable: "--font-body",
//   display: "swap",
// });

// const mono = IBM_Plex_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-mono",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   metadataBase: new URL("https://ahriyad.top"),
//   title: {
//     default: "Md Ali Hasan Riyad — Full-Stack Web Developer",
//     template: "%s — Md Ali Hasan Riyad",
//   },
//   description:
//     "Portfolio of Md Ali Hasan Riyad, a full-stack web developer based in Dhaka, Bangladesh, building fast, reliable products end to end — from database to browser.",
//   keywords: [
//     "Md Ali Hasan Riyad",
//     "Md Ali Hasan Riyad Full stack developer",
//     "Md Ali Hasan Riyad Web developer",
//     "Md Ali Hasan Riyad Front end developer",
//     "ahriyad",
//     "ah riyad",
//     "ahriyad top",
//     "ahriyad full stack developer",
//     "ahriyad Front end developer",
//     "full-stack web developer",
//     "Next.js developer",
//     "React developer",
//     "web developer Bangladesh",
//     "Node.js developer",
//   ],
//   authors: [{ name: "Md Ali Hasan Riyad" }],
//   creator: "Md Ali Hasan Riyad",
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: { index: true, follow: true },
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://ahriyad.top",
//     siteName: "Md Ali Hasan Riyad — Portfolio",
//     title: "Md Ali Hasan Riyad — Full-Stack Web Developer",
//     description:
//       "Full-stack web developer building fast, reliable products end to end — from database to browser.",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Md Ali Hasan Riyad — Full-Stack Web Developer",
//     description:
//       "Full-stack web developer building fast, reliable products end to end — from database to browser.",
//   },
//   alternates: {
//     canonical: "https://ahriyad.top",
//   },
// };

// export const viewport = {
//   themeColor: "#0F1620",
//   width: "device-width",
//   initialScale: 1,
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
//       <body className="font-body bg-ink text-paper antialiased">
//         <Preloader />
//         <ScrollProgress />
//         <CursorGlow />
//         <div className="grain-overlay" />
//         {children}
//       </body>
//     </html>
//   );
// }


import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahriyad.top"),

  title: {
    default: "Md Ali Hasan Riyad — Full-Stack Web Developer",
    template: "%s — Md Ali Hasan Riyad",
  },

  description:
    "Portfolio of Md Ali Hasan Riyad, a full-stack web developer based in Dhaka, Bangladesh, building fast, reliable products end to end — from database to browser.",

  keywords: [
    "Md Ali Hasan Riyad",
    "Md Ali Hasan Riyad Full stack developer",
    "Md Ali Hasan Riyad Web developer",
    "Md Ali Hasan Riyad Front end developer",
    "ahriyad",
    "ah riyad",
    "ahriyad top",
    "ahriyad full stack developer",
    "ahriyad Front end developer",
    "full-stack web developer",
    "Next.js developer",
    "React developer",
    "web developer Bangladesh",
    "Node.js developer",
  ],

  authors: [{ name: "Md Ali Hasan Riyad" }],
  creator: "Md Ali Hasan Riyad",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // ================================
  // OG IMAGE বাদ দেওয়া হয়েছে
  // ================================
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahriyad.top",
    siteName: "Md Ali Hasan Riyad — Portfolio",
    title: "Md Ali Hasan Riyad — Full-Stack Web Developer",
    description:
      "Full-stack web developer building fast, reliable products end to end — from database to browser.",
  },

  // ================================
  // Twitter/X META
  // ================================
  twitter: {
    card: "summary_large_image",
    title: "Md Ali Hasan Riyad — Full-Stack Web Developer",
    description:
      "Full-stack web developer building fast, reliable products end to end — from database to browser.",
  },

  // ================================
  // CANONICAL URL
  // ================================
  alternates: {
    canonical: "https://ahriyad.top",
  },

  // ================================
  // GOOGLE SEARCH CONSOLE
  // এখানে তোমার verification code বসানো হয়েছে
  // ================================
  verification: {
    google: "QoHOJjubOCgmj3_jKko2HV4op6rVSJaZg0X2XIN-leg",
  },
};

// ================================
// VIEWPORT
// ================================
export const viewport: Viewport = {
  themeColor: "#0F1620",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-body bg-ink text-paper antialiased">
        <Preloader />
        <ScrollProgress />
        <CursorGlow />

        <div className="grain-overlay" />

        {children}
      </body>
    </html>
  );
}
