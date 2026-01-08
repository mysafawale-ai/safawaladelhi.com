import { ServicePageTemplate } from "@/components/service-page-template"

const areas = ["Mansarovar", "Malviya Nagar", "Sanganer", "Ashok Nagar", "Tonk Road"]

export const metadata = {
  title: "Wedding Turban Mansarovar Jaipur | Professional Safa Pagdi Service | Safawala",
  description: "Professional wedding turban service in Mansarovar Jaipur. Expert turban specialist providing perfect safa and pagdi. Safawala - local expert.",
}

export default function WeddingTurbanMansarovar() {
  const pageData = {
    title: "Wedding Turban Mansarovar Jaipur",
    shortDescription: "Professional wedding turban service in Mansarovar Jaipur. Local expert specialist providing perfect turban styling with on-site service.",
    description: "Wedding turban Mansarovar.",
    mainImage: "/21-3.webp",
    videos: ["/video-1.mp4", "/video-6.mp4"],
    galleryImages: ["/23-3.webp", "/25-3.webp", "/27-3.webp", "/28-3.webp", "/33-3.webp"],
    areas: areas,
    keyFeatures: ["Mansarovar specialist", "Local expert service", "On-site tying", "Same-day booking", "Quick response", "Professional quality", "Expert execution", "Affordable rates"],
    seoKeywords: ["wedding turban mansarovar jaipur", "safa pagdi mansarovar", "turban specialist mansarovar", "local wedding service"],
    content: `<h2>Wedding Turban Mansarovar Jaipur - Expert Local Service</h2><p>Professional wedding turban service in Mansarovar Jaipur. Local expert specialist providing perfect groom turban styling with convenient on-site service for Mansarovar residents.</p><h2>Mansarovar Wedding Turban Service</h2><h3>Local Convenience</h3><p>Based locally, serving Mansarovar with quick response and expert knowledge. Minimal travel time to your location.</p><h3>On-Site Service</h3><p>Come directly to your Mansarovar home or venue for complete turban tying service.</p><h3>Same-Day Availability</h3><p>Fast booking, flexible scheduling, same-day service available for Mansarovar weddings.</p><h3>Expert Quality</h3><p>Master specialist creating perfect wedding turbans for Mansarovar celebrations.</p><h2>Services for Mansarovar Weddings</h2><h3>Groom Turban Styling</h3><p>Expert pagdi and safa styling for Mansarovar grooms. Perfect coordination with sherwani and wedding theme.</p><h3>Family Coordination</h3><p>Coordinating turbans for family members and wedding guests in Mansarovar events.</p><h3>Barati Service</h3><p>Complete turban coordination for Mansarovar wedding processions and large groups.</p><h3>Multiple Event Styling</h3><p>Coordinating turban styling across mehndi, ceremony, and celebrations in Mansarovar weddings.</p><h2>Why Mansarovar Residents Choose Us</h2><h3>Local Expertise</h3><p>Understanding Mansarovar area, local preferences, and nearby wedding venues.</p><h3>Convenient Delivery</h3><p>On-site turban tying at your Mansarovar location saves time and hassle.</p><h3>Professional Results</h3><p>Expert execution creating perfect turban styling for Mansarovar weddings.</p><h3>Reasonable Pricing</h3><p>Competitive rates for Mansarovar residents without quality compromise.</p><h2>Mansarovar Wedding Turban Pricing</h2><p><strong>Standard Wedding Turban:</strong> ₹1000-1500</p><p><strong>Premium Turban Styling:</strong> ₹1500-2000</p><p><strong>Complete Package:</strong> ₹2000-3500+</p><h2>Book Wedding Turban in Mansarovar</h2><p><strong>Call:</strong> +91-9725295692 | <strong>Mansarovar Specialist</strong> | <strong>Local Expert</strong> | <strong>On-Site Service</strong> | <strong>Same-Day Available</strong></p>`,
    faqs: [
      { question: "How quickly can you serve Mansarovar area?", answer: "Very quickly! Same-day service available for Mansarovar wedding bookings." },
      { question: "Do you offer on-site turban tying in Mansarovar?", answer: "Yes, we provide complete on-site service at your Mansarovar home or venue." },
      { question: "Can you handle large Mansarovar wedding groups?", answer: "Absolutely. We coordinate multiple turbans for large Mansarovar celebrations and barati services." },
    ],
  }
  return <ServicePageTemplate {...pageData} />
}
