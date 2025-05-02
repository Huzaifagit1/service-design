'use server'

import { Resend } from 'resend';
import { z } from 'zod';

// Define the schema for email validation
const EmailSchema = z.string().email({ message: "Invalid email address." });

// Instantiate Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_NEWSLETTER_AUDIENCE_ID;

// Define the Server Action
export async function subscribeToNewsletter(email: string) {
  console.log("Newsletter Server Action received:", email);

  // Validate email format
  const validationResult = EmailSchema.safeParse(email);
  if (!validationResult.success) {
    return { success: false, error: validationResult.error.errors[0].message };
  }

  // Ensure Resend API Key and Audience ID are set
  if (!process.env.RESEND_API_KEY) {
     console.error("RESEND_API_KEY is not set in environment variables.");
     return { success: false, error: "Server configuration error (API Key missing)." };
  }
  if (!audienceId) {
      console.error("RESEND_NEWSLETTER_AUDIENCE_ID is not set in environment variables.");
      return { success: false, error: "Server configuration error (Audience ID missing)." };
  }
  
  const validatedEmail = validationResult.data;

  try {
    // Add contact to the specified Resend audience
    const { data, error } = await resend.contacts.create({
      email: validatedEmail,
      audienceId: audienceId,
      unsubscribed: false, // Ensure they are subscribed
    });

    if (error) {
      // Handle potential errors, e.g., if the email already exists (might not be an error case)
      // Resend's API might return a specific error code for duplicates
      console.error("Resend API Error:", error);
      // Check if it's a duplicate error (example, adjust based on actual Resend error structure)
      if (error.name === 'validation_error' && error.message.includes('already exists')) {
         return { success: true, message: "You are already subscribed!" }; 
      }
      return { success: false, error: Failed to subscribe: ${error.message} };
    }

    console.log("Resend Success Response (Contact Added):", data);
    return { success: true, message: "Successfully subscribed!" };

  } catch (error) {
    console.error("Error in subscribeToNewsletter:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown server error occurred.";
    return { success: false, error: Server error: ${errorMessage} };
  }
}
