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
  title: "Kurta Matching Safa in Mumbai | Coordinated Turban | Safawala Mumbai",
  description: "Perfectly coordinated kurta matching safa in Mumbai by Safawala Mumbai. Match your kurta pajama turban. Premium kurta matching safa in Mumbai for complete look. Book today!",
  keywords: "kurta matching safa in mumbai, coordinated turban mumbai, kurta pajama safa, matching turban service, kurta safa coordination",
  openGraph: {
    title: "Kurta Matching Safa in Mumbai | Coordinated Turban | Safawala Mumbai",
    description: "Perfectly coordinated kurta matching safa in Mumbai by Safawala Mumbai.",
    url: "https://safawalamumbai.com/kurta-matching-safa-in-mumbai",
    type: "website",
  },
}

export default function KurtaMatchingSafaInMumbai() {
  const pageData = {
    title: "Kurta Matching Safa in Mumbai",
    shortDescription: "A kurta pajama deserves a perfectly coordinated turban. Safawala Mumbai's kurta matching safa in Mumbai ensures your safa complements your outfit beautifully. Our kurta matching safa in Mumbai considers color, fabric, and style to create a harmonious traditional look.",
    description: "Perfectly coordinated kurta matching safa in Mumbai by Safawala Mumbai - match your kurta pajama turban.",
    mainImage: "/27-3.webp",
    videos: ["/video-1.mp4", "/video-2.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Kurta matching safa in Mumbai",
      "Perfect coordination",
      "Color matching",
      "Fabric consideration",
      "Complete traditional look",
      "Style harmony",
      "Occasion appropriate",
      "Expert guidance",
    ],
    seoKeywords: ["kurta matching safa in mumbai", "coordinated turban mumbai", "kurta pajama safa", "matching turban service"],
    content: `
<h2>Safawala Mumbai - Perfect Kurta Matching Safa in Mumbai</h2>

<p>Kurta pajama is a timeless traditional outfit, and a well-matched turban completes the look beautifully. <strong>Kurta matching safa in Mumbai</strong> from Safawala Mumbai specializes in creating perfect coordination between your kurta and turban. Our <strong>kurta matching safa in Mumbai</strong> considers multiple factors – color, fabric, occasion, and personal style – to ensure a harmonious appearance.</p>

<p>Complete your traditional look with <strong>kurta matching safa in Mumbai</strong> from Safawala Mumbai.</p>

<h2>Matching Principles</h2>

<h3>Color Coordination</h3>

<p><strong>Kurta matching safa in Mumbai</strong> colors:</p>

<ul>
<li>Same color family</li>
<li>Complementary shades</li>
<li>Contrast options</li>
<li>Tone matching</li>
</ul>

<h3>Fabric Harmony</h3>

<p><strong>Kurta matching safa in Mumbai</strong> fabrics:</p>

<ul>
<li>Silk with silk</li>
<li>Cotton with cotton</li>
<li>Similar textures</li>
<li>Appropriate weight</li>
</ul>

<h2>Popular Combinations</h2>

<p><strong>Kurta matching safa in Mumbai</strong> combos:</p>

<ul>
<li>White kurta – Red safa</li>
<li>Blue kurta – Blue safa</li>
<li>Beige kurta – Maroon safa</li>
<li>Black kurta – Gold safa</li>
<li>Yellow kurta – Orange safa</li>
</ul>

<h2>Occasion Considerations</h2>

<h3>Casual Events</h3>

<p><strong>Kurta matching safa in Mumbai</strong> casual:</p>

<ul>
<li>Light cotton options</li>
<li>Simple colors</li>
<li>Comfortable styles</li>
<li>Relaxed tying</li>
</ul>

<h3>Formal Events</h3>

<p><strong>Kurta matching safa in Mumbai</strong> formal:</p>

<ul>
<li>Premium fabrics</li>
<li>Rich colors</li>
<li>Elegant styling</li>
<li>Detailed finishing</li>
</ul>

<h2>Consultation Service</h2>

<p><strong>Kurta matching safa in Mumbai</strong> consultation:</p>

<ul>
<li>Share kurta photos</li>
<li>Get expert advice</li>
<li>Try options</li>
<li>Perfect selection</li>
</ul>

<h2>Contact for Kurta Matching Safa in Mumbai</h2>

<p>Book <strong>kurta matching safa in Mumbai</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Kurta matching safa in Mumbai</strong> for perfect coordination.</p>
    `,
    faqs: [
      {
        question: "How do you match with kurta?",
        answer: "Kurta matching safa in Mumbai considers color, fabric, and occasion for coordination.",
      },
      {
        question: "Should I bring my kurta?",
        answer: "Photos work, or bring kurta matching safa in Mumbai appointment for best results.",
      },
      {
        question: "Same color or contrast better?",
        answer: "Kurta matching safa in Mumbai offers both options – depends on preference.",
      },
      {
        question: "Does fabric matter?",
        answer: "Yes, kurta matching safa in Mumbai coordinates similar fabric textures.",
      },
      {
        question: "Can you guide color selection?",
        answer: "Yes, kurta matching safa in Mumbai includes expert color consultation.",
      },
      {
        question: "What about designer kurtas?",
        answer: "Kurta matching safa in Mumbai can match premium designer kurta styles.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
