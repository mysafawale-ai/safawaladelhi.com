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
  title: "Navratri Turban in Mumbai | Garba Safa Service | Safawala Mumbai",
  description: "Vibrant Navratri turban in Mumbai by Safawala Mumbai. Garba dandiya celebration safa. Premium Navratri turban in Mumbai for festival nights. Book today!",
  keywords: "navratri turban in mumbai, garba safa mumbai, dandiya turban mumbai, navratri pagdi, festival turban service",
  openGraph: {
    title: "Navratri Turban in Mumbai | Garba Safa Service | Safawala Mumbai",
    description: "Vibrant Navratri turban in Mumbai by Safawala Mumbai.",
    url: "https://safawalamumbai.com/navratri-turban-in-mumbai",
    type: "website",
  },
}

export default function NavratriTurbanInMumbai() {
  const pageData = {
    title: "Navratri Turban in Mumbai",
    shortDescription: "Navratri brings nine nights of vibrant garba and dandiya celebrations. Safawala Mumbai's Navratri turban in Mumbai helps you look traditional during these festive nights. Our Navratri turban in Mumbai features colorful, dance-friendly styles that stay secure while you celebrate.",
    description: "Vibrant Navratri turban in Mumbai by Safawala Mumbai - garba dandiya celebration safa.",
    mainImage: "/25-3.webp",
    videos: ["/video-2.mp4", "/video-3.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Navratri turban in Mumbai",
      "Garba night ready",
      "Dance-friendly fit",
      "Vibrant colors",
      "Secure styling",
      "Nine night options",
      "Traditional look",
      "Festival celebration",
    ],
    seoKeywords: ["navratri turban in mumbai", "garba safa mumbai", "dandiya turban mumbai", "navratri pagdi"],
    content: `
<h2>Safawala Mumbai - Vibrant Navratri Turban in Mumbai</h2>

<p>Navratri is all about color, dance, and celebration – nine nights of garba and dandiya that bring communities together. <strong>Navratri turban in Mumbai</strong> from Safawala Mumbai adds traditional flair to your Navratri celebrations. Our <strong>Navratri turban in Mumbai</strong> features vibrant colors and secure tying that stays in place during energetic dancing.</p>

<p>Dance the night away in traditional style with <strong>Navratri turban in Mumbai</strong>.</p>

<h2>Navratri Celebration</h2>

<h3>Festival Spirit</h3>

<p><strong>Navratri turban in Mumbai</strong> for:</p>

<ul>
<li>Nine nights of dancing</li>
<li>Garba celebrations</li>
<li>Dandiya nights</li>
<li>Community gatherings</li>
</ul>

<h3>Mumbai Navratri</h3>

<p><strong>Navratri turban in Mumbai</strong> venues:</p>

<ul>
<li>Falguni Pathak events</li>
<li>Club celebrations</li>
<li>Community grounds</li>
<li>Society garba</li>
</ul>

<h2>Navratri Colors</h2>

<p><strong>Navratri turban in Mumbai</strong> colors:</p>

<ul>
<li>Day 1 – Yellow</li>
<li>Day 2 – Green</li>
<li>Day 3 – Grey</li>
<li>Different daily colors</li>
<li>Vibrant combinations</li>
</ul>

<h2>Dance-Friendly Features</h2>

<h3>Secure Tying</h3>

<p><strong>Navratri turban in Mumbai</strong> features:</p>

<ul>
<li>Movement-proof fit</li>
<li>Comfortable wear</li>
<li>Breathable fabric</li>
<li>Long-lasting style</li>
</ul>

<h3>Style Options</h3>

<p><strong>Navratri turban in Mumbai</strong> styles:</p>

<ul>
<li>Gujarati style</li>
<li>Rajasthani style</li>
<li>Contemporary fusion</li>
<li>Traditional classic</li>
</ul>

<h2>Group Bookings</h2>

<p><strong>Navratri turban in Mumbai</strong> groups:</p>

<ul>
<li>Friend groups</li>
<li>Dance teams</li>
<li>Family matching</li>
<li>Society events</li>
</ul>

<h2>Contact for Navratri Turban in Mumbai</h2>

<p>Book <strong>Navratri turban in Mumbai</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Navratri turban in Mumbai</strong> for vibrant celebrations.</p>
    `,
    faqs: [
      {
        question: "Will turban stay while dancing?",
        answer: "Yes, Navratri turban in Mumbai uses secure tying techniques for energetic garba dancing.",
      },
      {
        question: "What colors suit Navratri?",
        answer: "Navratri turban in Mumbai offers daily color options matching the nine-day theme.",
      },
      {
        question: "Can groups book together?",
        answer: "Yes, Navratri turban in Mumbai accommodates friend groups and dance teams.",
      },
      {
        question: "Is service available at night?",
        answer: "Yes, Navratri turban in Mumbai timing is flexible for evening events.",
      },
      {
        question: "Do you come to garba venues?",
        answer: "Yes, Navratri turban in Mumbai service is available at celebration venues.",
      },
      {
        question: "Is comfortable for long dancing?",
        answer: "Yes, Navratri turban in Mumbai is tied for comfort during extended celebrations.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
