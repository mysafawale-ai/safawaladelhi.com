/**
 * Local Business Schema Component
 * Adds structured data for better local SEO in footer
 */

import Script from "next/script"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://safawala.com",
  name: "Safawala - Wedding Turban Service",
  image: "https://safawala.com/SAFAWALA%20LOGO.png",
  description: "Jaipur's most trusted wedding turban specialists with 20+ years of heritage.",
  telephone: "+91-9725295692",
  email: "info@safawalajaipur.com",
  url: "https://safawala.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 12-13, 1st Floor, Near Ramganj Chaupar, Ramganj Bazaar",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302003",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.9124",
    longitude: "75.8262"
  },
  areaServed: {
    "@type": "City",
    name: "Jaipur"
  },
  sameAs: [
    "https://www.facebook.com/people/Safawalacom/61579176513014/",
    "https://www.instagram.com/safawalaofficial/",
    "https://wa.me/919725295692"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "5000"
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
  email: "info@safawalajaipur.com",
  address: "Shop No. 12-13, 1st Floor, Near Ramganj Chaupar, Ramganj Bazaar, Jaipur, Rajasthan – 302003",
  hours: "9 AM - 9 PM (Daily)",
  whatsapp: "https://wa.me/919725295692",
}
