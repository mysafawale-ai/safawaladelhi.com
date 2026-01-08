import { ServicePageTemplate } from "@/components/service-page-template"

const jaiaurAreas = ["C-Scheme", "Vaishali Nagar", "Mansarovar", "Malviya Nagar", "Jagatpura", "Raja Park", "Sindhi Camp", "Civil Lines", "Bani Park", "Ajmer Road", "Tonk Road", "JLN Marg", "Sanganer", "Ashok Nagar", "Ram Nagar", "Kalyan Vihar", "Vidhyadhar Nagar", "Shyam Nagar", "Pal Road", "Bapu Nagar"]

export const metadata = {
  title: "Marwari Wedding Pagdi Jaipur | Traditional Marwari Service | Safawala",
  description: "Professional Marwari wedding pagdi tying service in Jaipur. Expert traditional Marwari turban styling. Safawala serves Marwari wedding traditions.",
}

export default function MarwariWeddingPagdi() {
  const pageData = {
    title: "Marwari Wedding Pagdi Jaipur",
    shortDescription: "Authentic Marwari wedding pagdi service by Safawala. Expert styling maintaining Marwari traditions and cultural heritage. Perfect for Marwari grooms and families.",
    description: "Traditional Marwari wedding pagdi service.",
    mainImage: "/12-5.webp",
    videos: ["/video-2.mp4", "/video-3.mp4"],
    galleryImages: ["/13-3.webp", "/14-3.webp", "/14-4.webp", "/15-2.webp", "/17-3.webp"],
    areas: jaiaurAreas,
    keyFeatures: ["Authentic Marwari traditions", "Expert cultural styling", "Traditional design perfection", "Marwari community trust", "Heritage preservation", "Perfect proportions", "Comfortable traditional wear", "Customized Marwari styles"],
    seoKeywords: ["marwari wedding pagdi", "marwari turban service", "marwari pagdi jaipur", "traditional marwari turban"],
    content: `<h2>Marwari Wedding Pagdi Service - Safawala</h2><p>The Marwari community has its own distinct and dignified turban traditions. A Marwari wedding pagdi is characterized by specific styles, proportions, and design elements that honor this proud heritage. Safawala is trusted by the Marwari community for authentic, traditional pagdi tying.</p><h2>Understanding Marwari Wedding Pagdi</h2><p>Marwari people, with their merchant heritage and proud traditions, have distinct cultural practices. The Marwari wedding pagdi reflects this heritage with specific design elements and traditional styling that have been preserved for generations.</p><h2>Our Marwari Pagdi Services</h2><h3>Traditional Marwari Pagdi Styles</h3><p>We specialize in authentic traditional Marwari pagdi designs that maintain cultural integrity.</p><h3>Customized Family Styles</h3><p>Different Marwari families may have specific traditions. We can customize your pagdi to match your family's preferences.</p><h3>Sehra and Complete Wedding Styling</h3><p>Complete Marwari groom styling including pagdi, sehra, and other traditional elements.</p><h3>Community Coordination</h3><p>We understand Marwari wedding celebrations and can coordinate for multiple family members and guests.</p><h2>Why Marwari Community Chooses Safawala</h2><h3>Understanding of Traditions</h3><p>We have deep knowledge of Marwari cultural traditions and wedding practices.</p><h3>Respect for Heritage</h3><p>We treat traditional styling with the respect it deserves, preserving authentic forms.</p><h3>Community Trust</h3><p>For over 20 years, Marwari families have trusted Safawala for their pagdi needs.</p><h3>Customized Community Service</h3><p>We can coordinate large family celebrations and understand community norms and expectations.</p><h2>Marwari Pagdi Design Elements</h2><p>Marwari pagdis have distinctive features including specific fold patterns, proportions, and styling. Our experts understand these nuances and execute them perfectly.</p><h2>Frequently Asked Questions</h2><p><strong>Q: Are Marwari pagdis very different from other Rajasthani turbans?</strong><br/>A: Yes, Marwari pagdis have distinct characteristics specific to Marwari traditions and culture.</p><p><strong>Q: Can you coordinate family group pagdis?</strong><br/>A: Yes, we can coordinate pagdis for entire Marwari families and wedding parties.</p><p><strong>Q: How do you know Marwari traditions?</strong><br/>A: Our team has extensive experience serving Marwari families in Jaipur and understands community traditions deeply.</p><h2>Book Your Marwari Wedding Pagdi Service</h2><p>Contact Safawala for authentic Marwari wedding pagdi tying that honors your traditions.</p><p><strong>Call:</strong> +91-9725295692 | <strong>Community Pricing Available</strong></p>`,
    faqs: [
      { question: "Can I customize my Marwari pagdi?", answer: "Yes, while maintaining traditional elements, we can customize to your preferences." },
      { question: "Do you serve other Marwari families regularly?", answer: "Yes, we have served many Marwari families and understand community traditions well." },
      { question: "Can you coordinate pagdis for extended family?", answer: "Absolutely, we offer group coordination for families and wedding parties." },
    ],
  }
  return <ServicePageTemplate {...pageData} />
}
