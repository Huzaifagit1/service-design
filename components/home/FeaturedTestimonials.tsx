'use client'

import { Container } from "../ui/container"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import jahaz from '../assets/jahaz.svg'
// Testimonial data matching the screenshot
const featuredTestimonials = [
  {
    id: 1,
    name: "Mike Roberts",
    business: "MR Plumbing & Heating",
    quote: "I needed a professional online presence but had no time for the tech side. Their team understood exactly what my electrical business needed, built it quickly, and the support has been fantastic. Highly recommend!",
    imageSrc: jahaz // Update with actual path
  },
  {
    id: 2,
    name: "Mike Roberts",
    business: "MR Plumbing & Heating",
    quote: "I needed a professional online presence but had no time for the tech side. Their team understood exactly what my electrical business needed, built it quickly, and the support has been fantastic. Highly recommend!",
    imageSrc: jahaz // Update with actual path
  },
  {
    id: 3,
    name: "Mike Roberts",
    business: "MR Plumbing & Heating",
    quote: "I needed a professional online presence but had no time for the tech side. Their team understood exactly what my electrical business needed, built it quickly, and the support has been fantastic. Highly recommend!",
    imageSrc: jahaz // Update with actual path
  },
  {
    id: 4,
    name: "Mike Roberts",
    business: "MR Plumbing & Heating",
    quote: "I needed a professional online presence but had no time for the tech side. Their team understood exactly what my electrical business needed, built it quickly, and the support has been fantastic. Highly recommend!",
    imageSrc: jahaz // Update with actual path
  },
  {
    id: 5,
    name: "Mike Roberts",
    business: "MR Plumbing & Heating",
    quote: "I needed a professional online presence but had no time for the tech side. Their team understood exactly what my electrical business needed, built it quickly, and the support has been fantastic. Highly recommend!",
    imageSrc: jahaz // Update with actual path
  },
  {
    id: 6,
    name: "Mike Roberts",
    business: "MR Plumbing & Heating",
    quote: "I needed a professional online presence but had no time for the tech side. Their team understood exactly what my electrical business needed, built it quickly, and the support has been fantastic. Highly recommend!",
    imageSrc: jahaz // Update with actual path
  },
  {
    id: 7,
    name: "Mike Roberts",
    business: "MR Plumbing & Heating",
    quote: "I needed a professional online presence but had no time for the tech side. Their team understood exactly what my electrical business needed, built it quickly, and the support has been fantastic. Highly recommend!",
    imageSrc: jahaz // Update with actual path
  },
  {
    id: 8,
    name: "Mike Roberts",
    business: "MR Plumbing & Heating",
    quote: "I needed a professional online presence but had no time for the tech side. Their team understood exactly what my electrical business needed, built it quickly, and the support has been fantastic. Highly recommend!",
    imageSrc: jahaz // Update with actual path
  }
];

export function FeaturedTestimonials() {
  return (
    <section className="py-16   bg-[#0f1524] relative overflow-hidden   ">
      {/* Grid lines for desktop layout */}
      
      <Container className="relative z-10 w-full max-w-none ">

        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          What Our 
<span className="relative inline-block">
  Clients Say
  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#0388FE] via-[#6E49EE] via-[#AA25E5] to-[#D60FCC] rounded-full"></span>
</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Hear from service professionals who chose a custom approach.
          </p>
        </div>

        {/* Testimonial Grid - Exact match to screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-gray-800/50">
          {/* Top row - 4 testimonials */}
          {featuredTestimonials.slice(0, 4).map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="border-b border-gray-800/50 md:border-r last:md:border-r-0 p-2 md:p-2 w-full relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-4 pb-2 pl-2 pt-1">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <Image 
                    src={testimonial.imageSrc} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.currentTarget.src = "/api/placeholder/48/48";
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.business}</p>
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
          
          {/* Bottom row - 4 testimonials */}
          {featuredTestimonials.slice(4, 8).map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="border-b md:border-b-0 border-gray-800/50 md:border-r last:md:border-r-0 p-2 md:p-2 pt-2 relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <Image 
                    src={testimonial.imageSrc} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.currentTarget.src = "/api/placeholder/48/48";
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.business}</p>
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}