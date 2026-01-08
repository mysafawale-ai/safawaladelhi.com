import { ServicePageTemplate } from "@/components/service-page-template"

const jaiaurAreas = ["C-Scheme", "Vaishali Nagar", "Mansarovar", "Malviya Nagar", "Jagatpura", "Raja Park", "Sindhi Camp", "Civil Lines", "Bani Park", "Ajmer Road", "Tonk Road", "JLN Marg", "Sanganer", "Ashok Nagar", "Ram Nagar", "Kalyan Vihar", "Vidhyadhar Nagar", "Shyam Nagar", "Pal Road", "Bapu Nagar"]

export const metadata = {
  title: "Marwari Safa Tying in Jaipur | Traditional Style Expert | Safawala",
  description: "Professional Marwari safa tying in Jaipur. Expert specialist in traditional Marwari turban styling. Safawala - authentic heritage expertise.",
}

export default function MarwariSafaTying() {
  const pageData = {
    title: "Marwari Safa Tying in Jaipur",
    shortDescription: "Expert Marwari safa tying in Jaipur. Traditional specialist preserving authentic Marwari heritage turban styling with expert execution.",
    description: "Marwari traditional safa service.",
    mainImage: "/21-3.webp",
    videos: ["/video-1.mp4", "/video-6.mp4"],
    galleryImages: ["/23-3.webp", "/25-3.webp", "/27-3.webp", "/28-3.webp", "/33-3.webp"],
    areas: jaiaurAreas,
    keyFeatures: ["Marwari specialist", "Traditional expertise", "Heritage preservation", "Authentic style", "Cultural knowledge", "Expert execution", "Family traditions", "Generational craftsmanship"],
    seoKeywords: ["marwari safa tying jaipur", "marwari turban specialist", "traditional marwari pagdi", "authentic heritage service"],
    content: `<h2>Marwari Safa Tying in Jaipur - Authentic Heritage Expert</h2><p>Jaipur's specialist in authentic Marwari safa tying. Expert knowledge of Marwari turban traditions, regional variations, and cultural significance. Preserving centuries-old heritage through expert craftsmanship.</p><h2>Marwari Safa Heritage</h2><h3>Distinctive Regional Style</h3><p>Marwari safas have unique characteristics developed over centuries. Specific fold patterns, proportions, and aesthetic distinctiveness.</p><h3>Cultural Significance</h3><p>Marwari turbans represent regional pride and cultural identity. Wearing authentic Marwari safa honours heritage and ancestry.</p><h3>Generational Tradition</h3><p>Marwari families value authentic turban preservation. Our specialist understands family traditions and regional variations.</p><h2>Our Marwari Safa Expertise</h2><h3>Traditional Technique Mastery</h3><p>Expert knowledge of authentic Marwari folding techniques and proportions. Proper execution of traditional styling.</p><h3>Regional Variation Knowledge</h3><p>Understanding variations across different Marwari communities and regions. Customisation to specific family traditions.</p><h3>Material Selection</h3><p>Traditional and modern materials suitable for Marwari style. Premium fabrics ensuring authenticity and quality.</p><h3>Perfect Proportions</h3><p>Expert eye for Marwari turban proportions. Balanced, culturally appropriate appearance.</p><h2>Marwari Safa Styles</h2><h3>Traditional Marwari Style</h3><p>Authentic heritage style with proper fold patterns and cultural accuracy.</p><h3>Family-Specific Tradition</h3><p>Your family's particular Marwari tradition respected and honoured. Customised to family preferences.</p><h3>Elaborate Festive Marwari</h3><p>Richly decorated Marwari safa for grand celebrations and special occasions.</p><h2>Why Choose Marwari Safa Specialist</h2><h3>Heritage Preservation</h3><p>Commitment to preserving Marwari cultural traditions and authenticity.</p><h3>Expert Knowledge</h3><p>Deep understanding of Marwari heritage and regional variations.</p><h3>Family Satisfaction</h3><p>Elder approval and family satisfaction guaranteed through authentic styling.</p><h3>Perfect Execution</h3><p>Expert craftsmanship creating flawless Marwari turbans.</p><h2>Service Areas</h2><p>Marwari safa tying available across Jaipur. On-site service at your home or venue.</p><h2>Marwari Safa Pricing</h2><p><strong>Traditional Marwari Safa:</strong> ₹1200-1800</p><p><strong>Elaborate Festive Safa:</strong> ₹1800-2500</p><p><strong>Premium Heritage Style:</strong> ₹2500-3500+</p><h2>Book Marwari Safa Tying Today</h2><p><strong>Call:</strong> +91-9725295692 | <strong>Marwari Specialist</strong> | <strong>Heritage Preservation</strong> | <strong>Authentic Traditional Service</strong></p>`,
    faqs: [
      { question: "What makes Marwari safa different from other styles?", answer: "Marwari safas have unique fold patterns and proportions developed over centuries. Our specialist honours these traditions." },
      { question: "Can you match my family's specific Marwari tradition?", answer: "Yes, absolutely. Bring details or photos of your family's preferred style, and we'll replicate it authentically." },
      { question: "Is Marwari safa comfortable for all-day wear?", answer: "Yes, proper Marwari tying ensures comfort despite traditional styling." },
    ],
  }
  return <ServicePageTemplate {...pageData} />
}
