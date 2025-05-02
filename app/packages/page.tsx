'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { 
    Check, CheckCircle, XCircle, Calculator, 
    ClipboardList, FileText, CheckSquare, DraftingCompass, Rocket // Added Icons for How it Works
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Footer } from "@/components/home"
import { motion } from 'framer-motion' // Added for How it Works animation
import { Container } from "@/components/ui/container" // Added for How it Works structure

import Fotter from '../../components/Fotter'

// Define Add-on Data
const addons = [
  { name: "Each additional page", price: "+ £100" },
  { name: "Shopify Store Setup (up to 5 products)", price: "+ £199" },
  { name: "Brand-new logo design", price: "+ £149" },
  { name: "Copywriting (per page)", price: "+ £50" },
  { name: "Image sourcing (stock + editing)", price: "+ £5 per image" },
]

// Define Core Package Features
const coreFeatures = [
  "Custom Single Landing Page (Covers About, Services, Contact & More)",
  "Design Tailored to Your Brand (Colors, Fonts, Imagery)",
  "Fully Mobile & Tablet Responsive",
  "Fast-Loading, SEO-Friendly Codebase",
  // "Contact form setup (Tally or Netlify Forms)", // Removed as per user feedback
  "Light Animations & Effects Included",
  "Deployed Live on Your Domain",
  "Unlimited Design Revisions During Build (Until You're Happy!)"
];

// Define What We Build / Don't Build Data
const buildScope = [
  { feature: "Clean, scrollable landing pages", included: true },
  { feature: "Multi-page brochure sites", included: true },
  { feature: "Shopify stores (theme setup + products)", included: true },
  { feature: "High-converting layouts", included: true },
  { feature: "Responsive design", included: true },
  { feature: "SEO-structured HTML", included: true },
  { feature: "Fast loading, no-bloat websites", included: true },
  { feature: "Custom forms (Netlify, Tally, Typeform)", included: true },
  { feature: "Booking systems", included: false },
  { feature: "Login systems / User Accounts", included: false },
  { feature: "Databases or CMS integration", included: false },
  { feature: "Payment integrations (outside Shopify/Stripe invoice)", included: false },
  { feature: "WordPress / Bloated theme builders", included: false },
];

// Constants for pricing
const BASE_PACKAGE_PRICE = 500;
const EXTRA_PAGE_PRICE = 100;
const COPYWRITING_PER_PAGE_PRICE = 50;
const IMAGE_SOURCING_PRICE = 5; // Per image
const DOMAIN_HELP_ONEOFF = 10;
const HOSTING_MAINTENANCE_MONTHLY = 20;
const EMAIL_HOSTING_PER_USER_MONTHLY = 8;

// Updated How It Works Steps
const processSteps = [
  {
    icon: ClipboardList,
    title: "1. You fill out our project form.",
    description: "Click 'Start My Website' and provide details about your business and vision using our simple form.",
    color: "text-blue-400",
    bgColor: "bg-blue-900/30"
  },
  {
    icon: FileText, // Changed Icon
    title: "2. We quote or send invoice.",
    description: "We review your needs and send a clear quote or a Stripe invoice (usually within 1 business day).",
    color: "text-purple-400",
    bgColor: "bg-purple-900/30"
  },
  {
    icon: CheckSquare, // Changed Icon
    title: "3. You approve, we begin.",
    description: "Once you approve and pay the 50% deposit via the secure Stripe link, we kick off the design and build process.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-900/30"
  },
  {
    icon: DraftingCompass,
    title: "4. Unlimited revisions during build.",
    description: "We share previews and work with your feedback, refining the design until you're 100% happy with it.",
    color: "text-pink-400",
    bgColor: "bg-pink-900/30"
  },
  {
    icon: Rocket,
    title: "5. Site goes live. You own it.",
    description: "After final approval and the remaining 50% payment, we deploy your website live on your domain.",
    color: "text-green-400",
    bgColor: "bg-green-900/30"
  }
]

export default function SinglePackagePage() {
  // State for the calculator
  const [extraPages, setExtraPages] = useState(0);
  const [copyPages, setCopyPages] = useState(0);
  const [imagesNeeded, setImagesNeeded] = useState(0);
  const [needsDomainHelp, setNeedsDomainHelp] = useState(false);
  const [needsEmailHosting, setNeedsEmailHosting] = useState(false);
  const [emailUsers, setEmailUsers] = useState(1);
  const [includeHostingMaintenance, setIncludeHostingMaintenance] = useState(true);

  const [totalSetupCost, setTotalSetupCost] = useState(BASE_PACKAGE_PRICE);
  const [totalMonthlyCost, setTotalMonthlyCost] = useState(HOSTING_MAINTENANCE_MONTHLY);

  // Calculate costs whenever inputs change
  useEffect(() => {
    let setup = BASE_PACKAGE_PRICE;
    setup += extraPages * EXTRA_PAGE_PRICE;
    setup += copyPages * COPYWRITING_PER_PAGE_PRICE;
    setup += imagesNeeded * IMAGE_SOURCING_PRICE;
    if (needsDomainHelp) {
      setup += DOMAIN_HELP_ONEOFF;
    }
    setTotalSetupCost(setup);

    let monthly = 0;
    if (includeHostingMaintenance) {
      monthly += HOSTING_MAINTENANCE_MONTHLY;
    }
    if (needsEmailHosting) {
      monthly += emailUsers * EMAIL_HOSTING_PER_USER_MONTHLY;
    }
    setTotalMonthlyCost(monthly);

  }, [extraPages, copyPages, imagesNeeded, needsDomainHelp, needsEmailHosting, emailUsers, includeHostingMaintenance]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-950 text-white"> {/* Base background color */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          {/* Page Title Section */}
          <section className="text-center mb-12 md:mb-16">  
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">Transparent Pricing. No Surprises.</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Built from code. No templates. No fluff.
            </p>
            <Button size="lg" asChild>
              <Link href="/start-onboarding/core-package">
                 👉 Start My Website
              </Link>
            </Button>
          </section>

          <Separator className="my-12 md:my-16 bg-gray-700" />

          {/* Flat Fee Section */}
          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-16 md:mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Flat Fee Website Builds</h2>
              <p className="text-5xl md:text-6xl font-bold mb-4">£500 <span className="text-xl md:text-2xl font-normal text-muted-foreground">Base Package</span></p>
              <p className="text-lg text-muted-foreground mb-6">
                One clean, scrollable landing page. Custom designed and built from scratch. No WordPress templates, no bloated plugins.
              </p>
              <h3 className="font-semibold mb-3 text-foreground">Includes:</h3>
              <ul className="space-y-2 mb-6">
                {coreFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-lg">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 md:p-8 rounded-lg border border-gray-700 sticky top-24">
               <h3 className="text-2xl font-semibold mb-4 text-cyan-300">🧠 Why £500? Isn't that a lot for one page?</h3>
               <div className="text-muted-foreground text-lg space-y-4">
                   <p>
                       We build differently. This isn't a template tweaked in an hour. We hand-code your site from scratch, ensuring it's perfectly aligned with <em>your</em> brand – colors, fonts, layout, everything. Want subtle animations? Need specific sections? We tailor it.
                   </p>
                   <p>
                       The result? A lightning-fast, unique website that avoids the bloat, security risks, and constant updates of DIY platforms or generic WordPress themes.
                   </p>
                   <p className="font-semibold text-foreground">
                       Think about it: how much more business could a fast, professional, custom-coded website bring you?
                   </p>
               </div>
            </div>
          </section>

          <Separator className="my-12 md:my-16 bg-gray-700" />

          {/* Tabbed Section for Addons & Ongoing Costs */}
          <section className="mb-16 md:mb-20">
              <Tabs defaultValue="addons" className="w-full max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-800/50 border border-gray-700">
                  <TabsTrigger value="addons" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">🧩 Add-Ons & Extras</TabsTrigger>
                  <TabsTrigger value="ongoing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">🔌 Ongoing Costs</TabsTrigger>
                </TabsList>

                {/* Add-ons Tab Content */}
                <TabsContent value="addons">
                   <div className="border rounded-lg overflow-hidden border-gray-700">
                    <Table className="bg-gray-800/30">
                      <TableHeader>
                        <TableRow className="border-gray-700 hover:bg-gray-700/30">
                          <TableHead className="text-lg text-white">Add-On</TableHead>
                          <TableHead className="text-right text-lg text-white">Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {addons.map((addon) => (
                          <TableRow key={addon.name} className="border-gray-700 hover:bg-gray-700/30">
                            <TableCell className="font-medium text-lg text-muted-foreground">{addon.name}</TableCell>
                            <TableCell className="text-right text-lg text-muted-foreground">{addon.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">Add-on setup fees are added to your initial quote. Monthly costs start after launch.</p>
                </TabsContent>

                {/* Ongoing Costs Tab Content */}
                <TabsContent value="ongoing">
                  <div className="bg-gray-800/30 p-6 md:p-8 rounded-lg border border-gray-700">
                      <h3 className="font-semibold text-xl mb-3 text-cyan-300">Website Hosting & Maintenance:</h3>
                      <p className="text-muted-foreground text-lg mb-2">
                          <strong className="text-foreground text-2xl">£{HOSTING_MAINTENANCE_MONTHLY}/month</strong> (Optional)
                      </p>
                      <p className="text-muted-foreground text-lg mb-4">
                          Includes high-speed hosting, security monitoring, backups, SSL certificate, plus minor edits, content swaps, and basic support.
                      </p>
                       <p className="text-sm text-muted-foreground mb-4">
                          No contract, cancel anytime. You can also host the site yourself if preferred.
                      </p>
                       <p className="text-muted-foreground text-lg">
                          Need bigger changes down the line? Just ask and we'll provide a fair quote.
                      </p>
                  </div>
                   <div className="bg-gray-800/30 p-6 md:p-8 rounded-lg border border-gray-700 mt-4">
                       <h3 className="font-semibold text-xl mb-3 text-cyan-300">Email Hosting (Google Workspace):</h3>
                       <p className="text-muted-foreground text-lg mb-2">
                           <strong className="text-foreground text-2xl">£{EMAIL_HOSTING_PER_USER_MONTHLY}/user/month</strong> (Optional)
                       </p>
                       <p className="text-muted-foreground text-lg mb-4">
                           Professional email addresses @ your domain (e.g., yourname@yourbiz.com). Billed separately by Google after setup.
                       </p>
                   </div>
                </TabsContent>
              </Tabs>
          </section>

          <Separator className="my-12 md:my-16 bg-gray-700" />

          {/* What We Build / Don't Do Table Section */}
          <section className="mb-16 md:mb-20">
             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">What We Build (and What We Don't)</h2>
             <div className="max-w-3xl mx-auto border rounded-lg overflow-hidden border-gray-700">
                 <Table className="bg-gray-800/30">
                   <TableHeader>
                     <TableRow className="border-gray-700 hover:bg-gray-700/30">
                       <TableHead className="w-[10%] text-white">Included?</TableHead>
                       <TableHead className="text-white">Feature / Capability</TableHead>
                     </TableRow>
                   </TableHeader>
                   <TableBody>
                     {buildScope.map((item) => (
                       <TableRow key={item.feature} className="border-gray-700 hover:bg-gray-700/30">
                         <TableCell className="text-center">
                           {item.included ? (
                             <CheckCircle className="h-6 w-6 text-green-500 inline-block" />
                           ) : (
                             <XCircle className="h-6 w-6 text-red-500 inline-block" />
                           )}
                         </TableCell>
                         <TableCell className="text-lg text-muted-foreground">
                           {item.feature}
                           {!item.included && item.feature === 'WordPress / Bloated theme builders' && 
                             <span className="text-sm block italic text-muted-foreground/80"> (We build fast, lean, custom code!)</span> }
                         </TableCell>
                       </TableRow>
                     ))}
                   </TableBody>
                 </Table>
             </div>
             <p className="text-center text-muted-foreground mt-4 text-sm italic max-w-3xl mx-auto">
                 Our focus is on building high-quality, fast, static websites. For features we don't build, we can often recommend excellent third-party services or specialists.
             </p>
          </section>
          
          {/* --- Cost Estimator Section --- */} 
          <Separator className="my-12 md:my-16 bg-gray-700" />

          <section className="mb-16 md:mb-20 max-w-3xl mx-auto">
              <Card className="border-primary border-2 shadow-lg shadow-primary/10 bg-gray-800/30">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white">
                         <Calculator className="h-6 w-6" /> Estimate Your Project Cost
                      </CardTitle>
                      <CardDescription className="text-gray-400">Select options to get a rough cost estimate. The base single page (£{BASE_PACKAGE_PRICE}) is included.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                      {/* Hosting & Maintenance Checkbox */}
                      <div className="flex items-center space-x-3 border-b border-gray-700 pb-4">
                          <Checkbox 
                              id="includeHostingMaintenance"
                              checked={includeHostingMaintenance}
                              onCheckedChange={(checked) => setIncludeHostingMaintenance(checked as boolean)}
                              className="border-gray-500 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                           <Label htmlFor="includeHostingMaintenance" className="text-lg flex-1 cursor-pointer text-gray-200">
                              Include Hosting & Maintenance?
                               <span className="block text-sm font-normal text-muted-foreground">(+£{HOSTING_MAINTENANCE_MONTHLY}/month - high-speed hosting, security, backups, minor edits)</span>
                          </Label>
                      </div>

                      {/* Extra Pages */}
                      <div className="flex items-center justify-between gap-4">
                          <Label htmlFor="extraPages" className="text-lg flex-1 text-gray-200">Additional Pages (+£{EXTRA_PAGE_PRICE} each)</Label>
                          <Input 
                              id="extraPages"
                              name="extraPages"
                              type="number"
                              min="0"
                              value={extraPages}
                              onChange={(e) => setExtraPages(parseInt(e.target.value) || 0)}
                              className="w-20 bg-gray-700/50 border-gray-600 text-white"
                           />
                      </div>

                      {/* Copywriting */}
                      <div className="flex items-center justify-between gap-4">
                          <Label htmlFor="copyPages" className="text-lg flex-1 text-gray-200">Need Site Copy? (+£{COPYWRITING_PER_PAGE_PRICE} per page)</Label>
                          <Input 
                              id="copyPages"
                              name="copyPages"
                              type="number"
                              min="0"
                              value={copyPages}
                              onChange={(e) => setCopyPages(parseInt(e.target.value) || 0)}
                              className="w-20 bg-gray-700/50 border-gray-600 text-white"
                           />
                      </div>

                      {/* Image Sourcing */}
                       <div className="flex items-center justify-between gap-4">
                          <Label htmlFor="imagesNeeded" className="text-lg flex-1 text-gray-200">Image Sourcing & Editing (+£{IMAGE_SOURCING_PRICE} per image)</Label>
                          <Input 
                              id="imagesNeeded"
                              name="imagesNeeded"
                              type="number"
                              min="0"
                              value={imagesNeeded}
                              onChange={(e) => setImagesNeeded(parseInt(e.target.value) || 0)}
                              className="w-20 bg-gray-700/50 border-gray-600 text-white"
                           />
                      </div>

                      {/* Domain Help */}
                      <div className="flex items-center space-x-3">
                          <Checkbox 
                              id="needsDomainHelp"
                              checked={needsDomainHelp}
                              onCheckedChange={(checked) => setNeedsDomainHelp(checked as boolean)}
                              className="border-gray-500 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                           <Label htmlFor="needsDomainHelp" className="text-lg flex-1 cursor-pointer text-gray-200">
                              Need help with domain? (+£{DOMAIN_HELP_ONEOFF} one-off setup)
                              <span className="block text-sm font-normal text-muted-foreground">Covers connecting existing domains or guidance on registering new ones (registration ~£15-20/year extra).</span>
                          </Label>
                      </div>
                      
                       {/* Email Hosting */}
                       <div className="flex items-center space-x-3">
                          <Checkbox 
                              id="needsEmailHosting"
                              checked={needsEmailHosting}
                              onCheckedChange={(checked) => setNeedsEmailHosting(checked as boolean)}
                              className="border-gray-500 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <Label htmlFor="needsEmailHosting" className="text-lg flex-1 cursor-pointer text-gray-200">
                              Need Google Workspace Email Hosting? (+£{EMAIL_HOSTING_PER_USER_MONTHLY}/user/month)
                              <span className="block text-sm font-normal text-muted-foreground">Professional email @ your domain. Billed separately by Google.</span>
                           </Label>
                      </div>
                       {needsEmailHosting && (
                          <div className="pl-8 flex items-center justify-between gap-4">
                              <Label htmlFor="emailUsers" className="text-md flex-1 text-gray-200">Number of Email Users</Label>
                              <Input 
                                  id="emailUsers"
                                  name="emailUsers"
                                  type="number"
                                  min="1"
                                  value={emailUsers}
                                  onChange={(e) => setEmailUsers(Math.max(1, parseInt(e.target.value) || 1))}
                                  className="w-20 bg-gray-700/50 border-gray-600 text-white"
                              />
                          </div>
                       )}

                       <Separator className="my-4 bg-gray-700" />

                       {/* Totals Display */}
                       <div className="space-y-2 text-right">
                           <p className="text-xl font-semibold text-white">Estimated Setup Cost: <span className="text-primary text-2xl font-bold">£{totalSetupCost}</span></p>
                           <p className="text-lg font-semibold text-white">Estimated Monthly Cost: <span className="text-primary text-xl font-bold">£{totalMonthlyCost}</span></p>
                       </div>

                  </CardContent>
              </Card>
           </section>

          {/* --- How It Works Section - MOVED & REPLACED --- */} 
          <Separator className="my-12 md:my-16 bg-gray-700" />
          <section className="mb-16 md:mb-20">
              <Container>
                  <div className="text-center mb-16 md:mb-20">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                          🧾 How It Works
                      </h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                          Our straightforward process to get your website live.
                      </p>
                  </div>
                  
                  <div className="relative max-w-3xl mx-auto">
                      {/* Connecting line */}
                      <div className="absolute left-9 top-0 bottom-0 w-1 bg-gray-800 rounded-full -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

                      {processSteps.map((step, index) => {
                          const IconComponent = step.icon;
                          return (
                          <motion.div 
                              key={index} 
                              className="relative flex items-start gap-6 md:gap-8 mb-12 md:mb-16 last:mb-0"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true, amount: 0.3 }}
                          >
                              {/* Icon */}
                              <div className="flex-shrink-0 relative z-10 flex items-center justify-center w-18 h-18 rounded-full border-4 border-gray-950 shadow-lg bg-gray-800/50">
                                  {/* <div className={`absolute inset-0 rounded-full ${step.bgColor} opacity-50 blur-lg`}></div> */}
                                  <IconComponent className={`w-8 h-8 ${step.color} z-10`} />
                              </div>

                              {/* Text Content */}
                              <div className="flex-1 pt-1">
                                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">{step.title}</h3>
                                  <p className="text-gray-300 leading-relaxed text-lg">{step.description}</p>
                              </div>
                          </motion.div>
                          );
                      })}
                  </div>
              </Container>
          </section>

          {/* Questions Section */}
          <Separator className="my-12 md:my-16 bg-gray-700" />
          <section className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">🗣️ Questions? Tough Ones Welcome.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not sure what you need? Ask away. We'll always give you a straight answer—even if that means recommending something simpler, cheaper, or not us at all.
            </p>
          </section>
          
          {/* Final CTA Section */}
          <Separator className="my-12 md:my-16 bg-gray-700" />
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start?</h2>
            <Button size="lg" asChild>
              <Link href="/start-onboarding/core-package">
                 👉 Start My Website
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">Fill out our detailed form—we'll reply within 1 business day.</p>
          </section>
                      
                    
          {/* Ad Copy Section */}
           <Separator className="my-12 md:my-16 bg-gray-700" />
          <section className="text-center mb-16 md:mb-20 bg-gray-800/30 p-8 rounded-lg border border-gray-700 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-cyan-300">📢 Ad Copy Included</h2>
               <p className="text-lg text-muted-foreground mb-6">Need words too? We'll help write your headlines, calls to action, and page copy.</p>
               <blockquote className="italic text-lg md:text-xl text-foreground border-l-4 border-primary pl-4">
                 "Our sites don't just look good—they speak to your customers."
               </blockquote>
          </section>

        </div>
      </main>

     
    </div>
  )
} 