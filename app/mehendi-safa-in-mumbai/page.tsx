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
  title: "Mehendi Safa in Mumbai | Mehndi Function Turban | Safawala Mumbai",
  description: "Colorful mehendi safa in Mumbai by Safawala Mumbai. Festive mehndi ceremony turban. Premium mehendi safa in Mumbai for groom's celebration. Book today!",
  keywords: "mehendi safa in mumbai, mehndi turban mumbai, mehndi function pagdi, haldi mehndi safa, groom mehndi turban",
  openGraph: {
    title: "Mehendi Safa in Mumbai | Mehndi Function Turban | Safawala Mumbai",
    description: "Colorful mehendi safa in Mumbai by Safawala Mumbai.",
    url: "https://safawalamumbai.com/mehendi-safa-in-mumbai",
    type: "website",
  },
}

export default function MehendiSafaInMumbai() {
  const pageData = {
    title: "Mehendi Safa in Mumbai",
    shortDescription: "The mehendi ceremony is one of the most colorful and joyful pre-wedding events. Safawala Mumbai's mehendi safa in Mumbai matches this festive spirit with bright, cheerful turbans. Our mehendi safa in Mumbai features vibrant colors and playful styles perfect for this celebratory occasion.",
    description: "Colorful mehendi safa in Mumbai by Safawala Mumbai - festive mehndi ceremony turban.",
    mainImage: "/33-3.webp",
    videos: ["/video-4.mp4", "/video-5.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Mehendi safa in Mumbai",
      "Festive colors",
      "Pre-wedding perfect",
      "Joyful celebration",
      "Playful styles",
      "Yellow and green",
      "Casual elegance",
      "Function appropriate",
    ],
    seoKeywords: ["mehendi safa in mumbai", "mehndi turban mumbai", "mehndi function pagdi", "groom mehndi turban"],
    content: `
<h2>Safawala Mumbai - Festive Mehendi Safa in Mumbai</h2>

<p>Mehendi night is all about fun, color, and celebration – a joyful prelude to the main wedding. <strong>Mehendi safa in Mumbai</strong> from Safawala Mumbai captures this festive spirit perfectly. Our <strong>mehendi safa in Mumbai</strong> features vibrant colors like yellow, green, and orange that match the cheerful atmosphere. <strong>Mehendi safa in Mumbai</strong> helps the groom look celebratory while keeping the style casual and fun.</p>

<p>Make your mehendi ceremony memorable with the perfect <strong>mehendi safa in Mumbai</strong>.</p>

<h2>Mehendi Function Significance</h2>

<h3>The Celebration</h3>

<p><strong>Mehendi safa in Mumbai</strong> for celebration:</p>

<ul>
<li>Pre-wedding festivity</li>
<li>Joyful atmosphere</li>
<li>Family gathering</li>
<li>Music and dance</li>
</ul>

<h3>Color Significance</h3>

<p><strong>Mehendi safa in Mumbai</strong> colors:</p>

<ul>
<li>Yellow – auspiciousness</li>
<li>Green – prosperity</li>
<li>Orange – joy</li>
<li>Bright shades – celebration</li>
</ul>

<h2>Popular Mehendi Colors</h2>

<p><strong>Mehendi safa in Mumbai</strong> options:</p>

<ul>
<li>Bright yellow</li>
<li>Fresh green</li>
<li>Vibrant orange</li>
<li>Lime green</li>
<li>Multi-color prints</li>
</ul>

<h2>Style Suggestions</h2>

<h3>Casual Elegance</h3>

<p><strong>Mehendi safa in Mumbai</strong> style:</p>

<ul>
<li>Relaxed tying</li>
<li>Playful colors</li>
<li>Fun accessories</li>
<li>Comfortable fit</li>
</ul>

<h3>Coordination</h3>

<p><strong>Mehendi safa in Mumbai</strong> coordination:</p>

<ul>
<li>Match kurta color</li>
<li>Complement décor</li>
<li>Coordinate with theme</li>
<li>Family matching options</li>
</ul>

<h2>Mehendi Ceremony Tips</h2>

<p><strong>Mehendi safa in Mumbai</strong> tips:</p>

<ul>
<li>Choose bright colors</li>
<li>Keep it comfortable</li>
<li>Match the festive mood</li>
<li>Fun over formal</li>
</ul>

<h2>Contact for Mehendi Safa in Mumbai</h2>

<p>Book <strong>mehendi safa in Mumbai</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Mehendi safa in Mumbai</strong> for festive celebrations.</p>
    `,
    faqs: [
      {
        question: "What colors suit mehendi ceremony?",
        answer: "Mehendi safa in Mumbai typically features yellow, green, and orange for festive appeal.",
      },
      {
        question: "Should mehendi turban be formal?",
        answer: "No, mehendi safa in Mumbai is typically casual and fun-focused.",
      },
      {
        question: "Can groom wear turban at mehendi?",
        answer: "Yes, mehendi safa in Mumbai helps the groom look celebratory at this pre-wedding event.",
      },
      {
        question: "Does mehendi turban differ from wedding?",
        answer: "Yes, mehendi safa in Mumbai is more colorful and casual than wedding turban.",
      },
      {
        question: "Can family match at mehendi?",
        answer: "Yes, mehendi safa in Mumbai can be coordinated for family members.",
      },
      {
        question: "What about haldi ceremony?",
        answer: "Mehendi safa in Mumbai colors work well for haldi ceremony too.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
