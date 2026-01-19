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
  title: "Holi Turban in Mumbai | Festival Colors Safa | Safawala Mumbai",
  description: "Colorful Holi turban in Mumbai by Safawala Mumbai. Festival of colors celebration safa. Premium Holi turban in Mumbai for festive events. Book today!",
  keywords: "holi turban in mumbai, festival colors safa, holi pagdi mumbai, colorful turban service, holi celebration turban",
  openGraph: {
    title: "Holi Turban in Mumbai | Festival Colors Safa | Safawala Mumbai",
    description: "Colorful Holi turban in Mumbai by Safawala Mumbai.",
    url: "https://safawalamumbai.com/holi-turban-in-mumbai",
    type: "website",
  },
}

export default function HoliTurbanInMumbai() {
  const pageData = {
    title: "Holi Turban in Mumbai",
    shortDescription: "Holi, the festival of colors, calls for vibrant celebration. Safawala Mumbai's Holi turban in Mumbai adds traditional elegance to your colorful festivities. Our Holi turban in Mumbai features bright, festive colors that complement the spirit of this joyous occasion.",
    description: "Colorful Holi turban in Mumbai by Safawala Mumbai - festival of colors celebration safa.",
    mainImage: "/33-3.webp",
    videos: ["/video-4.mp4", "/video-5.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Holi turban in Mumbai",
      "Vibrant festival colors",
      "Celebration ready",
      "Bright shades",
      "Traditional style",
      "Festive elegance",
      "Color-safe options",
      "Joyful celebration",
    ],
    seoKeywords: ["holi turban in mumbai", "festival colors safa", "holi pagdi mumbai", "colorful turban service"],
    content: `
<h2>Safawala Mumbai - Vibrant Holi Turban in Mumbai</h2>

<p>Holi brings color, joy, and togetherness – the perfect time for family celebrations and traditional attire. <strong>Holi turban in Mumbai</strong> from Safawala Mumbai adds elegant tradition to your colorful festivities. Our <strong>Holi turban in Mumbai</strong> features bright, festive colors like pink, yellow, orange, and green that match the spirit of this joyous festival.</p>

<p>Celebrate colors with style – <strong>Holi turban in Mumbai</strong> from Safawala Mumbai.</p>

<h2>Holi Festival Spirit</h2>

<h3>Celebration Meaning</h3>

<p><strong>Holi turban in Mumbai</strong> for:</p>

<ul>
<li>Festival of colors</li>
<li>Victory of good</li>
<li>Spring celebration</li>
<li>Community joy</li>
</ul>

<h3>Mumbai Holi</h3>

<p><strong>Holi turban in Mumbai</strong> events:</p>

<ul>
<li>Morning celebrations</li>
<li>Color play events</li>
<li>Rain dance parties</li>
<li>Traditional gatherings</li>
</ul>

<h2>Holi Colors</h2>

<p><strong>Holi turban in Mumbai</strong> colors:</p>

<ul>
<li>Bright pink</li>
<li>Vibrant yellow</li>
<li>Fresh green</li>
<li>Orange joy</li>
<li>Multi-color options</li>
</ul>

<h2>Usage Options</h2>

<h3>Before Colors</h3>

<p><strong>Holi turban in Mumbai</strong> before play:</p>

<ul>
<li>Morning photographs</li>
<li>Puja time</li>
<li>Traditional events</li>
<li>Pre-celebration gatherings</li>
</ul>

<h3>Holi Events</h3>

<p><strong>Holi turban in Mumbai</strong> events:</p>

<ul>
<li>Corporate Holi parties</li>
<li>Society celebrations</li>
<li>Family gatherings</li>
<li>Photo sessions</li>
</ul>

<h2>Special Features</h2>

<p><strong>Holi turban in Mumbai</strong> features:</p>

<ul>
<li>Festive bright colors</li>
<li>Comfortable fit</li>
<li>Photo-ready styling</li>
<li>Traditional appeal</li>
</ul>

<h2>Contact for Holi Turban in Mumbai</h2>

<p>Book <strong>Holi turban in Mumbai</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Holi turban in Mumbai</strong> for colorful celebrations.</p>
    `,
    faqs: [
      {
        question: "Is turban for before color play?",
        answer: "Yes, Holi turban in Mumbai is typically worn before colors for photographs and puja.",
      },
      {
        question: "What colors suit Holi?",
        answer: "Holi turban in Mumbai offers pink, yellow, green, and orange – festive colors.",
      },
      {
        question: "Do you service Holi events?",
        answer: "Yes, Holi turban in Mumbai service is available for corporate and society events.",
      },
      {
        question: "Is morning service available?",
        answer: "Yes, Holi turban in Mumbai timing is flexible for morning celebrations.",
      },
      {
        question: "Can families get matching turbans?",
        answer: "Yes, Holi turban in Mumbai can coordinate colors for family members.",
      },
      {
        question: "Is advance booking needed?",
        answer: "Yes, Holi turban in Mumbai should be booked ahead during festival season.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
