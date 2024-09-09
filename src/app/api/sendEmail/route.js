// /app/api/sendEmail/route.ts
import { NextResponse } from 'next/server';
import emailjs from 'emailjs-com';

export async function POST(request) {
  const { email, contact, message } = await request.json();

  try {
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('EmailJS configuration is missing.');
    }

    const templateParams = {
      email,
      contact,
      message,
    };

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

    if (response.status === 200) {
      return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } else {
      return NextResponse.json({ success: false, message: 'Failed to send email' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Error occurred while sending email' });
  }
}
