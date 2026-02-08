"use client"

import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"
import { LocalBusinessSchema } from "./local-business-schema"

interface FooterProps {
  hideMainNavigation?: boolean
}

// Delhi Areas
const DELHI_AREAS = [
  { name: "South Delhi", slug: "south-delhi-safa-service" },
  { name: "Connaught Place", slug: "connaught-place-safa-service" },
  { name: "Greater Kailash", slug: "greater-kailash-safa-service" },
  { name: "Defence Colony", slug: "defence-colony-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Lajpat Nagar", slug: "lajpat-nagar-safa-service" },
  { name: "Saket", slug: "saket-safa-service" },
  { name: "Hauz Khas", slug: "hauz-khas-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Green Park", slug: "green-park-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Vasant Kunj", slug: "vasant-kunj-safa-service" },
  { name: "Malviya Nagar", slug: "malviya-nagar-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Karol Bagh", slug: "karol-bagh-safa-service" },
  { name: "Chandni Chowk", slug: "chandni-chowk-safa-service" },
  { name: "Civil Lines", slug: "civil-lines-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Rajouri Garden", slug: "rajouri-garden-safa-service" },
  { name: "Dwarka", slug: "dwarka-safa-service" },
  { name: "Janakpuri", slug: "janakpuri-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Punjabi Bagh", slug: "punjabi-bagh-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Tilak Nagar", slug: "tilak-nagar-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Uttam Nagar", slug: "uttam-nagar-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Paschim Vihar", slug: "paschim-vihar-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Rohini", slug: "rohini-safa-service" },
  { name: "Pitampura", slug: "pitampura-safa-service" },
  { name: "Model Town", slug: "model-town-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Preet Vihar", slug: "preet-vihar-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Mayur Vihar", slug: "mayur-vihar-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Shahdara", slug: "shahdara-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "East of Kailash", slug: "east-of-kailash-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Nehru Place", slug: "nehru-place-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Kalkaji", slug: "kalkaji-wedding-turban-safa-feta-pagdi-on-rent" },
  { name: "Safdarjung", slug: "safdarjung-wedding-turban-safa-feta-pagdi-on-rent" },
]

// Service Keywords Links
const SERVICE_KEYWORDS = [
  // Core Safa / Pagdi / Turban
  { name: "Safa in Delhi", slug: "safa-in-delhi" },
  { name: "Pagdi in Delhi", slug: "pagdi-in-delhi" },
  { name: "Pagri in Delhi", slug: "pagri-in-delhi" },
  { name: "Pagadi in Delhi", slug: "pagadi-in-delhi" },
  { name: "Paghdi in Delhi", slug: "paghdi-in-delhi" },
  { name: "Turban in Delhi", slug: "turban-in-delhi" },
  { name: "Feta in Delhi", slug: "feta-in-delhi" },
  // Wedding & Groom Focus
  { name: "Wedding Safa in Delhi", slug: "wedding-safa-in-delhi" },
  { name: "Safa for Groom in Delhi", slug: "safa-for-groom-in-delhi" },
  { name: "Groom Safa in Delhi", slug: "groom-safa-in-delhi" },
  { name: "Groom Turban in Delhi", slug: "groom-turban-in-delhi" },
  { name: "Wedding Turban in Delhi", slug: "wedding-turban-in-delhi" },
  { name: "Wedding Pagdi in Delhi", slug: "wedding-pagdi-in-delhi" },
  { name: "Wedding Pagri in Delhi", slug: "wedding-pagri-in-delhi" },
  { name: "Pagdi for Wedding in Delhi", slug: "pagdi-for-wedding-in-delhi" },
  { name: "Pagdi for Marriage in Delhi", slug: "pagdi-for-marriage-in-delhi" },
  { name: "Marriage Pagdi in Delhi", slug: "marriage-pagdi-in-delhi" },
  { name: "Dulha Safa in Delhi", slug: "dulha-safa-in-delhi" },
  { name: "Dulha Pagdi in Delhi", slug: "dulha-pagdi-in-delhi" },
  { name: "Dulha Pagri in Delhi", slug: "dulha-pagri-in-delhi" },
  { name: "Dulhe Ki Pagdi in Delhi", slug: "dulhe-ki-pagdi-in-delhi" },
  { name: "Indian Dulha Turban in Delhi", slug: "indian-dulha-turban-in-delhi" },
  { name: "Royal Wedding Turban for Groom in Delhi", slug: "royal-wedding-turban-for-groom-in-delhi" },
  { name: "Luxury Wedding Turban in Delhi", slug: "luxury-wedding-turban-in-delhi" },
  { name: "Traditional Wedding Safa in Delhi", slug: "traditional-wedding-safa-in-delhi" },
  { name: "Designer Wedding Safa in Delhi", slug: "designer-wedding-safa-in-delhi" },
  { name: "Custom Wedding Safa in Delhi", slug: "custom-wedding-safa-in-delhi" },
  { name: "Premium Pagdi with Kalgi in Delhi", slug: "premium-pagdi-with-kalgi-in-delhi" },
  // Regional / Style Based
  { name: "Rajasthani Safa in Delhi", slug: "rajasthani-safa-in-delhi" },
  { name: "Rajasthani Wedding Safa in Delhi", slug: "rajasthani-wedding-safa-in-delhi" },
  { name: "Jodhpuri Safa in Delhi", slug: "jodhpuri-safa-in-delhi" },
  { name: "Jodhpuri Pagdi in Delhi", slug: "jodhpuri-pagdi-in-delhi" },
  { name: "Jodhpuri Pagri in Delhi", slug: "jodhpuri-pagri-in-delhi" },
  { name: "Jodhpuri Safa for Groom in Delhi", slug: "jodhpuri-safa-for-groom-in-delhi" },
  { name: "Jodhpuri Safa for Wedding in Delhi", slug: "jodhpuri-safa-for-wedding-in-delhi" },
  { name: "Jodhpuri Safa Design in Delhi", slug: "jodhpuri-safa-design-in-delhi" },
  { name: "Rajputi Safa in Delhi", slug: "rajputi-safa-in-delhi" },
  { name: "Rajputi Safa Design in Delhi", slug: "rajputi-safa-design-in-delhi" },
  { name: "Rajput Pagdi in Delhi", slug: "rajput-pagdi-in-delhi" },
  { name: "Rajwadi Safa in Delhi", slug: "rajwadi-safa-in-delhi" },
  { name: "Rajwadi Pagdi in Delhi", slug: "rajwadi-pagdi-in-delhi" },
  { name: "Marwadi Safa in Delhi", slug: "marwadi-safa-in-delhi" },
  { name: "Gujarati Pagdi in Delhi", slug: "gujarati-pagdi-in-delhi" },
  { name: "Maharaja Safa in Delhi", slug: "maharaja-safa-in-delhi" },
  { name: "Marathi Pheta in Delhi", slug: "marathi-pheta-in-delhi" },
  { name: "Punjabi Turban in Delhi", slug: "punjabi-turban-in-delhi" },
  // Barati / Group Use
  { name: "Safa for Barati in Delhi", slug: "safa-for-barati-in-delhi" },
  { name: "Wedding Safa for Barati in Delhi", slug: "wedding-safa-for-barati-in-delhi" },
  { name: "Safa Design for Barati in Delhi", slug: "safa-design-for-barati-in-delhi" },
  { name: "Wedding Turban for Barati in Delhi", slug: "wedding-turban-for-barati-in-delhi" },
  { name: "Mens Wedding Turban in Delhi", slug: "mens-wedding-turban-in-delhi" },
  // Rental / Service Based
  { name: "Safa on Rent in Delhi", slug: "safa-on-rent-in-delhi" },
  { name: "Wedding Safa on Rent in Delhi", slug: "wedding-safa-on-rent-in-delhi" },
  { name: "Barati Safa on Rent in Delhi", slug: "barati-safa-on-rent-in-delhi" },
  { name: "Safa on Rent Near Me in Delhi", slug: "safa-on-rent-near-me-in-delhi" },
  { name: "Barati Safa Online in Delhi", slug: "barati-safa-online-in-delhi" },
  { name: "Hand Tied Safa Rental Near Me in Delhi", slug: "hand-tied-safa-rental-near-me-in-delhi" },
  { name: "Heritage Feta Turban Hire in Delhi", slug: "heritage-feta-turban-hire-in-delhi" },
  { name: "Safa Tying Service in Delhi", slug: "safa-tying-service-in-delhi" },
  { name: "Professional Safa Tying in Delhi", slug: "professional-safa-tying-in-delhi" },
  { name: "Pagdi Bandhne Wala in Delhi", slug: "pagdi-bandhne-wala-in-delhi" },
  // Shop / Purchase Intent
  { name: "Buy Wedding Safa in Delhi", slug: "buy-wedding-safa-in-delhi" },
  { name: "Wedding Safa for Rent in Delhi", slug: "wedding-safa-for-rent-in-delhi" },
  { name: "Safa Shop in Delhi", slug: "safa-shop-in-delhi" },
  { name: "Wedding Pagdi Shop in Delhi", slug: "wedding-pagdi-shop-in-delhi" },
  { name: "Groom Turban Shop in Delhi", slug: "groom-turban-shop-in-delhi" },
  { name: "Safa Garments in Delhi", slug: "safa-garments-in-delhi" },
  // Bandhej / Premium
  { name: "Wedding Safa Bandhej in Delhi", slug: "wedding-safa-bandhej-in-delhi" },
  { name: "Groom Safa Bandhej in Delhi", slug: "groom-safa-bandhej-in-delhi" },
  { name: "Royal Wedding Safa in Delhi", slug: "royal-wedding-safa-in-delhi" },
  // Sehra Related
  { name: "Sehra in Delhi", slug: "sehra-in-delhi" },
  { name: "Groom Sehra in Delhi", slug: "groom-sehra-in-delhi" },
  { name: "Dulha Sehra in Delhi", slug: "dulha-sehra-in-delhi" },
  { name: "Dulhe Ka Sehra in Delhi", slug: "dulhe-ka-sehra-in-delhi" },
  { name: "Sehra for Groom in Delhi", slug: "sehra-for-groom-in-delhi" },
  { name: "Customized Sehra for Baraat in Delhi", slug: "customized-sehra-for-baraat-in-delhi" },
  { name: "Sehra Rental in Delhi", slug: "sehra-rental-in-delhi" },
  // Draping / Service
  { name: "Wedding Turban Draping in Delhi", slug: "wedding-turban-draping-in-delhi" },
  { name: "Wedding Safa Draping in Delhi", slug: "wedding-safa-draping-in-delhi" },
]

export function Footer({ hideMainNavigation = false }: FooterProps) {
  return (
    <>
      <LocalBusinessSchema />
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info with Schema */}
            <div itemScope itemType="https://schema.org/LocalBusiness">
              <h2 className="text-3xl font-bold mb-4 text-accent" itemProp="name">
                Safawala Delhi
              </h2>
              <p className="text-primary-foreground/80 font-mono leading-relaxed mb-6" itemProp="description">
                {
                  "Delhi's most trusted wedding turban specialists. Bringing royal elegance to your special day since 2004."
                }
              </p>
              <meta itemProp="url" content="https://safawaladelhi.com" />
              <meta itemProp="telephone" content="+91-9725295692" />
              <meta itemProp="email" content="info@safawaladelhi.com" />
              <meta itemProp="areaServed" content="Delhi" />
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/safawaladelhi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/safawaladelhi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            {!hideMainNavigation && (
            <nav>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["Packages"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.toLowerCase().replace(" ", "-"))
                        element?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            )}

            {/* Services */}
            <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80 font-mono">
              <li>Wedding Turban Tying Service</li>
              <li>Safa & Pagdi Tying</li>
              <li>Groom Turban & Sehra</li>
              <li>Feta & Wedding Turban Design</li>
              <li>Barati Safa Service</li>
              <li>Marathi Pheta Service</li>
              <li>Destination Wedding Turbans</li>
            </ul>
          </div>

          {/* Contact Info with Schema */}
          <address className="not-italic">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-primary-foreground/80 font-mono">
                    Shop No. 15, Ground Floor,<br />
                    Chandni Chowk, Near Red Fort,<br />
                    Delhi – 110006, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+919725295692"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  +91 97252 95692
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@safawaladelhi.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  info@safawaladelhi.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                <div className="text-primary-foreground/80 font-mono">
                  <p>Mon - Sat: 9 AM - 9 PM</p>
                  <p>Sunday: 10 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </address>
        </div>

        {/* Service Areas - We Service In */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-4 text-center">We Service In - All Areas of Delhi NCR</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-sm text-center">
            {DELHI_AREAS.map((area) => (
              <a
                key={area.slug}
                href={`/${area.slug}`}
                className="text-primary-foreground/80 hover:text-accent transition-colors font-mono py-1"
              >
                {area.name}
              </a>
            ))}
          </div>
          <p className="text-center text-accent font-mono text-sm mt-4">
            ✓ Destination Wedding Turban Service | ✓ On-site Safa & Pagdi Tying | ✓ Groom & Baraati Coverage | ✓ All Delhi NCR Areas
          </p>
        </div>

        {/* Our Services Links */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-6 text-center">Wedding Turban Services in Delhi</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            {SERVICE_KEYWORDS.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}`}
                className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
              >
                → {service.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 font-mono text-sm text-center md:text-left">
              © 2025 Safawala Delhi. All rights reserved. | Delhi's Premier Wedding Turban Service
            </p>
            <div className="flex gap-6 text-sm font-mono">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Local SEO - Service Areas in Structured Format */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h3 className="text-xl font-bold mb-4 text-center">Service Areas - All Neighborhoods of Delhi NCR</h3>
          <p className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed max-w-4xl mx-auto">
            We provide professional turban tying service across all major areas of Delhi NCR including:
            <br />
            <strong>South Delhi:</strong> Greater Kailash, Defence Colony, Lajpat Nagar, Saket, Hauz Khas, Green Park, Vasant Kunj, Malviya Nagar
            <br />
            <strong>Central Delhi:</strong> Connaught Place, Karol Bagh, Chandni Chowk, Civil Lines, Rajouri Garden
            <br />
            <strong>West Delhi:</strong> Dwarka, Janakpuri, Punjabi Bagh, Tilak Nagar, Uttam Nagar, Paschim Vihar
            <br />
            <strong>North Delhi:</strong> Rohini, Pitampura, Model Town, Civil Lines
            <br />
            <strong>East Delhi:</strong> Preet Vihar, Mayur Vihar, Shahdara, Laxmi Nagar
            <br />
            <strong>NCR:</strong> Noida, Gurgaon, Faridabad, Ghaziabad
          </p>
          <p className="text-center text-accent font-mono text-sm mt-3 font-semibold">
            ✓ Same-Day Service Available | ✓ Free Consultation | ✓ Destination Weddings | ✓ On-site Styling
          </p>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        Wedding turban Delhi, safa Delhi, pagdi tying service Delhi, groom turban Delhi, wedding safa Delhi, turban tying Delhi,
        best turban service Delhi, safa tying service Delhi, pagdi design Delhi, feta tying Delhi, sehra Delhi, barati safa Delhi,
        turban rental Delhi, turban service Delhi, wedding turban price Delhi, turban for groom Delhi, custom wedding turban Delhi,
        turban tying near me Delhi, groom pagdi Delhi, traditional turban Delhi, premium safa design Delhi, wedding turban online Delhi,
        turban shop Delhi, modern pagdi design Delhi, ethnic turban Delhi, fabric safa Delhi, gold embroidered turban Delhi,
        bridal groom turban Delhi, turban booking Delhi, same day turban service Delhi, professional turban tying Delhi,
        handmade safa Delhi, silk pagdi Delhi, embellished turban Delhi, wedding turban rental Delhi, groom styling Delhi,
        rajasthani safa delhi, jodhpuri safa delhi, marathi pheta delhi, gujarati pagdi delhi, punjabi turban delhi,
        South Delhi safa service, Connaught Place turban tying, Greater Kailash pagdi service, Dwarka wedding turban, Rohini safa tying,
        Noida turban service, Gurgaon safa service, NCR turban, Delhi NCR pagdi, West Delhi safa
      </div>
    </footer>
    </>
  )
}
