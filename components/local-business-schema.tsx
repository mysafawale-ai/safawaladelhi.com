/**
 * Local Business Schema Component
 * Adds structured data for better local SEO in footer
 */

import Script from "next/script"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://safawaladelhi.com",
  name: "Safawala Delhi - Wedding Turban Service",
  image: "https://safawaladelhi.com/SAFAWALA%20LOGO.png",
  description: "Delhi's most trusted wedding turban specialists with 20+ years of heritage.",
  telephone: "+91-9725295692",
  email: "info@safawaladelhi.com",
  url: "https://safawaladelhi.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 15, Ground Floor, Chandni Chowk, Near Red Fort",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    postalCode: "110006",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.6562",
    longitude: "77.2310"
  },
  areaServed: {
    "@type": "City",
    name: "Delhi"
  },
  sameAs: [
    "https://www.facebook.com/safawaladelhi/",
    "https://www.instagram.com/safawaladelhi/",
    "https://wa.me/919725295692"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "8500"
  }
}

export function LocalBusinessSchema() {
  return (
    <Script
      id="local-business-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  )
}

// Contact information for schema
export const contactInfo = {
  phone: "+91-9725295692",
  email: "info@safawaladelhi.com",
  address: "Shop No. 15, Ground Floor, Chandni Chowk, Near Red Fort, Delhi – 110006",
  hours: "9 AM - 9 PM (Daily)",
  whatsapp: "https://wa.me/919725295692",
}
