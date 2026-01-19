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
  title: "Vashi Safa Service | Turban Tying Vashi | Safawala Mumbai",
  description: "Professional Vashi safa service by Safawala Mumbai. Expert turban tying in Vashi Navi Mumbai. Quality Vashi safa service for weddings. Book today!",
  keywords: "vashi safa service, turban tying vashi, vashi pagdi service, vashi wedding turban, safa service in vashi",
  openGraph: {
    title: "Vashi Safa Service | Turban Tying Vashi | Safawala Mumbai",
    description: "Professional Vashi safa service by Safawala Mumbai.",
    url: "https://safawalamumbai.com/vashi-safa-service",
    type: "website",
  },
}

export default function VashiSafaService() {
  const pageData = {
    title: "Vashi Safa Service",
    shortDescription: "Vashi – the heart of Navi Mumbai and its original planned sector. As the commercial and retail hub of Navi Mumbai, Vashi hosts numerous wedding celebrations in its many venues. Safawala Mumbai's Vashi safa service brings our expert turban tying to this central Navi Mumbai location.",
    description: "Professional Vashi safa service by Safawala Mumbai - expert turban tying in Vashi Navi Mumbai.",
    mainImage: "/36-3.webp",
    videos: ["/video-2.mp4", "/video-5.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Vashi safa service",
      "Navi Mumbai center",
      "Commercial hub expertise",
      "Wedding venue access",
      "Excellent connectivity",
      "Professional service",
      "Multiple venue knowledge",
      "Reliable timing",
    ],
    seoKeywords: ["vashi safa service", "turban tying vashi", "vashi pagdi service", "vashi wedding turban"],
    content: `
<h2>Safawala Mumbai - Professional Vashi Safa Service</h2>

<p>Vashi is the nerve center of Navi Mumbai – its oldest and most developed sector with excellent infrastructure, shopping centers, and connectivity. As a commercial hub, Vashi attracts residents from across Navi Mumbai for shopping and celebrations. <strong>Vashi safa service</strong> from Safawala Mumbai serves this central location with professional turban tying.</p>

<p>With easy access from all parts of Navi Mumbai and Mumbai, <strong>Vashi safa service</strong> is convenient for families choosing Vashi venues.</p>

<h2>Vashi Areas We Serve</h2>

<h3>Vashi Sectors</h3>

<p><strong>Vashi safa service</strong> covers:</p>

<ul>
<li>Vashi Sector 9-17</li>
<li>Mini Seashore</li>
<li>Turbhe (adjacent)</li>
<li>Sanpada (adjacent)</li>
</ul>

<h3>Nearby Areas</h3>

<p><strong>Vashi safa service</strong> nearby:</p>

<ul>
<li>Nerul (adjacent)</li>
<li>Kopar Khairane</li>
<li>Airoli</li>
<li>Ghansoli</li>
</ul>

<h2>Vashi Wedding Venues</h2>

<p><strong>Vashi safa service</strong> venues:</p>

<ul>
<li>Vashi banquet halls</li>
<li>Hotel event spaces</li>
<li>Convention centers</li>
<li>Club venues</li>
</ul>

<h2>Vashi Advantages</h2>

<p><strong>Vashi safa service</strong> advantages:</p>

<ul>
<li>Central Navi Mumbai location</li>
<li>Excellent transportation</li>
<li>Multiple venue options</li>
<li>Shopping nearby</li>
</ul>

<h2>Services Offered</h2>

<p><strong>Vashi safa service</strong> offers:</p>

<ul>
<li>Groom turban</li>
<li>Family safas</li>
<li>Guest turbans</li>
<li>Event coverage</li>
</ul>

<h2>Booking for Vashi</h2>

<p><strong>Vashi safa service</strong> booking:</p>

<ul>
<li>Phone booking</li>
<li>Online consultation</li>
<li>Flexible timing</li>
<li>Confirmed service</li>
</ul>

<h2>Contact for Vashi Safa Service</h2>

<p>Book <strong>Vashi safa service</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba (Mumbai)</p>

<p>Safawala Mumbai – <strong>Vashi safa service</strong> for central Navi Mumbai.</p>
    `,
    faqs: [
      {
        question: "Do you service Vashi?",
        answer: "Yes, Vashi safa service covers all of Vashi in Navi Mumbai.",
      },
      {
        question: "Do you know Vashi venues?",
        answer: "Yes, Vashi safa service is familiar with popular Vashi wedding venues.",
      },
      {
        question: "Is Vashi central in Navi Mumbai?",
        answer: "Yes, Vashi safa service benefits from Vashi's central Navi Mumbai location.",
      },
      {
        question: "Do you cover Sanpada too?",
        answer: "Yes, Vashi safa service includes Sanpada, Turbhe, and adjacent areas.",
      },
      {
        question: "How do I book for Vashi?",
        answer: "Call +91-9725295692 for Vashi safa service booking.",
      },
      {
        question: "Is there travel charge for Vashi?",
        answer: "Vashi safa service may have nominal travel charges for Navi Mumbai.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
