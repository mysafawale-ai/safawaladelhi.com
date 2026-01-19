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
  title: "Malad Safa Service | Wedding Turban Tying Malad | Safawala Mumbai",
  description: "Premium Malad safa service by Safawala Mumbai. Professional turban tying for Malad West & East weddings. Expert Malad safa service for all celebrations. Book today!",
  keywords: "malad safa service, malad turban tying, malad wedding safa, malad pagdi, safa service malad west, safa malad",
  openGraph: {
    title: "Malad Safa Service | Wedding Turban Tying Malad | Safawala Mumbai",
    description: "Premium Malad safa service by Safawala Mumbai - expert turban tying for weddings.",
    url: "https://safawalamumbai.com/malad-safa-service",
    type: "website",
  },
}

export default function MaladSafaService() {
  const pageData = {
    title: "Malad Safa Service",
    shortDescription: "Safawala Mumbai brings premium Malad safa service to the growing suburb of Malad. Our Malad safa service covers both Malad West and Malad East, serving weddings at banquet halls, party plots, and residential celebrations. With Malad's mix of traditional and modern families, our Malad safa service caters to all preferences and budgets.",
    description: "Premium Malad safa service by Safawala Mumbai - professional turban tying for all Malad weddings.",
    mainImage: "/17-3.webp",
    videos: ["/video-2.mp4", "/video-5.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Professional Malad safa service",
      "Malad West coverage",
      "Malad East service",
      "Wedding venue service",
      "Home visit available",
      "Banquet hall service",
      "Budget to premium options",
      "Timely arrival guarantee",
    ],
    seoKeywords: ["malad safa service", "malad turban tying", "malad wedding safa", "safa service malad"],
    content: `
<h2>Safawala Mumbai - Complete Malad Safa Service</h2>

<p>Malad has transformed into one of Mumbai's most active wedding destinations, and <strong>Malad safa service</strong> from Safawala Mumbai meets this growing demand. Our <strong>Malad safa service</strong> covers the entire Malad suburb – from the bustling Malad West with its shopping areas and residences to Malad East's residential complexes. Whether your wedding is at a Malad banquet hall or a home celebration, <strong>Malad safa service</strong> delivers professional turban tying.</p>

<p>With excellent connectivity via Western Railway and roads, Malad hosts numerous weddings year-round. Our <strong>Malad safa service</strong> reaches every corner of this suburb promptly and professionally.</p>

<h2>Malad Coverage</h2>

<h3>Malad West Service</h3>

<p><strong>Malad safa service</strong> in Malad West:</p>

<ul>
<li>Orlem area</li>
<li>Mindspace area</li>
<li>Jankalyan Nagar</li>
<li>Poonam Nagar</li>
<li>All Malad West locations</li>
</ul>

<h3>Malad East Service</h3>

<p><strong>Malad safa service</strong> in Malad East:</p>

<ul>
<li>Malad Industrial Area</li>
<li>Damu Nagar</li>
<li>Kurar Village</li>
<li>Residential complexes</li>
<li>All Malad East areas</li>
</ul>

<h2>Malad Venue Types</h2>

<p><strong>Malad safa service</strong> at:</p>

<ul>
<li>Malad banquet halls</li>
<li>Party plots</li>
<li>Club venues</li>
<li>Hotel banquets</li>
<li>Community halls</li>
<li>Home celebrations</li>
</ul>

<h2>Service Options</h2>

<h3>Groom Service</h3>

<p><strong>Malad safa service</strong> for groom:</p>

<ul>
<li>Premium groom turban</li>
<li>Custom coordination</li>
<li>Designer options</li>
<li>Sehra attachment</li>
</ul>

<h3>Family Service</h3>

<p><strong>Malad safa service</strong> for family:</p>

<ul>
<li>Father of groom/bride</li>
<li>Brothers and relatives</li>
<li>Group coordination</li>
<li>Bulk discounts</li>
</ul>

<h3>Guest Service</h3>

<p><strong>Malad safa service</strong> for guests:</p>

<ul>
<li>Baarat participants</li>
<li>Wedding guests</li>
<li>Quick service</li>
<li>Efficient handling</li>
</ul>

<h2>Malad Communities</h2>

<p><strong>Malad safa service</strong> for all:</p>

<ul>
<li>Hindu weddings</li>
<li>Gujarati celebrations</li>
<li>Marwari weddings</li>
<li>Maharashtrian ceremonies</li>
<li>All communities</li>
</ul>

<h2>Booking for Malad</h2>

<p><strong>Malad safa service</strong> booking:</p>

<ul>
<li>Advance reservation recommended</li>
<li>Weekend availability</li>
<li>Last-minute service possible</li>
<li>Easy booking process</li>
</ul>

<h2>Contact for Malad Safa Service</h2>

<p>Book <strong>Malad safa service</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Central Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Malad safa service</strong> for all your wedding needs.</p>
    `,
    faqs: [
      {
        question: "Do you serve both Malad West and East?",
        answer: "Yes, Malad safa service covers both Malad West and Malad East areas.",
      },
      {
        question: "Can you come to Malad banquet halls?",
        answer: "Yes, Malad safa service is available at all banquet halls and venues in Malad.",
      },
      {
        question: "How early should I book for Malad?",
        answer: "We recommend booking Malad safa service at least 2-3 weeks in advance.",
      },
      {
        question: "Do you serve home weddings in Malad?",
        answer: "Yes, Malad safa service includes home visits throughout the suburb.",
      },
      {
        question: "What is the pricing for Malad?",
        answer: "Malad safa service is available at various price points to suit different budgets.",
      },
      {
        question: "Can you serve large groups in Malad?",
        answer: "Yes, Malad safa service can efficiently handle large wedding groups.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
