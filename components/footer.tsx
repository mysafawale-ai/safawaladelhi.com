"use client"

import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"
import { LocalBusinessSchema } from "./local-business-schema"

interface FooterProps {
  hideMainNavigation?: boolean
}

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
                Safawala
              </h2>
              <p className="text-primary-foreground/80 font-mono leading-relaxed mb-6" itemProp="description">
                {
                  "Jaipur's most trusted wedding turban specialists. Bringing royal elegance to your special day since 2004."
                }
              </p>
              <meta itemProp="url" content="https://safawala.com" />
              <meta itemProp="telephone" content="+91-9725295692" />
              <meta itemProp="email" content="info@safawalajaipur.com" />
              <meta itemProp="areaServed" content="Jaipur" />
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/people/Safawalacom/61579176513014/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/safawalaofficial/"
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
                    Shop No. 12-13, 1st Floor,<br />
                    Near Ramganj Chaupar, Ramganj Bazaar,<br />
                    Jaipur, Rajasthan – 302003, India
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
                  href="mailto:info@safawalajaipur.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  info@safawalajaipur.com
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

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-4 text-center">Wedding Turban Service - All Areas of Jaipur</h4>
          <p className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed">
            C-Scheme, Vaishali Nagar, Mansarovar, Malviya Nagar, Jagatpura, Raja Park, Sindhi Camp, Civil Lines, Bani Park, Ajmer Road, Tonk Road, JLN Marg, Sanganer, Ganj Katla, Ashok Nagar, Ram Nagar, Kalyan Vihar, Vidhyadhar Nagar, Shyam Nagar, Pal Road, Bahubali, Bapu Nagar, Ganesh Mandi, Lal Kothi, Niwaru Road, Ramganj, Ramesh Nagar, Bijnor Road, Pratap Nagar, Mahavir Nagar, Chaura Rasta, Alwar Bypass, Amber Fort Area, Seven Hills, Four Seasons Valley, Clarks Amer, Nahargarh, Naila Fort, and all surrounding areas of Jaipur
          </p>
          <p className="text-center text-accent font-mono text-sm mt-3">
            ✓ Destination Wedding Turban Service | ✓ On-site Safa & Pagdi Tying | ✓ Groom & Baraati Coverage
          </p>
        </div>

        {/* Our Services Links */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-6 text-center">Wedding Turban Services</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <a href="/wedding-safa-tying-in-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Safa Tying in Jaipur
            </a>
            <a href="/groom-pagdi-tying-service-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Groom Pagdi Tying Service Jaipur
            </a>
            <a href="/rajasthani-turban-tying-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Rajasthani Turban Tying Jaipur
            </a>
            <a href="/barati-safa-pagdi-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Barati Safa Pagdi Jaipur
            </a>
            <a href="/destination-wedding-safa-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Destination Wedding Safa Jaipur
            </a>
            <a href="/royal-rajwadi-safa-tying-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Royal Rajwadi Safa Tying Jaipur
            </a>
            <a href="/marwari-wedding-pagdi-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Marwari Wedding Pagdi Jaipur
            </a>
            <a href="/jaipur-turban-tying-for-guests" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Jaipur Turban Tying for Guests
            </a>
            <a href="/designer-wedding-safa-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Designer Wedding Safa Jaipur
            </a>
            <a href="/pagdi-bandhne-wala-in-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Pagdi Bandhne Wala in Jaipur
            </a>
            <a href="/floral-safa-pagdi-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Floral Safa Pagdi Jaipur
            </a>
            <a href="/sehra-and-pagdi-for-groom-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Sehra and Pagdi for Groom Jaipur
            </a>
            <a href="/sherwani-safa-turban-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Sherwani Safa Turban Jaipur
            </a>
            <a href="/traditional-rajasthani-pagri-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Traditional Rajasthani Pagri Jaipur
            </a>
            <a href="/wedding-feta-tying-service-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Feta Tying Service Jaipur
            </a>
            <a href="/mehndi-function-safa-tying-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Mehndi Function Safa Tying Jaipur
            </a>
            <a href="/baraat-pagdi-rental-and-tying-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Baraat Pagdi Rental and Tying Jaipur
            </a>
            <a href="/premium-groom-turban-service-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Premium Groom Turban Service Jaipur
            </a>
            <a href="/jaipur-safa-pagdi-on-rent-with-tying" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Jaipur Safa Pagdi On Rent With Tying
            </a>
            <a href="/corporate-and-wedding-turban-tying-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Corporate and Wedding Turban Tying Jaipur
            </a>
            <a href="/wedding-turban-styling-services-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Turban Styling Services Jaipur
            </a>
            <a href="/turban-tying-services-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Turban Tying Services in Jaipur
            </a>
            <a href="/wedding-safa-wala-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Safa Wala in Jaipur
            </a>
            <a href="/pagdi-tying-artist-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Pagdi Tying Artist in Jaipur
            </a>
            <a href="/safa-pagdi-tying-wedding-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Safa Pagdi Tying for Wedding Jaipur
            </a>
            <a href="/turban-tying-services-in-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Turban Tying Services in Jaipur
            </a>
            <a href="/wedding-safa-wala-in-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Safa Wala in Jaipur
            </a>
            <a href="/marwari-safa-tying-in-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Marwari Safa Tying in Jaipur
            </a>
            <a href="/jodhpuri-pagdi-tying-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Jodhpuri Pagdi Tying Jaipur
            </a>
            <a href="/professional-turban-artist-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Professional Turban Artist Jaipur
            </a>
            <a href="/wedding-pagdi-service-near-me-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Pagdi Service Near Me Jaipur
            </a>
            <a href="/safa-tying-at-venue-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Safa Tying At Venue Jaipur
            </a>
            <a href="/safa-pagdi-on-rent-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Safa Pagdi On Rent Jaipur
            </a>
            <a href="/pagdi-on-rent-for-wedding-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Pagdi On Rent For Wedding Jaipur
            </a>
            <a href="/wedding-safa-with-tying-service-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Safa With Tying Service Jaipur
            </a>
            <a href="/turban-tying-destination-wedding-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Turban Tying For Destination Wedding Jaipur
            </a>
            <a href="/barat-safa-pagdi-package-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Barat Safa Pagdi Package Jaipur
            </a>
            <a href="/mehndi-haldi-safa-tying-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Mehndi Haldi Safa Tying Jaipur
            </a>
            <a href="/reception-turban-tying-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Reception Turban Tying Jaipur
            </a>
            <a href="/festival-pagdi-tying-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Festival Pagdi Tying Jaipur
            </a>
            <a href="/corporate-event-turban-tying-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Corporate Event Turban Tying Jaipur
            </a>
            <a href="/foreigner-turban-experience-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Foreigner Turban Experience Jaipur
            </a>
            <a href="/royal-wedding-safa-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Royal Wedding Safa Jaipur
            </a>
            <a href="/rajputi-pagdi-for-groom-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Rajputi Pagdi For Groom Jaipur
            </a>
            <a href="/designer-rajasthani-safa-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Designer Rajasthani Safa Jaipur
            </a>
            <a href="/colourful-bandhej-safa-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Colourful Bandhej Safa Jaipur
            </a>
            <a href="/gota-patti-safa-pagdi-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Gota Patti Safa Pagdi Jaipur
            </a>
            <a href="/floral-sehra-with-pagdi-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Floral Sehra With Pagdi Jaipur
            </a>
            <a href="/groom-sherwani-turban-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Groom Sherwani Turban Jaipur
            </a>
            <a href="/ladkewale-safa-tying-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Ladkewale Safa Tying Jaipur
            </a>
            <a href="/ladkiwale-pagdi-tying-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Ladkiwale Pagdi Tying Jaipur
            </a>
            <a href="/family-matching-safa-pagdi-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Family Matching Safa Pagdi Jaipur
            </a>
          </div>
        </div>

        {/* Location-Based Services */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-6 text-center">Turban Services By Location</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <a href="/safa-tying-c-scheme-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Safa Tying C-Scheme Jaipur
            </a>
            <a href="/pagdi-service-vaishali-nagar-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Pagdi Service Vaishali Nagar Jaipur
            </a>
            <a href="/wedding-turban-mansarovar-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Turban Mansarovar Jaipur
            </a>
            <a href="/groom-safa-malviya-nagar-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Groom Safa Malviya Nagar Jaipur
            </a>
            <a href="/turban-tying-jagatpura-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Turban Tying Jagatpura Jaipur
            </a>
            <a href="/pagdi-wala-raja-park-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Pagdi Wala Raja Park Jaipur
            </a>
            <a href="/barati-safa-sindhi-camp-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Barati Safa Sindhi Camp Jaipur
            </a>
            <a href="/wedding-pagdi-civil-lines-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Pagdi Civil Lines Jaipur
            </a>
            <a href="/royal-turban-bani-park-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Royal Turban Bani Park Jaipur
            </a>
            <a href="/safa-service-ajmer-road-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Safa Service Ajmer Road Jaipur
            </a>
            <a href="/pagdi-tying-tonk-road-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Pagdi Tying Tonk Road Jaipur
            </a>
            <a href="/turban-jln-marg-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Turban Near JLN Marg Jaipur
            </a>
            <a href="/wedding-safa-sanganer-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Safa Sanganer Jaipur
            </a>
            <a href="/groom-pagdi-ganj-katla-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Groom Pagdi Ganj Katla Jaipur
            </a>
            <a href="/turban-tying-ashok-nagar-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Turban Tying Ashok Nagar Jaipur
            </a>
            <a href="/safa-wala-ram-nagar-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Safa Wala Ram Nagar Jaipur
            </a>
            <a href="/pagdi-service-kalyan-vihar-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Pagdi Service Kalyan Vihar Jaipur
            </a>
            <a href="/barat-turban-vidhyadhar-nagar-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Barat Turban Vidhyadhar Nagar Jaipur
            </a>
            <a href="/royal-safa-shyam-nagar-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Royal Safa Shyam Nagar Jaipur
            </a>
            <a href="/wedding-pagdi-pal-road-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Pagdi Pal Road Jaipur
            </a>
            <a href="/turban-tying-bahubali-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Turban Tying Bahubali Jaipur
            </a>
            <a href="/safa-tying-bapu-nagar-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Safa Tying Bapu Nagar Jaipur
            </a>
            <a href="/pagdi-artist-ganesh-mandi-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Pagdi Artist Ganesh Mandi Jaipur
            </a>
            <a href="/groom-turban-lal-kothi-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Groom Turban Lal Kothi Jaipur
            </a>
            <a href="/wedding-safa-niwaru-road-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Safa Niwaru Road Jaipur
            </a>
            <a href="/turban-service-ramganj-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Turban Service Ramganj Jaipur
            </a>
            <a href="/pagdi-wala-ramesh-nagar-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Pagdi Wala Ramesh Nagar Jaipur
            </a>
            <a href="/safa-near-bijnor-road-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Safa Near Bijnor Road Jaipur
            </a>
            <a href="/barati-pagdi-pratap-nagar-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Barati Pagdi Pratap Nagar Jaipur
            </a>
            <a href="/turban-tying-mahavir-nagar-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Turban Tying Mahavir Nagar Jaipur
            </a>
            <a href="/royal-safa-chaura-rasta-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Royal Safa Chaura Rasta Jaipur
            </a>
            <a href="/wedding-turban-alwar-bypass-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Turban Alwar Bypass Jaipur
            </a>
            <a href="/pagdi-amber-fort-area-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Pagdi Amber Fort Area Jaipur
            </a>
            <a href="/groom-safa-seven-hills-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Groom Safa Seven Hills Jaipur
            </a>
            <a href="/turban-service-four-seasons-valley-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Turban Service Four Seasons Valley Jaipur
            </a>
            <a href="/safa-tying-clarks-amer-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Safa Tying Clarks Amer Jaipur
            </a>
            <a href="/pagdi-near-nahargarh-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Pagdi Near Nahargarh Jaipur
            </a>
            <a href="/wedding-safa-naila-fort-jaipur" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Wedding Safa Naila Fort Jaipur
            </a>
            <a href="/turban-tying-jaipur-outskirts" className="text-primary-foreground/80 hover:text-accent transition-colors font-mono">
              → Turban Tying Jaipur Outskirts
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 font-mono text-sm text-center md:text-left">
              © 2025 Safawala. All rights reserved. | Jaipur's Premier Wedding Turban Service
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
          <h3 className="text-xl font-bold mb-4 text-center">Service Areas - All Neighborhoods of Jaipur</h3>
          <p className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed max-w-4xl mx-auto">
            We provide professional turban tying service across all major areas of Jaipur including:
            <br />
            <strong>Central Jaipur:</strong> C-Scheme, Civil Lines, Bani Park, Raja Park, Sindhi Camp, JLN Marg
            <br />
            <strong>East Jaipur:</strong> Vaishali Nagar, Vidhyadhar Nagar, Shyam Nagar, Kalyan Vihar
            <br />
            <strong>South Jaipur:</strong> Mansarovar, Malviya Nagar, Jagatpura, Ajmer Road, Tonk Road
            <br />
            <strong>Other Areas:</strong> Sanganer, Ashok Nagar, Ram Nagar, Pal Road, Bapu Nagar, Ganesh Mandi, Niwaru Road, Ramganj, Alwar Bypass, Amber Fort Area, and all surrounding areas
          </p>
          <p className="text-center text-accent font-mono text-sm mt-3 font-semibold">
            ✓ Same-Day Service Available | ✓ Free Consultation | ✓ Destination Weddings | ✓ On-site Styling
          </p>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        Wedding turban Jaipur, safa Jaipur, pagdi tying service, groom turban, Rajasthani turban, wedding safa, feta,
        sehra, barati safa, turban rental Jaipur, turban service Jaipur, wedding turban price, turban for groom, best
        turban service Jaipur, custom wedding turban, turban tying near me, groom pagdi, traditional turban Jaipur,
        premium safa design, wedding turban online, turban shop Jaipur, modern pagdi design, ethnic turban, fabric safa,
        gold embroidered turban, bridal groom turban, turban booking Jaipur, same day turban service, professional
        turban tying, handmade safa, silk pagdi, embellished turban, wedding turban rental, groom styling Jaipur,
        wedding safa tying in Jaipur, groom pagdi tying service, traditional rajasthani pagri, barati safa pagdi,
        destination wedding safa, designer wedding safa, floral safa pagdi, sehra and pagdi for groom, sherwani safa turban,
        wedding feta tying, mehndi function safa, baraat pagdi rental, premium groom turban, safa pagdi on rent,
        corporate turban tying, turban specialist Jaipur, master turban tying, authentic turban service, local turban expert
      </div>
    </footer>
    </>
  )
}
