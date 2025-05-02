'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, CheckCircle } from "lucide-react"
// import { getPackageById } from '@/lib/data/packages' // Keep for potential future use (e.g., pre-filling)
import { submitContactForm } from '@/app/actions/contact-actions'; // Import the Server Action

// Define types for form data
type FormData = {
  fullName: string;
  email: string;
  businessName: string;
  websiteStatus: string;
  siteType: string;
  siteGoal: string;
  siteGoalOther: string;
  siteDescription: string;
  assetsReady: string;
  budget: string;
  timeline: string;
  exampleSites: string;
  otherInfo: string;
};

export default function StartProjectPage() {
  const router = useRouter();
  const params = useParams();
  const packageId = typeof params?.packageId === 'string' ? params.packageId : '';
  // const pkg = packageId ? getPackageById(packageId) : undefined; // Keep if needed later

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    businessName: '',
    websiteStatus: '',
    siteType: '',
    siteGoal: '',
    siteGoalOther: '',
    siteDescription: '',
    assetsReady: '',
    budget: '',
    timeline: '',
    exampleSites: '',
    otherInfo: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    // Basic validation (client-side)
    if (!formData.fullName || !formData.email) {
        setSubmitError("Full Name and Email Address are required.");
        setIsSubmitting(false);
        return;
    }

    console.log("Submitting form data via Server Action...");

    try {
      // Call the Server Action
      const result = await submitContactForm({ ...formData, interestedPackageId: packageId });

      if (result.success) {
        setSubmitSuccess(true);
        // Optionally reset form:
        // setFormData({ ...initial empty state... }); 
      } else {
        setSubmitError(result.error || "An unknown error occurred during submission.");
      }
    } catch (error) {
      console.error("Error calling Server Action:", error);
      setSubmitError("A network or server error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  if (submitSuccess) {
    return (
        <div className="max-w-2xl mx-auto px-4 py-16 md:py-24 text-center">
             <Card className="w-full">
                 <CardHeader>
                     <CardTitle className="flex items-center justify-center gap-2">
                         <CheckCircle className="h-6 w-6 text-green-500" />
                         Form Submitted Successfully!
                     </CardTitle>
                     <CardDescription>We've received your project details.</CardDescription>
                 </CardHeader>
                 <CardContent>
                     <p className="text-muted-foreground mb-6">
                         Thank you for reaching out! We'll review your information and get back to you within 1 business day.
                     </p>
                     <Button onClick={() => router.push('/')}>Return Home</Button>
                 </CardContent>
             </Card>
         </div>
    );
  }


  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Start Your Project</CardTitle>
          <CardDescription>
            Tell us a bit about your project and we'll be in touch within 1 business day.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
              <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>

            {/* Email Address */}
            <div>
              <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            {/* Business Name */}
            <div>
              <Label htmlFor="businessName">Business or Brand Name</Label>
              <Input id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} />
            </div>

            {/* Website Status */}
            <div className="space-y-2">
              <Label>Do you already have a website or domain name?</Label>
              <RadioGroup name="websiteStatus" value={formData.websiteStatus} onValueChange={(value) => handleRadioChange('websiteStatus', value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="both" id="ws-both" />
                  <Label htmlFor="ws-both">Yes, I have both</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="domain-only" id="ws-domain" />
                  <Label htmlFor="ws-domain">I have a domain, but no site</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="neither" id="ws-neither" />
                  <Label htmlFor="ws-neither">No, I need everything</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Site Type */}
             <div className="space-y-2">
              <Label>What type of site are you looking for?</Label>
              <RadioGroup name="siteType" value={formData.siteType} onValueChange={(value) => handleRadioChange('siteType', value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one-page" id="st-one" />
                  <Label htmlFor="st-one">One-page site</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="brochure" id="st-brochure" />
                  <Label htmlFor="st-brochure">3+ page brochure site</Label>
                </div>
                 <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ecommerce" id="st-ecom" />
                  <Label htmlFor="st-ecom">Shopify / E-commerce</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="edits" id="st-edits" />
                  <Label htmlFor="st-edits">Just need edits to an existing site</Label>
                </div>
                 <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="st-other" />
                  <Label htmlFor="st-other">Something else (explain below)</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Site Goal */}
            <div className="space-y-2">
              <Label>What's the goal of your website?</Label>
              <RadioGroup name="siteGoal" value={formData.siteGoal} onValueChange={(value) => handleRadioChange('siteGoal', value)}>
                 <div className="flex items-center space-x-2">
                  <RadioGroupItem value="professional" id="sg-prof" />
                  <Label htmlFor="sg-prof">Look more professional</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="leads" id="sg-leads" />
                  <Label htmlFor="sg-leads">Get more leads/bookings</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sell" id="sg-sell" />
                  <Label htmlFor="sg-sell">Sell products online</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="portfolio" id="sg-port" />
                  <Label htmlFor="sg-port">Showcase portfolio or services</Label>
                </div>
                <div className="flex items-center space-x-2">
                   <RadioGroupItem value="other" id="sg-other" />
                   <Label htmlFor="sg-other">Other:</Label>
                   {formData.siteGoal === 'other' && (
                       <Input 
                           name="siteGoalOther" 
                           value={formData.siteGoalOther} 
                           onChange={handleChange} 
                           placeholder="Please specify" 
                           className="ml-2 h-8"
                       />
                   )}
                </div>
              </RadioGroup>
            </div>

            {/* Site Description */}
            <div>
              <Label htmlFor="siteDescription">Briefly describe what you want on your site.</Label>
              <Textarea id="siteDescription" name="siteDescription" value={formData.siteDescription} onChange={handleChange} placeholder="E.g. sections you need, features, or design inspirations" />
            </div>
            
            {/* Assets Ready */}
            <div className="space-y-2">
              <Label>Do you have your logo, images, and text content ready?</Label>
               <RadioGroup name="assetsReady" value={formData.assetsReady} onValueChange={(value) => handleRadioChange('assetsReady', value)}>
                 <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="ar-yes" />
                  <Label htmlFor="ar-yes">Yes, all ready</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="partially" id="ar-part" />
                  <Label htmlFor="ar-part">Partially</Label>
                </div>
                 <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="ar-no" />
                  <Label htmlFor="ar-no">Not yet</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Budget */}
            <div>
               <Label htmlFor="budget">What's your budget?</Label>
               <Select name="budget" value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                 <SelectTrigger id="budget">
                   <SelectValue placeholder="Select budget range" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="<300">Under £300</SelectItem>
                   <SelectItem value="300-600">£300–£600</SelectItem>
                   <SelectItem value="600-1000">£600–£1,000</SelectItem>
                   <SelectItem value="1000+">£1,000+</SelectItem>
                   <SelectItem value="not-sure">Not sure yet</SelectItem>
                 </SelectContent>
               </Select>
            </div>

            {/* Timeline */}
             <div>
               <Label htmlFor="timeline">When do you need this live?</Label>
               <Select name="timeline" value={formData.timeline} onValueChange={(value) => handleSelectChange('timeline', value)}>
                 <SelectTrigger id="timeline">
                   <SelectValue placeholder="Select timeline" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="asap">ASAP (within 1 week)</SelectItem>
                   <SelectItem value="2-3 weeks">2–3 weeks</SelectItem>
                   <SelectItem value="1 month+">1 month+</SelectItem>
                   <SelectItem value="exploring">Just exploring for now</SelectItem>
                 </SelectContent>
               </Select>
            </div>

            {/* Example Sites */}
            <div>
              <Label htmlFor="exampleSites">Any example websites you like the look of?</Label>
              <Textarea id="exampleSites" name="exampleSites" value={formData.exampleSites} onChange={handleChange} placeholder="Enter URLs or descriptions" />
            </div>

             {/* Other Info */}
            <div>
              <Label htmlFor="otherInfo">Anything else we should know?</Label>
              <Textarea id="otherInfo" name="otherInfo" value={formData.otherInfo} onChange={handleChange} />
            </div>

            {submitError && (
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{submitError}</AlertDescription>
                </Alert>
            )}

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              Submit Project Details
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 