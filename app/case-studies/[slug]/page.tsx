import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, CheckCircle, ThumbsUp, Zap, BarChart, Database, Clock, Sparkles, Lock, Users, Server, LucideIcon, Calculator, TrendingUp } from "lucide-react";
import { Metadata } from 'next';
import { Separator } from "@/components/ui/separator";

// --- Type Definitions ---
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

// New generic section structure
interface CaseStudySection {
  title: string;
  // Allow string for paragraphs or string array for lists
  content: string | string[]; 
  imageUrl?: string;
  imageAlt?: string;
  // Optional: add layout hints if needed, e.g., 'imageLeft', 'imageRight'
}

// Base interface for all detailed case studies
interface BaseCaseStudyData {
   id: string;
   title: string;
   category: string;
   projectType: string;
   challenge: string; // Keep top-level challenge for introduction
   solutionOverview?: string; // Optional: High-level solution summary
   customerQuote?: CustomerQuote;
   metrics: Metric[];
   keyImprovements: string[];
   liveLink?: string;
   technologyStack: string[];
   projectProcess: string;
   projectCost?: string;
   sections: CaseStudySection[]; // Array of content sections
}


// Specific type for the detailed BeardAndBonesAI study
// It extends BaseCaseStudyData and might have specific fields if needed,
// but primarily uses the sections array now.
interface BeardAndBonesAIData extends BaseCaseStudyData {
  id: "studio-beardandbonesai";
  // Retain specific URLs if needed for complex layouts not covered by sections,
  // otherwise rely on sections array. For now, let's keep them for potential future use
  // or if we want very specific image placements not handled by the loop.
  imageUrlHome: string; 
  imageUrlGenerator: string;
  imageUrlEnhance: string;
  imageUrlAnimatedGen: string;
  imageUrlPopup: string;
  imageUrlGallery: string;
  imageUrlPromptDb: string;
}

// Generic type for standard case studies like Elite Electric
interface StandardCaseStudyData extends BaseCaseStudyData {
  // No study-specific fields needed beyond the base for now
  id: string; // e.g., "elite-electric", "corner-cafe", "handy-home"
}


// Placeholder type - keeping it for the moment for slugs not yet detailed
interface PlaceholderData {
  id: string;
  title: string;
  category: string;
  projectType: string;
  imageSrc: string; // Main image for placeholder
  // Add other minimal fields if needed for the placeholder view
}


// Combined type
type CaseStudyData = BeardAndBonesAIData | StandardCaseStudyData | PlaceholderData;

// Define the slugs for static generation - REMOVED the ones with dedicated pages
const caseStudySlugs = ["corner-cafe", "handy-home"];

interface CaseStudyPageProps {
  params: { slug: string };
}

// --- Data Fetching Logic ---

// Placeholder data function (can be simplified if we phase it out)
const placeholderStudyData = (slug: string): PlaceholderData => ({
  id: slug,
  title: `Case Study: ${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
  category: "Placeholder Category",
  projectType: "Placeholder Project Type",
  imageSrc: "/images/case-studies/placeholder-default.jpg",
});


// Function to fetch case study data with explicit return type
const getCaseStudyData = (slug: string): CaseStudyData | null => {
  // --- BeardAndBonesAI Data --- REMOVED
  // if (slug === "studio-beardandbonesai") { ... }

  // --- Elite Electric Data --- REMOVED
  // else if (slug === "elite-electric") { ... }

  // --- Placeholder Logic for other slugs --- ONLY REMAINS
  // Keep the check explicit for clarity, even though it's the only path left
  if (["corner-cafe", "handy-home"].includes(slug)) {
    const placeholderData = placeholderStudyData(slug);
     // Update placeholder details based on slug (minimal info)
     if (slug === "corner-cafe") {
        placeholderData.title = "The Corner Cafe & Bistro - Case Study";
        placeholderData.category = "Cafe / Restaurant";
        placeholderData.projectType = "Multi-Page Website + Contact Form (Middle Package)";
        placeholderData.imageSrc = "/images/case-studies/cafe.jpg";
     }
     if (slug === "handy-home") {
        placeholderData.title = "HandyHome Repair Services - Case Study";
        placeholderData.category = "Handyman / Home Repair";
        placeholderData.projectType = "Mobile-First Redesign + SEO (Middle Package)";
        placeholderData.imageSrc = "/images/case-studies/handyman.jpg";
     }
    return placeholderData; // Return PlaceholderData for now
  }

  return null;
};

// --- Generate Static Paths ---
export async function generateStaticParams() {
  // Map the slugs to the format required by generateStaticParams
  return caseStudySlugs.map((slug) => ({
    slug: slug,
  }));
}

// --- Page Component ---

export default async function CaseStudyPage(props: { params: { slug: string } }) {
  const { params } = props;
  const slug = params.slug;
  const study = getCaseStudyData(slug);

  if (!study) {
    return <Container><div className="py-20 text-center text-white">Case study not found.</div></Container>;
  }

  // --- Render Placeholder Studies ---
  // Check if the data is of PlaceholderData type (has imageSrc, lacks sections)
  if ('imageSrc' in study && !('sections' in study)) {
     return (
         <section className="py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white">
             <Container>
                 <h1 className="text-3xl font-bold text-center mb-8">{study.title}</h1>
                 <p className="text-center text-gray-400">Detailed content coming soon for {study.category}...</p>
                 <div className="relative h-96 w-full max-w-4xl mx-auto mt-8 rounded-lg overflow-hidden border border-gray-700">
                     {/* Use study.imageSrc for placeholder */}
                     <Image src={study.imageSrc} alt={`${study.title} placeholder image`} fill className="object-contain" />
                 </div>
            </Container>
        </section>
     );
  }

  // --- Main Render for Detailed Case Studies (BeardAndBonesAI or StandardCaseStudyData) ---
  // Type guard to ensure study has 'sections' property
  if (!('sections' in study)) {
     // This should ideally not be reached if the placeholder logic is correct, but acts as a fallback.
     return <Container><div className="py-20 text-center text-white">Invalid case study data format.</div></Container>;
  }

  // Now TypeScript knows study has 'sections', 'metrics', etc.
  const detailedStudy = study as BaseCaseStudyData; // Cast to base type for common properties

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white">
      <Container className="max-w-5xl">
        {/* Header Section (Common to all detailed studies) */}
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
                  {/* Adjust object-fit and aspect ratio as needed */}
                  <Image
                    src={section.imageUrl}
                    alt={section.imageAlt || section.title}
                    fill
                    className="object-contain" // Use contain by default, adjust if needed per section?
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

// --- Metadata Function ---
// Updated to handle different study types and potential null
export async function generateMetadata(props: { params: { slug: string } }): Promise<Metadata> {
  const { params } = props;
  const slug = params.slug;
  const study = getCaseStudyData(slug);

  if (!study) {
    return {
       title: "Case Study Not Found",
       description: "The requested case study could not be found."
     };
  }

  // Generate different metadata based on study type
  // Use 'sections' presence to identify detailed studies
  if ('sections' in study) { 
      const detailedStudy = study as BaseCaseStudyData; // Cast for access
      return {
        title: `${detailedStudy.title} - Case Study`,
        // Use challenge or solution overview for description
        description: `Explore the details of the ${detailedStudy.projectType} project: ${detailedStudy.challenge.substring(0, 150)}...`
      };
  } 
  // Handle PlaceholderData specifically if it still exists
  else if ('imageSrc' in study) { 
     const placeholderStudy = study as PlaceholderData;
     return {
        title: `${placeholderStudy.title} - Case Study`,
        description: `Learn about our project for ${placeholderStudy.category}: ${placeholderStudy.projectType}. Detailed content coming soon.`
     };
  } 
  // Fallback if type is somehow unrecognized
  else {
      return {
          title: "Case Study",
          description: "View details about this project."
      }
  }
} 