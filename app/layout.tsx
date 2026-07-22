import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DJURAGAN DINO | Jasa Joki Whiteout Survival",

  description:
    "Jasa Joki Whiteout Survival terpercaya. Daily Activity, Bear Trap, Frostfire Mine, Dreamscape Memory, Foundry Battle, hingga Sunfire Castle.",

  keywords: [
    "Whiteout Survival",
    "Jasa Joki Whiteout Survival",
    "Joki Whiteout",
    "Daily Activity",
    "Bear Trap",
    "Frostfire Mine",
    "Dreamscape Memory",
    "Foundry Battle",
    "Sunfire Castle",
    "DJURAGAN DINO",
  ],

  authors: [
    {
      name: "DJURAGAN DINO",
    },
  ],

  creator: "DJURAGAN DINO",

  applicationName: "DJURAGAN DINO",

  category: "Gaming",

  metadataBase: new URL("https://djuragan-dino.vercel.app"),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  openGraph: {
    title: "DJURAGAN DINO | Jasa Joki Whiteout Survival",
    description:
      "Jasa Joki Whiteout Survival terpercaya. Aman, cepat, dan transparan.",
    url: "https://djuragan-dino.vercel.app",
    siteName: "DJURAGAN DINO",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "DJURAGAN DINO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DJURAGAN DINO",
    description: "Jasa Joki Whiteout Survival terpercaya.",
    images: ["/images/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#08111E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#08111E] text-white`}
      >
        {children}
      </body>
    </html>
  );
}