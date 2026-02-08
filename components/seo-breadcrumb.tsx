"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import Script from "next/script"

interface BreadcrumbItem {
  name: string
  url: string
}

interface SEOBreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * SEO-optimized Breadcrumb component with JSON-LD structured data
 * Helps Google understand site hierarchy for faster indexing
 */
export function SEOBreadcrumb({ items, className = "" }: SEOBreadcrumbProps) {
  const baseUrl = "https://safawaladelhi.com"
  
  // Build full breadcrumb path including home
  const fullItems: BreadcrumbItem[] = [
    { name: "Home", url: baseUrl },
    ...items.map(item => ({
      name: item.name,
      url: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`
    }))
  ]

  // Generate JSON-LD structured data for search engines
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />

      {/* Visual Breadcrumb Navigation */}
      <nav 
        aria-label="Breadcrumb" 
        className={`py-3 px-4 bg-gray-50 border-b ${className}`}
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        <div className="container mx-auto">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm">
            {fullItems.map((item, index) => (
              <li 
                key={index}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-1.5" aria-hidden="true" />
                )}
                
                {index === fullItems.length - 1 ? (
                  // Current page - not a link
                  <span 
                    className="text-primary font-medium truncate max-w-[200px] sm:max-w-none"
                    itemProp="name"
                    aria-current="page"
                  >
                    {index === 0 && <Home className="w-4 h-4 inline mr-1" />}
                    {item.name}
                  </span>
                ) : (
                  // Link to parent page
                  <Link 
                    href={item.url.replace(baseUrl, '') || '/'}
                    className="text-gray-600 hover:text-primary transition-colors truncate max-w-[150px] sm:max-w-none flex items-center"
                    itemProp="item"
                  >
                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}

/**
 * Helper function to generate breadcrumb items from page slug
 */
export function generateBreadcrumbItems(slug: string, title: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = []
  
  // Determine category based on slug patterns
  if (slug.includes("-wedding-turban-safa-feta-pagdi-on-rent")) {
    // Area pages
    const areaName = slug.replace("-wedding-turban-safa-feta-pagdi-on-rent", "").replace(/-/g, " ")
    const capitalizedArea = areaName.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    items.push({ name: "Service Areas", url: "/#areas" })
    items.push({ name: capitalizedArea, url: `/${slug}` })
  } else if (slug.includes("-safa-service")) {
    // Area service pages
    const areaName = slug.replace("-safa-service", "").replace(/-/g, " ")
    const capitalizedArea = areaName.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    items.push({ name: "Service Areas", url: "/#areas" })
    items.push({ name: `${capitalizedArea} Safa Service`, url: `/${slug}` })
  } else if (slug.includes("-in-delhi")) {
    // Service pages
    items.push({ name: "Services", url: "/#services" })
    items.push({ name: title, url: `/${slug}` })
  } else {
    // Generic service page
    items.push({ name: "Services", url: "/#services" })
    items.push({ name: title, url: `/${slug}` })
  }
  
  return items
}

/**
 * Pre-defined breadcrumb configurations for common page types
 */
export const BREADCRUMB_CONFIGS = {
  home: [],
  services: [{ name: "Services", url: "/#services" }],
  gallery: [{ name: "Gallery", url: "/#gallery" }],
  contact: [{ name: "Contact", url: "/#contact" }],
  about: [{ name: "About Us", url: "/#about" }],
}
