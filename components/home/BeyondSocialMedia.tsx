'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from "../ui/container" // Assuming relative path works
import { Search, AlertTriangle, ShieldCheck } from "lucide-react"

// Example UK Cities and Services
const searchQueries = [
  "Plumber in Manchester",
  "Electrician in Birmingham",
  "Cleaner in Leeds",
  "Landscaper in Bristol",
  "Hairdresser in London",
  "Mechanic in Liverpool",
  "Decorator in Sheffield"
]

export function BeyondSocialMedia() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % searchQueries.length)
    }, 3500) // Cycle a bit faster

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex])

  return (
    <section className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10"></div>
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Probing Questions & Explanation */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Is Your Social Media <span className="text-yellow-400">Enough?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Running your business on social media is a great start, but does it cover all your bases?
            </p>
            <ul className="space-y-4 text-left mb-8 max-w-md mx-auto lg:mx-0">
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">What if potential customers <span className="font-medium text-white">don't use</span> Facebook or Instagram?</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">What happens if your account gets <span className="font-medium text-white">hacked or blocked?</span></span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Where do you send people for <span className="font-medium text-white">reliable info</span> or easy booking?</span>
              </li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed">
              A professional website is your <span className="font-medium text-white">owned, reliable online hub</span>. It builds trust, makes you easily searchable, and works for you 24/7.
            </p>
          </div>

          {/* Right Side - Google Search Simulation */}
          <div className="relative h-80 lg:h-96 bg-black rounded-xl shadow-2xl border border-gray-800 p-6 flex flex-col justify-center items-center">
            <div className="absolute top-0 left-0 w-full h-8 bg-gray-800 rounded-t-xl flex items-center px-4">
               {/* Browser dots */}
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
            </div>
            
            <Search className="h-12 w-12 text-blue-400 mb-6" />
            <p className="text-gray-400 text-lg mb-4">How people find services:</p>
            <div className="text-center h-10 w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={searchQueries[currentIndex]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-3xl font-semibold text-white whitespace-nowrap"
                >
                  {searchQueries[currentIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
            <ShieldCheck className="h-10 w-10 text-green-500 mt-8 absolute bottom-6 right-6 opacity-50" />
          </div>
        </div>
      </Container>
    </section>
  )
} 