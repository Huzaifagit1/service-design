// import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend';
// // import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"; // Remove AWS SES import

// // Instantiate Resend Client - Reads API key from environment variables
// const resend = new Resend(process.env.RESEND_API_KEY);
// // const sesClient = new SESClient({ region: process.env.AWS_REGION }); // Remove SES Client

// // Define the expected structure of the request body (Re-added)
// interface RequestBody {
//   firstName: string;
//   lastName: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// export async function POST(request: NextRequest) {
//   // Ensure RESEND_API_KEY is set before proceeding
//   if (!process.env.RESEND_API_KEY) {
//     console.error("RESEND_API_KEY environment variable is not set.");
//     return NextResponse.json({ error: 'Server configuration error: API key not configured' }, { status: 500 });
//   }
//   // Remove AWS Region check
//   // if (!process.env.AWS_REGION) {
//   //   console.error("AWS_REGION environment variable is not set.");
//   //   return NextResponse.json({ error: 'Server configuration error: AWS region not configured' }, { status: 500 });
//   // }
  
//   try {
//     const body: RequestBody = await request.json();
//     const { firstName, lastName, email, subject: formSubject, message } = body;
//     const fullName = `${firstName} ${lastName}`;

//     // Basic validation
//     if (!firstName || !lastName || !email || !formSubject || !message) {
//       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//     }

//     // AWS Credentials are expected to be in environment variables
//     // Region is checked above

//     // Define recipient and sender email addresses - **FROM email MUST be verified in Resend**
//     const recipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL || 'info@serviceprodesign.com'; // Fallback
//     const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL || 'info@serviceprodesign.com'; // Fallback - MUST BE VERIFIED IN RESEND

//     // Construct email content
//     const emailSubject = `Contact Form: ${formSubject} - ${fullName}`;
//     const emailBodyHtml = `
//       <h1>Contact Form Submission</h1>
//       <p><strong>Name:</strong> ${fullName}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Subject:</strong> ${formSubject}</p>
//       <hr>
//       <h2>Message:</h2>
//       <pre>${message}</pre>
//     `;

//     // Create SendEmailCommand input parameters - Removed
//     // const sendEmailCommandInput = { ... };

//     // Send the email using Resend
//     const { data, error: resendError } = await resend.emails.send({
//       from: `ServicePro Design Contact <${fromEmail}>`, // Use your verified domain/email
//       to: [recipientEmail],
//       subject: emailSubject,
//       html: emailBodyHtml,
//       reply_to: email, // Set the reply-to address
//     });
//     // const command = new SendEmailCommand(sendEmailCommandInput); // Remove SES Command
//     // const response = await sesClient.send(command); // Remove SES Send

//     if (resendError) {
//       console.error("Error sending email via Resend:", resendError);
//       // Use Resend's error message if available
//       const errorMessage = resendError.message || "An unknown error occurred.";
//       return NextResponse.json({ error: `Failed to send message: ${errorMessage}` }, { status: 500 });
//     }

//     console.log("Resend Success Response:", data);
//     return NextResponse.json({ success: true, message: 'Message sent successfully!' });

//   } catch (error) {
//     // Catch other potential errors (e.g., JSON parsing)
//     console.error("Error in POST /api/contact:", error);
//     const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
//     // Return a generic error message to the client
//     return NextResponse.json({ error: `Failed to send message: ${errorMessage}` }, { status: 500 });
//   }
// }
'use client'

import React from 'react'

function route() {
  return (
    <div>
      ger
    </div>
  )
}

export default route;
