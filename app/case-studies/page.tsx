import { Container } from "@/components/ui/container";
import { caseStudies, CaseStudy } from "@/config/case-studies"; // Import shared data and type
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Reusable Card Component (optional, but good practice)
function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-col bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <div className="relative h-48 w-full">
        <Image 
          src={study.imageSrc} 
          alt={`${study.title} website screenshot`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes prop
        />
        {/* Optional: Add a subtle gradient overlay matching the study color */}
        <div className={`absolute inset-0 bg-gradient-to-t ${study.color} opacity-20`}></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm font-medium text-primary mb-1 uppercase tracking-wider">{study.category}</span>
        <h3 className="text-xl font-bold mb-2 text-card-foreground">{study.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
          {study.challenge} {/* Display challenge as a snippet */}
        </p>
        <Button asChild variant="outline" size="sm" className="mt-auto self-start">
          <Link href={`/case-studies/${study.id}`}>
            Read Full Study <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function AllCaseStudiesPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped various service businesses enhance their online presence and achieve tangible results with tailored web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        {/* Optional: Add a CTA at the bottom */}
        <div className="text-center mt-16">
           <Button size="lg" asChild>
             <Link href="/start-onboarding/core-package"> {/* Adjust link as needed */}
               Ready to Start Your Project? <ArrowRight className="ml-2 h-5 w-5" />
             </Link>
           </Button>
        </div>
      </Container>
    </div>
  );
} 