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
  title: "Guest Turban Service Mumbai | Wedding Guest Safa | Safawala Mumbai",
  description: "Professional guest turban service Mumbai by Safawala Mumbai. Quick safa tying for all wedding guests. Quality guest turban service Mumbai for baarat. Book today!",
  keywords: "guest turban service mumbai, wedding guest safa, guest safa mumbai, baarat guest turban, bulk turban service mumbai",
  openGraph: {
    title: "Guest Turban Service Mumbai | Wedding Guest Safa | Safawala Mumbai",
    description: "Professional guest turban service Mumbai by Safawala Mumbai.",
    url: "https://safawalamumbai.com/guest-turban-service-in-mumbai",
    type: "website",
  },
}

export default function GuestTurbanServiceInMumbai() {
  const pageData = {
    title: "Guest Turban Service in Mumbai",
    shortDescription: "Serve your wedding guests with professional guest turban service Mumbai from Safawala Mumbai. Our guest turban service Mumbai efficiently handles large numbers of baarat and wedding guests, ensuring everyone looks their best. Quick, organized, and professional – our guest turban service Mumbai makes turban tying seamless for all your guests.",
    description: "Professional guest turban service Mumbai by Safawala Mumbai - efficient safa tying for wedding guests.",
    mainImage: "/33-3.webp",
    videos: ["/video-1.mp4", "/video-4.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Professional guest turban service Mumbai",
      "Large group handling",
      "Quick efficient service",
      "Baarat guest coverage",
      "Bulk service specialists",
      "Organized approach",
      "Volume discounts",
      "On-site service",
    ],
    seoKeywords: ["guest turban service mumbai", "wedding guest safa", "guest safa mumbai", "bulk turban service"],
    content: `
<h2>Safawala Mumbai - Efficient Guest Turban Service Mumbai</h2>

<p>Beyond the groom and immediate family, wedding guests – especially baarat participants – also want to look their festive best. <strong>Guest turban service Mumbai</strong> from Safawala Mumbai efficiently handles large numbers of guests, providing quick and professional turban tying for everyone. Our <strong>guest turban service Mumbai</strong> ensures no one is left waiting and everyone joins the celebration looking wonderful.</p>

<p>Whether it's 20 guests or 200, our <strong>guest turban service Mumbai</strong> has the team and expertise to handle it smoothly.</p>

<h2>Guest Service Approach</h2>

<h3>Efficient Handling</h3>

<p><strong>Guest turban service Mumbai</strong> efficiency:</p>

<ul>
<li>Multiple turban experts</li>
<li>Organized queue system</li>
<li>Quick service per person</li>
<li>Timely completion</li>
</ul>

<h3>Quality Maintained</h3>

<p><strong>Guest turban service Mumbai</strong> quality:</p>

<ul>
<li>Same quality for all guests</li>
<li>Proper tying technique</li>
<li>Secure comfortable fit</li>
<li>Presentable appearance</li>
</ul>

<h2>Who We Serve</h2>

<p><strong>Guest turban service Mumbai</strong> for:</p>

<ul>
<li>Baarat participants</li>
<li>Wedding party members</li>
<li>Friends of groom</li>
<li>Extended relatives</li>
<li>All male guests</li>
</ul>

<h2>Group Sizes</h2>

<h3>Small Groups</h3>

<p><strong>Guest turban service Mumbai</strong> small:</p>

<ul>
<li>10-25 guests</li>
<li>Intimate baarat</li>
<li>Quick service</li>
<li>Personal attention</li>
</ul>

<h3>Medium Groups</h3>

<p><strong>Guest turban service Mumbai</strong> medium:</p>

<ul>
<li>25-75 guests</li>
<li>Standard baarat size</li>
<li>Organized service</li>
<li>Team deployment</li>
</ul>

<h3>Large Groups</h3>

<p><strong>Guest turban service Mumbai</strong> large:</p>

<ul>
<li>75+ guests</li>
<li>Grand baarat</li>
<li>Multiple stations</li>
<li>Maximum efficiency</li>
</ul>

<h2>Service Location</h2>

<p><strong>Guest turban service Mumbai</strong> at:</p>

<ul>
<li>Groom's home assembly</li>
<li>Hotel gathering point</li>
<li>Wedding venue</li>
<li>Any gathering location</li>
</ul>

<h2>Pricing</h2>

<p><strong>Guest turban service Mumbai</strong> pricing:</p>

<ul>
<li>Per-person rates</li>
<li>Volume discounts</li>
<li>Package deals</li>
<li>Bulk pricing available</li>
</ul>

<h2>Contact for Guest Turban Service Mumbai</h2>

<p>Book <strong>guest turban service Mumbai</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Guest turban service Mumbai</strong> for all your guests.</p>
    `,
    faqs: [
      {
        question: "How many guests can you serve?",
        answer: "Guest turban service Mumbai can handle from 10 to 200+ guests efficiently.",
      },
      {
        question: "Is quality same for all guests?",
        answer: "Yes, guest turban service Mumbai maintains consistent quality for every guest.",
      },
      {
        question: "Are there volume discounts?",
        answer: "Yes, guest turban service Mumbai offers attractive discounts for larger groups.",
      },
      {
        question: "How quick is the service?",
        answer: "Guest turban service Mumbai uses multiple experts for fast, efficient service.",
      },
      {
        question: "Where do you provide guest service?",
        answer: "Guest turban service Mumbai comes to any gathering location – home, hotel, or venue.",
      },
      {
        question: "How do I book for large baarat?",
        answer: "Contact +91-9725295692 with guest count for guest turban service Mumbai quote.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
