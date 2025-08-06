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
      subject: "Thank you for reaching out! 🚀",
      text: `Hi ${name},\n\nThank you for contacting me through my portfolio! I've received your message and truly appreciate you taking the time to reach out.\n\nI'll review your message carefully and get back to you within 24-48 hours. In the meantime, feel free to check out my latest projects on GitHub or connect with me on LinkedIn.\n\nLooking forward to our conversation!\n\nBest regards,\nPiyush Gurav\nFull Stack Developer`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #7c3aed; margin-bottom: 20px;">Thank you for reaching out! 🚀</h2>
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thank you for contacting me through my portfolio! I've received your message and truly appreciate you taking the time to reach out.</p>
            <p>I'll review your message carefully and get back to you within <strong>24-48 hours</strong>. In the meantime, feel free to check out my latest projects on GitHub or connect with me on LinkedIn.</p>
            <p style="margin-top: 30px;">Looking forward to our conversation!</p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="margin: 0;"><strong>Piyush Gurav</strong></p>
              <p style="margin: 5px 0; color: #666;">Full Stack Developer</p>
              <div style="margin-top: 15px;">
                <a href="https://github.com/piyush3155" style="margin-right: 15px; color: #7c3aed; text-decoration: none;">GitHub</a>
                <a href="https://www.linkedin.com/in/piyush-gurav-674409262/" style="color: #7c3aed; text-decoration: none;">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: 'Failed to send message.' };
  }
}
