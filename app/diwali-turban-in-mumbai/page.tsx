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
  title: "Diwali Turban in Mumbai | Festival Safa Service | Safawala Mumbai",
  description: "Festive Diwali turban in Mumbai by Safawala Mumbai. Festival celebration safa service. Premium Diwali turban in Mumbai for Lakshmi Puja. Book today!",
  keywords: "diwali turban in mumbai, festival safa mumbai, diwali pagdi mumbai, lakshmi puja turban, festive turban service",
  openGraph: {
    title: "Diwali Turban in Mumbai | Festival Safa Service | Safawala Mumbai",
    description: "Festive Diwali turban in Mumbai by Safawala Mumbai.",
    url: "https://safawalamumbai.com/diwali-turban-in-mumbai",
    type: "website",
  },
}

export default function DiwaliTurbanInMumbai() {
  const pageData = {
    title: "Diwali Turban in Mumbai",
    shortDescription: "Diwali, the festival of lights, is one of India's most celebrated occasions. Safawala Mumbai's Diwali turban in Mumbai helps you look traditional and festive during Lakshmi Puja and Diwali celebrations. Our Diwali turban in Mumbai features auspicious colors and elegant styling perfect for the festival.",
    description: "Festive Diwali turban in Mumbai by Safawala Mumbai - festival celebration safa service.",
    mainImage: "/36-3.webp",
    videos: ["/video-1.mp4", "/video-6.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Diwali turban in Mumbai",
      "Festival colors",
      "Lakshmi Puja ready",
      "Traditional styling",
      "Auspicious shades",
      "Family celebration",
      "Photography perfect",
      "Festive elegance",
    ],
    seoKeywords: ["diwali turban in mumbai", "festival safa mumbai", "diwali pagdi mumbai", "lakshmi puja turban"],
    content: `
<h2>Safawala Mumbai - Festive Diwali Turban in Mumbai</h2>

<p>Diwali brings the whole family together in celebration – lights, sweets, prayers, and joy. Many families dress in traditional attire for Lakshmi Puja and Diwali gatherings. <strong>Diwali turban in Mumbai</strong> from Safawala Mumbai adds that traditional touch to your festival celebrations. Our <strong>Diwali turban in Mumbai</strong> features auspicious colors like red, gold, and yellow that complement the festive atmosphere.</p>

<p>Celebrate the festival of lights with style – <strong>Diwali turban in Mumbai</strong> from Safawala Mumbai.</p>

<h2>Diwali Celebration</h2>

<h3>Festival Significance</h3>

<p><strong>Diwali turban in Mumbai</strong> for:</p>

<ul>
<li>Festival of lights</li>
<li>Lakshmi Puja</li>
<li>Family gatherings</li>
<li>Traditional celebrations</li>
</ul>

<h3>Occasions</h3>

<p><strong>Diwali turban in Mumbai</strong> occasions:</p>

<ul>
<li>Lakshmi Puja evening</li>
<li>Diwali parties</li>
<li>Family photographs</li>
<li>Corporate Diwali events</li>
</ul>

<h2>Festive Colors</h2>

<p><strong>Diwali turban in Mumbai</strong> colors:</p>

<ul>
<li>Auspicious red</li>
<li>Golden glory</li>
<li>Yellow blessings</li>
<li>Orange vibrancy</li>
<li>Maroon elegance</li>
</ul>

<h2>Family Turbans</h2>

<h3>Group Service</h3>

<p><strong>Diwali turban in Mumbai</strong> family:</p>

<ul>
<li>Father's turban</li>
<li>Grandfather's pagdi</li>
<li>Sons' safas</li>
<li>Matching options</li>
</ul>

<h3>Style Options</h3>

<p><strong>Diwali turban in Mumbai</strong> styles:</p>

<ul>
<li>Traditional Rajasthani</li>
<li>Simple elegant</li>
<li>Grand festive</li>
<li>Age-appropriate</li>
</ul>

<h2>Photography Timing</h2>

<p><strong>Diwali turban in Mumbai</strong> photos:</p>

<ul>
<li>Before Puja shots</li>
<li>With diyas</li>
<li>Family portraits</li>
<li>Festive memories</li>
</ul>

<h2>Contact for Diwali Turban in Mumbai</h2>

<p>Book <strong>Diwali turban in Mumbai</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Diwali turban in Mumbai</strong> for festive celebrations.</p>
    `,
    faqs: [
      {
        question: "Is turban service available on Diwali?",
        answer: "Yes, Diwali turban in Mumbai service is available during the festival season.",
      },
      {
        question: "What colors suit Diwali?",
        answer: "Diwali turban in Mumbai recommends red, gold, yellow, and orange for auspiciousness.",
      },
      {
        question: "Can whole family get turbans?",
        answer: "Yes, Diwali turban in Mumbai can accommodate entire families for photographs.",
      },
      {
        question: "Do you come to homes for Diwali?",
        answer: "Yes, Diwali turban in Mumbai offers home visit service for festival celebrations.",
      },
      {
        question: "When should I book for Diwali?",
        answer: "Diwali turban in Mumbai should be booked in advance during festival season.",
      },
      {
        question: "Are corporate events covered?",
        answer: "Yes, Diwali turban in Mumbai services corporate Diwali celebrations too.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
