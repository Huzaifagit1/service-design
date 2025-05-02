import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { Toaster } from "sonner"
import { NavigationBar } from "@/components/menu/NavigationBar"
import  Header  from "@/components/menu/Header"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import { PostHogProvider } from "@/components/PostHogProvider"

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Service Pro Home",
  description: "Professional website templates for service businesses",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Remove the preconnect and stylesheet links for Google Fonts, as next/font handles optimization */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body className={`min-h-full w-full ${poppins.className} ${inter.className}`}>
        <PostHogProvider>
          <Providers>  
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
              {/* <NavigationBar /> */}
              <Header/>
              <main className="flex-1">
                {children}
              </main>
              <Toaster position="top-right" richColors />
            </ThemeProvider>
          </Providers>
        </PostHogProvider>
      </body>
    </html>
  )
}


import './globals.css'
