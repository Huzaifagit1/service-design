# Comprehensive Next.js SEO Guide for Commercial Projects

## Introduction

This guide provides a comprehensive approach to implementing enterprise-grade SEO in Next.js projects. Following these practices will ensure your commercial websites rank well in search engines and provide an excellent user experience.

Package:

1.	Next.js – SEO:
Basic SEO Package
•	Standard metadata implementation
•	Sitemap and robots.txt generation
•	Google Analytics setup
•	Basic structured data

2.	Business SEO Package
•	Everything in Basic
•	Advanced structured data
•	Performance optimization
•	Local SEO setup
•	Monthly SEO reports

3.	Enterprise SEO Package
•	Everything in Business
•	Multi-language SEO
•	Custom SEO dashboard
•	Integration with CMS
•	Quarterly SEO strategy sessions


## Table of Contents

1. [Core Metadata API Implementation](#1-core-metadata-api-implementation)
2. [Automatic SEO Files Generation](#2-automatic-seo-files-generation)
3. [Structured Data (JSON-LD)](#3-structured-data-json-ld)
4. [Advanced Rendering Strategy](#4-advanced-rendering-strategy)
5. [Performance Optimization](#5-performance-optimization)
6. [Analytics Integration](#6-analytics-integration)
7. [Internationalization (i18n) SEO](#7-internationalization-i18n-seo)
8. [Canonical URL Management](#8-canonical-url-management)
9. [Monitoring Dashboard](#9-monitoring-dashboard)
10. [Mobile SEO Optimization](#10-mobile-seo-optimization)
11. [SEO Testing and Validation](#11-seo-testing-and-validation)
12. [Privacy Regulations Compliance](#12-privacy-regulations-compliance)
13. [Content Strategy for SEO](#13-content-strategy-for-seo)
14. [Rendering Trade-offs for SEO](#14-rendering-trade-offs-for-seo)
15. [Business Models](#15-business-models)

## 1. Core Metadata API Implementation

Next.js App Router provides a powerful Metadata API for SEO. Implement it in your root layout:

```typescript
// app/layout.tsx (Root layout with base metadata)
export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    template: '%s | Company Name',
    default: 'Company Name - Primary Service',
  },
  description: 'Company description optimized for search engines',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    siteName: 'Company Name',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Company Name',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@companytwitter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code',
    yandex: 'verification-code',
    bing: 'verification-code',
  },
}
```

For page-specific metadata:

```typescript
// app/about/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our company history and mission',
  openGraph: {
    title: 'About Our Company',
    description: 'Discover our story and values',
    images: ['/images/about-og.jpg'],
  },
}
```

For dynamic pages, use the `generateMetadata` function:

```typescript
// app/products/[id]/page.tsx
import { Metadata } from 'next'

export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await fetchProduct(params.id)
  
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
    },
  }
}
```

## 2. Automatic SEO Files Generation

### Sitemap Generation

Create a dynamic sitemap that updates automatically:

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic pages (e.g., blog posts, products)
  const posts = await fetchBlogPosts()
  const products = await fetchProducts()

  // Core pages
  const routes = [
    { url: 'https://example.com', lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
    { url: 'https://example.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://example.com/services', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://example.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  // Dynamic pages
  const postUrls = posts.map(post => ({
    url: `https://example.com/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))
  
  const productUrls = products.map(product => ({
    url: `https://example.com/products/${product.slug}`,
    lastModified: new Date(product.updatedAt),
    changeFrequency: 'daily',
    priority: 0.7,
  }))

  return [...routes, ...postUrls, ...productUrls]
}
```

### Robots.txt

Create a robots.txt file to control crawling:

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/'],
    },
    sitemap: 'https://example.com/sitemap.xml',
  }
}
```

## 3. Structured Data (JSON-LD)

Implement JSON-LD structured data for rich results in search engines:

### Organization Schema

```typescript
// components/structured-data/organization.tsx
export default function OrganizationSchema({ 
  name = 'Company Name',
  logo = 'https://example.com/logo.png',
  url = 'https://example.com',
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name,
          logo,
          url,
          sameAs: [
            'https://www.facebook.com/company',
            'https://www.linkedin.com/company/company',
            'https://twitter.com/company',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-123-456-7890',
            contactType: 'customer service',
            availableLanguage: ['English'],
          },
        }),
      }}
    />
  )
}
```

### Product Schema

```typescript
// components/structured-data/product.tsx
export default function ProductSchema({ product }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.description,
          image: product.imageUrl,
          sku: product.sku,
          brand: {
            '@type': 'Brand',
            name: product.brand,
          },
          offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'USD',
            availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
          },
          aggregateRating: product.reviews?.length > 0 ? {
            '@type': 'AggregateRating',
            ratingValue: product.averageRating,
            reviewCount: product.reviews.length,
          } : undefined,
        }),
      }}
    />
  )
}
```

### Blog Post Schema

```typescript
// components/structured-data/blog-post.tsx
export default function BlogPostSchema({ post }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: post.coverImage,
          datePublished: post.publishDate,
          dateModified: post.updateDate,
          author: {
            '@type': 'Person',
            name: post.author.name,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Company Name',
            logo: {
              '@type': 'ImageObject',
              url: 'https://example.com/logo.png',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://example.com/blog/${post.slug}`,
          },
        }),
      }}
    />
  )
}
```

### Using Structured Data in Pages

```typescript
// app/products/[id]/page.tsx
import ProductSchema from '@/components/structured-data/product'

export default async function ProductPage({ params }) {
  const product = await fetchProduct(params.id)
  
  return (
    <>
      <ProductSchema product={product} />
      {/* Page content */}
    </>
  )
}
```

## 4. Advanced Rendering Strategy

Configure proper rendering strategies based on page type:

### Next.js Config

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = { 
  // Other config options
  experimental: {
    // Enable on-demand ISR for dynamic content that changes infrequently
    revalidateOnDemand: true,
  },
}

export default nextConfig
```

### Static Pages

For content that rarely changes:

```typescript
// app/about/page.tsx
export const dynamic = 'force-static'
export const revalidate = false // Never revalidate
```

### Semi-dynamic Pages

For content that changes occasionally:

```typescript
// app/blog/page.tsx
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour
```

### Highly Dynamic Pages

For content that changes frequently:

```typescript
// app/products/[id]/page.tsx
export const dynamic = 'force-dynamic' // Always server-render
```

## 5. Performance Optimization

### Image Optimization

Configure automatic image optimization:

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = { 
  images: {
    domains: ['example.com', 's3.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
}
```

Use the Next.js Image component:

```tsx
import Image from 'next/image'

export default function OptimizedImage() {
  return (
    <Image
      src="/product.jpg"
      alt="Product description"
      width={800}
      height={600}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      priority={true} // For LCP images
    />
  )
}
```

### Dynamic OG Images

Generate dynamic OG images for social media:

```typescript
// app/products/[id]/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }) {
  const product = await fetchProduct(params.id)
  
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          padding: 50,
          alignItems: 'center',
        }}
      >
        <img src={product.imageUrl} width={300} height={300} />
        <div style={{ marginLeft: 40 }}>{product.name}</div>
      </div>
    ),
    size
  )
}
```

### Font Optimization

Optimize font loading:

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
```

## 6. Analytics Integration

### Google Tag Manager Setup

```typescript
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
```

### Custom Event Tracking

```typescript
// lib/analytics.ts
export function trackEvent(eventName, properties = {}) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...properties,
    })
  }
}
```

Using the tracking function:

```typescript
// components/add-to-cart-button.tsx
'use client'

import { trackEvent } from '@/lib/analytics'

export default function AddToCartButton({ product }) {
  const handleClick = () => {
    // Handle cart logic
    
    // Track event
    trackEvent('add_to_cart', {
      currency: 'USD',
      value: product.price,
      items: [{
        item_id: product.id,
        item_name: product.name,
        price: product.price,
      }],
    })
  }
  
  return (
    <button onClick={handleClick}>
      Add to Cart
    </button>
  )
}
```

## 7. Internationalization (i18n) SEO

### Middleware for Language Detection

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// List of supported locales
const locales = ['en', 'fr', 'de', 'es']
const defaultLocale = 'en'

function getLocale(request: NextRequest) {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip public files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(jpg|png|gif|svg|ico)$/)
  ) {
    return NextResponse.next()
  }
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|.*\\..*).*)',
  ],
}
```

### Localized Metadata

```typescript
// app/[lang]/page.tsx
import { Metadata } from 'next'

export async function generateMetadata({ params }): Promise<Metadata> {
  const { lang } = params
  
  const translations = {
    en: {
      title: 'Welcome to Our Website',
      description: 'Find the best products',
    },
    es: {
      title: 'Bienvenido a Nuestro Sitio Web',
      description: 'Encuentra los mejores productos',
    },
    fr: {
      title: 'Bienvenue sur Notre Site Web',
      description: 'Trouvez les meilleurs produits',
    },
    de: {
      title: 'Willkommen auf Unserer Website',
      description: 'Finden Sie die besten Produkte',
    },
  }
  
  return {
    title: translations[lang]?.title || translations.en.title,
    description: translations[lang]?.description || translations.en.description,
    alternates: {
      canonical: `https://example.com/${lang}`,
      languages: {
        en: 'https://example.com/en',
        es: 'https://example.com/es',
        fr: 'https://example.com/fr',
        de: 'https://example.com/de',
      },
    },
  }
}
```

## 8. Canonical URL Management

Create a utility for managing canonical URLs:

```typescript
// lib/get-canonical-url.ts
export function getCanonicalUrl(path: string, locale?: string): string {
  // Remove trailing slash for consistency
  const cleanPath = path.endsWith('/') && path !== '/' 
    ? path.slice(0, -1) 
    : path
    
  // Add locale if provided
  const localePath = locale ? `/${locale}` : ''
    
  return `https://example.com${localePath}${cleanPath}`
}
```

Using the utility in a page:

```typescript
// app/products/[id]/page.tsx
import { Metadata } from 'next'
import { getCanonicalUrl } from '@/lib/get-canonical-url'

export const generateMetadata = ({ params }): Metadata => {
  const canonicalUrl = getCanonicalUrl(`/products/${params.id}`)
  
  return {
    // ...other metadata
    alternates: {
      canonical: canonicalUrl,
    }
  }
}
```

## 9. Monitoring Dashboard

Create an SEO monitoring dashboard for clients:

```tsx
// app/admin/seo-dashboard/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Chart } from 'react-chartjs-2'

export default function SEODashboard() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    // Fetch SEO data from Google Search Console API or your own API
    fetch('/api/seo-data')
      .then(res => res.json())
      .then(setData)
  }, [])
  
  if (!data) return <div>Loading dashboard...</div>
  
  return (
    <div className="dashboard">
      <h1>SEO Performance Dashboard</h1>
      
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Organic Traffic</h3>
          <div className="metric-value">{data.organicTraffic}</div>
          <div className={`trend ${data.organicTrafficTrend > 0 ? 'positive' : 'negative'}`}>
            {data.organicTrafficTrend > 0 ? '↑' : '↓'} {Math.abs(data.organicTrafficTrend)}%
          </div>
        </div>
        
        {/* More metric cards */}
      </div>
      
      <div className="charts">
        <Chart type="line" data={data.keywordsChart} />
        <Chart type="bar" data={data.pagesChart} />
      </div>
      
      <div className="issues-table">
        <h3>SEO Issues</h3>
        <table>
          <thead>
            <tr>
              <th>Issue</th>
              <th>Pages</th>
              <th>Impact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.issues.map(issue => (
              <tr key={issue.id}>
                <td>{issue.title}</td>
                <td>{issue.pages}</td>
                <td>{issue.impact}</td>
                <td><button>Fix</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
```

## 10. Mobile SEO Optimization

Mobile optimization is critical for SEO as Google uses mobile-first indexing:

### Responsive Design Implementation

```tsx
// app/layout.tsx
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' }
  ]
}
```

### Mobile-specific Components

Create adaptive components that serve optimized experiences for mobile:

```tsx
// components/adaptive-header.tsx
'use client'

import { useMediaQuery } from '@/hooks/use-media-query'

export default function AdaptiveHeader() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  return (
    <header>
      {isMobile ? (
        <MobileHeader /> // Simplified, faster loading header for mobile
      ) : (
        <DesktopHeader /> // Full-featured header for desktop
      )}
    </header>
  )
}
```

### Touch-friendly UI Elements

Ensure interactive elements are appropriately sized for mobile:

```css
/* app/globals.css */
@media (max-width: 768px) {
  .interactive-element {
    min-height: 44px; /* Apple's recommended minimum touch target size */
    min-width: 44px;
    margin: 8px 0; /* Prevent crowding of touch targets */
  }
}
```

### Accelerated Mobile Pages (AMP) Alternative

For content-focused pages, consider implementing AMP with Next.js:

```jsx
// pages/amp-story.js
export const config = { amp: true };

export default function AMPPage() {
  return (
    <>
      <h1>My AMP Page</h1>
      {/* AMP-specific content */}
    </>
  );
}
```

### Mobile Performance Monitoring

Track Core Web Vitals specifically for mobile users:

```typescript
// lib/analytics.ts
export function trackMobilePerformance() {
  if (typeof window !== 'undefined' && 'web-vitals' in window) {
    import('web-vitals').then(({ getCLS, getFID, getLCP }) => {
      getCLS(metric => {
        // Report CLS value for mobile users
        if (window.innerWidth < 768) {
          trackEvent('mobile_web_vitals', {
            metric: 'CLS',
            value: metric.value,
          });
        }
      });
      
      // Similar implementations for FID and LCP
    });
  }
}
```

## 11. SEO Testing and Validation

### Structured Data Testing

Validate your structured data implementation:

```typescript
// scripts/validate-schema.ts
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

async function validateSchema(schema: any) {
  const response = await fetch('https://validator.schema.org/validate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ schema }),
  });
  
  return response.json();
}

async function main() {
  // Load sample schema for testing
  const schemaPath = path.join(process.cwd(), 'examples/product-schema.json');
  const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
  
  const result = await validateSchema(schema);
  console.log('Validation result:', result);
}

main().catch(console.error);
```

### Lighthouse CI Integration

Set up automated Lighthouse testing for your deployment pipeline:

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Audit URLs using Lighthouse
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://example.com/
            https://example.com/products
          budgetPath: ./budget.json
          uploadArtifacts: true
```

```json
// budget.json
[
  {
    "path": "/*",
    "timings": [
      {
        "metric": "interactive",
        "budget": 3000
      },
      {
        "metric": "first-contentful-paint",
        "budget": 1000
      }
    ],
    "resourceSizes": [
      {
        "resourceType": "script",
        "budget": 120
      },
      {
        "resourceType": "total",
        "budget": 300
      }
    ],
    "resourceCounts": [
      {
        "resourceType": "third-party",
        "budget": 10
      }
    ]
  }
]
```

### Meta Tag Testing

Create a utility function to verify meta tags:

```typescript
// lib/test-meta-tags.ts
export function testMetaTags(url: string): Promise<{ title: string, description: string, ogTags: Record<string, string> }> {
  return fetch(url)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      const title = doc.querySelector('title')?.textContent || '';
      const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      
      const ogTags: Record<string, string> = {};
      doc.querySelectorAll('meta[property^="og:"]').forEach(tag => {
        const property = tag.getAttribute('property');
        const content = tag.getAttribute('content');
        if (property && content) {
          ogTags[property] = content;
        }
      });
      
      return { title, description, ogTags };
    });
}
```

### Google Search Console API Integration

Monitor real-world search performance:

```typescript
// lib/search-console.ts
import { google } from 'googleapis';

export async function getSearchPerformance(startDate: string, endDate: string) {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/webmasters'],
  });
  
  const searchconsole = google.searchconsole({ version: 'v1', auth });
  
  const result = await searchconsole.searchanalytics.query({
    siteUrl: 'https://example.com',
    requestBody: {
      startDate,
      endDate,
      dimensions: ['query', 'page'],
      rowLimit: 100,
    },
  });
  
  return result.data;
}
```

### Automated Accessibility Testing

SEO and accessibility are closely linked; use automated tools to test both:

```typescript
// scripts/test-accessibility.ts
import { axe } from 'axe-core';

export async function testAccessibility(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  
  const results = await page.evaluate(() => {
    return axe.run(document);
  });
  
  await browser.close();
  return results;
}
```

## 12. Privacy Regulations Compliance

Implementing SEO while respecting privacy regulations like GDPR and CCPA:

### Privacy-conscious Analytics

Create a privacy-first analytics implementation:

```typescript
// components/analytics-consent.tsx
'use client'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<'granted'|'denied'|'pending'>('pending')
  
  useEffect(() => {
    const savedConsent = Cookies.get('analytics-consent')
    if (savedConsent) {
      setConsent(savedConsent as 'granted'|'denied')
    }
  }, [])
  
  const handleConsent = (value: 'granted'|'denied') => {
    setConsent(value)
    Cookies.set('analytics-consent', value, { expires: 365 })
    
    // Initialize or remove analytics based on consent
    if (value === 'granted') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        'event': 'consent_granted',
        'consentSettings': {
          'analytics_storage': 'granted',
          'ad_storage': 'denied', // Default to restricting ad cookies
          'functionality_storage': 'granted',
          'personalization_storage': 'denied',
        }
      })
    }
  }
  
  if (consent !== 'pending') return null
  
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background z-50 border-t">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to analyze our traffic and improve your experience.
        </p>
        <div className="flex gap-2">
          <button 
            onClick={() => handleConsent('granted')}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            Accept
          </button>
          <button 
            onClick={() => handleConsent('denied')}
            className="px-4 py-2 border border-gray-300 rounded"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
```

### GDPR-compliant Cookie Banner

Create a more detailed cookie consent solution:

```typescript
// app/layout.tsx
import CookieConsentManager from '@/components/cookie-consent-manager'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieConsentManager />
      </body>
    </html>
  )
}
```

```typescript
// components/cookie-consent-manager.tsx
'use client'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const CONSENT_COOKIE_NAME = 'cookie-consent'

export default function CookieConsentManager() {
  const [consentChoices, setConsentChoices] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    preferences: false,
  })
  
  const [showBanner, setShowBanner] = useState(false)
  const [showManager, setShowManager] = useState(false)
  
  // Load saved preferences on mount
  useEffect(() => {
    const savedConsent = Cookies.get(CONSENT_COOKIE_NAME)
    
    if (savedConsent) {
      setConsentChoices(JSON.parse(savedConsent))
    } else {
      setShowBanner(true)
    }
  }, [])
  
  // Apply consent to Google Tag Manager
  useEffect(() => {
    if (window.dataLayer && consentChoices.analytics) {
      window.dataLayer.push({
        'event': 'consent_update',
        'analytics_storage': consentChoices.analytics ? 'granted' : 'denied',
        'ad_storage': consentChoices.marketing ? 'granted' : 'denied',
        'functionality_storage': consentChoices.preferences ? 'granted' : 'denied',
      })
    }
  }, [consentChoices])
  
  const saveConsent = () => {
    Cookies.set(CONSENT_COOKIE_NAME, JSON.stringify(consentChoices), { expires: 365 })
    setShowBanner(false)
    setShowManager(false)
  }
  
  const acceptAll = () => {
    setConsentChoices({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    })
    
    Cookies.set(CONSENT_COOKIE_NAME, JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }), { expires: 365 })
    
    setShowBanner(false)
  }
  
  const rejectAll = () => {
    setConsentChoices({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    })
    
    Cookies.set(CONSENT_COOKIE_NAME, JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    }), { expires: 365 })
    
    setShowBanner(false)
  }
  
  // Render banner or preference manager
  if (!showBanner && !showManager) {
    return (
      <button 
        onClick={() => setShowManager(true)}
        className="fixed bottom-4 right-4 z-50 p-2 bg-gray-200 rounded-full"
        aria-label="Cookie settings"
      >
        <CookieIcon className="w-5 h-5" />
      </button>
    )
  }
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full mx-4">
        <h2 className="text-xl font-bold mb-4">Privacy Preferences</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="necessary"
              checked={consentChoices.necessary}
              disabled
              className="mt-1"
            />
            <div>
              <label htmlFor="necessary" className="font-medium">Necessary Cookies</label>
              <p className="text-sm text-gray-600">Required for the website to function.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="analytics"
              checked={consentChoices.analytics}
              onChange={e => setConsentChoices({...consentChoices, analytics: e.target.checked})}
              className="mt-1"
            />
            <div>
              <label htmlFor="analytics" className="font-medium">Analytics Cookies</label>
              <p className="text-sm text-gray-600">Help us improve our website by collecting anonymous data.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="marketing"
              checked={consentChoices.marketing}
              onChange={e => setConsentChoices({...consentChoices, marketing: e.target.checked})}
              className="mt-1"
            />
            <div>
              <label htmlFor="marketing" className="font-medium">Marketing Cookies</label>
              <p className="text-sm text-gray-600">Used to deliver personalized advertisements.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="preferences"
              checked={consentChoices.preferences}
              onChange={e => setConsentChoices({...consentChoices, preferences: e.target.checked})}
              className="mt-1"
            />
            <div>
              <label htmlFor="preferences" className="font-medium">Preference Cookies</label>
              <p className="text-sm text-gray-600">Remember your settings and preferences.</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-end">
          {showBanner && (
            <>
              <button 
                onClick={rejectAll}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
              >
                Reject All
              </button>
              <button 
                onClick={acceptAll}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
              >
                Accept All
              </button>
            </>
          )}
          <button 
            onClick={saveConsent}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  )
}

const CookieIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="8" cy="8" r="1"></circle>
    <circle cx="12" cy="16" r="1"></circle>
    <circle cx="16" cy="10" r="1"></circle>
  </svg>
)
```

### Privacy-friendly Data Loading

For dynamic metadata that requires API calls, implement privacy-conscious data fetching:

```typescript
// lib/privacy-api-client.ts
const privacyApiClient = {
  async fetchData<T>(endpoint: string, options?: RequestInit): Promise<T> {
    // Apply rate limiting to avoid excessive API requests
    await this.rateLimit();
    
    // Add privacy headers
    const headers = {
      ...options?.headers,
      'DNT': '1', // Do Not Track
      'Sec-GPC': '1', // Global Privacy Control
    };
    
    // Fetch with privacy considerations
    const response = await fetch(endpoint, {
      ...options,
      headers,
      // Avoid sending cookies to third parties
      credentials: endpoint.includes(window.location.host) ? 'include' : 'omit',
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return response.json();
  },
  
  // Simple rate limiting to avoid API abuse
  lastRequestTime: 0,
  minRequestInterval: 500, // ms
  
  async rateLimit() {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    
    if (timeSinceLastRequest < this.minRequestInterval) {
      await new Promise(resolve => 
        setTimeout(resolve, this.minRequestInterval - timeSinceLastRequest)
      );
    }
    
    this.lastRequestTime = Date.now();
  }
};

export default privacyApiClient;
```

### Privacy-respecting Schema.org Implementation

When implementing structured data, ensure user privacy:

```typescript
// components/structured-data/privacy-respecting-event.tsx
export default function EventSchema({ event }) {
  // Never include personally identifiable information
  const safeEventData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      '@type': 'Place',
      name: event.location.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: event.location.city,
        addressRegion: event.location.region,
        addressCountry: event.location.country,
      }
    },
    // Avoid including attendee data
    // organizer data should only be included if it's an organization, not an individual
    organizer: event.organizer.type === 'Organization' ? {
      '@type': 'Organization',
      name: event.organizer.name,
      url: event.organizer.url
    } : undefined,
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(safeEventData),
      }}
    />
  )
}
```

## 13. Content Strategy for SEO

Technical SEO alone isn't enough - content strategy is crucial for success:

### Content Audit System

Create a system to analyze and improve your existing content:

```typescript
// lib/content-audit.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

interface ContentAuditResult {
  slug: string
  title: string
  description: string
  wordCount: number
  readingTime: string
  headings: { level: number, text: string }[]
  keywordDensity: Record<string, number>
  hasImage: boolean
  hasLinks: boolean
  lastUpdated: Date
  score: number
}

export async function auditContent(contentDir: string): Promise<ContentAuditResult[]> {
  const files = fs.readdirSync(contentDir)
  
  const results = files
    .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(contentDir, file)
      const slug = file.replace(/\.(mdx?|tsx?)$/, '')
      const fileContent = fs.readFileSync(filePath, 'utf8')
      
      let frontmatter = {}
      let content = fileContent
      
      // Parse frontmatter if exists
      if (fileContent.startsWith('---')) {
        const { data, content: mdxContent } = matter(fileContent)
        frontmatter = data
        content = mdxContent
      }
      
      // Extract headings
      const headingRegex = /^(#{1,6})\s+(.+)$/gm
      const headings: { level: number, text: string }[] = []
      let match
      
      while ((match = headingRegex.exec(content)) !== null) {
        headings.push({
          level: match[1].length,
          text: match[2].trim()
        })
      }
      
      // Calculate keyword density (simple)
      const words = content.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter(word => word.length > 3) // Ignore short words
      
      const wordCount = words.length
      const wordFrequency: Record<string, number> = {}
      
      words.forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1
      })
      
      const keywordDensity: Record<string, number> = {}
      
      Object.entries(wordFrequency)
        .filter(([_, count]) => count > 1) // Only words appearing more than once
        .sort(([_, countA], [__, countB]) => countB - countA) // Sort by frequency
        .slice(0, 10) // Top 10 words
        .forEach(([word, count]) => {
          keywordDensity[word] = Number((count / wordCount * 100).toFixed(2))
        })
      
      // Check for images
      const hasImage = /!\[.*?\]\(.*?\)/.test(content) || /<img/.test(content)
      
      // Check for links
      const hasLinks = /\[.*?\]\(.*?\)/.test(content) || /<a\s+href/.test(content)
      
      // Calculate base score
      let score = 0
      
      // Length score (0-20)
      score += Math.min(20, wordCount / 100)
      
      // Heading structure (0-20)
      if (headings.length > 0) {
        const hasH1 = headings.some(h => h.level === 1)
        const hasSubheadings = headings.some(h => h.level > 1)
        score += hasH1 ? 10 : 0
        score += hasSubheadings ? 10 : 0
      }
      
      // Media score (0-20)
      score += hasImage ? 10 : 0
      score += hasLinks ? 10 : 0
      
      // Metadata score (0-40)
      score += frontmatter.title ? 10 : 0
      score += (frontmatter.description && String(frontmatter.description).length > 50) ? 10 : 0
      score += frontmatter.keywords ? 10 : 0
      score += frontmatter.canonical ? 10 : 0
      
      return {
        slug,
        title: frontmatter.title || slug,
        description: frontmatter.description || '',
        wordCount,
        readingTime: readingTime(content).text,
        headings,
        keywordDensity,
        hasImage,
        hasLinks,
        lastUpdated: frontmatter.date ? new Date(frontmatter.date) : fs.statSync(filePath).mtime,
        score: Math.min(100, score)
      }
    })
    
    // Sort by score (descending)
    .sort((a, b) => b.score - a.score)
  
  return results
}
```

### Content Enhancement Components

Create reusable components that enhance content quality and SEO value:

```tsx
// components/content/table-of-contents.tsx
'use client'

import { useEffect, useState } from 'react'
import { slugify } from '@/lib/utils'

interface Heading {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState('')
  
  useEffect(() => {
    // Find all headings h2 and h3
    const elements = Array.from(document.querySelectorAll('h2, h3'))
    
    const headingsData = elements.map(element => {
      // Add IDs to headings if they don't have one
      const id = element.id || slugify(element.textContent || '')
      if (!element.id) element.id = id
      
      return {
        id,
        text: element.textContent || '',
        level: Number(element.tagName[1])
      }
    })
    
    setHeadings(headingsData)
    
    // Set up intersection observer for headings
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }
    
    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -80% 0px'
    })
    
    elements.forEach(element => observer.observe(element))
    
    return () => observer.disconnect()
  }, [])
  
  if (headings.length < 2) return null
  
  return (
    <nav className="toc my-8 p-4 border rounded bg-muted/30">
      <h2 className="text-lg font-medium mb-3">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map(heading => (
          <li 
            key={heading.id}
            className={`
              ${heading.level === 3 ? 'ml-4' : ''}
              ${activeId === heading.id ? 'font-medium text-primary' : 'text-muted-foreground'}
            `}
          >
            <a 
              href={`#${heading.id}`}
              className="hover:underline"
              onClick={e => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                })
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
```

### Content Schema Pattern

Set up markdown/MDX frontmatter with SEO fields:

```tsx
// content/blog/example-post.mdx
---
title: "How to Optimize Your Next.js Website for SEO"
description: "Learn the best practices for optimizing your Next.js website for search engines to increase visibility and traffic."
publishDate: "2023-05-15"
updatedDate: "2023-06-20"
author:
  name: "Jane Smith"
  image: "/authors/jane-smith.jpg"
tags: ["nextjs", "seo", "web development"]
keywords: ["Next.js SEO", "Next.js optimization", "React SEO", "Next.js search engine"]
canonicalUrl: "https://example.com/blog/how-to-optimize-nextjs-website-for-seo"
ogImage: "/images/blog/nextjs-seo-cover.jpg"
---

# How to Optimize Your Next.js Website for SEO

<TableOfContents />

## Why SEO Matters for Next.js Sites

Lorem ipsum dolor sit amet...
```

```tsx
// app/blog/[slug]/page.tsx
import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import TableOfContents from '@/components/content/table-of-contents'
import BlogArticleSchema from '@/components/structured-data/blog-post'

// MDX components
const components = {
  TableOfContents,
  // Other components...
}

interface PostParams {
  slug: string
}

// Get all blog posts
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/blog'))
  
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({
      slug: file.replace(/\.mdx$/, '')
    }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: PostParams }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    keywords: post.frontmatter.keywords,
    authors: [
      {
        name: post.frontmatter.author.name,
        url: `/authors/${post.frontmatter.author.name.toLowerCase().replace(/\s+/g, '-')}`,
      }
    ],
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.publishDate,
      modifiedTime: post.frontmatter.updatedDate,
      authors: [post.frontmatter.author.name],
      images: [
        {
          url: post.frontmatter.ogImage,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        }
      ],
      tags: post.frontmatter.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [post.frontmatter.ogImage],
    },
    alternates: {
      canonical: post.frontmatter.canonicalUrl,
    }
  }
}

// Fetch post content
async function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  
  return {
    frontmatter: data,
    content,
    slug,
  }
}

export default async function BlogPost({ params }: { params: PostParams }) {
  const post = await getPostBySlug(params.slug)
  
  return (
    <article className="container py-8 max-w-3xl mx-auto">
      <BlogArticleSchema post={post.frontmatter} slug={post.slug} />
      
      <header className="mb-8">
        <div className="text-sm text-muted-foreground mb-2">
          Published: {new Date(post.frontmatter.publishDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
          {post.frontmatter.updatedDate && (
            <span> • Updated: {new Date(post.frontmatter.updatedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          )}
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight mb-4">{post.frontmatter.title}</h1>
        
        <p className="text-xl text-muted-foreground">{post.frontmatter.description}</p>
      </header>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  )
}
```

### Content Update Schedule

Implement a content freshness strategy:

```typescript
// lib/content-freshness.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface ContentFreshnessReport {
  slug: string
  title: string
  lastUpdated: Date
  daysSinceUpdate: number
  updatePriority: 'high' | 'medium' | 'low'
}

export async function checkContentFreshness(contentDir: string): Promise<ContentFreshnessReport[]> {
  const files = fs.readdirSync(contentDir)
  const today = new Date()
  
  const reports = files
    .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(contentDir, file)
      const slug = file.replace(/\.(mdx?|tsx?)$/, '')
      const fileContent = fs.readFileSync(filePath, 'utf8')
      
      // Parse frontmatter
      const { data } = matter(fileContent)
      
      // Get last updated date
      const lastUpdated = data.updatedDate || data.publishDate || fs.statSync(filePath).mtime
      
      // Calculate days since last update
      const daysSinceUpdate = Math.floor((today.getTime() - new Date(lastUpdated).getTime()) / (1000 * 60 * 60 * 24))
      
      // Determine update priority based on days since update and content type
      let updatePriority: 'high' | 'medium' | 'low' = 'low'
      
      if (data.contentType === 'evergreen') {
        // Evergreen content needs less frequent updates
        if (daysSinceUpdate > 365) updatePriority = 'medium'
        if (daysSinceUpdate > 730) updatePriority = 'high' // 2 years
      } else if (data.contentType === 'seasonal') {
        // Seasonal content should be updated before each season
        if (daysSinceUpdate > 300) updatePriority = 'high'
      } else if (data.contentType === 'news') {
        // News content becomes outdated quickly
        if (daysSinceUpdate > 30) updatePriority = 'medium'
        if (daysSinceUpdate > 90) updatePriority = 'high'
      } else {
        // Default for regular content
        if (daysSinceUpdate > 180) updatePriority = 'medium' // 6 months
        if (daysSinceUpdate > 365) updatePriority = 'high' // 1 year
      }
      
      return {
        slug,
        title: data.title || slug,
        lastUpdated: new Date(lastUpdated),
        daysSinceUpdate,
        updatePriority
      }
    })
    
    // Sort by update priority first, then by days since update
    .sort((a, b) => {
      const priorityOrder = { high: 0, medium: 1, low: 2 }
      const priorityDiff = priorityOrder[a.updatePriority] - priorityOrder[b.updatePriority]
      
      if (priorityDiff !== 0) return priorityDiff
      return b.daysSinceUpdate - a.daysSinceUpdate
    })
  
  return reports
}
```

## 14. Rendering Trade-offs for SEO

Understand the SEO implications of different rendering strategies:

### Server Components vs. Client Components

```tsx
// app/blog/[slug]/page.tsx - Server Component (Better for SEO)
export default async function BlogPost({ params }) {
  // Data is fetched on the server
  const post = await fetchBlogPost(params.slug)
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
```

```tsx
// components/client-interactive.tsx - Client Component
'use client'

import { useState, useEffect } from 'react'

export default function ClientInteractive() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    // Data is fetched client-side (not ideal for SEO)
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
  }, [])
  
  if (!data) return <div>Loading...</div>
  
  return <div>{data.content}</div>
}
```

### Hybrid Rendering Pattern

Combine server and client rendering for optimal SEO and interactivity:

```tsx
// app/products/[id]/page.tsx
import ProductDetails from '@/components/product-details'
import RelatedProducts from '@/components/related-products'
import ProductSchema from '@/components/structured-data/product'

export async function generateMetadata({ params }) {
  const product = await fetchProduct(params.id)
  
  return {
    title: product.name,
    description: product.description,
    // Other metadata
  }
}

export default async function ProductPage({ params }) {
  // Critical product data fetched on server
  const product = await fetchProduct(params.id)
  
  return (
    <div className="container py-8">
      {/* Structured data for SEO */}
      <ProductSchema product={product} />
      
      {/* Main product content (server rendered) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.images[0].url}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl my-2">${product.price}</p>
          <div className="my-4" dangerouslySetInnerHTML={{ __html: product.description }} />
          
          {/* Interactive elements (client rendered) */}
          <ProductDetails product={product} />
        </div>
      </div>
      
      {/* Related products (client rendered with initial server data) */}
      <RelatedProducts initialProducts={product.related} productId={product.id} />
    </div>
  )
}
```

### Managing API Rate Limits

Handle API rate limits for dynamic metadata generation:

```typescript
// lib/api-rate-limiter.ts
import { Redis } from '@upstash/redis'

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})

interface RateLimiterOptions {
  windowMs: number     // Milliseconds - how long to keep records
  maxRequests: number  // Maximum number of requests per window
  keyPrefix: string    // Prefix for Redis keys
}

export class RateLimiter {
  private options: RateLimiterOptions
  
  constructor(options: Partial<RateLimiterOptions> = {}) {
    this.options = {
      windowMs: options.windowMs || 60000, // 1 minute
      maxRequests: options.maxRequests || 10,
      keyPrefix: options.keyPrefix || 'ratelimit:',
    }
  }
  
  async consume(key: string): Promise<{ success: boolean, remaining: number, resetTime: number }> {
    const now = Date.now()
    const windowStart = now - this.options.windowMs
    const redisKey = `${this.options.keyPrefix}${key}`
    
    // Clean up old requests and add the new one
    const pipeline = redis.pipeline()
    pipeline.zremrangebyscore(redisKey, 0, windowStart)
    pipeline.zadd(redisKey, { score: now, member: now.toString() })
    pipeline.zrange(redisKey, 0, -1)
    pipeline.expire(redisKey, Math.ceil(this.options.windowMs / 1000))
    
    const [, , requests] = await pipeline.exec<[null, null, string[]]>()
    
    const remaining = Math.max(0, this.options.maxRequests - requests.length)
    const resetTime = now + this.options.windowMs
    
    return {
      success: requests.length <= this.options.maxRequests,
      remaining,
      resetTime,
    }
  }
}

// Helper function for Next.js API routes
export async function withRateLimit(
  req: Request,
  handler: () => Promise<Response>,
  options?: Partial<RateLimiterOptions>
): Promise<Response> {
  const limiter = new RateLimiter(options)
  
  // Use IP as the rate limit key
  // In production, you'd want to use a more sophisticated approach
  const ip = req.headers.get('x-forwarded-for') || 'unknown'
  const key = `api:${ip}`
  
  const result = await limiter.consume(key)
  
  if (!result.success) {
    return new Response(
      JSON.stringify({
        error: 'Too many requests',
        resetTime: new Date(result.resetTime).toISOString(),
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': String(options?.maxRequests || 10),
          'X-RateLimit-Remaining': String(result.remaining),
          'X-RateLimit-Reset': String(Math.ceil(result.resetTime / 1000)),
        },
      }
    )
  }
  
  // Add rate limit headers to the response
  const response = await handler()
  const headers = new Headers(response.headers)
  
  headers.set('X-RateLimit-Limit', String(options?.maxRequests || 10))
  headers.set('X-RateLimit-Remaining', String(result.remaining))
  headers.set('X-RateLimit-Reset', String(Math.ceil(result.resetTime / 1000)))
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}
```

### Using ISR for Dynamic Content

Incremental Static Regeneration for dynamic content with SEO:

```typescript
// app/products/[category]/page.tsx
export const dynamic = 'force-static' // Default to static generation
export const revalidate = 3600 // Revalidate every hour

export async function generateStaticParams() {
  // Pre-generate the most important categories at build time
  const topCategories = await fetchTopCategories()
  
  return topCategories.map(category => ({
    category: category.slug,
  }))
}

export default async function CategoryPage({ params }) {
  const { category } = params
  const products = await fetchProductsByCategory(category)
  
  return (
    <div>
      <h1>Products in {category}</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
```

### Next.js Route Handlers with Caching

Create cached API endpoints that support both SEO and dynamic content:

```typescript
// app/api/products/route.ts
import { NextResponse } from 'next/server'
import { withRateLimit } from '@/lib/api-rate-limiter'

export const dynamic = 'force-dynamic' // This route is always dynamic

export async function GET(request: Request) {
  return withRateLimit(
    request,
    async () => {
      const { searchParams } = new URL(request.url)
      const category = searchParams.get('category')
      const page = parseInt(searchParams.get('page') || '1', 10)
      const limit = parseInt(searchParams.get('limit') || '10', 10)
      
      try {
        const products = await fetchProducts({ category, page, limit })
        
        return NextResponse.json(products, {
          headers: {
            // Cache headers for CDN/browser caching
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
          }
        })
      } catch (error) {
        console.error('Error fetching products:', error)
        return NextResponse.json(
          { error: 'Failed to fetch products' },
          { status: 500 }
        )
      }
    },
    {
      maxRequests: 30, // 30 requests per minute
      windowMs: 60000,  // 1 minute
    }
  )
}
```

### Fallback Strategy for SEO

Ensure search engines always get content even when APIs fail:

```tsx
// components/product-fallback.tsx
export default function ProductFallback({ product, error }) {
  if (!product && error) {
    return (
      <div className="product-error-fallback">
        <h1>Product Information</h1>
        <p>We're experiencing technical difficulties loading this product.</p>
        <p>Please check back later or browse our other products.</p>
        
        {/* Always provide navigation options for crawlers */}
        <div className="crawl-friendly-nav">
          <h2>Popular Categories</h2>
          <ul>
            <li><a href="/products/electronics">Electronics</a></li>
            <li><a href="/products/clothing">Clothing</a></li>
            <li><a href="/products/home">Home</a></li>
          </ul>
        </div>
      </div>
    )
  }
  
  // Render simplified product when available
  return (
    <div className="product-fallback">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Simplified product view that doesn't depend on dynamic data */}
    </div>
  )
}
```

## 15. Business Models

When offering SEO services for Next.js websites, consider these tiered packages:

### Basic SEO Package

- Standard metadata implementation
- Sitemap and robots.txt generation
- Google Analytics setup
- Basic structured data
- Core Web Vitals optimization
- Pricing: $X one-time setup + $Y monthly maintenance

### Business SEO Package

- Everything in Basic
- Advanced structured data
- Performance optimization
- Local SEO setup
- Social media integration
- Monthly SEO reports
- Pricing: $X+A one-time setup + $Y+B monthly maintenance

### Enterprise SEO Package

- Everything in Business
- Multi-language SEO
- Custom SEO dashboard
- Integration with CMS
- Quarterly SEO strategy sessions
- Content optimization recommendations
- Competitor analysis
- Pricing: $X+A+C one-time setup + $Y+B+D monthly maintenance

## Conclusion

Implementing these SEO practices in your Next.js projects will significantly improve search engine rankings and user experience. By offering tiered packages, you can provide value to clients of all sizes while establishing yourself as an SEO expert in the Next.js ecosystem.

Remember that SEO is an ongoing process that requires regular monitoring and adjustments based on search engine algorithm changes and market trends. The investment in proper SEO implementation will pay dividends in increased organic traffic and business growth. 