'use client'

import { Container } from "../ui/container"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Zap, BarChart, CheckCircle, Wrench, Plug, Coffee, Home, Quote, ThumbsUp, Building, Smartphone, FileQuestion, Clock, Sparkles, CalendarCheck, TrendingUp, Leaf, Scissors, Car, Paintbrush } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { caseStudies } from "@/config/case-studies"; // Import case studies data

// Revised Case Study Data Structure
// const caseStudies = [
//   {
//     id: "elite-electric",
//     shortTitle: "Elite Electric",
//     title: "Elite Electric Services",
//     category: "Electrical Contractor",
//     projectType: "Single Landing Page (Entry Package + Quote Builder)",
//     challenge: "Website was slow, buggy, and built on WordPress. Plugin issues caused downtime, losing leads. Owner lacked time for maintenance.",
//     solutionFeatures: [
//       "Ultra-fast Next.js landing page build.",
//       "Custom online quote request form.",
//       "Clear service descriptions & calls-to-action.",
//       "Professional imagery sourcing & integration.",
//       "Local SEO optimization focus."
//     ],
//     customerQuote: {
//       text: "Our old site was a headache. Service Pro delivered a fast, professional page that actually brings in leads. The quote form saves us tons of time.",
//       author: "John D., Owner"
//     },
//     imageSrc: "/images/case-studies/electrical.jpg",
//     metrics: [
//       { label: "Page Speed", value: "98/100", icon: Zap, color: "text-blue-400" },
//       { label: "Lead Increase", value: "+85%", icon: CheckCircle, color: "text-green-400" },
//       { label: "Quote Form Use", value: "+150%", icon: BarChart, color: "text-purple-400" }
//     ],
//     keyImprovements: [
//       "Site load time reduced from 6.2s to 0.8s.",
//       "Mobile conversion rate increased by 60%.",
//       "Eliminated downtime caused by plugin conflicts.",
//       "Freed up owner's time previously spent on site issues."
//     ],
//     liveLink: "#", // Optional link to live site
//     color: "from-yellow-600 to-orange-700"
//   },
//   {
//     id: "corner-cafe", // Changed ID
//     shortTitle: "Corner Cafe", // Changed Title
//     title: "The Corner Cafe & Bistro", // Changed Title
//     category: "Cafe / Restaurant", // Changed Category
//     projectType: "Multi-Page Website + Contact Form (Middle Package)",
//     challenge: "Business run entirely via social media. DMs were flooded with menu/location questions, taking time away from service. No online presence beyond social.",
//     solutionFeatures: [
//       "Clean multi-page site with full menu & pricing.",
//       "Easy-to-find location map and opening hours.",
//       "Simple contact form for inquiries.",
//       "Showcased cafe atmosphere with professional photos.",
//       "Reduced reliance on social media DMs."
//     ],
//     customerQuote: {
//       text: "We never thought we needed a website, but it's changed everything! Customers find our menu easily, and we spend way less time answering messages.",
//       author: "Sarah P., Co-Owner"
//     },
//     imageSrc: "/images/case-studies/cafe.jpg", // Use appropriate image
//     metrics: [
//       { label: "Info Requests (DM)", value: "-70%", icon: BarChart, color: "text-purple-400" },
//       { label: "Website Visits", value: "+300%", icon: CheckCircle, color: "text-green-400" },
//       { label: "Contact Form Use", value: "New Lead Channel", icon: Zap, color: "text-blue-400" }
//     ],
//     keyImprovements: [
//       "Established professional online presence beyond social media.",
//       "Provided customers with reliable, easy-to-access information.",
//       "Significantly reduced time spent managing DMs.",
//       "Opened a new channel for catering and event inquiries."
//     ],
//     liveLink: "#",
//     color: "from-orange-500 to-red-600" // Cafe color
//   },
//   {
//     id: "handy-home", // Changed ID
//     shortTitle: "HandyHome Repair", // Changed Title
//     title: "HandyHome Repair Services", // Changed Title
//     category: "Handyman / Home Repair", // Changed Category
//     projectType: "Mobile-First Redesign + SEO (Middle Package)",
//     challenge: "Existing website was outdated, unusable on mobile, and invisible on Google searches. Losing business to online competitors.",
//     solutionFeatures: [
//       "Complete mobile-first redesign for optimal viewing.",
//       "Restructured content for clarity and user experience.",
//       "Implemented comprehensive on-page SEO.",
//       "Added local schema markup for better search visibility.",
//       "Simplified content management for owner updates."
//     ],
//     customerQuote: {
//       text: "My old website was useless. Now, I actually get calls from people who found me on Google! The new design looks fantastic on phones too.",
//       author: "Mike B., Owner"
//     },
//     imageSrc: "/images/case-studies/handyman.jpg", // Use appropriate image
//     metrics: [
//       { label: "Mobile Traffic", value: "+250%", icon: BarChart, color: "text-purple-400" },
//       { label: "Google Rank (Local)", value: "Top 3", icon: CheckCircle, color: "text-green-400" },
//       { label: "Organic Leads", value: "+120%", icon: Zap, color: "text-blue-400" }
//     ],
//     keyImprovements: [
//       "Vastly improved mobile user experience.",
//       "Achieved high visibility in local Google search results.",
//       "Generated a consistent flow of qualified leads online.",
//       "Owner can now easily update service offerings."
//     ],
//     liveLink: "#",
//     color: "from-teal-500 to-cyan-600" // Handyman color
//   }
// ]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 to-transparent"></div>
      
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Client <span className="text-blue-400">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped service businesses transform their online presence and achieve measurable results.
          </p>
        </motion.div>
        
        <Tabs defaultValue={caseStudies[0].id} className="w-full">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 h-auto mb-12 bg-transparent p-0">
            {caseStudies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.id}`} passHref legacyBehavior>
                <TabsTrigger 
                  value={study.id} 
                  className="relative h-24 md:h-28 w-full rounded-lg p-4 text-left justify-start items-end data-[state=active]:ring-2 ring-offset-black ring-offset-2 data-[state=active]:ring-blue-500 transition-all duration-300 group bg-gray-900/70 border border-gray-800 hover:bg-gray-800/90 data-[state=active]:bg-gray-800/90 cursor-pointer"
                  asChild
                >
                  <a>
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-t ${study.color} opacity-30 group-hover:opacity-40 group-data-[state=active]:opacity-50 transition-opacity duration-300`}></div>
                    <div className="relative z-10 text-white">
                      <div className="text-sm font-medium uppercase tracking-wider mb-1 opacity-80">{study.category}</div>
                      <h3 className="text-lg md:text-xl font-bold">{study.shortTitle}</h3>
                    </div>
                  </a>
                </TabsTrigger>
              </Link>
            ))}
          </TabsList>

          {caseStudies.map((study) => {
            const currentStudy = study; // Use the study directly from the map
            return (
              <TabsContent key={study.id} value={study.id} className="bg-gray-900/70 rounded-xl overflow-hidden shadow-xl border border-gray-800 mt-0">
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 md:p-12"
                >
                  <div className="mb-8 pb-4 border-b border-gray-700">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{currentStudy.title}</h3>
                    <p className="text-blue-300 font-medium mt-1">Industry: {currentStudy.category} | Project: {currentStudy.projectType}</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-10">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-white">The Challenge</h4>
                        <p className="text-gray-300 leading-relaxed">{currentStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-white">Our Solution</h4>
                        <ul className="space-y-2">
                          {currentStudy.solutionFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {currentStudy.customerQuote && (
                        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 bg-gray-800/40 p-4 rounded-r-lg">
                          <p>"{currentStudy.customerQuote.text}"</p>
                          <cite className="block text-sm text-gray-400 mt-2 not-italic">- {currentStudy.customerQuote.author}</cite>
                        </blockquote>
                      )}
                    </div>
                    <div className="relative h-80 w-full rounded-lg overflow-hidden border border-gray-700 self-center">
                      <Image 
                        src={currentStudy.imageSrc} 
                        alt={`${currentStudy.title} website screenshot`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="mb-10">
                    <h4 className="text-xl font-semibold mb-4 text-center text-white">The Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                      {currentStudy.metrics.map((metric) => {
                        const Icon = metric.icon;
                        return (
                          <div key={metric.label} className="text-center p-4 bg-gray-800/50 rounded-lg shadow-inner border border-gray-700/50">
                            <Icon className={`h-8 w-8 mx-auto mb-2 ${metric.color}`} />
                            <div className={`text-xl md:text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                            <div className="text-xs text-gray-400 uppercase mt-1 tracking-wider">{metric.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-white">Key Improvements</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                      {currentStudy.keyImprovements.map((improvement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <ThumbsUp className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {currentStudy.liveLink && currentStudy.liveLink !== "#" && (
                    <div className="text-center mt-10 pt-6 border-t border-gray-700">
                      <Button variant="outline" asChild>
                        <Link href={currentStudy.liveLink} target="_blank" rel="noopener noreferrer">
                          View Live Site <ExternalLink className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </Container>
    </section>
  )
} 