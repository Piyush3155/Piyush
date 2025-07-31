
'use server';


import * as z from 'zod';
import nodemailer from 'nodemailer';

// Hardcoded data based on the user prompt

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

  // IMPORTANT: You must configure your own email transport.
  // This example uses Ethereal, which is a fake SMTP service for testing.
  // To send real emails, you would replace this with your email provider's settings.
  // For example, for Gmail, you would use 'smtp.gmail.com' and your credentials.
  // Be sure to use environment variables to store sensitive information.
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'piyushgurav176@gmail.com', // generated ethereal user
        pass: 'upwd dreb flmg ywve'  // generated ethereal password
    }
  });

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender address
      to: "your-email@example.com", // List of receivers. Replace with your email.
      subject: `New message from ${name} via portfolio`, // Subject line
      text: message, // plain text body
      html: `<b>From:</b> ${name} (${email})<br/><b>Message:</b><p>${message}</p>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: 'Failed to send message.' };
  }
}
