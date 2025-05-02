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
interface BeardAndBonesAIData {
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
   // Keep image URLs if directly used, otherwise remove
   imageUrlHome: string;
   imageUrlGenerator: string;
   imageUrlEnhance: string;
   imageUrlAnimatedGen: string;
   imageUrlPopup: string;
   imageUrlGallery: string;
   imageUrlPromptDb: string;
}

// --- Hardcoded Data for BeardAndBonesAI ---
const studyData: BeardAndBonesAIData = {
    id: "studio-beardandbonesai",
    title: "Studio BeardAndBonesAI - Internal AI Suite",
    category: "Internal Tool / AI Development",
    projectType: "Custom AI Image Generator & Prompt Management System",
    challenge: "The client's team needed a centralized, internal platform to streamline AI image generation for business content, manage prompts effectively, and maintain brand consistency, moving away from scattered tools and spreadsheets.",
    solutionOverview: "We developed a secure, internal web application featuring a custom AI image generator, AI-powered prompt enhancement, a user-friendly prompt database, an instant image gallery, and robust backend infrastructure using SQL and AWS R2.",
    customerQuote: {
      text: "I was blown away with the results, this website has helped our internal team create content for our business much faster, we no longer use a google sheets for all our prompts, as we can see them on prompt history or the gallery page. The prompt database also us to keep consistency across all our products, scenes.",
      author: "Client Team Lead"
    },
     metrics: [
      { label: "Content Creation Speed", value: "Significantly Faster", icon: Clock, color: "text-blue-400" },
      { label: "Prompt Management", value: "Centralized & Efficient", icon: Database, color: "text-green-400" },
      { label: "Brand Consistency", value: "Improved via Database", icon: Sparkles, color: "text-purple-400" }
    ],
    keyImprovements: [
      "Dramatically accelerated internal content creation workflow.",
      "Eliminated reliance on inefficient Google Sheets for prompt tracking.",
      "Provided a single source of truth for approved prompts and generated assets.",
      "Enhanced consistency across all generated marketing and product visuals.",
      "Streamlined the process of finding and reusing effective prompts.",
      "Secured asset generation within an internal, controlled environment."
    ],
    liveLink: "https://studio.beardandbonesai.com",
    technologyStack: ["Next.js", "React", "SQL Database", "AWS R2", "Node.js API", "Authentication", "Tailwind CSS"],
    projectProcess: "The project involved discovery sessions to understand workflow needs, UI/UX design for the generator and databases, backend development for API, database, and R2 integration, frontend implementation, rigorous testing, and deployment.",
    projectCost: "Approx. £5,000 + £40/month hosting",
    // Specific Image URLs (kept for now)
    imageUrlHome: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6J8RWCUFnATmVRLMBbflrnpDOCZzKtQogNkhae",
    imageUrlGenerator: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6Jy7J1pOxZTeM7mRD3qofpQAEac9FydHj5zSvG",
    imageUrlEnhance: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6JoS8D5tUMDhzeFlatiOk1YCIQHw69udZRjUG4",
    imageUrlAnimatedGen: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6JdPcDrT9IQ7wlI3xuhysYWV8DjkUZqJf9ASKv",
    imageUrlPopup: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6Jr65azm7nL1pxIwSzABelj0ETJo4O2c9sdkhN",
    imageUrlGallery: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6JgqzNcKJ2AvjfcgoSeDuCizFIdyNpmwRJGUME",
    imageUrlPromptDb: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6JthsNDNdTPaOKZgU7quwYNCFDmovXe4fIxSBd",
    sections: [
      {
        title: "The Vision: A Centralized AI Hub",
        content: "The client envisioned a single, powerful internal tool to consolidate their AI content creation efforts, particularly for image generation. They sought a clean, intuitive interface that the entire team could easily adopt. We designed and built the Studio homepage to serve as a central dashboard with clean aesthetics, clear navigation, key feature callouts, and accessibility.",
        imageUrl: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6J8RWCUFnATmVRLMBbflrnpDOCZzKtQogNkhae",
        imageAlt: "Beard and Bones AI Studio Homepage Screenshot"
      },
      {
         title: "Core Functionality: The Image Generator",
         content: "The heart of the Studio is the image generation tool. We designed an interface inspired by familiar platforms but tailored to the client's workflow, including a 'Recent Prompts' history for team visibility and collaboration.",
         imageUrl: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6Jy7J1pOxZTeM7mRD3qofpQAEac9FydHj5zSvG",
         imageAlt: "AI Image Generator Interface with Prompt History"
      },
      {
         title: "AI-Powered Prompt Enhancement",
         content: "To improve output quality, an 'AI Enhance' feature utilizes a fine-tuned model specific to the client's brand. Clicking it processes the initial prompt and suggests a more detailed, optimized version, saving time and improving results.",
         imageUrl: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6JoS8D5tUMDhzeFlatiOk1YCIQHw69udZRjUG4",
         imageAlt: "AI Enhance Prompt Feature Demonstration"
      },
      {
          title: "Generation Process & Feedback",
          content: "During generation (typically ~10 seconds), an animated countdown timer provides visual feedback, preventing confusion or duplicate submissions.",
          imageUrl: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6JdPcDrT9IQ7wlI3xuhysYWV8DjkUZqJf9ASKv",
          imageAlt: "Animated Countdown during AI Image Generation"
      },
      {
          title: "Viewing and Managing Results",
          content: "Completed images appear in a popup for a larger view, including essential 'Download' and 'Save Prompt' actions to ensure successful prompts aren't lost.",
          imageUrl: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6Jr65azm7nL1pxIwSzABelj0ETJo4O2c9sdkhN",
          imageAlt: "Final AI Generated Image Preview Popup with Download/Save Options"
      },
      {
          title: "Centralized Asset Management: The Image Gallery",
          content: [
              "Every generated image is automatically saved to the integrated Image Gallery.",
              "Features include instant archiving, easy browsing/searching, visual history tracking, and retention of associated prompts for replication.",
          ],
          imageUrl: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6JgqzNcKJ2AvjfcgoSeDuCizFIdyNpmwRJGUME",
          imageAlt: "Image Gallery Interface showing generated images and prompts"
      },
      {
         title: "Structured Creativity: The Prompt Database",
         content: "A dedicated Prompt Database combats inconsistent or lost prompts. Key features include categorization/tagging (Products, Scenes, Styles), search/filtering, CRUD operations, and direct 'Copy'/'Use' integration with the Image Generator, ensuring brand alignment and efficiency.",
         imageUrl: "https://8l1wmm0mxn.ufs.sh/f/eiv8xI35Ba6JthsNDNdTPaOKZgU7quwYNCFDmovXe4fIxSBd",
         imageAlt: "Prompt Database interface with categories, tags, and prompts"
      }
    ]
};

// --- Page Component (Simplified) ---
export default function StudioBeardAndBonesAICaseStudyPage() {
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
                    className="object-contain"
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