import { ServicePageTemplate } from "@/components/service-page-template"

const jaiaurAreas = ["C-Scheme", "Vaishali Nagar", "Mansarovar", "Malviya Nagar", "Jagatpura", "Raja Park", "Sindhi Camp", "Civil Lines", "Bani Park", "Ajmer Road", "Tonk Road", "JLN Marg", "Sanganer", "Ashok Nagar", "Ram Nagar", "Kalyan Vihar", "Vidhyadhar Nagar", "Shyam Nagar", "Pal Road", "Bapu Nagar"]

export const metadata = {
  title: "Safa Tying in C-Scheme Jaipur | Professional Turban Service | Safawala",
  description: "Professional safa tying service in C-Scheme Jaipur. Expert turban specialist providing perfect wedding safa. Safawala - trusted local expert.",
}

export default function SafaTyingCScheme() {
  const pageData = {
    title: "Safa Tying in C-Scheme Jaipur",
    shortDescription: "Professional safa tying service in C-Scheme Jaipur. Expert local turban specialist creating perfect wedding safas with on-site service.",
    description: "Safa tying service in C-Scheme.",
    mainImage: "/21-3.webp",
    videos: ["/video-1.mp4", "/video-6.mp4"],
    galleryImages: ["/23-3.webp", "/25-3.webp", "/27-3.webp", "/28-3.webp", "/33-3.webp"],
    areas: ["C-Scheme", "Near Sindhi Camp", "Raja Park", "Sanganeri Gate"],
    keyFeatures: ["Local expert service", "C-Scheme specialist", "On-site tying", "Quick response", "Same-day service", "Expert craftsmanship", "Affordable rates", "Professional execution"],
    seoKeywords: ["safa tying C-Scheme jaipur", "turban service C-Scheme", "wedding safa C-Scheme", "pagdi tying near me"],
    content: `<h2>Safa Tying in C-Scheme Jaipur - Local Expert Service</h2><p>Professional safa tying service serving C-Scheme and surrounding Jaipur areas. Local expert specialist providing convenient, high-quality turban service at your C-Scheme location.</p><h2>Why Choose Local C-Scheme Safa Service</h2><h3>Convenient Local Availability</h3><p>Based in Jaipur, quick response to C-Scheme and nearby areas. Minimal travel time, maximum convenience.</p><h3>Expert Local Knowledge</h3><p>Understanding C-Scheme area and local preferences. Familiar with local wedding traditions.</p><h3>On-Site Service</h3><p>Come to your C-Scheme home, venue, or event location. Complete tying at your place.</p><h3>Quick Scheduling</h3><p>Easy booking, flexible scheduling, same-day service available. Professional, hassle-free service.</p><h2>Our C-Scheme Safa Services</h2><h3>Wedding Safa Tying</h3><p>Expert groom turban styling for C-Scheme weddings. Complete coordination with ceremony and celebrations.</p><h3>Family & Guest Coordination</h3><p>Coordinating turbans for family members and wedding guests in C-Scheme celebrations.</p><h3>On-Venue Setup</h3><p>Come to your C-Scheme venue for convenient on-site turban tying and adjustments.</p><h3>Rental Turban Service</h3><p>Quality rental turbans with expert tying for C-Scheme residents and celebrations.</p><h2>Service Area Coverage</h2><p>Serving C-Scheme, Sindhi Camp, Raja Park, Sanganeri Gate, and surrounding C-Scheme proximity areas. Quick response time for local requests.</p><h2>Safa Tying Process in C-Scheme</h2><h3>Call & Booking</h3><p>Easy phone booking with our local team. Flexible scheduling for your convenience.</p><h3>Local Specialist Arrival</h3><p>Our C-Scheme area specialist arrives at your location with all necessary materials.</p><h3>Expert Tying</h3><p>Professional execution of perfect safa styling at your C-Scheme venue or home.</p><h3>Final Adjustments</h3><p>Ensuring perfect comfort and appearance for all-day celebration.</p><h2>Why C-Scheme Residents Choose Us</h2><h3>Local Expertise</h3><p>Understanding C-Scheme area, local preferences, and nearby wedding venues.</p><h3>Convenient Service</h3><p>On-site tying at your C-Scheme location saves time and stress.</p><h3>Professional Quality</h3><p>Expert execution creating perfect safas every time.</p><h3>Reasonable Pricing</h3><p>Local competitive pricing without compromising quality.</p><h2>C-Scheme Safa Pricing</h2><p><strong>Standard Safa Tying:</strong> ₹900-1300</p><p><strong>Premium Wedding Safa:</strong> ₹1300-1800</p><p><strong>Elaborate Festival Safa:</strong> ₹1800-2500+</p><p><strong>Group Barati Service:</strong> ₹300-600 per person</p><h2>Book Safa Tying in C-Scheme Today</h2><p><strong>Call:</strong> +91-9725295692 | <strong>C-Scheme Specialist</strong> | <strong>Local Expert Service</strong> | <strong>On-Site Tying Available</strong> | <strong>Same-Day Service</strong></p>`,
    faqs: [
      { question: "How quickly can you respond to C-Scheme bookings?", answer: "Very quickly! Same-day service often available for C-Scheme residents." },
      { question: "Can you come to my C-Scheme venue on wedding day?", answer: "Absolutely. We provide on-site turban tying at your C-Scheme venue or home." },
      { question: "What areas near C-Scheme do you cover?", answer: "We serve C-Scheme, Sindhi Camp, Raja Park, Sanganeri Gate, and surrounding areas." },
    ],
  }
  return <ServicePageTemplate {...pageData} />
}
