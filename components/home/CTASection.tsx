/**
 * CTASection Component
 * 
 * Call-to-action section displayed at the bottom of the homepage.
 * Encourages users to take action with prominent buttons and links.
 */

'use client' // Added 'use client' as it uses Link

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-indigo-500 to-blue-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Ready for a Website That Drives Results?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
          Let us handle the tech. Get a professional, high-performing website designed to attract customers and grow your service business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="text-lg font-medium w-full sm:w-auto"
            asChild
          >
            <Link href="/packages">View Package & Pricing</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg font-medium text-white hover:bg-white/10 w-full sm:w-auto border-white"
            asChild
          >
            <Link href="/contact">Ask a Question</Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 