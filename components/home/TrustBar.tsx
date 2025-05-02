"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Logo {
  src: string
  alt: string
  width: number
  darkMode: boolean
  className?: string
}

const LOGOS: Logo[] = [
  { 
    src: "/logo/google-wordmark.svg",
    alt: "Google Workspace",
    width: 120,
    darkMode: true
  },
  { 
    src: "/logo/figma-wordmark.svg",
    alt: "Figma Design Platform",
    width: 140,
    darkMode: true
  },
  { 
    src: "/logo/microsoft-365-wordmark.svg",
    alt: "Microsoft 365",
    width: 180,
    darkMode: true
  },
  { 
    src: "/logo/supabase_wordmark_dark.svg",
    alt: "Supabase",
    width: 120,
    darkMode: true
  },
  { 
    src: "/logo/shopify-wordmark-dark.svg",
    alt: "Shopify E-commerce",
    width: 110,
    darkMode: true
  },
  { 
    src: "/logo/godaddy_dark.svg",
    alt: "GoDaddy Domains",
    width: 100,
    darkMode: true
  },
  { 
    src: "/logo/postgresql-wordmark.svg",
    alt: "PostgreSQL Database",
    width: 200,
    darkMode: true
  },
  { 
    src: "/logo/openai_wordmark_dark.svg",
    alt: "OpenAI",
    width: 110,
    darkMode: true
  },
  { 
    src: "/logo/anthropic_white_wordmark.svg",
    alt: "Anthropic Claude",
    width: 120,
    darkMode: true
  },
]

export function TrustBar() {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-gray-950">
      {/* Background gradients - Adjusted */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/80 to-gray-950 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Fade gradients - Adjusted to use the new background color */}
      <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-gray-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-gray-950 to-transparent z-10" />

      <div className="container relative px-4 mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 text-center mb-8 md:mb-12 max-w-2xl mx-auto"
        >
          Partnering with leading technologies to empower your business
        </motion.p>

        <div className="relative flex justify-center overflow-hidden mx-[-20px] md:mx-0">
          <motion.div 
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 md:gap-16 items-center"
          >
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <motion.div
                key={index}
                className="relative flex items-center justify-center h-12 min-w-[120px] md:min-w-[160px]"
                whileInView={{ 
                  filter: "blur(0px)",
                  opacity: 1,
                }}
                initial={{ 
                  filter: "blur(1px)",
                  opacity: 0.4,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={35}
                  className={`w-auto h-6 md:h-8 object-contain transition-all duration-300 ${logo.className || ''}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 md:mt-16 text-center"
        >
          <p className="text-lg text-gray-300">
            Leverage enterprise-grade tools to build your online presence
          </p>
        </motion.div>
      </div>
    </section>
  )
} 