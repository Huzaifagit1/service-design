import { Metadata } from "next";
import { Footer } from "@/components/home/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - ServicePro Design",
  description: "Find answers to common questions about our custom website packages, design process, pricing, and support for service businesses."
};

const faqData = {
  general: [
    {q: "Do I really need a website if I sell through Instagram/Facebook?", a: "Absolutely. Social platforms can change rules or access overnight. Your website is digital real estate you fully control, builds credibility, captures search traffic (people Googling your service!), and provides a reliable hub for info and booking."}, 
    {q: "Is this just another DIY builder like Wix?", a: "Not at all. We custom-design and build your site using professional tools (React/Next.js) for top performance, unique branding, and scalability that DIY platforms can't match. See our comparison on the homepage!"}, 
    {q: "Will my website feel static compared to social media?", a: "We build dynamic sites! We can integrate features like Instagram feeds, booking systems, animated elements, and more to keep it engaging. Plus, a professional site converts visitors far better than a simple social profile."} 
  ],
  packagesPricing: [
    {q: "How much does a website cost up-front?", a: "Our packages start with a one-time setup fee (e.g., £500 for the Entry Package) which covers the custom design and build. We offer clear package pricing and custom quotes."}, 
    {q: "What's the monthly fee for?", a: "The small monthly fee covers essential ongoing services: high-speed hosting, security monitoring, backups, SSL certificate, and basic maintenance to keep your site running smoothly and securely."}, 
    {q: "Are there any hidden extras?", a: "No hidden extras. Our package pricing is transparent. Optional add-ons like advanced features or extra content writing are quoted clearly if needed."}, 
    {q: "Can you work with my budget if cash-flow is tight?", a: "Talk to us! While we have standard packages, we can discuss payment schedules or phased approaches for custom projects, especially around seasonal peaks."} 
  ],
  processTimeline: [
    {q: "How long does it take to launch?", a: "Much faster than you might think! Once we have your info from the simple onboarding form, Entry packages are often live in 5-7 days, with larger packages taking 7-14 days. Our record is 72 hours!"}, 
    {q: "I'm not techy; will this take up all my time?", a: "Definitely not! Our 5-step process is designed for busy business owners. You fill out a simple form (we can even help via WhatsApp!), provide basics like your logo, and we handle the rest. It's designed to be hassle-free."}, 
    {q: "Do I have to write all the website content?", a: "You can provide your own, but you don't have to! Our onboarding form gathers key details about your business. We offer professional copywriting as an add-on service to turn your info into engaging website text."}, 
    {q: "How many revisions do I get?", a: "Our packages include 2-3 rounds of revisions based on your feedback on our initial design preview. We ensure you're happy before launch."} 
  ],
  featuresCapabilities: [
    {q: "Is the site mobile-friendly?", a: "100%! We design mobile-first, meaning your site looks and works perfectly on smartphones and tablets, where most customers will find you."}, 
    {q: "Can customers book or pay on the site?", a: "Yes! Our Premium package includes booking system integration. We can set up secure payment processing (Stripe, PayPal etc.) for bookings or services on relevant packages."}, 
    {q: "Will my Instagram shop and Facebook Pixel work?", a: "Absolutely. We can integrate Meta Pixel, TikTok Pixel, Google Analytics, and embed social feeds so everything tracks and works together seamlessly."} 
  ],
  hostingSupport: [
    {q: "What does the monthly 'Hosting & Support' cover?", a: "It includes reliable, high-speed hosting, SSL certificate (the padlock for security), daily backups, uptime monitoring, and security updates. Basically, peace of mind that your site stays online and secure."}, 
    {q: "What about updates? Will I be stuck learning WordPress?", a: "No WordPress headaches here! The monthly plan covers security/technical updates. For content changes (prices, photos, text), just email our support. Easy editor access can be provided on request for simple tweaks if you prefer."}, 
    {q: "What happens if something breaks?", a: "Our monitoring alerts us instantly to any downtime. We handle backups and fixes to get you back online quickly, often before you even notice."}, 
    {q: "Do I need to worry about domain names (DNS, SSL)?", a: "Nope, we handle it all. We can help you register a domain, or configure your existing one. We manage the DNS settings and ensure your SSL security certificate is always active."}, 
    {q: "Can I cancel anytime?", a: "Yes. Just provide 30 days' notice. We believe in earning your business, not locking you in. We'll even provide your site files if you decide to move elsewhere."} 
  ],
  seoResults: [
    {q: "Will I actually appear on Google? I only sell locally.", a: "Definitely. We optimise your site for local search (e.g., \"Plumber in Bristol\"). While results vary, clients typically see improved local rankings and website traffic within 4-8 weeks, bringing in customers who might not find you on social media."}, 
    {q: "Is this better than just running Facebook ads?", a: "They work together! Ads drive traffic, but a professional, fast website converts that traffic much better than a social profile or slow landing page. Good SEO also brings free, recurring traffic over time, reducing ad dependency."} 
  ],
  onboarding: [
    {q: "What happens after I purchase a website package?", a: "You'll be immediately guided to our simple online onboarding form. Here, you'll provide business details, branding (like logos/colors), content preferences, etc. We use this to build your custom site."}, 
    {q: "I paid but didn't finish onboarding. How do I continue?", a: "Log in to your customer dashboard to resume setup. If needed, use our order lookup tool with your email, then sign in or create an account to access the onboarding form."}, 
    {q: "How long does onboarding take?", a: "Usually 15-30 minutes. You can save and return anytime. Once complete, we start building within 1 business day."}, 
    {q: "What info do I need for onboarding?", a: "Basic business info, any branding elements you have (logo, colors), service details, and content ideas. Don't worry if it's not perfect; we can refine it."}, 
    {q: "I can't find my order confirmation. What now?", a: "Use the order lookup tool with your email. If you still have issues, contact support, and we'll help locate your purchase."} 
  ]
};

export default function FAQsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Answers to common questions about our custom website packages for service businesses.
          </p>

          <div className="max-w-4xl mx-auto space-y-10">
            {Object.entries(faqData).map(([key, faqs]) => (
              <section key={key}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem value={`${key}-item-${index}`} key={index} className="border border-border rounded-lg px-6 bg-card/50">
                      <AccordionTrigger className="text-left text-lg hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground pt-2">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>

          <div className="mt-20 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our support team is here to help you with any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Contact Support
              </a>
              <a href="/packages" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                View Packages
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 