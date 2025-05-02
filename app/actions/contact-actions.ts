'use server'

import { Resend } from 'resend';

// Define the expected structure of the form data
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
  interestedPackageId?: string; // Add the package ID
};

// Instantiate Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the Server Action
export async function submitContactForm(formData: FormData) {
  console.log("Server Action received:", formData);

  // Basic validation on server-side as well
  if (!formData.fullName || !formData.email) {
    return { success: false, error: "Full Name and Email Address are required." };
  }

  // Ensure RESEND_API_KEY is set
  if (!process.env.RESEND_API_KEY) {
     console.error("RESEND_API_KEY is not set in environment variables.");
     return { success: false, error: "Server configuration error." };
  }
  
  // Define recipient email address (replace with your actual receiving address)
  const recipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL || 'info@serviceprodesign.com'; // Use your receiving email
  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL || 'serviceprodesign.com'; // Use your verified Resend domain/email

  try {
    // Construct email content
    const subject = New Project Inquiry: ${formData.businessName || formData.fullName};
    const body = `
      <h1>New Project Inquiry</h1>
      <p><strong>Interested Package ID:</strong> ${formData.interestedPackageId || 'N/A'}</p>
      <p><strong>Full Name:</strong> ${formData.fullName}</p>
      <p><strong>Email Address:</strong> ${formData.email}</p>
      <p><strong>Business Name:</strong> ${formData.businessName || 'N/A'}</p>
      <hr>
      <h2>Project Details:</h2>
      <p><strong>Existing Website/Domain:</strong> ${formData.websiteStatus || 'N/A'}</p>
      <p><strong>Site Type Required:</strong> ${formData.siteType || 'N/A'}</p>
      <p><strong>Website Goal:</strong> ${formData.siteGoal === 'other' ? Other - ${formData.siteGoalOther} : formData.siteGoal || 'N/A'}</p>
      <p><strong>Site Description:</strong></p>
      <pre>${formData.siteDescription || 'N/A'}</pre>
      <hr>
      <h2>Readiness & Logistics:</h2>
      <p><strong>Assets Ready:</strong> ${formData.assetsReady || 'N/A'}</p>
      <p><strong>Budget:</strong> ${formData.budget || 'N/A'}</p>
      <p><strong>Timeline:</strong> ${formData.timeline || 'N/A'}</p>
      <hr>
      <h2>Inspiration & Extra Info:</h2>
      <p><strong>Example Sites:</strong></p>
      <pre>${formData.exampleSites || 'N/A'}</pre>
      <p><strong>Other Info:</strong></p>
      <pre>${formData.otherInfo || 'N/A'}</pre>
    `;

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: ServicePro Design Contact <${fromEmail}>, // Replace Name or use variable
      to: [recipientEmail],
      subject: subject,
      html: body,
      reply_to: formData.email, // Set reply-to for easy response
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error: "Failed to send message." };
    }

    console.log("Resend Success Response:", data);
    return { success: true, message: "Form submitted successfully!" };

  } catch (error) {
    console.error("Error in submitContactForm:", error);
    // Check if error is an instance of Error to access message property safely
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: Server error: ${errorMessage} };
  }
}
