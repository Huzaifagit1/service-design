/**
 * Logo Component
 * 
 * Displays the site logo and name with consistent styling.
 * Used in both desktop and mobile navigation.
 */

import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="font-montserrat font-bold text-xl sm:text-2xl text-primary z-10">
      ServicePro Design
    </Link>
  )
} 