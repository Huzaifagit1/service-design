'use client'

import { Container } from "../ui/container"
import { CheckCircle, Zap, Monitor, ThumbsUp, BarChart2, Search } from "lucide-react"
import service1 from '../assets/service1.svg'
import service2 from '../assets/service2.svg'
import service3 from '../assets/service3.svg'
import service4 from '../assets/service4.svg'
import service5 from '../assets/service5.svg'
import service6 from '../assets/service6.svg'
import Image from "next/image"
export function TechnicalAdvantages() {
  const advantages = [
    {
      icon: service1,
      title: "Loads Instantly",
      description: "Slow websites lose customers. Ours are built for speed, keeping visitors happy and improving your Google ranking."
    },
    {
      icon: service2,
      title: "Looks Perfect on Every Device",
      description: "From large desktops to the smallest phones, your website will look professional and be easy to use."
    },
    {
      icon: service3,
      title: "Easy For Your Customers to Use",
      description: "Intuitive design and clear navigation mean visitors can easily find information, contact you, or book services."
    },
    {
      icon: service4,
      title: "Reliable & Worry-Free Performance",
      description: "Built with modern, stable technology, your site runs smoothly without constant plugin updates or security scares."
    },
    {
      icon: service5,
      title: "Built to Grow With Your Business",
      description: "Our flexible foundation makes it easy to add new features or content as your business expands."
    },
    {
      icon: service6,
      title: "Helps You Get Found on Google",
      description: "We build sites with search engines in mind, helping more local customers find your services online."
    }
  ]

  return (
    <div className="bg-gray-900 py-16">
      <Container>
        <div className="relative">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg" />

          <div className="relative bg-gray-900  rounded-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">
              The Service 
<span className="inline-block relative">
  Pro Advantage
  <span className="block absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#0388FE] via-[#6E49EE] to-[#D60FCC] rounded-full mt-1"></span>
</span>
              </h2>
              <button className="back bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
              </button>
            </div>

            <p className="text-gray-400 mb-10">
              Why choose us? We build websites that deliver real results, simply and reliably.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className={`
                    flex flex-col p-6
                    ${index % 3 !== 2 ? 'md:border-r border-zinc-800 ' : ''}
                    ${index < 3 ? 'border-b border-zinc-800' : ''}
                  `}
                >
                  <div className="mb-4">
                    <Image src={advantage.icon} alt='haha' />
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}