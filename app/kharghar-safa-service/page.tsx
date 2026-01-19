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
  title: "Kharghar Safa Service | Wedding Turban Tying Kharghar | Safawala Mumbai",
  description: "Premium Kharghar safa service by Safawala Mumbai. Professional turban tying for Kharghar Navi Mumbai weddings. Expert Kharghar safa service for celebrations. Book today!",
  keywords: "kharghar safa service, kharghar turban tying, kharghar wedding safa, navi mumbai safa service, kharghar pagdi",
  openGraph: {
    title: "Kharghar Safa Service | Wedding Turban Tying Kharghar | Safawala Mumbai",
    description: "Premium Kharghar safa service by Safawala Mumbai - expert turban tying for weddings.",
    url: "https://safawalamumbai.com/kharghar-safa-service",
    type: "website",
  },
}

export default function KhargharSafaService() {
  const pageData = {
    title: "Kharghar Safa Service",
    shortDescription: "Safawala Mumbai extends professional Kharghar safa service to this modern Navi Mumbai node. Our Kharghar safa service covers this well-planned suburb with its golf course, Central Park, and modern residential towers. Kharghar hosts beautiful destination-style weddings, and our Kharghar safa service complements these celebrations perfectly.",
    description: "Premium Kharghar safa service by Safawala Mumbai - professional turban tying for Kharghar weddings.",
    mainImage: "/17-3.webp",
    videos: ["/video-2.mp4", "/video-5.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Professional Kharghar safa service",
      "Navi Mumbai coverage",
      "Modern suburb service",
      "Golf course area",
      "Central Park vicinity",
      "Residential tower service",
      "Destination wedding support",
      "Quality guaranteed",
    ],
    seoKeywords: ["kharghar safa service", "kharghar turban tying", "kharghar wedding safa", "navi mumbai safa"],
    content: `
<h2>Safawala Mumbai - Modern Kharghar Safa Service</h2>

<p>Kharghar represents the modern, planned face of Navi Mumbai – with its iconic Central Park, golf course, and well-designed residential sectors. <strong>Kharghar safa service</strong> from Safawala Mumbai serves this contemporary suburb with professional turban tying. Our <strong>Kharghar safa service</strong> reaches the entire Kharghar node, from sector residences to the upscale developments.</p>

<p>With excellent venues and scenic locations, Kharghar has become popular for weddings. Our <strong>Kharghar safa service</strong> complements these beautiful celebrations.</p>

<h2>Kharghar Coverage</h2>

<h3>Sector-wise Service</h3>

<p><strong>Kharghar safa service</strong> in sectors:</p>

<ul>
<li>All Kharghar sectors</li>
<li>Golf course vicinity</li>
<li>Central Park area</li>
<li>Hill-side residences</li>
<li>Waterfall area</li>
</ul>

<h2>Kharghar Features</h2>

<p><strong>Kharghar safa service</strong> understanding:</p>

<ul>
<li>Well-planned suburb</li>
<li>Modern infrastructure</li>
<li>Scenic wedding locations</li>
<li>Easy accessibility</li>
<li>Growing destination wedding spot</li>
</ul>

<h2>Kharghar Venue Types</h2>

<p><strong>Kharghar safa service</strong> at:</p>

<ul>
<li>Kharghar banquet halls</li>
<li>Club venues</li>
<li>Open-air celebrations</li>
<li>Hotel weddings</li>
<li>Society functions</li>
<li>Home ceremonies</li>
</ul>

<h2>Service Options</h2>

<h3>Groom Service</h3>

<p><strong>Kharghar safa service</strong> for groom:</p>

<ul>
<li>Premium groom turban</li>
<li>Designer options</li>
<li>Outfit coordination</li>
<li>Sehra attachment</li>
</ul>

<h3>Family Service</h3>

<p><strong>Kharghar safa service</strong> for family:</p>

<ul>
<li>Father and elders</li>
<li>Brothers and relatives</li>
<li>Group coordination</li>
<li>Volume discounts</li>
</ul>

<h2>Navi Mumbai Connection</h2>

<p><strong>Kharghar safa service</strong> extends to:</p>

<ul>
<li>Vashi</li>
<li>Nerul</li>
<li>Belapur</li>
<li>Panvel</li>
<li>All Navi Mumbai</li>
</ul>

<h2>Booking Information</h2>

<p><strong>Kharghar safa service</strong> booking:</p>

<ul>
<li>Easy advance booking</li>
<li>Weekend availability</li>
<li>Flexible scheduling</li>
<li>Timely service guaranteed</li>
</ul>

<h2>Contact for Kharghar Safa Service</h2>

<p>Book <strong>Kharghar safa service</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Central Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Kharghar safa service</strong> for modern celebrations.</p>
    `,
    faqs: [
      {
        question: "Do you serve all Kharghar sectors?",
        answer: "Yes, Kharghar safa service covers all sectors and areas of Kharghar.",
      },
      {
        question: "Can you come to Central Park area venues?",
        answer: "Yes, Kharghar safa service covers Central Park area and all Kharghar locations.",
      },
      {
        question: "Do you serve other Navi Mumbai areas?",
        answer: "Yes, Kharghar safa service extends to Vashi, Nerul, Belapur, and Panvel.",
      },
      {
        question: "Is there extra charge for Kharghar?",
        answer: "Kharghar safa service pricing is competitive; distance may have nominal adjustment.",
      },
      {
        question: "How early should I book?",
        answer: "Book Kharghar safa service at least 2 weeks in advance for best availability.",
      },
      {
        question: "Can you handle outdoor weddings?",
        answer: "Yes, Kharghar safa service is available for open-air and outdoor venues.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
