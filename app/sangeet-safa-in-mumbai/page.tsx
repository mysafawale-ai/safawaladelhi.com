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
  title: "Sangeet Safa in Mumbai | Sangeet Night Turban | Safawala Mumbai",
  description: "Stylish sangeet safa in Mumbai by Safawala Mumbai. Premium turbans for sangeet night celebration. Trendy sangeet safa in Mumbai for music and dance night. Book today!",
  keywords: "sangeet safa in mumbai, sangeet turban mumbai, sangeet night safa, music night turban, dance party safa mumbai",
  openGraph: {
    title: "Sangeet Safa in Mumbai | Sangeet Night Turban | Safawala Mumbai",
    description: "Stylish sangeet safa in Mumbai for music night by Safawala Mumbai.",
    url: "https://safawalamumbai.com/sangeet-safa-in-mumbai",
    type: "website",
  },
}

export default function SangeetSafaInMumbai() {
  const pageData = {
    title: "Sangeet Safa in Mumbai",
    shortDescription: "Get ready to dance with stylish sangeet safa in Mumbai from Safawala Mumbai. Our sangeet safa in Mumbai is designed for the music and dance night celebration – trendy, comfortable, and camera-ready. The sangeet is about fun, music, and performance, and our sangeet safa in Mumbai matches this energetic vibe perfectly.",
    description: "Stylish sangeet safa in Mumbai by Safawala Mumbai - trendy turbans for sangeet night.",
    mainImage: "/27-3.webp",
    videos: ["/video-3.mp4", "/video-6.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Stylish sangeet safa in Mumbai",
      "Dance-friendly turban",
      "Trendy modern styles",
      "Secure comfortable fit",
      "Performance-ready look",
      "Photography perfect",
      "Bollywood-inspired options",
      "Party-night styling",
    ],
    seoKeywords: ["sangeet safa in mumbai", "sangeet turban mumbai", "sangeet night safa", "music night turban"],
    content: `
<h2>Safawala Mumbai - Trendy Sangeet Safa in Mumbai</h2>

<p>The sangeet night is all about Bollywood glam, music, dance performances, and fun. <strong>Sangeet safa in Mumbai</strong> from Safawala Mumbai captures this party energy with stylish turbans designed for the occasion. Our <strong>sangeet safa in Mumbai</strong> stays secure while you dance, looks amazing in photos and videos, and adds to the festive sangeet atmosphere.</p>

<p>Whether you're performing, watching, or just enjoying the music night, <strong>sangeet safa in Mumbai</strong> ensures you look your best throughout the celebration.</p>

<h2>Sangeet Turban Features</h2>

<h3>Dance-Friendly Design</h3>

<p><strong>Sangeet safa in Mumbai</strong> dance-ready:</p>

<ul>
<li>Secure fit for movement</li>
<li>Comfortable for hours</li>
<li>Won't come loose</li>
<li>Performance-friendly</li>
</ul>

<h3>Trendy Styling</h3>

<p><strong>Sangeet safa in Mumbai</strong> style:</p>

<ul>
<li>Modern contemporary looks</li>
<li>Bollywood-inspired options</li>
<li>Party-ready designs</li>
<li>Fashionable choices</li>
</ul>

<h3>Photography Ready</h3>

<p><strong>Sangeet safa in Mumbai</strong> camera-perfect:</p>

<ul>
<li>Instagram-worthy styling</li>
<li>Video-ready appearance</li>
<li>Stage-worthy look</li>
<li>Glamorous presentation</li>
</ul>

<h2>Sangeet Turban Styles</h2>

<p><strong>Sangeet safa in Mumbai</strong> options:</p>

<ul>
<li>Contemporary modern turbans</li>
<li>Indo-Western fusion styles</li>
<li>Bollywood hero looks</li>
<li>Trendy fashion-forward designs</li>
<li>Classic with modern twist</li>
</ul>

<h2>Color Options</h2>

<p><strong>Sangeet safa in Mumbai</strong> colors:</p>

<ul>
<li>Bright festive colors</li>
<li>Metallic accents</li>
<li>Stage-worthy shades</li>
<li>Party-night colors</li>
<li>Coordinated with outfit</li>
</ul>

<h2>Sangeet Family Service</h2>

<p><strong>Sangeet safa in Mumbai</strong> for family:</p>

<ul>
<li>Groom party-ready turban</li>
<li>Brothers trendy matching</li>
<li>Father stylish option</li>
<li>Group coordination</li>
</ul>

<h2>Sangeet Venue Service</h2>

<p><strong>Sangeet safa in Mumbai</strong> venues:</p>

<ul>
<li>Hotel sangeet parties</li>
<li>Banquet hall celebrations</li>
<li>Club venue events</li>
<li>Home sangeet functions</li>
</ul>

<h2>Contact for Sangeet Safa in Mumbai</h2>

<p>Book <strong>sangeet safa in Mumbai</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Sangeet safa in Mumbai</strong> for your party night.</p>
    `,
    faqs: [
      {
        question: "Will the turban stay during dancing?",
        answer: "Yes, sangeet safa in Mumbai is securely tied to stay in place while dancing.",
      },
      {
        question: "Is sangeet turban different from wedding?",
        answer: "Yes, sangeet safa in Mumbai is more trendy and party-focused than formal wedding turbans.",
      },
      {
        question: "Can I perform with the turban on?",
        answer: "Absolutely! Sangeet safa in Mumbai is designed for performances and movement.",
      },
      {
        question: "Do you have Bollywood-style options?",
        answer: "Yes, sangeet safa in Mumbai includes Bollywood-inspired trendy options.",
      },
      {
        question: "Can brothers all match for sangeet?",
        answer: "Yes, sangeet safa in Mumbai can coordinate trendy looks for the groom's party.",
      },
      {
        question: "Do you serve hotel sangeet parties?",
        answer: "Yes, sangeet safa in Mumbai is available at all sangeet venues across Mumbai.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
