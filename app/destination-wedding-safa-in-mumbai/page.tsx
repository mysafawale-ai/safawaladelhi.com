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
  title: "Destination Wedding Safa in Mumbai | Travel Turban Service | Safawala Mumbai",
  description: "Professional destination wedding safa in Mumbai by Safawala Mumbai. Travel-ready turban service. Premium destination wedding safa in Mumbai for any location. Book today!",
  keywords: "destination wedding safa in mumbai, travel turban mumbai, destination safa service, wedding turban travel, portable turban service",
  openGraph: {
    title: "Destination Wedding Safa in Mumbai | Travel Turban Service | Safawala Mumbai",
    description: "Professional destination wedding safa in Mumbai by Safawala Mumbai.",
    url: "https://safawalamumbai.com/destination-wedding-safa-in-mumbai",
    type: "website",
  },
}

export default function DestinationWeddingSafaInMumbai() {
  const pageData = {
    title: "Destination Wedding Safa in Mumbai",
    shortDescription: "Destination weddings have become incredibly popular – from Goa beaches to Udaipur palaces. Safawala Mumbai's destination wedding safa in Mumbai travels with you. Our destination wedding safa in Mumbai service ensures professional turban tying wherever your celebration takes place.",
    description: "Professional destination wedding safa in Mumbai by Safawala Mumbai - travel-ready turban service.",
    mainImage: "/28-3.webp",
    videos: ["/video-1.mp4", "/video-2.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Destination wedding safa in Mumbai",
      "Travel-ready service",
      "Any location coverage",
      "Professional artists travel",
      "Complete equipment",
      "Advance planning",
      "On-site expertise",
      "Reliable availability",
    ],
    seoKeywords: ["destination wedding safa in mumbai", "travel turban mumbai", "destination safa service", "portable turban service"],
    content: `
<h2>Safawala Mumbai - Expert Destination Wedding Safa in Mumbai</h2>

<p>Destination weddings are increasingly popular – from beach weddings in Goa to palace celebrations in Udaipur. But finding quality turban service at remote locations can be challenging. <strong>Destination wedding safa in Mumbai</strong> from Safawala Mumbai solves this problem. Our <strong>destination wedding safa in Mumbai</strong> team travels to your wedding location, bringing our expertise and equipment wherever your celebration takes place.</p>

<p>With <strong>destination wedding safa in Mumbai</strong>, you get Mumbai-quality turban service at any location.</p>

<h2>Travel Service Coverage</h2>

<h3>Popular Destinations</h3>

<p><strong>Destination wedding safa in Mumbai</strong> locations:</p>

<ul>
<li>Goa beaches</li>
<li>Udaipur palaces</li>
<li>Jaipur heritage venues</li>
<li>Kerala backwaters</li>
<li>Mahabaleshwar hills</li>
</ul>

<h3>Service Scope</h3>

<p><strong>Destination wedding safa in Mumbai</strong> coverage:</p>

<ul>
<li>Maharashtra state</li>
<li>Neighboring states</li>
<li>Pan-India travel</li>
<li>Advance booking required</li>
</ul>

<h2>What We Bring</h2>

<p><strong>Destination wedding safa in Mumbai</strong> includes:</p>

<ul>
<li>Complete safa collection</li>
<li>All accessories</li>
<li>Professional equipment</li>
<li>Expert artists</li>
<li>Backup inventory</li>
</ul>

<h2>Advance Planning</h2>

<h3>Booking Process</h3>

<p><strong>Destination wedding safa in Mumbai</strong> booking:</p>

<ul>
<li>Book well in advance</li>
<li>Share venue details</li>
<li>Confirm guest count</li>
<li>Finalize schedule</li>
</ul>

<h3>Travel Logistics</h3>

<p><strong>Destination wedding safa in Mumbai</strong> logistics:</p>

<ul>
<li>Travel arrangements</li>
<li>Accommodation planning</li>
<li>Equipment transport</li>
<li>Timeline coordination</li>
</ul>

<h2>Destination Wedding Benefits</h2>

<p><strong>Destination wedding safa in Mumbai</strong> benefits:</p>

<ul>
<li>Consistent quality anywhere</li>
<li>No local search needed</li>
<li>Mumbai expertise travels</li>
<li>Peace of mind</li>
</ul>

<h2>Contact for Destination Wedding Safa in Mumbai</h2>

<p>Book <strong>destination wedding safa in Mumbai</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Destination wedding safa in Mumbai</strong> that travels with you.</p>
    `,
    faqs: [
      {
        question: "Do you travel for weddings?",
        answer: "Yes, destination wedding safa in Mumbai service travels to your wedding location.",
      },
      {
        question: "What locations do you cover?",
        answer: "Destination wedding safa in Mumbai covers Goa, Rajasthan, Kerala, and more.",
      },
      {
        question: "How far in advance should I book?",
        answer: "Destination wedding safa in Mumbai requires advance booking for travel planning.",
      },
      {
        question: "Do you bring all equipment?",
        answer: "Yes, destination wedding safa in Mumbai includes complete inventory and equipment.",
      },
      {
        question: "Is travel cost extra?",
        answer: "Destination wedding safa in Mumbai travel costs are quoted based on location.",
      },
      {
        question: "Can you handle large guest counts?",
        answer: "Yes, destination wedding safa in Mumbai can accommodate any guest count.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
