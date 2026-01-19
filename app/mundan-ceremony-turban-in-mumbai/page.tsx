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
  title: "Mundan Ceremony Turban in Mumbai | Baby Mundan Safa | Safawala Mumbai",
  description: "Special mundan ceremony turban in Mumbai by Safawala Mumbai. Gentle turban for baby's first haircut. Premium mundan ceremony turban in Mumbai for families. Book today!",
  keywords: "mundan ceremony turban in mumbai, baby mundan safa, mundan pagdi mumbai, head shaving ceremony turban, baby first haircut turban",
  openGraph: {
    title: "Mundan Ceremony Turban in Mumbai | Baby Mundan Safa | Safawala Mumbai",
    description: "Special mundan ceremony turban in Mumbai by Safawala Mumbai.",
    url: "https://safawalamumbai.com/mundan-ceremony-turban-in-mumbai",
    type: "website",
  },
}

export default function MundanCeremonyTurbanInMumbai() {
  const pageData = {
    title: "Mundan Ceremony Turban in Mumbai",
    shortDescription: "The mundan ceremony marks a baby's first haircut – a significant Hindu ritual. Safawala Mumbai's mundan ceremony turban in Mumbai provides special turbans for father and grandfather during this blessed event. Our mundan ceremony turban in Mumbai adds tradition and dignity to this important family celebration.",
    description: "Special mundan ceremony turban in Mumbai by Safawala Mumbai - gentle turban for family ceremony.",
    mainImage: "/23-3.webp",
    videos: ["/video-2.mp4", "/video-5.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Mundan ceremony turban in Mumbai",
      "Family tradition",
      "Father's turban",
      "Grandfather's pagdi",
      "Traditional colors",
      "Auspicious styling",
      "Religious significance",
      "Gentle celebration",
    ],
    seoKeywords: ["mundan ceremony turban in mumbai", "baby mundan safa", "mundan pagdi mumbai", "head shaving ceremony turban"],
    content: `
<h2>Safawala Mumbai - Traditional Mundan Ceremony Turban in Mumbai</h2>

<p>Mundan, also called the first haircut ceremony, is a significant Hindu ritual performed when a child is around one to three years old. It symbolizes purification and a new beginning. <strong>Mundan ceremony turban in Mumbai</strong> from Safawala Mumbai provides turbans for the father, grandfather, and male family members participating in this blessed ceremony. Our <strong>mundan ceremony turban in Mumbai</strong> adds dignity and tradition to this important milestone.</p>

<p>Make your child's mundan ceremony special with <strong>mundan ceremony turban in Mumbai</strong>.</p>

<h2>Mundan Ceremony Significance</h2>

<h3>Religious Meaning</h3>

<p><strong>Mundan ceremony turban in Mumbai</strong> for:</p>

<ul>
<li>Purification ritual</li>
<li>Hair removal symbolism</li>
<li>New beginning</li>
<li>Blessings for child</li>
</ul>

<h3>Family Participation</h3>

<p><strong>Mundan ceremony turban in Mumbai</strong> participants:</p>

<ul>
<li>Father</li>
<li>Grandfather</li>
<li>Uncles</li>
<li>Male elders</li>
</ul>

<h2>Turban Options</h2>

<p><strong>Mundan ceremony turban in Mumbai</strong> options:</p>

<ul>
<li>Traditional saffron</li>
<li>Auspicious red</li>
<li>Yellow for blessings</li>
<li>Simple elegant styles</li>
<li>Family matching</li>
</ul>

<h2>Ceremony Planning</h2>

<h3>Timing</h3>

<p><strong>Mundan ceremony turban in Mumbai</strong> timing:</p>

<ul>
<li>Morning ceremonies</li>
<li>Auspicious dates</li>
<li>Temple timings</li>
<li>Home ceremonies</li>
</ul>

<h3>Our Service</h3>

<p><strong>Mundan ceremony turban in Mumbai</strong> service:</p>

<ul>
<li>Home visits available</li>
<li>Temple attendance</li>
<li>Multiple family members</li>
<li>Simple dignified styling</li>
</ul>

<h2>Recommended Colors</h2>

<p><strong>Mundan ceremony turban in Mumbai</strong> colors:</p>

<ul>
<li>Saffron – religious significance</li>
<li>Red – auspiciousness</li>
<li>Yellow – blessings</li>
<li>White – purity</li>
</ul>

<h2>Contact for Mundan Ceremony Turban in Mumbai</h2>

<p>Book <strong>mundan ceremony turban in Mumbai</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Mundan ceremony turban in Mumbai</strong> for blessed traditions.</p>
    `,
    faqs: [
      {
        question: "Who wears turban at mundan?",
        answer: "Mundan ceremony turban in Mumbai is typically for father, grandfather, and male family members.",
      },
      {
        question: "What colors are appropriate?",
        answer: "Mundan ceremony turban in Mumbai recommends saffron, red, or yellow for auspiciousness.",
      },
      {
        question: "Do you come to temples?",
        answer: "Yes, mundan ceremony turban in Mumbai service is available at temples or homes.",
      },
      {
        question: "Can multiple family members get turbans?",
        answer: "Yes, mundan ceremony turban in Mumbai can accommodate all male family members.",
      },
      {
        question: "Is morning service available?",
        answer: "Yes, mundan ceremony turban in Mumbai timing is flexible for morning ceremonies.",
      },
      {
        question: "How to book for mundan?",
        answer: "Mundan ceremony turban in Mumbai can be booked by calling or messaging us.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
