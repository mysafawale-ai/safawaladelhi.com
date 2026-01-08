import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata = {
  title: "Marwari Safa Tying in Jaipur | Authentic Marwari Pagdi | Safawala",
  description: "Expert Marwari safa tying in Jaipur. Authentic Marwari pagdi specialist preserving heritage traditions. Professional wedding turban service.",
}

export default function MarwariSafaTying() {
  const pageData = {
    title: "Marwari Safa Tying in Jaipur",
    shortDescription: "Expert Marwari safa tying specialist in Jaipur. Authentic Marwari pagdi with master-level expertise. Heritage turban styling for weddings.",
    description: "Marwari safa specialist",
    mainImage: "/20-3.webp",
    videos: ["/video-1.mp4", "/video-6.mp4"],
    galleryImages: ["/21-3.webp", "/23-3.webp", "/25-3.webp", "/27-3.webp", "/28-3.webp"],
    areas: ["C-Scheme", "Vaishali Nagar", "Mansarovar", "Malviya Nagar", "Jagatpura"],
    keyFeatures: ["Marwari heritage expert", "Authentic styling", "Master execution", "Traditional techniques", "Cultural authenticity", "Perfect proportions", "Professional finish", "Heritage preservation"],
    seoKeywords: ["marwari safa tying jaipur", "marwari pagdi specialist", "authentic marwari turban"],
    content: `<h2>Marwari Safa Tying in Jaipur: Authentic Heritage Pagdi Specialist</h2><p>Marwari culture has distinct traditions, including distinctive pagdi styles that reflect Marwari identity and heritage. At Safawala, our Marwari safa tying specialist preserves and honors these authentic Marwari traditions while delivering master-level execution. When your wedding requires authentic Marwari safa tying, you need specialist expertise that understands your cultural heritage deeply.</p><p>Our Marwari safa specialist combines cultural knowledge with technical mastery, ensuring your wedding safa honors Marwari tradition authentically.</p><h2>Marwari Safa Tying Characteristics</h2><h3>Distinctive Marwari Pagdi Style</h3><p>Marwari pagdi has characteristic fold patterns, specific color preferences, and distinctive proportions developed over generations. Authentic Marwari safa tying preserves these cultural characteristics.</p><h3>Cultural Heritage Significance</h3><p>Marwari safa represents community identity and cultural continuity. Proper Marwari safa tying shows respect for heritage and maintains cultural connection across generations.</p><h3>Regional Technique Mastery</h3><p>Our specialist understands Marwari-specific techniques, fold sequences, and styling approaches that characterize authentic Marwari pagdi.</p><h2>Our Marwari Safa Service</h2><h3>Authentic Marwari Wedding Styling</h3><p>Complete groom safa styling honoring Marwari traditions. Expert analysis, perfect execution, cultural authenticity guaranteed.</p><h3>Regional Variation Expertise</h3><p>Different Marwari communities may have slight variations. We understand these nuances and deliver appropriately specific styling.</p><h3>Family Tradition Respect</h3><p>Your family may have specific Marwari safa traditions. We respect and honor these family-specific preferences.</p><h3>Multi-Event Coordination</h3><p>Different wedding events receive appropriately styled Marwari safa while maintaining consistency.</p><h2>Marwari Safa Pricing</h2><p><strong>Authentic Marwari Safa:</strong> ₹1000-1500 | <strong>Premium Marwari Safa:</strong> ₹1500-2300+</p><p><strong>Call:</strong> +91-9725295692 | <strong>Marwari Heritage Specialist</strong> | <strong>WhatsApp Available</strong></p>`,
    faqs: [
      { question: "How do you ensure authentic Marwari safa tying?", answer: "Our specialist has deep cultural knowledge and technical expertise specific to Marwari pagdi traditions." },
      { question: "Can you accommodate family-specific Marwari traditions?", answer: "Absolutely. Different families have specific traditions. We respect and honor your family's preferences." },
      { question: "Do you serve destination Marwari weddings?", answer: "Yes, we can travel for Marwari weddings with advance booking." },
    ],
  }
  return <ServicePageTemplate {...pageData} />
}
