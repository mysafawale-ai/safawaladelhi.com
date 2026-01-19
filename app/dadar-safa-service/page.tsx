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
  title: "Dadar Safa Service | Central Mumbai Turban Specialist | Safawala Mumbai",
  description: "Premium Dadar safa service by Safawala Mumbai. Expert turban service in Dadar West, Dadar East, Parel, Matunga & Prabhadevi. Professional Dadar safa service for weddings. Book today!",
  keywords: "dadar safa service, dadar turban service, dadar west safa, parel safa service, matunga turban, prabhadevi safa",
  openGraph: {
    title: "Dadar Safa Service | Central Mumbai Turban Specialist | Safawala Mumbai",
    description: "Premium Dadar safa service for Central Mumbai's wedding celebrations.",
    url: "https://safawalamumbai.com/dadar-safa-service",
    type: "website",
  },
}

export default function DadarSafaService() {
  const pageData = {
    title: "Dadar Safa Service",
    shortDescription: "Serving Central Mumbai with premium Dadar safa service from Safawala Mumbai. Our Dadar safa service caters to Dadar West, Dadar East, Parel, Matunga, and Prabhadevi – the cultural heart of Mumbai. These traditional neighborhoods with their historic temples and established communities deserve turban service that honors their heritage.",
    description: "Premium Dadar safa service by Safawala Mumbai - turban service for Central Mumbai celebrations.",
    mainImage: "/33-3.webp",
    videos: ["/video-3.mp4", "/video-6.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Premium Dadar safa service",
      "Central Mumbai expertise",
      "Traditional community understanding",
      "Parel and Lower Parel coverage",
      "Matunga area service",
      "Prabhadevi inclusion",
      "Heritage venue knowledge",
      "Temple function expertise",
    ],
    seoKeywords: ["dadar safa service", "dadar turban service", "dadar west safa", "parel safa service", "matunga turban"],
    content: `
<h2>Safawala Mumbai - Premium Dadar Safa Service</h2>

<p>Dadar – Mumbai's cultural nucleus where Marathi, Gujarati, and diverse communities thrive – deserves turban service that understands its heritage. Our <strong>Dadar safa service</strong> combines traditional expertise with premium quality to serve Central Mumbai's wedding celebrations. <strong>Dadar safa service</strong> from Safawala Mumbai honors the area's rich cultural traditions.</p>

<p>From Shivaji Park's iconic setting to Matunga's Gujarati enclave, from Parel's transformed mill lands to Prabhadevi's spiritual atmosphere, our <strong>Dadar safa service</strong> covers all of Central Mumbai with respect for local traditions and professional excellence.</p>

<h2>Central Mumbai Areas We Cover</h2>

<h3>Dadar West</h3>

<p><strong>Dadar safa service</strong> core area:</p>

<ul>
<li>Shivaji Park</li>
<li>Parsi Colony</li>
<li>Plaza Cinema area</li>
<li>Five Gardens</li>
</ul>

<h3>Dadar East</h3>

<p><strong>Dadar safa service</strong> eastern zone:</p>

<ul>
<li>Dadar TT Circle</li>
<li>Station vicinity</li>
<li>Industrial area</li>
</ul>

<h3>Parel & Lower Parel</h3>

<p><strong>Dadar safa service</strong> mill district:</p>

<ul>
<li>Phoenix Mills area</li>
<li>High Street Phoenix</li>
<li>Transformed mill venues</li>
<li>Modern banquets</li>
</ul>

<h3>Matunga</h3>

<p><strong>Dadar safa service</strong> cultural hub:</p>

<ul>
<li>Matunga East</li>
<li>Matunga West</li>
<li>King's Circle</li>
<li>Maheshwari Udyan area</li>
</ul>

<h3>Prabhadevi</h3>

<p><strong>Dadar safa service</strong> spiritual area:</p>

<ul>
<li>Siddhivinayak Temple vicinity</li>
<li>Worli proximity</li>
<li>Temple function support</li>
</ul>

<h2>Central Mumbai Venue Experience</h2>

<p><strong>Dadar safa service</strong> at:</p>

<ul>
<li>Shivaji Park functions</li>
<li>Dadar Club</li>
<li>Matunga Gymkhana</li>
<li>Lower Parel hotels</li>
<li>Temple celebrations</li>
<li>Community halls</li>
</ul>

<h2>Traditional Community Understanding</h2>

<p><strong>Dadar safa service</strong> respects:</p>

<ul>
<li>Marathi wedding traditions</li>
<li>Gujarati celebration customs</li>
<li>South Indian ceremonies</li>
<li>Multi-community events</li>
</ul>

<h2>Dadar Service Features</h2>

<h3>Heritage Knowledge</h3>

<p><strong>Dadar safa service</strong> understands:</p>

<ul>
<li>Traditional requirements</li>
<li>Community preferences</li>
<li>Local customs</li>
<li>Festival timing</li>
</ul>

<h3>Central Location Advantage</h3>

<p><strong>Dadar safa service</strong> benefits:</p>

<ul>
<li>Central accessibility</li>
<li>Quick reach to all areas</li>
<li>Metro connectivity</li>
<li>Efficient logistics</li>
</ul>

<h2>Book Dadar Safa Service</h2>

<p>Serve your Central Mumbai celebration:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Dadar safa service</strong> honoring Central Mumbai's traditions.</p>
    `,
    faqs: [
      {
        question: "Does Dadar safa service cover Matunga?",
        answer: "Yes, Dadar safa service fully covers Matunga East, Matunga West, and King's Circle area.",
      },
      {
        question: "Can you serve Lower Parel weddings?",
        answer: "Absolutely! Dadar safa service includes Parel, Lower Parel, and Phoenix area venues.",
      },
      {
        question: "Do you serve Shivaji Park functions?",
        answer: "Yes, Dadar safa service covers all Shivaji Park and Dadar West celebrations.",
      },
      {
        question: "Is Prabhadevi included?",
        answer: "Yes, Dadar safa service extends to Prabhadevi including temple function support.",
      },
      {
        question: "Do you understand Marathi traditions?",
        answer: "Yes, Dadar safa service respects and understands Marathi, Gujarati, and diverse community customs.",
      },
      {
        question: "How do I book Dadar safa service?",
        answer: "Book via phone +91-9725295692 or email. We schedule with respect for auspicious timings.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
