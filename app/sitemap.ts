import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://safawaladelhi.com'
  const currentDate = new Date().toISOString()
  
  // High-priority main service pages
  const mainPages = [
    'safa-in-delhi',
    'turban-in-delhi',
    'wedding-safa-in-delhi',
    'groom-safa-in-delhi',
    'dulha-safa-in-delhi',
    'rajasthani-safa-in-delhi',
    'pagdi-in-delhi',
  ]

  // Location-based service pages (high local SEO value)
  const locationPages = [
    'chandni-chowk-safa-service',
    'connaught-place-safa-service',
    'dwarka-safa-service',
    'karol-bagh-safa-service',
    'lajpat-nagar-safa-service',
    'rohini-safa-service',
    'south-delhi-safa-service',
    'pitampura-safa-service',
    'rajouri-garden-safa-service',
    'saket-safa-service',
    'greater-kailash-safa-service',
    'vasant-kunj-safa-service',
    'defence-colony-wedding-turban-safa-feta-pagdi-on-rent',
    'hauz-khas-wedding-turban-safa-feta-pagdi-on-rent',
    'green-park-wedding-turban-safa-feta-pagdi-on-rent',
    'malviya-nagar-wedding-turban-safa-feta-pagdi-on-rent',
    'nehru-place-wedding-turban-safa-feta-pagdi-on-rent',
    'preet-vihar-wedding-turban-safa-feta-pagdi-on-rent',
    'shahdara-wedding-turban-safa-feta-pagdi-on-rent',
    'janakpuri-wedding-turban-safa-feta-pagdi-on-rent',
    'civil-lines-wedding-turban-safa-feta-pagdi-on-rent',
    'mayur-vihar-wedding-turban-safa-feta-pagdi-on-rent',
    'east-of-kailash-wedding-turban-safa-feta-pagdi-on-rent',
    'model-town-wedding-turban-safa-feta-pagdi-on-rent',
  ]

  // Color-based safa pages
  const colorPages = [
    'red-safa-in-delhi',
    'blue-safa-in-delhi',
    'golden-safa-in-delhi',
    'white-safa-in-delhi',
    'pink-safa-in-delhi',
    'green-safa-in-delhi',
    'maroon-safa-in-delhi',
    'cream-safa-in-delhi',
    'silver-safa-in-delhi',
    'purple-safa-in-delhi',
    'orange-safa-in-delhi',
    'peach-safa-in-delhi',
    'black-safa-in-delhi',
  ]

  // Fabric/Style-based pages
  const fabricStylePages = [
    'silk-safa-in-delhi',
    'velvet-safa-in-delhi',
    'cotton-safa-in-delhi',
    'satin-safa-in-delhi',
    'brocade-safa-in-delhi',
    'bandhej-safa-in-delhi',
    'leheriya-safa-in-delhi',
    'gota-patti-safa-in-delhi',
    'embroidered-safa-in-delhi',
    'designer-safa-in-delhi',
    'traditional-safa-in-delhi',
    'modern-safa-in-delhi',
    'royal-wedding-turban-in-delhi',
  ]

  // Regional style pages
  const regionalPages = [
    'marwari-safa-in-delhi',
    'jodhpuri-safa-in-delhi',
    'gujarati-pagdi-in-delhi',
    'punjabi-turban-in-delhi',
    'rajputi-safa-in-delhi',
    'rajasthani-safa-in-delhi',
    'rajwadi-safa-in-delhi',
  ]

  // Ceremony/Function pages
  const ceremonyPages = [
    'engagement-safa-in-delhi',
    'haldi-safa-in-delhi',
    'mehendi-safa-in-delhi',
    'mehndi-function-safa-in-delhi',
    'sangeet-safa-in-delhi',
    'reception-safa-in-delhi',
    'tilak-ceremony-safa-in-delhi',
    'phera-ceremony-turban-in-delhi',
    'vidai-turban-service-in-delhi',
    'mundan-ceremony-turban-in-delhi',
  ]

  // Festival pages
  const festivalPages = [
    'festival-safa-in-delhi',
    'diwali-turban-in-delhi',
    'holi-turban-in-delhi',
    'navratri-turban-in-delhi',
  ]

  // Family member pages
  const familyPages = [
    'barati-safa-in-delhi',
    'baarat-safa-in-delhi',
    'ladkewale-safa-in-delhi',
    'ladkiwale-safa-in-delhi',
    'father-of-groom-turban-in-delhi',
    'brother-of-groom-safa-in-delhi',
    'uncle-turban-in-delhi',
    'guest-turban-service-in-delhi',
    'family-safa-service-in-delhi',
    'group-safa-service-in-delhi',
  ]

  // International/NRI/Destination wedding pages
  const internationalPages = [
    'destination-wedding-safa-in-delhi',
    'destination-wedding-turban-in-delhi',
    'nri-wedding-safa-in-delhi',
    'foreigner-turban-experience-in-delhi',
    'barati-safa-tying-for-international-wedding-in-delhi',
    'custom-wedding-turban-for-overseas-weddings-in-delhi',
    'hand-tied-turban-for-international-wedding-in-delhi',
    'premium-wedding-safa-for-international-groom-in-delhi',
    'royal-groom-turban-for-destination-wedding-in-delhi',
    'wedding-pagdi-for-destination-wedding-in-delhi',
    'traditional-indian-wedding-turban-for-groom-in-delhi',
    'luxury-wedding-turban-for-groom-in-delhi',
    'designer-wedding-turban-in-delhi',
    'farmhouse-wedding-safa-in-delhi',
  ]

  // Service-related pages
  const servicePages = [
    'safa-tying-service-in-delhi',
    'turban-tying-service-in-delhi',
    'wedding-safa-tying-in-delhi',
    'same-day-safa-service-in-delhi',
    'delhi-airport-turban-service',
    'safa-on-rent-in-delhi',
    'turban-rental-near-me-in-delhi',
    'pagdi-rental-in-delhi',
    'buy-wedding-safa-in-delhi',
    'safa-shop-in-delhi',
    'safa-shop-near-me-in-delhi',
    'safa-price-in-delhi',
    'photo-shoot-safa-in-delhi',
    'corporate-event-safa-in-delhi',
    'corporate-event-turban-in-delhi',
  ]

  // Matching/Coordination pages
  const matchingPages = [
    'sherwani-matching-safa-in-delhi',
    'jodhpuri-matching-safa-in-delhi',
    'kurta-matching-safa-in-delhi',
    'sehra-safa-in-delhi',
    'sehra-in-delhi',
  ]

  // Alternative keyword pages (pagdi, pagri, feta variations)
  const alternativePages = [
    'pagdi-for-groom-in-delhi',
    'pagdi-for-wedding-in-delhi',
    'pagdi-bandhai-in-delhi',
    'pagdi-wala-in-delhi',
    'pagadi-in-delhi',
    'paghdi-in-delhi',
    'pagri-in-delhi',
    'safa-pagdi-in-delhi',
    'safa-bandhai-in-delhi',
    'safa-wala-in-delhi',
    'safa-for-groom-in-delhi',
    'groom-turban-in-delhi',
    'turban-for-groom-in-delhi',
    'wedding-pagdi-in-delhi',
    'feta-in-delhi',
    'feta-for-groom-in-delhi',
  ]

  // Homepage - highest priority
  const homepage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ]

  // Main pages - very high priority (0.95)
  const mainPagesSitemap: MetadataRoute.Sitemap = mainPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }))

  // Location pages - high priority (0.9) - great for local SEO
  const locationPagesSitemap: MetadataRoute.Sitemap = locationPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Color pages - high priority (0.85)
  const colorPagesSitemap: MetadataRoute.Sitemap = colorPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Fabric/Style pages - good priority (0.8)
  const fabricStylePagesSitemap: MetadataRoute.Sitemap = fabricStylePages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Regional pages - good priority (0.8)
  const regionalPagesSitemap: MetadataRoute.Sitemap = regionalPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Ceremony pages - good priority (0.8)
  const ceremonyPagesSitemap: MetadataRoute.Sitemap = ceremonyPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Festival pages - seasonal priority (0.75)
  const festivalPagesSitemap: MetadataRoute.Sitemap = festivalPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Family pages - good priority (0.8)
  const familyPagesSitemap: MetadataRoute.Sitemap = familyPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // International pages - good priority (0.8)
  const internationalPagesSitemap: MetadataRoute.Sitemap = internationalPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Service pages - good priority (0.8)
  const servicePagesSitemap: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Matching pages - medium priority (0.75)
  const matchingPagesSitemap: MetadataRoute.Sitemap = matchingPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Alternative keyword pages - medium priority (0.7)
  const alternativePagesSitemap: MetadataRoute.Sitemap = alternativePages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...homepage,
    ...mainPagesSitemap,
    ...locationPagesSitemap,
    ...colorPagesSitemap,
    ...fabricStylePagesSitemap,
    ...regionalPagesSitemap,
    ...ceremonyPagesSitemap,
    ...festivalPagesSitemap,
    ...familyPagesSitemap,
    ...internationalPagesSitemap,
    ...servicePagesSitemap,
    ...matchingPagesSitemap,
    ...alternativePagesSitemap,
  ]
}
