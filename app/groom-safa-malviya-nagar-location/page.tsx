import { ServicePageTemplate } from "@/components/service-page-template"

const areas = ["Malviya Nagar", "Tonk Road", "Sanganer", "Ganj Katla", "Ashok Nagar"]

export const metadata = {
  title: "Groom Safa Malviya Nagar Jaipur | Expert Turban Service | Safawala",
  description: "Professional groom safa service in Malviya Nagar Jaipur. Expert turban specialist with on-site service. Safawala - local expert.",
}

export default function GroomSafaMalviyaNagar() {
  const pageData = {
    title: "Groom Safa Malviya Nagar Jaipur",
    shortDescription: "Professional groom safa service in Malviya Nagar Jaipur. Local expert turban specialist providing perfect wedding safa with on-site service.",
    description: "Groom safa service Malviya Nagar.",
    mainImage: "/21-3.webp",
    videos: ["/video-1.mp4", "/video-6.mp4"],
    galleryImages: ["/23-3.webp", "/25-3.webp", "/27-3.webp", "/28-3.webp", "/33-3.webp"],
    areas: areas,
    keyFeatures: ["Malviya Nagar specialist", "Local expert", "Groom focus", "On-site service", "Same-day booking", "Professional quality", "Expert execution", "Perfect styling"],
    seoKeywords: ["groom safa malviya nagar jaipur", "turban specialist malviya nagar", "wedding safa malviya nagar", "local groom service"],
    content: `<h2>Groom Safa Malviya Nagar Jaipur - Expert Local Service</h2><p>Professional groom safa service in Malviya Nagar Jaipur. Local expert specialist dedicated to creating perfect groom turbans for Malviya Nagar weddings.</p><h2>Malviya Nagar Groom Safa Service</h2><h3>Groom-Focused Expertise</h3><p>Specialising in groom turban styling. Expert understanding of what creates perfect groom appearance.</p><h3>Local Convenience</h3><p>Based locally, serving Malviya Nagar with quick response and expert local knowledge.</p><h3>On-Site Service</h3><p>Come directly to your Malviya Nagar home or venue for groom turban styling.</p><h3>Same-Day Availability</h3><p>Quick booking, flexible scheduling for Malviya Nagar groom services.</p><h2>Groom Services in Malviya Nagar</h2><h3>Wedding Day Groom Turban</h3><p>Expert safa styling for your main Malviya Nagar wedding ceremony. Perfect coordination with sherwani.</p><h3>Pre-Wedding Events</h3><p>Turban styling for engagement, mehndi, and celebrations in Malviya Nagar.</p><h3>Face & Proportion Matching</h3><p>Expert eye for groom feature matching and proportional balance. Perfect fit for your face shape.</p><h3>All-Day Comfort</h3><p>Ensuring comfort for extended wear throughout Malviya Nagar wedding celebrations.</p><h2>Why Choose Malviya Nagar Groom Service</h2><h3>Groom Expertise</h3><p>Specialised knowledge of groom styling and what creates confident, perfect appearance.</p><h3>Local Knowledge</h3><p>Understanding Malviya Nagar area, local preferences, and wedding venues.</p><h3>Convenient Service</h3><p>On-site groom styling at your Malviya Nagar location saves time and stress.</p><h3>Professional Results</h3><p>Master specialist creating perfect groom turbans every time.</p><h2>Malviya Nagar Groom Safa Pricing</h2><p><strong>Standard Groom Safa:</strong> ₹1200-1600</p><p><strong>Premium Groom Styling:</strong> ₹1600-2200</p><p><strong>Elaborate Groom Safa:</strong> ₹2200-3500+</p><h2>Book Groom Safa in Malviya Nagar</h2><p><strong>Call:</strong> +91-9725295692 | <strong>Malviya Nagar Groom Specialist</strong> | <strong>Expert Styling</strong> | <strong>On-Site Service</strong></p>`,
    faqs: [
      { question: "How do you ensure perfect groom safa?", answer: "Through expert eye for proportions, face matching, and personalised consultation." },
      { question: "Can you coordinate groom safa with my sherwani?", answer: "Absolutely. Bring your sherwani for perfect colour and style coordination." },
      { question: "Do you offer multiple trials in Malviya Nagar?", answer: "Yes, we provide trials and adjustments until perfect satisfaction." },
    ],
  }
  return <ServicePageTemplate {...pageData} />
}
