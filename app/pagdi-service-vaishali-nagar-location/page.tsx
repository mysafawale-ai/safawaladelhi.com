import { ServicePageTemplate } from "@/components/service-page-template"

const areas = ["Vaishali Nagar", "Mansarovar", "Malviya Nagar", "C-Scheme", "Tonk Road"]

export const metadata = {
  title: "Pagdi Service Vaishali Nagar Jaipur | Professional Turban Specialist | Safawala",
  description: "Professional pagdi service in Vaishali Nagar Jaipur. Expert turban specialist providing perfect wedding pagdi. Safawala - local expert.",
}

export default function PagdiServiceVaisHALINagar() {
  const pageData = {
    title: "Pagdi Service Vaishali Nagar Jaipur",
    shortDescription: "Professional pagdi service in Vaishali Nagar Jaipur. Local expert turban specialist with on-site service for Vaishali Nagar residents.",
    description: "Pagdi service Vaishali Nagar.",
    mainImage: "/21-3.webp",
    videos: ["/video-1.mp4", "/video-6.mp4"],
    galleryImages: ["/23-3.webp", "/25-3.webp", "/27-3.webp", "/28-3.webp", "/33-3.webp"],
    areas: areas,
    keyFeatures: ["Local service", "Vaishali Nagar expert", "On-site tying", "Quick response", "Same-day booking", "Professional quality", "Affordable rates", "Expert execution"],
    seoKeywords: ["pagdi service vaishali nagar jaipur", "turban specialist vaishali nagar", "wedding pagdi vaishali nagar", "local turban service"],
    content: `<h2>Pagdi Service Vaishali Nagar Jaipur - Local Expert</h2><p>Professional pagdi service serving Vaishali Nagar and nearby Jaipur areas. Local expert specialist providing expert turban styling with convenient on-site service.</p><h2>Vaishali Nagar Pagdi Service Benefits</h2><h3>Local Specialist</h3><p>Based in Jaipur, serving Vaishali Nagar residents with quick response and expert knowledge.</p><h3>On-Site Convenience</h3><p>Come to your Vaishali Nagar home or venue for expert turban tying at your location.</p><h3>Same-Day Availability</h3><p>Quick booking, flexible scheduling, same-day service often available for Vaishali Nagar.</p><h3>Professional Quality</h3><p>Expert execution creating perfect pagdis for Vaishali Nagar celebrations.</p><h2>Vaishali Nagar Services Offered</h2><h3>Wedding Pagdi Tying</h3><p>Expert groom pagdi styling for Vaishali Nagar weddings and celebrations.</p><h3>Family Coordination</h3><p>Coordinating pagdis for family members and guests in Vaishali Nagar events.</p><h3>On-Venue Tying</h3><p>Professional tying at your Vaishali Nagar venue or home location.</p><h3>Group Services</h3><p>Coordinating multiple pagdis for Vaishali Nagar barati or celebration groups.</p><h2>Why Vaishali Nagar Residents Choose Us</h2><h3>Local Convenience</h3><p>Quick response to Vaishali Nagar area. Minimal travel time, maximum comfort.</p><h3>Expert Local Knowledge</h3><p>Understanding Vaishali Nagar area, local preferences, and neighbourhood venues.</p><h3>Professional Results</h3><p>Master specialist creating perfect pagdis for Vaishali Nagar celebrations.</p><h3>Affordable Local Rates</h3><p>Competitive pricing for Vaishali Nagar residents.</p><h2>Vaishali Nagar Pagdi Pricing</h2><p><strong>Standard Pagdi Service:</strong> ₹900-1300</p><p><strong>Premium Pagdi Styling:</strong> ₹1300-1800</p><p><strong>Elaborate Festival Pagdi:</strong> ₹1800-2500+</p><h2>Book Pagdi Service in Vaishali Nagar</h2><p><strong>Call:</strong> +91-9725295692 | <strong>Vaishali Nagar Specialist</strong> | <strong>Local Expert Service</strong> | <strong>On-Site Tying</strong></p>`,
    faqs: [
      { question: "How quickly can you serve Vaishali Nagar area?", answer: "Very fast! We're local to Jaipur and serve Vaishali Nagar with quick response times." },
      { question: "Do you provide on-site pagdi tying in Vaishali Nagar?", answer: "Yes, we come directly to your Vaishali Nagar home or venue for complete service." },
      { question: "Can you handle large Vaishali Nagar wedding groups?", answer: "Absolutely. We coordinate multiple pagdis for large celebrations and barati services." },
    ],
  }
  return <ServicePageTemplate {...pageData} />
}
