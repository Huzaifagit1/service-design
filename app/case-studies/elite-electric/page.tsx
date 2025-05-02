import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, CheckCircle, ThumbsUp, Zap, BarChart, Database, Clock, Sparkles, Lock, Users, Server, LucideIcon, Calculator, TrendingUp } from "lucide-react";
import { Metadata } from 'next';
import { Separator } from "@/components/ui/separator";

// --- Type Definitions (Copied from original, simplified if needed) ---
interface Metric {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

interface CustomerQuote {
  text: string;
  author: string;
}

interface CaseStudySection {
  title: string;
  content: string | string[];
  imageUrl?: string;
  imageAlt?: string;
}

// Simplified Base interface for this specific page
interface StandardCaseStudyData {
   id: string;
   title: string;
   category: string;
   projectType: string;
   challenge: string;
   solutionOverview?: string;
   customerQuote?: CustomerQuote;
   metrics: Metric[];
   keyImprovements: string[];
   liveLink?: string;
   technologyStack: string[];
   projectProcess: string;
   projectCost?: string;
   sections: CaseStudySection[];
}

// --- Hardcoded Data for Elite Electric ---
const studyData: StandardCaseStudyData = {
    id: "elite-electric",
    title: "Elite Electric Services - Landing Page & Quote Builder",
    category: "Electrical Contractor",
    projectType: "Single Landing Page (Entry Package + Quote Builder)",
    challenge: "Elite Electric Services lacked a professional online presence, relying on word-of-mouth and losing leads to competitors with better visibility. They needed an efficient way for customers to find them, understand their services, and request quotes.",
    solutionOverview: "We designed and developed a mobile-first single landing page showcasing their services, expertise, and service area. The core feature is an interactive online quote builder, allowing potential customers to get preliminary estimates for common electrical tasks, significantly improving lead quality.",
    customerQuote: {
       text: "Our online presence went from zero to hero! The new landing page looks fantastic, and the quote builder brings in serious leads directly. We're getting calls from customers who found us online, which rarely happened before.",
       author: "John D., Owner, Elite Electric"
     },
    metrics: [
       { label: "Lead Increase", value: "+40% (3 Months)", icon: Zap, color: "text-green-400" },
       { label: "Quote Requests via Site", value: "Avg. 15/month", icon: Calculator, color: "text-blue-400" },
       { label: "Local Search Ranking", value: "Top 5 Result", icon: TrendingUp, color: "text-purple-400" }
    ],
    keyImprovements: [
       "Established a professional and trustworthy online presence.",
       "Significantly increased qualified leads through the website.",
       "Streamlined the initial quote process for customers.",
       "Improved visibility in local search results.",
       "Provided customers with an easy way to understand services and initiate contact 24/7.",
       "Reduced wasted time answering basic cost inquiries."
    ],
    liveLink: "https://elite-electrical-service.co.uk/",
    technologyStack: ["Next.js", "React", "Tailwind CSS", "Vercel Hosting", "Quote Builder Logic (Frontend)", "Form Backend (Conceptual)"],
    projectProcess: "The project included a discovery call, content gathering, single-page design mockup, development of the page and quote builder functionality, basic local SEO implementation, and final launch.",
    projectCost: "Approx. £1,250",
    sections: [
      {
        title: "Establishing an Online Presence",
        content: "The primary goal was to create a professional digital storefront. The landing page immediately builds trust with clear branding, professional imagery, and easy access to contact information and the quote request.",
        imageUrl: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6JXro9ZOHQ50RxUOmZPeTarywbCV7tlBXp4YcW",
        imageAlt: "Elite Electric Hero Section"
      },
      {
        title: "Clearly Defined Services",
        content: "We organized Elite Electric's offerings into clear categories (Residential, Commercial, Emergency, EV Chargers, etc.) with indicative pricing and timelines, making it easy for customers to find the information they need.",
        imageUrl: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6Ju8WBdMvTr09LvROgwdbF1AKx6SjZostaXm3i",
        imageAlt: "Elite Electric Services Section"
      },
      {
        title: "Streamlining Leads: The Interactive Quote Builder",
        content: "The standout feature is the custom quote builder. Customers select required services (sockets, fixtures, EV chargers), input quantities, and instantly receive a preliminary estimate. This saves time for both the customer and Elite Electric, qualifying leads more effectively by setting initial budget expectations. The form also captures essential contact details for follow-up.",
        imageUrl: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6Jpn4oqcecLZoHy7uUWhwFgf18q3DaJXEIetBx",
        imageAlt: "Elite Electric Interactive Quote Builder"
      },
      {
         title: "Building Trust and Authority",
         content: "Highlighting key trust factors like being 'Licensed & Insured', 'Experienced Technicians', and offering 'Upfront Pricing' assures potential customers. Mock testimonials further reinforce their reputation.",
         imageUrl: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6JpfGnqecLZoHy7uUWhwFgf18q3DaJXEIetBxK",
         imageAlt: "Elite Electric Why Choose Us Section"
      },
      {
         title: "Local Focus: Service Area & Contact",
         content: "Clearly defining the service area and providing comprehensive contact information, including operating hours and address, makes it easy for local customers to connect.",
         imageUrl: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6JeiiUL0d5Ba6JpwPNiv018DxcuLnTOgs3fMIt",
         imageAlt: "Elite Electric Testimonials, Service Area, and Footer"
       }
    ]
 };

// --- Page Component (Simplified) ---
export default function EliteElectricCaseStudyPage() {
  // Directly use the hardcoded studyData
  const detailedStudy = studyData;

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white">
      <Container className="max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-16 border-b border-gray-700 pb-12">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-medium mb-2">{detailedStudy.category}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">{detailedStudy.title}</h1>
          <p className="text-lg text-gray-400 mb-4">{detailedStudy.projectType}</p>
          {detailedStudy.liveLink && (
             <Button variant="outline" size="sm" asChild className="mt-2 bg-transparent hover:bg-white/10 border-blue-500 text-blue-400 hover:text-blue-300">
              <Link href={detailedStudy.liveLink} target="_blank" rel="noopener noreferrer">
                View Project <ExternalLink className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          )}
        </div>

         {/* Introduction: Challenge & Solution Overview */}
         <div className="mb-16 md:mb-20 space-y-4">
            <h2 className="text-3xl font-semibold text-blue-300 border-l-4 border-blue-500 pl-4">The Challenge</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{detailedStudy.challenge}</p>
            {detailedStudy.solutionOverview && (
                <>
                    <h2 className="text-3xl font-semibold text-blue-300 border-l-4 border-blue-500 pl-4 pt-6">Our Solution</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">{detailedStudy.solutionOverview}</p>
                </>
            )}
         </div>

        {/* Dynamic Sections Rendering */}
        <div className="space-y-16 md:space-y-24">
          {detailedStudy.sections.map((section, index) => (
            <div key={index} className="space-y-8">
              <h2 className="text-3xl font-semibold text-blue-300 border-l-4 border-blue-500 pl-4">{section.title}</h2>
              {typeof section.content === 'string' ? (
                <p className="text-lg text-gray-300 leading-relaxed">{section.content}</p>
              ) : (
                <ul className="list-disc list-outside space-y-2 pl-6 text-gray-300 text-lg">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}

              {section.imageUrl && (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-700 shadow-2xl shadow-blue-900/30 mt-6">
                  <Image
                    src={section.imageUrl}
                    alt={section.imageAlt || section.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1000px"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>
                </div>
              )}
            </div>
          ))}
        </div>

         {/* Separator */}
         <Separator className="my-16 md:my-24 bg-gray-700" />

         {/* Common Sections: Metrics, Improvements, Tech Stack, Cost, Quote */}
         <div className="space-y-16 md:space-y-20">

             {/* Metrics */}
             {detailedStudy.metrics && detailedStudy.metrics.length > 0 && (
                 <div>
                    <h2 className="text-3xl font-semibold text-blue-300 border-l-4 border-blue-500 pl-4 mb-8">Key Metrics & Outcomes</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                         {detailedStudy.metrics.map((metric, index) => (
                             <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex items-center space-x-4 shadow-lg backdrop-blur-sm">
                                 <metric.icon className={`h-8 w-8 flex-shrink-0 ${metric.color}`} />
                                 <div>
                                     <p className="text-sm text-gray-400">{metric.label}</p>
                                     <p className="text-xl font-semibold text-white">{metric.value}</p>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
             )}

             {/* Key Improvements */}
             {detailedStudy.keyImprovements && detailedStudy.keyImprovements.length > 0 && (
                 <div>
                    <h2 className="text-3xl font-semibold text-blue-300 border-l-4 border-blue-500 pl-4 mb-8">Key Improvements</h2>
                    <ul className="space-y-3 list-disc list-outside pl-6">
                        {detailedStudy.keyImprovements.map((improvement, index) => (
                             <li key={index} className="text-lg text-gray-300 flex items-start">
                                <CheckCircle className="h-5 w-5 mr-3 mt-1 text-green-400 flex-shrink-0" />
                                <span>{improvement}</span>
                            </li>
                        ))}
                    </ul>
                 </div>
             )}

             {/* Technology Stack */}
            {detailedStudy.technologyStack && detailedStudy.technologyStack.length > 0 && (
                 <div>
                     <h3 className="text-2xl font-semibold text-white mb-4">Technology Stack</h3>
                     <div className="flex flex-wrap gap-3">
                         {detailedStudy.technologyStack.map((tech, index) => (
                             <span key={index} className="inline-flex items-center rounded-md bg-gray-700/60 px-3 py-1 text-sm font-medium text-gray-300 ring-1 ring-inset ring-gray-600/10">
                                 {tech}
                             </span>
                         ))}
                     </div>
                 </div>
             )}

            {/* Project Process */}
            {detailedStudy.projectProcess && (
                 <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Project Process</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">{detailedStudy.projectProcess}</p>
                 </div>
            )}

            {/* Project Cost */}
            {detailedStudy.projectCost && (
                 <div className="p-6 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-lg shadow-xl border border-purple-700/60 backdrop-blur-sm text-center">
                   <h3 className="text-xl font-semibold mb-2 text-white">Project Investment</h3>
                   <p className="text-purple-300 text-2xl font-bold">{detailedStudy.projectCost}</p>
                 </div>
             )}

           {/* Customer Quote */}
            {detailedStudy.customerQuote && (
              <blockquote className="border-l-4 border-blue-500 pl-8 italic text-gray-200 bg-gray-800/30 p-8 rounded-r-lg shadow-xl backdrop-blur-sm">
                <p className="mb-4 text-xl leading-relaxed">"{detailedStudy.customerQuote.text}"</p>
                <cite className="block text-base text-gray-400 mt-4 not-italic">- {detailedStudy.customerQuote.author}</cite>
              </blockquote>
            )}
        </div>

      </Container>
    </section>
  );
}

// --- Metadata Function (Simplified) ---
export async function generateMetadata(): Promise<Metadata> {
  // Directly use the hardcoded studyData
  const detailedStudy = studyData;

  return {
    title: `${detailedStudy.title} - Case Study`,
    description: `Explore the details of the ${detailedStudy.projectType} project: ${detailedStudy.challenge.substring(0, 150)}...`
  };
} 