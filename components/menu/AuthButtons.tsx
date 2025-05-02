/**
 * AuthButtons Component
 * 
 * Provides consistent login and signup buttons.
 * Used in both desktop navigation and mobile menu.
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface AuthButtonsProps {
  className?: string
  mobile?: boolean
  onClick?: () => void
}

export function AuthButtons({ className = "", mobile = false, onClick }: AuthButtonsProps) {
  // Mobile version uses full-width buttons in a grid
  if (mobile) {
    return (
      <div className={`grid grid-cols-2 gap-3 mt-auto ${className}`}>
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10 w-full"
          onClick={onClick}
          asChild
        >
          <Link href="/login">Log In</Link>
        </Button>
        <Button
          className="bg-accent hover:bg-accent/80 text-white w-full"
          onClick={onClick}
          asChild
        >
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    )
  }
  
  // Desktop version uses inline buttons
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10 mr-2">
        <Link href="/login">Log In</Link>
      </Button>
      <Button size="sm" asChild className="bg-accent hover:bg-accent/80 text-white">
        <Link href="/signup">Sign Up</Link>
      </Button>
    </div>
  )
} 