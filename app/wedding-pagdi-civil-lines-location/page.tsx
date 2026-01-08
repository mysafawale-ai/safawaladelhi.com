import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'

export const metadata: Metadata = {
  title: 'Wedding Pagdi Civil Lines Jaipur - Premium Expert Service',
  description: 'Professional wedding pagdi and safa tying service in Civil Lines, Jaipur. Expert turban specialist. ₹950-2600+',
  keywords: 'wedding pagdi civil lines, turban specialist civil lines, safa service civil lines',
}

const content = `<h2>Premium Wedding Pagdi Service in Civil Lines</h2>
<p>Civil Lines residents have always appreciated quality and professionalism—and that's exactly what we deliver in turban service. We're the recognized pagdi specialist serving Civil Lines with premium expertise and reliable service.</p>
<p>Your wedding deserves attention to detail, cultural respect, and absolute excellence. Our Civil Lines specialist provides exactly that.</p>
<h3>Why Civil Lines Families Choose Us</h3>
<ul><li>Professional expertise meeting Civil Lines standards</li><li>Reliable, punctual service with zero compromise</li><li>Experience with Civil Lines' premium wedding venues</li><li>Cultural sensitivity to family traditions</li><li>Personalized consultation and styling advice</li><li>Premium quality materials and meticulous tying</li><li>Proven track record in the neighborhood</li><li>Flexible scheduling for all-day celebrations</li></ul>
<h2>Wedding Pagdi Expertise for Civil Lines</h2>
<h3>Traditional Wedding Styles</h3>
<p>Classic Rajasthani pagdis perfect for traditional Civil Lines celebrations. Bold, confident, culturally authentic.</p>
<h3>Modern Designer Pagdis</h3>
<p>Contemporary turban designs that honor tradition while reflecting modern aesthetic preferences.</p>
<h3>Coordinated Family Looks</h3>
<p>We ensure groom, groomsmen, and family members have harmonious, coordinated turban looks.</p>
<h2>Civil Lines Community Advantage</h2>
<p>Being based near Civil Lines gives us specific advantages for serving the community. Neighborhood understanding, quick response time, venue familiarity, professional standards, and community reputation.</p>
<h2>Civil Lines Pricing Structure</h2>
<h3>Basic Wedding Tying: ₹950-1400 per person</h3>
<p>Professional pagdi tying service for weddings.</p>
<h3>Premium Designer Service: ₹1600-2300 per person</h3>
<p>High-end designer pagdis with elaborate tying techniques.</p>
<h3>Wedding Day Full Package (5+ people): ₹1300-2600+ per person</h3>
<p>Complete group coordination with preparation timing.</p>
<h3>Premium Safa Rental + Tying: ₹2200-3600+ per person</h3>
<p>Top-quality safa rental with expert tying service included.</p>`

export default function CivilLinesWeddingPage() {
  return (
    <ServicePageTemplate
      title="Wedding Pagdi Civil Lines Jaipur - Premium Expert Service"
      description="Professional wedding pagdi and safa tying service in Civil Lines"
      shortDescription="Premium pagdi tying service for Civil Lines residents. Professional expertise combined with personal attention to detail."
      mainImage="/turban-service-hero.jpg"
      videos={[]}
      galleryImages={[]}
      areas={['Civil Lines', 'New Civil Lines', 'Ram Nagar', 'Bani Park', 'Nearby Areas']}
      keyFeatures={['Professional expertise for Civil Lines', 'Reliable, punctual service', 'Experience with premium venues', 'Cultural sensitivity', 'Personalized consultation', 'Premium quality materials', 'Proven neighborhood track record', 'Flexible all-day service']}
      seoKeywords={['wedding pagdi civil lines', 'turban specialist civil lines', 'safa service civil lines', 'pagdi tying near civil lines', 'premium turban service civil lines']}
      content={content}
      faqs={[{question: 'Do you offer consultations before the wedding?', answer: 'Yes, we recommend pre-wedding consultations to discuss styles, colors, and preferences.'}, {question: 'What turban styles work best with sherwani?', answer: 'Depends on sherwani design, color, and your face shape. We provide expert guidance during consultation.'}, {question: 'Can you accommodate multiple family members?', answer: 'Absolutely. We manage groups of any size with coordinated timing and looks.'}, {question: 'How early should we book?', answer: '3-4 weeks advance for wedding season. Can accommodate shorter notice for off-season events.'}, {question: 'Do you provide safa rental?', answer: 'Yes, we offer premium safa rental with expert tying service combined.'}]}
    />
  )
}
