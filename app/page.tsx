import { HeroSlider } from "@/components/hero-slider"
import { AboutSection } from "@/components/about-section"
import { ContactForm } from "@/components/contact-form"
import { GallerySection } from "@/components/gallery-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <AboutSection />
      <ContactForm />
      <GallerySection />
      <ServicesSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
