/**
 * NavigationBar Component
 * 
 * Main navigation component used throughout the site.
 * Directly handles both desktop and mobile navigation experiences:
 * - On desktop: Uses MainNav component for rich dropdown menus
 * - On mobile: Implements a slide-out drawer menu
 * 
 * This component is used in the root layout and is present on all pages.
 */

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MainNav } from "./MainNav"
import { Logo } from "./Logo"

// Templates dropdown removed
// const templatesDropdown = [...]

// Add-ons dropdown items REMOVED
/*
const addonsDropdown = [
  { name: "Browse All Add-ons", href: "/addons/browse" },
  { name: "Email Hosting", href: "/addons/email-hosting" },
  { name: "Domain Registration", href: "/addons/domain" },
]
*/

// Support dropdown items - Updated
const supportDropdown = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
  // { name: "Pricing", href: "/pricing" }, // Removed Pricing
  // Order Lookup was already removed previously
]

// Case Studies dropdown items
const caseStudiesDropdown = [
  { name: "Studio.beardandbonesai.com", href: "/case-studies/studio-beardandbonesai", icon: <Briefcase className="h-4 w-4 mr-2" /> },
  { name: "Elite Electric Services", href: "/case-studies/elite-electric", icon: <Briefcase className="h-4 w-4 mr-2" /> },
  { name: "The Corner Cafe", href: "/case-studies/corner-cafe", icon: <Briefcase className="h-4 w-4 mr-2" /> },
  { name: "HandyHome Repair", href: "/case-studies/handy-home", icon: <Briefcase className="h-4 w-4 mr-2" /> },
]

export function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // const [templatesOpen, setTemplatesOpen] = useState(false) // Removed state
  // const [addonsOpen, setAddonsOpen] = useState(false) // Removed Addons state
  const [supportOpen, setSupportOpen] = useState(false)
  const [caseStudiesOpen, setCaseStudiesOpen] = useState(false) // Added state for case studies
  
  // const { user, loading, userRole, signOut } = useAuth() // Removed useAuth usage

  // const handleSignOut = async () => { ... } // Removed handleSignOut function

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (mobileMenuOpen && !target.closest("header") && !target.closest("[aria-label='Toggle menu']")) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
      // Reset dropdowns when menu closes
      // setTemplatesOpen(false) // Removed
      // setAddonsOpen(false) // Removed
      setSupportOpen(false)
      setCaseStudiesOpen(false) // Reset case studies dropdown
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  return (
    <header className="relative w-full bg-background shadow-none border-b border-border py-4 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="w-full hidden md:flex items-center justify-between">
          <Logo />
          <div className="flex-1 flex justify-center">
            <MainNav />
          </div>
          {/* Removed auth-related buttons and conditional rendering */}
          {/* <div className="flex items-center gap-2">
            {loading ? (...) : user ? (...) : (...) }
          </div> */}
          <div className="flex items-center gap-2">
             {/* Example: Add a permanent 'Contact Us' button if desired */}
             {/* <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
             </Button> */}
          </div>
        </div>

        {/* Mobile Logo and Menu Button */}
        <div className="flex items-center justify-between w-full md:hidden">
          <Logo />
          
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="mobile-menu-button"
              onClick={(e) => {
                e.stopPropagation()
                setMobileMenuOpen(!mobileMenuOpen)
              }}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide in from right */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-full max-w-xs bg-background shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Link
              href="/"
              className="font-bold text-xl text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              ServicePro Design
            </Link>
            <button 
              className="mobile-menu-button" 
              onClick={() => setMobileMenuOpen(false)} 
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="flex flex-col px-4 space-y-2">
              <Link
                href="/"
                className="nav-item py-3 px-2 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Replaced Templates Dropdown with Packages Link */}
              <Link
                href="/packages" // Changed from pricing to packages?
                className="nav-item py-3 px-2 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Packages 
              </Link>

              {/* Case Studies Dropdown - NEW */}
              <div>
                <button
                  className="nav-item flex items-center justify-between w-full py-3 px-2 text-foreground"
                  onClick={() => setCaseStudiesOpen(!caseStudiesOpen)}
                >
                  Case Studies
                  <ChevronDown className={`h-4 w-4 transition-transform ${caseStudiesOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={cn(
                    "pl-4 space-y-1 overflow-hidden transition-all",
                    caseStudiesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  {caseStudiesDropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="menu-item block py-2 px-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {/* Removed icon for mobile to save space */}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Add-ons Dropdown Removed */}
              {/* 
              <div>
                <button ... onClick={() => setAddonsOpen(!addonsOpen)} ...>
                  Add-ons
                  <ChevronDown ... />
                </button>
                <div ... className={cn(..., addonsOpen ? ... : ... )}>
                  {addonsDropdown.map((item) => (...))}
                </div>
              </div>
              */}

              {/* Support Dropdown */}
              <div>
                <button
                  className="nav-item flex items-center justify-between w-full py-3 px-2 text-foreground"
                  onClick={() => setSupportOpen(!supportOpen)}
                >
                  Support
                  <ChevronDown className={`h-4 w-4 transition-transform ${supportOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={cn(
                    "pl-4 space-y-1 overflow-hidden transition-all",
                    supportOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  {supportDropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="menu-item block py-2 px-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          {/* Removed auth-related buttons from mobile menu footer */}
          {/* <div className="p-4 border-t border-border bg-background">
            <div className="grid grid-cols-2 gap-3">
              {loading ? (...) : user ? (...) : (...) }
            </div>
          </div> */}
          <div className="p-4 border-t border-border bg-background">
             {/* Example: Add a permanent 'Contact Us' button if desired */}
             {/* <Button variant="outline" className="w-full" asChild>
                <Link href="/contact">Contact Us</Link>
             </Button> */}
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
} 