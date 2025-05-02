'use client'

import { Container } from "../ui/container" // Assuming relative path works
import { motion } from "framer-motion"
import {
  ShoppingCart, 
  ClipboardList, 
  Construction, 
  DraftingCompass, 
  Rocket 
} from "lucide-react"

const processSteps = [
  {
    icon: ShoppingCart,
    title: "1. Choose Package & Checkout",
    description: "Select your base package (landing pages start at £500). Customize with add-ons like booking systems or extra pages (£150 each) and complete the secure checkout.",
    color: "text-blue-400",
    bgColor: "bg-blue-900/30"
  },
  {
    icon: ClipboardList,
    title: "2. Simple Online Onboarding",
    description: "Fill out our straightforward onboarding form with your business details, branding, and content. Upload logos and images easily. Need help with content? We offer writing services!",
    color: "text-purple-400",
    bgColor: "bg-purple-900/30"
  },
  {
    icon: Construction,
    title: "3. We Build Your Custom Site",
    description: "Our expert team gets to work, building your high-performance website using React and Next.js. No templates, just clean code tailored to your needs.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-900/30"
  },
  {
    icon: DraftingCompass,
    title: "4. Preview & Refine",
    description: "You'll receive a private link to preview your new site. We include two rounds of revisions based on your feedback. Further changes are billed at our hourly rate (£50/hr).",
    color: "text-pink-400",
    bgColor: "bg-pink-900/30"
  },
  {
    icon: Rocket,
    title: "5. Launch in Days, Not Months!",
    description: "Once approved, we handle the final setup and launch your professional website, typically within 5-10 business days from onboarding completion.",
    color: "text-green-400",
    bgColor: "bg-green-900/30"
  }
]

export function HybridProcess() {
  return (
    <section className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10"></div>
      
      <Container>
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Your <span className="text-blue-400">Streamlined Path</span> to a Professional Website
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From checkout to launch in just a few simple steps. Get online quickly without sacrificing quality.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Connecting line - hidden on small screens */}
          <div className="absolute left-9 top-0 bottom-0 w-1 bg-gray-800 rounded-full -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={index} 
                className="relative flex items-start gap-6 md:gap-8 mb-12 md:mb-16 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Icon and Number */}
                <div className="flex-shrink-0 relative z-10 flex items-center justify-center w-18 h-18 rounded-full border-4 border-gray-950 shadow-lg" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%)' }}>
                   <div className={`absolute inset-0 rounded-full ${step.bgColor} opacity-50 blur-lg`}></div>
                   <IconComponent className={`w-8 h-8 ${step.color} z-10`} />
                </div>

                {/* Text Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  )
} 