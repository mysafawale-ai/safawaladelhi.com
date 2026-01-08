import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'

export const metadata: Metadata = {
  title: 'Safa Service Ajmer Road Jaipur - Local Turban Expert',
  description: 'Professional turban and safa tying service in Ajmer Road area, Jaipur. Expert local specialist. ₹900-2500+',
  keywords: 'safa service ajmer road, turban specialist ajmer road, wedding safa ajmer road',
}

const content = `<h2>Safa Service Across Ajmer Road</h2>
<p>Ajmer Road residents deserve premium turban service without the hassle of traveling across Jaipur. Our specialist serves the entire Ajmer Road area with professional expertise and quick response times.</p>
<h3>Why Choose Our Ajmer Road Service</h3>
<ul><li>Local specialist familiar with Ajmer Road area</li><li>Same-day and advance bookings available</li><li>Direct service to your location</li><li>Quick response within 20-30 minutes</li><li>Experience with Ajmer Road wedding venues</li><li>Flexible pricing for area residents</li></ul>
<h2>Service Types</h2>
<h3>Wedding & Baraat Turban</h3>
<p>Traditional Rajasthani safas and Jodhpuri pagdis for weddings and events.</p>
<h3>Mehndi & Haldi</h3>
<p>Elegant turban tying for pre-wedding celebrations.</p>
<h3>Safa & Pagdi On Rent</h3>
<p>Complete rental and tying packages for all occasions.</p>
<h2>Ajmer Road Pricing</h2>
<h3>Basic Service: ₹900-1200 per person</h3>
<h3>Premium Design: ₹1500-2000 per person</h3>
<h3>Wedding Package (5+): ₹1200-2500+ per person</h3>
<h3>Safa Rental + Tying: ₹2000-3500+ per person</h3>`

export default function AjmerRoadPage() {
  return (
    <ServicePageTemplate
      title="Safa Service Ajmer Road Jaipur - Local Turban Expert"
      description="Professional turban and safa tying service in Ajmer Road area"
      shortDescription="Expert local turban specialist serving Ajmer Road with professional quality and quick service."
      mainImage="/turban-service-hero.jpg"
      videos={[]}
      galleryImages={[]}
      areas={['Ajmer Road', 'Ajmer Road Gate', 'Tonk Road', 'Nearby Areas']}
      keyFeatures={['Local area specialist', 'Same-day bookings', 'Quick response time', 'Wedding venue experience', 'Flexible pricing', 'All turban styles', '15+ years experience', 'Professional team']}
      seoKeywords={['safa service ajmer road', 'turban specialist ajmer road', 'wedding safa ajmer road', 'pagdi tying ajmer road', 'local turban expert ajmer road']}
      content={content}
      faqs={[{question: 'How quickly can you respond to bookings?', answer: 'Within 20-30 minutes for Ajmer Road area.'}, {question: 'Do you provide safa rental?', answer: 'Yes, premium safa rental with expert tying available.'}, {question: 'Can you handle multiple people?', answer: 'Yes, we manage groups of any size with coordinated service.'}, {question: 'What styles do you offer?', answer: 'All traditional and modern turban styles available.'}]}
    />
  )
}
