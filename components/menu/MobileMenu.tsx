"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ShoppingCart, UserCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Logo } from "./Logo"
import { MainNav } from "./MainNav"
import { AuthButtons } from "./AuthButtons"
// import { useAuth } from "@/lib/context/auth-context"

interface MobileMenuProps {
  routes: {
    title: string
    href: string
    description?: string
    external?: boolean
    icon?: React.ReactNode
  }[]
  cartCount?: number
}

export function MobileMenu({ routes, cartCount = 0 }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col w-full max-w-sm pr-0">
        <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b">
          <Logo />
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-4">
          <nav className="flex flex-col gap-4 px-4">
            {routes.map((route, i) => (
              <Link
                key={i}
                href={route.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                {route.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t pt-4 px-4 flex flex-col gap-2">
          <AuthButtons />
        </div>
      </SheetContent>
    </Sheet>
  )
} 