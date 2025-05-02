/**
 * MainNav Component
 * 
 * Main navigation component for desktop display.
 * Provides dropdown menus for different categories and services.
 */

"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Briefcase,
  Home,
  Wrench,
  Scissors,
  Paintbrush,
  Leaf,
  Heart,
  Globe,
  Package,
  Server,
  HelpCircle,
  Phone,
  Info,
  DollarSign,
  Search,
} from "lucide-react"

// Home Services
const homeServices: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "Cleaners",
    href: "/templates/browse?industry=cleaning",
    description: "Professional templates for residential and commercial cleaning services.",
    icon: <Briefcase className="h-5 w-5 text-industry-cleaning" />,
  },
  {
    title: "Home Repair",
    href: "/templates/browse?industry=home-repair",
    description: "For general contractors and home repair services.",
    icon: <Home className="h-5 w-5 text-primary" />,
  },
  {
    title: "Landscaping",
    href: "/templates/browse?industry=landscaping",
    description: "Showcase your landscaping and gardening services.",
    icon: <Leaf className="h-5 w-5 text-industry-landscaping" />,
  },
  {
    title: "Interior Design",
    href: "/templates/browse?industry=interior-design",
    description: "Beautiful templates for interior designers and decorators.",
    icon: <Paintbrush className="h-5 w-5 text-purple-600" />,
  },
]

// Professional Services
const professionalServices: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "Electricians",
    href: "/templates/browse?industry=electrical",
    description: "Highlight your electrical expertise with these professional designs.",
    icon: <Wrench className="h-5 w-5 text-industry-electrical" />,
  },
  {
    title: "Plumbers",
    href: "/templates/browse?industry=plumbing",
    description: "Showcase your plumbing services with these specialized templates.",
    icon: <Wrench className="h-5 w-5 text-primary" />,
  },
  {
    title: "Painters",
    href: "/templates/browse?industry=painters",
    description: "Perfect for painting contractors and decorating services.",
    icon: <Paintbrush className="h-5 w-5 text-industry-trades" />,
  },
]

// Beauty & Wellness
const beautyWellness: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "Hair Stylists",
    href: "/templates/browse?industry=beauty",
    description: "For salons, hairdressers, and barber shops.",
    icon: <Scissors className="h-5 w-5 text-industry-beauty" />,
  },
  {
    title: "Beauty Specialists",
    href: "/templates/browse?industry=beauty",
    description: "Showcase your beauty services with these elegant templates.",
    icon: <Heart className="h-5 w-5 text-industry-beauty" />,
  },
  {
    title: "Spas & Wellness",
    href: "/templates/browse?industry=beauty",
    description: "For spas, massage therapists, and wellness practitioners.",
    icon: <Heart className="h-5 w-5 text-industry-wellness" />,
  },
]

// Support menu items - Updated
const supportOptions: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn more about our company and mission",
    icon: <Info className="h-5 w-5 text-primary" />,
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Get in touch with our support team",
    icon: <Phone className="h-5 w-5 text-primary" />,
  },
  {
    title: "FAQs",
    href: "/faqs",
    description: "Find answers to common questions",
    icon: <HelpCircle className="h-5 w-5 text-primary" />,
  },
  /* // Removed Pricing
  {
    title: "Pricing",
    href: "/pricing",
    description: "See our transparent pricing options",
    icon: <DollarSign className="h-5 w-5 text-primary" />,
  },
  */
  /* // Removed Order Lookup
  {
    title: "Order Lookup",
    href: "/customer/orders/lookup",
    description: "Find and continue your existing orders",
    icon: <Search className="h-5 w-5 text-primary" />,
  },
  */
]

// Case Studies menu items
const caseStudiesNavItems: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "Studio BeardAndBonesAI",
    href: "/case-studies/studio-beardandbonesai",
    description: "Internal AI image generation suite.",
    icon: <Briefcase className="h-5 w-5 text-blue-500" />
  },
  {
    title: "Elite Electric Services",
    href: "/case-studies/elite-electric",
    description: "Next.js landing page & quote builder.",
    icon: <Briefcase className="h-5 w-5 text-yellow-500" />
  },
  {
    title: "The Corner Cafe",
    href: "/case-studies/corner-cafe",
    description: "Multi-page site with contact form.",
    icon: <Briefcase className="h-5 w-5 text-orange-500" />
  },
  {
    title: "HandyHome Repair",
    href: "/case-studies/handy-home",
    description: "Mobile-first redesign with SEO focus.",
    icon: <Briefcase className="h-5 w-5 text-teal-500" />
  },
]

export function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" className={navigationMenuTriggerStyle()}>
            Home
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/packages" className={navigationMenuTriggerStyle()}>
            Packages
          </Link>
        </NavigationMenuItem>

        {/* Case Studies Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Case Studies</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-4">
              <ul className="space-y-2">
                {caseStudiesNavItems.map((study) => (
                  <li key={study.title}>
                    <Link href={study.href}>
                      <div className="flex p-3 hover:bg-primary/10 rounded-lg transition-colors">
                        {study.icon}
                        <div className="ml-3">
                          <h3 className="font-medium text-sm">{study.title}</h3>
                          <p className="text-sm text-muted-foreground">{study.description}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Removed Essential Services/Add-ons Dropdown */}
        {/* 
        <NavigationMenuItem>
          <NavigationMenuTrigger>Essential Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-4">
              <ul className="space-y-2">
                {addonOptions.map((addon) => (...))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem> 
        */}

        {/* Support Dropdown - Content updated via array */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Support</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-4">
              <ul className="space-y-2">
                {supportOptions.map((option) => (
                  <li key={option.title}>
                    <Link href={option.href}>
                      <div className="flex p-3 hover:bg-primary/10 rounded-lg transition-colors">
                        {option.icon}
                        <div className="ml-3">
                          <h3 className="font-medium text-sm">{option.title}</h3>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
} 