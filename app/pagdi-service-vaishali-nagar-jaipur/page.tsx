import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata = {
  title: "Pagdi Service Vaishali Nagar Jaipur | Wedding Turban Specialist | Safawala",
  description: "Professional pagdi service in Vaishali Nagar Jaipur. Expert wedding turban tying with local expertise. Quick booking available.",
}

export default function PagdiVaishaliNagar() {
  const pageData = {
    title: "Pagdi Service Vaishali Nagar Jaipur",
    shortDescription: "Professional pagdi tying service in Vaishali Nagar Jaipur. Expert wedding turban specialist serving your area with convenient local service.",
    description: "Vaishali Nagar pagdi service",
    mainImage: "/20-3.webp",
    videos: ["/video-1.mp4", "/video-6.mp4"],
    galleryImages: ["/21-3.webp", "/23-3.webp", "/25-3.webp", "/27-3.webp", "/28-3.webp"],
    areas: ["Vaishali Nagar", "C-Scheme", "Mansarovar"],
    keyFeatures: ["Vaishali Nagar expert", "Local service", "Same-day available", "Expert tying", "Professional finish", "Quick response", "Venue service", "Master execution"],
    seoKeywords: ["pagdi service vaishali nagar", "wedding turban vaishali nagar", "safa tying vaishali nagar"],
    content: `<h2>Pagdi Service in Vaishali Nagar Jaipur: Local Wedding Turban Expert</h2><p>Vaishali Nagar residents need professional pagdi service right in their area. Safawala provides expert wedding turban tying specifically for Vaishali Nagar families and events. Our Vaishali Nagar pagdi specialists understand your neighborhood completely—local venues, local preferences, local timing needs. When your wedding is in Vaishali Nagar, get local expertise from specialists who know your area intimately.</p><h2>Vaishali Nagar Pagdi Service Specialties</h2><h3>Local Groom Pagdi Styling</h3><p>Complete pagdi styling for Vaishali Nagar grooms. Expert face analysis, style recommendation, and master-level execution.</p><h3>Family & Guest Coordination</h3><p>Professional pagdi styling for family members and guests at Vaishali Nagar weddings.</p><h3>Venue-Based Service</h3><p>We come to your Vaishali Nagar venue with complete expertise and equipment.</p><h3>Same-Day Service Available</h3><p>Emergency pagdi needs? Contact us for rush bookings possible in Vaishali Nagar.</p><h2>Why Vaishali Nagar Residents Trust Safawala</h2><h3>Area Familiarity</h3><p>We know Vaishali Nagar venues, neighborhoods, traffic patterns, and local logistics completely.</p><h3>Quick Local Response</h3><p>Being local means fast response times. We're never far from Vaishali Nagar customers.</p><h3>Personalized Service</h3><p>Local specialists provide dedicated, personalized attention.</p><h3>Best Local Value</h3><p>Fair local pricing without unnecessary charges.</p><h2>Vaishali Nagar Pagdi Pricing</h2><p><strong>Standard Pagdi:</strong> ₹800-1200 | <strong>Designer Pagdi:</strong> ₹1200-1800 | <strong>Premium Pagdi:</strong> ₹1800-2500+</p><p><strong>Call:</strong> +91-9725295692 | <strong>Vaishali Nagar Specialist</strong> | <strong>WhatsApp Available</strong></p>`,
    faqs: [
      { question: "Do you serve Vaishali Nagar events?", answer: "Yes, Vaishali Nagar is our primary service area with complete local expertise." },
      { question: "Can you provide same-day service in Vaishali Nagar?", answer: "Often yes, depending on schedule. Contact us for rush booking possibility." },
      { question: "Do you come to Vaishali Nagar venues?", answer: "Absolutely. We provide on-location service throughout Vaishali Nagar." },
    ],
  }
  return <ServicePageTemplate {...pageData} />
}
