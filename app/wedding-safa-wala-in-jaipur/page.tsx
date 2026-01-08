import { ServicePageTemplate } from "@/components/service-page-template"

const jaiaurAreas = ["C-Scheme", "Vaishali Nagar", "Mansarovar", "Malviya Nagar", "Jagatpura", "Raja Park", "Sindhi Camp", "Civil Lines", "Bani Park", "Ajmer Road", "Tonk Road", "JLN Marg", "Sanganer", "Ashok Nagar", "Ram Nagar", "Kalyan Vihar", "Vidhyadhar Nagar", "Shyam Nagar", "Pal Road", "Bapu Nagar"]

export const metadata = {
  title: "Wedding Safa Wala in Jaipur | Expert Turban Artist | Safawala",
  description: "Professional wedding safa wala in Jaipur. Expert turban specialist providing perfect safa tying for grooms. Safawala - trusted wedding turban artist.",
}

export default function WeddingSafaWala() {
  const pageData = {
    title: "Wedding Safa Wala in Jaipur",
    shortDescription: "Expert wedding safa wala (turban artist) in Jaipur. Professional turban specialist with 20+ years experience creating perfect wedding safas.",
    description: "Professional wedding safa specialist.",
    mainImage: "/21-3.webp",
    videos: ["/video-1.mp4", "/video-6.mp4"],
    galleryImages: ["/23-3.webp", "/25-3.webp", "/27-3.webp", "/28-3.webp", "/33-3.webp"],
    areas: jaiaurAreas,
    keyFeatures: ["Expert safa wala", "20+ years experience", "Perfect turban tying", "Wedding specialist", "Quality guaranteed", "On-time service", "Master craftsmanship", "Professional expertise"],
    seoKeywords: ["wedding safa wala jaipur", "safa artist", "turban specialist jaipur", "professional safa wala", "groom turban expert"],
    content: `<h2>Wedding Safa Wala in Jaipur - Expert Turban Specialist</h2><p>Jaipur's most experienced wedding safa wala. With over 20 years of expertise, Safawala's master turban specialist creates perfect wedding safas for discerning grooms. Each turban represents commitment to excellence, traditional craftsmanship, and modern styling expertise.</p><h2>What Makes Our Safa Wala Different</h2><h3>20+ Years Professional Experience</h3><p>Thousands of satisfied grooms across Jaipur and beyond. Proven track record of excellence and customer satisfaction.</p><h3>Master Craftsmanship</h3><p>Traditional techniques combined with contemporary styling knowledge. Perfect execution of every turban design.</p><h3>Personalized Consultation</h3><p>Understanding your vision, preferences, sherwani details, and overall wedding aesthetic. Customised turban recommendations.</p><h3>Perfect Proportions</h3><p>Expert eye for proportion balance suited to your face and head shape. Guaranteed perfect fit and appearance.</p><h3>Quality Materials</h3><p>Premium fabrics selected for durability, comfort, and visual appeal. Every turban uses finest available materials.</p><h2>Our Safa Wala Services</h2><h3>Wedding Day Turban</h3><p>Expert styling for your main ceremony. Perfect coordination with sherwani, sehra, and complete wedding look.</p><h3>Pre-Wedding Event Turbans</h3><p>Professional styling for engagement, mehndi, and other celebrations. Coordinated appearance across all events.</p><h3>Family & Guest Coordination</h3><p>Coordinating turbans for family members and wedding guests. Unified, impressive appearance.</p><h3>Rental Turban Service</h3><p>Quality rental turbans expertly tied by our master safa wala. Affordable option without compromising quality.</p><h2>Safa Wala Expertise Areas</h2><h3>Traditional Rajasthani Safas</h3><p>Authentic heritage styles with proper traditional proportions and folding techniques.</p><h3>Contemporary Turban Design</h3><p>Modern safa styling for fusion weddings and contemporary aesthetics.</p><h3>Elaborate Festival Safas</h3><p>Richly decorated turbans for grand celebrations and maximum visual presence.</p><h3>Color Coordination Expertise</h3><p>Perfect color selection matching your sherwani and overall wedding theme.</p><h2>Why Hire Our Expert Safa Wala</h2><h3>Proven Track Record</h3><p>Thousands of perfect wedding safas created. Consistent 5-star customer satisfaction.</p><h3>Reliability & Punctuality</h3><p>You can depend on us. Perfect timing, professional conduct, stress-free experience.</p><h3>Affordable Excellence</h3><p>Premium quality service at reasonable rates. Value for your investment.</p><h3>Comprehensive Service</h3><p>Complete turban solution from consultation to final styling on wedding day.</p><h2>Service Coverage</h2><p>Available across Jaipur with on-site service at your home or venue. Destination wedding capable.</p><h2>Wedding Safa Wala Pricing</h2><p><strong>Standard Wedding Safa:</strong> ₹1000-1500</p><p><strong>Premium Design Safa:</strong> ₹1500-2500</p><p><strong>Elaborate Festival Safa:</strong> ₹2500-4000+</p><h2>Book Your Expert Safa Wala Today</h2><p><strong>Call:</strong> +91-9725295692 | <strong>Expert Safa Wala</strong> | <strong>20+ Years Experience</strong> | <strong>Perfect Wedding Safas Guaranteed</strong></p>`,
    faqs: [
      { question: "How far in advance should I book your safa wala service?", answer: "2-3 weeks recommended for consultations and trials. Rush bookings possible depending on availability." },
      { question: "Can your safa wala work with my designer sherwani?", answer: "Absolutely. Bring your sherwani for perfect coordination and colour matching." },
      { question: "Do you offer safa rental options?", answer: "Yes, quality rental turbans expertly tied by our master safa wala." },
    ],
  }
  return <ServicePageTemplate {...pageData} />
}
