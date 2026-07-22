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
  metadataBase: new URL("https://djuragan-dino.vercel.app"),
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://djuragan-dino.vercel.app/#organization",
      name: "DJURAGAN DINO",
      url: "https://djuragan-dino.vercel.app",
      logo: "https://djuragan-dino.vercel.app/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+6288294084382",
        contactType: "customer service",
        availableLanguage: "id",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://djuragan-dino.vercel.app/#website",
      url: "https://djuragan-dino.vercel.app",
      name: "DJURAGAN DINO",
      publisher: {
        "@id": "https://djuragan-dino.vercel.app/#organization",
      },
    },
    {
      "@type": "Service",
      serviceType: "Jasa Joki Whiteout Survival",
      provider: {
        "@id": "https://djuragan-dino.vercel.app/#organization",
      },
      areaServed: "Indonesia",
      description:
        "Jasa Joki Whiteout Survival terpercaya. Daily Activity, Bear Trap, Frostfire Mine, Dreamscape Memory, Foundry Battle, hingga Sunfire Castle.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xqlpqwyvyg");
          `}
        </Script>

        {/* Schema.org */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#08111E] text-white`}
      >
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G9LC9DB2ZN"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', 'G-G9LC9DB2ZN');
          `}
        </Script>
      </body>
    </html>
  );
}