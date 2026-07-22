import type { Metadata } from "next";
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

  metadataBase: new URL("https://djuragandino.com"),

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  openGraph: {
    title: "DJURAGAN DINO | Jasa Joki Whiteout Survival",
    description:
      "Jasa Joki Whiteout Survival terpercaya. Aman, cepat, dan transparan.",
    url: "https://djuragandino.com",
    siteName: "DJURAGAN DINO",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "DJURAGAN DINO",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DJURAGAN DINO",
    description: "Jasa Joki Whiteout Survival terpercaya.",
    images: ["/images/logo.png"],
  },
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