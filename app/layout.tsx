import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { LOCAL_BUSINESS_SCHEMA, ORGANIZATION_SCHEMA, FAQ_SCHEMA } from "@/lib/seo-metadata"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Premium Wedding Turbans in Jaipur | Safawala Safa & Pagdi Services | Expert Service",
  description:
    "Safawala - Jaipur's most trusted wedding turban specialists since 2004. Expert safa, pagdi, feta & sehra tying. Master specialists, same-day service, all Jaipur areas. Free consultation. Book now: +91-9725295692",
  keywords:
    "wedding turban Jaipur, safa Jaipur, pagdi tying service, groom turban, Rajasthani turban, wedding safa, turban tying Jaipur, best turban service Jaipur, safa tying service, pagdi design, feta tying, sehra, barati safa, groom styling Jaipur, turban specialist, traditional turban, custom wedding turban, turban tying near me, wedding turban price, turban on rent, destination wedding turban, turban booking Jaipur, same day turban service",
  authors: [{ name: "Safawala Wedding Turbans Jaipur" }],
  creator: "Safawala Wedding Turbans",
  publisher: "Safawala Wedding Turbans",
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://safawala.com"),
  alternates: {
    canonical: "https://safawala.com",
    languages: {
      "hi-IN": "https://safawala.com/hi",
      "en-IN": "https://safawala.com/en",
    },
  },
  openGraph: {
    title: "Premium Wedding Turbans in Jaipur | Safawala Professional Service",
    description:
      "Expert safa, pagdi, feta & sehra tying for grooms, baraatis & destination weddings. Master specialists, same-day service, all Jaipur areas covered.",
    url: "https://safawala.com",
    siteName: "Safawala Wedding Turbans Jaipur",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://safawala.com/SAFAWALA%20LOGO.png",
        width: 1200,
        height: 630,
        alt: "Safawala - Premium Wedding Turbans & Safa Service in Jaipur",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safawala - Wedding Turbans Jaipur | Expert Safa & Pagdi Service",
    description: "20+ years of heritage. Master specialists, same-day service, premium quality, all Jaipur areas.",
    images: ["https://safawala.com/SAFAWALA%20LOGO.png"],
    creator: "@safawalaofficial",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "Wedding Services",
  classification: "Wedding Turban & Safa Service",
  applicationName: "Safawala Wedding Turbans",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Safawala Wedding Turbans",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/image.png?v=1" type="image/png" />
        <link rel="shortcut icon" href="/image.png?v=1" type="image/png" />
        <link rel="apple-touch-icon" href="/image.png?v=1" />
        <meta name="theme-color" content="#8b1a1a" />
        
        {/* Google Search Console & Analytics */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Local Business Structured Data */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        
        {/* Organization Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        
        {/* FAQ Structured Data */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
