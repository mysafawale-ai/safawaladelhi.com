import { ServicePageTemplate } from "@/components/service-page-template"
import type { Metadata } from "next"

const MUMBAI_AREAS = [
  "South Mumbai", "Colaba", "Malabar Hill", "Bandra West", "Juhu", "Andheri West",
  "Breach Candy", "Cuffe Parade", "Nariman Point", "Churchgate", "Parel", "Dadar West",
  "Santacruz West", "Powai", "Vile Parle West", "Khar West", "Bandra East", "Andheri East",
  "Borivali West", "Goregaon West", "Thane West", "Mulund West", "Chembur", "Kurla",
  "Ghatkopar", "Malad West", "Kandivali West", "Vashi", "Nerul", "Kharghar", "Panvel"
]

export const metadata: Metadata = {
  title: "Santacruz Safa Service | Wedding Turban Tying Santacruz | Safawala Mumbai",
  description: "Premium Santacruz safa service by Safawala Mumbai. Professional turban tying for Santacruz West & East weddings. Expert Santacruz safa service for celebrations. Book today!",
  keywords: "santacruz safa service, santacruz turban tying, santacruz wedding safa, santacruz pagdi, safa service santacruz, safa santacruz",
  openGraph: {
    title: "Santacruz Safa Service | Wedding Turban Tying Santacruz | Safawala Mumbai",
    description: "Premium Santacruz safa service by Safawala Mumbai - expert turban tying for weddings.",
    url: "https://safawalamumbai.com/santacruz-safa-service",
    type: "website",
  },
}

export default function SantacruzSafaService() {
  const pageData = {
    title: "Santacruz Safa Service",
    shortDescription: "Safawala Mumbai delivers exceptional Santacruz safa service to this affluent Western suburb. Our Santacruz safa service covers both the upscale Santacruz West and the diverse Santacruz East, serving celebrity homes and family residences alike. With premium neighborhoods and quality banquet facilities, our Santacruz safa service matches the area's high expectations.",
    description: "Premium Santacruz safa service by Safawala Mumbai - professional turban tying for Santacruz weddings.",
    mainImage: "/17-3.webp",
    videos: ["/video-3.mp4", "/video-6.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Professional Santacruz safa service",
      "Santacruz West coverage",
      "Santacruz East service",
      "Affluent area expertise",
      "Celebrity-grade service",
      "Premium quality turbans",
      "Discreet professional service",
      "Punctual reliable delivery",
    ],
    seoKeywords: ["santacruz safa service", "santacruz turban tying", "santacruz wedding safa", "safa service santacruz"],
    content: `
<h2>Safawala Mumbai - Complete Santacruz Safa Service</h2>

<p>Santacruz is one of Mumbai's most desirable residential areas, home to celebrities, business families, and discerning residents. <strong>Santacruz safa service</strong> from Safawala Mumbai meets the high standards expected in this upscale neighborhood. Our <strong>Santacruz safa service</strong> covers the premium Santacruz West with its bungalows and apartments, as well as Santacruz East with its mix of residences.</p>

<p>Whether it's a celebrity home wedding or a traditional family celebration, <strong>Santacruz safa service</strong> delivers turban tying that matches the sophistication of this suburb.</p>

<h2>Santacruz Coverage</h2>

<h3>Santacruz West Service</h3>

<p><strong>Santacruz safa service</strong> in Santacruz West:</p>

<ul>
<li>Linking Road area</li>
<li>Pali Hill adjacent areas</li>
<li>Premium residential complexes</li>
<li>Celebrity neighborhood areas</li>
<li>All Santacruz West locations</li>
</ul>

<h3>Santacruz East Service</h3>

<p><strong>Santacruz safa service</strong> in Santacruz East:</p>

<ul>
<li>Kalina area</li>
<li>Vakola vicinity</li>
<li>Airport adjacent areas</li>
<li>Residential complexes</li>
<li>All Santacruz East areas</li>
</ul>

<h2>Santacruz Venue Types</h2>

<p><strong>Santacruz safa service</strong> at:</p>

<ul>
<li>Private bungalow weddings</li>
<li>Luxury apartment celebrations</li>
<li>Premium banquet halls</li>
<li>Hotel venues</li>
<li>Club functions</li>
<li>Garden weddings</li>
</ul>

<h2>Service Categories</h2>

<h3>VIP/Celebrity Service</h3>

<p><strong>Santacruz safa service</strong> premium:</p>

<ul>
<li>Discreet professional service</li>
<li>Highest quality materials</li>
<li>Custom designer options</li>
<li>Privacy maintained</li>
</ul>

<h3>Family Wedding Service</h3>

<p><strong>Santacruz safa service</strong> family:</p>

<ul>
<li>Complete family coverage</li>
<li>Coordinated looks</li>
<li>Traditional excellence</li>
<li>Modern options</li>
</ul>

<h2>Quality Standards</h2>

<p><strong>Santacruz safa service</strong> quality:</p>

<ul>
<li>Premium fabrics only</li>
<li>Expert craftsmanship</li>
<li>Attention to detail</li>
<li>Santacruz-worthy presentation</li>
</ul>

<h2>Booking Information</h2>

<p><strong>Santacruz safa service</strong> booking:</p>

<ul>
<li>Advance booking recommended</li>
<li>High-demand dates book early</li>
<li>Personalized service</li>
<li>Consultation available</li>
</ul>

<h2>Contact for Santacruz Safa Service</h2>

<p>Book <strong>Santacruz safa service</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Central Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Santacruz safa service</strong> for distinguished celebrations.</p>
    `,
    faqs: [
      {
        question: "Do you serve celebrity homes in Santacruz?",
        answer: "Yes, Santacruz safa service includes discreet VIP service for celebrity weddings.",
      },
      {
        question: "What quality level do you offer?",
        answer: "Santacruz safa service offers premium to luxury quality matching area expectations.",
      },
      {
        question: "Can you come to private bungalows?",
        answer: "Yes, Santacruz safa service includes home service to bungalows and apartments.",
      },
      {
        question: "Do you serve both East and West?",
        answer: "Yes, Santacruz safa service comprehensively covers Santacruz West and East.",
      },
      {
        question: "How early should I book?",
        answer: "For premium dates, book Santacruz safa service 3-4 weeks in advance.",
      },
      {
        question: "Is privacy maintained?",
        answer: "Absolutely, Santacruz safa service maintains strict privacy and discretion.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
