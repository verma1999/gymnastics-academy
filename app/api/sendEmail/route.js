import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Ensure credentials are present
    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_PASS = process.env.GMAIL_PASS;

    if (!GMAIL_USER || !GMAIL_PASS) {
      console.error('Email error: missing GMAIL_USER or GMAIL_PASS environment variables');
      return Response.json(
        {
          error: 'Email credentials not configured',
          details:
            'Set GMAIL_USER and GMAIL_PASS (use a Gmail App Password if using Google). ' +
            'For local dev, add them to .env.local and restart the dev server.',
        },
        { status: 500 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    // Verify transporter to provide immediate, clear errors (auth, network, etc.)
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Email error: transporter verification failed:', verifyError);
      return Response.json(
        {
          error: 'Failed to verify email transporter',
          details: verifyError && verifyError.message ? verifyError.message : String(verifyError),
        },
        { status: 500 }
      );
    }

    // Email content
    const emailContent = `
      <h2>New Inquiry from Gymnastics Academy Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email to recipients
    try {
      await transporter.sendMail({
        from: GMAIL_USER,
        to: 'rajeshwari0422@gmail.com, verma.aditya1999@gmail.com',
        subject: `New Inquiry: ${name}`,
        html: emailContent,
        replyTo: email,
      });
    } catch (sendError) {
      console.error('Email send error:', sendError);
      return Response.json(
        {
          error: 'Failed to send email',
          details: sendError && sendError.message ? sendError.message : String(sendError),
        },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}
