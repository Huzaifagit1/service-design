import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface RequestBody {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY environment variable is not set.");
    return NextResponse.json(
      { error: 'Server configuration error: API key not configured' },
      { status: 500 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const body: RequestBody = await request.json();
    const { firstName, lastName, email, subject: formSubject, message } = body;
    const fullName = ${firstName} ${lastName};

    if (!firstName || !lastName || !email || !formSubject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL || 'info@serviceprodesign.com';
    const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL || 'info@serviceprodesign.com';

    const emailSubject = Contact Form: ${formSubject} - ${fullName};
    const emailBodyHtml = `
      <h1>Contact Form Submission</h1>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${formSubject}</p>
      <hr>
      <h2>Message:</h2>
      <pre>${message}</pre>
    `;

    const { data, error: resendError } = await resend.emails.send({
      from: ServicePro Design Contact <${fromEmail}>,
      to: [recipientEmail],
      subject: emailSubject,
      html: emailBodyHtml,
      reply_to: email,
    });

    if (resendError) {
      console.error("Error sending email via Resend:", resendError);
      return NextResponse.json(
        { error: Failed to send message: ${resendError.message || "Unknown error"} },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error("Error in POST /api/contact:", error);
    return NextResponse.json(
      { error: Failed to send message: ${error instanceof Error ? error.message : "Unknown error"} },
      { status: 500 }
    );
  }
}
