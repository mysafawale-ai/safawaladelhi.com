/**
 * SEO Metadata and Structured Data for Safawala Delhi
 * Local SEO optimization for Delhi wedding turban services
 */

export const DELHI_AREAS = [
  "Chandni Chowk", "Connaught Place", "Dwarka", "Karol Bagh", "Lajpat Nagar", "Rohini",
  "South Delhi", "Pitampura", "Janakpuri", "Rajouri Garden", "Saket", "Greater Kailash",
  "Defence Colony", "Vasant Kunj", "Hauz Khas", "Green Park", "Malviya Nagar", "Nehru Place",
  "Preet Vihar", "Shahdara", "Uttam Nagar", "Tilak Nagar", "Paschim Vihar", "Punjabi Bagh",
  "Model Town", "Civil Lines", "Mayur Vihar", "East of Kailash", "Kalkaji", "Safdarjung",
  "Vasant Vihar", "Chanakyapuri", "Laxmi Nagar", "Vikaspuri", "Naraina", "Patel Nagar",
  "Kirti Nagar", "Rajendra Place", "Ashok Vihar", "Shalimar Bagh", "GTB Nagar", "Kamla Nagar",
  "North Delhi", "West Delhi", "East Delhi", "Central Delhi"
]

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://safawaladelhi.com",
  name: "Safawala Delhi - Premium Wedding Turban Service Delhi",
  image: "https://safawaladelhi.com/SAFAWALA LOGO.png",
  description: "Delhi's most trusted wedding turban specialists with 20+ years of heritage. Expert safa, pagdi, feta & sehra tying for grooms and baraatis across all Delhi areas.",
  url: "https://safawaladelhi.com",
  telephone: "+91-9725295692",
  email: "info@safawaladelhi.com",
  alternateName: ["Safawala Delhi", "Safawala Wedding Turbans Delhi", "Pagdi Tying Delhi", "Safa Service Delhi", "Turban Service Delhi"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 15, Ground Floor, Near Red Fort, Chandni Chowk",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    postalCode: "110006",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.6562",
    longitude: "77.2310",
  },
  priceRange: "₹500-₹5000",
  areaServed: [
    {
      "@type": "City",
      name: "Delhi",
      areaServed: DELHI_AREAS
    }
  ],
  serviceArea: {
    "@type": "City",
    name: "Delhi",
    areaServed: DELHI_AREAS
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "8500",
    bestRating: "5",
    worstRating: "1",
  },
  hasMap: "https://maps.google.com/?q=Safawala+Delhi+Chandni+Chowk",
  sameAs: [
    "https://www.facebook.com/safawaladelhi/",
    "https://www.instagram.com/safawaladelhi/",
    "https://wa.me/919725295692",
  ],
  foundingDate: "2004",
  founder: {
    "@type": "Person",
    name: "Safawala Founders",
  },
  knowsAbout: [
    "Wedding Turban Tying",
    "Safa Tying",
    "Pagdi Design",
    "Rajasthani Turbans",
    "Marathi Pheta",
    "Groom Styling",
    "Traditional Turban Art",
    "Wedding Sehra",
  ],
  opens: "09:00",
  closes: "21:00",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "20:00",
    },
  ],
}

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Safawala Delhi",
  url: "https://safawaladelhi.com",
  logo: "https://safawaladelhi.com/SAFAWALA LOGO.png",
  description: "Premium wedding turban service in Delhi with 20+ years of heritage serving all areas of Delhi",
  sameAs: [
    "https://www.facebook.com/safawaladelhi/",
    "https://www.instagram.com/safawaladelhi/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+91-9725295692",
    email: "info@safawaladelhi.com",
    areaServed: "IN",
    availableLanguage: ["hi", "en", "pa"],
  },
}

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best turban service in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Safawala Delhi is Delhi's most trusted turban service with 20+ years of heritage. We offer expert safa, pagdi, feta & sehra tying with master specialists across all Delhi areas including Chandni Chowk, Connaught Place, Karol Bagh, Dwarka, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How much does turban tying service cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our turban tying service in Delhi ranges from ₹500-₹5000 depending on the type of turban, fabric, and complexity. We offer competitive pricing with premium quality for all Delhi locations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide same-day turban service in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide same-day turban tying service across Delhi including North Delhi, South Delhi, East Delhi, West Delhi, and NCR regions. Contact us at +91-9725295692 or WhatsApp for instant booking.",
      },
    },
    {
      "@type": "Question",
      name: "What areas of Delhi do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all major areas of Delhi including Chandni Chowk, Connaught Place, Karol Bagh, Dwarka, Rohini, Pitampura, Greater Kailash, Defence Colony, Vasant Kunj, and all other areas.",
      },
    },
    {
      "@type": "Question",
      name: "Can you customize turban designs in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer fully customized turban designs in Delhi. Our specialists will work with you to create the perfect design matching your preferences and wedding theme.",
      },
    },
  ],
}

export const BREADCRUMB_SCHEMA = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const PRODUCT_SCHEMA = (serviceName: string, serviceUrl: string, description: string, price: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  url: serviceUrl,
  description: description,
  provider: {
    "@type": "LocalBusiness",
    name: "Safawala Delhi",
    url: "https://safawaladelhi.com",
    telephone: "+91-9725295692",
  },
  areaServed: {
    "@type": "City",
    name: "Delhi",
  },
  priceRange: price,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "8500",
  },
})

export const DelhiLocalizations = {
  delhi: {
    name: "Delhi",
    region: "Delhi",
    country: "India",
    neighborhoods: DELHI_AREAS,
    landmarks: ["Red Fort", "India Gate", "Qutub Minar", "Lotus Temple", "Akshardham Temple"],
  }
}

// Dynamic SEO metadata generator for Delhi
export function generateServiceMetadata(
  serviceName: string,
  serviceDescription: string,
  keywords: string[],
  slug: string
) {
  return {
    title: `${serviceName} in Delhi | Expert Service | Safawala Delhi`,
    description: `${serviceDescription} Get professional ${serviceName.toLowerCase()} service in Delhi by Safawala Delhi. Experienced specialists, premium quality, same-day service available across all Delhi areas.`,
    keywords: [
      ...keywords,
      `${serviceName.toLowerCase()} delhi`,
      "wedding turban service delhi",
      "safa tying delhi",
      "pagdi service delhi",
      "groom styling delhi",
      "turban specialist delhi",
    ].join(", "),
    openGraph: {
      title: `${serviceName} in Delhi - Safawala Delhi Professional Service`,
      description: `Expert ${serviceName.toLowerCase()} with master specialists. Same-day service, premium quality, all Delhi areas.`,
      url: `https://safawaladelhi.com/${slug}`,
      type: "website",
    },
  }
}
