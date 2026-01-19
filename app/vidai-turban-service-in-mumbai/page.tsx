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
  title: "Vidai Turban Service Mumbai | Bride Farewell Safa | Safawala Mumbai",
  description: "Emotional vidai turban service Mumbai by Safawala Mumbai. Special safas for the bride's farewell ceremony. Perfect vidai turban service Mumbai for this important ritual. Book today!",
  keywords: "vidai turban service mumbai, vidai safa mumbai, bride farewell turban, vidai ceremony pagdi, bidai safa mumbai",
  openGraph: {
    title: "Vidai Turban Service Mumbai | Bride Farewell Safa | Safawala Mumbai",
    description: "Emotional vidai turban service Mumbai by Safawala Mumbai.",
    url: "https://safawalamumbai.com/vidai-turban-service-in-mumbai",
    type: "website",
  },
}

export default function VidaiTurbanServiceInMumbai() {
  const pageData = {
    title: "Vidai Turban Service in Mumbai",
    shortDescription: "The vidai is one of the most emotional moments of an Indian wedding – when the bride bids farewell to her family. Safawala Mumbai's vidai turban service Mumbai ensures the men of the bride's family look dignified and presentable for this poignant ceremony. Our vidai turban service Mumbai provides special turbans that honor this sacred ritual.",
    description: "Emotional vidai turban service Mumbai by Safawala Mumbai - special safas for the bride farewell ceremony.",
    mainImage: "/17-3.webp",
    videos: ["/video-3.mp4", "/video-6.mp4"],
    galleryImages: ["/1.png", "/2.png", "/3.png", "/5-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp"],
    areas: MUMBAI_AREAS,
    keyFeatures: [
      "Vidai turban service Mumbai",
      "Bride farewell ceremony",
      "Emotional moment dignity",
      "Family honor",
      "Special vidai safas",
      "Traditional significance",
      "Memorable appearance",
      "Ladkiwale preparation",
    ],
    seoKeywords: ["vidai turban service mumbai", "vidai safa mumbai", "bride farewell turban", "bidai ceremony pagdi"],
    content: `
<h2>Safawala Mumbai - Meaningful Vidai Turban Service Mumbai</h2>

<p>The vidai ceremony marks the bride's transition as she leaves her parental home. It's emotional, significant, and deeply meaningful. <strong>Vidai turban service Mumbai</strong> from Safawala Mumbai ensures the bride's family – especially her father, brothers, and uncles – are dressed with dignity and grace for this important moment. Our <strong>vidai turban service Mumbai</strong> honors this ritual with thoughtful turban service.</p>

<p>Every photograph from the vidai should capture dignity and pride. <strong>Vidai turban service Mumbai</strong> ensures the men of the bride's family look their best.</p>

<h2>Understanding Vidai</h2>

<h3>The Significance</h3>

<p><strong>Vidai turban service Mumbai</strong> significance:</p>

<ul>
<li>Bride's farewell to family</li>
<li>Emotional transition moment</li>
<li>Blessings from elders</li>
<li>New journey beginning</li>
</ul>

<h3>Who Participates</h3>

<p><strong>Vidai turban service Mumbai</strong> participants:</p>

<ul>
<li>Bride's father</li>
<li>Bride's brothers</li>
<li>Uncles (chacha, mama)</li>
<li>Close male relatives</li>
</ul>

<h2>Vidai Turban Styling</h2>

<p><strong>Vidai turban service Mumbai</strong> styling:</p>

<ul>
<li>Dignified elegant look</li>
<li>Traditional respect</li>
<li>Coordinated colors</li>
<li>Photography-ready</li>
</ul>

<h2>Color Choices for Vidai</h2>

<p><strong>Vidai turban service Mumbai</strong> colors:</p>

<ul>
<li>Cream – graceful elegance</li>
<li>Off-white – dignified</li>
<li>Soft pink – subtle beauty</li>
<li>Coordinated with bride's outfit</li>
</ul>

<h2>Timing Considerations</h2>

<p><strong>Vidai turban service Mumbai</strong> timing:</p>

<ul>
<li>Usually post-wedding ceremony</li>
<li>May need fresh turbans</li>
<li>Coordinate with event schedule</li>
<li>Allow time for preparation</li>
</ul>

<h2>Emotional Support</h2>

<p><strong>Vidai turban service Mumbai</strong> approach:</p>

<ul>
<li>Understanding the emotion</li>
<li>Gentle efficient service</li>
<li>Respectful presence</li>
<li>Supportive attitude</li>
</ul>

<h2>Contact for Vidai Turban Service Mumbai</h2>

<p>Book <strong>vidai turban service Mumbai</strong> with Safawala Mumbai:</p>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Showroom:</strong> Near Gateway of India, Colaba</p>

<p>Safawala Mumbai – <strong>Vidai turban service Mumbai</strong> for dignified farewells.</p>
    `,
    faqs: [
      {
        question: "What is vidai ceremony?",
        answer: "Vidai turban service Mumbai serves the bride's farewell ceremony from her parental home.",
      },
      {
        question: "Who wears turban at vidai?",
        answer: "Vidai turban service Mumbai dresses the bride's father, brothers, and male relatives.",
      },
      {
        question: "What colors for vidai?",
        answer: "Vidai turban service Mumbai recommends cream, off-white, or soft elegant colors.",
      },
      {
        question: "Is this separate from wedding turban?",
        answer: "Vidai turban service Mumbai can provide fresh turbans for the ceremony if needed.",
      },
      {
        question: "Do you understand the emotion involved?",
        answer: "Yes, vidai turban service Mumbai approaches this ceremony with sensitivity and respect.",
      },
      {
        question: "Can you coordinate with photographer?",
        answer: "Yes, vidai turban service Mumbai ensures everyone is ready for this important moment.",
      },
    ],
  }

  return <ServicePageTemplate {...pageData} />
}
