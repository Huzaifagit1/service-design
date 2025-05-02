import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import admin from './lib/firebase/admin' // Cannot use Admin SDK in middleware

// Industry IDs we support
const VALID_INDUSTRIES = ['beauty', 'cleaning', 'electrical', 'plumbing']

// Generic template IDs
const GENERIC_TEMPLATES = ['modern-business', 'service-professional', 'contact-focused']

// Pattern for admin routes requiring auth check
const adminProtectedPathPattern = /^\/admin(?!\/(login|unauthorized))(?:\/.*)?$/
// Pattern for customer routes requiring auth check
const customerProtectedPathPattern = /^\/customer(?:\/.*)?$/

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('firebase-session')?.value
  const requestUrl = request.nextUrl.clone()

  const isProtectedAdminRoute = adminProtectedPathPattern.test(request.nextUrl.pathname)
  const isProtectedCustomerRoute = customerProtectedPathPattern.test(request.nextUrl.pathname)

  // Handle Admin Routes
  if (isProtectedAdminRoute) {
    if (!sessionCookie) {
      // No session, redirect to admin login, preserving original path for redirect
      requestUrl.pathname = '/admin/login'
      requestUrl.searchParams.set('redirectedFrom', request.nextUrl.pathname)
      return NextResponse.redirect(requestUrl)
    }

    try {
      // Call API route to verify session and check admin role
      const verifyUrl = new URL('/api/auth/check-admin', request.url)
      const response = await fetch(verifyUrl, {
        headers: {
          'Cookie': `firebase-session=${sessionCookie}`
        }
      })

      if (!response.ok) {
        throw new Error('Verification request failed')
      }

      const { isAdmin } = await response.json()

      if (!isAdmin) {
        // Valid session, but not admin, redirect to unauthorized page
        requestUrl.pathname = '/admin/unauthorized'
        return NextResponse.redirect(requestUrl)
      }

      // User is authenticated and is an admin, proceed
      return NextResponse.next()

    } catch (error) {
      console.error('Middleware admin check error:', error)
      // Error verifying (e.g., invalid cookie, API down), redirect to admin login
      requestUrl.pathname = '/admin/login'
      requestUrl.searchParams.set('redirectedFrom', request.nextUrl.pathname)
      return NextResponse.redirect(requestUrl)
    }
  }

  // Handle Customer Routes (and other potentially protected routes)
  if (isProtectedCustomerRoute) {
    if (!sessionCookie) {
      // No session, redirect to general login
      requestUrl.pathname = '/login'
      requestUrl.searchParams.set('redirect', request.nextUrl.pathname)
      return NextResponse.redirect(requestUrl)
    }

    // Optionally, you could add a fetch to verify the customer session here too,
    // similar to the admin check, if strict verification on edge is needed.
    // For now, just checking cookie presence for customer routes.
  }

  // Allow request to proceed for public routes or already handled protected routes
  return NextResponse.next()
}

// Apply middleware to specific routes only
export const config = {
  matcher: [
    // Match all routes except static files, images, etc.
    '/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*\)',
    // Explicitly include /admin and /customer paths for clarity
    '/admin/:path*',
    '/customer/:path*'
  ]
}

