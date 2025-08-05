'use server';


import * as z from 'zod';
import nodemailer from 'nodemailer';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendContactEmail(formData: z.infer<typeof contactFormSchema>) {
  const parsedData = contactFormSchema.safeParse(formData);

  if (!parsedData.success) {
    return { error: 'Invalid data' };
  }

  const { name, email, message } = parsedData.data;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Gmail address from env variable
        pass: process.env.GMAIL_PASS, // Gmail app password from env variable
      },
    });

    // Send message to your email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // user's name and email as sender
      to: 'piyushgurav176@gmail.com', // your receiving email
      replyTo: email, // user's email from frontend
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"Piyush Gurav" <${process.env.GMAIL_USER}>`, // your name and email
      to: email, // user's email
      subject: "Thank you for contacting me!",
      text: `Hi ${name},\n\nI have received your message and will be in touch with you very soon.\n\nBest regards,\nPiyush Gurav`,
      html: `<p>Hi ${name},</p>
             <p>I have received your message and will be in touch with you very soon.</p>
             <p>Best regards,<br/>Piyush Gurav</p>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: 'Failed to send message.' };
  }
}
