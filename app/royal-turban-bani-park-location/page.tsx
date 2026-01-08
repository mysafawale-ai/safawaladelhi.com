import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'

export const metadata: Metadata = {
  title: 'Royal Turban Bani Park Jaipur - Premium Wedding Expert',
  description: 'Premium royal turban and safa service in Bani Park, Jaipur. Expert specialist for weddings and premium events. ₹1000-2700+',
  keywords: 'royal turban bani park, safa specialist bani park, wedding turban service bani park',
}

const content = `<h2>Royal Turban Service in Bani Park</h2>
<p>Bani Park is Jaipur's most celebrated and exclusive residential area—a neighborhood known for premium celebrations and discerning taste. For Bani Park families, we bring royal turban expertise combined with absolute premium quality.</p>
<p>We understand that Bani Park celebrations are among Jaipur's most prestigious events. Your turban deserves expertise that matches that stature.</p>
<h3>Why Bani Park Chooses Our Royal Turban Service</h3>
<ul><li>Royal heritage expertise and prestigious styling</li><li>Premium quality materials and meticulous craftsmanship</li><li>Experience with Bani Park's most celebrated celebrations</li><li>Personal attention and bespoke styling</li><li>Cultural sophistication combined with modern aesthetics</li><li>Flawless execution for prestigious events</li><li>Proven expertise with Bani Park's elite families</li><li>Absolute discretion and professional excellence</li></ul>
<h2>Royal Heritage & Premium Excellence</h2>
<h3>Royal Rajasthani Safas</h3>
<p>Classic styles worn by Rajasthani royalty. Bold, commanding, absolutely regal.</p>
<h3>Designer Premium Turbans</h3>
<p>Bespoke turbans created specifically for your face, outfit, and celebration aesthetic.</p>
<h3>Heritage Styles</h3>
<p>Authentic historical turban styles honoring Rajasthani royal traditions.</p>
<h2>Bani Park Celebration Expertise</h2>
<p>Premium wedding celebrations, multi-day celebrations, destination wedding coordination, diplomatic & social events, premium venue experience, media & photography coordination.</p>
<h2>Premium Royal Turban Pricing</h2>
<h3>Premium Designer Royal Turban: ₹1500-2400+ per person</h3>
<p>Bespoke designer turban with royal heritage styling.</p>
<h3>Royal Heritage Safa: ₹1800-2700+ per person</h3>
<p>Classic royal styles in premium materials with expert tying.</p>
<h3>Wedding Celebration Package (5+ people): ₹1600-3000+ per person</h3>
<p>Complete package with bespoke styling and coordination.</p>
<h3>Premium Safa Rental + Royal Tying: ₹2500-4200+ per person</h3>
<p>Finest quality safa rental with bespoke royal tying service.</p>`

export default function RoyalTurbanBaniParkPage() {
  return (
    <ServicePageTemplate
      title="Royal Turban Bani Park Jaipur - Premium Wedding Expert"
      description="Premium royal turban and safa service in Bani Park"
      shortDescription="Elite turban specialist serving Bani Park with royal heritage expertise and premium excellence."
      mainImage="/turban-service-hero.jpg"
      videos={[]}
      galleryImages={[]}
      areas={['Bani Park', 'Civil Lines', 'New Civil Lines', 'Premium Jaipur Areas']}
      keyFeatures={['Royal heritage expertise', 'Premium quality craftsmanship', 'Bani Park elite celebration experience', 'Bespoke personal styling', 'Cultural sophistication', 'Flawless execution', 'Elite family expertise', 'Absolute discretion']}
      seoKeywords={['royal turban bani park', 'safa specialist bani park', 'wedding turban service bani park', 'premium turban bani park', 'elite turban artist bani park']}
      content={content}
      faqs={[{question: 'Can you create bespoke/custom turbans?', answer: 'Yes, we work with premium craftspeople to create bespoke turbans if standard options aren\'t sufficient.'}, {question: 'What materials do you recommend?', answer: 'Depends on your celebration aesthetic. We recommend materials matching your outfit and venue.'}, {question: 'How do you ensure absolute privacy?', answer: 'All client information remains completely confidential. We maintain professional discretion in all dealings.'}, {question: 'Can you coordinate across multiple celebration days?', answer: 'Absolutely. We specialize in multi-day celebrations with coordinated styling across events.'}, {question: 'Do you travel for destination celebrations?', answer: 'Yes, we travel throughout India for premium client celebrations.'}]}
    />
  )
}
