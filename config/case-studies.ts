import { Zap, BarChart, CheckCircle, Wrench, Plug, Coffee, Home, Quote, ThumbsUp, Building, Smartphone, FileQuestion, Clock, Sparkles, CalendarCheck, TrendingUp, Leaf, Scissors, Car, Paintbrush } from "lucide-react";

// Define the structure for a case study metric
interface CaseStudyMetric {
  label: string;
  value: string;
  icon: React.ElementType; // Use React.ElementType for icon components
  color: string;
}

// Define the structure for a customer quote
interface CustomerQuote {
  text: string;
  author: string;
}

// Define the main CaseStudy structure
export interface CaseStudy {
  id: string;
  shortTitle: string;
  title: string;
  category: string;
  projectType: string;
  challenge: string;
  solutionFeatures: string[];
  customerQuote?: CustomerQuote; // Make quote optional if not always present
  imageSrc: string;
  metrics: CaseStudyMetric[];
  keyImprovements: string[];
  liveLink?: string; // Optional live link
  color: string; // For gradient styling
}

// Case Study Data
export const caseStudies: CaseStudy[] = [
  {
    id: "elite-electric",
    shortTitle: "Elite Electric",
    title: "Elite Electric Services",
    category: "Electrical Contractor",
    projectType: "Single Landing Page (Entry Package + Quote Builder)",
    challenge: "Website was slow, buggy, and built on WordPress. Plugin issues caused downtime, losing leads. Owner lacked time for maintenance.",
    solutionFeatures: [
      "Ultra-fast Next.js landing page build.",
      "Custom online quote request form.",
      "Clear service descriptions & calls-to-action.",
      "Professional imagery sourcing & integration.",
      "Local SEO optimization focus."
    ],
    customerQuote: {
      text: "Our old site was a headache. Service Pro delivered a fast, professional page that actually brings in leads. The quote form saves us tons of time.",
      author: "John D., Owner"
    },
    imageSrc: "https://serviceprodesign.com/Elite-electrical/Hero%20-%20with%20cta.jpeg",
    metrics: [
      { label: "Page Speed", value: "98/100", icon: Zap, color: "text-blue-400" },
      { label: "Lead Increase", value: "+85%", icon: CheckCircle, color: "text-green-400" },
      { label: "Quote Form Use", value: "+150%", icon: BarChart, color: "text-purple-400" }
    ],
    keyImprovements: [
      "Site load time reduced from 6.2s to 0.8s.",
      "Mobile conversion rate increased by 60%.",
      "Eliminated downtime caused by plugin conflicts.",
      "Freed up owner's time previously spent on site issues."
    ],
    liveLink: "#", // Optional link to live site
    color: "from-yellow-600 to-orange-700"
  },
  {
    id: "corner-cafe", // Changed ID
    shortTitle: "Corner Cafe", // Changed Title
    title: "The Corner Cafe & Bistro", // Changed Title
    category: "Cafe / Restaurant", // Changed Category
    projectType: "Multi-Page Website + Contact Form (Middle Package)",
    challenge: "Business run entirely via social media. DMs were flooded with menu/location questions, taking time away from service. No online presence beyond social.",
    solutionFeatures: [
      "Clean multi-page site with full menu & pricing.",
      "Easy-to-find location map and opening hours.",
      "Simple contact form for inquiries.",
      "Showcased cafe atmosphere with professional photos.",
      "Reduced reliance on social media DMs."
    ],
    customerQuote: {
      text: "We never thought we needed a website, but it's changed everything! Customers find our menu easily, and we spend way less time answering messages.",
      author: "Sarah P., Co-Owner"
    },
    imageSrc: "/images/case-studies/cafe.jpg", // Use appropriate image
    metrics: [
      { label: "Info Requests (DM)", value: "-70%", icon: BarChart, color: "text-purple-400" },
      { label: "Website Visits", value: "+300%", icon: CheckCircle, color: "text-green-400" },
      { label: "Contact Form Use", value: "New Lead Channel", icon: Zap, color: "text-blue-400" }
    ],
    keyImprovements: [
      "Established professional online presence beyond social media.",
      "Provided customers with reliable, easy-to-access information.",
      "Significantly reduced time spent managing DMs.",
      "Opened a new channel for catering and event inquiries."
    ],
    liveLink: "#",
    color: "from-orange-500 to-red-600" // Cafe color
  },
  {
    id: "handy-home", // Changed ID
    shortTitle: "HandyHome Repair", // Changed Title
    title: "HandyHome Repair Services", // Changed Title
    category: "Handyman / Home Repair", // Changed Category
    projectType: "Mobile-First Redesign + SEO (Middle Package)",
    challenge: "Existing website was outdated, unusable on mobile, and invisible on Google searches. Losing business to online competitors.",
    solutionFeatures: [
      "Complete mobile-first redesign for optimal viewing.",
      "Restructured content for clarity and user experience.",
      "Implemented comprehensive on-page SEO.",
      "Added local schema markup for better search visibility.",
      "Simplified content management for owner updates."
    ],
    customerQuote: {
      text: "My old website was useless. Now, I actually get calls from people who found me on Google! The new design looks fantastic on phones too.",
      author: "Mike B., Owner"
    },
    imageSrc: "/images/case-studies/handyman.jpg", // Use appropriate image
    metrics: [
      { label: "Mobile Traffic", value: "+250%", icon: BarChart, color: "text-purple-400" },
      { label: "Google Rank (Local)", value: "Top 3", icon: CheckCircle, color: "text-green-400" },
      { label: "Organic Leads", value: "+120%", icon: Zap, color: "text-blue-400" }
    ],
    keyImprovements: [
      "Vastly improved mobile user experience.",
      "Achieved high visibility in local Google search results.",
      "Generated a consistent flow of qualified leads online.",
      "Owner can now easily update service offerings."
    ],
    liveLink: "#",
    color: "from-teal-500 to-cyan-600" // Handyman color
  }
  // Add future case studies here
]; 