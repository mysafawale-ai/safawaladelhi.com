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
  title: "Thane Safa Service | Thane West Turban Specialist | Safawala Mumbai",
  description: "Professional Thane safa service by Safawala Mumbai. Expert turban service in Thane West, Thane East, Ghodbunder Road & Mulund. Premium Thane safa service for weddings. Book today!",
  keywords: "thane safa service, thane turban service, thane west safa, thane wedding turban, ghodbunder road safa, mulund safa",
  openGraph: {
    title: "Thane Safa Service | Thane West Turban Specialist | Safawala Mumbai",
    description: "Professional Thane safa service for Thane West, East and surrounding areas.",
    url: "https://safawalamumbai.com/thane-safa-service",
    type: "website",
  },
}

export default function ThaneSafaService() {
  const pageData = {
    title: "Thane Safa Service",
    shortDescription: "Extending our premium service to the Lake City with comprehensive Thane safa service from Safawala Mumbai. Our Thane safa service covers Thane West, Thane East, Ghodbunder Road, Mulund, and surrounding areas. Thane's growing wedding market deserves the same quality service available in Mumbai, and that's exactly what our Thane safa service delivers.",
    description: "Professional Thane safa service by Safawala Mumbai - turban service for Thane and surrounding areas.",
    mainImage: "/23-3.webp",
    videos: ["/video-2.mp4", "/video-5.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Full Thane safa service coverage",
      "Thane West complete service",
      "Ghodbunder Road venue expertise",
      "Mulund area inclusion",
      "Multiple banquet experience",
      "Lake City convenience",
      "Mumbai-quality service",
      "Same-day availability",
    ],
    seoKeywords: ["thane safa service", "thane turban service", "thane west safa", "thane wedding turban", "ghodbunder road safa"],
    content: `
<h2>Safawala Mumbai - Premium Thane Safa Service</h2>

<p>Thane – the Lake City – has emerged as a major wedding destination with its numerous banquet halls and growing residential community. Our <strong>Thane safa service</strong> brings Mumbai's premium turban styling across the creek to serve Thane's wedding market. <strong>Thane safa service</strong> from Safawala Mumbai ensures that Thane celebrations enjoy the same quality as South Mumbai events.</p>

<p>From Ghodbunder Road's countless banquets to Thane West's established neighborhoods and Mulund's vibrant community, our <strong>Thane safa service</strong> covers the entire Thane region with professional, punctual, and premium service.</p>

<h2>Thane Areas We Cover</h2>

<h3>Thane West</h3>

<p><strong>Thane safa service</strong> main area:</p>

<ul>
<li>Hiranandani Estate</li>
<li>Ghodbunder Road</li>
<li>Majiwada</li>
<li>Vartak Nagar</li>
<li>Pokhran Road</li>
</ul>

<h3>Thane East</h3>

<p><strong>Thane safa service</strong> eastern coverage:</p>

<ul>
<li>Wagle Estate</li>
<li>Manpada</li>
<li>Station area</li>
<li>Industrial belt</li>
</ul>

<h3>Mulund</h3>

<p><strong>Thane safa service</strong> extended to:</p>

<ul>
<li>Mulund West</li>
<li>Mulund East</li>
<li>Nahur</li>
<li>LBS Marg area</li>
</ul>

<h3>Ghodbunder Road</h3>

<p><strong>Thane safa service</strong> venue hub:</p>

<ul>
<li>Massive banquet cluster</li>
<li>New township areas</li>
<li>Owale region</li>
<li>Kasarvadavali</li>
</ul>

<h2>Popular Thane Venues We Serve</h2>

<p><strong>Thane safa service</strong> at:</p>

<ul>
<li>Vivanta Thane</li>
<li>The Meadows (Kasarvadavali)</li>
<li>Ghodbunder Road banquets</li>
<li>Thane Club</li>
<li>Hiranandani venues</li>
<li>Mulund banquet halls</li>
</ul>

<h2>Why Choose Thane Safa Service</h2>

<p><strong>Thane safa service</strong> advantages:</p>

<ul>
<li>Mumbai-quality in Thane</li>
<li>No long-distance delays</li>
<li>Familiar with local venues</li>
<li>Reliable timing</li>
<li>Same rates as Mumbai</li>
</ul>

<h2>Thane Wedding Packages</h2>

<p><strong>Thane safa service</strong> packages:</p>

<ul>
<li>Groom complete package</li>
<li>Family coordination</li>
<li>Baraat group service</li>
<li>Multi-day wedding coverage</li>
</ul>

<h2>Thane Service Logistics</h2>

<p><strong>Thane safa service</strong> planning:</p>

<ul>
<li>Traffic-aware scheduling</li>
<li>Local team coordination</li>
<li>Venue familiarity</li>
<li>Punctual arrival guaranteed</li>
</ul>

<h2>Book Thane Safa Service</h2>

<p>Bring Mumbai quality to your Thane celebration:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Thane safa service</strong> bringing premium quality to the Lake City.</p>
    `,
    faqs: [
      {
        question: "Does Thane safa service include Ghodbunder Road?",
        answer: "Yes, Thane safa service fully covers Ghodbunder Road and its numerous banquet venues.",
      },
      {
        question: "Is Mulund included in Thane safa service?",
        answer: "Absolutely! Thane safa service extends to Mulund West, Mulund East, and surrounding areas.",
      },
      {
        question: "Is there extra charge for Thane service?",
        answer: "No, Thane safa service rates are same as Mumbai with no distance surcharge.",
      },
      {
        question: "How do you manage Thane timing?",
        answer: "Thane safa service includes traffic-aware scheduling to ensure punctual venue arrival.",
      },
      {
        question: "Do you serve Hiranandani Estate Thane?",
        answer: "Yes, Thane safa service covers Hiranandani Estate, Brahmand, and all premium Thane areas.",
      },
      {
        question: "Can I see turbans before booking?",
        answer: "Visit our Colaba showroom or request a Thane area preview appointment. We accommodate both.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
