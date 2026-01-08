/**
 * SEO Metadata and Structured Data for Safawala
 * Local SEO optimization for Jaipur wedding turban services
 */

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://safawala.com",
  name: "Safawala - Premium Wedding Turban Service Jaipur",
  image: "https://safawala.com/SAFAWALA LOGO.png",
  description: "Jaipur's most trusted wedding turban specialists with 20+ years of heritage. Expert safa, pagdi, feta & sehra tying for grooms and baraatis.",
  url: "https://safawala.com",
  telephone: "+91-9725295692",
  email: "info@safawalajaipur.com",
  alternateName: ["Safawala Jaipur", "Safawala Wedding Turbans", "Pagdi Tying Jaipur", "Safa Service Jaipur"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 12-13, 1st Floor, Near Ramganj Chaupar, Ramganj Bazaar",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302003",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.9124",
    longitude: "75.8262",
  },
  priceRange: "₹500-₹3000",
  areaServed: [
    {
      "@type": "City",
      name: "Jaipur",
      areaServed: [
        "C-Scheme", "Vaishali Nagar", "Mansarovar", "Malviya Nagar", "Jagatpura",
        "Raja Park", "Sindhi Camp", "Civil Lines", "Bani Park", "Ajmer Road",
        "Tonk Road", "JLN Marg", "Sanganer", "Ganj Katla", "Ashok Nagar",
        "Ram Nagar", "Kalyan Vihar", "Vidhyadhar Nagar", "Shyam Nagar", "Pal Road",
        "Bahubali", "Bapu Nagar", "Ganesh Mandi", "Lal Kothi", "Niwaru Road",
        "Ramganj", "Ramesh Nagar", "Bijnor Road", "Pratap Nagar", "Mahavir Nagar",
        "Chaura Rasta", "Alwar Bypass", "Amber Fort Area", "Seven Hills",
        "Four Seasons Valley", "Clarks Amer", "Nahargarh", "Naila Fort"
      ]
    }
  ],
  serviceArea: {
    "@type": "City",
    name: "Jaipur",
    areaServed: [
      "C-Scheme", "Vaishali Nagar", "Mansarovar", "Malviya Nagar", "Jagatpura",
      "Raja Park", "Sindhi Camp", "Civil Lines", "Bani Park", "Ajmer Road",
      "Tonk Road", "JLN Marg", "Sanganer", "Ashok Nagar", "Ram Nagar"
    ]
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "5000",
    bestRating: "5",
    worstRating: "1",
  },
  hasMap: "https://maps.google.com/?q=Safawala+Jaipur",
  sameAs: [
    "https://www.facebook.com/people/Safawalacom/61579176513014/",
    "https://www.instagram.com/safawalaofficial/",
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
    "Groom Styling",
    "Traditional Turban Art",
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
  name: "Safawala",
  url: "https://safawala.com",
  logo: "https://safawala.com/SAFAWALA LOGO.png",
  description: "Premium wedding turban service in Jaipur with 20+ years of heritage",
  sameAs: [
    "https://www.facebook.com/people/Safawalacom/61579176513014/",
    "https://www.instagram.com/safawalaofficial/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+91-9725295692",
    email: "info@safawalajaipur.com",
    areaServed: "IN",
    availableLanguage: ["hi", "en"],
  },
}

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best turban service in Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Safawala is Jaipur's most trusted turban service with 20+ years of heritage. We offer expert safa, pagdi, feta & sehra tying with master specialists.",
      },
    },
    {
      "@type": "Question",
      name: "How much does turban tying service cost in Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our turban tying service ranges from ₹500-₹3000 depending on the type of turban, fabric, and complexity. We offer competitive pricing with premium quality.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide same-day turban service in Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide same-day turban tying service across Jaipur. Contact us at +91-9725295692 or WhatsApp for instant booking.",
      },
    },
    {
      "@type": "Question",
      name: "What areas of Jaipur do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all major areas of Jaipur including C-Scheme, Vaishali Nagar, Mansarovar, Raja Park, Civil Lines, Sanganer, and many more.",
      },
    },
    {
      "@type": "Question",
      name: "Can you customize turban designs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer fully customized turban designs. Our specialists will work with you to create the perfect design matching your preferences and wedding theme.",
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
    name: "Safawala",
    url: "https://safawala.com",
    telephone: "+91-9725295692",
  },
  areaServed: {
    "@type": "City",
    name: "Jaipur",
  },
  priceRange: price,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "5000",
  },
})

export const JaiPURLocalizations = {
  jaipur: {
    name: "Jaipur",
    region: "Rajasthan",
    country: "India",
    neighborhoods: [
      "C-Scheme", "Vaishali Nagar", "Mansarovar", "Malviya Nagar", "Jagatpura",
      "Raja Park", "Sindhi Camp", "Civil Lines", "Bani Park", "Ajmer Road",
      "Tonk Road", "JLN Marg", "Sanganer", "Ganj Katla", "Ashok Nagar",
      "Ram Nagar", "Kalyan Vihar", "Vidhyadhar Nagar", "Shyam Nagar", "Pal Road"
    ],
    landmarks: ["Amber Fort", "City Palace", "Hawa Mahal", "Jantar Mantar", "Albert Hall"],
  }
}

// Dynamic SEO metadata generator
export function generateServiceMetadata(
  serviceName: string,
  serviceDescription: string,
  keywords: string[],
  slug: string
) {
  return {
    title: `${serviceName} in Jaipur | Expert Service | Safawala`,
    description: `${serviceDescription} Get professional ${serviceName.toLowerCase()} service in Jaipur by Safawala. Experienced specialists, premium quality, same-day service available.`,
    keywords: [
      ...keywords,
      `${serviceName.toLowerCase()} jaipur`,
      "wedding turban service",
      "safa tying jaipur",
      "pagdi service jaipur",
      "groom styling jaipur",
      "turban specialist jaipur",
    ].join(", "),
    openGraph: {
      title: `${serviceName} in Jaipur - Safawala Professional Service`,
      description: `Expert ${serviceName.toLowerCase()} with master specialists. Same-day service, premium quality, all Jaipur areas.`,
      url: `https://safawala.com/${slug}`,
      type: "website",
    },
  }
}
