'use client'
import socialframe from '../assets/socialframe.svg'
import { Container } from "../ui/container"
import { motion } from "framer-motion"
import logo from '../assets/logo.svg'
import {
  Check, X, 
  Building,
  Smartphone,
  FileQuestion,
  Clock,
  Sparkles,
  CalendarCheck,
  TrendingUp,
  Wrench,
  Paintbrush,
  Plug,
  Coffee,
  Leaf,
  Scissors,
  Car,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import image2 from '../assets/plumber.svg';
import image1 from '../assets/cleasner.svg';
import image3 from '../assets/bijli.svg';
import image4 from '../assets/cafe.svg';
import image5 from '../assets/landscape.svg';
import image6 from '../assets/salon.svg';
import { MdArrowOutward } from 'react-icons/md'
import { useState, useEffect } from 'react'

const comparisonPoints = [
  {
    feature: "Loading Speed",
    us: { value: "Instant", positive: true },
    others: { value: "Often Slow", positive: false }
  },
  {
    feature: "Look on Phones/Tablets",
    us: { value: "Perfect", positive: true },
    others: { value: "Often Awkward", positive: false }
  },
  {
    feature: "Update Hassle",
    us: { value: "We Handle It", positive: true },
    others: { value: "Constant Updates", positive: false }
  },
  {
    feature: "Security Worries",
    us: { value: "Secure & Reliable", positive: true },
    others: { value: "Vulnerable", positive: false }
  },
  {
    feature: "Unique Look",
    us: { value: "Truly Custom", positive: true },
    others: { value: "Looks Generic", positive: false }
  },
  {
    feature: "Google Ranking Potential",
    us: { value: "Optimized", positive: true },
    others: { value: "Hit or Miss", positive: false }
  }
]

const targetAudiences = [
  { name: "Cleaners", image: image1 },
  { name: "Plumbers", image: image2 },
  { name: "Electricians", image: image3 },
  { name: "Cafes & Restaurants", image: image4 },
  { name: "Landscapers", image: image5 },
  { name: "Salons & Barbers", image: image6 },
];

// Responsive Comparison Table Component
const ResponsiveComparisonTable = () => {
  const [activeColumn, setActiveColumn] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const nextColumn = () => {
    setActiveColumn((activeColumn + 1) % 3);
  };

  return (
    <motion.div 
      className="w-full bg-[#171730] overflow-hidden rounded-xl shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Desktop View */}
      {!isMobile && (
        <>
          {/* Header Row */}
          <div className="grid grid-cols-3 bg-[#19202f] font-bold text-center py-6">
            <div className="text-white text-sm">Feature</div>
            <div className="flex justify-center">
              <div className="">
                <Image src={logo} alt='logo' />
              </div>
            </div>
            <div className="text-gray-400 text-sm">Typical DIY / Template Sites</div>
          </div>
          
          {/* Comparison Rows */}
          {comparisonPoints.map((point, index) => (
            <div 
              key={index} 
              className="grid grid-cols-3 text-center items-center p-2"
            >
              <div className="font-medium text-white text-sm py-4">{point.feature}</div>
              <div className="py-4">
                <div className="flex items-center justify-center">
                  <div className="inline-flex items-center ">
                    <div className="rounded-full bg-green-400 w-4 h-4 mr-2">
                      <Check className="h-4 w-4 text-gray-950" />
                    </div>
                    <span className="font-medium text-sm">{point.us.value}</span>
                  </div>
                </div>
              </div>
              <div className="py-4">
                <div className="flex items-center justify-center">
                  <div className="inline-flex items-center ">
                    <div className="rounded-full bg-red-400 w-4 h-4 mr-2">
                      <X className="h-4 w-4 text-gray-950" />
                    </div>
                    <span className="font-medium text-sm">{point.others.value}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      {/* Mobile View - Simplified as per screenshot */}
      {isMobile && (
        <div className="relative">
          {activeColumn === 0 && (
            <>
              {/* Feature Column Header */}
              <div className="bg-[#19202f] font-bold text-center py-6 px-4 relative">
                <div className="text-white text-xl">Feature</div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="rounded-full bg-rose-500 p-2">
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Feature Column Content */}
              <div className="px-6 py-4">
                {comparisonPoints.map((point, index) => (
                  <div key={index} className="py-4 border-b border-gray-800 last:border-0">
                    <div className="font-medium text-white text-lg">{point.feature}</div>
                  </div>
                ))}
              </div>
            </>
          )}
          
          {activeColumn === 1 && (
            <>
              {/* Our Service Column */}
              <div className="bg-[#19202f] font-bold text-center py-6">
                <div className="text-white text-xl">Our Service</div>
                <div className="flex justify-center mt-2">
                  <Image src={logo} alt='logo' />
                </div>
              </div>
              
              {/* Our Service Content */}
              <div className="px-6 py-4">
                {comparisonPoints.map((point, index) => (
                  <div key={index} className="py-4 border-b border-gray-800 last:border-0 flex items-center justify-between">
                    <div className="font-medium text-white text-lg">{point.feature}</div>
                    <div className="flex items-center">
                      <div className="rounded-full bg-green-400 w-6 h-6 flex items-center justify-center">
                        <Check className="h-4 w-4 text-gray-950" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          
          {activeColumn === 2 && (
            <>
              {/* Competitors Column */}
              <div className="bg-[#19202f] font-bold text-center py-6">
                <div className="text-white text-xl">Typical DIY / Templates</div>
              </div>
              
              {/* Competitors Content */}
              <div className="px-6 py-4">
                {comparisonPoints.map((point, index) => (
                  <div key={index} className="py-4 border-b border-gray-800 last:border-0 flex items-center justify-between">
                    <div className="font-medium text-white text-lg">{point.feature}</div>
                    <div className="flex items-center">
                      <div className="rounded-full bg-red-400 w-6 h-6 flex items-center justify-center">
                        <X className="h-4 w-4 text-gray-950" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          
          {/* Fixed Navigation Arrow */}
          <div className="absolute bottom-4 left-4">
            <button 
              onClick={nextColumn}
              className="text-white"
            >
              <div className="flex items-center text-white">
                <div className="h-12 w-12 mr-2">→</div>
              </div>
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export function AgencyIntro() {
  return (
    <section className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/5"></div>
      
      <div className="">
        <div className="flex flex-col gap-4 w-full items-center">
          
          <div className="bg-[#19202f] text-white py-16 w-[90%] md:px-6 rounded-xl sm:p-4 lf">
            <div className="mx-auto bg-gray-900/40 rounded-xl p-1 md:p-2 shadow-lg rounded-md sm:pl-4">
              {/* Header Section - Two Column Layout */}
              <div className="flex flex-col md:flex-row md:items-start mb-16 pl-2">
                {/* Left Column - Title */}
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 sm:pl-2">
                  <h1 className="text-1xl md:text-3xl font-bold leading-tight sm:text-1xl">
                    Stop Stressing About Your Website,
                    <br />
                    Start Attracting Customers
                  </h1>
                </div>
                
                {/* Right Column - Intro Text */}
                <div className="md:w-1/2">
                  <p className="text-gray-300 text-lg">
                    Is your online presence holding you back? Whether you're relying
                    solely on social media, wrestling with DIY builders, or stuck with an
                    outdated site, we make getting a professional, effective website
                    simple.
                  </p>
                </div>
              </div>

              {/* Main Content - Two Column Layout */}
              <div className="flex flex-col md:flex-row">
                {/* Left Column - Common Struggles */}
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                  <h2 className="text-2xl font-semibold mb-8">Common Struggles</h2>
                  
                  {/* 2x2 Grid for Struggles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                    <div className="flex items-center">
                      <X className="text-red-500 mr-3 flex-shrink-0" size={20} />
                      <span>Wrestling with DIY builders?</span>
                    </div>
                    <div className="flex items-center">
                      <X className="text-red-500 mr-3 flex-shrink-0" size={20} />
                      <span>Lost in social media DMs?</span>
                    </div>
                    <div className="flex items-center">
                      <X className="text-red-500 mr-3 flex-shrink-0" size={20} />
                      <span>Outdated or unprofessional site?</span>
                    </div>
                    <div className="flex items-center">
                      <X className="text-red-500 mr-3 flex-shrink-0" size={20} />
                      <span>No time for tech hassle?</span>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="hidden md:block w-px bg-gray-700 mx-4"></div>

                {/* Right Column - Our Solution */}
                <div className="md:w-1/2 md:pl-8 mb-10">
                  <h2 className="text-2xl font-semibold font-bold mb-8">Our Solution</h2>
                  
                  {/* 2x2 Grid for Solutions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                    <div className="flex items-center">
                      <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span>Stunning Custom Website</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span>Easy Booking & Contact</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span>More Google Visibility</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span>Hassle-Free Setup & Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[90%] mx-auto text-center px-4 mt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
              We  
              <span className="ml-2 mr-2 inline-block relative">
                Specialize 
                <span className="block absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#0388FE] via-[#6E49EE] to-[#D60FCC] rounded-full mt-1 mr-1"></span>
              </span>
              in Websites For
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-10">
              {targetAudiences.map((audience, index) => (
                <div
                  key={audience.name}
                  className="flex flex-col items-center p-4 rounded-lg bg-[#19202f] hover:bg-[#151c29] transition-all duration-300"
                >
                  <span className="font-medium text-gray-200 text-sm text-center">
                    {audience.name}
                  </span>
                  <div className="h-16 mt-4 w-16 mb-4 flex items-center justify-center">
                    <img 
                      src={audience.image.src} 
                      alt={audience.name} 
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button 
              className="back mt-16 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 flex gap-1"
            >
              Get Started <MdArrowOutward size={25} />
            </button>
          </div>
          
          <div className="w-full flex justify-center items-center">
            <div className="flex justify-center items-center min-h-screen p-4 w-[90%]">
              {/* Replace the old comparison table with the responsive one */}
              <ResponsiveComparisonTable />
            </div>
          </div>
          
          <div className="container mx-auto px-4 md:px-1 flex flex-col md:flex-row items-center gap-8 p-4 w-[90%]">
            {/* Left side with images */}
            <div className="w-full md:w-3/4 relative h-80 md:h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src={socialframe} 
                  alt={'Social Frame'}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            
            {/* Right side with text content */}
            <div className="w-full md:w-1/2 space-y-6 bg-[#19202f] p-8 rounded-xl">
              <h2 className="text-2xl font-bold">
                Is Your <span className="inline-block relative">
                  Social Media
                  <span className="block absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#0388FE] via-[#6E49EE] to-[#D60FCC] rounded-full mt-1"></span>
                </span> Enough?
              </h2>
              
              <p className="text-gray-300 text-sm">
                Running your business on social media is a great start, but does it cover all your bases?
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-500 rounded-full p-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white text-sm">
                    What if potential customers don't use Facebook or Instagram?
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-500 rounded-full p-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white text-sm">
                    What happens if your account gets hacked or blocked?
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-500 rounded-full p-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white text-sm">
                    Where do you send people for reliable info or easy Booking?
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 pt-2 text-sm">
                A professional website is your owned, reliable online hub. It builds trust, makes you easily searchable, and works for you 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}