import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://safawala.com'
  
  const servicePages = [
    'wedding-safa-tying-in-jaipur',
    'groom-pagdi-tying-service-jaipur',
    'rajasthani-turban-tying-jaipur',
    'barati-safa-pagdi-jaipur',
    'destination-wedding-safa-jaipur',
    'royal-rajwadi-safa-tying-jaipur',
    'marwari-wedding-pagdi-jaipur',
    'jaipur-turban-tying-for-guests',
    'designer-wedding-safa-jaipur',
    'pagdi-bandhne-wala-in-jaipur',
    'floral-safa-pagdi-jaipur',
    'sehra-and-pagdi-for-groom-jaipur',
    'sherwani-safa-turban-jaipur',
    'traditional-rajasthani-pagri-jaipur',
    'wedding-feta-tying-service-jaipur',
    'mehndi-function-safa-tying-jaipur',
    'baraat-pagdi-rental-and-tying-jaipur',
    'premium-groom-turban-service-jaipur',
    'jaipur-safa-pagdi-on-rent-with-tying',
    'corporate-and-wedding-turban-tying-jaipur',
    'wedding-turban-styling-services-jaipur',
  ]

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const servicePagesSitemap = servicePages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...servicePagesSitemap]
}
