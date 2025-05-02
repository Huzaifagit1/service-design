'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  PhoneCall, 
  Clock, 
  MapPin,
  MessageCircle,
  CreditCard,
  HelpCircle,
  Loader2,
  Search,
  Package
} from "lucide-react";
import { Footer } from "@/components/home/Footer";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Show success toast
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Have questions about our website packages, custom solutions, or need support? We're here to help.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        required
                        value={formData.firstName}
                        onChange={handleChange} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Select
                      value={formData.subject}
                      onValueChange={handleSelectChange}
                      required
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="package-question">Question about a Package</SelectItem>
                        <SelectItem value="custom-quote">Request a Custom Quote</SelectItem>
                        <SelectItem value="website-update">Website Update Request</SelectItem>
                        <SelectItem value="billing-inquiry">Billing Inquiry</SelectItem>
                        <SelectItem value="technical-support">Technical Support</SelectItem>
                        <SelectItem value="general-inquiry">General Inquiry / Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we help you?" 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">info@serviceprodesign.com</p>
                      <p className="text-sm text-muted-foreground mt-1">We aim to respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <PhoneCall className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+1 (234) 567-8901</p>
                      <p className="text-sm text-muted-foreground mt-1">Monday-Friday, 9am-6pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">123 Template Street</p>
                      <p className="text-muted-foreground">New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Quick Help</h2>
                
                <div className="space-y-4">
                  <a href="/faqs" className="flex items-center p-3 hover:bg-muted rounded-md transition-colors">
                    <HelpCircle className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <h3 className="font-medium">FAQs</h3>
                      <p className="text-sm text-muted-foreground">Find answers to common questions</p>
                    </div>
                  </a>
                  
                  <a href="/packages" className="flex items-center p-3 hover:bg-muted rounded-md transition-colors">
                    <Package className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <h3 className="font-medium">Packages</h3>
                      <p className="text-sm text-muted-foreground">View our website packages</p>
                    </div>
                  </a>

                  <a href="/customer/orders/lookup" className="flex items-center p-3 hover:bg-muted rounded-md transition-colors">
                    <Search className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <h3 className="font-medium">Order Lookup</h3>
                      <p className="text-sm text-muted-foreground">Find and continue your existing orders</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 