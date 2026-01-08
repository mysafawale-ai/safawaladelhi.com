import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'

export const metadata: Metadata = {
  title: 'Turban Tying Jagatpura Jaipur - Expert Local Specialist',
  description: 'Professional turban tying and safa pagdi service in Jagatpura, Jaipur. Expert local specialist for weddings, events, and special occasions. ₹900-2500+',
  keywords: 'turban tying jagatpura, safa wala jagatpura, pagdi specialist jagatpura, turban service near jagatpura',
}

const content = `<h2>Turban Tying Service Across Jagatpura</h2>
<p>Jagatpura residents now have access to premium turban tying services without needing to travel across Jaipur. Our local specialist serves the entire Jagatpura area including Jagatpura Colony, Jagatpura Road, Shastri Nagar extensions, and surrounding neighborhoods.</p>
<p>We understand the unique needs of Jagatpura's residents—from traditional family weddings to modern corporate events. Our service covers your doorstep, ensuring perfect tying without any stress on your wedding day or event.</p>
<h3>Why Choose Our Jagatpura Service</h3>
<ul><li>Local expert who knows the area intimately</li><li>Same-day or advance bookings available</li><li>Travel-free service—we come to you</li><li>Quick response times (within 30 minutes)</li><li>Experience with Jagatpura's wedding traditions</li><li>Flexible pricing for area residents</li><li>Professional team with 15+ years experience</li></ul>
<h2>Service Types in Jagatpura</h2>
<h3>Wedding & Baraat Turban Service</h3>
<p>For grooms and family members. We offer traditional Rajasthani safas, Jodhpuri pagdis, and Marwari styles. Our expertise ensures you look absolutely stunning for your big day.</p>
<h3>Mehndi & Haldi Events</h3>
<p>Light, elegant turban tying for pre-wedding celebrations. Perfect for creating Instagram-worthy moments while maintaining traditional aesthetics.</p>
<h3>Reception & Party Turbans</h3>
<p>Professional turban tying for receptions, engagements, and celebrations. Modern designs with traditional elements.</p>
<h2>Local Expertise Meets Professional Excellence</h2>
<p>Being based near Jagatpura gives us unique advantages that ensure your celebration is absolutely perfect. Area knowledge, cultural understanding, quick response times, and years of trusted service in the community.</p>
<h2>Transparent Pricing for Jagatpura Residents</h2>
<h3>Basic Turban Tying Service: ₹900-1200 per person</h3>
<p>Standard safa or pagdi tying service for weddings and events.</p>
<h3>Premium Safa Service: ₹1500-2000 per person</h3>
<p>Designer safas, elaborate Jodhpuri pagdis, or specialty styles with detailed tying.</p>
<h3>Wedding Package (5+ people): ₹1200-2500+ per person</h3>
<p>Group rate with coordination and timing included.</p>
<h3>Safa Rental + Tying: ₹2000-3500+ per person</h3>
<p>Premium safa rental combined with expert tying service.</p>`

export default function JagatpuraPage() {
  return (
    <ServicePageTemplate
      title="Turban Tying Jagatpura Jaipur - Expert Local Specialist"
      description="Professional turban tying and safa pagdi service in Jagatpura"
      shortDescription="Looking for a reliable turban tying specialist in Jagatpura? We bring professional safa and pagdi tying expertise directly to your location with zero compromise on quality."
      mainImage="/turban-service-hero.jpg"
      videos={[]}
      galleryImages={[]}
      areas={['Jagatpura Colony', 'Jagatpura Road', 'Shastri Nagar', 'Jagatpura Extension', 'Raja Park', 'Sindhi Camp']}
      keyFeatures={['Local expert familiar with Jagatpura area', 'Same-day and advance bookings available', 'Travel-free service to your location', 'Quick response times (within 30 minutes)', 'Experience with Jagatpura wedding traditions', 'Flexible pricing for area residents', 'Professional team with 15+ years experience', 'All turban styles available']}
      seoKeywords={['turban tying jagatpura', 'safa wala jagatpura', 'pagdi specialist jagatpura', 'turban service near jagatpura', 'wedding safa jagatpura', 'professional turban artist jagatpura']}
      content={content}
      faqs={[{question: 'How far in advance should I book?', answer: 'For wedding events, 3-4 weeks advance booking is recommended. For smaller events, we can accommodate bookings with just 1-2 days notice.'}, {question: 'Do you come directly to homes in Jagatpura?', answer: 'Yes, absolutely! We serve your home, hotel, banquet hall, or any location within Jagatpura.'}, {question: 'Can you handle multiple people on the same day?', answer: 'Yes, we manage entire family groups. For 3+ people, we recommend booking 2-3 hours before your event start time.'}, {question: 'What if I don\'t have a safa? Can I rent?', answer: 'Yes, we offer premium safa rental with tying service. Choose from our collection or bring your own.'}, {question: 'Are you experienced with all turban styles?', answer: 'Yes—Marwari, Jodhpuri, Rajasthani, Sikh, and contemporary styles. Tell us your preference!'}]}
    />
  )
}
