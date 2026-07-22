import type { Metadata } from "next";
import Script from "next/script";
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

  metadataBase: new URL("https://djuragan-dino.vercel.app"),

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  verification: {
    google: "8_RtzrEKfqkxOJZLygfti_uNGA-5fZFo-fwDA7qjX8c",
  },

  openGraph: {
    title: "DJURAGAN DINO | Jasa Joki Whiteout Survival",
    description:
      "Jasa Joki Whiteout Survival terpercaya. Aman, cepat, dan transparan.",
    url: "https://djuragan-dino.vercel.app",
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

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G9LC9DB2ZN"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-G9LC9DB2ZN');
          `}
        </Script>
      </body>
    </html>
  );
}