import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  if (req.method === "POST") {
    const { email, contact, message } = await req.body;

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    try {
      let info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Quotation for Spyene Services",
        text: message,
      });
      console.success("Message Sent: %s", info.messageId);
      NextResponse.json({
        success: true,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      NextResponse.json({
        success: false,
        error: error.message,
      });
    }
  }
}
