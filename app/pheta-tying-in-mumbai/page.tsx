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
  title: "Pheta Tying in Mumbai | Maharashtrian Pheta | Safawala Mumbai",
  description: "Authentic pheta tying in Mumbai by Safawala Mumbai. Traditional Maharashtrian pheta turbans for weddings. Expert pheta tying in Mumbai for Marathi celebrations. Book today!",
  keywords: "pheta tying in mumbai, pheta mumbai, maharashtrian pheta, marathi turban mumbai, pheta pagdi mumbai",
  openGraph: {
    title: "Pheta Tying in Mumbai | Maharashtrian Pheta | Safawala Mumbai",
    description: "Authentic pheta tying in Mumbai - Maharashtrian pheta by Safawala Mumbai.",
    url: "https://safawalamumbai.com/pheta-tying-in-mumbai",
    type: "website",
  },
}

export default function PhetaTyingInMumbai() {
  const pageData = {
    title: "Pheta Tying in Mumbai",
    shortDescription: "Honor Maharashtrian tradition with authentic pheta tying in Mumbai from Safawala Mumbai. Our pheta tying in Mumbai specializes in the traditional Marathi turban worn during weddings and cultural celebrations. The pheta is an integral part of Maharashtra's heritage, and our pheta tying in Mumbai preserves this tradition with expert craftsmanship.",
    description: "Authentic pheta tying in Mumbai by Safawala Mumbai - traditional Maharashtrian pheta turbans.",
    mainImage: "/28-3.webp",
    videos: ["/video-3.mp4", "/video-6.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Authentic pheta tying in Mumbai",
      "Maharashtrian tradition",
      "Puneri Pheta expertise",
      "Kolhapuri style",
      "Wedding pheta service",
      "Cultural understanding",
      "Traditional techniques",
      "Marathi celebration specialist",
    ],
    seoKeywords: ["pheta tying in mumbai", "pheta mumbai", "maharashtrian pheta", "marathi turban mumbai"],
    content: `
<h2>Safawala Mumbai - Traditional Pheta Tying in Mumbai</h2>

<p>The pheta is Maharashtra's traditional turban, distinct in style from the safas of other regions. <strong>Pheta tying in Mumbai</strong> from Safawala Mumbai honors this Maharashtrian heritage with authentic styling and expert technique. Our <strong>pheta tying in Mumbai</strong> serves the Marathi community for weddings, festivals, and cultural occasions where the pheta represents pride and tradition.</p>

<p>In Maharashtra's capital city, maintaining this cultural tradition is important. Our <strong>pheta tying in Mumbai</strong> ensures the pheta is worn with authenticity and proper technique.</p>

<h2>Pheta Styles</h2>

<h3>Puneri Pheta</h3>

<p><strong>Pheta tying in Mumbai</strong> - Puneri:</p>

<ul>
<li>Classic Pune style</li>
<li>Traditional elegance</li>
<li>Cultural authenticity</li>
<li>Most recognized style</li>
</ul>

<h3>Kolhapuri Pheta</h3>

<p><strong>Pheta tying in Mumbai</strong> - Kolhapuri:</p>

<ul>
<li>Kolhapur region style</li>
<li>Slightly different technique</li>
<li>Regional variation</li>
<li>Traditional respect</li>
</ul>

<h3>Wedding Pheta</h3>

<p><strong>Pheta tying in Mumbai</strong> - wedding:</p>

<ul>
<li>Groom-specific styling</li>
<li>Elaborate presentation</li>
<li>Premium quality</li>
<li>Perfect for ceremony</li>
</ul>

<h2>Pheta Occasions</h2>

<p><strong>Pheta tying in Mumbai</strong> for:</p>

<ul>
<li>Marathi weddings</li>
<li>Ganeshotsav celebrations</li>
<li>Gudi Padwa</li>
<li>Cultural programs</li>
<li>Traditional ceremonies</li>
</ul>

<h2>Pheta Colors</h2>

<p><strong>Pheta tying in Mumbai</strong> colors:</p>

<ul>
<li>Saffron (kesari) - traditional</li>
<li>White - pure elegance</li>
<li>Cream - subtle grace</li>
<li>Red - wedding auspicious</li>
<li>Yellow - festival-ready</li>
</ul>

<h2>Who Wears Pheta</h2>

<p><strong>Pheta tying in Mumbai</strong> for:</p>

<ul>
<li>Marathi grooms</li>
<li>Father of groom/bride</li>
<li>Male family members</li>
<li>Cultural event participants</li>
</ul>

<h2>Contact for Pheta Tying in Mumbai</h2>

<p>Book <strong>pheta tying in Mumbai</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Pheta tying in Mumbai</strong> for Maharashtrian pride.</p>
    `,
    faqs: [
      {
        question: "What is a pheta?",
        answer: "Pheta tying in Mumbai serves the traditional Maharashtrian turban distinct to Maharashtra.",
      },
      {
        question: "Do you know different pheta styles?",
        answer: "Yes, pheta tying in Mumbai includes Puneri, Kolhapuri, and wedding variations.",
      },
      {
        question: "Is pheta different from safa?",
        answer: "Yes, pheta tying in Mumbai honors the distinct Maharashtrian style different from North Indian safa.",
      },
      {
        question: "What color pheta for wedding?",
        answer: "Pheta tying in Mumbai for weddings typically uses saffron, red, or white colors.",
      },
      {
        question: "Do you serve Ganeshotsav events?",
        answer: "Yes, pheta tying in Mumbai is available for Ganeshotsav and all Marathi festivals.",
      },
      {
        question: "Can family members all get pheta?",
        answer: "Yes, pheta tying in Mumbai can serve the entire family with coordinated phetas.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
