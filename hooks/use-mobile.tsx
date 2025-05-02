"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  // Start with a default value (false for mobile)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // This code only runs on the client
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }

      // Initial check
      checkIfMobile()

      // Add event listener
      window.addEventListener("resize", checkIfMobile)

      // Clean up
      return () => window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return isMobile
}

